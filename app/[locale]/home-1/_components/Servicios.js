import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { servicios as s, visible } from "../data";

// id="services" es obligatorio: el enlace Servicios del Header apunta a /#services.
// Desde 1024 px: tabla editorial semántica. Debajo, bloques apilados con etiqueta
// por dato (en tablet, en dos columnas): bajo 1024 px la columna Ver más no alcanza.

function Inversion({ fila, grande = false }) {
  const { valor, notas = [], aparte } = fila.inversion;
  return (
    <>
      {valor ? (
        <span
          className={
            grande
              ? "h1-serif h1-num h1-navy block text-[28px] font-semibold leading-[34px] tracking-[-0.01em]"
              : "h1-num h1-navy block text-[16px] font-semibold leading-[24px]"
          }
        >
          {valor}
        </span>
      ) : null}
      {notas.map((n) => (
        <span
          key={n}
          className={valor ? "h1-muted mt-1.5 block text-[14px] leading-[22px]" : "block text-[15px] leading-[24px]"}
        >
          {n}
        </span>
      ))}
      {aparte ? <span className="mt-3 block border-t h1-rule pt-3 text-[14px] leading-[22px]">{aparte}</span> : null}
    </>
  );
}

function Para({ fila, publicados }) {
  const enlace = fila.paraEnlace && visible(fila.paraEnlace.href, publicados) ? fila.paraEnlace : null;
  return (
    <>
      {fila.para}
      {enlace ? (
        <span className="mt-2 block text-[15px] leading-[24px]">
          <TLink href={enlace.href} className="h1-link-inline">
            {enlace.label}
          </TLink>
        </span>
      ) : null}
    </>
  );
}

function Acciones({ fila, cotizar }) {
  return (
    <>
      <TLink href={fila.verMas.href} className="h1-link text-[15px] font-semibold leading-[22px]">
        {fila.verMas.label}
      </TLink>
      <TLink
        href={fila.cotizarHref}
        event="home_cta_click"
        params={{ ubicacion: fila.ubicacion, servicio: fila.servicio }}
        className="h1-textbtn text-[15px]"
      >
        {cotizar}
        <span className="sr-only">: {fila.nombre}</span>
      </TLink>
    </>
  );
}

export default function Servicios({ publicados }) {
  const pieVisible = visible(s.pie.href, publicados);

  return (
    <Seccion id="services" tono="band">
      <Encabezado id="services" rotulo={s.rotulo} titulo={s.titulo} texto={s.texto} />

      <div className="mt-12 hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[660px] table-fixed border-collapse text-left">
          <caption className="sr-only">Servicios de Robotipy con su precio de referencia</caption>
          <colgroup>
            <col className="w-[24%]" />
            <col className="w-[33%]" />
            <col className="w-[25%]" />
            <col className="w-[18%]" />
          </colgroup>
          <thead>
            <tr className="border-b h1-ink-rule">
              {s.columnas.map((c) => (
                <th key={c} scope="col" className="h1-caps h1-muted px-5 pb-3 text-left align-bottom">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.filas.map((f) => {
              const pad = f.destacada ? "py-10" : "py-6";
              return (
                <tr key={f.key} className={`border-b h1-rule align-top ${f.destacada ? "bg-white" : ""}`}>
                  <th scope="row" className={`px-5 ${pad} text-left font-normal`}>
                    <span
                      className={
                        f.destacada
                          ? "h1-serif h1-navy block text-[24px] font-semibold leading-[30px]"
                          : "h1-navy block text-[16px] font-semibold leading-[24px]"
                      }
                    >
                      {f.nombre}
                    </span>
                  </th>
                  <td className={`px-5 ${pad} text-[16px] leading-[26px]`}>
                    <Para fila={f} publicados={publicados} />
                  </td>
                  <td className={`px-5 ${pad}`}>
                    <Inversion fila={f} grande={f.destacada} />
                  </td>
                  <td className={`px-5 ${pad}`}>
                    <div className="flex flex-col items-start gap-2">
                      <Acciones fila={f} cotizar={s.cotizar} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ul className="mt-10 border-t h1-ink-rule lg:hidden">
        {s.filas.map((f) => (
          <li key={f.key} className={`border-b h1-rule ${f.destacada ? "-mx-4 bg-white px-4 py-8 md:-mx-8 md:px-8" : "py-7"}`}>
            <h3
              className={
                f.destacada
                  ? "h1-serif h1-navy text-[24px] font-semibold leading-[30px]"
                  : "h1-navy text-[17px] font-semibold leading-[24px]"
              }
            >
              {f.nombre}
            </h3>
            <dl className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-x-10">
              <div>
                <dt className="h1-caps h1-muted">{s.columnas[1]}</dt>
                <dd className="mt-1.5 text-[16px] leading-[26px]">
                  <Para fila={f} publicados={publicados} />
                </dd>
              </div>
              <div>
                <dt className="h1-caps h1-muted">{s.columnas[2]}</dt>
                <dd className="mt-1.5">
                  <Inversion fila={f} grande={f.destacada} />
                </dd>
              </div>
            </dl>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1">
              <Acciones fila={f} cotizar={s.cotizar} />
            </div>
          </li>
        ))}
      </ul>

      {pieVisible ? (
        <p className="mt-8 text-[15px] leading-[24px] md:text-[16px]">
          {s.pie.antes}
          <TLink href={s.pie.href} className="h1-link-inline">
            {s.pie.label}
          </TLink>
          {s.pie.despues}
        </p>
      ) : null}
    </Seccion>
  );
}
