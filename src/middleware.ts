import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Get the pathname
    const path = req.nextUrl.pathname;

    // Get user's email from token
    const email = req.nextauth.token?.email;

    // Check if user is trying to access admin routes
    if (path.startsWith("/admin")) {
      // Add your admin email validation here
      if (!email?.endsWith("@straticon.com")) {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    // For all other protected routes, just check if user is authenticated
    // NextAuth withAuth middleware handles this automatically
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

// Protect all routes except public ones
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/property/:path*",
    "/api/admin/:path*",
  ],
};
