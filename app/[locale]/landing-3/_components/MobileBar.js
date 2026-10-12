"use client";

import { useEffect, useState } from "react";
import { trackLanding } from "./track";
import { btnPrimary } from "./ui";

// Barra fija en móvil. Se esconde mientras el evaluador (que tiene su propia
// barra de progreso) o el bloque de agenda están en pantalla.
export default function MobileBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const targets = ["evaluador", "agenda"].map((id) => document.getElementById(id)).filter(Boolean);
    const state = new Map();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => state.set(e.target.id, e.isIntersecting));
      setHidden([...state.values()].some(Boolean));
    });
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-primary/95 px-4 pt-3 backdrop-blur transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
    >
      <a
        href="#agenda"
        tabIndex={hidden ? -1 : undefined}
        onClick={() => trackLanding("landing_cta_click", { location: "mobile_bar" })}
        className={`${btnPrimary} w-full`}
      >
        Agenda tu diagnóstico sin costo
      </a>
    </div>
  );
}
