import Capitulo from "./Capitulo";
import { TrackedAnchor, TrackedLink } from "./tracking";
import { metodo as m } from "../data";

function FlechaRetornoIcono() {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden="true" className="mt-1 flex-none">
      <path d="M33 4 C33 30 8 30 8 7" stroke="#039695" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 11 L8 4.5 L12.5 11" stroke="#039695" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Arco de Gobernar (columna 4) de vuelta a Escalar (columna 3). Los centros de
// columna quedan en x=120 y x=392 con columnas de 240 px y separación de 32 px.
function FlechaRetorno() {
  return (
    <svg viewBox="0 0 512 76" className="block h-auto w-full" fill="none" aria-hidden="true">
      <defs>
        <marker
          id="lp1-punta-retorno"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#039695" />
        </marker>
      </defs>
      <path
        d="M392 4 C392 72 120 72 120 10"
        stroke="#039695"
        strokeWidth="1.5"
        markerEnd="url(#lp1-punta-retorno)"
      />
    </svg>
  );
}

export default function CicloCaptura({ publicados }) {
  const ultima = m.etapas.length - 1;
  return (
    <Capitulo id="metodo" numero={m.numero} rotulo={m.rotulo} titulo={m.titulo} texto={m.texto}>
      <ol className="mt-12 md:mt-16 lg:grid lg:grid-cols-4 lg:gap-x-8">
        {m.etapas.map((etapa, i) => (
          <li key={etapa.n} className="relative flex flex-col pb-12 pl-16 lg:row-span-7 lg:grid lg:grid-rows-subgrid lg:pb-0 lg:pl-0">
            {i < ultima ? (
              <>
                <span aria-hidden="true" className="absolute bottom-0 left-[21px] top-11 w-[1.5px] bg-[#039695] lg:hidden" />
                <span
                  aria-hidden="true"
                  className="absolute left-11 right-[-32px] top-[21px] hidden h-[1.5px] bg-[#039695] lg:block"
                />
              </>
            ) : null}
            <span
              aria-hidden="true"
              className="lp1-serif lp1-accent lp1-num absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#039695] bg-[#F7F7F5] text-[19px] font-bold lg:static"
            >
              {etapa.n}
            </span>
            <h3 className="lp1-serif pt-[6px] text-[26px] font-semibold leading-[32px] lg:mt-5 lg:pt-0">
              <span className="sr-only">Etapa {etapa.n}: </span>
              {etapa.nombre}
            </h3>
            <p className="mt-2 text-[16px] font-semibold leading-6">{etapa.oferta}</p>
            <p className="lp1-muted mt-1 text-[15px] leading-6">{etapa.plazo}</p>

            <p className="lp1-eyebrow mt-6">Qué recibe tu gerencia</p>
            <ul className="mt-3 space-y-3">
              {etapa.entregables.map((e) => (
                <li key={e} className="flex gap-3 text-[16px] leading-[25px]">
                  <span aria-hidden="true" className="lp1-square mt-[10px]" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t lp1-rule pt-4">
              <p className="text-[14px] font-semibold leading-5">Inversión</p>
              <p className="mt-1 text-[15px] leading-6">{etapa.inversion}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="col-span-2 col-start-3 pt-3">
          <FlechaRetorno />
          <p className="mx-auto -mt-1 max-w-[340px] text-center text-[14px] leading-[22px]">{m.retorno}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 border lp1-rule bg-white p-5 lg:hidden">
        <FlechaRetornoIcono />
        <p className="text-[15px] leading-6">{m.retorno}</p>
      </div>

      <div className="mt-12 max-w-[720px] space-y-5 md:mt-14">
        <p className="text-[17px] leading-[28px] md:text-[18px] md:leading-[30px]">{m.cierre}</p>
        <p className="lp1-muted text-[16px] leading-[26px]">{m.nota}</p>
        {publicados.has(m.lectura.slug) ? (
          <p className="text-[16px] leading-[26px]">
            <TrackedLink href={`/blog/${m.lectura.slug}`} destination={m.lectura.slug} className="lp1-link">
              {m.lectura.texto}
            </TrackedLink>
          </p>
        ) : null}
        <div className="pt-3">
          <TrackedAnchor
            href="#agenda"
            location="metodo"
            className="lp1-cta min-h-[48px] w-full px-6 py-3 text-[17px] leading-6 sm:w-auto"
          >
            {m.cta}
          </TrackedAnchor>
        </div>
      </div>
    </Capitulo>
  );
}
