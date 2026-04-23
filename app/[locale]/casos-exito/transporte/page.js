"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tools } from "@/libs/tools";
import SuccessCaseCard from "@/components/SuccessCaseCard";

export default function TransporteSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Transporte",
      challenge:
        "Validación manual de expedientes pendientes de acuse en la Agencia Tributaria de España, proceso lento y propenso a errores.",
      solution:
        "Automatización que actualiza en Dynamics NAV el estado de los expedientes pendientes de acuse en la Agencia Tributaria de España.",
      results: {
        manualExecution: "6 hr",
        automatedExecution: "30 min",
        timeSaving: "92%",
      },
      name: "Expedientes Pendientes Acuse",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 2,
      industry: "Transporte",
      challenge:
        "Validación manual de expedientes pendientes de recepción de acuerdo en la Agencia Tributaria de España con actualización en Dynamics.",
      solution:
        "Automatización de la validación de expedientes pendientes de recepción de acuerdo en la Agencia Tributaria, integrando automáticamente con Dynamics.",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "25 min",
        timeSaving: "92%",
      },
      name: "Expedientes Pendientes Recepción",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 3,
      industry: "Logística",
      challenge:
        "Ingresar al sistema Kipintoch e ingresar en cada módulo para descargar sus reportes (Rentabilidad, Comercial, etc)",
      solution:
        "Automatización de la descarga de reportes del sistema Kipintoch, permitiendo parametrizar los filtros y exportarlos en Excel",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "10 min",
        timeSaving: "92%",
      },
      name: "Descarga de Estadisticas",
      tools: ["chrome", "outlook", "excel"],
      platform: "uipath",
    },
    {
      id: 4,
      industry: "Transporte",
      challenge:
        "Envío manual de datos de expedientes de la AEAT (España) desde Dynamics NAV, incluyendo extracción, validación y firma digital.",
      solution:
        "Automatización completa del envío de datos de expedientes de la AEAT desde Dynamics NAV, incluyendo extracción, validación, firma digital y presentación.",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "45 min",
        timeSaving: "91%",
      },
      name: "Expediente Pendiente España y Portugal",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 5,
      industry: "Transporte",
      challenge:
        "Actualización manual de vehículos de Gasóleo Profesional, consultando la AEAT y extrayendo datos a Excel para importación.",
      solution:
        "Automatización de la actualización de vehículos de Gasóleo Profesional, consultando la AEAT, extrayendo datos a Excel e importando datos al sistema.",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "20 min",
        timeSaving: "92%",
      },
      name: "Vehículos Declarados",
      tools: ["excel", "chrome", "dynamics"],
      platform: "rocketbot",
    },
    {
      id: 6,
      industry: "Transporte",
      challenge:
        "Actualización manual de devoluciones de Gasóleo Profesional, consultando la AEAT por año y extrayendo datos a Excel.",
      solution:
        "Automatización de la actualización de devoluciones de Gasóleo Profesional, consultando la AEAT por año, extrayendo datos a Excel e importando automáticamente.",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "25 min",
        timeSaving: "92%",
      },
      name: "Estado Devoluciones Gasóleo Profesional",
      tools: ["dynamics", "chrome", "outlook"],
      platform: "rocketbot",
    },

  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-800 to-gray-900"
        style={{ backgroundImage: "url('/assets/banners/logistica.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-primary/35 md:bg-primary/35 py-4 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Soluciones para el Sector Transporte
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubre cómo hemos optimizado los procesos de transporte a través de la automatización inteligente, mejorando la gestión fiscal y operativa.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Soluciones Destacadas para Transporte
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
              {successCases.map((caseStudy) => (
                <SuccessCaseCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Quieres optimizar tu operación de transporte?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu empresa de transporte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
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