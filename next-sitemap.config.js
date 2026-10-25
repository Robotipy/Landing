const locales = ["es", "en", "pt"];
const defaultLocale = "es";
const siteUrl = process.env.SITE_URL || "https://www.robotipy.com";

// El blog (posts, categorias y autores) no va en este sitemap estatico: lo
// sirve app/blog-sitemap.xml/route.js, que se regenera cada hora y respeta las
// fechas de publicacion programadas. Aqui solo se enlaza desde el indice.
const blogSitemapUrl = `${siteUrl}/blog-sitemap.xml`;

// Paginas que solo existen en espanol: el middleware redirige sus variantes
// /en y /pt a /es, asi que no se declaran alternativas de idioma.
const esOnlyPrefixes = [
  "/ai-info",
  "/automation",
  "/calculadora-aforo-vehicular",
  "/calculadora-vision-artificial",
  "/casos-exito",
  "/chatbot",
  "/evaluador-automatizacion",
  "/industries",
  "/portafolio",
  "/preguntas-frecuentes",
  "/privacy-policy",
  "/services",
  "/success-cases",
  "/tos",
];

// Paginas con slug distinto en ingles (ruta en espanol: ruta en ingles). Se
// publican las dos versiones con hreflang entre ellas; portugues redirige a
// espanol desde middleware.js.
const translatedPages = { "/vision-artificial": "/computer-vision" };
const translatedFromEn = Object.fromEntries(
  Object.entries(translatedPages).map(([es, en]) => [en, es])
);

const isEsOnly = (pathWithoutLocale) =>
  esOnlyPrefixes.some(
    (prefix) => pathWithoutLocale === prefix || pathWithoutLocale.startsWith(`${prefix}/`)
  );

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  autoLastmod: false,
  exclude: [
    "/twitter-image.*",
    "/opengraph-image.*",
    "/icon.*",
    "/robots.txt",
    "/sitemap.xml",
    "/sitemap-*.xml",
    "/llms.txt",
    "/blog-sitemap.xml",
    "/api/*",
    // Propuestas de rediseño: noindex y fuera del sitemap.
    "/*/landing-*",
    "/*/home-*",
    // Propuestas de diseño de visión artificial: noindex.
    "/*/propuesta-vision-*",
    // Postulaciones: noindex.
    "/*/trabaja-con-nosotros",
    // La version en ingles de vision artificial no existe en /es ni /pt.
    "/es/computer-vision",
    // El blog vive en /blog sin prefijo de idioma y tiene su propio sitemap.
    "/*/blog",
    "/*/blog/*",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [blogSitemapUrl],
  },
  transform: async (config, p) => {
    const localeMatch = p.match(/^\/([a-z]{2})(\/|$)/);
    const pathLocale = localeMatch ? localeMatch[1] : null;
    const pathAfterLocale = pathLocale ? p.replace(`/${pathLocale}`, "") || "/" : p;
    const esPath =
      pathLocale === "en"
        ? translatedFromEn[pathAfterLocale]
        : pathLocale === defaultLocale && translatedPages[pathAfterLocale]
          ? pathAfterLocale
          : null;
    if (esPath) {
      return {
        loc: p,
        changefreq: config.changefreq,
        priority: config.priority,
        alternateRefs: [
          { href: `${config.siteUrl}/es${esPath}`, hreflang: "es" },
          { href: `${config.siteUrl}/en${translatedPages[esPath]}`, hreflang: "en" },
        ].map((ref) => ({ ...ref, hrefIsAbsolute: true })),
      };
    }
    if (pathLocale && pathLocale !== defaultLocale) {
      return null;
    }
    const pathWithoutLocale = pathLocale ? p.replace(`/${pathLocale}`, "") || "/" : p;
    const suffix = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
    const alternateLocales = isEsOnly(pathWithoutLocale) ? [] : locales;
    return {
      loc: p,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: alternateLocales.map((l) => ({
        href: `${config.siteUrl}/${l}${suffix}`,
        hreflang: l,
        // next-sitemap por defecto concatena `loc` al final de `href`. Como
        // aqui ya construimos la URL completa, lo deshabilitamos.
        hrefIsAbsolute: true,
      })),
    };
  },
};
