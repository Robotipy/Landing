import Capitulo from "./Capitulo";
import { TrackedLink } from "./tracking";
import { gobierno as g } from "../data";

export default function Gobierno({ publicados }) {
  return (
    <Capitulo id="gobierno" numero={g.numero} rotulo={g.rotulo} titulo={g.titulo} texto={g.texto}>
      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-0">
        <div className="md:pr-12">
          <h3 className="lp1-serif text-[22px] font-semibold leading-7">{g.hoy.titulo}</h3>
          <ul className="mt-6 space-y-4">
            {g.hoy.items.map((item) => (
              <li key={item} className="flex gap-4 text-[16px] leading-[26px]">
                <span aria-hidden="true" className="mt-[9px] h-2 w-2 flex-none bg-[#00182B]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t lp1-rule pt-12 md:border-l md:border-t-0 md:pl-12 md:pt-0">
          <h3 className="lp1-serif text-[22px] font-semibold leading-7">{g.preparacion.titulo}</h3>
          <ul className="mt-6 space-y-4">
            {g.preparacion.items.map((item) => (
              <li key={item} className="lp1-muted flex gap-4 text-[16px] leading-[26px]">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-2 w-2 flex-none rounded-full border border-[#00182B]/40"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="lp1-muted mt-6 text-[14px] leading-[22px]">{g.preparacion.nota}</p>
        </div>
      </div>
      {publicados.has(g.lectura.slug) ? (
        <p className="mt-12 text-[16px] leading-[26px]">
          <TrackedLink href={`/blog/${g.lectura.slug}`} destination={g.lectura.slug} className="lp1-link">
            {g.lectura.texto}
          </TrackedLink>
        </p>
      ) : null}
    </Capitulo>
  );
}
