import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { db, dbAdmin } from "../../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase-admin/auth";

export const authOptions = {
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
    async signIn({ user, account, profile }) {
      try {
        const userRef = dbAdmin.collection("users").doc(user.id);
        await userRef.set(
          {
            name: user.name,
            email: user.email,
            image: user.image,
            provider: account.provider,
            updatedAt: new Date(),
          },
          { merge: true }
        );
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
