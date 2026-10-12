"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";
import { contactHref } from "@/libs/landingFacts";
import { trackLanding } from "./tracking";
import { VARIANT } from "./variant";

const SERVICIO = "automatizacion";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];

// Calificador de cargo y área. No envía datos: arma el enlace a /contact-us
// con el cargo (role) y el contexto (additionalInfo) para que el formulario
// existente llegue precargado.
function GrupoOpciones({ name, legend, opciones, tipo, valor, onChange, requerido, error }) {
  const errorId = `${name}-error`;
  return (
    <fieldset className="min-w-0">
      <legend className="text-[14px] font-semibold leading-5">
        {legend}
        {requerido ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (obligatorio)</span>
          </>
        ) : (
          <span className="lp1-muted font-normal"> (opcional)</span>
        )}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {opciones.map((opcion, i) => {
          const id = `${name}-${i}`;
          const marcado = tipo === "radio" ? valor === opcion : valor.includes(opcion);
          return (
            <label key={opcion} htmlFor={id} className="cursor-pointer">
              <input
                id={id}
                type={tipo}
                name={name}
                value={opcion}
                checked={marcado}
                onChange={() => onChange(opcion)}
                className="peer sr-only"
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? errorId : undefined}
              />
              <span
                className={`inline-flex min-h-[40px] items-center rounded-md border px-3.5 py-2 text-[15px] leading-5 transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#039695] ${
                  marcado
                    ? "border-[#00182B] bg-[#00182B] text-white"
                    : error
                      ? "border-[#B42318] bg-white hover:border-[#00182B]"
                      : "border-[#00182B]/50 bg-white hover:border-[#00182B]"
                }`}
              >
                {opcion}
              </span>
            </label>
          );
        })}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-[14px] leading-5 text-[#B42318]">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

export default function AgendaCalificador({ copy }) {
  const router = useRouter();
  const [cargo, setCargo] = useState("");
  const [area, setArea] = useState("");
  const [sistemas, setSistemas] = useState([]);
  const [volumen, setVolumen] = useState("");
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const inicio = useRef(false);
  const formRef = useRef(null);

  const marcarInicio = () => {
    if (inicio.current) return;
    inicio.current = true;
    trackLanding("landing_form_start");
  };

  const elegir = (campo, setter) => (opcion) => {
    setter(opcion);
    setErrores((prev) => ({ ...prev, [campo]: undefined }));
  };

  const alternarSistema = (opcion) =>
    setSistemas((prev) => (prev.includes(opcion) ? prev.filter((s) => s !== opcion) : [...prev, opcion]));

  const construirHref = () => {
    const lineas = [`Origen: ${VARIANT} (Ciclo Captura)`, `Área: ${area}`];
    if (sistemas.length) lineas.push(`Sistemas: ${sistemas.join(", ")}`);
    if (volumen.trim()) lineas.push(`Volumen: ${volumen.trim().slice(0, 200)}`);
    const params = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((key) => {
      const v = params.get(key);
      if (v) lineas.push(`${key}: ${v.slice(0, 100)}`);
    });
    return contactHref(VARIANT, { servicio: SERVICIO, role: cargo, additionalInfo: lineas.join("\n") });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (enviando) return;
    const nuevos = {};
    if (!cargo) nuevos.cargo = copy.error;
    if (!area) nuevos.area = copy.error;
    setErrores(nuevos);
    if (Object.keys(nuevos).length) {
      const primero = nuevos.cargo ? "cargo-0" : "area-0";
      formRef.current?.querySelector(`#${primero}`)?.focus();
      return;
    }
    setEnviando(true);
    trackLanding("landing_cta_click", {
      cta_location: "agenda",
      lead_role: cargo,
      lead_area: area,
      lead_systems: sistemas.join("|"),
    });
    router.push(`/es${construirHref()}`);
    window.setTimeout(() => setEnviando(false), 4000);
  };

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      onFocusCapture={marcarInicio}
      aria-label="Agenda tu diagnóstico ejecutivo"
      className="space-y-8"
    >
      <GrupoOpciones
        name="cargo"
        legend={copy.cargo.legend}
        opciones={copy.cargo.opciones}
        tipo="radio"
        valor={cargo}
        onChange={elegir("cargo", setCargo)}
        requerido
        error={errores.cargo}
      />
      <GrupoOpciones
        name="area"
        legend={copy.area.legend}
        opciones={copy.area.opciones}
        tipo="radio"
        valor={area}
        onChange={elegir("area", setArea)}
        requerido
        error={errores.area}
      />
      <GrupoOpciones
        name="sistemas"
        legend={copy.sistemas.legend}
        opciones={copy.sistemas.opciones}
        tipo="checkbox"
        valor={sistemas}
        onChange={alternarSistema}
      />
      <div>
        <label htmlFor="volumen" className="text-[14px] font-semibold leading-5">
          {copy.volumen.label}
          <span className="lp1-muted font-normal"> (opcional)</span>
        </label>
        <input
          id="volumen"
          name="volumen"
          type="text"
          maxLength={200}
          value={volumen}
          onChange={(e) => setVolumen(e.target.value)}
          placeholder={copy.volumen.placeholder}
          className="mt-3 h-12 w-full rounded-md border border-[#00182B]/50 bg-white px-4 text-[16px] text-[#00182B] placeholder:text-[#00182B]/[0.62] focus:border-[#039695]"
        />
      </div>

      <div className="space-y-4 border-t lp1-rule pt-8">
        <button
          type="submit"
          aria-disabled={enviando ? "true" : undefined}
          className="lp1-cta min-h-[48px] w-full px-6 py-3 text-[17px] leading-6 md:w-auto"
        >
          {enviando ? copy.cargando : copy.boton}
        </button>
        <p className="lp1-muted text-[14px] leading-[22px]">
          {copy.ayuda}{" "}
          <Link href="/privacy-policy" target="_blank" rel="noopener" className="lp1-link">
            {copy.privacidad}
          </Link>
          .
        </p>
        <p className="text-[14px] leading-[22px]">
          {copy.directo}{" "}
          <Link
            href={contactHref(VARIANT, { servicio: SERVICIO })}
            className="lp1-link"
            onClick={() => trackLanding("landing_cta_click", { cta_location: "agenda_directo" })}
          >
            {copy.directoLink}
          </Link>
        </p>
      </div>
    </form>
  );
}
