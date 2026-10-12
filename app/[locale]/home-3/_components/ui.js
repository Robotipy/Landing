import NextLink from "next/link";
import { Link } from "@/i18n/routing";

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
export const ink = "text-[#0A2540]";
export const textMuted = "text-[#4B5563]";
export const line = "border-[#E3E8EE]";
export const bandWhite = "bg-white text-[#0A2540]";
export const bandLight = "bg-[#F6F8FA] text-[#0A2540]";
export const sectionY = "py-16 md:py-24";

// Sobre #00182B: blanco sobre el acento da 3,6:1, así que el texto va a 19 px
// en negrita para contar como texto grande.
export const btnPrimaryDark =
  "inline-flex min-h-[52px] items-center justify-center rounded-[10px] bg-accent px-6 py-3 text-center text-[19px] font-bold leading-tight text-white [text-wrap:balance] transition duration-150 hover:brightness-95 motion-safe:hover:-translate-y-0.5";

// Sobre fondo claro y a 16 px se usa el teal oscuro #027A79 (5,3:1 con blanco).
export const btnPrimaryLight =
  "inline-flex min-h-[48px] items-center justify-center rounded-[10px] bg-[#027A79] px-5 py-3 text-center text-base font-semibold leading-tight text-white [text-wrap:balance] transition duration-150 hover:bg-[#016867] motion-safe:hover:-translate-y-0.5";

export const btnSecondaryLight =
  "inline-flex min-h-[48px] items-center justify-center rounded-[10px] border border-[#C5CFDA] bg-white px-5 py-3 text-center text-base font-semibold leading-tight text-[#0A2540] [text-wrap:balance] transition duration-150 hover:border-[#0A2540] motion-safe:hover:-translate-y-0.5";

export const textLink =
  "font-semibold text-[#027A79] underline decoration-[#027A79]/40 underline-offset-4 transition-colors hover:decoration-[#027A79]";

export const textLinkDark =
  "font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white";

export const cardHover =
  "transition duration-150 hover:shadow-[0_10px_30px_-18px_rgba(10,37,64,0.45)] motion-safe:hover:-translate-y-0.5";

const isExternal = (href) => /^https?:\/\//.test(href);
const isBlog = (href) => href === "/blog" || href.startsWith("/blog/");

// Elige el enlace correcto para cada destino: anclas y sitios externos con <a>,
// el blog con next/link (vive en /blog sin prefijo de idioma; con el Link de
// next-intl pasaría por un 308) y el resto con el Link de @/i18n/routing.
export function AppLink({ href, children, ...rest }) {
  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    );
  }
  if (isBlog(href)) {
    return (
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, dark = false, center = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] ${
        center ? "justify-center" : ""
      } ${dark ? "text-accent" : "text-[#027A79]"}`}
    >
      <span aria-hidden="true" className={`h-0.5 w-6 shrink-0 ${dark ? "bg-accent" : "bg-[#027A79]"}`} />
      {children}
    </p>
  );
}

export function SectionHeader({ eyebrow, title, body, titleId, dark = false, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow dark={dark} center={center}>
        {eyebrow}
      </Eyebrow>
      <h2
        id={titleId}
        className={`mt-4 text-[28px] font-bold leading-[36px] tracking-tight [text-wrap:balance] md:text-[32px] md:leading-[40px] ${
          dark ? "text-white" : "text-[#0A2540]"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base leading-[26px] md:text-[17px] md:leading-[28px] ${dark ? "text-white/75" : textMuted}`}>
          {body}
        </p>
      )}
    </div>
  );
}

export function StageNumber({ children, className = "" }) {
  return (
    <span className={`font-mono text-xs font-semibold tracking-wider text-[#4B5563] ${className}`}>
      {children}
    </span>
  );
}

export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#E3E8EE] bg-[#F6F8FA] px-2 py-0.5 text-xs font-medium leading-5 text-[#334155]">
      {children}
    </span>
  );
}

export function CheckIcon({ className = "text-[#027A79]" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`mt-[5px] h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

export function CheckList({ items, className = "" }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-6">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Contexto solo para lectores de pantalla cuando varios enlaces de la página
// dicen lo mismo ("Ver el caso") y llevan a destinos distintos.
export function SrContext({ children }) {
  if (!children) return null;
  return <span className="sr-only"> ({children})</span>;
}

// Lista de enlaces secundarios al pie de tarjetas y bloques. link.sr agrega
// contexto para lectores de pantalla.
export function LinkList({ links, className = "", textClass = "text-[15px] leading-6" }) {
  if (!links?.length) return null;
  return (
    <ul className={`flex flex-col gap-2 ${textClass} ${className}`}>
      {links.map((link) => (
        <li key={link.href + link.label}>
          <AppLink href={link.href} className={textLink}>
            {link.label}
            <SrContext>{link.sr}</SrContext>
          </AppLink>
        </li>
      ))}
    </ul>
  );
}
