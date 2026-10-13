import Reveal from "./Reveal";
import ProductTabs from "./ProductTabs";
import { SectionHeading, container } from "./ui";
import { cta, productTabs } from "./data";

export default function Products() {
  const tabs = productTabs.map(({ servicio, ...tab }) => ({ ...tab, ctaHref: cta(servicio) }));
  return (
    <section
      id="productos"
      aria-labelledby="productos-title"
      className="scroll-mt-28 overflow-hidden bg-slate-50 py-20 lg:py-28"
    >
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="productos-title"
            eyebrow="Productos propios"
            title="Herramientas nuestras, listas para usar"
            text="Además de los proyectos a medida, creamos productos propios para problemas que vemos una y otra vez."
          />
        </Reveal>
        <Reveal className="mt-10 lg:mt-12" delay={120}>
          <ProductTabs tabs={tabs} />
        </Reveal>
      </div>
    </section>
  );
}
