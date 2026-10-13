"use client";

import { useRef, useState } from "react";
import Icon from "./icons";

// Pestañas accesibles: cambian la pantalla y el texto de cada solución.
// Los paneles llegan ya renderizados desde el servidor.
export default function SolutionTabs({ tabs, label = "Soluciones" }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const select = (index) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event, index) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      select(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      select(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(tabs.length - 1);
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {tabs.map((tab, i) => {
          const selected = i === active;
          const last = i === tabs.length - 1;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`h2-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`h2-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => onKeyDown(event, i)}
              className={`group flex min-h-[64px] items-center gap-3 rounded-2xl border-2 px-3 py-3 text-left text-base font-bold transition duration-200 sm:px-4 sm:text-lg ${
                last ? "col-span-2 sm:col-span-1" : ""
              } ${
                selected
                  ? "border-[#00182B] bg-[#00182B] text-white shadow-lg shadow-[#00182B]/20"
                  : "border-slate-200 bg-white text-[#00182B] hover:-translate-y-0.5 hover:border-[#039695] motion-reduce:transform-none"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition ${
                  selected ? "bg-[#039695] text-[#00182B]" : "bg-[#039695]/10 text-[#027a79]"
                }`}
              >
                <Icon name={tab.icon} className="h-6 w-6" />
              </span>
              <span className="leading-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`h2-panel-${tab.id}`}
          aria-labelledby={`h2-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="mt-8 animate-opacity rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#039695] sm:p-8 lg:p-12"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
