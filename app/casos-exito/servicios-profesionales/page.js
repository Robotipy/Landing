"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServiciosProfesionalesSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Servicios Técnicos",
      challenge: "Carga manual de artículos de proveedores en ecommerce",
      solution: "Automatización de carga masiva de artículos",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "30 min",
        timeSaving: "94%"
      },
      description: "Automatizamos la carga masiva de artículos de proveedores en plataformas de ecommerce, optimizando el proceso de gestión de inventario y catálogo.",
      category: "Carga Masiva de Artículos"
    },
    {
      id: 2,
      industry: "Software",
      challenge: "Gestión manual de permisos en múltiples plataformas",
      solution: "Automatización de gestión de permisos en plataformas",
      results: {
        manualExecution: "6 hr",
        automatedExecution: "25 min",
        timeSaving: "93%"
      },
      description: "Automatizamos la gestión de permisos en plataformas como Google Drive, Jira y Slack, a partir de formularios que indican altas o bajas de acceso.",
      category: "Gestión de Permisos"
    },
    {
      id: 3,
      industry: "Estudio Jurídico",
      challenge: "Búsqueda manual de información de deudores y generación de audiencias",
      solution: "Automatización de búsqueda de información y generación de audiencias",
      results: {
        manualExecution: "7 hr",
        automatedExecution: "30 min",
        timeSaving: "93%"
      },
      description: "Automatizamos la búsqueda de información de clientes deudores en diferentes webs, armado de documentos y generación de audiencias para negociación con deudores.",
      category: "Generación de Audiencias"
    },
    {
      id: 4,
      industry: "Estudio Contable",
      challenge: "Procesamiento manual de impuestos y análisis de datos bancarios",
      solution: "Automatización de procesamiento de impuestos y análisis",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "20 min",
        timeSaving: "93%"
      },
      description: "Automatizamos la recopilación y análisis del impuesto al débito y crédito desde PDFs bancarios para generar un Excel final y subirlo al repositorio del cliente.",
      category: "Procesamiento de Impuestos"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Soluciones para Servicios Profesionales
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubre cómo hemos transformado los procesos de servicios técnicos, legales, contables y de software 
                a través de la automatización inteligente.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Soluciones Destacadas para Servicios Profesionales
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {successCases.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-r from-gray-500 to-slate-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold">{caseStudy.results.timeSaving}</div>
                      <div className="text-sm opacity-90">Ahorro de Tiempo</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-900 text-gray-200 text-sm font-medium rounded-full">
                        {caseStudy.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {caseStudy.company}
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-300 text-sm">Desafío:</h4>
                        <p className="text-gray-400 text-sm">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-300 text-sm">Solución:</h4>
                        <p className="text-gray-400 text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-400">
                          {caseStudy.results.manualExecution}
                        </div>
                        <div className="text-xs text-gray-400">Ejecución Manual</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">
                          {caseStudy.results.automatedExecution}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Ejecución Automatizada</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">
                          {caseStudy.results.timeSaving}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Ahorro de Tiempo</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {caseStudy.description}
                    </p>
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
              ¿Quieres automatizar tu práctica profesional?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu empresa de servicios profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-gray-600 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
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
