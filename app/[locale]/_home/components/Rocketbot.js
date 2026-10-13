import Image from "next/image";
import { Link } from "@/i18n/routing";
import { facts, routes } from "@/libs/landingFacts";
import { getRobotCases, getRobotStats } from "../data";
import { BrowserFrame } from "./frames";
import Icon from "./icons";
import { LiveDot } from "./mocks";
import Reveal from "./Reveal";
import { container, CtaButton, textLink } from "./ui";

// Robots en producción hechos con Rocketbot. Muestra casos reales publicados.
function RobotsBoard() {
  const robots = getRobotCases();
  return (
    <BrowserFrame label="Robots en producción">
      <div className="bg-white p-4 sm:p-7">
        {/* El lado derecho queda libre para el sello de partner que flota encima. */}
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00182B] text-[#4fd1d0]">
            <Icon name="robot" className="h-7 w-7" />
          </span>
          <div>
            <p className="text-lg font-bold text-[#00182B]">Robots en producción</p>
            <p className="flex items-center gap-2 text-sm text-slate-500">
              <LiveDot />
              Hechos con Rocketbot
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-3">
          {robots.map((robot) => (
            <li
              key={robot.id}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 px-3 py-3 sm:gap-4 sm:px-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#039695] text-white">
                <Icon name="check" className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <p className="text-base font-bold text-[#00182B] sm:text-lg">{robot.name}</p>
                  <p className="text-sm text-slate-500">{robot.industry}</p>
                </div>
                <p className="mt-1 text-sm font-bold text-[#027a79] sm:mt-0 sm:shrink-0 sm:text-right sm:text-base">
                  {robot.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </BrowserFrame>
  );
}

// Automatización RPA: robots de software con Rocketbot, del que somos Platinum Partner.
export default function Rocketbot() {
  const { stats, href, industry } = getRobotStats();
  return (
    <section aria-labelledby="h2-rocketbot-title" className="bg-white py-20 md:py-28">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-12 lg:gap-12`}>
        <Reveal className="lg:order-2 lg:col-span-5">
          <h2
            id="h2-rocketbot-title"
            className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#00182B] sm:text-4xl lg:text-5xl"
          >
            Robots de software, con el respaldo de Rocketbot
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
            Somos Platinum Partner de Rocketbot, la plataforma con la que construimos nuestros robots. Trabajan
            sobre los sistemas que tu empresa ya usa (ERP, portales, correo y planillas) y avanzan de día y de
            noche sin que nadie tenga que copiar datos a mano.
          </p>

          <div className="mt-8 flex items-center gap-3 sm:gap-4">
            <Image
              src="/home-assets/rocketbot-rojo.png"
              alt="Rocketbot"
              width={560}
              height={70}
              sizes="176px"
              className="h-5 w-auto sm:h-7"
            />
            <span className="h-8 w-px bg-slate-300" aria-hidden="true" />
            <span className="whitespace-nowrap text-base font-bold text-[#00182B] sm:text-lg">Platinum Partner</span>
          </div>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{facts.founderNote}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <CtaButton servicio="automatizacion" />
            <Link href={routes.rocketbot} className={`${textLink} text-[#027a79]`}>
              Más sobre Rocketbot
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:order-1 lg:col-span-7">
          <div className="relative pt-6 sm:pt-0">
            <RobotsBoard />
            {stats.length > 0 && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-[#F2F5F7] p-6">
                <dl className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd className="text-4xl font-extrabold tracking-tight text-[#027a79] sm:text-5xl">{stat.value}</dd>
                      <dd className="mt-2 text-base text-slate-700 sm:text-lg">{stat.label}</dd>
                    </div>
                  ))}
                </dl>
                {href && (
                  <Link href={href} className={`${textLink} mt-5 text-base text-[#027a79]`}>
                    Caso real: {industry.toLowerCase()}
                    <Icon name="arrow" className="h-5 w-5" />
                  </Link>
                )}
              </div>
            )}
            <div
              className="h2-float absolute -top-6 right-1 z-10 w-20 sm:-right-4 sm:-top-12 sm:w-32 lg:w-36"
              style={{ animationDelay: "0.8s" }}
            >
              <Image
                src="/home-assets/rocketbot-platinum.png"
                alt="Sello Platinum Partner de Rocketbot"
                width={400}
                height={400}
                sizes="144px"
                className="h-auto w-full drop-shadow-xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
