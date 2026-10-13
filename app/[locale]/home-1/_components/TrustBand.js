import Image from "next/image";
import { clientLogos, facts } from "@/libs/landingFacts";
import Reveal from "./Reveal";
import { Icon, RocketbotLogo, container } from "./ui";

// Mismos logos que components/landing/ClientLogos (fuente: libs/landingFacts),
// en una banda que se desplaza sola. Con movimiento reducido queda fija.
function LogoMarquee() {
  const loop = [...clientLogos, ...clientLogos];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        aria-label="Algunos de nuestros clientes"
        className="flex w-max items-center hover:[animation-play-state:paused] motion-safe:animate-[h1-marquee_45s_linear_infinite] motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6"
      >
        {loop.map((logo, i) => {
          const copy = i >= clientLogos.length;
          return (
            <li
              key={`${logo.src}-${i}`}
              aria-hidden={copy ? "true" : undefined}
              className={`shrink-0 px-7 sm:px-9 ${copy ? "motion-reduce:hidden" : ""}`}
            >
              <Image
                src={logo.src}
                alt={copy ? "" : logo.alt}
                width={logo.width}
                height={28}
                className="h-8 w-auto brightness-0 opacity-60 sm:h-9"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function TrustBand() {
  const stats = [
    { icon: "check", value: facts.projects, label: "proyectos entregados" },
    { icon: "map", value: String(facts.clientCountries.length), label: "países con clientes" },
    { icon: "calendar", value: String(facts.founded), label: "año de fundación" },
  ];

  return (
    <section aria-labelledby="confianza-title" className="overflow-hidden border-y border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className={container}>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 id="confianza-title" className="text-2xl font-bold leading-snug tracking-tight text-primary sm:text-3xl">
              Ya trabajamos con empresas de {facts.clientCountriesText}
            </h2>
            <p className="mt-3 text-lg text-slate-600">Nuestro equipo está en {facts.team}.</p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <dl className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-5">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="flex items-center gap-4 sm:block">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-primary">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex items-baseline gap-3 sm:block">
                      <span className="block text-3xl font-extrabold leading-none text-primary sm:mt-4 sm:text-4xl">
                        {s.value}
                      </span>
                      <span aria-hidden="true" className="block text-base leading-snug text-slate-600 sm:mt-2 sm:text-lg">
                        {s.label}
                      </span>
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl bg-primary px-5 py-4 text-white sm:mt-4 sm:px-6">
              <RocketbotLogo height={26} tone="dark" />
              <p className="text-base font-semibold sm:text-lg">{facts.partner}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14" delay={200}>
          <LogoMarquee />
        </Reveal>
      </div>
    </section>
  );
}
