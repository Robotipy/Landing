// Eventos de GA4 de /home-2. Usa gtag si ya cargó; si no, deja el evento en
// dataLayer para que GTM lo recoja cuando termine de cargar.
export const VARIANT = "home-2";

export function trackHome(name, params = {}) {
  if (typeof window === "undefined") return;
  const payload = { variant: VARIANT, ...params };
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, payload);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...payload });
    }
  } catch {
    // La medición nunca debe romper la página.
  }
}
