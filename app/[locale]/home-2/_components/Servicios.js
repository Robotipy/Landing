import { GuideLink, SectionHeader, TextLink, container, sectionBase, visibleLinks } from "./ui";

function ServiceCard({ service, systems }) {
  const featured = Boolean(service.featured);
  const layout = featured
    ? "md:col-span-2 lg:row-span-2"
    : service.key === "soporte"
      ? "md:col-span-2 lg:col-span-1"
      : "";
  return (
    <li className={`h2-card flex flex-col p-6 ${featured ? "md:p-8" : ""} ${layout}`}>
      <h3 className={`font-semibold text-white ${featured ? "text-2xl md:text-[1.75rem]" : "text-lg"}`}>
        {service.name}
      </h3>
      <p className="h2-text mt-2 text-[15px] leading-relaxed">{service.line}</p>
      {service.price && (
        <div className={featured ? "mt-8" : "mt-5"}>
          <p
            className={`h2-num font-semibold leading-none tracking-tight text-white ${
              featured ? "text-4xl md:text-5xl" : "text-2xl"
            }`}
          >
            {service.price}
          </p>
          {service.priceSuffix && <p className="h2-text mt-2 text-[15px]">{service.priceSuffix}</p>}
          {service.note && <p className="h2-muted mt-2 text-sm leading-relaxed">{service.note}</p>}
        </div>
      )}
      {featured && systems.length > 0 && (
        <div className="mt-8">
          <p className="h2-mono h2-muted text-xs uppercase tracking-[0.12em]">Sistemas con casos publicados</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {systems.map((system) => (
              <li key={system.slug}>
                <a
                  href={`#sistema-${system.slug}`}
                  className="h2-chip min-h-11 transition-colors hover:bg-[rgba(3,150,149,0.3)] lg:min-h-8"
                >
                  {system.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-auto pt-6">
        <TextLink href={service.href} className="inline-flex min-h-11 items-center text-[15px] font-medium">
          {service.linkLabel}
        </TextLink>
      </div>
    </li>
  );
}

export default function Servicios({ services, systems, guides, publicados }) {
  const shownGuides = visibleLinks(guides, publicados);
  return (
    <section id="services" aria-labelledby="services-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="services-title"
          eyebrow="Servicios"
          title="Servicios y precios de referencia"
          body="El grueso de nuestro trabajo es automatización con RPA. Cuando el proceso lo pide, la combinamos con IA o con software a medida."
        />

        <ul className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.key} service={service} systems={systems} />
          ))}
        </ul>

        {shownGuides.length > 0 && (
          <div className="mt-8 flex flex-col gap-3 text-[15px] md:flex-row md:flex-wrap md:gap-x-8">
            {shownGuides.map((guide) => (
              <p key={guide.slug}>
                <span className="h2-mono h2-muted mr-2 text-xs uppercase tracking-[0.12em]">Guía</span>
                <GuideLink slug={guide.slug} publicados={publicados}>
                  {guide.label}
                </GuideLink>
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
