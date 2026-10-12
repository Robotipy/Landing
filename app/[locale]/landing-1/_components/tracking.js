"use client";

import { useEffect } from "react";
import NextLink from "next/link";
import { Link as IntlLink } from "@/i18n/routing";
import { VARIANT } from "./variant";

export function trackLanding(event, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { landing_variant: VARIANT, ...params });
}

export function LandingView() {
  useEffect(() => {
    trackLanding("landing_view");
  }, []);
  return null;
}

export function TrackedAnchor({ href, location, className, children }) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackLanding("landing_cta_click", { cta_location: location })}
    >
      {children}
    </a>
  );
}

// Enlace de contenido: localized usa el Link de next-intl (rutas con /es);
// sin localized usa next/link (el blog vive en /blog sin prefijo de idioma).
export function TrackedLink({ href, destination, localized = false, newTab = true, className, children }) {
  const Component = localized ? IntlLink : NextLink;
  return (
    <Component
      href={href}
      className={className}
      {...(newTab ? { target: "_blank", rel: "noopener" } : {})}
      onClick={() => trackLanding("landing_content_click", { destination: destination || href })}
    >
      {children}
    </Component>
  );
}
