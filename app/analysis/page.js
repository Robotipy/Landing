import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProductCTA from "@/components/ProductCTA";

const features = [
  {
    icon: "\u{1F3AF}",
    title: "Detección automática",
    description:
      "Identifica objetos, personas, eventos y patrones en tus videos automáticamente con modelos de IA avanzados.",
  },
  {
    icon: "\u{1F4C8}",
    title: "Insights automatizados",
    description:
      "Genera reportes y métricas a partir del contenido de tus videos sin procesamiento manual.",
  },
  {
    icon: "\u{26A1}",
    title: "Procesamiento eficiente",
    description:
      "Analiza grandes volúmenes de video de forma rápida y escalable en la nube.",
  },
  {
    icon: "\u{1F50C}",
    title: "Integración con tus sistemas",
    description:
      "Conecta los resultados del análisis con tus dashboards, ERPs o sistemas de alertas existentes.",
  },
];

export default function AnalysisPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <ProductHero
          title="Análisis de video con inteligencia artificial"
          subtitle="Extrae insights automatizados de tus grabaciones. Detecta patrones, genera reportes y toma decisiones basadas en datos visuales."
          ctaText="Acceder a Analysis"
          ctaLink="https://analysis.robotipy.dev"
        />

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Convierte video en datos accionables
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl p-6"
                  style={{ backgroundColor: "#11222c" }}
                >
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              IA aplicada a problemas reales
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Analysis combina nuestra experiencia en inteligencia artificial con
              las necesidades reales de las empresas. Desde control de calidad en
              manufactura hasta análisis de seguridad, el video contiene
              información valiosa que hoy se pierde. Nosotros la convertimos en
              datos.
            </p>
          </div>
        </section>

        <ProductCTA
          title="Descubre lo que tus videos pueden contarte"
          subtitle="Análisis de video potenciado por inteligencia artificial."
          ctaText="Acceder a Analysis"
          ctaLink="https://analysis.robotipy.dev"
        />
      </main>
      <Footer />
    </>
  );
}
