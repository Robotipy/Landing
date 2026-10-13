import Image from "next/image";
import { Link } from "@/i18n/routing";
import { facts, team } from "@/libs/landingFacts";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { agendaHref, btnPrimary, container, grayBg, muted, SectionHeading } from "./ui";

const FAQS = [
  {
    q: "¿Necesito saber de tecnología?",
    a: "No. Tú nos cuentas cómo trabaja tu equipo y nosotros nos encargamos de la parte técnica, explicándote cada paso en palabras simples.",
  },
  {
    q: "¿Puedo empezar con algo chico?",
    a: "Sí, y es lo que te recomendamos. Partimos por un proceso o un canal de atención, lo ves funcionando y después decides si seguimos.",
  },
  {
    q: "¿Qué pasa si algo falla?",
    a: "Seguimos contigo después de la entrega. Con el servicio mensual revisamos que todo funcione y hacemos los ajustes cuando cambia alguno de tus sistemas.",
  },
  {
    q: "¿Tengo que cambiar los sistemas que uso?",
    a: "No. Los robots trabajan sobre los programas que ya tienes y los asistentes de IA atienden en tus canales de siempre, como WhatsApp, la web o el correo.",
  },
  {
    q: "¿Cuánto cuesta la primera conversación?",
    a: "Nada. La primera reunión o diagnóstico no tiene costo ni te compromete a contratar.",
  },
  {
    q: "¿Trabajan con empresas fuera de Chile?",
    a: `Sí. Tenemos equipo en ${facts.team} y clientes en ${facts.clientCountriesText}.`,
  },
];

export default function Faq() {
  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo" className={`scroll-mt-24 ${grayBg} py-20 md:py-28`}>
      <div className={`${container} grid gap-12 lg:grid-cols-12 lg:gap-14`}>
        <Reveal className="lg:col-span-5">
          <SectionHeading
            id="preguntas-titulo"
            eyebrow="Preguntas frecuentes"
            title="Las dudas que más nos hacen"
            lead="Respuestas cortas y directas. Si te queda alguna, pregúntanos."
          />
          <div className="relative mt-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] lg:aspect-[4/5]">
              <Image
                src="/images/servicios/Salud.jpeg"
                alt="Profesional trabajando tranquilo frente a su computador"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[45%_50%]"
              />
            </div>
            <div className="relative mx-4 -mt-16 rounded-3xl bg-white p-6 shadow-xl shadow-primary/10 ring-1 ring-black/5 sm:mx-8">
              <div className="flex -space-x-3">
                {team.map((member) => (
                  <Image
                    key={member.name}
                    src={member.image}
                    alt={member.name}
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] rounded-full bg-accent/20 object-cover ring-4 ring-white"
                  />
                ))}
              </div>
              <p className="mt-4 text-xl font-bold text-primary">¿Tienes otra pregunta?</p>
              <p className={`mt-1 text-lg ${muted}`}>Te responde nuestro equipo, sin compromiso.</p>
              <Link href={agendaHref("automatizacion")} className={`${btnPrimary} mt-5 w-full sm:w-auto`}>
                Conversemos
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <ul className="space-y-4">
            {FAQS.map((item, index) => (
              <Reveal as="li" key={item.q} delay={index * 60}>
                <details
                  className="group rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition open:shadow-lg open:ring-accent/40"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 text-xl font-bold text-primary sm:px-8 [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-[#027776] transition group-open:rotate-45 group-open:bg-accent group-open:text-white motion-reduce:transition-none">
                      <Icon name="plus" className="h-6 w-6" strokeWidth={2.4} />
                    </span>
                  </summary>
                  <p className={`px-6 pb-7 text-lg leading-relaxed sm:px-8 ${muted}`}>{item.a}</p>
                </details>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
