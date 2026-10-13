"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "./ui";

// Carrusel con desplazamiento nativo (se puede deslizar con el dedo o la
// rueda) y botones grandes para avanzar y retroceder.
export default function CasesCarousel({ cards }) {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const move = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 24;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const btn =
    "grid h-14 w-14 place-items-center rounded-full bg-white text-primary shadow-md ring-1 ring-slate-300 transition hover:bg-primary hover:text-white hover:ring-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-primary disabled:hover:ring-slate-300";

  return (
    <div role="region" aria-roledescription="carrusel" aria-label="Casos reales">
      <div className="flex justify-end gap-3">
        <button type="button" className={btn} onClick={() => move(-1)} disabled={edges.start} aria-label="Ver casos anteriores">
          <Icon name="chevronLeft" className="h-6 w-6" strokeWidth={2.2} />
        </button>
        <button type="button" className={btn} onClick={() => move(1)} disabled={edges.end} aria-label="Ver más casos">
          <Icon name="chevronRight" className="h-6 w-6" strokeWidth={2.2} />
        </button>
      </div>

      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Lista de casos, desliza para ver más"
        className="-mx-4 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-6 pt-2 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mx-8 lg:gap-6 lg:scroll-px-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((c, i) => (
          <li
            key={c.id}
            aria-label={`Caso ${i + 1} de ${cards.length}`}
            className="w-[86%] shrink-0 snap-start sm:w-[58%] lg:w-[calc((100%-3rem)/3)]"
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(0,24,43,0.35)] motion-reduce:hover:translate-y-0">
              <div className="relative aspect-[16/9] overflow-hidden bg-primary">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 58vw, 86vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:group-hover:scale-100"
                  style={{ objectPosition: c.position }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-primary shadow-md sm:text-base">
                  {c.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-base font-semibold text-slate-600">{c.industry}</p>
                <h3 className="mt-1 text-xl font-bold leading-snug text-primary sm:text-2xl">{c.name}</h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-600">{c.summary}</p>
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-slate-200 pt-5">
                    <span className="text-4xl font-extrabold tracking-tight text-primary">{c.value}</span>
                    <span className="text-base text-slate-600">{c.label}</span>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
