import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const TRANSLATED_SLUGS = [
  ["vision-artificial", "computer-vision"],
  ["calculadora-aforo-vehicular", "traffic-count-cost-calculator"],
];

const MARKDOWN_ACCEPT = /(^|,\s*)text\/markdown(\s*;|\s*,|\s*$)/i;

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Las landings de prueba (/landing-1, -2 y -3) se eliminaron: sus URL van a
  // la home por si algún anuncio antiguo todavía apunta a ellas.
  if (/^\/(?:es|en|pt)\/landing-[123](\/.*)?$/.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/es";
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  // Páginas que cambian de slug según el idioma (español, inglés). Portugués
  // no tiene versión propia y va a español.
  for (const [es, en] of TRANSLATED_SLUGS) {
    const match = pathname.match(new RegExp(`^/(es|en|pt)/(${es}|${en})/?$`));
    if (!match) continue;
    const target = match[1] === "en" ? `/en/${en}` : `/es/${es}`;
    if (pathname !== target) {
      const url = request.nextUrl.clone();
      url.pathname = target;
      return NextResponse.redirect(url, 301);
    }
    break;
  }

  // Páginas que solo existen en inglés: sus variantes /es y /pt van a /en.
  const enOnly = pathname.match(/^\/(?:es|pt)\/(how-to-do-a-traffic-count)\/?$/);
  if (enOnly) {
    const url = request.nextUrl.clone();
    url.pathname = `/en/${enOnly[1]}`;
    return NextResponse.redirect(url, 301);
  }

  // Páginas que hoy solo tienen contenido en español (sin traducción real a
  // en/pt). Redirigimos sus variantes /en y /pt a /es con 301 para no dejar
  // duplicados finos indexados. Se pueden re-activar cuando haya traducción.
  const esOnly = pathname.match(
    /^\/(?:en|pt)\/(ai-info|automation|calculadora-vision-artificial|casos-exito|chatbot|evaluador-automatizacion|industries|home-1|home-2|home-3|portafolio|preguntas-frecuentes|privacy-policy|services|success-cases|tos)(\/.*)?$/
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
