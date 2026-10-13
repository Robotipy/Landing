import Image from "next/image";
import { Link } from "@/i18n/routing";
import { facts, team, tools } from "@/libs/landingFacts";
import Reveal from "./Reveal";
import { CtaLink, Icon, RocketbotLogo, container } from "./ui";
import { closingNeeds, cta } from "./data";

const firstNames = (people) => {
  const names = people.map((p) => p.name.split(" ")[0]);
  return names.length > 1 ? `${names.slice(0, -1).join(", ")} y ${names[names.length - 1]}` : names[0];
};

export default function Closing() {
  return (
    <section aria-labelledby="cierre-title" className="relative overflow-hidden bg-primary pb-16 pt-20 text-white lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className={`${container} relative`}>
        <Reveal className="mx-auto max-w-4xl text-center">
          <ul className="flex justify-center -space-x-4" aria-label="Parte del equipo de Robotipy">
            {team.map((person) => (
              <li key={person.name}>
                <Image
                  src={person.image}
                  alt={person.name}
                  width={96}
                  height={96}
                  sizes="96px"
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-primary sm:h-24 sm:w-24"
                />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg text-slate-300">
            {firstNames(team)}, del equipo de Robotipy en {facts.team}
          </p>

          <h2 id="cierre-title" className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Cuéntanos qué te quita tiempo hoy
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            En la primera reunión revisamos tu caso y te decimos por dónde conviene partir. No tiene costo.
          </p>
          <div className="mt-10 flex justify-center">
            <CtaLink href={cta()} variant="teal">
              Agenda una reunión
            </CtaLink>
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-6xl" delay={120}>
          <p className="text-center text-lg font-semibold text-white">O elige directo lo que te interesa</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {closingNeeds.map((n) => (
              <li key={n.servicio}>
                <Link
                  href={cta(n.servicio)}
                  className="group flex h-full min-h-[64px] items-center gap-3 rounded-2xl bg-white/5 px-5 py-4 text-lg font-semibold text-white ring-1 ring-white/15 transition-colors duration-200 hover:bg-white hover:text-primary"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                    <Icon name={n.icon} className="h-5 w-5" />
                  </span>
                  <span className="flex-1">{n.label}</span>
                  <Icon name="arrowRight" className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:col-span-4">
            <RocketbotLogo height={28} tone="dark" />
            <p className="text-base font-semibold text-slate-200">{facts.partner}</p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg font-semibold text-white">Herramientas gratuitas para empezar</p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-4 py-2 text-base text-slate-200 ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Icon name="calculator" className="h-5 w-5 text-accent" />
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
