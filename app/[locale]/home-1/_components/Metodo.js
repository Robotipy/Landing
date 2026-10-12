import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { metodo as m, primeraPublicada } from "../data";

// Única numeración del home: etapas 01 a 04. En escritorio es una tabla
// editorial con la línea de tiempo en el encabezado y un trazo que vuelve de
// 04 a 03; bajo 1024 px la línea pasa a vertical y el trazo va por la izquierda.

// Centro horizontal del número de etapa (padding de 16 px más medio número).
const CENTRO = "34px";

function Servicio({ s, ubicacion }) {
  return (
    <TLink
      href={s.href}
      {...(s.herramienta
        ? { event: "home_herramienta_click", params: { herramienta: s.herramienta, ubicacion } }
        : {})}
      className="h1-link font-medium"
    >
      {s.label}
    </TLink>
  );
}

function Dato({ etapa, campo }) {
  if (campo === "servicios") {
    return (
      <ul className="space-y-1.5">
        {etapa.servicios.map((s) => (
          <li key={s.href}>
            <Servicio s={s} ubicacion="metodo" />
          </li>
        ))}
      </ul>
    );
  }
  if (campo === "inversion") return <span className="h1-num h1-navy font-semibold">{etapa.inversion}</span>;
  return etapa[campo];
}

// Trazo de retorno de 04 a 03. Vive dentro del encabezado de la columna 04 y
// se extiende un ancho de columna hacia la izquierda, de centro a centro.
function Retorno({ leyenda }) {
  const box = { left: `calc(${CENTRO} - 100%)`, width: "100%" };
  return (
    <>
      <span
        className="h1-muted absolute top-0 flex h-[56px] items-end justify-center px-2 text-center text-[14px] font-normal normal-case leading-[20px] tracking-normal"
        style={box}
      >
        {leyenda}
      </span>
      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute top-[58px] h-[54px] overflow-visible"
        style={box}
        viewBox="0 0 100 54"
        preserveAspectRatio="none"
      >
        <path
          d="M100 54 C100 2, 0 2, 0 54"
          fill="none"
          stroke="var(--h1-accent)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute top-[105px] h-[8px] w-[12px] overflow-visible"
        style={{ left: `calc(${CENTRO} - 100% - 6px)` }}
        viewBox="0 0 12 8"
      >
        <path
          d="M1 1 L6 7 L11 1"
          fill="none"
          stroke="var(--h1-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

function Tabla() {
  const ultima = m.etapas.length - 1;
  return (
    <div className="mt-6 hidden lg:block">
      <table className="w-full table-fixed border-collapse text-left">
        <caption className="sr-only">
          Etapas del método con lo que recibes, el plazo, la inversión y los servicios de cada una
        </caption>
        <colgroup>
          <col className="w-[16%]" />
          {m.etapas.map((e) => (
            <col key={e.numero} className="w-[21%]" />
          ))}
        </colgroup>
        <thead>
          <tr>
            <td />
            {m.etapas.map((e, i) => (
              <th
                key={e.numero}
                scope="col"
                className="relative border-b-2 h1-ink-rule px-4 pb-5 pt-[120px] text-left align-bottom font-normal"
              >
                {i === ultima ? <Retorno leyenda={m.leyenda} /> : null}
                <span className="h1-serif h1-num h1-navy block text-[32px] font-semibold leading-none">{e.numero}</span>
                <span className="h1-caps h1-navy mt-3 block">{e.nombre}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {m.filas.map((f) => (
            <tr key={f.key} className="border-b h1-rule">
              <th scope="row" className="h1-caps h1-muted py-5 pr-4 text-left align-top">
                {f.label}
              </th>
              {m.etapas.map((e) => (
                <td key={e.numero} className="px-4 py-5 align-top text-[15px] leading-[24px]">
                  <Dato etapa={e} campo={f.key} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Vertical() {
  const tercera = 2;
  return (
    <div className="mt-12 lg:hidden">
      <ol className="pl-6">
        {m.etapas.map((e, i) => (
          <li key={e.numero} className="relative pb-10 pl-11 last:pb-0">
            {i < m.etapas.length - 1 ? (
              <span aria-hidden="true" className="absolute bottom-1 left-[13px] top-[40px] w-px bg-[color:var(--h1-navy)]" />
            ) : null}
            {i === tercera ? (
              <>
                <span
                  aria-hidden="true"
                  className="absolute -left-6 top-4 h-full w-4 rounded-l-[10px] border-[1.5px] border-r-0 border-[color:var(--h1-accent)]"
                />
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="absolute -left-[9px] top-[11px] h-[11px] w-[8px] overflow-visible"
                  viewBox="0 0 8 11"
                >
                  <path
                    d="M1 1 L6.5 5.5 L1 10"
                    fill="none"
                    stroke="var(--h1-accent)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            ) : null}
            <span aria-hidden="true" className="h1-serif h1-num h1-navy absolute left-0 top-0 text-[26px] font-semibold leading-[32px]">
              {e.numero}
            </span>
            <h3 className="h1-caps h1-navy pt-2">{e.nombre}</h3>
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {m.filas.map((f) => (
                <div key={f.key} className="min-w-0">
                  <dt className="h1-caps h1-muted">{f.label}</dt>
                  <dd className="mt-1 text-[15px] leading-[24px]">
                    <Dato etapa={e} campo={f.key} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ol>
      <p className="h1-muted mt-8 flex items-start gap-3 text-[14px] leading-[20px]">
        <span aria-hidden="true" className="mt-[9px] h-[1.5px] w-6 flex-none bg-[color:var(--h1-accent)]" />
        <span>{m.leyenda}</span>
      </p>
    </div>
  );
}

export default function Metodo({ publicados }) {
  const lectura = primeraPublicada(m.lecturas, publicados);
  const p = m.programa;

  return (
    <Seccion id="metodo">
      <Encabezado id="metodo" rotulo={m.rotulo} titulo={m.titulo} texto={m.texto} />
      <Tabla />
      <Vertical />

      <div className="mt-16 border-t h1-rule pt-10 md:mt-20 md:pt-12">
        <h3 className="h1-serif h1-navy text-[24px] font-semibold leading-[30px] md:text-[28px] md:leading-[34px]">
          {p.titulo}
        </h3>
        <p className="h1-muted mt-2 text-[16px] leading-[26px]">{p.texto}</p>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {p.columnas.map((col) => (
            <div key={col.titulo} className="min-w-0">
              <h4 className="h1-navy text-[17px] font-semibold leading-[24px]">{col.titulo}</h4>
              <ol className="mt-4 border-t h1-ink-rule">
                {col.items.map((it, i) => (
                  <li key={it.id} className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-2 border-b h1-rule py-4">
                    <span aria-hidden="true" className="h1-num h1-navy text-[16px] font-semibold leading-[24px]">
                      {i + 1}.
                    </span>
                    <div className="min-w-0">
                      <p className="h1-caps h1-muted">{it.industria}</p>
                      <TLink
                        href={it.href}
                        event="home_caso_click"
                        params={{ industria: it.slug, ubicacion: "metodo" }}
                        className="h1-link mt-1 inline-block text-[16px] font-semibold leading-[24px]"
                      >
                        {it.label}
                      </TLink>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-8">
          <TLink href={m.cta.href} event="home_cta_click" params={{ ubicacion: "metodo" }} className="h1-btn h1-btn-primary">
            {m.cta.label}
          </TLink>
          {lectura ? (
            <p className="text-[15px] leading-[24px]">
              <span className="h1-muted">Lectura: </span>
              <TLink href={lectura.href} className="h1-link-inline">
                {lectura.label}
              </TLink>
            </p>
          ) : null}
        </div>
      </div>
    </Seccion>
  );
}
