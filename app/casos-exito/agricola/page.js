"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";

export default function AgriculturaSuccessCases() {
  const successCases = [
    {
      id: 1,
      industry: "Agrotecnología",
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
      industry: "Agroindustria",
      challenge: "Conciliar los movimientos de diferentes bancos argentinos y los movimientos de finnegans",
      solution: "Automatización de la descarga de movimientos de cada banco, comparación con los movimientos de finnegans y conciliación de los mismos",
      results: {
        manualExecution: "2 hr",
        automatedExecution: "5 min",
        timeSaving: "96%",
      },
      name: "Conciliación Bancaria",
      tools: ["finnegans", "excel", "outlook"],
      platform: "rocketbot",
    },
    {
      id: 3,
      industry: "Agrotecnología",
      challenge:
        "Los operarios poco técnicos en terreno, debían buscar en la base de datos los artículos para presupuestar.",
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
      id: 4,
      industry: "Frutícola",
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
      id: 5,
      industry: "Agrotecnología",
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
                <SuccessCaseCard key={caseStudy.id} caseStudy={caseStudy} />
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
