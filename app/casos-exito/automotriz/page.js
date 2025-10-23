"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/libs/tools";

export default function AutomotrizSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Automotriz",
      challenge:
        "Actualización manual de matrículas de vehículos en diferentes sistemas (Invesfleet y MUTUA) con validación y filtrado de expedientes.",
      solution:
        "Automatización de la extracción de datos en Invesfleet y  MUTUA, incluyendo filtrado, validación de expedientes y extracción de información del vehículo.",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "15 min",
        timeSaving: "94%",
      },
      name: "Actualización de Matrículas",
      tools: ["excel", "outlook", "chrome"],
      platform: "rocketbot",
    },
    {
      id: 2,
      industry: "Automotriz",
      challenge:
        "Descarga manual de órdenes de trabajo desde el portal de Allianz para gestión de vehículos.",
      solution:
        "Automatización de la descarga de órdenes desde el portal de Allianz, integrando la información con el sistema de gestión vehicular.",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "10 min",
        timeSaving: "92%",
      },
      name: "Descarga de Órdenes y Facturas",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 3,
      industry: "Automotriz",
      challenge:
        "Valoración manual de baterías de vehículos en el portal de Allianz con verificación de estado y documentación.",
      solution:
        "Automatización de la valoración de baterías en el portal de Allianz, incluyendo verificación de estado, documentación y generación de reportes.",
      results: {
        manualExecution: "3 hr",
        automatedExecution: "20 min",
        timeSaving: "89%",
      },
      name: "Valoración de Baterías",
      tools: ["excel", "chrome", "pdf", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 4,
      industry: "Automotriz",
      challenge: "El proceso de generación de órdenes de compra, debía cargar datos a SAP y mandar la OC al proveedor, pasando por diferentes etapas de aprobación y validación.",
      solution:
        "Automatización de la generación de órdenes de compra, incluyendo estandarización, carga de datos a SAP y envío de la OC al proveedor 24/7.",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "2 min",
        timeSaving: "93%",
      },
      name: "Generación de Órdenes de Compra",
      tools: ["excel", "sap","pdf","outlook"],
      platform: "rocketbot",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-10 lg:py-32 bg-gradient-to-br from-gray-800 to-gray-900"
        style={{ backgroundImage: "url('/assets/banners/automotriz.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-primary/35 md:bg-primary/50  py-4 text-white">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                Soluciones para la Industria Automotriz
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold">
                Descubre cómo hemos optimizado los procesos automotrices a través de la automatización inteligente, mejorando la gestión vehicular y operaciones de seguros.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Soluciones Destacadas para Automotriz
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
              {successCases.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-success mb-3">
                      {caseStudy.name}
                    </h3>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-300 text-sm">
                          Desafío:
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-300 text-sm">
                          Solución:
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-400">
                          {caseStudy.results.manualExecution}
                        </div>
                        <div className="text-xs text-gray-400">
                          Ejecución Manual
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">
                          {caseStudy.results.automatedExecution}
                        </div>
                        <div className="text-xs text-gray-400">
                          Ejecución Automatizada
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">
                          {caseStudy.results.timeSaving}
                        </div>
                        <div className="text-xs text-gray-400">
                          Ahorro de Tiempo
                        </div>
                      </div>
                    </div>

                    {/* Tools Section */}
                    <div className="mt-4 justify-between items-center hidden md:flex">
                      <div className="text-gray-400 text-lg">
                        <div className="flex items-center gap-2">
                          <span >Plataforma</span>
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
                    <div className="mt-4 justify-between items-center md:hidden text-gray-400">
                      <div className="text-gray-400 text-lg">
                        <div className="flex items-center gap-2 w-2/5">
                          <span >Plataforma</span>
                          {tools[caseStudy.platform]}
                        </div>
                      </div>
                        <span>Herramientas automatizadas:</span>
                      <div className="flex flex-wrap gap-3 w-fit px-0 items-center">
                        
                        {caseStudy.tools.map((tool) => (
                          <span key={tool} className="w-5">
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
        <section className="py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Quieres optimizar tu operación automotriz?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu empresa automotriz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
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