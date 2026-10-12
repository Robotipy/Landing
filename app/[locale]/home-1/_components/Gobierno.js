import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { gobierno as g, primeraPublicada } from "../data";

// Solo prácticas con un proyecto entregado que las respalde. Sin sellos,
// candados ni certificaciones. "En preparación" aparece solo con responsable y fecha.
export default function Gobierno({ publicados }) {
  const lectura = primeraPublicada(g.lecturas, publicados);
  const preparacion = g.preparacion.lista;

  return (
    <Seccion id="gobierno" tono="band">
      <Encabezado id="gobierno" rotulo={g.rotulo} titulo={g.titulo} texto={g.texto} />

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
        <div className="min-w-0 lg:col-span-8">
          <h3 className="h1-caps">{g.hoy}</h3>
          <ul className="mt-4 border-t h1-ink-rule">
            {g.practicas.map((p) => (
              <li key={p.practica} className="border-b h1-rule py-5">
                <p className="h1-navy text-[16px] font-semibold leading-[24px]">{p.practica}</p>
                <p className="mt-1.5 text-[15px] leading-[24px]">
                  {p.respaldo}{" "}
                  <TLink
                    href={p.enlace.href}
                    {...(p.enlace.industria
                      ? { event: "home_caso_click", params: { industria: p.enlace.industria, ubicacion: "gobierno" } }
                      : {})}
                    className="h1-link-inline whitespace-nowrap"
                  >
                    {p.enlace.label}
                  </TLink>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[16px] leading-[26px]">{g.compromiso}</p>
        </div>

        {preparacion.length ? (
          <aside aria-labelledby="gobierno-preparacion" className="min-w-0 lg:col-span-4">
            <h3 id="gobierno-preparacion" className="h1-caps">
              {g.preparacion.titulo}
            </h3>
            <ul className="mt-4 border-t h1-ink-rule">
              {preparacion.map((i) => (
                <li key={i.texto} className="border-b h1-rule py-5">
                  <p className="text-[16px] font-semibold leading-[24px]">{i.texto}</p>
                  <p className="h1-muted mt-1.5 text-[14px] leading-[22px]">
                    {i.responsable}, {i.fecha}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </div>

      <p className="mt-10 flex flex-col gap-3 text-[15px] leading-[24px] sm:flex-row sm:flex-wrap sm:gap-x-8">
        {lectura ? (
          <span>
            <span className="h1-muted">Lectura: </span>
            <TLink href={lectura.href} className="h1-link-inline">
              {lectura.label}
            </TLink>
          </span>
        ) : null}
        <TLink href={g.faq.href} className="h1-link font-semibold">
          {g.faq.label}
        </TLink>
      </p>
    </Seccion>
  );
}
