import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { preguntas as p, textoPlano, visible } from "../data";

// Acordeón nativo. El JSON-LD FAQPage sale del mismo arreglo, con el mismo texto visible.
export default function Preguntas({ publicados }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: textoPlano(f.a) },
    })),
  };

  return (
    <Seccion id="preguntas">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="min-w-0 lg:col-span-4">
          <Encabezado id="preguntas" rotulo={p.rotulo} titulo={p.titulo} />
        </div>
        <div className="h1-faq min-w-0 lg:col-span-8">
          <div className="border-t h1-ink-rule">
            {p.faqs.map((f) => (
              <details key={f.q} className="border-b h1-rule">
                <summary className="flex items-start justify-between gap-6 py-5">
                  <span className="h1-q h1-navy text-[17px] font-semibold leading-[26px] transition-colors">{f.q}</span>
                  <span aria-hidden="true" className="h1-plus" />
                </summary>
                <p className="max-w-[680px] pb-6 pr-8 text-[16px] leading-[27px]">
                  {f.a.map((t, i) =>
                    typeof t === "string" ? (
                      <span key={i}>{t}</span>
                    ) : visible(t.href, publicados) ? (
                      <TLink key={i} href={t.href} className="h1-link-inline">
                        {t.texto}
                      </TLink>
                    ) : (
                      <span key={i}>{t.texto}</span>
                    )
                  )}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-[16px] leading-6">
            <TLink href={p.enlace.href} className="h1-link font-semibold">
              {p.enlace.label}
            </TLink>
          </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }}
      />
    </Seccion>
  );
}
