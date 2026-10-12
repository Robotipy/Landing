"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { contactHref } from "@/libs/landingFacts";
import { useIndustry } from "./IndustryContext";
import { trackLanding, VARIANT } from "./track";
import { ctaClass } from "./ui";

const STEP_TITLES = ["Tu proceso", "Sistemas y volumen", "Revisa y agenda"];
const PROCESS_MAX = 160;

const fieldBase =
  "w-full min-h-12 rounded-lg border bg-primary px-4 text-base text-white placeholder:text-white/40 focus:border-accent focus:outline-none";

// Prepara el diagnóstico en tres pasos sin enviar datos: el último botón
// abre /contact-us con el sector y el contexto ya escritos en el campo de
// información adicional. Nombre, correo y teléfono se piden allá.
export default function DiagnosticForm({ sectors, systems, volumes, servicioBySector }) {
  const locale = useLocale();
  const { industry, score, selectIndustry } = useIndustry();
  const [step, setStep] = useState(0);
  const [sector, setSector] = useState(industry || "");
  const [processText, setProcessText] = useState("");
  const [picked, setPicked] = useState([]);
  const [volume, setVolume] = useState("");
  const [error, setError] = useState("");
  const headingRef = useRef(null);
  const reachedSteps = useRef(new Set());

  useEffect(() => {
    if (industry) setSector(industry);
  }, [industry]);

  useEffect(() => {
    if (reachedSteps.current.has(step)) return;
    reachedSteps.current.add(step);
    if (step > 0) trackLanding("landing_form_step", { paso: step + 1, industria: sector || "ninguna" });
  }, [step, sector]);

  const sectorLabel = sectors.find((s) => s.value === sector)?.label || "";

  const additionalInfo = useMemo(() => {
    const parts = [];
    if (sectorLabel) parts.push(`Sector: ${sectorLabel}.`);
    const processClean = processText.trim().replace(/[.\s]+$/, "");
    if (processClean) parts.push(`Proceso: ${processClean}.`);
    if (picked.length) parts.push(`Sistemas: ${picked.join(", ")}.`);
    if (volume) parts.push(`Volumen: ${volume}.`);
    if (score !== null && score !== undefined) parts.push(`Puntaje del evaluador: ${score} de 100.`);
    return parts.join(" ");
  }, [sectorLabel, processText, picked, volume, score]);

  const href = useMemo(() => {
    const extra = {
      servicio: servicioBySector[sector] || "automatizacion",
      industria: sector || "otro",
      additionalInfo,
    };
    if (score !== null && score !== undefined) extra.puntaje = String(score);
    return `/${locale}${contactHref(VARIANT, extra)}`;
  }, [sector, additionalInfo, score, servicioBySector, locale]);

  const goTo = (next) => {
    setStep(next);
    window.requestAnimationFrame(() => headingRef.current?.focus());
  };

  const onContinue = () => {
    if (step === 0 && !sector) {
      setError("Completa los campos marcados con asterisco.");
      return;
    }
    setError("");
    goTo(Math.min(step + 1, STEP_TITLES.length - 1));
  };

  const onSectorChange = (value) => {
    setSector(value);
    setError("");
    if (servicioBySector[value]) selectIndustry(value, "formulario");
  };

  const toggleSystem = (name) =>
    setPicked((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]));

  const onSubmit = () => {
    trackLanding("landing_form_submit", {
      industria: sector || "ninguna",
      sistemas: picked.join("|") || "ninguno",
      volumen: volume || "sin dato",
      puntaje: score ?? "sin dato",
    });
  };

  return (
    <div className="rounded-xl border border-white/10 bg-secondary p-5 md:p-8">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
          Paso {step + 1} de {STEP_TITLES.length}
        </p>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5" aria-hidden="true">
        {STEP_TITLES.map((title, i) => (
          <span key={title} className={`h-1.5 rounded-full ${i <= step ? "bg-accent" : "bg-white/10"}`} />
        ))}
      </div>

      <h3
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-xl font-bold text-white focus:outline-none md:text-2xl"
      >
        {STEP_TITLES[step]}
      </h3>

      {step === 0 && (
        <div className="mt-6 space-y-5">
          <div>
            <label htmlFor="l2-sector" className="mb-2 block text-sm font-medium text-white/85">
              Sector <span className="text-accent">*</span>
            </label>
            <select
              id="l2-sector"
              required
              aria-invalid={Boolean(error) && !sector}
              aria-describedby={error ? "l2-form-error" : undefined}
              className={`${fieldBase} ${error && !sector ? "border-red-400" : "border-white/20"}`}
              value={sector}
              onChange={(e) => onSectorChange(e.target.value)}
            >
              <option value="" disabled>
                Elige tu sector
              </option>
              {sectors.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="l2-process" className="mb-2 block text-sm font-medium text-white/85">
              ¿Qué proceso quieres automatizar?
            </label>
            <input
              id="l2-process"
              type="text"
              maxLength={PROCESS_MAX}
              autoComplete="off"
              placeholder="Ej.: carga diaria de cartolas en SAP"
              className={`${fieldBase} border-white/20`}
              value={processText}
              onChange={(e) => setProcessText(e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="mt-6 space-y-6">
          <fieldset>
            <legend className="mb-3 text-sm font-medium text-white/85">¿Qué sistemas toca el proceso?</legend>
            <div className="flex flex-wrap gap-2">
              {systems.map((name) => {
                const checked = picked.includes(name);
                return (
                  <label
                    key={name}
                    className={`flex min-h-10 cursor-pointer items-center rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-white ${
                      checked
                        ? "border-accent bg-accent font-semibold text-primary"
                        : "border-white/20 text-white/85 hover:border-white/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleSystem(name)}
                    />
                    {name}
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div>
            <label htmlFor="l2-volume" className="mb-2 block text-sm font-medium text-white/85">
              Volumen aproximado
            </label>
            <select
              id="l2-volume"
              className={`${fieldBase} border-white/20`}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            >
              <option value="">Elige una opción</option>
              {volumes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-6">
          <dl className="divide-y divide-white/10 rounded-lg border border-white/10">
            {[
              ["Sector", sectorLabel || "Sin elegir"],
              ["Proceso", processText.trim() || "Sin detalle"],
              ["Sistemas", picked.length ? picked.join(", ") : "Sin detalle"],
              ["Volumen", volume || "Sin detalle"],
              ...(score !== null && score !== undefined ? [["Puntaje del evaluador", `${score} de 100`]] : []),
            ].map(([term, detail]) => (
              <div key={term} className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">{term}</dt>
                <dd className="break-words text-sm text-white/90">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            En el formulario siguiente dejas tu nombre, tu correo de trabajo y tu teléfono. Lo que anotaste aquí
            ya va escrito en el campo de información adicional.
          </p>
        </div>
      )}

      {error && (
        <p id="l2-form-error" role="alert" className="mt-5 text-sm font-medium text-red-300">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="min-h-12 rounded-lg border border-white/20 px-6 text-base font-semibold text-white hover:border-white/50"
          >
            Atrás
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}
        {step < STEP_TITLES.length - 1 ? (
          <button type="button" onClick={onContinue} className={ctaClass}>
            Continuar
          </button>
        ) : (
          <Link href={href} onClick={onSubmit} className={ctaClass}>
            Agenda tu diagnóstico sin costo
          </Link>
        )}
      </div>
      {step === STEP_TITLES.length - 1 && (
        <p className="mt-4 text-sm text-white/60 sm:text-right">
          Después de dejar tus datos eliges el horario en nuestro calendario.
        </p>
      )}
    </div>
  );
}
