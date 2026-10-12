import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Chips, SectionHeader, TextLink, container, sectionBase } from "./ui";

function BigIndustryCard({ industry }) {
  return (
    <Link
      href={industry.href}
      className="h2-card group relative flex min-h-[15rem] flex-col overflow-hidden p-6 md:min-h-[17rem] md:p-7"
    >
      {industry.banner && (
        <>
          <Image
            src={industry.banner}
            alt=""
            fill
            sizes="(min-width: 1200px) 580px, (min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-20"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#00182B]/90 via-[#00182B]/50 to-transparent"
          />
        </>
      )}
      <div className="relative flex flex-1 flex-col">
        <h3 className="text-xl font-semibold text-white md:text-2xl">{industry.name}</h3>
        {industry.figure && (
          <div className="pt-8">
            <span className="h2-num block text-[1.75rem] font-semibold leading-tight text-white md:text-4xl">
              {industry.figure}
            </span>
            <span className="h2-text mt-2 block text-[15px] leading-relaxed">{industry.text}</span>
          </div>
        )}
        <Chips items={industry.chips} className="mt-auto pt-6" />
      </div>
    </Link>
  );
}

export default function Industrias({ big, small }) {
  return (
    <section id="industrias" aria-labelledby="industrias-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="industrias-title"
          eyebrow="Por industria"
          title="Casos por industria"
          body="Cada industria tiene su página con los casos completos, desde el problema hasta el resultado medido."
        />

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
          {big.map((industry) => (
            <BigIndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>

        {small.length > 0 && (
          <>
            <h3 className="h2-eyebrow mt-12">Más industrias</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {small.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={industry.href}
                    className="h2-card flex h-full min-h-[5.5rem] flex-col justify-between gap-3 p-4"
                  >
                    <span className="text-[15px] font-medium leading-snug text-white">{industry.name}</span>
                    <span className="h2-mono h2-muted text-[11px] uppercase tracking-[0.1em]">{industry.type}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <p className="mt-8 text-[15px]">
          <TextLink href="/success-cases" className="inline-flex min-h-11 items-center">
            Todos los casos
          </TextLink>
        </p>
      </div>
    </section>
  );
}
