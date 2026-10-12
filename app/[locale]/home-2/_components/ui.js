import NextLink from "next/link";
import { Link } from "@/i18n/routing";

// Piezas visuales compartidas por las secciones de /home-2 (sin estado).

export const container = "mx-auto w-full max-w-[1200px] px-4 md:px-6";
export const sectionPad = "py-16 md:py-24";
export const sectionBase = `scroll-mt-20 border-t h2-line ${sectionPad}`;

export function SectionHeader({ eyebrow, title, body, id, className = "" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="h2-eyebrow">{eyebrow}</p>}
      <h2
        id={id}
        className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-white md:text-4xl"
      >
        {title}
      </h2>
      {body && <p className="h2-text mt-4 text-base leading-relaxed md:text-lg">{body}</p>}
    </div>
  );
}

export function Chips({ items = [], className = "", label = "Sistemas" }) {
  if (!items.length) return null;
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label={label}>
      {items.map((item) => (
        <li key={item} className="h2-chip">
          {item}
        </li>
      ))}
    </ul>
  );
}

// Enlace interno del sitio (con prefijo de idioma).
export function TextLink({ href, children, className = "", ...rest }) {
  return (
    <Link href={href} className={`h2-link ${className}`} {...rest}>
      {children}
    </Link>
  );
}

// Enlace a un post del blog: el blog vive en /blog sin prefijo de idioma.
// Si el post todavía no se publica, va como texto plano.
export function GuideLink({ slug, publicados, children, className = "" }) {
  if (!publicados?.has(slug)) return <span className={`h2-muted ${className}`}>{children}</span>;
  return (
    <NextLink href={`/blog/${slug}`} className={`h2-link ${className}`}>
      {children}
    </NextLink>
  );
}

// Saca de una lista los posts programados que todavía no se publican: un
// título gris sin enlace se lee como enlace roto. Las páginas (href) quedan.
// Con revalidate cada hora, el post aparece solo el día que se publica.
export function visibleLinks(items = [], publicados) {
  return items.filter((item) => (item.href ? true : Boolean(item.slug && publicados?.has(item.slug))));
}

// Enlace de una lista mixta: página del sitio o post del blog.
export function MixedLink({ item, publicados, className = "" }) {
  if (item.kind === "post") {
    return (
      <GuideLink slug={item.slug} publicados={publicados} className={className}>
        {item.label}
      </GuideLink>
    );
  }
  return (
    <TextLink href={item.href} className={className}>
      {item.label}
    </TextLink>
  );
}

// Ficha de caso: cifra arriba, texto, sector, sistemas y enlace a la industria.
export function CaseCard({ card, topLabel, headingLevel = "p" }) {
  const Heading = headingLevel;
  return (
    <article className="h2-card flex h-full flex-col p-5 md:p-6">
      {topLabel && <p className="h2-mono h2-muted mb-3 text-xs">{topLabel}</p>}
      <Heading className="h2-num text-[1.625rem] font-semibold leading-tight text-white md:text-3xl">
        {card.figure}
      </Heading>
      <p className="h2-text mt-2 text-[15px] leading-relaxed">{card.text}</p>
      <p className="h2-mono h2-muted mt-4 text-xs">{card.sector}</p>
      {card.chips?.length > 0 && <Chips items={card.chips} className="mt-3" />}
      <div className="mt-auto pt-5">
        <TextLink href={card.href} className="inline-flex min-h-11 items-center text-sm font-medium">
          {card.linkLabel}
        </TextLink>
      </div>
    </article>
  );
}

export function Chevron({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-5 w-5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Estilos del botón principal sobre ButtonMain (texto oscuro sobre acento: 4,8:1).
export const primaryButtonStyle = {
  backgroundColor: "rgb(3,150,149)",
  color: "#00182B",
  border: "none",
  borderRadius: "8px",
};

export const primaryButtonClass =
  "inline-flex min-h-12 items-center justify-center text-center text-base font-bold leading-tight transition hover:brightness-110";

export const secondaryButtonStyle = {
  backgroundColor: "transparent",
  color: "#E6F1F5",
  border: "none",
  borderRadius: "8px",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.28)",
};

export const secondaryButtonClass =
  "inline-flex min-h-12 items-center justify-center text-center text-base font-semibold leading-tight transition-colors hover:bg-white/5";
