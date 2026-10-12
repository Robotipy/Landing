// Piezas visuales compartidas por las secciones de /landing-2 (sin estado).

export const container = "mx-auto w-full max-w-[1200px] px-4 md:px-6";

export const ctaClass =
  "inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-base font-bold leading-tight text-primary transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export const sectionPad = "py-12 md:py-16";

export function Eyebrow({ children, tone = "dark", className = "" }) {
  const color = tone === "light" ? "text-slate-500" : "text-white/60";
  return (
    <p
      className={`font-mono text-[11px] font-medium uppercase tracking-[0.16em] ${color} ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, body, tone = "dark", id, className = "" }) {
  const titleColor = tone === "light" ? "text-text-primary" : "text-white";
  const bodyColor = tone === "light" ? "text-slate-600" : "text-white/75";
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {body && <p className={`mt-4 text-base leading-relaxed md:text-lg ${bodyColor}`}>{body}</p>}
    </div>
  );
}

export function SystemChips({ items = [], tone = "dark", className = "" }) {
  if (!items.length) return null;
  const chip =
    tone === "light"
      ? "border-slate-300 text-slate-600"
      : "border-white/20 text-white/75";
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Sistemas">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded border px-2 py-1 font-mono text-[11px] uppercase leading-none tracking-wider ${chip}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Chevron({ className = "" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${className}`}
      aria-hidden="true"
    >
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
