import Image from "next/image";
import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { respaldo as r, visible } from "../data";

export default function Respaldo({ publicados }) {
  const mostrarLogos = r.logos.lista.length >= r.logos.minimo;
  const enlaces = r.enlaces.filter((e) => visible(e.href, publicados));

  return (
    <Seccion id="respaldo" tono="band">
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="min-w-0 lg:col-span-5">
          <Encabezado id="respaldo" rotulo={r.rotulo} titulo={r.titulo} />
          <p className="mt-5 text-[17px] leading-[28px] md:text-[18px] md:leading-[30px]">
            {r.texto} {r.partner.antes}
            <TLink href={r.partner.href} className="h1-link-inline">
              {r.partner.label}
            </TLink>
            {r.partner.despues}
          </p>
        </div>

        <div className="min-w-0 lg:col-span-7 lg:pt-9">
          <div className="border-t h1-ink-rule pt-5">
            <h3 className="h1-caps">{r.plataformas.titulo}</h3>
            <p className="mt-3 text-[17px] leading-[28px]">{r.plataformas.texto}</p>
          </div>
          <div className="mt-8 border-t h1-ink-rule pt-5">
            <h3 className="h1-caps">{r.sistemas.titulo}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {r.sistemas.lista.map((s) => (
                <li key={s} className="h1-chip h1-mono">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {mostrarLogos ? (
        <div className="mt-14 border-t h1-rule pt-8">
          <p id="respaldo-logos" className="h1-caps h1-muted">
            {r.logos.titulo}
          </p>
          <ul
            aria-labelledby="respaldo-logos"
            className="mt-6 grid grid-cols-3 items-center gap-x-6 gap-y-8 md:grid-cols-4 lg:grid-cols-6"
          >
            {r.logos.lista.map((logo) => (
              <li key={logo.src} className="flex min-w-0 items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={28}
                  className="h-7 w-auto max-w-full object-contain object-left opacity-60 brightness-0"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {enlaces.length ? (
        <p className="mt-12 flex flex-col gap-3 text-[16px] leading-6 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {enlaces.map((e) => (
            <TLink key={e.href} href={e.href} className="h1-link font-semibold">
              {e.label}
            </TLink>
          ))}
        </p>
      ) : null}
    </Seccion>
  );
}
