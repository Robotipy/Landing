import Image from "next/image";
import { Contenedor, Rotulo } from "./Capitulo";
import { credenciales, SHOW_CLIENT_LOGOS } from "../data";

// Ficha de hechos en variante "informe". Los valores salen de libs/landingFacts.js.
export default function FactSheet() {
  const c = credenciales;
  return (
    <section
      id="credenciales"
      aria-labelledby="credenciales-titulo"
      className="scroll-mt-20 border-t lp1-rule py-14 md:py-20"
    >
      <Contenedor>
        <Rotulo numero={c.numero}>{c.rotulo}</Rotulo>
        <h2
          id="credenciales-titulo"
          className="lp1-serif mt-5 text-[28px] font-semibold leading-[34px] md:text-[36px] md:leading-[44px]"
        >
          {c.titulo}
        </h2>

        <dl className="mt-10 grid grid-cols-2 gap-y-10 md:mt-14 lg:grid-cols-4">
          {c.cifras.map((f) => (
            <div key={f.etiqueta} className="flex flex-col border-l lp1-rule pl-4 pr-2 md:pl-6">
              <dt className="order-2 mt-2 text-[15px] leading-6 lp1-muted">{f.etiqueta}</dt>
              <dd className="lp1-serif lp1-num order-1 text-[30px] font-semibold leading-none sm:text-[40px] lg:text-[44px] xl:text-[52px]">
                {f.valor}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 max-w-[720px] space-y-4 md:mt-16">
          <p className="text-[17px] leading-[28px] md:text-[18px] md:leading-[30px]">{c.texto}</p>
          <p className="lp1-muted text-[15px] leading-6">{c.plataformas}</p>
        </div>

        {SHOW_CLIENT_LOGOS ? (
          <ul className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6" aria-label="Algunos clientes">
            {c.logos.map((logo) => (
              <li key={logo.src}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={28}
                  className="h-7 w-auto opacity-50 brightness-0"
                />
              </li>
            ))}
          </ul>
        ) : null}
      </Contenedor>
    </section>
  );
}
