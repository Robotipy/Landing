import { contactHref } from "@/libs/landingFacts";

export const VARIANT = "home-3";

// Enlace al formulario de contacto con el servicio de cada sección.
export const agendaHref = (servicio) => contactHref(VARIANT, { servicio });

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

// Teal de marca oscurecido solo para texto sobre blanco o gris (contraste AA).
export const tealText = "text-[#027776]";
export const muted = "text-[#3B4A57]";
export const grayBg = "bg-[#F4F6F7]";

const btnBase =
  "inline-flex min-h-[56px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 text-[19px] font-bold transition duration-200 hover:-translate-y-0.5 motion-reduce:transform-none";

export const btnPrimary = `${btnBase} bg-accent text-white shadow-lg shadow-accent/25 hover:bg-[#027776]`;
export const btnGhostLight = `${btnBase} border-2 border-primary/15 bg-white text-primary hover:border-accent`;
export const btnGhostDark = `${btnBase} border-2 border-white/35 text-white hover:border-white hover:bg-white/5`;

export const linkLight = `inline-flex items-center gap-1.5 text-lg font-bold ${tealText} underline-offset-4 hover:underline`;
export const linkDark = "inline-flex items-center gap-1.5 text-lg font-bold text-white underline-offset-4 hover:underline";

export function SectionHeading({ id, eyebrow, title, lead, dark = false, center = false }) {
  const pill = dark ? "bg-white/10 text-white" : `bg-accent/10 ${tealText}`;
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-base font-semibold md:text-lg ${pill}`}>
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`mt-5 text-[34px] font-extrabold leading-[1.1] tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 text-lg leading-relaxed md:text-xl ${dark ? "text-white/80" : muted}`}>{lead}</p>
      )}
    </div>
  );
}
