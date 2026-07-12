import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const MARKDOWN_ACCEPT = /(^|,\s*)text\/markdown(\s*;|\s*,|\s*$)/i;

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Páginas que hoy solo tienen contenido en español (sin traducción real a
  // en/pt). Redirigimos sus variantes /en y /pt a /es con 301 para no dejar
  // duplicados finos indexados. Se pueden re-activar cuando haya traducción.
  const esOnly = pathname.match(
    /^\/(?:en|pt)\/(ai-info|automation|casos-exito|chatbot|industries|portafolio|privacy-policy|services|success-cases|tos)(\/.*)?$/
  );
  if (esOnly) {
    const url = request.nextUrl.clone();
    url.pathname = `/es/${esOnly[1]}${esOnly[2] || ""}`;
    return NextResponse.redirect(url, 301);
  }

  // El blog es de un solo idioma y vive en /blog (sin prefijo de locale).
  // 1) Redirigimos las variantes con prefijo (/es|/en|/pt/blog...) a /blog...
  const localizedBlog = pathname.match(/^\/(?:es|en|pt)\/blog(\/.*)?$/);
  if (localizedBlog) {
    const url = request.nextUrl.clone();
    url.pathname = `/blog${localizedBlog[1] || ""}`;
    return NextResponse.redirect(url, 308);
  }
  // 2) Servimos /blog reescribiendo internamente al render en español, sin
  //    tocar la URL pública ni pasar por el middleware de i18n.
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    const url = request.nextUrl.clone();
    url.pathname = `/es${pathname}`;
    return NextResponse.rewrite(url);
  }

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
