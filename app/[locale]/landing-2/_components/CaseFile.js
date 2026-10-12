import { SystemChips } from "./ui";

// Ficha de caso en cinco tamaños: hero, featured (fondo claro), lead,
// compact y mini. Sin estado: se renderiza en el servidor.

function Figure({ value, size }) {
  const isNumeric = /\d/.test(value);
  const sizes = {
    xl: isNumeric ? "text-4xl md:text-5xl" : "text-xl md:text-2xl",
    lg: isNumeric ? "text-4xl lg:text-3xl xl:text-[2rem]" : "text-xl",
    md: isNumeric ? "text-3xl" : "text-xl",
  };
  return (
    <p className={`font-bold leading-[1.05] tracking-tight text-accent tabular-nums ${sizes[size]}`}>
      {value}
    </p>
  );
}

function BeforeAfter({ before, after, tone }) {
  const label = tone === "light" ? "text-slate-500" : "text-white/50";
  const text = tone === "light" ? "text-slate-700" : "text-white/80";
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      <div>
        <dt className={`font-mono text-[11px] uppercase tracking-[0.16em] ${label}`}>Antes</dt>
        <dd className={`mt-1.5 text-sm leading-relaxed ${text}`}>{before}</dd>
      </div>
      <div>
        <dt className={`font-mono text-[11px] uppercase tracking-[0.16em] ${label}`}>Ahora</dt>
        <dd className={`mt-1.5 text-sm leading-relaxed ${text}`}>{after}</dd>
      </div>
    </dl>
  );
}

export default function CaseFile({ data, variant = "compact", footer = null, as: Tag = "article" }) {
  if (!data) return null;

  if (variant === "hero") {
    return (
      <Tag className="rounded-xl border border-white/10 bg-secondary">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-white/10 px-5 py-3">
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Caso en producción
          </span>
          <span className="min-w-0 break-words font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
            {data.sector}
          </span>
        </div>
        <div className="space-y-4 px-5 py-6 md:px-6 md:py-7">
          <Figure value={data.figure} size="xl" />
          <p className="text-base leading-snug text-white/85 md:text-lg">{data.label}</p>
          <SystemChips items={data.systems} className="pt-2" />
        </div>
        {footer && <div className="border-t border-white/10 px-5 py-4 md:px-6">{footer}</div>}
      </Tag>
    );
  }

  if (variant === "featured") {
    return (
      <Tag className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 md:p-6">
        <Figure value={data.figure} size="lg" />
        <p className="mt-3 text-base font-medium leading-snug text-text-primary">{data.label}</p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
          {data.sector}
        </p>
        <div className="mt-5 flex-1 border-t border-slate-200 pt-5">
          <dl className="space-y-4">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Antes</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">{data.before}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Ahora</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">{data.after}</dd>
            </div>
          </dl>
        </div>
        <SystemChips items={data.systems} tone="light" className="mt-5" />
        {footer && <div className="mt-5 border-t border-slate-200 pt-4">{footer}</div>}
      </Tag>
    );
  }

  if (variant === "lead") {
    return (
      <Tag className="rounded-xl border border-white/10 bg-secondary p-5 md:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
            Caso principal
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">
            {data.sector}
          </span>
        </div>
        <div className="mt-5">
          <Figure value={data.figure} size="xl" />
          <p className="mt-3 max-w-2xl text-base leading-snug text-white/85 md:text-lg">{data.label}</p>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6">
          <BeforeAfter
            before={data.beforeLong || data.before}
            after={data.afterLong || data.after}
            tone="dark"
          />
        </div>
        <SystemChips items={data.systems} className="mt-6" />
      </Tag>
    );
  }

  if (variant === "mini") {
    return (
      <Tag className="rounded-xl border border-white/10 bg-secondary p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{data.sector}</p>
        <div className="mt-3">
          <Figure value={data.figure} size="md" />
        </div>
        <p className="mt-2 text-sm leading-snug text-white/80">{data.label}</p>
      </Tag>
    );
  }

  return (
    <Tag className="flex h-full flex-col rounded-xl border border-white/10 bg-secondary p-5">
      <Figure value={data.figure} size="md" />
      <p className="mt-2 text-sm font-medium leading-snug text-white/90">{data.label}</p>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">{data.sector}</p>
      {(data.summary || data.after) && (
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">
          {data.summary || `${data.before} ${data.after}`}
        </p>
      )}
      <SystemChips items={data.systems} className="mt-4" />
    </Tag>
  );
}
