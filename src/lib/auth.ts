import { NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
      authorization: {
        params: {
          prompt: "login",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "azure-ad") {
        // Only allow @straticon.com emails
        return profile?.email?.endsWith("@straticon.com") ?? false;
      }
      return false;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
        // Add user role based on email domain or other criteria
        session.user.role = session.user.email?.includes("admin") ? "ADMIN" : "USER";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
}
