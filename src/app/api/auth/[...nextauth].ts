import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { scopes } from "~/app/configs/spotify";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scopes,
        },
      },
    }),
    // ...add more providers here
  ],
  // pages: {
  //   signIn: "/login",
  // },
};
export default NextAuth(authOptions);
