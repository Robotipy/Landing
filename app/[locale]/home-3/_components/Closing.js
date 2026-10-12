import { contactHref, facts, prices } from "@/libs/landingFacts";
import { evaluator } from "./evaluator";
import { HOME_VARIANT } from "./track";
import TrackedLink from "./TrackedLink";
import { btnPrimaryDark, container, textLinkDark } from "./ui";

export default function Closing() {
  return (
    <section id="cierre" aria-labelledby="cierre-titulo" className="bg-primary py-20 text-white md:py-28">
      <div className={container}>
        <div className="mx-auto max-w-[720px] text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
            <span aria-hidden="true" className="h-0.5 w-6 shrink-0 bg-accent" />
            Diagnóstico {prices.diagnostic.toLowerCase()}
          </p>
          <h2
            id="cierre-titulo"
            className="mt-5 text-[30px] font-bold leading-[38px] tracking-tight [text-wrap:balance] md:text-[40px] md:leading-[48px]"
          >
            Trae un proceso y te decimos si conviene automatizarlo
          </h2>
          <p className="mt-5 text-base leading-[26px] text-white/80 md:text-lg md:leading-[30px]">
            Si llegas con la frecuencia del proceso y los sistemas que toca, normalmente te damos un rango de precio en
            la misma reunión.
          </p>
          <div className="mt-9 flex flex-col items-center gap-5">
            <TrackedLink
              href={contactHref(HOME_VARIANT)}
              params={{ location: "cierre" }}
              className={`${btnPrimaryDark} w-full sm:w-auto`}
            >
              Agenda tu diagnóstico sin costo
            </TrackedLink>
            <p className="text-base leading-[26px] text-white/80">
              ¿Prefieres partir por tu cuenta?{" "}
              <TrackedLink
                href={evaluator.href}
                event="home_tool_click"
                params={{ tool: evaluator.href, location: "cierre" }}
                className={textLinkDark}
              >
                Evalúa tu proceso en {evaluator.questions} preguntas
              </TrackedLink>
            </p>
          </div>
          <p className="mt-10 text-sm text-white/65">
            {facts.partner}. Equipo en {facts.team}.
          </p>
        </div>
      </div>
    </section>
  );
}
