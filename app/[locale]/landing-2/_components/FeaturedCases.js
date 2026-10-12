import CaseFile from "./CaseFile";
import { IndustryLink } from "./IndustryLink";
import { SectionHeading, container, sectionPad } from "./ui";

// Cuatro casos destacados sobre sistemas distintos. Cada enlace activa la
// pestaña (o el acordeón) de su sector en el explorador.
export default function FeaturedCases({ items, explorerTarget }) {
  return (
    <section id="casos" aria-labelledby="casos-title" className={`scroll-mt-16 bg-background-light ${sectionPad}`}>
      <div className={container}>
        <SectionHeading
          id="casos-title"
          tone="light"
          eyebrow="Casos en producción"
          title="Cuatro robots que hoy trabajan sobre sistemas distintos"
          body="Cada ficha parte por el resultado medido y muestra en qué sistema corre el robot. Desde el enlace de cada una llegas a los demás casos de ese sector."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <CaseFile
                variant="featured"
                data={item.data}
                footer={
                  <IndustryLink
                    slug={item.industry.slug}
                    target={explorerTarget(item.industry.slug)}
                    origen="casos"
                    className="inline-flex min-h-10 items-center text-sm font-semibold text-text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                  >
                    Ver casos de {item.industry.label}
                  </IndustryLink>
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
