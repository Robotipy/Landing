"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  SIGNUP_URL,
  YOAO_PRICE_PER_HOUR,
  CREDITS_PER_MINUTE,
  CREDITS_PER_PACK,
} from "../data";

const VIDEO_TYPES = [
  { value: "standard", label: "Cámara fija o celular" },
  { value: "drone", label: "Dron a gran altura o streaming" },
];

const DEFAULTS = {
  points: 2,
  hours: 12,
  days: 1,
  counters: 4,
  rate: 7,
  digitizing: 0.5,
  video: "standard",
};

const usd = (n) => `USD ${Math.round(n).toLocaleString("es-CL")}`;
const num = (n) => Math.round(n).toLocaleString("es-CL");

function track(name, params) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params || {});
  }
}

function NumberField({ id, label, hint, suffix, value, onChange, min = 0, step = 1 }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm text-white/80">{label}</span>
      <div className="mt-1 flex items-center rounded-xl border border-white/10 bg-primary/60 focus-within:border-accent">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="w-full bg-transparent px-4 py-3 text-white text-lg outline-none"
        />
        {suffix && <span className="pr-4 text-sm text-white/50 whitespace-nowrap">{suffix}</span>}
      </div>
      {hint && <span className="block text-xs text-white/50 mt-1">{hint}</span>}
    </label>
  );
}

function compute(f) {
  const videoHours = f.points * f.hours * f.days;
  const fieldHours = videoHours * f.counters;
  const fieldCost = fieldHours * f.rate;
  const digitizingCost = videoHours * f.digitizing * f.rate;
  const manual = fieldCost + digitizingCost;
  const yoao = videoHours * YOAO_PRICE_PER_HOUR[f.video];
  const credits = videoHours * 60 * CREDITS_PER_MINUTE[f.video];
  const savings = manual - yoao;
  return {
    videoHours,
    fieldHours,
    fieldCost,
    digitizingCost,
    manual,
    yoao,
    credits,
    packs: Math.ceil(credits / CREDITS_PER_PACK),
    savings,
    savingsPct: manual > 0 ? (savings / manual) * 100 : 0,
  };
}

export default function AforoCalculator() {
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
          <legend className="sr-only">Alcance del estudio</legend>
          <p className="text-white font-semibold text-lg mb-4" aria-hidden="true">
            <span className="text-accent mr-2">1.</span>Alcance del estudio
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <NumberField
              id="points"
              label="Intersecciones o puntos"
              value={form.points}
              onChange={set("points")}
              min={1}
            />
            <NumberField
              id="hours"
              label="Horas por día"
              value={form.hours}
              onChange={set("hours")}
              min={1}
              step={0.5}
            />
            <NumberField id="days" label="Días" value={form.days} onChange={set("days")} min={1} />
          </div>
        </fieldset>

        <fieldset className="border border-white/10 bg-white/5 rounded-2xl p-5">
          <legend className="sr-only">Aforo manual</legend>
          <p className="text-white font-semibold text-lg mb-4" aria-hidden="true">
            <span className="text-accent mr-2">2.</span>Si lo hicieras manual
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NumberField
              id="counters"
              label="Aforadores por punto"
              hint="Una intersección de 4 accesos suele requerir 4 o más."
              value={form.counters}
              onChange={set("counters")}
              min={1}
            />
            <NumberField
              id="rate"
              label="Costo por hora de cada aforador"
              hint="Referencial. Ajústalo a tu ciudad."
              suffix="USD"
              value={form.rate}
              onChange={set("rate")}
              step={0.5}
            />
            <div className="sm:col-span-2">
              <NumberField
                id="digitizing"
                label="Horas de digitación y revisión por cada hora contada"
                hint="Pasar planillas a Excel, cuadrar totales y armar el reporte."
                value={form.digitizing}
                onChange={set("digitizing")}
                step={0.25}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="border border-white/10 bg-white/5 rounded-2xl p-5">
          <legend className="sr-only">Tipo de video</legend>
          <p className="text-white font-semibold text-lg mb-4" aria-hidden="true">
            <span className="text-accent mr-2">3.</span>¿Cómo grabarías?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VIDEO_TYPES.map((v) => {
              const checked = form.video === v.value;
              return (
                <label
                  key={v.value}
                  className={`flex items-center gap-3 min-h-12 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                    checked
                      ? "border-accent bg-accent/15 text-white"
                      : "border-white/10 text-white/80 hover:border-white/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="video"
                    value={v.value}
                    checked={checked}
                    onChange={() => set("video")(v.value)}
                    className="radio radio-accent radio-sm"
                  />
                  <span className="text-sm">
                    {v.label}
                    <span className="block text-xs text-white/50">
                      USD {YOAO_PRICE_PER_HOUR[v.value]} por hora de video
                    </span>
                  </span>
                </label>
              );
            })}
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
          Ahorro <strong className="text-white">{usd(Math.max(0, r.savings))}</strong>
        </span>
        <span className="text-accent font-semibold">Ver resultado ↓</span>
      </a>

      <aside id="resultado" ref={resultRef} className="lg:col-span-2 scroll-mt-28" aria-live="polite">
        <section className="lg:sticky lg:top-28 border border-accent/40 bg-white/5 rounded-2xl p-6">
          <h2 className="text-sm uppercase tracking-widest text-white/60">Tu comparación</h2>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <div className="rounded-xl bg-primary/60 border border-white/10 p-4">
              <p className="text-xs text-white/60">Aforo manual</p>
              <p className="text-xl font-bold text-white mt-1">{usd(r.manual)}</p>
            </div>
            <div className="rounded-xl bg-accent/15 border border-accent/40 p-4">
              <p className="text-xs text-white/60">Video con IA</p>
              <p className="text-xl font-bold text-white mt-1">{usd(r.yoao)}</p>
            </div>
          </div>

          <p className="text-sm text-white/60 mt-5">Ahorro</p>
          <p className={`text-2xl font-bold ${r.savings > 0 ? "text-success" : "text-error"}`}>
            {usd(r.savings)}
            {r.savings > 0 && (
              <span className="text-base font-semibold"> ({Math.round(r.savingsPct)}%)</span>
            )}
          </p>

          <ul className="text-xs text-white/60 mt-3 space-y-1">
            <li>
              Terreno manual: {num(r.fieldHours)} horas-persona, {usd(r.fieldCost)}
            </li>
            <li>Digitación y revisión: {usd(r.digitizingCost)}</li>
            <li>
              Video a analizar: {num(r.videoHours)} h, {num(r.credits)} créditos ({num(r.packs)}{" "}
              {r.packs === 1 ? "pack" : "packs"} de 60)
            </li>
          </ul>

          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener"
            onClick={() =>
              track("aforo_calc_cta", { video_hours: r.videoHours, savings: Math.round(r.savings) })
            }
            className="mt-6 inline-flex items-center justify-center w-full min-h-14 px-6 py-3 leading-tight rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-lg text-center transition-colors"
          >
            Crea tu cuenta y sube tu primer video
          </a>
          <p className="text-xs text-white/50 mt-3 text-center">
            Sin costo fijo mensual ni consumo mínimo.
          </p>
          <p className="text-[11px] text-white/40 mt-4 leading-relaxed">
            Precio de YOAO sin impuestos. No incluye la grabación del video. El costo del aforo
            manual depende de los valores que ingresaste.
          </p>
        </section>
      </aside>
    </div>
  );
}
