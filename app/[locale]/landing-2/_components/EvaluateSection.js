import IndustryScorer from "./IndustryScorer";
import { SectionHeading, sectionPad } from "./ui";

export default function EvaluateSection({ sectors }) {
  return (
    <section id="evaluar" aria-labelledby="evaluar-title" className={`scroll-mt-16 border-t border-white/10 bg-primary ${sectionPad}`}>
      <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
        <SectionHeading
          id="evaluar-title"
          eyebrow="Antes de agendar"
          title="¿Tu proceso se parece a estos? Mídelo con 7 preguntas"
          body="El evaluador usa los criterios de nuestros diagnósticos y te dice si conviene RPA, IA o una integración por API. Funciona en tu navegador y no pide registro."
          className="mb-8"
        />
        <IndustryScorer sectors={sectors} />
      </div>
    </section>
  );
}
