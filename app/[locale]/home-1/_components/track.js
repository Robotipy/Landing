"use client";

import { useEffect } from "react";
import NextLink from "next/link";
import { Link as IntlLink } from "@/i18n/routing";
import { VARIANT } from "./variant";

// Eventos de GA4 de /home-1. Usa gtag si ya cargó; si no, deja el evento en
// dataLayer para que GTM lo recoja cuando termine de cargar.
export function trackHome(name, params = {}) {
  if (typeof window === "undefined") return;
  const payload = { landing_variant: VARIANT, ...params };
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, payload);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...payload });
    }
  } catch {
    // La medición nunca debe romper la página.
  }
}

export function HomeView() {
  useEffect(() => {
    trackHome("home_view");
  }, []);
  return null;
}

// Enlace único del home. Elige el componente según el destino:
// - "#ancla": <a> en la misma página.
// - "https://...": pestaña nueva con rel noopener.
// - "/blog...": next/link, porque el blog vive en /blog sin prefijo de idioma.
// - resto del sitio: Link de next-intl (agrega /es), en la misma pestaña.
// Si recibe event, dispara ese evento con params al hacer clic.
export function TLink({ href, event, params, className, children, ...rest }) {
  const onClick = event ? () => trackHome(event, params) : undefined;

  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={onClick} className={className} {...rest}>
        {children}
      </a>
    );
  }

  if (/^https?:\/\//i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className} {...rest}>
        {children}
      </a>
    );
  }

  if (href === "/blog" || href.startsWith("/blog/")) {
    return (
      <NextLink href={href} onClick={onClick} className={className} {...rest}>
        {children}
      </NextLink>
    );
  }

  return (
    <IntlLink href={href} onClick={onClick} className={className} {...rest}>
      {children}
    </IntlLink>
  );
}
