import Image from "next/image";
import { facts } from "@/libs/landingFacts";
import { BrowserFrame, MelonChatPhone } from "./frames";
import Icon from "./icons";
import { container, CtaButton, btnOutlineDark } from "./ui";

function FloatChip({ icon, children, className = "", delay = "0s" }) {
  return (
    <div
      className={`h2-float absolute z-30 hidden items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 text-sm font-bold text-[#00182B] shadow-xl shadow-black/30 sm:flex lg:text-base ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#039695] text-[#00182B]">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      {children}
    </div>
  );
}

// Composición de pantallas reales: YOAO (producto propio), Robotipy Projects
// (producto propio) y la conversación de WhatsApp de Melon Help (partner).
function HeroStage() {
  return (
    <div className="relative mx-auto aspect-[20/17] w-full max-w-[680px]">
      <div className="absolute right-0 top-0 z-0 w-[86%]">
        <BrowserFrame label="YOAO, analítica de video" tone="dark">
          <Image
            src="/home-assets/yoao-trafico.jpg"
            alt="YOAO detecta y cuenta vehículos en una autopista"
            width={960}
            height={540}
            priority
            sizes="(min-width: 1024px) 580px, 86vw"
            className="block h-auto w-full"
          />
        </BrowserFrame>
      </div>

      <div className="absolute right-[2%] top-[55%] z-10 w-[56%]">
        <BrowserFrame label="Robotipy Projects" tone="dark">
          <Image
            src="/home-assets/projects-dashboard.jpg"
            alt="Panel de Robotipy Projects con actividad, entregas y tickets de soporte"
            width={1600}
            height={824}
            sizes="(min-width: 1024px) 380px, 56vw"
            className="block h-auto w-full"
          />
        </BrowserFrame>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-[31%]">
        <MelonChatPhone priority sizes="(min-width: 1024px) 1000px, 150vw" />
      </div>

      <FloatChip icon="chat" className="left-[3%] top-[17%]" delay="0s">
        Agente de IA en WhatsApp
      </FloatChip>
      <FloatChip icon="camera" className="-top-5 right-[5%]" delay="1.2s">
        Conteo de vehículos con IA
      </FloatChip>
      <FloatChip icon="code" className="-bottom-4 right-[8%]" delay="2.4s">
        Software de gestión
      </FloatChip>
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="h2-hero-title" className="relative overflow-hidden bg-[#00182B] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(55% 60% at 85% 25%, rgba(3,150,149,0.30), transparent 70%), radial-gradient(45% 55% at 0% 100%, rgba(3,150,149,0.14), transparent 70%)",
        }}
      />
      <div
        className={`${container} relative grid items-center gap-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-16`}
      >
        <div className="animate-opacity lg:col-span-5">
          <h1
            id="h2-hero-title"
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl"
          >
            Automatizamos tu empresa con <span className="text-[#4fd1d0]">IA, robots y software</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Agentes que atienden a tus clientes por WhatsApp, robots que hacen las tareas repetitivas y
            aplicaciones hechas a tu medida. La primera reunión no tiene costo.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CtaButton />
            <a href="#soluciones" className={btnOutlineDark}>
              Ver soluciones
            </a>
          </div>
          <ul className="mt-10 flex flex-col gap-3 text-base text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-7">
            <li className="flex items-center gap-2">
              <Icon name="check" className="h-5 w-5 text-[#4fd1d0]" strokeWidth={2.4} />
              {facts.projects} proyectos entregados
            </li>
            <li className="flex items-center gap-2">
              <Icon name="check" className="h-5 w-5 text-[#4fd1d0]" strokeWidth={2.4} />
              {facts.partner}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
