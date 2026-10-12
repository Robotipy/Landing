import Capitulo from "./Capitulo";
import { TrackedLink } from "./tracking";
import { iaAplicada as ia } from "../data";

export default function IaAplicada({ publicados }) {
  return (
    <Capitulo id="ia-aplicada" numero={ia.numero} rotulo={ia.rotulo} titulo={ia.titulo} texto={ia.texto}>
      <ul className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
        {ia.tarjetas.map((t) => (
          <li key={t.id}>
            <article
              className="flex h-full flex-col border lp1-rule bg-white p-6 md:p-8"
              style={{ borderTopWidth: 2, borderTopColor: "#00182B" }}
            >
              <p className="lp1-eyebrow lp1-muted">{t.industria}</p>
              <h3 className="lp1-serif mt-4 text-[22px] font-semibold leading-[28px]">{t.titulo}</h3>
              <p className="mt-3 text-[16px] leading-[26px]">{t.texto}</p>
              <dl className="mt-6 space-y-4 border-t lp1-rule pt-5">
                {t.cifras.map((c) => (
                  <div key={c.etiqueta} className="flex flex-col">
                    <dt className="order-2 text-[14px] leading-5 lp1-muted">{c.etiqueta}</dt>
                    <dd className="lp1-serif lp1-num order-1 text-[24px] font-semibold leading-8">{c.valor}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-14 max-w-[720px] md:mt-16">
        <h3 className="lp1-eyebrow">{ia.tambienTitulo}</h3>
        <ul className="mt-4 border-b lp1-rule">
          {ia.tambien.map((item) => {
            const enlace = item.enlace && publicados.has(item.enlace.slug) ? item.enlace : null;
            return (
              <li key={item.texto} className="border-t lp1-rule py-5 text-[16px] leading-[26px]">
                {item.texto}
                {enlace ? (
                  <>
                    {" "}
                    <TrackedLink href={`/blog/${enlace.slug}`} destination={enlace.slug} className="lp1-link whitespace-nowrap">
                      {enlace.label}
                    </TrackedLink>
                  </>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </Capitulo>
  );
}
