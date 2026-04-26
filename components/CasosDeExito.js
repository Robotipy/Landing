"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const cases = [
  {
    id: "mineriaCobre",
    link: "/blog/caso-exito-rpa-ia-mineria-costos",
    accentColor: "#F59E0B",
  },
  {
    id: "siderurgia",
    link: "/blog/caso-exito-automatizacion-ordenes-sap-siderurgia",
    accentColor: "#6366F1",
  },
  {
    id: "agronegocios",
    link: "/blog/caso-exito-inteligencia-mercado-agronegocios",
    accentColor: "#10B981",
  },
  {
    id: "agroindustria",
    link: "/blog/caso-exito-automatizacion-financiera-agroindustria",
    accentColor: "#3B82F6",
  },
  {
    id: "vitivinicultura",
    link: "/blog/caso-exito-cartolas-factoring-vitivinicola",
    accentColor: "#8B5CF6",
  },
  {
    id: "agropecuario",
    link: "/blog/caso-exito-conciliacion-bancaria-agropecuario",
    accentColor: "#EC4899",
  },
];

const CasosDeExito = () => {
  const t = useTranslations("casosDeExitoSection");
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth || 300;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16" id="casos-exito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {t("title")}
            </h2>
            <p className="mt-2 text-sm text-gray-400 max-w-lg">
              {t("subtitle")}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="p-2 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label={t("previous")}
            >
              <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="p-2 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label={t("next")}
            >
              <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((caso) => (
            <Link
              key={caso.id}
              href={caso.link}
              className="group block flex-shrink-0 w-[280px] md:w-[calc(25%-18px)] snap-start"
            >
              <div
                className="h-full rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: "#11222c" }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    color: caso.accentColor,
                    backgroundColor: `${caso.accentColor}20`,
                  }}
                >
                  {t(`cases.${caso.id}.industry`)}
                </span>

                <h3 className="text-base font-bold text-white mt-3 mb-2 group-hover:text-accent transition-colors leading-tight">
                  {t(`cases.${caso.id}.title`)}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-3">
                  {t(`cases.${caso.id}.challenge`)}
                </p>

                <div className="p-2.5 rounded-lg bg-gray-800/50 mb-3">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">
                    {t("keyResultLabel")}
                  </div>
                  <div
                    className="font-bold text-sm"
                    style={{ color: caso.accentColor }}
                  >
                    {t(`cases.${caso.id}.keyResult`)}
                  </div>
                </div>

                <div className="flex items-center text-accent font-semibold text-xs group-hover:gap-2 gap-1 transition-all">
                  {t("seeDetail")}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="w-3 h-3 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex md:hidden justify-center mt-4 gap-1.5">
          {cases.map((caso) => (
            <div
              key={caso.id}
              className="w-1.5 h-1.5 rounded-full bg-gray-600"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-accent hover:bg-opacity-90 transition-colors"
          >
            {t("seeAllPosts")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasosDeExito;
