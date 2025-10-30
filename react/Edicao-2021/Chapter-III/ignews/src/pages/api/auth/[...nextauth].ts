import NextAuth, { type AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { createUser, getSubscriptionByUserEmail } from "../../../Models/User";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: { params: { scope: "read:user" } },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const userEmail = session.user.email;
      const userActiveSubscription =
        await getSubscriptionByUserEmail(userEmail);
        
      return { ...session, activeSubscription: userActiveSubscription };
    },
    async signIn({ user, account, profile }) {
      try {
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          provider: account.provider,
          updatedAt: new Date(),
        };

        await createUser(userData);

        return true;
      } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      // redirecionar para um lugar específico
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
