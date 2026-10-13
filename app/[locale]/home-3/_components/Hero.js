import Image from "next/image";
import { Link } from "@/i18n/routing";
import { clientLogos, facts, team } from "@/libs/landingFacts";
import Icon from "./Icon";
import { agendaHref, btnGhostLight, btnPrimary, container, muted, tealText } from "./ui";

function LogoBand() {
  const logos = clientLogos.map((logo) => ({ ...logo, w: Math.round((logo.width * 32) / 28) }));
  return (
    <div className="bg-primary">
      <div className={`${container} flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-10`}>
        <p className="shrink-0 text-lg font-semibold text-white lg:max-w-[220px]">
          Empresas que confían en nosotros
        </p>
        <div className="h3-marquee-wrap relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="h3-marquee flex w-max items-center">
            <ul className="flex shrink-0 items-center gap-14 pr-14" aria-label="Clientes de Robotipy">
              {logos.map((logo) => (
                <li key={logo.src} className="shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={32}
                    className="h-8 w-auto opacity-85"
                  />
                </li>
              ))}
            </ul>
            <ul className="h3-marquee-dup flex shrink-0 items-center gap-14 pr-14" aria-hidden="true">
              {logos.map((logo) => (
                <li key={logo.src} className="shrink-0">
                  <Image src={logo.src} alt="" width={logo.w} height={32} className="h-8 w-auto opacity-85" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-accent/10 blur-3xl"
      />
      <div className={`${container} relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24`}>
        <div className="animate-opacity lg:col-span-6">
          <p className={`inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-base font-semibold md:text-lg ${tealText}`}>
            <Icon name="sparkle" className="h-5 w-5" />
            Automatización, IA y software para empresas
          </p>
          <h1
            id="hero-titulo"
            className="mt-6 text-[40px] font-extrabold leading-[1.06] tracking-tight text-primary sm:text-5xl lg:text-[64px]"
          >
            Automatizamos tu empresa con un equipo que te acompaña
          </h1>
          <p className={`mt-6 max-w-xl text-lg leading-relaxed md:text-xl ${muted}`}>
            Creamos asistentes de IA que atienden por WhatsApp, robots de software para las tareas repetitivas y
            aplicaciones hechas a tu medida. Te explicamos todo con palabras simples y seguimos a tu lado después de la entrega.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={agendaHref("automatizacion")} className={btnPrimary}>
              <Icon name="calendar" className="h-6 w-6" />
              Agenda una reunión
            </Link>
            <a href="#que-hacemos" className={btnGhostLight}>
              Ver qué hacemos
            </a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {team.map((member) => (
                  <Image
                    key={member.name}
                    src={member.image}
                    alt={member.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full bg-accent/20 object-cover ring-4 ring-white"
                  />
                ))}
              </div>
              <p className="text-base font-semibold leading-snug text-primary md:text-lg">
                Equipo en {facts.team}
              </p>
            </div>
            <p className="inline-flex items-center gap-2 text-base font-semibold text-primary md:text-lg">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-white">
                <Icon name="check" className="h-4 w-4" strokeWidth={3} />
              </span>
              La primera reunión no tiene costo
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="grid h-[360px] grid-cols-5 grid-rows-2 gap-3 sm:h-[480px] sm:gap-4 lg:h-[560px]">
            <div className="relative col-span-3 row-span-2 overflow-hidden rounded-[28px]">
              <Image
                src="/images/servicios/Seguros.jpeg"
                alt="Ejecutiva sonriendo mientras revisa un panel en su tablet"
                fill
                priority
                sizes="(min-width: 1024px) 30vw, 60vw"
                className="object-cover object-left"
              />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-[28px]">
              <Image
                src="/images/servicios/Manufactura.jpeg"
                alt="Supervisora de planta revisando indicadores en una tablet"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover object-[70%_50%]"
              />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-[28px]">
              <Image
                src="/images/servicios/ServiciosPublicos.jpeg"
                alt="Operadora señalando un mapa en una sala de monitoreo"
                fill
                sizes="(min-width: 1024px) 20vw, 40vw"
                className="object-cover object-[35%_50%]"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto -mt-14 w-[270px] rounded-2xl bg-white p-4 shadow-2xl shadow-primary/20 ring-1 ring-black/5 sm:absolute sm:-bottom-6 sm:left-[-20px] sm:mx-0 sm:mt-0 sm:w-[290px]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white">
                <Icon name="bot" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-base font-bold leading-tight text-primary">Asistente de IA</p>
                <p className={`text-[15px] font-medium ${tealText}`}>Ejemplo por WhatsApp</p>
              </div>
            </div>
            <p className="mt-3 ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#E7F5F4] px-3 py-2 text-base leading-snug text-primary">
              Hola, ¿mi pedido ya salió?
            </p>
            <p className="mt-2 w-fit max-w-[90%] rounded-2xl rounded-tl-sm bg-[#F1F3F5] px-3 py-2 text-base leading-snug text-primary">
              ¡Hola! Sí, va en camino. ¿Te aviso por aquí cuando llegue?
            </p>
          </div>

          <div className="absolute -top-5 right-3 hidden rounded-2xl bg-primary px-5 py-4 text-white shadow-2xl shadow-primary/30 sm:block">
            <p className="text-4xl font-extrabold leading-none">{facts.projects}</p>
            <p className="mt-1 text-lg font-medium text-white/85">proyectos desde {facts.founded}</p>
          </div>
        </div>
      </div>

      <LogoBand />
    </section>
  );
}
