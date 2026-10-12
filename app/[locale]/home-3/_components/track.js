// Variante del home en prueba. Se usa en el parámetro origen del formulario de
// contacto y en landing_variant de GA4. Pasa a "home" cuando esta versión
// reemplace a app/[locale]/page.js.
export const HOME_VARIANT = "home-3";

// Misma forma que trackLanding de landing-3, para comparar las variantes en
// los mismos reportes de GA4.
export function trackHome(event, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { landing_variant: HOME_VARIANT, ...params });
}
