"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "./IndustryLink";
import { ctaClass } from "./ui";

const HIDE_WHEN_VISIBLE = ["diagnostico", "evaluar"];

// Barra fija inferior en móvil. Se oculta cuando el evaluador o el
// formulario están a la vista, y cuando hay un campo con foco.
export default function MobileStickyCta({ label }) {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [fieldFocused, setFieldFocused] = useState(false);

  useEffect(() => {
    const targets = HIDE_WHEN_VISIBLE.map((id) => document.getElementById(id)).filter(Boolean);
    if (!targets.length || typeof IntersectionObserver === "undefined") return undefined;
    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setSectionVisible(visible.size > 0);
      },
      { threshold: 0.05 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const isField = (el) => el instanceof Element && el.matches("input, select, textarea");
    const onFocusIn = (e) => setFieldFocused(isField(e.target));
    const onFocusOut = () => setFieldFocused(false);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  const hidden = sectionVisible || fieldFocused;

  return (
    <div
      inert={hidden}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-primary/95 px-4 pt-3 backdrop-blur transition-transform duration-200 lg:hidden ${
        hidden ? "pointer-events-none translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
    >
      <CtaLink ubicacion="sticky" className={`${ctaClass} w-full`}>
        {label}
      </CtaLink>
    </div>
  );
}
