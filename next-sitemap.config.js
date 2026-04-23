const locales = ["es", "en", "pt"];
const defaultLocale = "es";

module.exports = {
  siteUrl: process.env.SITE_URL || "https://robotipy.com",
  generateRobotsTxt: false,
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
  alternateRefs: locales.map((l) => ({
    href: `${process.env.SITE_URL || "https://robotipy.com"}/${l}`,
    hreflang: l,
  })),
  transform: async (config, path) => {
    const localeMatch = path.match(/^\/([a-z]{2})(\/|$)/);
    const pathLocale = localeMatch ? localeMatch[1] : null;
    if (pathLocale && pathLocale !== defaultLocale) {
      return null;
    }
    const pathWithoutLocale = pathLocale ? path.replace(`/${pathLocale}`, "") || "/" : path;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: locales.map((l) => ({
        href: `${config.siteUrl}/${l}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`,
        hreflang: l,
      })),
    };
  },
};
