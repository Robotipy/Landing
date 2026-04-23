"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";

export default function ServiciosProfesionalesSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Ingeniería Vial",
      challenge:
        "Reducir el costo de revisar videos de transito manteniendo la precisión en el conteo y clasificaciónde vehiculos",
      solution:
        "Se construyó un sistema de IA que clasifica los vehiculos en videos de transito, generando un reporte en excel con la información consolidada.",
      results: {
        manualExecution: "7 días",
        automatedExecution: "1 día",
        timeSaving: "86%",
      },
      name: "Traffic Analysis",
      tools: ["python", "javascript"],
      platform: "robotipy",
    },
    {
      id: 2,
      industry: "Software",
      challenge: "Gestionar la alta y baja de usuarios en las diferentes plataformas utilizadas para gestionar proyectos",
      solution: "Automatización de las plataformas de los usuarios como Google Drive, Jira, Gmail,Slack, a partir de formularios que indican altas o bajas de acceso.",
      results: {
        manualExecution: "30 minutos",
        automatedExecution: "30 segundos",
        timeSaving: "98%"
      },
      name: "Gestión de Permisos",
      tools: ["slack", "jira", "drive", "gmail","github", "flokzu"],
      platform: "rocketbot"
    },
    {
      id: 3,
      industry: "Estudio Jurídico",
      challenge: "Gestionar solicitudes de conciliación y audiencias extrayendo datos de correos y 6 portales como RUES y RUNT",
      solution: "Automatización optimizada para la recolección de datos, agendamiento de citas en Google Calendar y generación de informes",
      results: {
        manualExecution: "7 hr",
        automatedExecution: "30 min",
        timeSaving: "93%"
      },
      name: "Gestión administrativa",
      tools: ["excel", "word", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 4,
      industry: "Ingeniería y Construcción",
      challenge: "Descarga de Facturas, Boletas de honorarios y Factoring del sistema de impuestos internos",
      solution: "Automatización de la descarga de documentos desde el sistema de impuestos internos y su posterior carga en el sistema de gestión de documentos",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "5 min",
        timeSaving: "92%"
      },
      name: "Descarga de Documentos SII",
      tools: ["excel", "sii"],
      platform: "rocketbot"
    },
    {
      id: 5,
      industry: "Estudio Jurídico",
      challenge: "Gestionar trámites ante la Superfinanciera a diario desde el portal web y extraer datos de correos para generar múltiples documentos legales",
      solution: "Automatización de la lectura de correos y la generación de documentos (Poder y Contestación), consultando en la superfinanciera, cruzando datos en Excel.",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "5 min",
        timeSaving: "92%"
      },
      name: "Gestión administrativa Superfinanciera",
      tools: ["excel", "word", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 6,
      industry: "Servicios Técnicos",
      challenge: "Búsqueda de imágenes deartículos en el sitio web de proveedores y actualización masiva de artículos en ecommerce",
      solution: "Automatización de búsqueda de imágenes de artículos con inteligencia artificial para identificar SKUs diferentes y actualización de las imagenes en el ecommerce",
      results: {
        manualExecution: "1 mes",
        automatedExecution: "2 días",
        timeSaving: "93%"
      },
      name: "Carga Masiva de Artículos",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot"
    },
    {
      id: 7,
      industry: "Servicios TI",
      challenge: "Consolidar manualmente múltiples reportes Excel, descargados diariamente desde correos de Outlook y el portal web Field Service",
      solution: "Automatización que filtra y descarga reportes diarios y unifica en una sola plantilla la información de los reportes",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "3 min",
        timeSaving: "95%"
      },
      name: "Mapeo de Tickets",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot"
    },
    {
      id: 7,
      industry: "Servicios TI",
      challenge: "Actualizar manualmente el estado de los tickets en la plataforma HELIX, extrayendo los datos desde correos pendientes en Outlook",
      solution: "Automatización que extrae el número de referencia de cada correo y accede a HELIX a diario para buscar y aplicar las actualizaciones al ticket correspondientes",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "3 min",
        timeSaving: "95%"
      },
      name: "Gestión de Tickets",
      tools: ["excel", "chrome", "outlook"],
      platform: "rocketbot"
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-10 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-100"
        style={{ backgroundImage: "url('/assets/banners/servicios-profesionales.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-primary/35 md:bg-primary/50  py-4 text-white">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                Soluciones para Servicios Profesionales
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold">
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
