"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { team } from "@/libs/landingFacts";

const DURATION = 7000;

// El webinar es un ejemplo para la prueba de diseño: reemplazar por un evento real antes de publicar.
const SLIDES = [
  {
    key: "promet",
    kicker: "Caso Promet, del Grupo Cintac",
    title: "Así automatizamos el censo diario de sus hoteles",
    text: "Un robot cruza housekeeping, recepción y reservas todos los días. Lo que tomaba horas hoy toma 10 minutos para los tres hoteles.",
    cta: { label: "Ver el video", href: "https://www.youtube.com/watch?v=NPCkavbRaZM", external: true },
    full: true,
    video: "/home-4/promet-loop.mp4",
    image: "/home-4/promet-loop.jpg",
  },
  {
    key: "webinar",
    kicker: "Webinar gratuito",
    title: "Agentes de IA y robots: cómo combinarlos sin cambiar tus sistemas",
    text: "Una hora con casos reales de Chile y Argentina, y espacio para tus preguntas. Con Danilo Toro e Ivan Cabrera.",
    cta: { label: "Inscríbete", href: "/contact-us?servicio=webinar" },
    media: "webinar",
  },
  {
    key: "evaluador",
    kicker: "Herramienta gratuita",
    title: "¿Qué proceso conviene automatizar primero?",
    text: "Responde unas preguntas sobre tu proceso y descubre qué potencial de automatización tiene.",
    cta: { label: "Evaluar mi proceso", href: "/evaluador-automatizacion" },
    media: "evaluador",
  },
  {
    key: "agentes",
    kicker: "Agentes de IA",
    title: "Atiende a tus clientes por WhatsApp a toda hora",
    text: "Agentes que responden con la información real de tu empresa y derivan a una persona cuando hace falta. Somos partner implementador de Melon Help.",
    cta: { label: "Conocer más", href: "/chatbot" },
    media: "frame",
    image: "/home-assets/melon-home.jpg",
    alt: "Panel de conversaciones de Melon Help",
  },
  {
    key: "yoao",
    kicker: "Analítica de video",
    title: "Tus cámaras convertidas en datos",
    text: "Conteo de vehículos y personas, zonas y alertas con YOAO, sobre las cámaras que ya tienes.",
    cta: { label: "Ver YOAO", href: "/analysis" },
    full: true,
    image: "/home-assets/yoao-dron.jpg",
  },
];

function WebinarCard() {
  const speakers = team.filter((t) => ["Danilo Toro", "Ivan Cabrera"].includes(t.name));
  return (
    <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#039695] px-3 py-1 text-xs font-semibold text-[#00182B]">En vivo · Gratis</span>
        <span className="text-sm text-white/70">60 min · Online</span>
      </div>
      <div className="mt-8 flex items-end gap-5">
        <span className="text-7xl font-light leading-none">12</span>
        <div className="pb-1">
          <p className="text-2xl font-light">noviembre</p>
          <p className="text-white/70">Jueves · 11:00 (Chile)</p>
        </div>
      </div>
      <ul className="mt-8 space-y-4 border-t border-white/15 pt-6">
        {speakers.map((sp) => (
          <li key={sp.name} className="flex items-center gap-4">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white/30">
              <Image src={sp.image} alt="" fill sizes="48px" className="object-cover" />
            </span>
            <span>
              <span className="block font-semibold">{sp.name}</span>
              <span className="block text-sm text-white/70">{sp.role}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EvaluadorCard() {
  const rows = [
    ["¿Cada cuánto se ejecuta el proceso?", "Todos los días"],
    ["¿Las decisiones siguen reglas claras?", "Sí, casi siempre"],
    ["¿En qué formato llegan los datos?", "Excel y correo"],
  ];
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-7 text-[#00182B] shadow-2xl">
      <p className="text-sm font-semibold text-[#027a79]">Evaluador de automatización</p>
      <ul className="mt-5 space-y-3">
        {rows.map(([q, a]) => (
          <li key={q} className="rounded-lg bg-slate-50 px-4 py-3">
            <p className="text-sm text-slate-600">{q}</p>
            <p className="mt-0.5 font-semibold">{a}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-lg bg-[#00182B] p-5 text-white">
        <p className="text-xs text-white/60">Ejemplo de resultado</p>
        <p className="mt-1 text-xl font-light">Alto potencial de automatización</p>
        <div className="mt-4 h-2 rounded-full bg-white/15">
          <div className="h-2 w-[85%] rounded-full bg-[#039695]" />
        </div>
      </div>
    </div>
  );
}

function FrameCard({ src, alt }) {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-white/20">
      <div className="flex gap-1.5 bg-slate-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      </div>
      <div className="relative aspect-[1600/840]">
        <Image src={src} alt={alt} fill sizes="(min-width:1024px) 560px, 0px" className="object-cover object-top" />
      </div>
    </div>
  );
}

export default function HeroCarrusel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [cycle, setCycle] = useState(0);
  const touchX = useRef(null);
  const n = SLIDES.length;

  const go = useCallback((k) => {
    setI(((k % n) + n) % n);
    setCycle((c) => c + 1);
  }, [n]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) setPaused(true);
  }, []);

  const running = !paused && !hover;
  useEffect(() => {
    if (!running) return undefined;
    const t = setTimeout(() => go(i + 1), DURATION);
    return () => clearTimeout(t);
  }, [running, i, cycle, go]);

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Destacados"
      className="relative h-[88vh] min-h-[640px] overflow-clip bg-[#00182B] text-white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {SLIDES.map((s, k) => {
        const active = k === i;
        return (
          <div
            key={s.key}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${k + 1} de ${n}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity ${active ? "z-10 opacity-100 delay-150 duration-700" : "pointer-events-none z-0 opacity-0 duration-300"}`}
          >
            {s.full ? (
              <>
                <Image src={s.image} alt="" fill priority={k === 0} sizes="100vw" className="object-cover" />
                {s.video && (
                  <video className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" src={s.video} poster={s.image} autoPlay muted loop playsInline aria-hidden="true" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00182B]/95 via-[#00182B]/65 to-[#00182B]/10" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00182B]/90 to-transparent" />
                <div className="absolute inset-0 bg-[#00182B]/45 lg:hidden" />
              </>
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(3,150,149,0.35),transparent_55%),linear-gradient(135deg,#00182B,#0b2c47)]" />
            )}

            <div className={`relative mx-auto grid h-full w-full max-w-7xl items-end gap-12 px-4 pb-36 pt-28 sm:px-6 sm:pb-40 lg:px-8 ${s.full ? "" : "lg:grid-cols-2 lg:items-center lg:pb-32"}`}>
              <div>
              <p className="text-base text-[#4fd1d0] sm:text-lg">{s.kicker}</p>
              <h2 className={`mt-4 max-w-3xl text-4xl font-light leading-[1.1] sm:text-5xl ${s.full ? "lg:text-6xl" : "lg:text-[52px]"}`}>{s.title}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{s.text}</p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                {s.cta.external ? (
                  <a
                    href={s.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={active ? 0 : -1}
                    aria-label={`${s.cta.label} en YouTube (se abre en una pestaña nueva)`}
                    className="inline-flex items-center gap-2.5 rounded-md bg-[#039695] px-8 py-3.5 text-base font-semibold text-[#00182B] transition hover:bg-[#0bb3b1]"
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                      <path d="M4 2.5v11l9-5.5z" fill="currentColor" />
                    </svg>
                    {s.cta.label}
                  </a>
                ) : (
                  <Link
                    href={s.cta.href}
                    tabIndex={active ? 0 : -1}
                    className="inline-flex rounded-md bg-[#039695] px-8 py-3.5 text-base font-semibold text-[#00182B] transition hover:bg-[#0bb3b1]"
                  >
                    {s.cta.label}
                  </Link>
                )}
              </div>
              </div>
              {!s.full && (
                <div className="hidden justify-center lg:flex">
                  {s.media === "webinar" && <WebinarCard />}
                  {s.media === "evaluador" && <EvaluadorCard />}
                  {s.media === "frame" && <FrameCard src={s.image} alt={s.alt} />}
                </div>
              )}
            </div>
          </div>
        );
      })}

      <h1 className="sr-only">Robotipy: automatización, agentes de IA y software a medida</h1>

      <div className="absolute inset-x-0 bottom-10 z-20 mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 rounded-full bg-white/20 px-5 py-3 backdrop-blur-md">
          {SLIDES.map((s, k) => {
            const active = k === i;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => go(k)}
                aria-label={`Ir a la diapositiva ${k + 1}: ${s.kicker}`}
                aria-current={active}
                className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-300 ${
                  active ? "w-12 bg-white/35" : "w-2.5 bg-white/70 hover:bg-white"
                }`}
              >
                {active && (
                  <span
                    key={cycle}
                    className="absolute inset-y-0 left-0 rounded-full bg-[#039695]"
                    style={{ animation: `h4-fill ${DURATION}ms linear forwards`, animationPlayState: running ? "running" : "paused" }}
                  />
                )}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Reanudar el carrusel" : "Pausar el carrusel"}
            className="ml-2 flex h-7 w-7 items-center justify-center rounded-full text-white/85 hover:bg-white/20"
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true">
              {paused ? <path d="M4 3l9 5-9 5z" fill="currentColor" /> : <path d="M4 3h3v10H4zM9 3h3v10H9z" fill="currentColor" />}
            </svg>
          </button>
        </div>
      </div>
      <style>{`@keyframes h4-fill { from { width: 0% } to { width: 100% } } @media (prefers-reduced-motion: reduce) { [style*="h4-fill"] { animation: none !important; width: 100% !important; } }`}</style>
    </section>
  );
}
