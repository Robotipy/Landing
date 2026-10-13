import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getMelonCase } from "../data";
import { BrowserFrame } from "./frames";
import Icon from "./icons";
import { MelonSteps } from "./mocks";
import Reveal from "./Reveal";
import { container, CtaButton, textLink } from "./ui";

// Implementación de Melon Help: plataforma de un partner, no producto propio.
export default function MelonHelp() {
  const melonCase = getMelonCase();
  return (
    <section
      aria-labelledby="h2-melon-title"
      className="relative overflow-hidden bg-[#00182B] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 60% at 100% 50%, rgba(3,150,149,0.22), transparent 70%)",
        }}
      />
      <div className={`${container} relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12`}>
        <Reveal className="lg:col-span-5">
          <h2
            id="h2-melon-title"
            className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Atención con IA por WhatsApp, lista para tu equipo
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Somos partner implementador de Melon Help. Lo configuramos con la información de tu empresa, lo conectamos a tus canales y
            capacitamos a tu equipo. Cada conversación queda registrada como un ticket y ninguna se pierde.
          </p>

          {melonCase && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <dl className="grid grid-cols-2 gap-6">
                {melonCase.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-4xl font-extrabold tracking-tight text-[#4fd1d0] sm:text-5xl">{stat.value}</dd>
                    <dd className="mt-2 text-base text-white/80 sm:text-lg">{stat.label}</dd>
                  </div>
                ))}
              </dl>
              <Link href={melonCase.href} className={`${textLink} mt-5 text-base text-white`}>
                Caso real: {melonCase.industry.toLowerCase()}
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          )}

          <div className="mt-10">
            <CtaButton servicio="chatbot" />
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="relative">
            <BrowserFrame label="Melon Help, tablero de tareas">
              <Image
                src="/home-assets/melon-tablero.jpg"
                alt="Tablero de Melon Help con tareas de soporte ordenadas por estado: por revisar, en curso, en espera del cliente y hechas"
                width={1440}
                height={900}
                sizes="(min-width: 1024px) 700px, 92vw"
                className="block h-auto w-full"
              />
            </BrowserFrame>
            <MelonSteps className="relative z-10 mx-3 -mt-6 sm:absolute sm:-bottom-10 sm:-left-6 sm:mx-0 sm:mt-0 sm:w-[340px]" />
            <div className="h2-float absolute -right-2 -top-8 z-10 hidden w-24 sm:block lg:w-28" style={{ animationDelay: "0.8s" }}>
              <Image
                src="/home-assets/melonbot.png"
                alt="Mascota de Melon Help"
                width={400}
                height={397}
                sizes="112px"
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
