import Image from "next/image";
import { facts, prices, routes, team } from "@/libs/landingFacts";
import { findPost, postHref } from "./blog";
import { nb, pricing, usd } from "./pricing";
import { AppLink, bandLight, container, line, SectionHeader, sectionY, textLink, textMuted } from "./ui";

const NOT_WORTH_IT_SLUG = "cuando-no-conviene-automatizar-un-proceso";

export default function HowWeWork() {
  const steps = [
    {
      title: "Diagnóstico",
      price: prices.diagnostic,
      text: "Revisamos el proceso contigo, estimamos el ahorro y te decimos si conviene.",
    },
    {
      title: "Documentación y alcance",
      // Sin monto: falta confirmar si los USD 6.000 incluyen esta etapa.
      price: "Antes del desarrollo",
      text: "Documentamos el proceso, sus excepciones y los sistemas que toca, y cerramos alcance y precio por escrito.",
    },
    {
      title: "Desarrollo y marcha blanca",
      price: `${usd(pricing.rpaAverage)} promedio por proceso`,
      text: `${prices.timeline}, con un usuario dedicado para el robot y pruebas con datos reales.`,
    },
    {
      title: "Soporte y monitoreo",
      price: nb(prices.support),
      text: prices.supportNote,
    },
  ];

  // El post se publica el 25 de octubre de 2026. findPost solo lo encuentra
  // desde esa fecha y la página revalida cada hora, así que el enlace aparece
  // sin redeploy.
  const notWorthIt = findPost(NOT_WORTH_IT_SLUG);

  return (
    <section id="como-trabajamos" aria-labelledby="como-trabajamos-titulo" className={`${bandLight} ${sectionY}`}>
      <div className={container}>
        <SectionHeader
          titleId="como-trabajamos-titulo"
          eyebrow="Cómo trabajamos"
          title="De la primera reunión al robot en producción"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {steps.map((step, i) => (
              <li key={step.title} className={`flex min-w-0 gap-4 rounded-2xl border ${line} bg-white p-5 md:p-6`}>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0A2540] text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-6">
                    <span className="sr-only">Paso {i + 1}. </span>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm font-bold leading-5 tabular-nums text-[#027A79]">{step.price}</p>
                  <p className={`mt-2 text-[15px] leading-6 ${textMuted}`}>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside
            aria-labelledby="no-conviene-titulo"
            className="flex flex-col rounded-2xl border-l-4 border-accent bg-white p-6 md:p-7 lg:col-span-4"
          >
            <h3 id="no-conviene-titulo" className="text-lg font-bold leading-7">
              Te decimos cuándo no conviene
            </h3>
            <p className={`mt-3 text-[15px] leading-6 ${textMuted}`}>
              Si un proceso no se paga con RPA, te lo decimos y proponemos otra salida, como una integración por API o
              un desarrollo a medida.
            </p>
            {notWorthIt && (
              <AppLink href={postHref(notWorthIt.slug)} className={`${textLink} mt-4 inline-block text-[15px] leading-6`}>
                {notWorthIt.title}
              </AppLink>
            )}
          </aside>
        </div>

        <div className={`mt-12 border-t ${line} pt-10`}>
          <h3 className="text-xl font-bold leading-7">El equipo</h3>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {team.map((person) => (
              <li key={person.name} className={`min-w-0 rounded-2xl border ${line} bg-white p-6`}>
                <div className="flex items-center gap-4 md:block">
                  <Image
                    src={person.image}
                    alt={`Foto de ${person.name}`}
                    width={96}
                    height={96}
                    className="h-24 w-24 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 md:mt-4">
                    <p className="text-base font-bold leading-6">{person.name}</p>
                    <p className="text-sm font-medium leading-5 text-[#027A79]">{person.role}</p>
                  </div>
                </div>
                <p className={`mt-4 text-[15px] leading-6 md:mt-3 ${textMuted}`}>{person.bio}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] leading-6">
            <span>Equipo en {facts.team}.</span>
            <AppLink href={routes.about} className={textLink}>
              Conoce al equipo
            </AppLink>
          </p>
        </div>
      </div>
    </section>
  );
}
