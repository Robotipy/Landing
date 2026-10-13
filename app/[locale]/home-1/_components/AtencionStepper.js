"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Pasos de la atención con IA: al elegir un paso cambia la pantalla.
// Funciona como pestañas verticales (flechas arriba y abajo para moverse).
export default function AtencionStepper({ steps }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);

  const onKeyDown = (event, index) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = null;
    if (event.key in keys) next = (index + keys[event.key] + steps.length) % steps.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = steps.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
      <div role="tablist" aria-orientation="vertical" aria-label="Cómo funciona la atención con IA" className="flex flex-col gap-3 lg:col-span-5">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={step.title}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              id={`atencion-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="atencion-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => onKeyDown(event, i)}
              className={`group flex w-full items-start gap-4 rounded-2xl p-5 text-left transition-colors duration-300 ${
                isActive ? "bg-white text-primary shadow-xl" : "text-white hover:bg-white/10"
              }`}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg font-bold transition-colors ${
                  isActive ? "bg-accent text-primary" : "bg-white/10 text-white ring-1 ring-white/25"
                }`}
              >
                {i + 1}
              </span>
              <span className="block">
                <span className="block text-lg font-semibold leading-snug sm:text-xl">{step.title}</span>
                {isActive ? (
                  <span className="mt-2 block text-base leading-relaxed text-slate-600 sm:text-lg">{step.text}</span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="atencion-panel"
        role="tabpanel"
        aria-labelledby={`atencion-tab-${active}`}
        className="lg:col-span-7"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-white/5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/15">
          {steps.map((step, i) => (
            <Image
              key={step.src}
              src={step.src}
              alt={i === active ? step.alt : ""}
              aria-hidden={i === active ? undefined : "true"}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className={`object-cover object-top transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
