import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/RelatedReading";
import VisionCalculator from "./components/VisionCalculator";
import { faqs } from "./data";

const costItems = [
  {
    name: "Cámaras e iluminación",
    range: "USD 600–4.000 por punto",
    text: "Cámaras IP para seguridad o conteo. Cámara industrial, lente e iluminación controlada para calidad y calibre.",
  },
  {
    name: "Procesamiento en planta",
    range: "USD 1.200–2.500 por equipo",
    text: "Un equipo de procesamiento (edge) cada 4 cámaras aprox. Analiza el video en el lugar, sin depender de internet.",
  },
  {
    name: "Desarrollo del modelo",
    range: "USD 8.000–35.000",
    text: "Recolección y etiquetado de imágenes, entrenamiento, integración con tus sistemas y marcha blanca.",
  },
  {
    name: "Mantenimiento",
    range: "~15% anual del desarrollo",
    text: "Reentrenamiento cuando cambia el producto, monitoreo de precisión y soporte.",
  },
];

const relatedLinks = [
  {
    href: "/analysis",
    title: "Robotipy Analysis: análisis de video con IA",
    description: "La plataforma para probar visión artificial sobre tus propias grabaciones.",
  },
  {
    href: "/industries/agtech",
    title: "Visión artificial y automatización en agroindustria",
    description: "Calibre, conteo y clasificación de fruta en packing y campo.",
  },
  {
    href: "/casos-exito",
    title: "Casos de éxito",
    description: "Proyectos de automatización e IA implementados en empresas de la región.",
  },
  {
    href: "/evaluador-automatizacion",
    title: "Evaluador de automatización de procesos",
    description: "Si tu proceso es administrativo y no visual, evalúa si conviene RPA o IA.",
  },
];

export default function CalculadoraVisionArtificialPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="px-4 pb-16 lg:pb-0">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto pt-6 text-sm text-white/60">
          <Link href="/" className="link link-hover">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">Calculadora de visión artificial</span>
        </nav>

        <header className="max-w-3xl mx-auto text-center pt-8 pb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Herramienta gratuita · Sin registro
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            ¿Cuánto cuesta implementar visión artificial en tu empresa?
          </h1>
          <p className="text-white/80 text-lg mt-4 leading-relaxed">
            Elige tu caso de uso, ingresa cuánto te cuesta hoy la inspección manual y obtén al
            instante la inversión estimada, el ahorro anual, el payback y la viabilidad técnica
            del proyecto.
          </p>
        </header>

        <VisionCalculator />

        <section className="max-w-3xl mx-auto py-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Qué incluye el costo de un sistema de visión artificial
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            La calculadora usa rangos referenciales de mercado para cada componente. El mayor
            ítem casi siempre es el desarrollo del modelo, no las cámaras.
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full text-white/80">
              <thead>
                <tr className="text-white border-white/10">
                  <th>Componente</th>
                  <th>Rango referencial</th>
                  <th>Qué cubre</th>
                </tr>
              </thead>
              <tbody>
                {costItems.map((c) => (
                  <tr key={c.name} className="border-white/10">
                    <td className="font-semibold text-white">{c.name}</td>
                    <td className="whitespace-nowrap">{c.range}</td>
                    <td>{c.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-white mt-12 mb-4">
            Cuándo conviene y cuándo no
          </h2>
          <p className="text-white/80 leading-relaxed">
            Conviene cuando hay personas mirando una línea durante todo el turno, cuando los
            defectos que se escapan generan reclamos o mermas, o cuando necesitas trazabilidad que
            hoy no tienes. No conviene si la iluminación cambia sin control, si el producto varía
            demasiado entre lotes o si el ahorro anual no cubre el mantenimiento. En esos casos,
            empieza con un piloto sobre video grabado en{" "}
            <Link href="/analysis" className="link link-accent">
              Robotipy Analysis
            </Link>{" "}
            antes de comprar hardware. Si además necesitas mover los datos detectados a tu ERP o
            planillas, se complementa con{" "}
            <Link href="/rpa" className="link link-accent">
              RPA
            </Link>
            .
          </p>
        </section>

        <section className="max-w-3xl mx-auto pb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-white/10 bg-white/5 rounded-xl p-5">
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
