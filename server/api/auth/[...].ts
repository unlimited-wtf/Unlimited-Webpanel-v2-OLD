import { NuxtAuthHandler } from '#auth';
import type { User, Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import DiscordProvider from 'next-auth/providers/discord';
import MYSQL from '~/server/db';
import { usePermissions } from '~/server/utils/usePermissions'; 

const { getPermissions } = usePermissions();

const scopes = ['identify'].join(' ');

export default NuxtAuthHandler({
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: '/auth/login'
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        DiscordProvider.default({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: { params: { scope: scopes } }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: User }) {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                // Add discordId to token
                token.uid = user.id;

                // Insert/update user in users table
                await MYSQL.query(
                    'INSERT INTO unl_users (discordId, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE discordId = ?, name = ?',
                    [token.uid, user.name, token.uid, user.name]
                );
            }

            // Get the user's permissions and save to permissions cache
            const permissions = await getPermissions(token.uid);
            useStorage('permissions').setItem(token.uid, permissions);

            // Is the user a master?
            token.isMaster = token.uid == process.env.DISCORD_MASTER_ID;

            // Everyone is a master in preview mode (only needed for https://preview.unlimited.wtf)
            if (process.env.IS_PREVIEW === 'true') {
                token.isMaster = true;
            }

            return Promise.resolve(token);
        },
        session: async ({ session, token }: { session: Session; token: JWT }) => {
            session.isMaster = token.isMaster;
            session.uid = token.uid;

            return Promise.resolve(session);
        }
    }
});
