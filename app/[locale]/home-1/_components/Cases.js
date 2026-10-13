import Reveal from "./Reveal";
import CasesCarousel from "./CasesCarousel";
import { SectionHeading, TextLink, container } from "./ui";
import { caseCards } from "./data";

export default function Cases() {
  return (
    <section id="casos" aria-labelledby="casos-title" className="scroll-mt-28 overflow-hidden bg-white py-20 lg:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="casos-title"
            eyebrow="Casos reales"
            title="Resultados reales en industrias muy distintas"
            text="Atención al cliente, hotelería, minería, municipios y mucho más. Cada tarjeta es un proyecto que entregamos."
          />
        </Reveal>
        <Reveal className="mt-8" delay={120}>
          <CasesCarousel cards={caseCards} />
        </Reveal>
        <div className="mt-6">
          <TextLink href="/success-cases">Ver todos los casos</TextLink>
        </div>
      </div>
    </section>
  );
}
