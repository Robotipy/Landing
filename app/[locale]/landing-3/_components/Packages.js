import { Link } from "@/i18n/routing";
import { prices, products, tools } from "@/libs/landingFacts";
import { successCases } from "@/libs/successCases";
import CtaLink from "./CtaLink";
import { pricing, formatNumber, usd } from "./pricing";
import { btnPrimary, CheckList, container, line, SectionHeader, textMuted } from "./ui";

const caseById = (id) => successCases.find((c) => c.id === id);

function Price({ prefix, amount, unit }) {
  return (
    <div>
      <p className="flex flex-wrap items-baseline gap-x-2">
        {prefix && <span className={`text-sm ${textMuted}`}>{prefix}</span>}
        <span className="whitespace-nowrap">
          <span className="text-xl font-bold text-accent">USD</span>{" "}
          <span className="text-[40px] font-bold leading-none tabular-nums text-accent">
            {formatNumber(amount)}
          </span>
        </span>
      </p>
      <p className={`mt-2 text-sm ${textMuted}`}>{unit}</p>
    </div>
  );
}

function Block({ title, children }) {
  return (
    <div>
      <p className={`text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function Packages() {
  const mining = caseById("mineria-1");
  const retail = caseById("retail-1");
  const softwareExamples = [
    mining && "Una plataforma de simulación de lixiviación para una minera de cobre",
    retail && "Un tablero de proyección de ventas con asistente de IA para una empresa de consumo masivo",
  ].filter(Boolean);

  const cards = [
    {
      id: "diagnostico",
      name: "Diagnóstico",
      order: "order-2 lg:order-1",
      price: <Price amount={pricing.diagnostic} unit={prices.diagnostic} />,
      receives: [
        "Una reunión para revisar tu proceso",
        "Estimación de horas y ahorro",
        "La tecnología que conviene: RPA, IA o integración por API",
        "Una recomendación clara de avanzar o no",
        "Normalmente, un rango de precio en la misma reunión",
      ],
      when: "Ya identificaste un proceso y quieres saber si se paga.",
    },
    {
      id: "automatizacion",
      name: "Automatización de un proceso",
      featured: true,
      order: "order-1 lg:order-2",
      price: <Price amount={pricing.rpaAverage} unit="Promedio por proceso" />,
      receives: [
        "Un mes de desarrollo",
        "Documentación del proceso, sus excepciones y los sistemas que toca",
        "Alcance y precio cerrados por escrito",
        "Un robot con usuario dedicado, probado con datos reales",
        "Acompañamiento en la marcha blanca",
      ],
      when: "Procesos repetitivos con reglas claras, sobre sistemas que ya usas como el ERP, portales bancarios, SII, Excel o correo.",
      note: `Si tu empresa no tiene licencia Rocketbot, se suman ${usd(pricing.license)}${
        pricing.licensePeriod ? ` ${pricing.licensePeriod}` : ""
      }.`,
    },
    {
      id: "software",
      name: "Aplicación a medida",
      order: "order-4 lg:order-3",
      price: (
        <Price
          amount={pricing.softwareMin}
          unit={`a ${usd(pricing.softwareMax)}, según alcance`}
        />
      ),
      receivesTitle: "Ejemplos entregados",
      receives: softwareExamples,
      when: "El proceso necesita una aplicación propia que hoy no existe en tu empresa.",
    },
    {
      id: "soporte",
      name: "Soporte y monitoreo",
      order: "order-3 lg:order-4",
      price: <Price prefix="desde" amount={pricing.supportFrom} unit="Al mes, opcional" />,
      receives: [
        "Monitoreo de las ejecuciones",
        "Ajustes cuando cambia una pantalla o un archivo de entrada",
      ],
      when: "Quieres que nos hagamos cargo del robot después de la entrega. Si tu equipo lo opera, no pagas nada mensual.",
      note: "El valor sube según cuántos robots tengas.",
    },
  ];

  const yoaoTool = tools.find((t) => t.href.includes("aforo"));
  const aiProducts = products
    .filter((p) => p.key === "melonhelp" || p.key === "yoao")
    .map((p) => ({
      ...p,
      link:
        p.key === "yoao" && yoaoTool
          ? { href: yoaoTool.href, label: "Calcula el costo de un conteo vehicular" }
          : p.href
            ? { href: p.href, label: `Conoce ${p.name}` }
            : null,
    }));

  return (
    <section
      id="paquetes"
      aria-labelledby="paquetes-titulo"
      className="scroll-mt-16 bg-white py-16 text-[#0A2540] md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8 xl:max-w-7xl">
        <SectionHeader
          center
          titleId="paquetes-titulo"
          eyebrow="Paquetes y precios"
          title="Precios publicados, desde el diagnóstico hasta el soporte"
          body="Todo parte con el diagnóstico. Si decides avanzar, cerramos alcance y precio por escrito antes de empezar."
        />

        <div className="mt-12 flex flex-col gap-5 md:mt-14 lg:grid lg:grid-cols-4 lg:grid-rows-[auto_auto_1fr_auto_auto] lg:gap-x-4 lg:gap-y-0">
          {cards.map((card) => (
            <article
              key={card.id}
              aria-labelledby={`paquete-${card.id}`}
              className={`relative flex flex-col gap-6 rounded-xl p-6 lg:row-span-5 lg:px-5 lg:grid lg:grid-rows-subgrid lg:gap-y-6 ${
                card.order
              } ${
                card.featured
                  ? "mt-3 border-2 border-accent bg-[#F4FAFA] lg:mt-0"
                  : `border ${line} bg-white`
              }`}
            >
              {card.featured && (
                <p className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  Paquete principal
                </p>
              )}
              <h3 id={`paquete-${card.id}`} className="text-lg font-bold leading-7">
                {card.name}
              </h3>
              {card.price}
              <Block title={card.receivesTitle || "Qué recibes"}>
                <CheckList items={card.receives} />
              </Block>
              <Block title="Cuándo conviene">
                <p className="text-[15px] leading-6">{card.when}</p>
              </Block>
              <div className="flex flex-col gap-4">
                {card.note && <p className={`text-sm leading-5 ${textMuted}`}>{card.note}</p>}
                {card.featured && (
                  <CtaLink location="paquetes" className={`${btnPrimary} w-full px-3 [text-wrap:balance]`}>
                    Agenda tu diagnóstico sin costo
                  </CtaLink>
                )}
              </div>
            </article>
          ))}
        </div>

        {pricing.volumeProgram && (
          <div className={`mt-5 rounded-xl border ${line} bg-[#F4F7F9] p-6 md:flex md:items-center md:justify-between md:gap-8`}>
            <h3 className="text-lg font-bold">Programa desde tres procesos</h3>
            <p className={`mt-2 text-[15px] leading-6 md:mt-0 md:max-w-2xl ${textMuted}`}>
              {pricing.volumeProgram}
            </p>
          </div>
        )}

        {aiProducts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-base font-bold">Productos propios de IA</h3>
            <p className={`mt-1 text-sm ${textMuted}`}>
              Se cotizan aparte del paquete de automatización.
            </p>
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {aiProducts.map((p) => (
                <li key={p.key} className={`rounded-xl border ${line} p-5`}>
                  <p className="font-bold">{p.name}</p>
                  <p className={`mt-1 text-[15px] leading-6 ${textMuted}`}>{p.description}</p>
                  {p.link && (
                    <Link
                      href={p.link.href}
                      className="mt-3 inline-block text-[15px] font-bold text-[#0A2540] underline decoration-accent decoration-2 underline-offset-4 hover:decoration-[#0A2540]"
                    >
                      {p.link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className={`mt-10 text-sm ${textMuted}`}>
          Valores en dólares estadounidenses.{pricing.taxNote ? ` ${pricing.taxNote}` : ""}
        </p>
      </div>
    </section>
  );
}
