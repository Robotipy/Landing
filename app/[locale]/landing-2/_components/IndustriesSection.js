import Image from "next/image";
import CaseFile from "./CaseFile";
import IndustryExplorer from "./IndustryExplorer";
import { IndustryLink } from "./IndustryLink";
import MoreCasesDetails from "./MoreCasesDetails";
import { Eyebrow, SectionHeading, container, ctaClass, sectionPad } from "./ui";

const VISIBLE_COMPACT = 4;
const OVERLAY = { backgroundColor: "rgba(0, 24, 43, 0.75)" };

function Banner({ src, label, title }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-white/10 md:h-56">
      <Image src={src} alt="" fill sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={OVERLAY} aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-end p-5 md:p-8">
        <Eyebrow>{label}</Eyebrow>
        <h3 className="mt-2 max-w-2xl text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

function PriceDrivers({ drivers, notWorthIt }) {
  return (
    <div className="rounded-r-lg border-l-2 border-accent bg-white/5 p-5 md:p-6">
      <h4 className="text-base font-bold text-white">Qué mueve el precio y el plazo en este sector</h4>
      <ul className="mt-4 space-y-3">
        {drivers.map((d) => (
          <li key={d} className="flex gap-3 text-sm leading-relaxed text-white/80">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-white/40" aria-hidden="true" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <h4 className="mt-7 text-base font-bold text-white">Cuándo te diremos que no conviene</h4>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{notWorthIt}</p>
    </div>
  );
}

function PanelCta({ slug, origen, ubicacion, label }) {
  return (
    <IndustryLink
      slug={slug}
      target="diagnostico"
      origen={origen}
      ubicacion={ubicacion}
      className={`${ctaClass} w-full sm:w-auto`}
    >
      {label}
    </IndustryLink>
  );
}

function DeepPanel({ industry, ctaLabel }) {
  const visible = industry.cases.slice(0, VISIBLE_COMPACT);
  const hidden = industry.cases.slice(VISIBLE_COMPACT);
  return (
    <div>
      <Banner src={industry.banner} label={industry.label} title={industry.headline} />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          <p className="text-base leading-relaxed text-white/80 md:text-lg">{industry.body}</p>
          <CaseFile variant="lead" data={industry.lead} />
          {visible.length > 0 && (
            <ul className={`grid gap-4 ${visible.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {visible.map((c) => (
                <li key={c.id}>
                  <CaseFile variant="compact" data={c} />
                </li>
              ))}
            </ul>
          )}
          {hidden.length > 0 && (
            <MoreCasesDetails slug={industry.slug} count={hidden.length}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {hidden.map((c) => (
                  <li key={c.id}>
                    <CaseFile variant="compact" data={c} />
                  </li>
                ))}
              </ul>
            </MoreCasesDetails>
          )}
        </div>
        <aside className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start" aria-label={`Precio y plazo en ${industry.label}`}>
          <PriceDrivers drivers={industry.priceDrivers} notWorthIt={industry.notWorthIt} />
        </aside>
      </div>
      <div className="mt-8 border-t border-white/10 pt-8">
        <PanelCta slug={industry.slug} origen="pestanas" ubicacion="panel" label={ctaLabel} />
      </div>
    </div>
  );
}

function MoreHead({ industry }) {
  return (
    <span className="flex min-w-0 items-center gap-4">
      <span className="relative block h-14 w-20 shrink-0 overflow-hidden rounded-md border border-white/10">
        <Image src={industry.banner} alt="" fill sizes="80px" className="object-cover" />
      </span>
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-base font-bold text-white md:text-lg">{industry.label}</span>
          {industry.logo && (
            <Image
              src={industry.logo}
              alt=""
              width={464}
              height={93}
              sizes="80px"
              style={{ height: 16, width: "auto" }}
            />
          )}
        </span>
        <span className="mt-1 block text-sm leading-snug text-white/70">{industry.summary}</span>
      </span>
    </span>
  );
}

function MoreBody({ industry, ctaLabel }) {
  return (
    <div className="space-y-6">
      <ul className="grid gap-4 md:grid-cols-2">
        {industry.cases.map((c) => (
          <li key={c.id}>
            <CaseFile variant="compact" data={c} />
          </li>
        ))}
      </ul>
      <p className="rounded-r-lg border-l-2 border-accent bg-white/5 px-5 py-4 text-sm leading-relaxed text-white/80">
        <span className="font-bold text-white">Qué mueve el precio y el plazo: </span>
        {industry.exception}
      </p>
      <PanelCta slug={industry.slug} origen="acordeon" ubicacion="acordeon" label={ctaLabel} />
    </div>
  );
}

export default function IndustriesSection({ deep, more, ctaLabel }) {
  const deepItems = deep
    .filter((i) => i.lead)
    .map((i) => ({ slug: i.slug, label: i.label, content: <DeepPanel industry={i} ctaLabel={ctaLabel} /> }));
  const moreItems = more
    .filter((i) => i.cases.length)
    .map((i) => ({
      slug: i.slug,
      head: <MoreHead industry={i} />,
      content: <MoreBody industry={i} ctaLabel={ctaLabel} />,
    }));

  return (
    <section id="industrias" aria-labelledby="industrias-title" className={`scroll-mt-16 bg-primary ${sectionPad}`}>
      <div className={container}>
        <SectionHeading
          id="industrias-title"
          eyebrow="Por sector"
          title="Lo que ya automatizamos en tu sector"
          body="En cada sector ves los casos con su cifra y lo que suele encarecer o alargar un proyecto en ese rubro. Si el tuyo no está entre los tres primeros, revisa Más industrias."
          className="mb-10"
        />
        <IndustryExplorer
          deep={deepItems}
          more={moreItems}
          moreHeading={
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-white md:text-3xl">Más industrias</h3>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                Sectores con casos en producción, aunque con menos proyectos que los tres anteriores.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
