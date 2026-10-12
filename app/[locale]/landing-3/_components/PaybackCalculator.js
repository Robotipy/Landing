"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";
import { computeROI } from "@/libs/roi";
import { useLandingState } from "./LandingState";
import { formatNumber, pricing, usd } from "./pricing";
import { trackLanding } from "./track";
import { line, textMuted } from "./ui";

const FIELDS = [
  { id: "personas", label: "Personas que hacen el proceso", initial: "1", max: 500, decimals: false },
  { id: "salario", label: "Sueldo mensual por persona, en USD", initial: "1000", max: 100000, decimals: false, prefix: "USD" },
  { id: "diasMes", label: "Días al mes que se hace el proceso", initial: "22", max: 31, decimals: false },
  { id: "horasDia", label: "Horas al día por persona", initial: "4", max: 24, decimals: true },
];

const PAYBACK_LIMIT_MONTHS = 36;

const toNumber = (raw, max) => {
  const n = parseFloat(String(raw).replace(",", "."));
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(n, max);
};

function Switch({ id, checked, onChange, label, detail }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div>
        <p id={`${id}-label`} className="text-[15px] font-bold leading-6">
          {label}
        </p>
        <p id={`${id}-detail`} className={`text-sm leading-5 ${textMuted}`}>
          {detail}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        aria-describedby={`${id}-detail`}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 inline-flex h-7 w-12 shrink-0 items-center rounded-full border-2 transition-colors ${
          checked ? "border-accent bg-accent" : "border-[#6B7280] bg-white"
        }`}
      >
        <span
          aria-hidden="true"
          className={`inline-block h-5 w-5 rounded-full transition-transform ${
            checked ? "translate-x-[22px] bg-white" : "translate-x-[2px] bg-[#6B7280]"
          }`}
        />
      </button>
    </div>
  );
}

function Result({ label, value, suffix, accent = false, children }) {
  return (
    <div className="py-5 first:pt-0 last:pb-0">
      <p className={`text-sm ${textMuted}`}>{label}</p>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
        <span
          className={`min-w-0 text-[36px] font-bold leading-tight tabular-nums [overflow-wrap:anywhere] md:text-[40px] ${
            accent ? "text-accent" : "text-[#0A2540]"
          }`}
        >
          {value}
        </span>
        {suffix && <span className={`text-base ${textMuted}`}>{suffix}</span>}
      </p>
      {children}
    </div>
  );
}

export default function PaybackCalculator() {
  const { setPayback } = useLandingState();
  const [values, setValues] = useState(() =>
    Object.fromEntries(FIELDS.map((f) => [f.id, f.initial]))
  );
  const [hasLicense, setHasLicense] = useState(false);
  const [wantsSupport, setWantsSupport] = useState(false);
  const touched = useRef(false);

  const markUsed = () => {
    if (!touched.current) {
      touched.current = true;
      trackLanding("landing_calculadora_use");
    }
  };

  const updateField = (field, raw) => {
    const clean = field.decimals ? raw.replace(/[^\d.,]/g, "") : raw.replace(/\D/g, "");
    setValues((prev) => ({ ...prev, [field.id]: clean }));
    markUsed();
  };

  const n = Object.fromEntries(FIELDS.map((f) => [f.id, toNumber(values[f.id], f.max)]));
  const licencias = hasLicense ? 0 : pricing.license;
  const mantenimiento = wantsSupport ? pricing.supportFrom * 12 : 0;

  const roi = computeROI({
    ...n,
    erroresMes: 0,
    minPorError: 0,
    horasExtraMes: 0,
    costoHoraExtra: 0,
    multasMes: 0,
    costoDesarrollo: pricing.rpaAverage,
    licenciasAnual: licencias,
    mantenimiento,
  });

  const annualCost = roi.beneficioAnual;
  const investment = roi.inversionAño1;
  const rawMonths = annualCost > 0 ? investment / (annualCost / 12) : Infinity;
  const months = Number.isFinite(rawMonths) ? Math.ceil(Math.round(rawMonths * 100) / 100) : null;
  const paysBack = months !== null && months <= PAYBACK_LIMIT_MONTHS;
  const hoursMonth = Math.round(roi.totalHorasMes);

  useEffect(() => {
    if (!touched.current) return;
    setPayback({ hoursMonth, months: paysBack ? months : null });
  }, [hoursMonth, months, paysBack, setPayback]);

  const detailParams = new URLSearchParams({
    personas: String(n.personas),
    salario: String(n.salario),
    diasMes: String(n.diasMes),
    horasDia: String(n.horasDia),
    erroresMes: "0",
    costoDesarrollo: String(pricing.rpaAverage),
    licenciasAnual: String(licencias),
    mantenimiento: String(mantenimiento),
  });

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <div className="grid gap-5 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <div key={f.id}>
              <label htmlFor={`calc-${f.id}`} className="block text-[15px] font-bold leading-6">
                {f.label}
              </label>
              <div className="relative mt-2">
                {f.prefix && (
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-y-0 left-4 flex items-center text-base ${textMuted}`}
                  >
                    {f.prefix}
                  </span>
                )}
                <input
                  id={`calc-${f.id}`}
                  type="text"
                  inputMode={f.decimals ? "decimal" : "numeric"}
                  autoComplete="off"
                  value={values[f.id]}
                  onChange={(e) => updateField(f, e.target.value)}
                  className={`h-12 w-full rounded-[10px] border border-[#6B7280] bg-white text-lg tabular-nums text-[#0A2540] ${
                    f.prefix ? "pl-14 pr-4" : "px-4"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-6 divide-y ${line} border-y ${line}`}>
          <Switch
            id="calc-licencia"
            checked={hasLicense}
            onChange={(v) => {
              setHasLicense(v);
              markUsed();
            }}
            label="Mi empresa ya tiene licencia Rocketbot"
            detail={
              hasLicense
                ? "La licencia no se suma a la inversión."
                : `Apagado, se suman ${usd(pricing.license)} a la inversión.`
            }
          />
          <Switch
            id="calc-soporte"
            checked={wantsSupport}
            onChange={(v) => {
              setWantsSupport(v);
              markUsed();
            }}
            label="Quiero soporte mensual"
            detail={`Encendido, se suman ${usd(pricing.supportFrom)} al mes (${usd(
              pricing.supportFrom * 12
            )} el primer año).`}
          />
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className={`rounded-xl border ${line} bg-white p-6 md:p-8`}>
          <div className={`divide-y ${line}`}>
            <Result label="Tu proceso manual cuesta" value={usd(annualCost)} suffix="al año">
              <p className={`mt-1 text-sm tabular-nums ${textMuted}`}>
                {formatNumber(hoursMonth)} horas al mes de trabajo manual
              </p>
            </Result>
            <Result label="Inversión el primer año" value={usd(investment)}>
              <ul className={`mt-2 space-y-1 text-sm tabular-nums ${textMuted}`}>
                <li>Desarrollo: {usd(pricing.rpaAverage)} en promedio</li>
                {licencias > 0 && <li>Licencia Rocketbot: {usd(licencias)}</li>}
                {mantenimiento > 0 && <li>Soporte por 12 meses: {usd(mantenimiento)}</li>}
              </ul>
            </Result>
            <div aria-live="polite" className="pt-5">
              {paysBack ? (
                <Result label="Se paga en" value={months} suffix={months === 1 ? "mes" : "meses"} accent />
              ) : (
                <div>
                  <p className="text-base font-bold leading-[26px]">
                    Con estos números el proceso no se paga en tres años.
                  </p>
                  <p className={`mt-1 text-[15px] leading-6 ${textMuted}`}>
                    En el diagnóstico te decimos si conviene o no.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className={`mt-4 text-sm leading-5 ${textMuted}`}>
          Cálculo referencial con el precio promedio. Supone que el robot toma todas las horas del
          proceso. En el diagnóstico vemos qué parte queda para tu equipo.
        </p>
        <Link
          href={`/roi-calculator?${detailParams.toString()}`}
          onClick={() => trackLanding("landing_calculadora_detalle")}
          className="mt-4 inline-block text-[15px] font-bold text-[#0A2540] underline decoration-accent decoration-2 underline-offset-4 hover:decoration-[#0A2540]"
        >
          Ver el cálculo completo con errores, horas extra y multas
        </Link>
      </div>
    </div>
  );
}
