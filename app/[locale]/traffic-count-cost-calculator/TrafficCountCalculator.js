"use client";

import AforoCalculator from "../calculadora-aforo-vehicular/components/AforoCalculator";
import { EN_COPY, EN_DEFAULTS, SIGNUP_URL } from "./data";

// El texto en inglés incluye funciones, que no pueden cruzar de un Server
// Component a uno de cliente; por eso se pasa desde aquí.
export default function TrafficCountCalculator() {
  return <AforoCalculator copy={EN_COPY} defaults={EN_DEFAULTS} signupUrl={SIGNUP_URL} />;
}
