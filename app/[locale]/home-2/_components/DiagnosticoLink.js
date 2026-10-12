"use client";

import { useId, useState } from "react";
import ButtonMain from "@/components/ButtonMain";
import { contactHref } from "@/libs/landingFacts";
import { VARIANT } from "./track";

const NONE = "";

// El servicio de /contact-us se deduce del sistema: atención va a chatbot y
// cualquier otro sistema a automatización. "Otro" o vacío no envía servicio,
// así el formulario muestra su selector "¿Qué te interesa?".
function servicioFor(sistema) {
  if (!sistema || sistema === "otro") return NONE;
  return sistema === "atencion" ? "chatbot" : "automatizacion";
}

function buildHref(industria, sistema) {
  const extra = {};
  if (industria) extra.industria = industria;
  if (sistema) extra.sistema = sistema;
  const servicio = servicioFor(sistema);
  if (servicio) extra.servicio = servicio;
  return contactHref(VARIANT, extra);
}

const selectClass =
  "h2-select h2-bg h2-text h2-line-strong min-h-12 w-full rounded-lg border px-3 pr-10 text-base transition-colors hover:border-white/30";

export default function DiagnosticoLink({ industries, systems, ctaLabel }) {
  const [industria, setIndustria] = useState(NONE);
  const [sistema, setSistema] = useState(NONE);
  const baseId = useId();
  const industriaId = `${baseId}-industria`;
  const sistemaId = `${baseId}-sistema`;

  return (
    <div className="mx-auto max-w-[560px] text-left">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={industriaId} className="h2-mono h2-muted mb-2 block text-xs uppercase tracking-[0.12em]">
            Tu industria
          </label>
          <select
            id={industriaId}
            value={industria}
            onChange={(event) => setIndustria(event.target.value)}
            className={selectClass}
          >
            <option value={NONE}>Elige una opción</option>
            {industries.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={sistemaId} className="h2-mono h2-muted mb-2 block text-xs uppercase tracking-[0.12em]">
            Tu sistema
          </label>
          <select
            id={sistemaId}
            value={sistema}
            onChange={(event) => setSistema(event.target.value)}
            className={selectClass}
          >
            <option value={NONE}>Elige una opción</option>
            {systems.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <ButtonMain
          text={ctaLabel}
          link={buildHref(industria, sistema)}
          noblank
          data-track="cta_diagnostico"
          data-track-item="diagnostico"
          className="inline-flex min-h-12 w-full items-center justify-center text-center text-base font-bold leading-tight transition hover:brightness-110 sm:w-auto"
          style={{ backgroundColor: "rgb(3,150,149)", color: "#00182B", border: "none", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
}
