// Piezas de interfaz compartidas del home /home-2.
// Paleta: azul marino #00182B, teal de marca rgb(3,150,149) = #039695.
// Teal oscuro #027a79 para texto chico sobre blanco (contraste AA) y
// teal claro #4fd1d0 para texto chico sobre azul marino.

import { Link } from "@/i18n/routing";
import { contactHref } from "@/libs/landingFacts";
import { VARIANT } from "../data";
import Icon from "./icons";

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const btnBase =
  "inline-flex min-h-[56px] items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-lg font-bold transition duration-200 hover:-translate-y-0.5 motion-reduce:transform-none";

export const btnPrimary = `${btnBase} bg-[#039695] text-[#00182B] shadow-lg shadow-[#039695]/25 hover:bg-[#0bb3b1]`;
export const btnNavy = `${btnBase} bg-[#00182B] text-white shadow-lg shadow-[#00182B]/20 hover:bg-[#0b2c47]`;
export const btnOutlineDark = `${btnBase} border-2 border-white/40 text-white hover:border-white hover:bg-white/10`;
export const btnOutlineLight = `${btnBase} border-2 border-[#00182B]/25 text-[#00182B] hover:border-[#00182B] hover:bg-[#00182B]/5`;

export const textLink =
  "inline-flex items-center gap-2 text-lg font-bold underline-offset-4 hover:underline";

// Enlace al formulario de contacto con el servicio de la sección.
export function ctaHref(servicio) {
  return servicio ? contactHref(VARIANT, { servicio }) : contactHref(VARIANT);
}

export function CtaButton({
  servicio,
  children = "Agenda una reunión",
  variant = "primary",
  className = "",
}) {
  const cls = variant === "navy" ? btnNavy : btnPrimary;
  return (
    <Link href={ctaHref(servicio)} className={`${cls} ${className}`}>
      {children}
      <Icon name="arrow" className="h-5 w-5" />
    </Link>
  );
}

export function SectionHeading({ id, title, lead, dark = false, align = "center" }) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";
  return (
    <div className={`flex max-w-3xl flex-col ${alignCls}`}>
      <h2
        id={id}
        className={`text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-[#00182B]"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-lg leading-relaxed sm:text-xl ${
            dark ? "text-white/80" : "text-slate-700"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
