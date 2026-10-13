"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { BrowserFrame, CtaLink, Icon, PhoneFrame, TextLink } from "./ui";

function YoaoVisual() {
  return (
    <div className="relative pb-[6%] pr-[16%]">
      <BrowserFrame
        src="/home-assets/yoao-home.jpg"
        width={1600}
        height={840}
        alt="Portada de YOAO: de video a datos en minutos, con una cámara analizando una zona"
        label="YOAO"
        tone="dark"
        sizes="(min-width: 1024px) 560px, 84vw"
      />
      <div className="absolute bottom-0 right-0 w-[30%]">
        <PhoneFrame ratio="540 / 960">
          <Image
            src="/home-assets/yoao-zona.jpg"
            alt="YOAO contando vehículos dentro de una zona marcada en una calle"
            fill
            sizes="(min-width: 1024px) 200px, 30vw"
            className="object-cover"
          />
        </PhoneFrame>
      </div>
    </div>
  );
}

function ProjectsVisual() {
  return (
    <div className="relative pb-[18%] pr-[8%]">
      <BrowserFrame
        src="/home-assets/projects-dashboard.jpg"
        width={1600}
        height={824}
        alt="Panel de Robotipy Projects con actividad, entregas, soporte y velocidad del equipo"
        label="Robotipy Projects"
        tone="dark"
        sizes="(min-width: 1024px) 600px, 92vw"
      />
      <div className="absolute bottom-0 right-0 w-[62%] overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,24,43,0.6)] ring-4 ring-white">
        <Image
          src="/home-assets/projects-planificador.jpg"
          width={1451}
          height={662}
          alt="Planificación de recursos con la carga semanal de cada persona del equipo"
          sizes="(min-width: 1024px) 400px, 60vw"
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

function MonitorVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      <Image
        src="/assets/pc-robotipy.png"
        width={744}
        height={488}
        alt="Ilustración de un monitor con indicadores de ejecuciones, tiempos, alertas y tendencias"
        sizes="(min-width: 1024px) 560px, 90vw"
        className="relative mx-auto block h-auto w-full max-w-[560px]"
      />
    </div>
  );
}

const VISUALS = { yoao: YoaoVisual, projects: ProjectsVisual, monitor: MonitorVisual };

export default function ProductTabs({ tabs }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const tab = tabs[active];
  const Visual = VISUALS[tab.key];

  const onKeyDown = (event, index) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next = null;
    if (event.key in keys) next = (index + keys[event.key] + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Productos propios de Robotipy" className="flex flex-wrap gap-3">
        {tabs.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.key}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              id={`producto-tab-${t.key}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`producto-panel-${t.key}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => onKeyDown(event, i)}
              className={`inline-flex min-h-[52px] items-center gap-2.5 rounded-full px-5 py-2.5 text-base font-semibold transition-colors duration-200 sm:px-6 sm:text-lg ${
                isActive
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white text-primary ring-1 ring-inset ring-slate-300 hover:ring-primary"
              }`}
            >
              <Icon name={t.icon} className={`h-5 w-5 ${isActive ? "text-accent" : "text-primary"}`} />
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        key={tab.key}
        id={`producto-panel-${tab.key}`}
        role="tabpanel"
        aria-labelledby={`producto-tab-${tab.key}`}
        className="mt-10 grid gap-12 motion-safe:animate-[h1-fade_0.5s_ease-out] lg:grid-cols-12 lg:items-center lg:gap-14"
      >
        <div className="lg:col-span-5">
          <p className="text-lg font-semibold text-slate-600">{tab.kicker}</p>
          <h3 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">{tab.title}</h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{tab.text}</p>
          <ul className="mt-7 space-y-3.5">
            {tab.bullets.map((b) => (
              <li key={b.text} className="flex items-center gap-3.5 text-lg text-slate-800">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-primary">
                  <Icon name={b.icon} className="h-5 w-5" />
                </span>
                {b.text}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-7">
            <CtaLink href={tab.ctaHref}>Agenda una reunión</CtaLink>
            <TextLink href={tab.href}>{tab.linkLabel}</TextLink>
          </div>
        </div>
        <div className="lg:col-span-7">
          <Visual />
        </div>
      </div>
    </div>
  );
}
