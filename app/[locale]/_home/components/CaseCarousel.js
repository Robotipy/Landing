"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./icons";

const pad = (n) => String(n).padStart(2, "0");

// Carrusel horizontal con scroll-snap. Abajo muestra cuántos casos se han visto,
// una barra de avance y los botones. Las tarjetas llegan renderizadas desde el
// servidor como <li>.
export default function CaseCarousel({ children, label = "Casos de clientes" }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [seen, setSeen] = useState(1);
  const [total, setTotal] = useState(0);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    const cards = el.querySelectorAll(":scope > li");
    const card = cards[0];
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    const step = card.getBoundingClientRect().width + gap;
    const visible = Math.max(1, Math.round((el.clientWidth + gap) / step));
    const max = el.scrollWidth - el.clientWidth;
    const fraction = max > 0 ? el.scrollLeft / max : 1;
    setTotal(cards.length);
    setSeen(Math.min(cards.length, Math.round(el.scrollLeft / step) + visible));
    setProgress(Math.min(1, visible / cards.length + fraction * (1 - visible / cards.length)));
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
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition duration-200 disabled:cursor-not-allowed disabled:opacity-35";

  return (
    <div role="region" aria-roledescription="carrusel" aria-label={label}>
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label={label}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4fd1d0] sm:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <div className="mt-6 flex items-center gap-4">
        <p className="shrink-0 text-base font-semibold tabular-nums text-white/75" aria-live="polite">
          {pad(seen)} / {pad(total)}
          <span className="sr-only"> casos vistos</span>
        </p>
        <div className="h-0.5 flex-1 bg-white/15" aria-hidden="true">
          <div
            className="h-0.5 bg-[#4fd1d0] transition-[width] duration-300 motion-reduce:transition-none"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={!canPrev}
          aria-label="Ver casos anteriores"
          className={`${btn} border-white/30 text-white enabled:hover:border-white enabled:hover:bg-white/10`}
        >
          <Icon name="chevronLeft" className="h-6 w-6" strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={!canNext}
          aria-label="Ver más casos"
          className={`${btn} border-[#039695] bg-[#039695] text-[#00182B] enabled:hover:bg-[#0bb3b1]`}
        >
          <Icon name="chevronRight" className="h-6 w-6" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
