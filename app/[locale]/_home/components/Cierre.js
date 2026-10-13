import Image from "next/image";
import { Link } from "@/i18n/routing";
import { facts, team, tools } from "@/libs/landingFacts";
import Icon from "./icons";
import Reveal from "./Reveal";
import { container, CtaButton } from "./ui";

const toolIcons = {
  "/evaluador-automatizacion": "clipboard",
  "/roi-calculator": "calculator",
  "/calculadora-vision-artificial": "eye",
  "/calculadora-aforo-vehicular": "car",
};

// Solo integrantes con retrato de frente (la foto publicada de Gabriel es de espalda).
const FACES = ["Danilo Toro", "Ivan Cabrera"];

// Cierre: personas reales del equipo, CTA principal y herramientas gratuitas.
export default function Cierre() {
  const people = team.filter((person) => FACES.includes(person.name));
  return (
    <section aria-labelledby="h2-cierre-title" className="relative overflow-hidden bg-[#00182B] py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(60% 70% at 50% 0%, rgba(3,150,149,0.26), transparent 70%)",
        }}
      />
      <div className={`${container} relative`}>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <ul className="grid grid-cols-2 gap-6 sm:flex sm:justify-center sm:gap-x-12" aria-label="Parte del equipo de Robotipy">
            {people.map((person) => (
              <li key={person.name} className="flex flex-col items-center text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={112}
                  height={112}
                  sizes="112px"
                  className="h-24 w-24 rounded-full object-cover ring-4 ring-[#039695]/60 sm:h-28 sm:w-28"
                />
                <span className="mt-3 text-lg font-bold">{person.name}</span>
                <span className="text-base text-white/70">{person.role}</span>
              </li>
            ))}
          </ul>
          <h2
            id="h2-cierre-title"
            className="mt-8 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Cuéntanos qué tarea le quita más tiempo a tu equipo
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            En una primera reunión, sin costo, revisamos tu caso y te proponemos por dónde partir. Te atiende
            nuestro equipo en {facts.team}.
          </p>
          <div className="mt-10">
            <CtaButton />
          </div>
          <div className="mt-10 flex items-center gap-4 text-base text-white/70">
            <Image src="/images/rocketbotwhite.svg" alt="Rocketbot" width={130} height={47} className="h-10 w-auto opacity-90" />
            <span>{facts.partner}</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-center text-lg font-bold">¿Prefieres explorar primero? Usa nuestras herramientas gratuitas</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <li key={tool.href}>
                <Link
                  href={tool.href}
                  className="flex min-h-[64px] items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-base font-semibold text-white ring-1 ring-white/10 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-[#039695] motion-reduce:transform-none"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#039695] text-[#00182B]">
                    <Icon name={toolIcons[tool.href] || "spark"} className="h-5 w-5" />
                  </span>
                  {tool.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
