import { CaseCard, GuideLink, SectionHeader, TextLink, container, sectionBase, visibleLinks } from "./ui";

// Clases estáticas para que Tailwind las genere: la grilla de guías se ajusta
// a las que ya están publicadas.
const GUIDE_COLS = { 1: "", 2: "md:grid-cols-2", 3: "md:grid-cols-3" };

export default function IaAplicada({ cards, guides, contactHref, publicados }) {
  if (!cards.length) return null;
  const shownGuides = visibleLinks(guides, publicados);
  return (
    <section id="ia" aria-labelledby="ia-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="ia-title"
          eyebrow="IA aplicada"
          title="Usamos IA donde el sistema no entrega el dato"
          body="Hay datos que no llegan por ninguna integración: movimientos que el banco solo muestra en pantalla, consultas que entran por WhatsApp, un audio grabado en terreno u horas de video de tránsito. Ahí entra un modelo de IA, y el robot sigue con el resto del proceso."
        />

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <CaseCard key={card.id} card={card} topLabel={card.input} headingLevel="h3" />
          ))}
        </div>

        <p className="h2-text mt-10 max-w-3xl text-base leading-relaxed md:text-lg">
          En el diagnóstico vemos contigo qué parte del proceso resuelve un robot y en cuál hace falta IA.
        </p>

        {shownGuides.length > 0 && (
          <ul
            className={`h2-line mt-6 grid gap-px overflow-hidden rounded-lg border bg-white/[0.08] ${
              GUIDE_COLS[shownGuides.length] || GUIDE_COLS[3]
            }`}
          >
            {shownGuides.map((guide) => (
              <li key={guide.slug} className="h2-bg flex flex-col gap-2 p-5">
                <span className="h2-mono h2-muted text-xs uppercase tracking-[0.12em]">Guía</span>
                <GuideLink slug={guide.slug} publicados={publicados} className="text-[15px] leading-snug">
                  {guide.label}
                </GuideLink>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 text-[15px]">
          <TextLink href={contactHref} className="inline-flex min-h-11 items-center">
            Cuéntanos tu caso
          </TextLink>
        </p>
      </div>
    </section>
  );
}
