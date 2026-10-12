import { SectionHeading, Chevron, sectionPad } from "./ui";

// Mismo arreglo que alimenta el JSON-LD FAQPage de page.js.
export default function FaqList({ faqs }) {
  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className={`scroll-mt-16 bg-background-light ${sectionPad}`}>
      <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
        <SectionHeading
          id="preguntas-title"
          tone="light"
          eyebrow="Preguntas frecuentes"
          title="Lo que suelen preguntar antes del diagnóstico"
        />
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-slate-200 bg-white">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-base font-bold leading-snug text-text-primary [&::-webkit-details-marker]:hidden">
                {f.q}
                <Chevron className="mt-0.5 text-slate-500 group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-700 md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
