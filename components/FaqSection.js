// FAQ renderizada en el servidor: el texto visible y el JSON-LD FAQPage salen
// del mismo array, así que siempre quedan idénticos.
export const faqJsonLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

// "dark" para páginas con fondo azul Robotipy; "base" para páginas que usan
// el tema de daisyUI (bg-base-100).
const variants = {
  dark: {
    title: "text-white",
    intro: "text-white/80",
    item: "border-white/10 bg-white/5",
    question: "text-white",
    answer: "text-white/80",
  },
  base: {
    title: "text-base-content",
    intro: "text-base-content/80",
    item: "border-base-content/10 bg-base-200",
    question: "text-base-content",
    answer: "text-base-content/80",
  },
};

const FaqSection = ({
  faqs,
  title = "Preguntas frecuentes",
  intro,
  id = "preguntas-frecuentes",
  variant = "dark",
  withSchema = true,
}) => {
  if (!faqs || faqs.length === 0) return null;
  const v = variants[variant] || variants.dark;
  return (
    <section id={id} className="py-12 lg:py-16">
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-2xl lg:text-3xl font-bold mb-3 ${v.title}`}>
          {title}
        </h2>
        {intro && <p className={`mb-6 leading-relaxed ${v.intro}`}>{intro}</p>}
        <div className={intro ? "" : "mt-6"}>
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className={`group rounded-xl border mb-3 overflow-hidden ${v.item}`}
              open={i === 0}
            >
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <h3 className={`font-bold text-base ${v.question}`}>{f.q}</h3>
                <span className="text-accent text-2xl font-light flex-shrink-0 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className={`px-5 pb-5 text-[15px] leading-relaxed ${v.answer}`}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
