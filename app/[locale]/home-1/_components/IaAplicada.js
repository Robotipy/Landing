import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { iaAplicada as ia, visible } from "../data";

export default function IaAplicada({ publicados }) {
  const lecturas = ia.lecturas.filter((l) => visible(l.href, publicados));
  const columnas = ia.tarjetas.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <Seccion id="ia-aplicada">
      <Encabezado id="ia-aplicada" rotulo={ia.rotulo} titulo={ia.titulo} texto={ia.texto} />

      <ul className={`mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 ${columnas}`}>
        {ia.tarjetas.map((t) => (
          <li key={t.id} className="flex min-w-0 flex-col border h1-rule-strong bg-white p-6 md:p-7">
            <h3 className="h1-navy text-[17px] font-semibold leading-[24px]">{t.proceso}</h3>
            <p className="h1-caps h1-muted mt-2">{t.industria}</p>
            <p className="h1-serif h1-num h1-navy mt-5 text-[26px] font-semibold leading-[32px] md:text-[28px] md:leading-[34px]">
              {t.valor}
            </p>
            <p className="mt-3 text-[15px] leading-[24px]">{t.contexto}</p>
            <p className="mt-auto pt-6 text-[15px] leading-6">
              <TLink
                href={t.href}
                event="home_caso_click"
                params={{ industria: t.slug, ubicacion: "ia-aplicada" }}
                className="h1-link font-semibold"
              >
                {t.enlace}
              </TLink>
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-16 border-t h1-ink-rule pt-8">
        <h3 className="h1-caps">{ia.productos.titulo}</h3>
        <ul className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {ia.productos.lista.map((p) => (
            <li key={p.key} className="min-w-0">
              <p className="h1-navy text-[17px] font-semibold leading-[24px]">{p.nombre}</p>
              <p className="mt-2 text-[15px] leading-[24px]">{p.descripcion}</p>
              <ul className="mt-3 space-y-1.5 text-[15px] leading-6">
                {p.enlaces.map((e) => (
                  <li key={e.href}>
                    <TLink
                      href={e.href}
                      {...(e.herramienta
                        ? {
                            event: "home_herramienta_click",
                            params: { herramienta: e.herramienta, ubicacion: "productos" },
                          }
                        : {})}
                      className="h1-link font-semibold"
                    >
                      {e.label}
                    </TLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <p className="h1-muted mt-12 text-[14px] leading-[22px]">
        {ia.consultoras.antes}
        <TLink href={ia.consultoras.href} className="h1-link-inline">
          {ia.consultoras.label}
        </TLink>
        {ia.consultoras.despues}
      </p>

      {lecturas.length ? (
        <div className="mt-8">
          <p className="h1-caps h1-muted">Lecturas</p>
          <ul className="mt-3 space-y-2 text-[16px] leading-[26px]">
            {lecturas.map((l) => (
              <li key={l.href}>
                <TLink href={l.href} className="h1-link-inline">
                  {l.label}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Seccion>
  );
}
