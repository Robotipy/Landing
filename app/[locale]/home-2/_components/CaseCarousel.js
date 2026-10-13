"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./icons";

// Carrusel horizontal con scroll-snap y botones grandes. Las tarjetas llegan
// renderizadas desde el servidor como <li>.
export default function CaseCarousel({ children, label = "Casos de clientes" }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
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

  const go = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.85;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const btn =
    "flex h-14 w-14 items-center justify-center rounded-full border-2 transition duration-200 disabled:cursor-not-allowed disabled:opacity-35";

  return (
    <div role="region" aria-roledescription="carrusel" aria-label={label}>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={!canPrev}
          aria-label="Ver casos anteriores"
          className={`${btn} border-white/40 text-white enabled:hover:border-white enabled:hover:bg-white/10`}
        >
          <Icon name="chevronLeft" className="h-7 w-7" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={!canNext}
          aria-label="Ver más casos"
          className={`${btn} border-[#039695] bg-[#039695] text-[#00182B] enabled:hover:bg-[#0bb3b1]`}
        >
          <Icon name="chevronRight" className="h-7 w-7" strokeWidth={2.2} />
        </button>
      </div>
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label={label}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4fd1d0] sm:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
    </div>
  );
}
