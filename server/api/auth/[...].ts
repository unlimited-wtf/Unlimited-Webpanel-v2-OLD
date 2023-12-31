import { NuxtAuthHandler } from '#auth';
import DiscordProvider, { DiscordProfile } from 'next-auth/providers/discord';

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
        async jwt({ token, user }) {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                (token as any).uid = (user as DiscordProfile).id;
            }

            (token as any).isMaster = token.uid == process.env.DISCORD_MASTER_ID;

            return Promise.resolve(token);
        },
        session: async ({ session, token }) => {
            (session as any).isMaster = token.isMaster;
            (session as any).uid = token.uid;

            return Promise.resolve(session);
        }
    }
});
