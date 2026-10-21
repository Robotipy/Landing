"use client";

import { useState } from "react";
import NextLink from "next/link";

const AREAS = [
  "Desarrollo de robots (RPA)",
  "Agentes de IA y chatbots",
  "Software a medida",
  "Datos e inteligencia artificial",
  "Marketing y ventas",
  "Otra",
];
const COUNTRIES = ["Chile", "Argentina", "Colombia", "España", "Otro"];
const DURATIONS = ["1 a 2 meses", "3 meses", "4 a 6 meses", "Más de 6 meses"];
const MAX_MB = 4;

const label = "block text-sm font-semibold text-[#00182B]";
const field =
  "mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-[#00182B] placeholder:text-slate-400 focus:border-[#039695] focus:outline-none focus:ring-2 focus:ring-[#039695]/30";

export default function FormularioPostulacion() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const [tipo, setTipo] = useState("Trabajo");
  const practica = tipo === "Práctica laboral";

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const cv = form.get("cv");
    const hasCv = cv && cv.size > 0;
    if (hasCv && cv.type !== "application/pdf") return setError("El CV debe ser un archivo PDF.");
    if (hasCv && cv.size > MAX_MB * 1024 * 1024) return setError(`El CV no puede pesar más de ${MAX_MB} MB.`);
    if (!hasCv && !form.get("linkedin")) return setError("Adjunta tu CV o deja el enlace a tu perfil de LinkedIn.");

    setStatus("sending");
    try {
      const res = await fetch("/api/postulacion", { method: "POST", body: form });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError("No pudimos enviar tu postulación. Inténtalo de nuevo en unos minutos.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-[#00182B] p-10 text-white" role="status">
        <p className="text-3xl font-light">Gracias por postular.</p>
        <p className="mt-4 text-white/80">
          Recibimos tus datos{practica ? " para la práctica laboral" : ""}. Si tu perfil calza con lo que buscamos, te
          escribiremos al correo que dejaste.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <fieldset>
        <legend className={label}>¿Qué buscas? *</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {[
            { value: "Trabajo", text: "Un trabajo en el equipo" },
            { value: "Práctica laboral", text: "Hacer mi práctica laboral" },
          ].map((o) => (
            <label
              key={o.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3.5 text-base transition ${
                tipo === o.value ? "border-[#039695] bg-[#039695]/5 ring-2 ring-[#039695]/25" : "border-slate-300 hover:border-slate-400"
              }`}
            >
              <input
                type="radio"
                name="tipo"
                value={o.value}
                checked={tipo === o.value}
                onChange={() => setTipo(o.value)}
                className="h-4 w-4 accent-[#039695]"
              />
              <span>
                <span className="block font-semibold text-[#00182B]">{o.value}</span>
                <span className="block text-sm text-slate-600">{o.text}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={label}>Nombre completo *</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Correo *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Teléfono</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+56 9 1234 5678" className={field} />
        </div>
        <div>
          <label htmlFor="country" className={label}>País *</label>
          <select id="country" name="country" required defaultValue="" className={field}>
            <option value="" disabled>Elige tu país</option>
            {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="area" className={label}>Área de interés *</label>
          <select id="area" name="area" required defaultValue="" className={field}>
            <option value="" disabled>Elige un área</option>
            {AREAS.map((a) => <option key={a}>{a}</option>)}
          </select>
        </div>
        {practica && (
          <>
            <div>
              <label htmlFor="institucion" className={label}>Universidad o instituto *</label>
              <input id="institucion" name="institucion" required className={field} />
            </div>
            <div>
              <label htmlFor="carrera" className={label}>Carrera *</label>
              <input id="carrera" name="carrera" required placeholder="Ej: Ingeniería en Informática" className={field} />
            </div>
            <div>
              <label htmlFor="inicio" className={label}>¿Desde cuándo puedes empezar? *</label>
              <input id="inicio" name="inicio" type="month" required className={field} />
            </div>
            <div>
              <label htmlFor="duracion" className={label}>Duración de la práctica *</label>
              <select id="duracion" name="duracion" required defaultValue="" className={field}>
                <option value="" disabled>Elige la duración</option>
                {DURATIONS.map((d) => <option key={d}>{d}</option>)}
              </select>
            </div>
          </>
        )}
        <div className="sm:col-span-2">
          <label htmlFor="linkedin" className={label}>Perfil de LinkedIn</label>
          <input id="linkedin" name="linkedin" type="url" placeholder="https://www.linkedin.com/in/tu-perfil" className={field} />
        </div>
        <div className="sm:col-span-2">
          <span className={label}>CV en PDF (máximo {MAX_MB} MB)</span>
          <label
            htmlFor="cv"
            className="mt-2 flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-600 hover:border-[#039695]"
          >
            <span className="truncate">{fileName || "Selecciona un archivo"}</span>
            <span className="shrink-0 rounded-md bg-white px-3 py-1.5 font-semibold text-[#00182B] ring-1 ring-slate-300">Examinar</span>
          </label>
          <input
            id="cv"
            name="cv"
            type="file"
            accept="application/pdf"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
          <p className="mt-2 text-xs text-slate-500">Adjunta tu CV o deja tu LinkedIn: con uno de los dos basta.</p>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>
            {practica ? "¿Qué te gustaría aprender en tu práctica?" : "¿Por qué te interesa trabajar en Robotipy?"}
          </label>
          <textarea id="message" name="message" rows={4} className={field} />
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="empresa_web">No completar</label>
        <input id="empresa_web" name="empresa_web" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="consent" value="yes" required className="mt-0.5 h-4 w-4 accent-[#039695]" />
        <span>
          Acepto que Robotipy use mis datos para evaluar mi postulación, según su{" "}
          <NextLink href="/es/privacy-policy" className="font-semibold text-[#027a79] underline-offset-2 hover:underline">
            política de privacidad
          </NextLink>
          .
        </span>
      </label>

      {error && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-md bg-[#039695] px-8 py-4 text-base font-semibold text-[#00182B] transition hover:bg-[#0bb3b1] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Enviando..." : "Enviar postulación"}
      </button>
    </form>
  );
}
