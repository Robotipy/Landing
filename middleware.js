import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const MARKDOWN_ACCEPT = /(^|,\s*)text\/markdown(\s*;|\s*,|\s*$)/i;

export default function middleware(request) {
  const accept = request.headers.get("accept") || "";
  if (request.method === "GET" && MARKDOWN_ACCEPT.test(accept)) {
    const url = request.nextUrl.clone();
    const originalPath = request.nextUrl.pathname;
    const originalSearch = request.nextUrl.search;
    url.pathname = "/api/markdown";
    url.search = "";
    const headers = new Headers(request.headers);
    headers.set("x-md-source-path", originalPath);
    headers.set("x-md-source-search", originalSearch);
    return NextResponse.rewrite(url, { request: { headers } });
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|favicon.ico|icon.png|opengraph-image.png|twitter-image.png|robots.txt|sitemap.xml|images|fonts|.*\\..*).*)",
  ],
};
