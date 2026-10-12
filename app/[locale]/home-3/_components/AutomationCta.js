"use client";

import { Link } from "@/i18n/routing";
import { contactHref } from "@/libs/landingFacts";
import { useLicense } from "./LicenseProvider";
import { HOME_VARIANT, trackHome } from "./track";

// Botón de la etapa 02. Si el visitante respondió la pregunta de licencia, la
// respuesta viaja al formulario como licencia_rocketbot=si|no.
export default function AutomationCta({ className, children }) {
  const { license } = useLicense();
  const extra = { servicio: "automatizacion", ...(license ? { licencia_rocketbot: license } : {}) };

  return (
    <Link
      href={contactHref(HOME_VARIANT, extra)}
      className={className}
      onClick={() =>
        trackHome("landing_cta_click", {
          location: "etapa-02",
          ...(license ? { licencia_rocketbot: license } : {}),
        })
      }
    >
      {children}
    </Link>
  );
}
