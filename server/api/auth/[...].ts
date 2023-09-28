import { NuxtAuthHandler } from '#auth';
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
        async jwt({ token, account, profile }) {
            if (account) {
                (token as any).uid = (profile as any).id;
            }

            return token;
        },
        session: async ({ session, token }) => {
            console.log(`Token: ${JSON.stringify(token)}`);

            return Promise.resolve(session);
        }
    }
});
