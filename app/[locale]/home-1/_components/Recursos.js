import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { recursos as r } from "../data";

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

// "2026-10-11" pasa a "11 oct 2026", sin depender del ICU del servidor.
const fecha = (iso) => {
  const [y, m, d] = String(iso).split("-").map(Number);
  return y && m && d ? `${d} ${MESES[m - 1]} ${y}` : iso;
};

export default function Recursos({ ultimos }) {
  return (
    <Seccion id="recursos" tono="band">
      <Encabezado id="recursos" rotulo={r.rotulo} titulo={r.titulo} />

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-x-12">
        <div className="min-w-0">
          <h3 className="h1-caps">{r.herramientas.titulo}</h3>
          <ul className="mt-4 border-t h1-ink-rule">
            {r.herramientas.lista.map((h) => (
              <li key={h.href} className="border-b h1-rule py-5">
                <p className="h1-navy text-[17px] font-semibold leading-[24px]">{h.label}</p>
                <p className="mt-1.5 text-[15px] leading-[24px]">{h.texto}</p>
                <p className="mt-2 text-[15px] leading-6">
                  <TLink
                    href={h.href}
                    event="home_herramienta_click"
                    params={{ herramienta: h.id, ubicacion: "recursos" }}
                    className="h1-link font-semibold"
                  >
                    {h.cta}
                  </TLink>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <h3 className="h1-caps">{r.blog.titulo}</h3>
          <ul className="mt-4 border-t h1-ink-rule">
            {ultimos.map((a) => (
              <li key={a.slug} className="border-b h1-rule py-5">
                <time dateTime={a.publishedAt} className="h1-mono h1-num h1-muted block text-[13px] leading-[20px]">
                  {fecha(a.publishedAt)}
                </time>
                <p className="mt-1.5">
                  <TLink
                    href={`/blog/${a.slug}`}
                    className="h1-serif h1-title-link text-[20px] font-semibold leading-[28px]"
                  >
                    {a.title}
                  </TLink>
                </p>
                {a.autor ? <p className="h1-muted mt-1.5 text-[14px] leading-[20px]">{a.autor}</p> : null}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex flex-col gap-3 text-[15px] leading-6 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <TLink href={r.blog.todo.href} className="h1-link font-semibold">
              {r.blog.todo.label}
            </TLink>
            <TLink href={r.blog.newsletter.href} className="h1-link font-semibold">
              {r.blog.newsletter.label}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </TLink>
          </p>
        </div>
      </div>
    </Seccion>
  );
}
