import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GH_CLIENT_ID ?? '',
      clientSecret: process.env.GH_CLIENT_SECRET ?? '',
    }),
    // ...add more providers here
  ],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }