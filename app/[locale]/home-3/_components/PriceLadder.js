import { contactHref, prices, products, routes } from "@/libs/landingFacts";
import { successCases } from "@/libs/successCases";
import AutomationCta from "./AutomationCta";
import { evaluator } from "./evaluator";
import LicenseLine from "./LicenseLine";
import { LicenseProvider } from "./LicenseProvider";
import LicenseToggle from "./LicenseToggle";
import { formatNumber, pricing, usd } from "./pricing";
import { HOME_VARIANT } from "./track";
import TrackedLink from "./TrackedLink";
import {
  AppLink,
  bandLight,
  btnPrimaryLight,
  btnSecondaryLight,
  CheckList,
  container,
  line,
  LinkList,
  SectionHeader,
  sectionY,
  SrContext,
  StageNumber,
  textLink,
  textMuted,
} from "./ui";

const caseById = (id) => successCases.find((c) => c.id === id) || null;

function Amount({ value }) {
  return (
    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
      <span className="text-xl font-bold">USD</span>
      <span className="text-[40px] font-bold leading-none tabular-nums">{formatNumber(value)}</span>
    </span>
  );
}

function Price({ children, note, extra }) {
  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-accent">{children}</p>
      {note && <p className={`mt-3 text-sm leading-5 ${textMuted}`}>{note}</p>}
      {extra && <div className="mt-3">{extra}</div>}
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <p className={`text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>{title}</p>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

// Celda vacía: en escritorio mantiene la fila del subgrid; en móvil no ocupa
// espacio ni suma separación.
const Empty = () => <div aria-hidden="true" className="hidden md:block" />;

function StageCard({ stage }) {
  const titleId = `${stage.id}-titulo`;
  return (
    <article
      id={stage.id}
      aria-labelledby={titleId}
      className={`flex scroll-mt-28 flex-col gap-6 rounded-2xl p-6 md:row-span-6 md:grid md:grid-rows-subgrid md:gap-y-6 xl:px-5 ${
        stage.emphasis ? "border-2 border-accent bg-[#F4FAFA]" : `border ${line} bg-white`
      }`}
    >
      <div>
        <div className="flex min-h-[24px] items-center justify-between gap-3">
          <StageNumber>{stage.n}</StageNumber>
          {stage.tag && (
            <span className="rounded-full bg-[#0A2540] px-2.5 py-1 text-[11px] font-bold uppercase leading-none tracking-[0.12em] text-white">
              {stage.tag}
            </span>
          )}
        </div>
        <h3 id={titleId} className="mt-3 text-lg font-bold leading-6 text-[#0A2540]">
          {stage.name}
        </h3>
      </div>
      {stage.price}
      <Block title="Cuándo conviene">
        <p className="text-[15px] leading-6">{stage.when}</p>
      </Block>
      {stage.cta ? <div>{stage.cta}</div> : <Empty />}
      {stage.features ? <div>{stage.features}</div> : <Empty />}
      {stage.links ? <div className={`border-t ${line} pt-4`}>{stage.links}</div> : <Empty />}
    </article>
  );
}

export default function PriceLadder() {
  const softwareCase = caseById("servicios-profesionales-1");
  const trainingCases = [caseById("industrias-tecnologicas-1"), caseById("salud-1")].filter(Boolean);
  const chatbotCase = caseById("telecomunicaciones-1");
  const monitor = products.find((p) => p.key === "monitor");
  const [supportBefore, supportAfter] = prices.support.split(/USD\s?[\d.]+/);

  const stages = [
    {
      n: "01",
      id: "etapa-diagnostico",
      name: "Diagnóstico",
      price: (
        <Price>
          {pricing.diagnosticIsFree ? (
            <span className="text-[40px] font-bold leading-none">{prices.diagnostic}</span>
          ) : (
            <Amount value={pricing.diagnostic} />
          )}
        </Price>
      ),
      when: "Ya identificaste un proceso y quieres saber si se paga.",
      cta: (
        <TrackedLink
          href={contactHref(HOME_VARIANT, { etapa: "diagnostico" })}
          params={{ location: "etapa-01" }}
          className={`${btnSecondaryLight} w-full`}
        >
          Agenda tu diagnóstico sin costo
        </TrackedLink>
      ),
      features: (
        <Block title="Qué recibes">
          <CheckList
            items={[
              "Una revisión del proceso contigo",
              "Estimación de horas y ahorro",
              "La tecnología que conviene: RPA, IA o integración por API",
              "Una recomendación de avanzar o no",
            ]}
          />
        </Block>
      ),
      links: (
        <TrackedLink
          href={evaluator.href}
          event="home_tool_click"
          params={{ tool: evaluator.href, location: "etapa-01" }}
          className={`${textLink} text-[15px] leading-6`}
        >
          Evalúa tu proceso en {evaluator.questions} preguntas
        </TrackedLink>
      ),
    },
    {
      n: "02",
      id: "etapa-automatizacion",
      name: "Automatización de un proceso",
      tag: "Con RPA e IA",
      emphasis: true,
      price: (
        <Price
          note={prices.rpaAverageNote}
          extra={
            <LicenseLine
              unanswered={`Licencia Rocketbot: ${usd(pricing.license)}. ${prices.licenseNote}`}
              withoutLicense={`Más ${usd(pricing.license)} de licencia Rocketbot.`}
              withLicense="Sin costo de licencia."
            />
          }
        >
          <Amount value={pricing.rpaAverage} />
        </Price>
      ),
      when: "Procesos repetitivos con reglas claras, sobre sistemas que ya usas como el ERP, portales bancarios, Excel o correo.",
      cta: (
        <AutomationCta className={`${btnPrimaryLight} w-full`}>Agenda tu diagnóstico sin costo</AutomationCta>
      ),
      features: (
        <div className="space-y-5">
          <Block title="Plazo">
            <p className="text-[15px] leading-6">{prices.timeline}.</p>
          </Block>
          <Block title="Qué recibes">
            <CheckList
              items={[
                "Documentación del proceso, sus excepciones y los sistemas que toca",
                "Alcance y precio cerrados por escrito",
                "Un robot probado con datos reales",
                "Acompañamiento en la marcha blanca",
              ]}
            />
          </Block>
        </div>
      ),
      links: (
        <LinkList
          links={[
            { href: "/rpa", label: "Qué es RPA" },
            { href: routes.rocketbot, label: "Implementación de Rocketbot" },
          ]}
        />
      ),
    },
    {
      n: "03",
      id: "etapa-software",
      name: "Software a medida",
      price: (
        <Price note={prices.customSoftwareNote}>
          <Amount value={pricing.softwareMin} />
          <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
            <span className="text-xl font-bold">a</span>
            <span className="text-[40px] font-bold leading-none tabular-nums">
              {formatNumber(pricing.softwareMax)}
            </span>
          </span>
        </Price>
      ),
      when: "El proceso necesita una aplicación propia que hoy no existe en tu empresa.",
      cta: (
        <TrackedLink
          href={contactHref(HOME_VARIANT, { servicio: "software" })}
          params={{ location: "etapa-03" }}
          className={`${btnSecondaryLight} w-full`}
        >
          Cotiza tu aplicación
        </TrackedLink>
      ),
      features: softwareCase?.results && (
        <Block title="Ejemplo entregado">
          <p className="text-[15px] leading-6">
            Un sistema de IA que clasifica vehículos en videos de tránsito para una empresa de{" "}
            {softwareCase.industry.toLowerCase()}. El conteo pasó de {softwareCase.results.manualExecution} a{" "}
            {softwareCase.results.automatedExecution}.
          </p>
        </Block>
      ),
      links: (
        <LinkList
          links={[
            { href: "/desarrollo-software", label: "Desarrollo de software a medida" },
            { href: "/blog/rpa-vs-desarrollo-a-medida", label: "RPA o desarrollo a medida: cuándo conviene cada uno" },
            ...(softwareCase
              ? [{ href: `/casos-exito/${softwareCase.categoria}`, label: "Ver el caso", sr: softwareCase.industry }]
              : []),
          ]}
        />
      ),
    },
    {
      n: "04",
      id: "etapa-soporte",
      name: "Soporte y monitoreo",
      emphasis: true,
      price: (
        <Price note={prices.supportNote}>
          {supportBefore?.trim() && (
            <span className={`text-[15px] font-semibold ${textMuted}`}>{supportBefore.trim()}</span>
          )}
          <Amount value={pricing.supportFrom} />
          {supportAfter?.trim() && (
            <span className={`text-[15px] font-semibold ${textMuted}`}>{supportAfter.trim()}</span>
          )}
        </Price>
      ),
      when: "Quieres que nos hagamos cargo del robot después de la entrega. Si tu equipo lo opera, no necesitas contratarlo.",
      cta: monitor?.href && (
        <AppLink href={monitor.href} className={`${btnSecondaryLight} w-full`}>
          Conoce {monitor.name}
        </AppLink>
      ),
      links: (
        <LinkList links={[{ href: "/blog/mantenimiento-de-robots-rpa", label: "Mantenimiento de robots RPA" }]} />
      ),
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-titulo"
      className={`scroll-mt-24 ${bandLight} ${sectionY}`}
    >
      <LicenseProvider>
        <div className={container}>
          <SectionHeader
            titleId="services-titulo"
            eyebrow="Servicios y precios"
            title="Empiezas con un diagnóstico y avanzas solo si conviene"
            body="Cada etapa tiene su precio publicado. Si decides avanzar, cerramos alcance y precio por escrito antes de empezar."
          />

          <div className="mt-10">
            <LicenseToggle hint="Tu respuesta ajusta el precio de la etapa 02." />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-x-4">
            {stages.map((stage) => (
              <StageCard key={stage.id} stage={stage} />
            ))}
          </div>

          <div className={`mt-6 rounded-2xl border ${line} bg-white p-6 md:p-8`}>
            <h3 className="text-lg font-bold leading-7">También cotizamos según alcance</h3>
            <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="min-w-0">
                <h4 className="text-base font-bold leading-6">Capacitaciones en IA y automatización</h4>
                <p className={`mt-2 text-[15px] leading-6 ${textMuted}`}>
                  Formación práctica para equipos
                  {trainingCases.length === 2 ? (
                    <>
                      , como el {trainingCases[0].name} que impartimos a un{" "}
                      <AppLink href={`/casos-exito/${trainingCases[0].categoria}`} className={textLink}>
                        {trainingCases[0].industry.toLowerCase()}
                      </AppLink>{" "}
                      y a una{" "}
                      <AppLink href={`/casos-exito/${trainingCases[1].categoria}`} className={textLink}>
                        {trainingCases[1].industry.toLowerCase()}
                      </AppLink>
                      .
                    </>
                  ) : (
                    "."
                  )}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px] leading-6">
                  <AppLink href="/capacitaciones" className={textLink}>
                    Conoce las capacitaciones
                  </AppLink>
                  <TrackedLink
                    href={contactHref(HOME_VARIANT, { servicio: "capacitacion" })}
                    params={{ location: "capacitacion" }}
                    className={textLink}
                  >
                    Cotiza una capacitación
                  </TrackedLink>
                </div>
              </div>
              <div className={`min-w-0 border-t ${line} pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0`}>
                <h4 className="text-base font-bold leading-6">Chatbots y agentes de IA para atención</h4>
                <p className={`mt-2 text-[15px] leading-6 ${textMuted}`}>
                  Un agente que responde las consultas frecuentes por WhatsApp y otros canales y deriva el resto a
                  tu equipo.
                  {chatbotCase && (
                    <>
                      {" "}
                      <AppLink href={`/casos-exito/${chatbotCase.categoria}`} className={textLink}>
                        Ver el caso
                        <SrContext>{chatbotCase.industry}</SrContext>
                      </AppLink>
                    </>
                  )}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[15px] leading-6">
                  <AppLink href="/chatbot" className={textLink}>
                    Conoce los chatbots
                  </AppLink>
                  <TrackedLink
                    href={contactHref(HOME_VARIANT, { servicio: "chatbot" })}
                    params={{ location: "chatbot" }}
                    className={textLink}
                  >
                    Cotiza un chatbot
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>

          <p className={`mt-6 text-sm leading-6 ${textMuted}`}>
            Valores en dólares estadounidenses.{" "}
            <AppLink href="/blog/cuanto-cuesta-automatizar-un-proceso" className={textLink}>
              Cómo se arma el precio
            </AppLink>
          </p>
        </div>
      </LicenseProvider>
    </section>
  );
}
