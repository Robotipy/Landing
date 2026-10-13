import Image from "next/image";
import { Link } from "@/i18n/routing";
import { routes } from "@/libs/landingFacts";
import { getCaseCards } from "../data";
import CaseCarousel from "./CaseCarousel";
import Icon from "./icons";
import Reveal from "./Reveal";
import { btnOutlineDark, container, SectionHeading } from "./ui";

function CaseCard({ item }) {
  return (
    <li className="w-[86%] shrink-0 snap-start sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b2a44] text-white transition duration-300 hover:-translate-y-1 hover:border-[#4fd1d0]/50 motion-reduce:transform-none">
        <div className="relative aspect-[2/1] overflow-hidden bg-[#123a5a]">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 86vw"
            className={`object-cover ${item.position} transition duration-700 group-hover:scale-105 motion-reduce:transform-none`}
          />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-base font-semibold text-white/65">{item.industry}</p>
          <p className="mt-3 text-5xl font-extrabold leading-none tracking-tight text-[#4fd1d0] sm:text-6xl">
            {item.figure}
          </p>
          <p className="mt-2 text-lg font-bold">{item.label}</p>
          <h3 className="mt-4 text-lg font-semibold text-white/85">{item.name}</h3>
          {item.detail && <p className="mt-1 text-lg text-white/65">{item.detail}</p>}
          <Link
            href={item.href}
            className="mt-auto inline-flex items-center gap-2 pt-6 text-lg font-bold text-[#4fd1d0] underline-offset-4 hover:underline"
            aria-label={`Ver el caso ${item.name} (${item.industry})`}
          >
            Ver el caso
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </article>
    </li>
  );
}

export default function Casos() {
  const cards = getCaseCards();
  return (
    <section aria-labelledby="h2-casos-title" className="relative overflow-hidden bg-[#00182B] py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(45% 55% at 0% 0%, rgba(3,150,149,0.20), transparent 70%)",
        }}
      />
      <div className={`${container} relative`}>
        <Reveal>
          <SectionHeading
            id="h2-casos-title"
            title="Resultados en empresas de muchas industrias"
            lead="Hotelería, rent-a-car, minería, alimentos, seguros y atención al cliente, entre otras."
            dark
            align="left"
          />
        </Reveal>
        <Reveal delay={100} className="mt-4">
          <CaseCarousel label="Casos de clientes de Robotipy">
            {cards.map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </CaseCarousel>
        </Reveal>
        <div className="mt-6">
          <Link href={routes.cases} className={btnOutlineDark}>
            Ver todos los casos
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
