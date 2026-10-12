import { facts } from "@/libs/landingFacts";
import CtaLink from "./CtaLink";
import QuoteCard from "./QuoteCard";
import { pricing, usd } from "./pricing";
import { btnPrimary, container } from "./ui";

const joinEs = (items) =>
  items.length > 1 ? `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}` : items[0];

export default function Hero() {
  const otherCountries = facts.clientCountries.filter((c) => !facts.team.includes(c));
  const factLines = [
    `${facts.projects} proyectos entregados desde ${facts.founded}`,
    `Equipo en ${facts.team}, con proyectos también en ${joinEs(otherCountries)}`,
    facts.founderNote,
  ];

  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden bg-primary pt-16 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 75% 45%, #000 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 75% 45%, #000 0%, transparent 100%)",
        }}
      />
      <div
        className={`${container} relative grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] lg:gap-x-12 lg:gap-y-8 lg:py-24`}
      >
        <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
            <span aria-hidden="true" className="h-0.5 w-6 bg-accent" />
            {facts.partner}
          </p>
          <h1
            id="hero-titulo"
            className="mt-5 text-[32px] font-bold leading-[40px] tracking-tight md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[56px]"
          >
            Automatizar un proceso cuesta {usd(pricing.rpaAverage)} en promedio.{" "}
            <span className="text-white/75">Te lo decimos antes de la primera reunión.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[26px] text-white/80 md:text-lg md:leading-[30px]">
            Automatizamos procesos de finanzas y operaciones con RPA e IA para empresas medianas de
            {" "}{facts.clientCountriesText}. El precio incluye un mes de trabajo y la marcha blanca.
            El diagnóstico no se cobra.
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-1 lg:self-center">
          <QuoteCard />
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7 lg:col-span-7 lg:col-start-1 lg:row-start-2">
          <CtaLink location="hero" className={`${btnPrimary} w-full sm:w-auto sm:shrink-0 sm:whitespace-nowrap`}>
            Agenda tu diagnóstico sin costo
          </CtaLink>
          <CtaLink
            href="#evaluador"
            location="hero_evaluador"
            className="text-center text-base text-white underline decoration-white/40 underline-offset-4 transition hover:decoration-white sm:text-left"
          >
            Responde 7 preguntas y evalúa tu proceso
          </CtaLink>
        </div>

        <ul className="space-y-2.5 border-t border-white/10 pt-6 text-[15px] leading-6 text-white/75 lg:col-span-7 lg:col-start-1 lg:row-start-3 lg:self-start">
          {factLines.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
