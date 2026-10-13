import Image from "next/image";
import { facts } from "@/libs/landingFacts";
import { BrowserFrame, CtaLink, Eyebrow, Icon, PhoneFrame, container } from "./ui";
import { cta, heroStat } from "./data";

// Entrada del hero solo con CSS: se ve desde el primer pintado, sin esperar JS.
const rise = "motion-safe:animate-[h1-rise_0.8s_ease-out_both]";

// Recorte del teléfono que aparece en /home-assets/melon-demo.jpg (1280x720):
// la pantalla ocupa x 102 a 371 e y 102 a 619.
function WhatsappScreen() {
  return (
    <Image
      src="/home-assets/melon-demo.jpg"
      alt="Conversación por WhatsApp en la que un agente de IA responde a una clienta"
      width={1280}
      height={720}
      sizes="(min-width: 640px) 1000px, 540px"
      preload
      className="absolute max-w-none"
      style={{ width: "475.8%", height: "auto", left: "-37.92%", top: "-19.73%" }}
    />
  );
}

function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px] sm:aspect-[6/5]">
      {/* Pantalla principal: la mesa de ayuda ordenada */}
      <div className={`absolute right-0 top-[5%] w-[86%] ${rise}`} style={{ animationDelay: "120ms" }}>
        <BrowserFrame
          src="/home-assets/melon-tablero.jpg"
          width={1440}
          height={900}
          alt="Tablero de tareas de una mesa de ayuda, con casos por revisar, en curso y resueltos"
          label="Mesa de ayuda"
          sizes="(min-width: 1024px) 540px, 86vw"
          preload
        />
      </div>

      {/* Teléfono con WhatsApp */}
      <div className={`absolute bottom-0 left-0 z-10 w-[33%] ${rise}`} style={{ animationDelay: "280ms" }}>
        <PhoneFrame ratio="269 / 517">
          <WhatsappScreen />
        </PhoneFrame>
        <div className="absolute -right-[66%] top-[16%] hidden items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-base font-semibold text-primary shadow-lg ring-1 ring-slate-900/5 sm:flex">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          Agente de IA en línea
        </div>
      </div>

      {/* Video con conteo */}
      <div className={`absolute bottom-[2%] right-[1%] z-10 w-[48%] ${rise}`} style={{ animationDelay: "440ms" }}>
        <div className="relative overflow-hidden rounded-2xl bg-primary shadow-[0_25px_50px_-20px_rgba(0,24,43,0.6)] ring-4 ring-white">
          <Image
            src="/home-assets/yoao-trafico.jpg"
            width={960}
            height={540}
            alt="YOAO detectando y contando vehículos en una autopista"
            sizes="(min-width: 1024px) 300px, 48vw"
            className="block h-auto w-full"
          />
        </div>
        <p className="absolute -top-4 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md sm:text-sm">
          Analítica de video con IA
        </p>
      </div>

      {/* Dato real de un robot */}
      <div className={`absolute left-0 top-0 z-20 max-w-[64%] sm:max-w-[58%] ${rise}`} style={{ animationDelay: "600ms" }}>
        <div className="flex items-start gap-3 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-900/5 motion-safe:animate-[h1-float_7s_ease-in-out_infinite] sm:p-4">
          <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-accent sm:grid">
            <Icon name="robot" className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm font-medium text-slate-600">Robot en una {heroStat.industry.toLowerCase()}</p>
            <p className="mt-0.5 text-lg font-extrabold leading-tight text-primary sm:text-xl">{heroStat.value}</p>
            <p className="text-sm text-slate-600">{heroStat.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-48 -top-48 h-[38rem] w-[38rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className={`${container} relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20`}>
        <div className={`lg:col-span-6 ${rise}`}>
          <Eyebrow>Empresa de automatización y tecnología</Eyebrow>
          <h1
            id="hero-title"
            className="mt-6 text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-primary sm:text-6xl xl:text-[4.25rem]"
          >
            Hacemos que tu empresa <span className="text-accent">trabaje sola</span> en lo repetitivo
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            También te ayudamos a atender mejor a tus clientes y a tener herramientas propias, hechas a la medida de
            cómo trabajas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaLink href={cta()}>Agenda una reunión</CtaLink>
            <CtaLink href="#necesidades" variant="ghost" icon="arrowDown">
              Ver qué podemos resolver
            </CtaLink>
          </div>

          <ul className="mt-8 flex flex-col gap-3 text-base text-slate-700 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:text-lg">
            <li className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-primary">
                <Icon name="check" className="h-4 w-4" strokeWidth={2.4} />
              </span>
              La primera reunión no tiene costo
            </li>
            <li className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-primary">
                <Icon name="check" className="h-4 w-4" strokeWidth={2.4} />
              </span>
              {facts.projects} proyectos desde {facts.founded}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-6">
          <HeroCollage />
        </div>
      </div>
    </section>
  );
}
