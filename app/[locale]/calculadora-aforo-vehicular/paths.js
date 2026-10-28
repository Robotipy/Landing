import config from "@/config";

// La calculadora existe en español (/es/calculadora-aforo-vehicular) y en
// inglés (/en/traffic-count-cost-calculator). Portugués redirige a español
// desde middleware.js.
export const PATHS = {
  es: "/calculadora-aforo-vehicular",
  en: "/traffic-count-cost-calculator",
};

export const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;
export const pageUrl = (locale) => `${siteOrigin}/${locale}${PATHS[locale]}`;

// hreflang entre las dos versiones (getSEOTags asume el mismo slug en todos
// los idiomas, y aquí el slug cambia).
export const alternates = (locale) => ({
  canonical: pageUrl(locale),
  languages: {
    "es-ES": pageUrl("es"),
    "en-US": pageUrl("en"),
    "x-default": pageUrl("es"),
  },
});
