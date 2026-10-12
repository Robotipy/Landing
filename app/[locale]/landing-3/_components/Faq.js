import { faqHub, rpaFaqs } from "@/libs/faqs";
import { formatNumber, pricing, usd } from "./pricing";
import { container, line, SectionHeader, textMuted } from "./ui";

// Las respuestas se leen de libs/faqs.js para que esta página y el centro de
// respuestas digan lo mismo. Sin JSON-LD: la página es noindex.
const QUESTIONS = [
  "¿Cuánto cuesta un proyecto de RPA con Robotipy?",
  "¿Hay que pagar una licencia de RPA además del desarrollo?",
  "¿Cuánto cuesta el soporte de un robot RPA después de la entrega?",
  "¿Cuánto demora implementar un robot RPA con Robotipy?",
  "¿Qué pasa si un proyecto de automatización cuesta más de lo cotizado?",
  "¿Cuánto cuesta un desarrollo de software a medida con Robotipy?",
];

// Respuestas corregidas mientras libs/faqs.js mantenga "en semanas, no en
// meses", "Hay clientes que operan el robot..." (afirmación que no está en la
// ficha de hechos) y "en vez de un robot". Al corregir libs/faqs.js, se borran.
const OVERRIDES = {
  "¿Cuánto demora implementar un robot RPA con Robotipy?":
    "Un proceso acotado y bien documentado suele quedar productivo en pocas semanas. El presupuesto promedio de Robotipy considera un mes de trabajo más la marcha blanca. Lo que más alarga los plazos es el acceso a los sistemas y la definición de reglas y excepciones.",
  "¿Cuánto cuesta el soporte de un robot RPA después de la entrega?": `El soporte mensual es opcional y parte en ${usd(
    pricing.supportFrom
  )}. Cubre el monitoreo de las ejecuciones y los ajustes cuando cambia una pantalla o un archivo de entrada. Si tu equipo opera el robot, no pagas nada mensual.`,
  "¿Cuánto cuesta un desarrollo de software a medida con Robotipy?": `Los proyectos de desarrollo de software a medida de Robotipy tienen un rango de inversión de ${usd(
    pricing.softwareMin
  )} a ${formatNumber(
    pricing.softwareMax
  )}, según el alcance. Conviene cuando el proceso necesita una aplicación propia que hoy no existe en tu empresa.`,
};

function pickFaqs(questions) {
  const all = [...rpaFaqs, ...faqHub.flatMap((section) => section.faqs)];
  return questions
    .map((q) => {
      const found = all.find((f) => f.q === q);
      if (!found) return null;
      return { q, a: (OVERRIDES[q] || found.a).replace(/USD (\d)/g, "USD $1") };
    })
    .filter(Boolean);
}

export default function Faq() {
  const faqs = pickFaqs(QUESTIONS);

  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-titulo"
      className="scroll-mt-16 bg-[#F4F7F9] py-16 text-[#0A2540] md:py-24"
    >
      <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <SectionHeader
            titleId="preguntas-titulo"
            eyebrow="Preguntas"
            title="Precio, licencia y plazos"
            body="Lo que conviene saber antes de agendar el diagnóstico."
          />
        </div>
        <dl className={`divide-y ${line} border-y ${line} lg:col-span-8`}>
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <dt className="text-lg font-bold leading-7">{f.q}</dt>
              <dd className={`mt-2 text-base leading-[26px] ${textMuted}`}>{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
