import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/RelatedReading";
import AutomationScorer from "./components/AutomationScorer";
import { faqs } from "./data";

const criteria = [
  {
    name: "Frecuencia",
    weight: "20 pts",
    text: "Un proceso diario recupera la inversión mucho antes que uno mensual.",
  },
  {
    name: "Volumen de horas",
    weight: "20 pts",
    text: "Más horas manuales significa más tiempo que tu equipo recupera.",
  },
  {
    name: "Reglas claras",
    weight: "20 pts",
    text: "Si puedes escribir el paso a paso, un robot lo puede ejecutar.",
  },
  {
    name: "Datos digitales",
    weight: "15 pts",
    text: "Excel, ERP y portales web se automatizan directo. Papel y escaneos necesitan IA.",
  },
  {
    name: "Estabilidad",
    weight: "10 pts",
    text: "Un proceso que cambia cada mes obliga a ajustar el robot cada mes.",
  },
  {
    name: "Costo del error",
    weight: "10 pts",
    text: "Cuando un error genera multas o pagos mal hechos, la precisión del robot vale más.",
  },
];

const relatedLinks = [
  {
    href: "/roi-calculator",
    title: "Calculadora de ROI de automatización",
    description:
      "Lleva tu resultado a números: ahorro anual, payback y VPN de automatizar el proceso.",
  },
  {
    href: "/blog/como-documentar-un-proceso-antes-de-automatizarlo",
    title: "Cómo documentar un proceso antes de automatizarlo",
    description:
      "El paso previo si tu puntaje salió medio o bajo: ordenar reglas, entradas y excepciones.",
  },
  {
    href: "/blog/cuanto-cuesta-automatizar-un-proceso",
    title: "¿Cuánto cuesta automatizar un proceso?",
    description: "Desarrollo, licencias y soporte explicados con cifras reales.",
  },
  {
    href: "/blog/rpa-vs-ia-agentica",
    title: "RPA vs IA agéntica: cuándo usar cada una",
    description: "Para procesos que requieren criterio además de reglas.",
  },
  {
    href: "/blog/idp-procesamiento-inteligente-de-documentos",
    title: "IDP: procesamiento inteligente de documentos",
    description: "Cómo automatizar procesos que dependen de PDFs, facturas o escaneos.",
  },
  {
    href: "/calculadora-vision-artificial",
    title: "Calculadora de costo de visión artificial",
    description: "Si tu proceso es visual (inspección, conteo, EPP), estima inversión y payback.",
  },
];

export default function EvaluadorAutomatizacionPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="px-4">
        <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto pt-6 text-sm text-white/60">
          <Link href="/" className="link link-hover">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">Evaluador de automatización</span>
        </nav>

        <header className="max-w-3xl mx-auto text-center pt-8 pb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Herramienta gratuita · Sin registro
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            ¿Se puede automatizar tu proceso?
          </h1>
          <p className="text-white/80 text-lg mt-4 leading-relaxed">
            Responde 7 preguntas sobre una tarea de tu empresa. En menos de un minuto sabrás su
            puntaje de automatización, qué tecnología conviene (RPA, IA o API) y cuántas horas
            podrías liberar.
          </p>
        </header>

        <AutomationScorer />

        <section className="max-w-3xl mx-auto py-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Cómo calculamos el puntaje
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            Usamos los mismos criterios con los que priorizamos procesos en nuestros
            diagnósticos de{" "}
            <Link href="/automation" className="link link-accent">
              automatización de procesos
            </Link>
            . Cada factor suma puntos hasta un máximo de 100. La pregunta sobre APIs no cambia el
            puntaje, pero define la tecnología recomendada.
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full text-white/80">
              <thead>
                <tr className="text-white border-white/10">
                  <th>Criterio</th>
                  <th>Peso</th>
                  <th>Por qué importa</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c) => (
                  <tr key={c.name} className="border-white/10">
                    <td className="font-semibold text-white whitespace-nowrap">{c.name}</td>
                    <td className="whitespace-nowrap">{c.weight}</td>
                    <td>{c.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/80 leading-relaxed mt-6">
            Un puntaje sobre 75 indica un candidato ideal para{" "}
            <Link href="/rpa" className="link link-accent">
              RPA
            </Link>
            . Entre 50 y 74 conviene automatizar los pasos estándar y dejar las excepciones a tu
            equipo. Bajo 50, lo más rentable suele ser ordenar el proceso primero. Si tu caso
            combina documentos y criterio, revisa cómo trabajamos con{" "}
            <Link href="/chatbot" className="link link-accent">
              agentes y chatbots con IA
            </Link>
            .
          </p>
        </section>

        <section className="max-w-3xl mx-auto pb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group border border-white/10 bg-white/5 rounded-xl p-5"
              >
                <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-semibold text-white">
                  <h3 className="text-base">{q}</h3>
                  <span className="text-accent text-xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-white/80 mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <RelatedReading title="Sigue avanzando" links={relatedLinks} />
      </main>
      <Footer />
    </>
  );
}
