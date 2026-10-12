import { prices } from "@/libs/landingFacts";
import { firstSentence, formatNumber, lowerFirst, nb, pricing, usd } from "./pricing";
import TrackedLink from "./TrackedLink";
import { line, StageNumber, textLink, textMuted } from "./ui";

// Ficha de precios del hero. Cada fila lleva a su tarjeta en la escalera y se
// mide como home_price_click: landing_cta_click queda solo para los botones que
// llevan al formulario de contacto, igual que en landing-3. El
// precio va siempre bajo el nombre para que las cuatro filas se lean igual
// desde 360 px hasta escritorio.
export default function PriceCard() {
  const rows = [
    { n: "01", id: "etapa-diagnostico", name: "Diagnóstico", price: prices.diagnostic },
    {
      n: "02",
      id: "etapa-automatizacion",
      name: "Automatización de un proceso",
      price: usd(pricing.rpaAverage),
      sub: lowerFirst(firstSentence(prices.rpaAverageNote)),
    },
    {
      n: "03",
      id: "etapa-software",
      name: "Software a medida",
      price: `${usd(pricing.softwareMin)} a ${formatNumber(pricing.softwareMax)}`,
    },
    { n: "04", id: "etapa-soporte", name: "Soporte y monitoreo", price: nb(prices.support) },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 text-[#0A2540] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.75)] sm:p-7">
      <h2 className="text-lg font-bold leading-7">Precios publicados</h2>
      <ol className={`mt-3 divide-y divide-[#E3E8EE] border-y ${line}`}>
        {rows.map((row) => (
          <li key={row.id}>
            <TrackedLink
              href={`#${row.id}`}
              event="home_price_click"
              params={{ location: "ficha", etapa: row.n }}
              className="group -mx-2 grid grid-cols-[1.75rem_1fr] gap-x-2 rounded-lg px-2 py-3.5 transition-colors hover:bg-[#F6F8FA]"
            >
              <StageNumber className="pt-[3px]">{row.n}</StageNumber>
              <span className="min-w-0">
                <span className="block font-semibold leading-6 decoration-[#027A79] underline-offset-4 group-hover:underline">
                  {row.name}
                </span>
                <span className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
                  <span className="whitespace-nowrap text-xl font-bold leading-7 tabular-nums text-[#027A79]">
                    {row.price}
                  </span>
                  {row.sub && <span className={`text-sm leading-5 ${textMuted}`}>{row.sub}</span>}
                </span>
              </span>
            </TrackedLink>
          </li>
        ))}
      </ol>
      <p className={`mt-4 text-sm leading-6 ${textMuted}`}>
        Licencia Rocketbot: <strong className="font-bold text-[#0A2540]">{usd(pricing.license)}</strong>.{" "}
        {prices.licenseNote}
      </p>
      <a href="#services" className={`${textLink} mt-3 inline-block text-sm`}>
        Qué incluye cada etapa
      </a>
    </div>
  );
}
