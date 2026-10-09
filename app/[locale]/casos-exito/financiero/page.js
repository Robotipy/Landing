"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";
import { successCases as allCases } from "@/libs/successCases";

export default function FinancieroSuccessCases() {
  const successCases = allCases.filter((c) => c.categoria === "financiero");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-10 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-100"
        style={{ backgroundImage: "url('/assets/banners/financiero.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-primary/35 md:bg-primary/35  py-4 text-white">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                Soluciones para Servicios Financieros
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold">
                Descubre cómo hemos transformado los procesos bancarios y de seguros 
                a través de la automatización inteligente y la tecnología financiera.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Soluciones Destacadas para Servicios Financieros
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
              {successCases.map((caseStudy) => (
                <SuccessCaseCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Quieres modernizar tu operación financiera?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu institución financiera.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Calcular ROI
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
