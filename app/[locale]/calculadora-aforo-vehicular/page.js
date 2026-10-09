import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedReading from "@/components/RelatedReading";
import AforoCalculator from "./components/AforoCalculator";
import { faqs } from "./data";

const comparison = [
  {
    item: "Personal en terreno",
    manual: "Varios aforadores por intersección durante todo el período.",
    video: "Una cámara fija, dron o celular grabando cada punto.",
  },
  {
    item: "Costo",
    manual: "Horas-persona en terreno más digitación de planillas.",
    video: "USD 7 por hora de video, sin costo fijo ni mínimo.",
  },
  {
    item: "Verificación",
    manual: "Solo queda la planilla de cada aforador.",
    video: "Video anotado con cada vehículo marcado para auditar el conteo.",
  },
  {
    item: "Intervalos",
    manual: "Los que se definieron antes de salir a terreno.",
    video: "Cada 5, 15, 30 o 60 minutos, o por ciclo de semáforo.",
  },
  {
    item: "Entrega",
    manual: "Planillas que hay que digitar y cuadrar.",
    video: "Excel, CSV y PDF ejecutivo con gráficos y origen-destino.",
  },
];

const relatedLinks = [
  {
    href: "/analysis",
    title: "YOAO: análisis de video con IA",
    description: "La plataforma de Robotipy para conteos vehiculares y peatonales a partir de video.",
  },
  {
    href: "/calculadora-vision-artificial",
    title: "Calculadora de costo de visión artificial",
    description: "Para proyectos industriales: control de calidad, EPP, calibre o inventario.",
  },
  {
    href: "/evaluador-automatizacion",
    title: "Evaluador de automatización de procesos",
    description: "Descubre si otros procesos de tu empresa se pueden automatizar.",
  },
];

export default function CalculadoraAforoVehicularPage() {
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
          <span className="text-white/80">Calculadora de aforo vehicular</span>
        </nav>

        <header className="max-w-3xl mx-auto text-center pt-8 pb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Herramienta gratuita · Sin registro
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            ¿Cuánto cuesta un aforo vehicular? Manual vs. video con IA
          </h1>
          <p className="text-white/80 text-lg mt-4 leading-relaxed">
            Ingresa cuántas intersecciones y horas necesitas contar. Te mostramos al instante
            cuánto cuesta hacerlo con aforadores en terreno y cuánto con análisis de video.
          </p>
        </header>

        <AforoCalculator />

        <section className="max-w-3xl mx-auto py-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Aforo manual vs. conteo vehicular por video
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            El aforo manual escala con personas: más intersecciones o más horas significan más
            aforadores y más planillas. El conteo por video escala con horas de grabación, y el
            análisis lo hace la plataforma.
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full text-white/80">
              <thead>
                <tr className="text-white border-white/10">
                  <th></th>
                  <th>Aforo manual</th>
                  <th>Video con IA</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.item} className="border-white/10">
                    <td className="font-semibold text-white">{c.item}</td>
                    <td>{c.manual}</td>
                    <td>{c.video}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-white mt-12 mb-4">
            Para qué se usa un estudio de tránsito por video
          </h2>
          <p className="text-white/80 leading-relaxed">
            Estudios de impacto vial, programación de semáforos, conteos de peatones y espacios
            públicos, ciclovías, relevamientos con dron y mediciones antes y después de una obra.
            El análisis lo hace{" "}
            <Link href="/analysis" className="link link-accent">
              YOAO
            </Link>
            , la plataforma de análisis de video de Robotipy: subes el video, marcas los accesos y
            recibes conteos por movimiento y tipo de vehículo.
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
