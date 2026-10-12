import Capitulo from "./Capitulo";
import { TrackedLink } from "./tracking";
import { preguntas as p } from "../data";

// Acordeones nativos. Sin JSON-LD FAQPage: la página es noindex.
export default function Preguntas() {
  return (
    <Capitulo id="preguntas" numero={p.numero} rotulo={p.rotulo} titulo={p.titulo} texto={p.texto}>
      <div className="lp1-faq mt-12 max-w-[880px] border-b lp1-rule md:mt-16">
        {p.faqs.map((faq) => (
          <details key={faq.q} className="group border-t lp1-rule">
            <summary className="flex items-start justify-between gap-6 py-5">
              <span className="lp1-serif text-[19px] font-semibold leading-[28px] md:text-[20px]">{faq.q}</span>
              <span aria-hidden="true" className="lp1-plus" />
            </summary>
            <p className="max-w-[720px] pb-6 text-[17px] leading-[28px]">{faq.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-10 text-[16px] leading-[26px]">
        <TrackedLink href="/preguntas-frecuentes" destination="preguntas-frecuentes" localized className="lp1-link">
          {p.enlace}
        </TrackedLink>
      </p>
    </Capitulo>
  );
}
