import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/static/") ||
    pathname.startsWith("/icons/") ||
    pathname === "/login" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const userCookie = req.cookies.get("session-key"); // Replace with your actual cookie name

  /*
  if (!userCookie) {
    return NextResponse.redirect(new URL("/login", req.url));
  }


*/
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|static|icons|favicon.ico|.*\\..*|login).*)",
};
