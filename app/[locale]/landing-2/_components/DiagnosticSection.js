import CaseFile from "./CaseFile";
import DiagnosticForm from "./DiagnosticForm";
import IndustrySwitch from "./IndustrySwitch";
import { DEFAULT_INDUSTRY } from "./defaults";
import { Eyebrow, SectionHeading, container, sectionPad } from "./ui";

export default function DiagnosticSection({ industries, sectors, systems, volumes, servicioBySector }) {
  const minis = industries
    .filter((i) => i.heroCase)
    .map((i) => ({ slug: i.slug, node: <CaseFile variant="mini" as="div" data={i.heroCase} /> }));

  return (
    <section id="diagnostico" aria-labelledby="diagnostico-title" className={`scroll-mt-16 border-t border-white/10 bg-primary ${sectionPad}`}>
      <div className={`${container} grid gap-8 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:col-span-5">
          <SectionHeading
            id="diagnostico-title"
            eyebrow="Diagnóstico sin costo"
            title="Cuéntanos qué proceso quieres automatizar"
            body="Si nos cuentas el sector, los sistemas y el volumen, llegamos a la reunión con casos parecidos al tuyo. Muchas veces con eso ya podemos darte un rango de precio en la primera conversación."
          />
        </div>
        <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <DiagnosticForm
            sectors={sectors}
            systems={systems}
            volumes={volumes}
            servicioBySector={servicioBySector}
          />
        </div>
        <div className="lg:col-span-5 lg:row-start-2">
          <Eyebrow className="mb-3">Un caso de tu sector</Eyebrow>
          <IndustrySwitch items={minis} fallback={DEFAULT_INDUSTRY} live={false} />
        </div>
      </div>
    </section>
  );
}
