import Image from "next/image";
import { Link } from "@/i18n/routing";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { agendaHref, container, grayBg, linkLight, muted, SectionHeading } from "./ui";

const SERVICES = [
  {
    key: "chatbot",
    icon: "chat",
    title: "Asistentes de IA y chatbots",
    text: "Atienden a tus clientes por WhatsApp, la web o el correo, a cualquier hora. Si la consulta necesita a una persona, la derivan a tu equipo.",
    image: { src: "/assets/ilus-chatbot.png", w: 438, h: 510 },
    href: agendaHref("chatbot"),
    cta: "Conversemos sobre tu atención",
    wide: true,
  },
  {
    key: "automatizacion",
    icon: "bot",
    title: "Robots para las tareas repetitivas",
    text: "Son robots de software (lo que se conoce como RPA) que copian y cargan datos en los sistemas que ya usas. Somos Platinum Partner de Rocketbot.",
    image: { src: "/assets/ilus-automation.png", w: 696, h: 459 },
    href: agendaHref("automatizacion"),
    cta: "Conversemos sobre tus procesos",
    wide: true,
  },
  {
    key: "software",
    icon: "code",
    title: "Software a medida",
    text: "Aplicaciones web y paneles con IA hechos para tu forma de trabajar. Por ejemplo, una plataforma que proyecta ventas y responde preguntas por chat.",
    image: { src: "/assets/ilus-coding.png", w: 545, h: 485 },
    href: agendaHref("software"),
    cta: "Conversemos sobre tu idea",
  },
  {
    key: "productos",
    icon: "box",
    title: "Productos propios",
    text: "YOAO convierte video en conteos y alertas, y Robotipy Monitor vigila tus robots en producción. Míralos funcionando más abajo.",
    image: { src: "/assets/pc-robotipy.png", w: 744, h: 488 },
    href: "#productos",
    cta: "Ver los productos",
    anchor: true,
  },
  {
    key: "capacitacion",
    icon: "school",
    title: "Capacitación para tu equipo",
    text: "Talleres prácticos de automatización e IA con ejemplos de tu propia empresa. Tu equipo aprende a detectar qué mejorar y por dónde partir.",
    image: { src: "/assets/ilus-learning.png", w: 657, h: 419 },
    href: agendaHref("capacitacion"),
    cta: "Conversemos sobre capacitación",
    full: true,
  },
];

function ServiceCard({ service }) {
  const LinkTag = service.anchor ? "a" : Link;
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transform-none"
    >
      <div
        className={`relative flex items-center justify-center bg-[#EAF5F5] p-6 ${
          service.wide ? "h-56 lg:h-64" : "h-56"
        }`}
      >
        <Image
          src={service.image.src}
          alt=""
          width={service.image.w}
          height={service.image.h}
          sizes="(min-width: 1024px) 22vw, 80vw"
          className="h-full max-h-48 w-auto object-contain transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-2xl font-bold leading-tight text-primary">{service.title}</h3>
        <p className={`mt-3 text-lg leading-relaxed ${muted}`}>{service.text}</p>
        <div className="mt-auto pt-6">
          <LinkTag href={service.href} className={linkLight}>
            {service.cta}
            <Icon name="right" className="h-5 w-5 transition group-hover:translate-x-1 motion-reduce:transform-none" />
          </LinkTag>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="que-hacemos" aria-labelledby="que-hacemos-titulo" className={`scroll-mt-24 ${grayBg} py-20 md:py-28`}>
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="que-hacemos-titulo"
            eyebrow="Lo que hacemos"
            title="Tecnología que le ahorra trabajo a tu equipo"
            lead="Elige por dónde quieres partir. Si no lo tienes claro, lo vemos juntos en la primera conversación."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, index) => (
            <Reveal
              as="li"
              key={service.key}
              delay={(index % 3) * 90}
              className={service.wide ? "lg:col-span-3" : service.full ? "md:col-span-2 lg:col-span-2" : "lg:col-span-2"}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
