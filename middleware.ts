import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Skip middleware for static assets, images, and /login
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/static/") ||
    pathname.startsWith("/icons/") ||
    pathname === "/login" || // Exclude login page to prevent redirect loop
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check for the session cookie
  const userCookie = req.cookies.get("session-key"); // Replace with your actual cookie name

  if (!userCookie) {
    console.log("❌ No cookie found, redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log("✅ Cookie found:", userCookie.value);
  return NextResponse.next();
}

// Ensure middleware does NOT apply to /login
export const config = {
  matcher: "/((?!_next|static|icons|favicon.ico|.*\\..*|login).*)",
};
