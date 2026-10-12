import { Chevron, SectionHeader, TextLink, container, sectionBase } from "./ui";

// Mismo arreglo faqs que emite el JSON-LD FAQPage en page.js.
export default function Preguntas({ faqs }) {
  if (!faqs.length) return null;
  return (
    <section id="preguntas" aria-labelledby="preguntas-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="preguntas-title"
          eyebrow="Preguntas"
          title="Preguntas frecuentes sobre sistemas y licencias"
          body="Las dudas que más frenan a TI y a finanzas antes de empezar."
        />

        <div className="h2-line mt-10 max-w-[72ch] border-t md:mt-12">
          {faqs.map((faq) => (
            <details key={faq.q} className="h2-line border-b">
              <summary className="flex min-h-14 items-start justify-between gap-4 py-5 text-base font-medium text-white md:text-lg">
                <span>{faq.q}</span>
                <Chevron className="h2-chev h2-muted mt-0.5" />
              </summary>
              <p className="h2-text pb-6 text-[15px] leading-relaxed md:text-base">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-[15px]">
          <TextLink href="/preguntas-frecuentes" className="inline-flex min-h-11 items-center">
            Ver todas las preguntas
          </TextLink>
        </p>
      </div>
    </section>
  );
}
