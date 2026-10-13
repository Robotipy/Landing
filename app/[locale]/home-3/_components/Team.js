import Image from "next/image";
import { Link } from "@/i18n/routing";
import { facts, routes, team } from "@/libs/landingFacts";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { container, linkDark, SectionHeading } from "./ui";

const FACTS = [
  { value: String(facts.founded), label: "Año en que nació Robotipy" },
  { value: facts.projects, label: "Proyectos entregados" },
  { value: String(facts.clientCountries.length), label: `Países con clientes: ${facts.clientCountriesText}` },
];

export default function Team() {
  return (
    <section id="equipo" aria-labelledby="equipo-titulo" className="relative scroll-mt-24 overflow-hidden bg-primary py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl"
      />
      <div className={`${container} relative`}>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="equipo-titulo"
            eyebrow="Nuestro equipo"
            title="Conoce a las personas que te van a acompañar"
            lead={`Somos un equipo en ${facts.team} que trabaja codo a codo con cada cliente. Nos vas a conocer desde la primera reunión.`}
            dark
          />
          <Link href={routes.about} className={`${linkDark} shrink-0`}>
            Conoce más sobre nosotros
            <Icon name="right" className="h-5 w-5" />
          </Link>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal as="li" key={member.name} delay={index * 120}>
              <figure className="group h-full overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 motion-reduce:transform-none">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-accent/40 to-accent/10">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  />
                </div>
                <figcaption className="p-6">
                  <p className="text-2xl font-bold text-white">{member.name}</p>
                  <p className="mt-1 text-lg text-white/75">{member.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 grid gap-4 rounded-[28px] bg-white p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:items-center">
          {FACTS.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-[#F4F6F7] p-5">
              <p className="text-4xl font-extrabold leading-none text-primary md:text-5xl">{fact.value}</p>
              <p className="mt-2 text-lg leading-snug text-[#3B4A57]">{fact.label}</p>
            </div>
          ))}
          <div className="flex h-full flex-col justify-center rounded-2xl bg-[#F4F6F7] p-5">
            <Image
              src="/images/rocketbot.svg"
              alt="Rocketbot"
              width={166}
              height={60}
              className="h-14 w-auto self-start brightness-0"
            />
            <p className="mt-2 text-lg font-semibold leading-snug text-primary">{facts.partner}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
