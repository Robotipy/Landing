import { Contenedor } from "./ui";
import { TLink } from "./track";
import { agenda as a } from "../data";

// Banda oscura de cierre: empalma con el Footer real (el body ya es #00182B).
export default function Agenda() {
  return (
    <section id="agenda" aria-labelledby="agenda-titulo" className="h1-dark scroll-mt-28 bg-[#00182B] py-16 text-white md:py-24">
      <Contenedor>
        <div className="max-w-[760px]">
          <p className="h1-caps text-white/70">{a.rotulo}</p>
          <h2
            id="agenda-titulo"
            className="h1-serif mt-4 text-[32px] font-semibold leading-[38px] tracking-[-0.01em] md:text-[40px] md:leading-[46px]"
          >
            {a.titulo}
          </h2>
          <p className="mt-4 text-[17px] leading-[28px] text-white/85 md:text-[18px] md:leading-[30px]">{a.texto}</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {a.pasos.map((paso, i) => (
            <li key={paso} className="min-w-0 border-t border-white/20 pt-5">
              <span aria-hidden="true" className="h1-serif h1-num block text-[28px] font-semibold leading-none">
                {i + 1}
              </span>
              <p className="mt-3 text-[16px] leading-[26px] text-white/85">{paso}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <TLink href={a.cta.href} event="home_cta_click" params={{ ubicacion: "agenda" }} className="h1-btn h1-btn-light">
            {a.cta.label}
          </TLink>
        </div>

        <div className="mt-8 space-y-2 text-[16px] leading-[26px] text-white/85">
          {a.lineas.map((l) => (
            <p key={l.href}>
              {l.antes}
              <TLink
                href={l.href}
                {...(l.herramienta
                  ? { event: "home_herramienta_click", params: { herramienta: l.herramienta, ubicacion: "agenda" } }
                  : {})}
                className="h1-link-light"
              >
                {l.label}
              </TLink>
              .
            </p>
          ))}
        </div>
      </Contenedor>
    </section>
  );
}
