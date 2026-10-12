"use client";

import { useEffect } from "react";
import { trackHome } from "./track";

// Un solo oyente de clics para toda la página: registra los elementos con
// data-track (selectores del hero, celdas del mapa y botones de diagnóstico)
// y cierra los selectores del hero al elegir una opción o al hacer clic fuera.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const tracked = target.closest("[data-track]");
      if (tracked) {
        trackHome(tracked.getAttribute("data-track"), {
          item: tracked.getAttribute("data-track-item") || undefined,
        });
      }

      document.querySelectorAll("details[data-selector][open]").forEach((menu) => {
        if (!menu.contains(target) || target.closest("a")) menu.removeAttribute("open");
      });
    };

    const onKey = (event) => {
      if (event.key !== "Escape") return;
      const open = document.querySelector("details[data-selector][open]");
      if (!open) return;
      open.removeAttribute("open");
      open.querySelector("summary")?.focus();
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
