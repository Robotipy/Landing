import Image from "next/image";
import { TextLink, container } from "./ui";

export default function Hechos({ cells, logos }) {
  return (
    <section id="hechos" aria-labelledby="hechos-title" className="scroll-mt-20 py-12 md:py-16">
      <div className={container}>
        <p className="h2-eyebrow">En cifras</p>
        <h2 id="hechos-title" className="sr-only">
          Robotipy en cifras
        </h2>
        <dl className="h2-line mt-5 grid grid-cols-2 gap-px border-y bg-white/[0.08] lg:grid-cols-5">
          {cells.map((cell, index) => (
            <div
              key={cell.label}
              className={[
                "h2-bg flex flex-col-reverse justify-end py-6 pr-4 lg:pr-6",
                index % 2 === 0 ? "pl-0" : "pl-4",
                index === 0 ? "lg:pl-0" : "lg:pl-6",
                index === cells.length - 1 && cells.length % 2 === 1 ? "col-span-2 lg:col-span-1" : "",
              ].join(" ")}
            >
              <dt className="h2-muted mt-2 text-sm leading-snug">{cell.label}</dt>
              <dd className="h2-num text-3xl font-semibold leading-none tracking-tight text-[#E6F1F5] md:text-4xl">
                {cell.value}
              </dd>
            </div>
          ))}
        </dl>

        {logos.length > 0 && (
          <div className="mt-10">
            <p id="clientes-title" className="h2-eyebrow">
              Algunos clientes
            </p>
            {/* PNG blancos sobre transparente: en este fondo oscuro van tal cual.
                Ancho de despliegue de landingFacts y alto proporcional (data.js). */}
            <ul
              aria-labelledby="clientes-title"
              className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12"
            >
              {logos.map((logo) => (
                <li key={logo.src} className="flex min-h-16 max-w-full items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto max-w-full opacity-80"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          <TextLink href="/about" className="inline-flex min-h-11 items-center">
            Quiénes somos
          </TextLink>
          <TextLink href="/rocketbot" className="inline-flex min-h-11 items-center">
            Implementación de Rocketbot
          </TextLink>
        </p>
      </div>
    </section>
  );
}
