import Image from "next/image";
import { facts } from "@/libs/landingFacts";
import CaseFile from "./CaseFile";
import HeroChips from "./HeroChips";
import IndustrySwitch from "./IndustrySwitch";
import { CtaLink, IndustryLink } from "./IndustryLink";
import { DEFAULT_INDUSTRY } from "./defaults";
import { container, ctaClass } from "./ui";

export default function HeroSection({ industries, explorerTarget, ctaLabel }) {
  const sectors = industries.map((i) => ({ slug: i.slug, label: i.label }));
  const files = industries
    .filter((i) => i.heroCase)
    .map((i) => ({
      slug: i.slug,
      node: (
        <CaseFile
          variant="hero"
          data={i.heroCase}
          footer={
            <IndustryLink
              slug={i.slug}
              target={explorerTarget(i.slug)}
              origen="hero"
              className="inline-flex min-h-10 items-center text-sm font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              Ver casos de {i.label}
            </IndustryLink>
          }
        />
      ),
    }));

  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-primary">
      <div className={`${container} grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20`}>
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
            Casos medidos por sector
          </p>
          <p className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80">
            <Image
              src="/images/rocketbotwhite.svg"
              alt=""
              width={66}
              height={24}
              unoptimized
              className="h-6 w-auto"
            />
            <span>{facts.partner}</span>
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Automatización con RPA e IA que ya funciona en tu industria
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Hemos entregado más de {facts.projectsNumber} proyectos en {facts.clientCountriesText}.
            Nuestros robots operan sobre SAP, mainframe, portales bancarios y ERP locales. Elige tu
            sector y revisa lo que ya hicimos en empresas parecidas a la tuya antes de agendar.
          </p>
          <div className="mt-7 flex flex-col items-start gap-2">
            <CtaLink ubicacion="hero" className={`${ctaClass} w-full sm:w-auto`}>
              {ctaLabel}
            </CtaLink>
            <p className="text-sm text-white/60">Revisamos tu proceso y te decimos si conviene automatizarlo.</p>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6">
            <HeroChips sectors={sectors} />
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-10">
          <IndustrySwitch items={files} fallback={DEFAULT_INDUSTRY} />
        </div>
      </div>
    </section>
  );
}
