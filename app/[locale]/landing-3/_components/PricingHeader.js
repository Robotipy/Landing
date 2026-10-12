"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import { trackLanding } from "./track";
import { container } from "./ui";

const NAV = [
  { id: "paquetes", label: "Paquetes" },
  { id: "evaluador", label: "Evalúa tu proceso" },
  { id: "casos", label: "Casos" },
  { id: "preguntas", label: "Preguntas" },
];

export default function PricingHeader() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const current = NAV.find((n) => visible.get(n.id));
        setActive(current ? current.id : null);
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/10 bg-primary">
      <div className={`${container} flex h-full items-center justify-between gap-6`}>
        <div className="flex shrink-0 items-center gap-3">
          <Image src={logo} alt="" className="h-9 w-9" width={36} height={36} priority />
          <span className="text-xl font-bold text-white">{config.appName}</span>
        </div>

        <nav aria-label="Secciones de la página" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative flex h-16 items-center text-[15px] transition-colors ${
                      isActive ? "text-white" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#agenda"
          onClick={() => trackLanding("landing_cta_click", { location: "header" })}
          className="hidden h-11 shrink-0 items-center rounded-[10px] bg-accent px-5 text-[19px] font-bold leading-none text-white transition hover:brightness-90 md:inline-flex"
        >
          Agenda tu diagnóstico<span className="hidden xl:inline">&nbsp;sin costo</span>
        </a>
      </div>
    </header>
  );
}
