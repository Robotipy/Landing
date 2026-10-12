"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { trackLanding } from "./track";
import { DEFAULT_INDUSTRY } from "./defaults";

// Sector activo de la página. Lo comparten el hero, el explorador, el
// evaluador y el formulario. El sector inicial llega desde el servidor
// (?industria=) y los cambios se escriben en la URL con history.replaceState.

const IndustryContext = createContext(null);

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function scrollToId(id) {
  if (typeof window === "undefined") return;
  const run = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  };
  window.requestAnimationFrame(() => window.requestAnimationFrame(run));
}

function writeUrl(updates) {
  try {
    const url = new URL(window.location.href);
    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") url.searchParams.delete(key);
      else url.searchParams.set(key, String(value));
    });
    window.history.replaceState(null, "", url.toString());
  } catch {
    // Sin acceso al historial la página sigue funcionando con el estado local.
  }
}

export function IndustryProvider({ initialIndustry = null, initialScore = null, validSlugs = [], children }) {
  const [industry, setIndustry] = useState(initialIndustry);
  const [score, setScoreState] = useState(initialScore);
  const industryRef = useRef(initialIndustry);

  useEffect(() => {
    trackLanding("landing_view", { industria_inicial: initialIndustry || "ninguna" });
    // Solo al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectIndustry = useCallback(
    (slug, origen) => {
      if (!validSlugs.includes(slug)) return;
      const changed = industryRef.current !== slug;
      industryRef.current = slug;
      setIndustry(slug);
      writeUrl({ industria: slug });
      if (changed && origen) trackLanding("landing_industry_select", { industria: slug, origen });
    },
    [validSlugs]
  );

  const setScore = useCallback((value) => {
    setScoreState(value);
    writeUrl({ puntaje: value });
  }, []);

  const value = useMemo(
    () => ({
      industry,
      display: industry || DEFAULT_INDUSTRY,
      score,
      selectIndustry,
      setScore,
    }),
    [industry, score, selectIndustry, setScore]
  );

  return <IndustryContext.Provider value={value}>{children}</IndustryContext.Provider>;
}

export function useIndustry() {
  const ctx = useContext(IndustryContext);
  if (!ctx) throw new Error("useIndustry debe usarse dentro de IndustryProvider");
  return ctx;
}
