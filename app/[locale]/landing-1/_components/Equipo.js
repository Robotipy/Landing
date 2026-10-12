import Image from "next/image";
import Capitulo from "./Capitulo";
import { TrackedLink } from "./tracking";
import { equipo as e } from "../data";
import daniloToroImg from "@/app/[locale]/blog/_assets/images/authors/danilo-toro.png";
import ivanCabreraImg from "@/app/[locale]/blog/_assets/images/authors/ivan-cabrera.png";
import gabrielToroImg from "@/app/[locale]/blog/_assets/images/authors/gabriel-toro.jpeg";

const FOTOS = { danilo: daniloToroImg, ivan: ivanCabreraImg, gabriel: gabrielToroImg };

export default function Equipo() {
  return (
    <Capitulo id="equipo" numero={e.numero} rotulo={e.rotulo} titulo={e.titulo} texto={e.texto}>
      <ul className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-10">
        {e.personas.map((p) => (
          <li key={p.key} className="flex flex-col">
            <Image
              src={FOTOS[p.key]}
              alt={`Fotografía de ${p.nombre}`}
              width={112}
              height={112}
              sizes="112px"
              className="h-28 w-28 rounded bg-[#E4E6E5] object-cover contrast-[1.05] grayscale"
            />
            <h3 className="lp1-serif mt-5 text-[22px] font-semibold leading-7">{p.nombre}</h3>
            <p className="lp1-muted mt-1 text-[14px] leading-5">{p.cargo}</p>
            <p className="mt-3 text-[16px] leading-[26px]">{p.bio}</p>
            {p.linkedin ? (
              <p className="mt-3 text-[15px] leading-6">
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="lp1-link">
                  LinkedIn<span className="sr-only"> de {p.nombre}</span>
                </a>
              </p>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="mt-12 text-[16px] leading-[26px]">
        <TrackedLink href="/about" destination="about" localized className="lp1-link">
          {e.enlace}
        </TrackedLink>
      </p>
    </Capitulo>
  );
}
