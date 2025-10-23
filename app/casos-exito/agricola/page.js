"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/libs/tools";

export default function AgriculturaSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Agricultura",
      challenge:
        "Generación manual de ofertas técnicas en documentos word con diferentes plantillas e información personalizada para clientes",
      solution:
        "Automatizamos la generación de documentos con ofertas de artículos para clientes a través de un formulario, eliminando el trabajo manual repetitivo.",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "2 min",
        timeSaving: "98%",
      },
      name: "Configurador de Oferta Técnica",
      tools: ["excel", "word", "pdf", "javascript"],
      platform: "rocketbot",
    },
    {
      id: 2,
      industry: "Agricultura",
      challenge:
        "Los operarios poco técnicosen terreno, debían buscar en la base de datos los artículos para presupuestar.",
      solution:
        "Extracción de los articulos desde un audio enviado por el operario, y envío de la información al sistema de presupuestos.",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "5 min",
        timeSaving: "96%",
      },
      name: "Registro de Artículos por Audio",
      tools: ["python", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 3,
      industry: "Agricultura",
      challenge: "Bajar los documentos desde el SII, y carga de cada uno junto a la respectiva orden de compra en su ERP Quality (Q-biz).",
      solution: "Automatización de la descarga de facturas del SII, búsqueda de la respectiva orden de compra y carga en ERP Quality (Q-Biz) ",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "1 hr",
        timeSaving: "87%",
      },
      name: "Carga de Facturas en ERP Quality",
      tools: ["excel", "qbiz", "sii", "pdf", "xml", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 4,
      industry: "Agricultura",
      challenge: "Generación de Planos DWG e imagenes TIFF descargando archivos KMZ de diferentes plataformas incluyendo google earth",
      solution: "Automatización de la descarga de archivos KMZ y control de las aplicaciones de Google Earth, BricsCad y QGIS para generar los planos y imagenes TIFF",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "25 min",
        timeSaving: "92%",
      },
      name: "Generación de Planos",
      tools: ["qgis", "bricscad", "google-earth"],
      platform: "rocketbot",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-10 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-100"
        style={{ backgroundImage: "url('/assets/banners/agricola.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:bg-primary/35  py-4 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Soluciones para Agricultura y Agroindustria
              </h1>
              <p className="text-xl max-w-3xl mx-auto font-semibold">
                Descubre cómo hemos transformado los procesos agrícolas y
                agroindustriales a través de la automatización inteligente e inteligencia artificial.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Soluciones Destacadas para Agricultura
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

                    {/* <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {caseStudy.description}
                    </p> */}

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
              ¿Quieres revolucionar tu operación agrícola?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu
              empresa agrícola o agroindustrial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
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
