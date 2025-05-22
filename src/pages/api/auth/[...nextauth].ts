import NextAuth from "next-auth";
import MicrosoftProvider from "next-auth/providers/azure-ad";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    MicrosoftProvider({
      clientId: process.env.MICROSOFT_CLIENT_ID || "",
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET || "",
      tenantId: process.env.MICROSOFT_TENANT_ID || "",
      authorization: {
        params: {
          scope: "openid profile email User.Read",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Implement access control based on email domain or user attributes
      if (user.email?.endsWith("@straticon.com")) {
        return true;
      }
      return false;
    },
    async session({ session, token, user }) {
      // Add custom session properties if needed
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
