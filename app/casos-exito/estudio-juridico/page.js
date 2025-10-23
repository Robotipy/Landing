"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/libs/tools";

export default function EstudioJuridicoSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Estudio Jurídico",
      challenge:
        "Búsqueda manual de información de clientes deudores de bancos en diferentes webs, armado de documentos y generación de audiencias para negociación.",
      solution:
        "Automatización de la búsqueda de información de clientes deudores en diferentes webs, armado automático de documentos y generación de audiencias (vía calendar) para negociación con deudores.",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "1 hr",
        timeSaving: "88%",
      },
      name: "Generación de Audiencia",
      tools: ["excel", "web-scraping", "calendar", "pdf"],
      platform: "rocketbot",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Soluciones para Estudios Jurídicos
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Descubre cómo hemos optimizado los procesos jurídicos a través de la automatización inteligente, mejorando la gestión de casos y documentación legal.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Soluciones Destacadas para Estudios Jurídicos
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
              {successCases.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-success mb-3">
                      {caseStudy.name}
                    </h3>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                          Desafío:
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">
                          Solución:
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-600 dark:text-gray-400">
                          {caseStudy.results.manualExecution}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Ejecución Manual
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                          {caseStudy.results.automatedExecution}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Ejecución Automatizada
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                          {caseStudy.results.timeSaving}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Ahorro de Tiempo
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-gray-600 dark:text-gray-400 text-lg">
                        <div className="flex items-center gap-2">
                          <span>Plataforma</span>
                          {tools[caseStudy.platform]}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 w-fit px-5 items-center">
                        {caseStudy.tools.map((tool) => (
                          <span key={tool} className="w-5 text-success">
                            {tools[tool]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Quieres optimizar tu estudio jurídico?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu estudio jurídico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
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
