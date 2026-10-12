import { prices, routes } from "@/libs/landingFacts";
import { findPost, postHref } from "./blog";
import { dropFirstSentence, formatNumber, lowerFirst, pricing, usd } from "./pricing";
import { AppLink, bandLight, container, line, SectionHeader, sectionY, textLink, textMuted } from "./ui";

// Sin JSON-LD mientras la página sea noindex. Al promover el home a "/", se
// emite FAQPage con este mismo arreglo.
export function priceFaqs() {
  return [
    {
      q: "¿Cuánto cuesta automatizar un proceso?",
      a: `En promedio, ${usd(pricing.rpaAverage)} por proceso. ${dropFirstSentence(prices.rpaAverageNote)}`,
    },
    {
      q: "¿Hay que pagar una licencia aparte?",
      a: `${prices.licenseNote} En ese caso se suma una licencia de ${usd(pricing.license)}.`,
    },
    {
      q: "¿El soporte es obligatorio?",
      a: `No. Es opcional y parte en ${usd(pricing.supportFrom)} al mes. Cubre: ${lowerFirst(
        dropFirstSentence(prices.supportNote)
      )}`,
    },
    {
      q: "¿El diagnóstico tiene costo?",
      a: pricing.diagnosticIsFree
        ? `No. El diagnóstico es ${prices.diagnostic.toLowerCase()} y sirve para decidir si conviene avanzar.`
        : `El diagnóstico cuesta ${usd(pricing.diagnostic)} y sirve para decidir si conviene avanzar.`,
    },
    {
      q: "¿Cuánto cuesta un software a medida?",
      a: `De ${usd(pricing.softwareMin)} a ${formatNumber(pricing.softwareMax)}, según alcance.`,
    },
    {
      q: "¿Cuánto demora un proyecto?",
      a: `${prices.timeline}.`,
    },
  ];
}

const IT_GUIDES = ["como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros", "como-monitorear-robots-rpa-en-produccion"];
const IT_LABELS = {
  "como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros": "Cómo integrar RPA con tu ERP",
  "como-monitorear-robots-rpa-en-produccion": "Cómo monitorear robots RPA en producción",
};

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#027A79] transition-transform duration-150 group-open:rotate-45"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M10 4v12M4 10h12" />
    </svg>
  );
}

export default function PriceFaq() {
  const faqs = priceFaqs();
  const itGuides = IT_GUIDES.map(findPost).filter(Boolean);

  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo" className={`${bandLight} ${sectionY}`}>
      <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <SectionHeader titleId="preguntas-titulo" eyebrow="Preguntas" title="Preguntas sobre precios" />
        </div>

        <div className="min-w-0 lg:col-span-8">
          <div className={`divide-y divide-[#E3E8EE] rounded-2xl border ${line} bg-white`}>
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-5 md:px-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-base font-bold leading-6 text-[#0A2540] [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <PlusIcon />
                </summary>
                <p className={`-mt-1 pb-5 pr-9 text-[15px] leading-6 ${textMuted}`}>{faq.a}</p>
              </details>
            ))}
          </div>

          <ul className="mt-6 flex flex-col gap-2.5 text-[15px] leading-6 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li>
              <AppLink href={routes.faq} className={textLink}>
                Ver todas las preguntas frecuentes
              </AppLink>
            </li>
            {itGuides.map((post) => (
              <li key={post.slug}>
                <AppLink href={postHref(post.slug)} className={textLink}>
                  {IT_LABELS[post.slug] || post.title}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
