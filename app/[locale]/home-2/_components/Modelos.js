import Image from "next/image";
import { Link } from "@/i18n/routing";
import Icon from "./icons";
import Reveal from "./Reveal";
import { container, CtaButton, SectionHeading, ctaHref } from "./ui";

const models = [
  {
    icon: "briefcase",
    title: "Proyecto cerrado",
    text: "Definimos juntos el alcance, lo construimos y lo dejamos funcionando.",
    servicio: "automatizacion",
  },
  {
    icon: "calendar",
    title: "Servicio mensual",
    text: "Soporte, ajustes y mejoras continuas para lo que ya está en marcha.",
    servicio: "automatizacion",
  },
  {
    icon: "users",
    title: "Equipo dedicado",
    text: "Personas de Robotipy trabajando como una extensión de tu equipo.",
    servicio: "software",
  },
  {
    icon: "graduation",
    title: "Capacitación",
    text: "Talleres prácticos de automatización e IA para tus equipos.",
    servicio: "capacitacion",
  },
];

export default function Modelos() {
  return (
    <section aria-labelledby="h2-modelos-title" className="bg-white py-20 md:py-28">
      <div className={`${container} grid items-center gap-14 lg:grid-cols-12 lg:gap-16`}>
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20">
              <Image
                src="/images/servicios/ServiciosPublicos.jpeg"
                alt="Profesional explicando un tablero de datos en una pantalla grande"
                width={2048}
                height={2048}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="aspect-[4/5] h-auto w-full object-cover object-left"
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-[#00182B] p-5 text-white shadow-2xl sm:left-auto sm:right-[-1.5rem] sm:max-w-[300px]">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#039695] text-[#00182B]">
                <Icon name="chat" className="h-6 w-6" />
              </span>
              <p className="text-lg font-bold leading-snug">La primera reunión no tiene costo</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              id="h2-modelos-title"
              eyebrow="Formas de trabajar"
              title="Trabajemos de la forma que más te acomode"
              lead="Partimos con una conversación y elegimos juntos el formato que calza con tu empresa."
              align="left"
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {models.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 90}>
                <Link
                  href={ctaHref(m.servicio)}
                  className="group flex h-full flex-col rounded-2xl border-2 border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#039695] hover:shadow-xl motion-reduce:transform-none"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00182B] text-[#4fd1d0] transition group-hover:bg-[#039695] group-hover:text-[#00182B]">
                    <Icon name={m.icon} className="h-7 w-7" />
                  </span>
                  <span className="mt-5 text-xl font-extrabold text-[#00182B]">{m.title}</span>
                  <span className="mt-2 text-lg leading-relaxed text-slate-700">{m.text}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-10">
            <CtaButton variant="navy" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
