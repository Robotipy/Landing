import { Contenedor } from "./ui";
import { TLink } from "./track";
import { portada as p } from "../data";

export default function Portada() {
  return (
    <section id="portada" aria-labelledby="portada-titulo" className="h1-paper scroll-mt-28">
      <Contenedor className="pt-12 md:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="min-w-0 lg:col-span-7">
            <p className="h1-caps h1-muted">{p.rotulo}</p>
            <h1
              id="portada-titulo"
              className="h1-serif h1-navy mt-5 text-[36px] font-semibold leading-[42px] tracking-[-0.015em] md:text-[48px] md:leading-[54px] xl:text-[56px] xl:leading-[62px]"
            >
              {p.titulo}
            </h1>
            <p className="mt-6 max-w-[640px] text-[18px] leading-[30px] md:text-[20px] md:leading-[32px]">{p.bajada}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <TLink
                href={p.ctaPrincipal.href}
                event="home_cta_click"
                params={{ ubicacion: "portada" }}
                className="h1-btn h1-btn-primary"
              >
                {p.ctaPrincipal.label}
              </TLink>
              <TLink
                href={p.ctaSecundario.href}
                event="home_herramienta_click"
                params={{ herramienta: "evaluador", ubicacion: "portada" }}
                className="h1-btn h1-btn-secondary"
              >
                {p.ctaSecundario.label}
              </TLink>
            </div>
            <p className="h1-muted mt-4 max-w-[560px] text-[14px] leading-[22px]">{p.nota}</p>
          </div>

          {p.caso ? (
            <aside aria-labelledby="portada-caso" className="min-w-0 lg:col-span-5 lg:self-end">
              <div className="h1-band border h1-rule-strong p-6 md:p-8">
                <p id="portada-caso" className="h1-caps h1-muted">
                  {p.caso.rotulo}
                </p>
                <p className="h1-serif h1-num h1-navy mt-4 text-[40px] font-semibold leading-[46px] tracking-[-0.01em] md:text-[44px] md:leading-[50px] xl:text-[48px] xl:leading-[54px]">
                  <span className="block">{p.caso.desde}</span>
                  <span className="block">
                    {p.caso.hasta} <span className="whitespace-nowrap">{p.caso.periodo}</span>
                  </span>
                </p>
                <p className="mt-5 text-[16px] leading-[26px]">{p.caso.contexto}</p>
                <p className="mt-5 text-[15px] leading-6">
                  <TLink
                    href={p.caso.href}
                    event="home_caso_click"
                    params={{ industria: p.caso.industria, ubicacion: "portada" }}
                    className="h1-link font-semibold"
                  >
                    {p.caso.enlace}
                  </TLink>
                </p>
              </div>
            </aside>
          ) : null}
        </div>

        <ul
          aria-label="Robotipy en cifras"
          className="mt-14 grid grid-cols-2 gap-x-6 border-t h1-rule md:mt-20 lg:grid-cols-4 lg:gap-x-8 [&>li:nth-child(n+3)]:border-t lg:[&>li:nth-child(n+3)]:border-t-0"
        >
          {p.celdas.map((c) => (
            <li key={c.etiqueta} className="min-w-0 h1-rule">
              <TLink href={c.href} className="group block py-6 md:py-8">
                <span className="h1-serif h1-num h1-navy block text-[26px] font-semibold leading-[32px] md:text-[32px] md:leading-[38px]">
                  {c.valor}
                </span>
                <span className="h1-muted mt-2 block text-[14px] leading-[20px] underline decoration-transparent underline-offset-[3px] transition-colors group-hover:decoration-current">
                  {c.etiqueta}
                </span>
              </TLink>
            </li>
          ))}
        </ul>
      </Contenedor>
    </section>
  );
}
