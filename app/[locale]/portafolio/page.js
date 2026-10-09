"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";
import { successCases } from "@/libs/successCases";
import Link from "next/link";

export default function PortfolioPage() {
  const allSuccessCases = successCases;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Portafolio de Casos de Éxito
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubre cómo hemos transformado procesos empresariales a través de la automatización inteligente en diferentes industrias. Más de 36 casos de éxito que demuestran el poder de la tecnología RPA.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-success mb-2">36+</div>
                <div className="text-gray-300">Casos de Éxito</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">10+</div>
                <div className="text-gray-300">Industrias</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">90%</div>
                <div className="text-gray-300">Ahorro Promedio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">100%</div>
                <div className="text-gray-300">Satisfacción</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Solutions Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Todos Nuestros Casos de Éxito
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {allSuccessCases.map((caseStudy) => (
                (!caseStudy.hide && (
                  <SuccessCaseCard key={caseStudy.id} caseStudy={caseStudy} showIndustryLink={true} />
                ))
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
              Explora por Industria
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Agricultura", url: "/casos-exito/agricola", color: "bg-green-600" },
                // { name: "Alimentos", url: "/casos-exito/alimentos", color: "bg-orange-600" },
                { name: "Automotriz", url: "/casos-exito/automotriz", color: "bg-blue-600" },
                { name: "Financiero", url: "/casos-exito/financiero", color: "bg-yellow-600" },
                // { name: "Salud", url: "/casos-exito/salud", color: "bg-emerald-600" },
                { name: "Servicios Profesionales", url: "/casos-exito/servicios-profesionales", color: "bg-purple-600" },
                { name: "Transporte y Logística", url: "/casos-exito/transporte", color: "bg-teal-600" },
              ].map((industry) => (
                <Link
                  key={industry.name}
                  href={industry.url}
                  className={`${industry.color} text-white px-4 py-3 rounded-lg text-center hover:opacity-80 transition-opacity text-sm font-medium`}
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubre cómo podemos automatizar y optimizar los procesos de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-success text-white font-semibold rounded-lg hover:bg-success/90 transition-colors"
              >
                Solicitar Consulta
              </a>
              <a
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-success text-success font-semibold rounded-lg hover:bg-success/10 transition-colors"
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