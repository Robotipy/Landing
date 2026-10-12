"use client";

import { trackHome } from "./track";
import { AppLink } from "./ui";

// Enlace que registra un evento de GA4 al hacer clic. Por defecto mide los
// botones de contacto (landing_cta_click); las herramientas usan
// event="home_tool_click" y las filas de la ficha de precios "home_price_click".
export default function TrackedLink({ href, event = "landing_cta_click", params, children, ...rest }) {
  return (
    <AppLink href={href} onClick={() => trackHome(event, params)} {...rest}>
      {children}
    </AppLink>
  );
}
