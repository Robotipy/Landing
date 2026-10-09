"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import {
  USE_CASES,
  EDGE_DEVICE,
  EXTRA_CAMERA_DEV_FACTOR,
  ANNUAL_MAINTENANCE_RATE,
} from "../data";

const CONDITIONS = [
  {
    id: "luz",
    label: "Iluminación del punto a inspeccionar",
    options: [
      { value: "controlada", label: "Controlada", points: 40 },
      { value: "parcial", label: "Cambia durante el día", points: 25 },
      { value: "exterior", label: "Exterior o muy variable", points: 10 },
    ],
  },
  {
    id: "velocidad",
    label: "Velocidad de la línea o del flujo",
    options: [
      { value: "lenta", label: "Lenta", points: 30 },
      { value: "media", label: "Media", points: 25 },
      { value: "alta", label: "Muy alta", points: 15 },
    ],
  },
  {
    id: "variabilidad",
    label: "Variabilidad del producto o escena",
    options: [
      { value: "baja", label: "Baja", points: 30 },
      { value: "media", label: "Media", points: 20 },
      { value: "alta", label: "Alta", points: 10 },
    ],
  },
];

const VIABILITY = [
  {
    min: 75,
    title: "Viabilidad técnica alta",
    text: "Las condiciones son favorables. Un piloto con tus videos debería confirmar la precisión rápido.",
    tone: "text-success",
  },
  {
    min: 50,
    title: "Viabilidad media",
    text: "Es factible, pero conviene un piloto para medir precisión antes de invertir en hardware.",
    tone: "text-warning",
  },
  {
    min: 0,
    title: "Viabilidad baja por ahora",
    text: "Antes de automatizar, controla la iluminación o acota la variabilidad. Sin eso la precisión no será estable.",
    tone: "text-error",
  },
];

const DEFAULTS = {
  useCase: "calidad",
  cameras: 2,
  people: 2,
  salary: 1200,
  incidents: 5,
  incidentCost: 400,
  luz: "controlada",
  velocidad: "media",
  variabilidad: "media",
};

const usd = (n) => `USD ${Math.round(n).toLocaleString("es-CL")}`;
const roundTo = (n, step) => Math.round(n / step) * step;

function track(name, params) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params || {});
  }
}

function NumberField({ id, label, suffix, value, onChange, min = 0, max, step = 1 }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm text-white/80">{label}</span>
      <div className="mt-1 flex items-center rounded-xl border border-white/10 bg-primary/60 focus-within:border-accent">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="w-full bg-transparent px-4 py-3 text-white text-lg outline-none"
        />
        {suffix && <span className="pr-4 text-sm text-white/50 whitespace-nowrap">{suffix}</span>}
      </div>
    </label>
  );
}

function compute(f) {
  const uc = USE_CASES[f.useCase];
  const cams = Math.max(1, f.cameras);
  const devices = Math.ceil(cams / EDGE_DEVICE.camerasPerDevice);
  const devFactor = 1 + EXTRA_CAMERA_DEV_FACTOR * (cams - 1);
  const range = [0, 1].map(
    (i) => uc.camera[i] * cams + EDGE_DEVICE.price[i] * devices + uc.dev[i] * devFactor
  );
  const investment = (range[0] + range[1]) / 2;
  const maintenance = uc.dev[0] * devFactor * ANNUAL_MAINTENANCE_RATE;
  const laborSavings = f.people * f.salary * 12 * uc.laborShare;
  const defectSavings = f.incidents * f.incidentCost * 12 * uc.defectShare;
  const netAnnual = laborSavings + defectSavings - maintenance;
  const payback = netAnnual > 0 ? (investment / netAnnual) * 12 : null;
  const viabilityScore = CONDITIONS.reduce(
    (s, c) => s + c.options.find((o) => o.value === f[c.id]).points,
    0
  );
  return {
    range: range.map((n) => roundTo(n, 500)),
    laborSavings,
    defectSavings,
    maintenance,
    netAnnual,
    payback,
    viability: VIABILITY.find((v) => viabilityScore >= v.min),
  };
}

export default function VisionCalculator() {
  const [form, setForm] = useState(DEFAULTS);
  const set = (key) => (value) => setForm((prev) => ({ ...prev, [key]: value }));
  const r = useMemo(() => compute(form), [form]);
  const resultRef = useRef(null);
  const [resultVisible, setResultVisible] = useState(false);

  useEffect(() => {
    const el = resultRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setResultVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 space-y-6">
        <fieldset className="border border-white/10 bg-white/5 rounded-2xl p-5">
          <legend className="sr-only">Caso de uso</legend>
          <p className="text-white font-semibold text-lg mb-4" aria-hidden="true">
            <span className="text-accent mr-2">1.</span>¿Qué quieres automatizar con cámaras?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(USE_CASES).map(([key, uc]) => {
              const checked = form.useCase === key;
              return (
                <label
                  key={key}
                  className={`flex items-start gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    checked
                      ? "border-accent bg-accent/15 text-white"
                      : "border-white/10 text-white/80 hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="useCase"
                    value={key}
                    checked={checked}
                    onChange={() => set("useCase")(key)}
                    className="radio radio-accent radio-sm mt-1"
                  />
                  <span>
                    <span className="block text-sm font-semibold">{uc.label}</span>
                    <span className="block text-xs text-white/60 mt-0.5">{uc.hint}</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="border border-white/10 bg-white/5 rounded-2xl p-5">
          <legend className="sr-only">Situación actual</legend>
          <p className="text-white font-semibold text-lg mb-4" aria-hidden="true">
            <span className="text-accent mr-2">2.</span>Tu situación actual
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              id="cameras"
              label="Puntos de inspección (cámaras)"
              value={form.cameras}
              onChange={set("cameras")}
              min={1}
              max={50}
            />
            <NumberField
              id="people"
              label="Personas dedicadas a esta tarea"
              value={form.people}
              onChange={set("people")}
              step={0.5}
            />
            <NumberField
              id="salary"
              label="Costo mensual por persona"
              suffix="USD"
              value={form.salary}
              onChange={set("salary")}
              step={100}
            />
            <NumberField
              id="incidents"
              label="Errores que llegan al cliente al mes"
              value={form.incidents}
              onChange={set("incidents")}
            />
            <div className="sm:col-span-2">
              <NumberField
                id="incidentCost"
                label="Costo promedio de cada error (reclamo, merma, multa)"
                suffix="USD"
                value={form.incidentCost}
                onChange={set("incidentCost")}
                step={50}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border border-white/10 bg-white/5 rounded-2xl p-5">
          <legend className="sr-only">Condiciones técnicas</legend>
          <p className="text-white font-semibold text-lg mb-4" aria-hidden="true">
            <span className="text-accent mr-2">3.</span>Condiciones en planta
          </p>
          <div className="space-y-4">
            {CONDITIONS.map((c) => (
              <div key={c.id} role="radiogroup" aria-label={c.label}>
                <p className="text-sm text-white/80 mb-2">{c.label}</p>
                <div className="grid grid-cols-3 gap-2">
                  {c.options.map((o) => {
                    const checked = form[c.id] === o.value;
                    return (
                      <label
                        key={o.value}
                        className={`flex items-center justify-center text-center min-h-12 px-2 py-2 rounded-xl border text-xs sm:text-sm cursor-pointer transition-colors ${
                          checked
                            ? "border-accent bg-accent/15 text-white"
                            : "border-white/10 text-white/70 hover:border-white/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name={c.id}
                          value={o.value}
                          checked={checked}
                          onChange={() => set(c.id)(o.value)}
                          className="sr-only"
                        />
                        {o.label}
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </fieldset>
      </div>

      <a
        href="#resultado"
        aria-hidden={resultVisible}
        tabIndex={resultVisible ? -1 : 0}
        className={`${resultVisible ? "hidden" : "flex"} lg:hidden fixed bottom-0 inset-x-0 z-40 items-center justify-between gap-3 px-4 py-3 bg-primary/95 backdrop-blur border-t border-white/10 text-sm`}
      >
        <span className="text-white/70">
          Payback{" "}
          <strong className="text-white">
            {r.payback ? `${Math.max(1, Math.round(r.payback))} meses` : "no se recupera"}
          </strong>
        </span>
        <span className="text-accent font-semibold">Ver resultado ↓</span>
      </a>

      <aside id="resultado" ref={resultRef} className="lg:col-span-2 scroll-mt-28" aria-live="polite">
        <section className="lg:sticky lg:top-28 border border-accent/40 bg-white/5 rounded-2xl p-6">
          <h2 className="text-sm uppercase tracking-widest text-white/60">Tu estimación</h2>

          <p className="text-sm text-white/60 mt-5">Inversión inicial estimada</p>
          <p className="text-2xl font-bold text-white">
            {usd(r.range[0])} – {usd(r.range[1])}
          </p>

          <p className="text-sm text-white/60 mt-5">Ahorro neto anual</p>
          <p className={`text-2xl font-bold ${r.netAnnual > 0 ? "text-success" : "text-error"}`}>
            {usd(r.netAnnual)}
          </p>
          <ul className="text-xs text-white/60 mt-2 space-y-1">
            <li>Horas de inspección: {usd(r.laborSavings)}</li>
            <li>Errores evitados: {usd(r.defectSavings)}</li>
            <li>Mantenimiento: −{usd(r.maintenance)}</li>
          </ul>

          <p className="text-sm text-white/60 mt-5">Payback</p>
          <p className="text-2xl font-bold text-white">
            {r.payback ? `${Math.max(1, Math.round(r.payback))} meses` : "No se recupera"}
          </p>

          <div className="mt-5 rounded-xl bg-primary/60 border border-white/10 p-4">
            <p className={`font-semibold ${r.viability.tone}`}>{r.viability.title}</p>
            <p className="text-sm text-white/70 mt-1 leading-relaxed">{r.viability.text}</p>
          </div>

          <Link
            href="/contact-us"
            onClick={() =>
              track("vision_calc_cta", { use_case: form.useCase, payback: r.payback })
            }
            className="mt-6 inline-flex items-center justify-center w-full min-h-14 px-6 py-3 leading-tight rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-lg text-center transition-colors"
          >
            Agenda un diagnóstico gratuito
          </Link>
          <p className="text-xs text-white/50 mt-3 text-center">
            30 minutos para revisar tu caso y definir un piloto antes de invertir en hardware.
          </p>
          <p className="text-[11px] text-white/40 mt-4 leading-relaxed">
            Cifras referenciales de mercado. No reemplazan una cotización.
          </p>
        </section>
      </aside>
    </div>
  );
}
