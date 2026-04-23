import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProductCTA from "@/components/ProductCTA";

const features = [
  {
    icon: "\u{1F6A8}",
    title: "Alertas en tiempo real",
    description:
      "Recibe notificaciones instantáneas cuando un robot falla, se detiene o muestra comportamiento anómalo.",
  },
  {
    icon: "\u{1F4CA}",
    title: "Dashboard de métricas",
    description:
      "Visualiza ejecuciones, tiempos de procesamiento, tasas de éxito y errores en un solo panel.",
  },
  {
    icon: "\u{1F4DD}",
    title: "Logs centralizados",
    description:
      "Accede a los logs de todos tus robots en un solo lugar. Busca, filtra y analiza sin conectarte a cada máquina.",
  },
  {
    icon: "\u{23F0}",
    title: "Historial de ejecuciones",
    description:
      "Revisa el historial completo de cada robot: cuándo se ejecutó, cuánto tardó y si terminó correctamente.",
  },
];

export default function MonitorPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <ProductHero
          title="Monitoreo en tiempo real para tus robots RPA"
          subtitle="Detecta fallos antes que tus clientes. Monitorea ejecuciones, recibe alertas y analiza el rendimiento de todas tus automatizaciones en producción."
          ctaText="Acceder a Monitor"
          ctaLink="https://monitor.robotipy.dev"
        />

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Todo lo que necesitas para mantener tus bots bajo control
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
              Nacido de la experiencia real
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Después de implementar +60 robots RPA en producción, sabemos que el
              mayor desafío no es construir el bot, sino mantenerlo funcionando.
              Monitor nace de esa necesidad: una herramienta simple para saber
              qué está pasando con tus automatizaciones sin tener que revisar
              cada máquina manualmente.
            </p>
          </div>
        </section>

        <ProductCTA
          title="Mantén tus robots bajo control"
          subtitle="Monitorea todas tus automatizaciones en un solo lugar."
          ctaText="Acceder a Monitor"
          ctaLink="https://monitor.robotipy.dev"
        />
      </main>
      <Footer />
    </>
  );
}
