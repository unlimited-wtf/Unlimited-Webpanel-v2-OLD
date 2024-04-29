import { NuxtAuthHandler } from '#auth';
import type { User, Session } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import DiscordProvider from 'next-auth/providers/discord';

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
                token.uid = user.id;
            }

            token.isMaster = token.uid == process.env.DISCORD_MASTER_ID;

            if (process.env.IS_PREVIEW) {
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
