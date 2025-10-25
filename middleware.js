// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;
  // 🔹 Login page, anyone can visit
  if (pathname.startsWith("/admin-login")) {
    if (token) {
      // যদি already logged in থাকে → redirect to dashboard
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // 🔹 Dashboard pages, only logged in users
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin-login", req.url));
    }

    return NextResponse.next();
  }

  // 🔹 Public pages, no check
  return NextResponse.next();
}

// Middleware apply to multiple pages
export const config = {
  matcher: ["/admin-login", "/dashboard/:path*"],
};
