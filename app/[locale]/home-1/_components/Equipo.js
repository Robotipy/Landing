import Image from "next/image";
import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { equipo as e } from "../data";

// Fotos reales de public/landing-team con el mismo recorte 4:5 y en escala de grises.
export default function Equipo() {
  return (
    <Seccion id="equipo">
      <Encabezado id="equipo" rotulo={e.rotulo} titulo={e.titulo} />
      <ul className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {e.personas.map((p) => (
          <li key={p.name} className="grid min-w-0 grid-cols-[104px_minmax(0,1fr)] items-start gap-x-5 md:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden border h1-rule-strong bg-[color:var(--h1-band)] md:max-w-[280px]">
              <Image
                src={p.image}
                alt={`Fotografía de ${p.name}`}
                fill
                sizes="(min-width: 768px) 280px, 104px"
                className="object-cover object-[50%_20%] grayscale"
              />
            </div>
            <div className="min-w-0 md:mt-5">
              <h3 className="h1-serif h1-navy text-[22px] font-semibold leading-[28px]">{p.name}</h3>
              <p className="h1-caps h1-muted mt-1.5">{p.role}</p>
              <p className="mt-3 text-[15px] leading-[24px]">{p.bio}</p>
              {p.autor ? (
                <p className="mt-3 text-[15px] leading-6">
                  <TLink href={`/blog/author/${p.autor}`} className="h1-link font-semibold">
                    Sus artículos<span className="sr-only">, de {p.name}</span>
                  </TLink>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-[16px] leading-6">
        <TLink href={e.enlace.href} className="h1-link font-semibold">
          {e.enlace.label}
        </TLink>
      </p>
    </Seccion>
  );
}
