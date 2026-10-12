"use client";

import { useEffect, useRef, useState } from "react";
import { useIndustry } from "./IndustryContext";
import { Chevron } from "./ui";

const DESKTOP_QUERY = "(min-width: 768px)";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

const toggleInSet = (set, key, open) => {
  if (set.has(key) === open) return set;
  const next = new Set(set);
  if (open) next.add(key);
  else next.delete(key);
  return next;
};

// Explorador por industria: pestañas en desktop y acordeones en móvil para
// los tres sectores profundos, más el bloque "Más industrias". Todo el
// contenido llega renderizado desde el servidor.
export default function IndustryExplorer({ deep, more, moreHeading }) {
  const { industry, selectIndustry } = useIndustry();
  const deepSlugs = deep.map((d) => d.slug);
  const moreSlugs = more.map((m) => m.slug);

  const [tab, setTab] = useState(() => (deepSlugs.includes(industry) ? industry : deepSlugs[0]));
  const [mobileOpen, setMobileOpen] = useState(() => new Set([tab]));
  const [moreOpen, setMoreOpen] = useState(() => new Set(moreSlugs.includes(industry) ? [industry] : []));
  const isDesktop = useIsDesktop();
  const tabRefs = useRef({});

  useEffect(() => {
    if (!industry) return;
    if (deepSlugs.includes(industry)) {
      setTab(industry);
      setMobileOpen((prev) => toggleInSet(prev, industry, true));
    } else if (moreSlugs.includes(industry)) {
      setMoreOpen((prev) => toggleInSet(prev, industry, true));
    }
    // deepSlugs y moreSlugs no cambian después del render del servidor.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [industry]);

  const activateTab = (slug, focus = false) => {
    setTab(slug);
    selectIndustry(slug, "pestanas");
    if (focus) tabRefs.current[slug]?.focus();
  };

  const onTabKeyDown = (e) => {
    const index = deepSlugs.indexOf(tab);
    let next = null;
    if (e.key === "ArrowRight") next = deepSlugs[(index + 1) % deepSlugs.length];
    if (e.key === "ArrowLeft") next = deepSlugs[(index - 1 + deepSlugs.length) % deepSlugs.length];
    if (e.key === "Home") next = deepSlugs[0];
    if (e.key === "End") next = deepSlugs[deepSlugs.length - 1];
    if (next) {
      e.preventDefault();
      activateTab(next, true);
    }
  };

  // El navegador también dispara "toggle" cuando React cambia el atributo
  // open o cuando el details nace abierto; solo cuenta si difiere del estado.
  const onDeepToggle = (slug) => (e) => {
    if (isDesktop) return;
    const open = e.currentTarget.open;
    if (open === mobileOpen.has(slug)) return;
    setMobileOpen((prev) => toggleInSet(prev, slug, open));
    if (open && industry !== slug) selectIndustry(slug, "acordeon");
  };

  const onMoreToggle = (slug) => (e) => {
    const open = e.currentTarget.open;
    if (open === moreOpen.has(slug)) return;
    setMoreOpen((prev) => toggleInSet(prev, slug, open));
    if (open && industry !== slug) selectIndustry(slug, "acordeon");
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Sectores con más casos"
        className="hidden border-b border-white/10 md:flex md:gap-8"
        onKeyDown={onTabKeyDown}
      >
        {deep.map((d) => {
          const selected = d.slug === tab;
          return (
            <button
              key={d.slug}
              ref={(el) => {
                tabRefs.current[d.slug] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${d.slug}`}
              aria-selected={selected}
              aria-controls={`panel-${d.slug}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => activateTab(d.slug)}
              className={`-mb-px border-b-2 pb-3 pt-1 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                selected ? "border-accent text-white" : "border-transparent text-white/60 hover:text-white"
              }`}
            >
              {d.label}
            </button>
          );
        })}
      </div>

      <div className="border-t border-white/10 md:border-t-0">
        {deep.map((d) => {
          const open = isDesktop ? d.slug === tab : mobileOpen.has(d.slug);
          return (
            <details
              key={d.slug}
              open={open}
              onToggle={onDeepToggle(d.slug)}
              className={`group/panel border-b border-white/10 md:border-b-0 ${d.slug === tab ? "" : "md:hidden"}`}
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 py-4 text-lg font-semibold text-white md:hidden [&::-webkit-details-marker]:hidden">
                {d.label}
                <Chevron className="text-white/70 group-open/panel:rotate-180" />
              </summary>
              <div
                role={isDesktop ? "tabpanel" : undefined}
                id={`panel-${d.slug}`}
                aria-labelledby={isDesktop ? `tab-${d.slug}` : undefined}
                className="pb-10 md:pt-8"
              >
                {d.content}
              </div>
            </details>
          );
        })}
      </div>

      <div className="mt-14 md:mt-20">
        {moreHeading}
        <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {more.map((m) => (
            <details
              key={m.slug}
              id={`industria-${m.slug}`}
              open={moreOpen.has(m.slug)}
              onToggle={onMoreToggle(m.slug)}
              className="group/more scroll-mt-20"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                {m.head}
                <Chevron className="ml-auto text-white/70 group-open/more:rotate-180" />
              </summary>
              <div className="pb-8 pt-2">{m.content}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
