import Image from "next/image";
import { Link } from "@/i18n/routing";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { agendaHref, btnPrimary, container, grayBg, muted, SectionHeading } from "./ui";

const STEPS = [
  {
    icon: "talk",
    title: "Conversamos",
    text: "Nos cuentas qué le quita tiempo a tu equipo. La primera reunión no tiene costo.",
  },
  {
    icon: "target",
    title: "Te proponemos un primer paso",
    text: "Elegimos juntos algo concreto y útil para partir, con alcance y plazos claros.",
  },
  {
    icon: "rocket",
    title: "Lo ponemos en marcha contigo",
    text: "Lo implementamos junto a tu equipo y seguimos a tu lado después de la entrega.",
  },
];

const MODELS = [
  {
    icon: "briefcase",
    title: "Proyecto cerrado",
    text: "Definimos juntos qué se entrega y en cuánto tiempo. Ideal para partir con algo puntual.",
  },
  {
    icon: "refresh",
    title: "Servicio mensual",
    text: "Soporte, ajustes y mejoras cada mes. Nos encargamos de que todo siga funcionando.",
  },
  {
    icon: "userPlus",
    title: "Equipo dedicado",
    text: "Personas de Robotipy trabajando como parte de tu equipo. Sumas capacidad cuando la necesitas.",
  },
  {
    icon: "school",
    title: "Capacitación",
    text: "Talleres para que tu equipo aprenda a automatizar y a usar IA, con ejemplos de tu empresa.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="como-trabajamos"
      aria-labelledby="como-trabajamos-titulo"
      className={`scroll-mt-24 ${grayBg} py-20 md:py-28`}
    >
      <div className={container}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              id="como-trabajamos-titulo"
              eyebrow="Cómo trabajamos"
              title="Trabajar con nosotros es simple"
              lead="Avanzas a tu ritmo y siempre sabes qué viene después. No necesitas saber de tecnología para partir."
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] shadow-xl shadow-primary/10">
              <Image
                src="/assets/banners/servicios-profesionales.jpeg"
                alt="Personas trabajando juntas en una oficina abierta"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-accent/40 md:block"
          />
          <ol className="relative grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 120} className="relative">
              <div className="flex h-full flex-col items-center rounded-[28px] bg-white px-6 pb-8 pt-8 text-center md:pt-0 shadow-sm ring-1 ring-black/5 md:bg-transparent md:shadow-none md:ring-0">
                <div className="relative grid h-20 w-20 place-items-center rounded-3xl bg-white text-[#027776] shadow-lg shadow-primary/10 ring-1 ring-black/5">
                  <Icon name={step.icon} className="h-10 w-10" strokeWidth={1.7} />
                  <span className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-primary text-lg font-extrabold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-primary">{step.title}</h3>
                <p className={`mt-3 max-w-sm text-lg leading-relaxed ${muted}`}>{step.text}</p>
              </div>
            </Reveal>
          ))}
          </ol>
        </div>

        <div className="mt-20 rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-10 lg:p-14">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-extrabold leading-tight text-primary md:text-4xl">
                Elige cómo quieres trabajar
              </h3>
              <p className={`mt-3 text-lg leading-relaxed md:text-xl ${muted}`}>
                Puedes partir con una modalidad y sumar otra cuando la necesites.
              </p>
            </div>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MODELS.map((model, index) => (
              <Reveal as="li" key={model.title} delay={index * 90}>
                <div className="group h-full rounded-3xl bg-[#F4F6F7] p-7 transition duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-xl motion-reduce:transform-none">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-white">
                    <Icon name={model.icon} className="h-7 w-7" />
                  </span>
                  <h4 className="mt-5 text-xl font-bold text-primary transition group-hover:text-white">
                    {model.title}
                  </h4>
                  <p className={`mt-2 text-lg leading-relaxed ${muted} transition group-hover:text-white/85`}>
                    {model.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href={agendaHref("automatizacion")} className={btnPrimary}>
              <Icon name="calendar" className="h-6 w-6" />
              Agenda una reunión
            </Link>
            <p className={`text-lg ${muted}`}>Te ayudamos a elegir la modalidad que más te conviene.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
