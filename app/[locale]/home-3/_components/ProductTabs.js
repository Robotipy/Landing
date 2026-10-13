"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { BrowserFrame, PhoneFrame } from "./Frames";
import Icon from "./Icon";
import { agendaHref, btnPrimary, linkDark } from "./ui";

const TABS = [
  {
    key: "atencion",
    icon: "chat",
    tab: "Atención con IA",
    kicker: "Partner implementador de Melon Help",
    title: "Tu atención por WhatsApp, ordenada y con IA",
    text: "Implementamos Melon Help, una plataforma de atención con IA de la que somos partner. Cada mensaje se vuelve un ticket y un agente de IA responde las consultas frecuentes, derivando el resto a tu equipo.",
    servicio: "chatbot",
    cta: "Quiero un asistente de IA",
  },
  {
    key: "software",
    icon: "code",
    tab: "Software a medida",
    kicker: "Proyectos hechos para cada cliente",
    title: "Plataformas pensadas para tu empresa",
    text: "Creamos aplicaciones web y paneles con IA según cómo trabaja cada empresa. Dos ejemplos reales: proyección de ventas con asistente de IA en consumo masivo y un gemelo digital de lixiviación en minería del cobre.",
    servicio: "software",
    cta: "Cuéntanos tu idea",
  },
  {
    key: "yoao",
    icon: "video",
    tab: "YOAO",
    kicker: "Producto propio",
    title: "Tus cámaras convertidas en datos útiles",
    text: "YOAO usa IA para contar vehículos y personas, marcar zonas y generar alertas. Funciona con video en vivo o grabado.",
    servicio: "software",
    cta: "Conversemos sobre YOAO",
    more: { href: "/analysis", label: "Ver YOAO" },
  },
  {
    key: "projects",
    icon: "dashboard",
    tab: "Robotipy Projects",
    kicker: "Producto propio",
    title: "Proyectos, horas y soporte en un lugar",
    text: "Ordena proyectos, horas, recursos y tickets de soporte para equipos de desarrollo y consultoras. Cada cliente tiene su avance y sus tickets a la vista.",
    servicio: "software",
    cta: "Conversemos",
    more: { href: "/projects", label: "Ver Robotipy Projects" },
  },
  {
    key: "monitor",
    icon: "pulse",
    tab: "Robotipy Monitor",
    kicker: "Producto propio",
    title: "Tus robots en producción, siempre a la vista",
    text: "Muestra las ejecuciones, los fallos y los registros de tus robots en producción. Así sabes a tiempo cuando algo necesita atención.",
    servicio: "automatizacion",
    cta: "Conversemos",
    more: { href: "/monitor", label: "Ver Robotipy Monitor" },
  },
];

function Visual({ tabKey }) {
  if (tabKey === "atencion") {
    return (
      <div className="relative">
        <BrowserFrame
          src="/home-assets/melon-demo.jpg"
          alt="Melon Help: conversación de WhatsApp a la izquierda y panel de tickets donde el agente de IA responde a la clienta"
          width={1280}
          height={720}
          label="Melon Help"
          sizes="(min-width: 1024px) 56vw, 100vw"
        />
        <div className="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-2xl bg-white py-2 pl-2 pr-5 shadow-xl sm:flex">
          <Image src="/home-assets/melonbot.png" alt="" width={56} height={56} className="h-14 w-14 rounded-full" />
          <p className="text-base font-bold leading-tight text-primary">
            Somos partner
            <span className="block text-[15px] font-medium text-[#3B4A57]">implementador de Melon Help</span>
          </p>
        </div>
      </div>
    );
  }
  if (tabKey === "software") {
    const items = [
      {
        src: "/assets/banners/retail.jpg",
        caption: "Proyección de ventas con asistente de IA, consumo masivo",
      },
      {
        src: "/assets/banners/mineria.jpg",
        caption: "Gemelo digital de lixiviación, minería del cobre",
      },
    ];
    return (
      <div className="grid gap-5">
        {items.map((item) => (
          <figure key={item.src} className="overflow-hidden rounded-2xl bg-[#0B2236] ring-1 ring-white/10">
            <div className="relative aspect-[3/1]">
              <Image src={item.src} alt="" fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="flex items-center gap-3 px-5 py-4 text-lg font-semibold text-white">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent">
                <Icon name="check" className="h-4 w-4" strokeWidth={3} />
              </span>
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }
  if (tabKey === "yoao") {
    return (
      <div className="mx-auto grid max-w-[560px] grid-cols-2 items-center gap-4 sm:gap-8">
        <PhoneFrame
          src="/home-assets/yoao-deteccion.jpg"
          alt="YOAO detectando y contando vehículos en una autopista"
          sizes="(min-width: 1024px) 260px, 45vw"
        />
        <PhoneFrame
          src="/home-assets/yoao-zona.jpg"
          alt="YOAO con una zona marcada en una avenida y el conteo de vehículos por tipo"
          sizes="(min-width: 1024px) 260px, 45vw"
          className="translate-y-8"
        />
      </div>
    );
  }
  if (tabKey === "projects") {
    return (
      <div className="relative sm:pb-32">
        <BrowserFrame
          src="/home-assets/projects-dashboard.jpg"
          alt="Robotipy Projects: panel con actividad, entregas, carga de soporte y tendencia de tickets"
          width={1600}
          height={824}
          label="Robotipy Projects"
          sizes="(min-width: 1024px) 56vw, 100vw"
        />
        <BrowserFrame
          src="/home-assets/projects-soporte.jpg"
          alt="Robotipy Projects: tickets de soporte de un cliente con estado, prioridad y horas"
          width={1600}
          height={784}
          label="Tickets de soporte"
          sizes="(min-width: 1024px) 34vw, 60vw"
          className="absolute -bottom-2 right-0 hidden w-[55%] sm:block"
        />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center rounded-3xl bg-white p-8 shadow-2xl shadow-black/30 sm:p-12">
      <Image
        src="/assets/pc-robotipy.png"
        alt="Ilustración de un monitor con indicadores de tiempo, alertas y tendencia"
        width={744}
        height={488}
        sizes="(min-width: 1024px) 50vw, 90vw"
        className="h-auto w-full max-w-[520px]"
      />
    </div>
  );
}

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  const select = (index) => {
    const next = (index + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event, index) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      select(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0);
    } else if (event.key === "End") {
      event.preventDefault();
      select(TABS.length - 1);
    }
  };

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Soluciones y productos"
        className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {TABS.map((tab, index) => {
          const selected = index === active;
          return (
            <button
              key={tab.key}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`h3-tab-${tab.key}`}
              aria-selected={selected}
              aria-controls={`h3-panel-${tab.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`inline-flex min-h-[52px] shrink-0 items-center gap-2 rounded-full px-5 text-lg font-semibold transition ${
                selected
                  ? "bg-white text-primary shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Icon name={tab.icon} className={`h-5 w-5 ${selected ? "text-[#027776]" : ""}`} />
              {tab.tab}
            </button>
          );
        })}
      </div>

      {TABS.map((tab, index) => (
        <div
          key={tab.key}
          role="tabpanel"
          id={`h3-panel-${tab.key}`}
          aria-labelledby={`h3-tab-${tab.key}`}
          tabIndex={0}
          hidden={index !== active}
          className="mt-10 animate-opacity"
        >
          {index === active && (
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <p className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-base font-semibold text-white md:text-lg">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                  {tab.kicker}
                </p>
                <h3 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-4xl">{tab.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl">{tab.text}</p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <Link href={agendaHref(tab.servicio)} className={btnPrimary}>
                    {tab.cta}
                  </Link>
                  {tab.more && (
                    <Link href={tab.more.href} className={`${linkDark} whitespace-nowrap`}>
                      {tab.more.label}
                      <Icon name="right" className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="lg:col-span-7">
                <Visual tabKey={tab.key} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
