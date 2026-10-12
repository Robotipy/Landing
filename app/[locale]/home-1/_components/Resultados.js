import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { resultados as r, visible } from "../data";

export default function Resultados({ publicados }) {
  const blog = r.blog.enlaces.filter((e) => visible(e.href, publicados));

  return (
    <Seccion id="resultados" tono="band">
      <Encabezado id="resultados" rotulo={r.rotulo} titulo={r.titulo} texto={r.texto} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {r.tarjetas.map((t) => (
          <li key={t.id} className="flex min-w-0 flex-col border h1-rule-strong bg-white p-6 md:p-7">
            <h3 className="h1-serif h1-navy">
              <span className="h1-num block text-[32px] font-semibold leading-[38px] tracking-[-0.01em] md:text-[36px] md:leading-[42px]">
                {t.valor}
              </span>
              {t.detalle ? <span className="mt-1 block text-[18px] leading-[26px]">{t.detalle}</span> : null}
            </h3>
            <p className="h1-caps h1-muted mt-5">{t.industria}</p>
            <p className="mt-2 text-[15px] leading-[24px]">{t.contexto}</p>
            <ul aria-label="Sistemas" className="mt-5 flex flex-wrap gap-1.5">
              {t.chips.map((c) => (
                <li key={c} className="h1-chip h1-mono">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-[15px] leading-6">
              <TLink
                href={t.href}
                event="home_caso_click"
                params={{ industria: t.slug, ubicacion: "resultados" }}
                className="h1-link font-semibold"
              >
                {t.enlace}
              </TLink>
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-16 border-t h1-ink-rule pt-8">
        <h3 className="h1-caps">{r.indice.titulo}</h3>
        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4 md:gap-x-8">
          {r.indice.lista.map((i) => (
            <li key={i.slug} className="min-w-0 text-[16px] leading-[24px]">
              <TLink
                href={i.href}
                event="home_caso_click"
                params={{ industria: i.slug, ubicacion: "indice" }}
                className="h1-link"
              >
                {i.label}
              </TLink>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[16px] leading-6">
          <TLink href={r.todos.href} className="h1-link font-semibold">
            {r.todos.label}
          </TLink>
        </p>
        {blog.length ? (
          <p className="h1-muted mt-4 text-[15px] leading-[24px]">
            {r.blog.antes}
            {blog.map((e, i) => (
              <span key={e.href}>
                {i > 0 ? (i === blog.length - 1 ? " y " : ", ") : null}
                <TLink href={e.href} className="h1-link-inline">
                  {e.label}
                </TLink>
              </span>
            ))}
            .
          </p>
        ) : null}
      </div>
    </Seccion>
  );
}
