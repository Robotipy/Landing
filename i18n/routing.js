import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["es", "en", "pt"],
  defaultLocale: "es",
  localePrefix: "always",
  localeDetection: true,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});

export const localeNames = {
  es: "Español",
  en: "English",
  pt: "Português",
};

export const ogLocaleMap = {
  es: "es_ES",
  en: "en_US",
  pt: "pt_BR",
};

export const htmlLangMap = {
  es: "es-ES",
  en: "en-US",
  pt: "pt-BR",
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
