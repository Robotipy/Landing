"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { trackLanding } from "./track";

// Estado compartido entre widgets: el evaluador y la calculadora dejan su
// resumen (sin datos personales) y el bloque de cierre lo suma al enlace
// del formulario de contacto.
const LandingStateContext = createContext(null);

const fallback = {
  evaluation: null,
  payback: null,
  setEvaluation: () => {},
  setPayback: () => {},
};

export function LandingStateProvider({ children }) {
  const [evaluation, setEvaluation] = useState(null);
  const [payback, setPayback] = useState(null);

  useEffect(() => {
    trackLanding("landing_view");
  }, []);

  const value = useMemo(
    () => ({ evaluation, setEvaluation, payback, setPayback }),
    [evaluation, payback]
  );

  return (
    <LandingStateContext.Provider value={value}>{children}</LandingStateContext.Provider>
  );
}

export function useLandingState() {
  return useContext(LandingStateContext) ?? fallback;
}
