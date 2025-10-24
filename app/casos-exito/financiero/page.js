"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";

export default function FinancieroSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Banca",
      challenge: "La página de la dirección del trabajo se cae constantemente, lo que dificulta la carga de contratos de nuevos colaboradores.",
      solution: "Automatización de carga de contratos en la página de la dirección del trabajo, incluyendo validación de datos y confirmación de envío.",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "18 min",
        timeSaving: "94%"
      },
      name: "Carga de Contratos en MIDT",
      tools: ["excel", "midt", "outlook"],
      platform: "rocketbot"
    },
    {
      id: 2,
      industry: "Seguros",
      challenge: "Buscar el estado de los siniestros abiertos en cada plataforma de seguros y actualizar la información en el portal de elevia",
      solution: "Automatización que ingresa al sistema de cada seguro, obtiene las observaciones, descarga los adjuntos y actualiza la información en el portal de elevia",
      results: {
        manualExecution: "4 hr",
        automatedExecution: "15 min",
        timeSaving: "94%"
      },
      name: "Actualización de Siniestros",
      tools: ["chrome", "reale-seguros", "mapfre", "allianz", "axa"],
      platform: "rocketbot"
    },
    {
      id: 3,
      industry: "Banca",
      challenge: "Validación de dominios de correos electrónicos de contacto para documentos a ratificar.",
      solution: "Automatización de la búsqueda de dominios de correos electrónicos de contacto en los sitios de godaddy, nic chile y whois",
      results: {
        manualExecution: "5 hr",
        automatedExecution: "1 hr",
        timeSaving: "80%"
      },
      name: "Ratificación de Dominios",
      tools: ["chrome", "sharepoint"],
      platform: "rocketbot"
    },
    {
      id: 4,
      industry: "Estudio Contable",
      challenge: "Extracción manual de información de Facturas de Cereal, Leche y Hacienda para ingreso en documentos de Compra y Venta.",
      solution: "Automatización que recibe las facturas desde un formulario web y genera los reportes de compra, venta y bienes y servicios",
      results: {
        manualExecution: "1 hr",
        automatedExecution: "7 min",
        timeSaving: "88%"
      },
      name: "Lectura de Facturas",
      tools: ["excel", "pdf", "outlook", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 5,
      industry: "Seguros",
      challenge: "Notificar por email y whatsapp a los clientes y responsables el estado de los siniestros pendientes en el software ebroker",
      solution: "Automatización de que ingresa al sistema ebroker, y notifica a los usuarios o respnsables a través de correo o whatsapp el estado de los siniestros",
      results: {
        manualExecution: "8 hr",
        automatedExecution: "1 hr",
        timeSaving: "88%"
      },
      name: "Notificación de Siniestros",
      tools: ["excel", "outlook", "ebroker", "chrome"],
      platform: "rocketbot"
    },
    {
      id: 6,
      industry: "Seguros",
      challenge: "Resolver tareas pendientes y crear, asignar y/o actualizar siniestros en elevia y reale seguros",
      solution: "Automatización de que ingresa al sistema elevia, y según el tipo de tarea, crea, asigna y actualiza los siniestros en reale seguros",
      results: {
        manualExecution: "30 min",
        automatedExecution: "1 min",
        timeSaving: "97%"
      },
      name: "Gestión de tareas",
      tools: ["excel", "outlook", "reale-seguros"],
      platform: "rocketbot"
    }
  ];

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
