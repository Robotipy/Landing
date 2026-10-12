"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";
import { CtaLink } from "./IndustryLink";
import { container } from "./ui";

// Header mínimo de la landing: anclas a secciones de esta misma página y un
// solo botón. Sin selector de idioma ni enlaces a otras páginas del sitio.
export default function LandingHeader({ anchors, ctaLabel }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary">
      <div className={`${container} flex h-16 items-center justify-between gap-6`}>
        <a href="#inicio" className="flex shrink-0 items-center gap-2.5" aria-label={`${config.appName}, volver al inicio`}>
          <Image src={logo} alt="" width={32} height={32} className="h-8 w-8" priority />
          <span className="text-lg font-bold tracking-tight text-white">{config.appName}</span>
        </a>

        <nav aria-label="Secciones de la página" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {anchors.map((a) => (
              <li key={a.id}>
                <a href={`#${a.id}`} className="text-sm font-medium text-white/75 transition-colors hover:text-white">
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <CtaLink
            ubicacion="header"
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-bold text-primary transition hover:brightness-110"
          >
            {ctaLabel}
          </CtaLink>
        </div>

        <button
          type="button"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/20 px-4 text-sm font-semibold text-white lg:hidden"
          aria-label={open ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={open}
          aria-controls="landing-2-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menú
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="landing-2-menu"
        aria-label="Secciones de la página"
        hidden={!open}
        className="border-t border-white/10 bg-primary lg:hidden"
      >
        <ul className={`${container} py-2`}>
          {anchors.map((a) => (
            <li key={a.id}>
              <a
                href={`#${a.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-white/5 text-base font-medium text-white/85 last:border-b-0 hover:text-white"
              >
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
