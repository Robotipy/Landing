import ClientLogos from "@/components/landing/ClientLogos";
import { facts } from "@/libs/landingFacts";
import { pricing, usd } from "./pricing";
import { container, line, textMuted } from "./ui";

// El SVG de Rocketbot trae mucho aire alrededor del dibujo. Se recorta con
// un contenedor para que el logo se vea a 28 px de alto.
function RocketbotLogo() {
  return (
    <span role="img" aria-label="Rocketbot" className="relative block h-7 w-[244px] max-w-full overflow-hidden">
      <img
        src="/images/rocketbot.svg"
        alt=""
        width={285}
        height={103}
        className="absolute max-w-none brightness-0"
        style={{ width: 285, height: 103, left: -21, top: -37.5 }}
      />
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section
      id="confianza"
      aria-labelledby="confianza-titulo"
      className={`border-b ${line} bg-white py-10 text-[#0A2540] md:py-12`}
    >
      <div className={`${container} grid gap-8 md:grid-cols-12 md:items-center md:gap-10`}>
        <div className="md:col-span-5">
          <p className={`text-xs font-bold uppercase tracking-[0.16em] ${textMuted}`}>Respaldo</p>
          <div className="mt-4">
            <RocketbotLogo />
          </div>
          <h2 id="confianza-titulo" className="mt-4 text-xl font-bold leading-7">
            {facts.partner}
          </h2>
        </div>

        <div className={`border-t ${line} pt-6 md:col-span-7 md:border-l md:border-t-0 md:pl-10 md:pt-0`}>
          <p className="text-base leading-[26px]">
            Si tu empresa ya tiene licencia Rocketbot, trabajamos sobre ella y no la vuelves a
            pagar. Si no tiene una, se suman{" "}
            <span className="font-bold tabular-nums">{usd(pricing.license)}</span>
            {pricing.licensePeriod ? ` ${pricing.licensePeriod}` : ""} como ítem aparte en la
            cotización.
          </p>
        </div>
        <ClientLogos tone="light" className="md:col-span-12" />
      </div>
    </section>
  );
}
