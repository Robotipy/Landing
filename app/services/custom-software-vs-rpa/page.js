import { Suspense } from "react";
import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Software a Medida vs RPA: ¿Qué necesita su empresa? | Robotipy",
  description: "Descubra las diferencias entre desarrollo de software a medida y RPA. Guía completa para elegir la mejor solución de automatización para su negocio.",
  canonicalUrlRelative: "/services/custom-software-vs-rpa",
});

export default function ComparisonPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <section className="relative pt-32 pb-12 overflow-hidden bg-base-100">
            <div className="px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-5xl text-4xl font-extrabold title-font mb-4 text-base-content">
                        Software a Medida vs RPA
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
                        ¿Construir desde cero o automatizar lo existente? Le ayudamos a tomar la decisión correcta para su infraestructura tecnológica.
                    </p>
                </div>
            </div>
        </section>

        <section className="text-base-content body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <h2 className="title-font text-2xl font-medium text-base-content mt-6 mb-3">Software a Medida</h2>
                <p className="leading-relaxed text-base">Ideal cuando necesita una solución única que no existe en el mercado. Perfecto para crear nuevos productos, plataformas de clientes o sistemas core que requieren escalabilidad y control total.</p>
                <ul className="text-left mt-4 space-y-2">
                    <li>✅ Control total del código y funcionalidad.</li>
                    <li>✅ Sin costos de licencias recurrentes (generalmente).</li>
                    <li>✅ Altamente escalable y personalizable.</li>
                    <li>❌ Mayor tiempo de desarrollo inicial.</li>
                </ul>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" />
                </div>
                <h2 className="title-font text-2xl font-medium text-base-content mt-6 mb-3">RPA (Automatización)</h2>
                <p className="leading-relaxed text-base">La mejor opción para conectar sistemas existentes sin modificarlos. Ideal para tareas repetitivas, migración de datos y procesos que involucran múltiples aplicaciones legacy.</p>
                <ul className="text-left mt-4 space-y-2">
                    <li>✅ Implementación rápida (semanas, no meses).</li>
                    <li>✅ No invasivo: trabaja sobre la interfaz de usuario.</li>
                    <li>✅ ROI rápido y medible.</li>
                    <li>❌ Depende de la estabilidad de las interfaces subyacentes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
