const fs = require("fs");
const path = require("path");

const locales = ["es", "en", "pt"];
const defaultLocale = "es";
const siteUrl = process.env.SITE_URL || "https://www.robotipy.com";

// Lee slug y fechas de cada post del blog desde el filesystem.
// Cada archivo en app/[locale]/blog/_assets/posts/ se llama <slug>.js y
// declara publishedAt (y opcionalmente updatedAt) como "YYYY-MM-DD".
const postsDir = path.join(__dirname, "app", "[locale]", "blog", "_assets", "posts");
const readDate = (source, field) => {
  const match = source.match(new RegExp(`${field}:\\s*"(\\d{4}-\\d{2}-\\d{2})"`));
  return match ? match[1] : null;
};
const blogPosts = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith(".js"))
  .map((f) => {
    const source = fs.readFileSync(path.join(postsDir, f), "utf8");
    const publishedAt = readDate(source, "publishedAt");
    return {
      slug: f.replace(/\.js$/, ""),
      lastmod: readDate(source, "updatedAt") || publishedAt,
    };
  });
const latestPostDate = blogPosts
  .map((p) => p.lastmod)
  .filter(Boolean)
  .sort()
  .pop();

// Slugs de categorias y autores (sincronizados con categories.js y authors.js).
// Si agregas o quitas categorias/autores, actualiza estas listas.
const categorySlugs = [
  "RPA",
  "Tutoriales",
  "agtech",
  "fintech",
  "logistica",
  "capacitacion",
  "casos-de-exito",
];
const authorSlugs = ["danilo-toro", "gabriel-toro", "ivan-cabrera"];

// Paginas que solo existen en espanol: el middleware redirige sus variantes
// /en y /pt a /es, asi que no se declaran alternativas de idioma.
const esOnlyPrefixes = [
  "/ai-info",
  "/automation",
  "/casos-exito",
  "/chatbot",
  "/industries",
  "/portafolio",
  "/preguntas-frecuentes",
  "/privacy-policy",
  "/services",
  "/success-cases",
  "/tos",
];
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
    "/api/*",
    // El blog vive en /blog sin prefijo de idioma; se agrega en additionalPaths.
    "/*/blog",
    "/*/blog/*",
  ],
  additionalPaths: async () => [
    { loc: "/blog", lastmod: latestPostDate },
    ...blogPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.lastmod || undefined,
    })),
    ...categorySlugs.map((slug) => ({ loc: `/blog/category/${slug}` })),
    ...authorSlugs.map((slug) => ({ loc: `/blog/author/${slug}` })),
  ],
  transform: async (config, p) => {
    const localeMatch = p.match(/^\/([a-z]{2})(\/|$)/);
    const pathLocale = localeMatch ? localeMatch[1] : null;
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
