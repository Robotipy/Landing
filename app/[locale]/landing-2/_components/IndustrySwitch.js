"use client";

import { useIndustry } from "./IndustryContext";

// Muestra el contenido del sector activo. Todas las variantes llegan
// renderizadas desde el servidor y las inactivas quedan con hidden.
export default function IndustrySwitch({ items, fallback, className = "", live = true }) {
  const { display } = useIndustry();
  const current = items.some((item) => item.slug === display) ? display : fallback;

  return (
    <div className={className} aria-live={live ? "polite" : undefined}>
      {items.map((item) => (
        <div key={item.slug} hidden={item.slug !== current}>
          {item.node}
        </div>
      ))}
    </div>
  );
}
