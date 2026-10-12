"use client";

import { scrollToId, useIndustry } from "./IndustryContext";
import { trackLanding } from "./track";

const isPlainClick = (e) => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

// Enlace interno que fija el sector y baja a una sección de esta página.
// Sin JavaScript, el href recarga la página con ?industria= y el ancla.
export function IndustryLink({ slug, target, origen, ubicacion, className = "", children, ...rest }) {
  const { selectIndustry } = useIndustry();
  const href = `?industria=${encodeURIComponent(slug)}#${target}`;

  const onClick = (e) => {
    if (!isPlainClick(e)) return;
    e.preventDefault();
    selectIndustry(slug, origen);
    if (ubicacion) trackLanding("landing_cta_click", { ubicacion, industria: slug });
    scrollToId(target);
  };

  return (
    <a href={href} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  );
}

// Botón de diagnóstico que respeta el sector ya elegido (header, hero, barra móvil).
export function CtaLink({ ubicacion, className = "", children, onNavigate }) {
  const { industry } = useIndustry();
  const href = industry ? `?industria=${encodeURIComponent(industry)}#diagnostico` : "#diagnostico";

  const onClick = (e) => {
    if (!isPlainClick(e)) return;
    e.preventDefault();
    trackLanding("landing_cta_click", { ubicacion, industria: industry || "ninguna" });
    if (onNavigate) onNavigate();
    scrollToId("diagnostico");
  };

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
