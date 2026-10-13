import ProductTabs from "./ProductTabs";
import Reveal from "./Reveal";
import { container, SectionHeading } from "./ui";

export default function Products() {
  return (
    <section
      id="productos"
      aria-labelledby="productos-titulo"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl"
      />
      <div className={`${container} relative`}>
        <Reveal>
          <SectionHeading
            id="productos-titulo"
            eyebrow="En pantalla"
            title="Así se ven nuestras soluciones funcionando"
            lead="Recorre las pantallas de nuestros productos propios y de las plataformas que implementamos."
            dark
          />
        </Reveal>
        <ProductTabs />
      </div>
    </section>
  );
}
