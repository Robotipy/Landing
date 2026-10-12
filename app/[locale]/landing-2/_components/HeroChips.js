"use client";

import { useIndustry } from "./IndustryContext";

// Selector de sector del hero. Marca el sector activo, cambia la ficha de la
// derecha y la pestaña del explorador, y deja ?industria= en la URL.
export default function HeroChips({ sectors }) {
  const { display, selectIndustry } = useIndustry();

  return (
    <div role="group" aria-labelledby="hero-sector-label">
      <p id="hero-sector-label" className="text-sm font-medium text-white/80">
        ¿En qué sector está tu empresa?
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {sectors.map((sector) => {
          const active = display === sector.slug;
          return (
            <li key={sector.slug}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => selectIndustry(sector.slug, "hero")}
                className={`min-h-10 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  active
                    ? "border-accent bg-accent text-primary"
                    : "border-white/20 text-white/85 hover:border-white/50 hover:text-white"
                }`}
              >
                {sector.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
