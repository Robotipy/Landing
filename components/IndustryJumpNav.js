"use client";

import { useEffect, useRef, useState } from "react";

// Barra de industrias de /success-cases: una sola fila deslizable, fija bajo
// el header, que marca la industria visible y salta compensando su altura.
export default function IndustryJumpNav({ groups, label }) {
  const [active, setActive] = useState(groups[0]?.slug);
  const barRef = useRef(null);
  const chipRefs = useRef({});

  useEffect(() => {
    const sections = groups
      .map((g) => document.getElementById(g.slug))
      .filter(Boolean);
    const update = () => {
      const line = (barRef.current?.getBoundingClientRect().bottom || 0) + 40;
      let current = sections[0]?.id;
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s.id;
        else break;
      }
      if (current) setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [groups]);

  useEffect(() => {
    const chip = chipRefs.current[active];
    const bar = barRef.current;
    if (!chip || !bar) return;
    const target = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
    bar.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label={label}
      className="sticky top-24 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto relative">
        <div
          ref={barRef}
          className="flex gap-2 overflow-x-auto px-4 sm:px-6 lg:px-8 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <span className="hidden md:flex items-center pr-2 text-gray-400 text-xs uppercase tracking-wider whitespace-nowrap">
            {label}
          </span>
          {groups.map((g) => (
            <a
              key={g.slug}
              ref={(el) => {
                chipRefs.current[g.slug] = el;
              }}
              href={`#${g.slug}`}
              onClick={() => setActive(g.slug)}
              aria-current={active === g.slug ? "true" : undefined}
              className={`shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors ${
                active === g.slug
                  ? "bg-teal-600 text-white"
                  : "bg-gray-800 text-gray-200 hover:bg-teal-700 hover:text-white"
              }`}
            >
              {g.label}
            </a>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-900 to-transparent" />
      </div>
    </nav>
  );
}
