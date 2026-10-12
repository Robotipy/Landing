import Image from "next/image";
import { Link } from "@/i18n/routing";
import { facts, routes } from "@/libs/landingFacts";
import daniloToroImg from "@/app/[locale]/blog/_assets/images/authors/danilo-toro.png";
import ivanCabreraImg from "@/app/[locale]/blog/_assets/images/authors/ivan-cabrera.png";
import gabrielToroImg from "@/app/[locale]/blog/_assets/images/authors/gabriel-toro.jpeg";
import { container, line, SectionHeader, textMuted } from "./ui";

// Mismas fotos y cargos que /about (messages/es.json, about.team.members).
const team = [
  {
    name: "Danilo Toro",
    role: "Fundador",
    text: `Fundó Robotipy en ${facts.founded} después de seis años como desarrollador en Rocketbot.`,
    image: daniloToroImg,
    linkedin: "https://www.linkedin.com/in/danilotorol/",
  },
  {
    name: "Ivan Cabrera",
    role: "CEO de Robotipy Argentina",
    text: "Acompaña a empresas medianas y grandes a automatizar procesos sobre SAP y otros sistemas.",
    image: ivanCabreraImg,
  },
  {
    name: "Gabriel Toro",
    role: "Equipo Robotipy",
    text: "Especializado en automatización de procesos y soluciones RPA para empresas en Chile, Argentina, Colombia y España.",
    image: gabrielToroImg,
  },
];

export default function Team() {
  return (
    <section
      id="equipo"
      aria-labelledby="equipo-titulo"
      className="scroll-mt-16 bg-white py-16 text-[#0A2540] md:py-24"
    >
      <div className={container}>
        <SectionHeader
          titleId="equipo-titulo"
          eyebrow="Equipo"
          title="Las personas detrás de cada cotización"
          body={`Equipo en ${facts.team}.`}
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {team.map((member) => (
            <li key={member.name} className={`rounded-xl border ${line} p-6`}>
              <Image
                src={member.image}
                alt={`Foto de ${member.name}`}
                width={96}
                height={96}
                sizes="96px"
                className="h-24 w-24 rounded-full bg-[#F4F7F9] object-cover"
              />
              <p className="mt-5 text-lg font-bold">{member.name}</p>
              <p className={`text-[15px] ${textMuted}`}>{member.role}</p>
              <p className="mt-3 text-[15px] leading-6">{member.text}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}, se abre en una pestaña nueva`}
                  className="mt-4 inline-block text-[15px] font-bold underline decoration-accent decoration-2 underline-offset-4 hover:decoration-[#0A2540]"
                >
                  LinkedIn
                </a>
              )}
            </li>
          ))}
        </ul>

        <Link
          href={routes.about}
          className="mt-10 inline-block text-[15px] font-bold underline decoration-accent decoration-2 underline-offset-4 hover:decoration-[#0A2540]"
        >
          Conoce más sobre Robotipy
        </Link>
      </div>
    </section>
  );
}
