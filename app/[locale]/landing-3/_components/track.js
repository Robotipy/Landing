export const LANDING_VARIANT = "landing-3";

// Eventos de GA4 comunes a las tres landings, con la variante como parámetro.
export function trackLanding(event, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { landing_variant: LANDING_VARIANT, ...params });
}
