import Image from "next/image";
import { Link } from "@/i18n/routing";
import { team, tools } from "@/libs/landingFacts";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { agendaHref, btnPrimary, container } from "./ui";

const INTERESTS = [
  { servicio: "chatbot", icon: "chat", label: "Un asistente de IA o chatbot" },
  { servicio: "automatizacion", icon: "bot", label: "Automatizar tareas repetitivas" },
  { servicio: "software", icon: "code", label: "Software a medida" },
  { servicio: "capacitacion", icon: "school", label: "Capacitar a mi equipo" },
];

export default function Closing() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="relative scroll-mt-24 overflow-hidden bg-primary">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent/25 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-3xl"
      />

      <div className={`${container} relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:items-center`}>
        <Reveal className="lg:col-span-7">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {team.map((member) => (
                <Image
                  key={member.name}
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full bg-accent/30 object-cover ring-4 ring-primary"
                />
              ))}
            </div>
            <p className="text-lg font-semibold leading-snug text-white">
              Te responde
              <span className="block font-normal text-white/80">nuestro equipo</span>
            </p>
          </div>
          <h2 id="contacto-titulo" className="mt-6 text-[38px] font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl">
            Conversemos sobre tu empresa
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
            Cuéntanos qué le quita tiempo a tu equipo y te ayudamos a elegir por dónde partir. La primera reunión no
            tiene costo.
          </p>
          <Link href={agendaHref("automatizacion")} className={`${btnPrimary} mt-9`}>
            <Icon name="calendar" className="h-6 w-6" />
            Agenda una reunión
          </Link>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5">
          <div className="rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
            <p className="text-xl font-bold text-primary">¿Qué te interesa?</p>
            <ul className="mt-5 grid gap-3">
              {INTERESTS.map((item) => (
                <li key={item.servicio}>
                  <Link
                    href={agendaHref(item.servicio)}
                    className="group flex min-h-[60px] items-center gap-4 rounded-2xl bg-[#F4F6F7] px-4 text-lg font-semibold text-primary transition hover:bg-accent hover:text-white"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#027776]">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex-1">{item.label}</span>
                    <Icon name="right" className="h-5 w-5 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-12">
          <div className="flex flex-col gap-4 border-t border-white/15 pt-8 lg:flex-row lg:items-center lg:gap-8">
            <p className="inline-flex shrink-0 items-center gap-2 text-lg font-semibold text-white">
              <Icon name="calculator" className="h-6 w-6 text-accent" />
              ¿Prefieres explorar primero? Prueba gratis:
            </p>
            <ul className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="inline-flex min-h-[48px] items-center rounded-full border-2 border-white/25 px-5 text-base font-semibold text-white md:text-lg transition hover:border-white hover:bg-white/10"
                  >
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
