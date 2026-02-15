import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Avoid infinite redirect loop for the suspended page itself
  if (pathname === "/suspended") {
    return NextResponse.next();
  }

  // 2. Allow static files and internal Next.js paths to ensure the suspended page renders correctly
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // matches favicon.ico, images, etc.
  ) {
    return NextResponse.next();
  }

  // 3. Redirect everything else to the suspended page
  return NextResponse.redirect(new URL("/suspended", request.url));
}

// Optional: Optimize middleware by using a matcher to skip unnecessary checks
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|suspended).*)",
  ],
};
