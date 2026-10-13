import Image from "next/image";
import { Link } from "@/i18n/routing";
import { routes } from "@/libs/landingFacts";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { btnGhostLight, container, muted, SectionHeading } from "./ui";

const INDUSTRIES = [
  {
    name: "Telecomunicaciones",
    example: "Atención con IA por WhatsApp",
    image: "/assets/banners/telecomunicaciones.jpg",
    position: "0% 50%",
    href: "/casos-exito/telecomunicaciones",
  },
  {
    name: "Hotelería",
    example: "Informes de ocupación automáticos",
    image: "/assets/banners/hoteleria.jpg",
    position: "6% 50%",
    href: "/casos-exito/hoteleria",
  },
  {
    name: "Rent-a-car y automotriz",
    example: "Disponibilidad y órdenes al día",
    image: "/assets/banners/automotriz.jpeg",
    position: "50% 50%",
    href: "/casos-exito/automotriz",
  },
  {
    name: "Agro y alimentos",
    example: "Ofertas técnicas y facturas sin digitar",
    image: "/assets/banners/agricola.jpeg",
    position: "50% 50%",
    href: "/casos-exito/agricola",
  },
  {
    name: "Municipios",
    example: "Conteo de vehículos y personas con video",
    image: "/images/servicios/ServiciosPublicos.jpeg",
    position: "40% 50%",
    href: "/casos-exito/sector-publico",
  },
  {
    name: "Minería",
    example: "Software para simular procesos",
    image: "/assets/banners/mineria.jpg",
    position: "10% 50%",
    href: "/casos-exito/mineria",
  },
];

export default function Industries() {
  return (
    <section id="industrias" aria-labelledby="industrias-titulo" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="industrias-titulo"
            eyebrow="Industrias"
            title="Acompañamos empresas de muchas industrias"
            lead="Cada industria tiene tareas que se pueden simplificar. Estas son algunas en las que ya trabajamos."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal as="li" key={industry.name} delay={(index % 3) * 90}>
              <Link
                href={industry.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[28px] bg-primary shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 motion-reduce:transform-none"
              >
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
                  style={{ objectPosition: industry.position }}
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <span>
                    <span className="block text-2xl font-bold text-white">{industry.name}</span>
                    <span className="mt-1 block text-lg text-white/85">{industry.example}</span>
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-primary transition group-hover:bg-accent group-hover:text-white">
                    <Icon name="right" className="h-5 w-5" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-col items-start gap-5 rounded-[28px] bg-[#F4F6F7] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <p className={`text-lg leading-relaxed md:text-xl ${muted}`}>
            También trabajamos con retail, seguros, logística, salud y servicios profesionales.
          </p>
          <Link href={routes.cases} className={`${btnGhostLight} shrink-0`}>
            Ver todos los casos
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
