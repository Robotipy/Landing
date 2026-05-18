const fs = require("fs");
const path = require("path");

const locales = ["es", "en", "pt"];
const defaultLocale = "es";
const siteUrl = process.env.SITE_URL || "https://www.robotipy.com";

// Lee los slugs de los posts del blog desde el filesystem.
// Cada archivo en app/[locale]/blog/_assets/posts/ se llama <slug>.js.
const postsDir = path.join(__dirname, "app", "[locale]", "blog", "_assets", "posts");
const blogSlugs = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith(".js"))
  .map((f) => f.replace(/\.js$/, ""));

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
const authorSlugs = ["danilo-toro", "gabriel-toro"];

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  exclude: [
    "/twitter-image.*",
    "/opengraph-image.*",
    "/icon.*",
    "/robots.txt",
    "/sitemap.xml",
    "/sitemap-*.xml",
  ],
  alternateRefs: locales.map((l) => ({
    href: `${siteUrl}/${l}`,
    hreflang: l,
  })),
  additionalPaths: async (config) => {
    // Construye entradas para todas las rutas dinamicas del blog en el
    // locale default. La funcion transform agrega los alternateRefs.
    const dynamicPaths = [
      ...blogSlugs.map((slug) => `/${defaultLocale}/blog/${slug}`),
      ...categorySlugs.map((slug) => `/${defaultLocale}/blog/category/${slug}`),
      ...authorSlugs.map((slug) => `/${defaultLocale}/blog/author/${slug}`),
    ];
    const results = [];
    for (const p of dynamicPaths) {
      const entry = await config.transform(config, p);
      if (entry) results.push(entry);
    }
    return results;
  },
  transform: async (config, p) => {
    const localeMatch = p.match(/^\/([a-z]{2})(\/|$)/);
    const pathLocale = localeMatch ? localeMatch[1] : null;
    if (pathLocale && pathLocale !== defaultLocale) {
      return null;
    }
    const pathWithoutLocale = pathLocale ? p.replace(`/${pathLocale}`, "") || "/" : p;
    return {
      loc: p,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: locales.map((l) => ({
        href: `${config.siteUrl}/${l}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`,
        hreflang: l,
        // next-sitemap por defecto concatena `loc` al final de `href`. Como
        // aqui ya construimos la URL completa, lo deshabilitamos.
        hrefIsAbsolute: true,
      })),
    };
  },
};
