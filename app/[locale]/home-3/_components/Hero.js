import { contactHref, facts } from "@/libs/landingFacts";
import { evaluator } from "./evaluator";
import PriceCard from "./PriceCard";
import { HOME_VARIANT } from "./track";
import TrackedLink from "./TrackedLink";
import { btnPrimaryDark, container, textLinkDark } from "./ui";

export default function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 88% 35%, rgba(3,150,149,0.18) 0%, rgba(3,150,149,0) 70%)",
        }}
      />
      <div
        className={`${container} relative grid gap-12 pb-16 pt-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:items-start lg:gap-12 lg:pb-24 lg:pt-16`}
      >
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
            <span aria-hidden="true" className="h-0.5 w-6 shrink-0 bg-accent" />
            {facts.partner}
          </p>
          <h1
            id="hero-titulo"
            className="mt-5 text-[34px] font-bold leading-[40px] tracking-tight [text-wrap:balance] sm:text-[40px] sm:leading-[48px] lg:text-[42px] lg:leading-[50px] xl:text-[50px] xl:leading-[58px]"
          >
            Automatizamos procesos de finanzas y operaciones con RPA e IA.{" "}
            <span className="text-white/75">
              Con precios publicados desde el diagnóstico hasta el soporte.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-[26px] text-white/80 md:text-lg md:leading-[30px]">
            Revisa cuánto cuesta cada etapa y evalúa tu proceso antes de hablar con nosotros. Llevamos más de{" "}
            {facts.projectsNumber} proyectos desde {facts.founded} para empresas de {facts.clientCountriesText}.
          </p>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <TrackedLink
              href={contactHref(HOME_VARIANT)}
              params={{ location: "hero" }}
              className={`${btnPrimaryDark} w-full sm:w-auto sm:shrink-0 sm:whitespace-nowrap`}
            >
              Agenda tu diagnóstico sin costo
            </TrackedLink>
            <TrackedLink
              href={evaluator.href}
              event="home_tool_click"
              params={{ tool: evaluator.href, location: "hero" }}
              className={`${textLinkDark} text-center text-base sm:text-left`}
            >
              Evalúa tu proceso en {evaluator.questions} preguntas
            </TrackedLink>
          </div>
          <p className="mt-6 text-sm text-white/70">Equipo en {facts.team}.</p>
        </div>

        <div className="lg:col-span-5">
          <PriceCard />
        </div>
      </div>
    </section>
  );
}
