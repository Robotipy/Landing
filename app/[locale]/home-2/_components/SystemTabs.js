"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DESKTOP = "(min-width: 1024px)";
const HASH_PREFIX = "#sistema-";

function Chevron({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-5 w-5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const countLabel = (n) => `${n} ${n === 1 ? "caso" : "casos"}`;

// Mejora progresiva de la sección de sistemas. El HTML del servidor trae un
// <details id="sistema-<slug>"> por sistema (el primero abierto) y una lista
// de anclas. Con JavaScript, desde 1024 px la lista pasa a ser un tablist y se
// ve un panel a la vez; bajo 1024 px queda como acordeón. En ambos casos lee
// el hash (#sistema-<slug>) al cargar, en hashchange y al hacer clic en
// cualquier enlace de la página que apunte a un sistema.
export default function SystemTabs({ items, label }) {
  const slugs = items.map((item) => item.slug);
  const first = slugs[0];
  const [mode, setMode] = useState("static");
  const [active, setActive] = useState(first);
  const [open, setOpen] = useState(() => ({ [first]: true }));
  const [pendingScroll, setPendingScroll] = useState(null);
  const tabRefs = useRef({});
  const slugsRef = useRef(slugs);
  slugsRef.current = slugs;

  const slugFromHash = useCallback((hash) => {
    if (typeof hash !== "string" || !hash.startsWith(HASH_PREFIX)) return null;
    const slug = hash.slice(HASH_PREFIX.length);
    return slugsRef.current.includes(slug) ? slug : null;
  }, []);

  const activate = useCallback((slug, scroll) => {
    setActive(slug);
    setOpen((prev) => (prev[slug] ? prev : { ...prev, [slug]: true }));
    if (scroll) setPendingScroll(slug);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP);
    const syncMode = () => setMode(media.matches ? "tabs" : "accordion");
    syncMode();
    media.addEventListener("change", syncMode);

    const fromHash = () => {
      const slug = slugFromHash(window.location.hash);
      if (slug) activate(slug, true);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);

    const onClick = (event) => {
      const link = event.target instanceof Element ? event.target.closest(`a[href^="${HASH_PREFIX}"]`) : null;
      if (!link) return;
      const slug = slugFromHash(link.getAttribute("href"));
      if (slug) activate(slug, true);
    };
    document.addEventListener("click", onClick);

    return () => {
      media.removeEventListener("change", syncMode);
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, [activate, slugFromHash]);

  // Baja al sistema elegido cuando el panel ya está visible.
  useEffect(() => {
    if (!pendingScroll || mode === "static") return undefined;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(`sistema-${pendingScroll}`)?.scrollIntoView({ block: "start" });
      setPendingScroll(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pendingScroll, mode]);

  const selectTab = (slug, focus) => {
    activate(slug, false);
    try {
      window.history.replaceState(null, "", `${HASH_PREFIX}${slug}`);
    } catch {
      // Sin historial disponible, el panel cambia igual.
    }
    if (focus) tabRefs.current[slug]?.focus();
  };

  const onTabKeyDown = (event) => {
    const index = slugs.indexOf(active);
    let next = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = slugs[(index + 1) % slugs.length];
    if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = slugs[(index - 1 + slugs.length) % slugs.length];
    if (event.key === "Home") next = slugs[0];
    if (event.key === "End") next = slugs[slugs.length - 1];
    if (!next) return;
    event.preventDefault();
    selectTab(next, true);
  };

  const tabs = mode === "tabs";

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-10">
      <div className="hidden lg:col-span-3 lg:block">
        <div className="sticky top-24">
          <p className="h2-eyebrow mb-3">Sistemas</p>
          {tabs ? (
            <div
              role="tablist"
              aria-label={label}
              aria-orientation="vertical"
              onKeyDown={onTabKeyDown}
              className="flex flex-col gap-1"
            >
              {items.map((item) => (
                <button
                  key={item.slug}
                  ref={(node) => {
                    tabRefs.current[item.slug] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${item.slug}`}
                  aria-selected={active === item.slug}
                  aria-controls={`panel-${item.slug}`}
                  tabIndex={active === item.slug ? 0 : -1}
                  onClick={() => selectTab(item.slug, false)}
                  className="h2-tab h2-mono h2-muted flex min-h-11 w-full items-center justify-between gap-3 rounded-md border border-transparent px-3 py-2 text-left text-sm transition-colors hover:text-white"
                >
                  <span>{item.name}</span>
                  <span className="h2-tab-count h2-num shrink-0 text-xs">
                    {item.count}
                    <span className="sr-only"> {item.count === 1 ? "caso" : "casos"}</span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <ul aria-label={label} className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`${HASH_PREFIX}${item.slug}`}
                    className="h2-mono h2-muted flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:text-white"
                  >
                    <span>{item.name}</span>
                    <span className="h2-num shrink-0 text-xs">
                      {item.count}
                      <span className="sr-only"> {item.count === 1 ? "caso" : "casos"}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t h2-line lg:col-span-9 lg:border-t-0">
        {items.map((item) => {
          const isActive = active === item.slug;
          const isOpen = tabs ? true : Boolean(open[item.slug]);
          return (
            <div
              key={item.slug}
              role={tabs ? "tabpanel" : undefined}
              id={tabs ? `panel-${item.slug}` : undefined}
              aria-labelledby={tabs ? `tab-${item.slug}` : undefined}
              hidden={tabs && !isActive}
            >
              <details
                id={`sistema-${item.slug}`}
                open={isOpen}
                onToggle={(event) => {
                  if (tabs) return;
                  const now = event.currentTarget.open;
                  setOpen((prev) => (Boolean(prev[item.slug]) === now ? prev : { ...prev, [item.slug]: now }));
                }}
                className={`scroll-mt-28 ${tabs ? "" : "border-b h2-line"}`}
              >
                <summary
                  className={
                    tabs
                      ? "hidden"
                      : "flex min-h-14 items-center justify-between gap-4 py-4 hover:text-white"
                  }
                  tabIndex={tabs ? -1 : undefined}
                >
                  <h3 className="h2-mono text-base font-medium text-white md:text-lg">{item.name}</h3>
                  <span className="flex items-center gap-3">
                    <span className="h2-mono h2-muted h2-num text-xs">{countLabel(item.count)}</span>
                    <Chevron className="h2-chev h2-muted" />
                  </span>
                </summary>
                {tabs && (
                  <div className="flex items-baseline justify-between gap-4 pb-1">
                    <h3 className="h2-mono text-lg font-medium text-white">{item.name}</h3>
                    <span className="h2-mono h2-muted h2-num text-xs">{countLabel(item.count)}</span>
                  </div>
                )}
                <div className={tabs ? "pt-3" : "pb-8"}>{item.content}</div>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}
