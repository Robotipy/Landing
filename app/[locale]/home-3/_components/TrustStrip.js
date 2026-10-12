import Image from "next/image";
import { clientLogos, facts, routes } from "@/libs/landingFacts";
import { AppLink, container, line, textLink, textMuted } from "./ui";

const LOGO_LABEL = "Algunos de nuestros clientes";

// Recorte de landing-3/TrustStrip.js: el SVG trae mucho aire alrededor del
// dibujo y se encuadra para que se vea a 28 px de alto.
function RocketbotLogo() {
  return (
    <span role="img" aria-label="Rocketbot" className="relative block h-7 w-[244px] max-w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
  const logos = clientLogos;
  const rocketbotLinks = [
    { href: routes.rocketbot, label: "Implementación de Rocketbot" },
    { href: `${routes.rocketbot}/chile`, label: "Rocketbot en Chile" },
    { href: `${routes.rocketbot}/argentina`, label: "Rocketbot en Argentina" },
    { href: "/blog/robotipy-platinum-partner-rocketbot", label: "Robotipy es Platinum Partner de Rocketbot" },
    { href: routes.about, label: "Conoce al equipo" },
  ];

  return (
    <section
      id="confianza"
      aria-labelledby="confianza-titulo"
      className={`border-b ${line} bg-white py-10 text-[#0A2540] md:py-12`}
    >
      <div className={`${container} grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12`}>
        <div className="min-w-0 lg:col-span-8">
          <p className={`text-xs font-bold uppercase tracking-[0.16em] ${textMuted}`}>{LOGO_LABEL}</p>
          <ul
            aria-label={LOGO_LABEL}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4 sm:gap-x-9 sm:gap-y-6"
          >
            {logos.map((logo) => (
              <li key={logo.src}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={28}
                  className="h-6 w-auto brightness-0 opacity-60 sm:h-7"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={`min-w-0 border-t ${line} pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0`}>
          <RocketbotLogo />
          <h2 id="confianza-titulo" className="mt-4 text-lg font-bold leading-7">
            {facts.partner}
          </h2>
          <p className={`mt-2 text-[15px] leading-6 ${textMuted}`}>{facts.founderNote}</p>
          <p className="mt-3 text-[15px] leading-6">
            Si tu empresa ya tiene licencia de Rocketbot, el costo de licencia no se suma a tu proyecto.{" "}
            <a href="#services" className={textLink}>
              Revisa los precios con tu licencia
            </a>
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm leading-5">
            {rocketbotLinks.map((link) => (
              <li key={link.href}>
                <AppLink href={link.href} className={textLink}>
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
