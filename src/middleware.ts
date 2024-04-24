import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from "next/headers";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  const { device } = userAgent(request);
  const userDevice = "mobile";

  url.searchParams.append("device", userDevice);
  console.log(url.toString());

  if (url.toString().includes("/about-us")) {
    return NextResponse.redirect(new URL("/about", request.url));
  }
  if (url.toString().includes("/contact-us")) {
    return NextResponse.rewrite(new URL("/contact", request.url));
  }

  const headersList = headers();

  // const response = NextResponse.json({});
  // response.headers.set("x-device", userDevice);

  // return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
