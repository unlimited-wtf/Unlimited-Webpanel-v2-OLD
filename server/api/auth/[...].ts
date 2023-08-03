import { NuxtAuthHandler } from "#auth";
import DiscordProvider from "next-auth/providers/discord";

const scopes = ["identify"].join(" ");

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    DiscordProvider.default({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: scopes } }
    })
  ]
});
