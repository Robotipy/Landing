"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { contactHref } from "@/libs/landingFacts";
import { useLandingState } from "./LandingState";
import { pricing, usd } from "./pricing";
import { LANDING_VARIANT, trackLanding } from "./track";
import { btnPrimary, line, textMuted } from "./ui";

const PROCESOS = [
  { value: "conciliacion-bancaria", label: "Conciliación bancaria" },
  { value: "carga-facturas", label: "Carga de facturas" },
  { value: "extractos-erp", label: "Extractos bancarios en el ERP" },
  { value: "ordenes-compra", label: "Órdenes de compra" },
  { value: "reportes", label: "Reportes" },
  { value: "otro", label: "Otro" },
];

const LICENCIA = [
  { value: "si", label: "Sí" },
  { value: "no", label: "No" },
  { value: "no-se", label: "No sé" },
];

function OptionGroup({ name, legend, options, value, onChange, columns, hint }) {
  return (
    <fieldset>
      <legend className="text-[15px] font-bold leading-6">{legend}</legend>
      {hint && <p className={`mt-1 text-sm leading-5 ${textMuted}`}>{hint}</p>}
      <div className={`mt-3 grid gap-2 ${columns}`}>
        {options.map((o) => {
          const checked = value === o.value;
          return (
            <label
              key={o.value}
              className={`flex min-h-12 cursor-pointer items-center rounded-[10px] border px-4 py-2.5 text-[15px] leading-5 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                checked
                  ? "border-accent bg-[#F4FAFA] font-bold ring-1 ring-accent"
                  : "border-[#6B7280] hover:border-[#0A2540]"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={o.value}
                checked={checked}
                onChange={() => onChange(o.value)}
                className="sr-only"
              />
              {o.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

// No envía datos: arma el enlace al formulario de /contact-us con la variante,
// el servicio y las respuestas de esta página (sin datos personales).
export default function DiagnosticCta() {
  const { evaluation, payback } = useLandingState();
  const [proceso, setProceso] = useState("");
  const [licencia, setLicencia] = useState("");

  const extra = { servicio: "automatizacion" };
  if (proceso) extra.proceso = proceso;
  if (licencia) extra.licencia_rocketbot = licencia;
  if (evaluation) {
    extra.puntaje = String(evaluation.score);
    extra.tecnologia = evaluation.tech;
  }
  if (payback) {
    extra.horas_mes = String(payback.hoursMonth);
    if (payback.months) extra.retorno_meses = String(payback.months);
  }
  const href = contactHref(LANDING_VARIANT, extra);

  return (
    <div className={`rounded-xl border ${line} bg-white p-6 text-[#0A2540] md:p-8`}>
      <div className="space-y-7">
        <OptionGroup
          name="proceso"
          legend="¿Qué proceso quieres automatizar?"
          options={PROCESOS}
          value={proceso}
          onChange={setProceso}
          columns="grid-cols-1 min-[420px]:grid-cols-2"
        />
        <OptionGroup
          name="licencia_rocketbot"
          legend="¿Tu empresa tiene licencia Rocketbot?"
          hint={`Si ya tiene una, los ${usd(pricing.license)} de licencia no aparecen en tu cotización.`}
          options={LICENCIA}
          value={licencia}
          onChange={setLicencia}
          columns="grid-cols-3"
        />
      </div>

      <Link
        href={href}
        onClick={() =>
          trackLanding("landing_cta_click", {
            location: "cierre",
            proceso: proceso || "sin_respuesta",
            licencia_rocketbot: licencia || "sin_respuesta",
          })
        }
        className={`${btnPrimary} mt-8 w-full`}
      >
        Agenda tu diagnóstico sin costo
      </Link>
      <p className={`mt-3 text-center text-sm leading-5 ${textMuted}`}>
        En el siguiente paso dejas tus datos de contacto y eliges el horario en la agenda.
      </p>
    </div>
  );
}
