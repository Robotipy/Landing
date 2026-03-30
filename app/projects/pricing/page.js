"use client";

import { Suspense, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonMain from "@/components/ButtonMain";

const faqs = [
  {
    question: "¿Hay un período de prueba gratuito?",
    answer:
      "Sí, todos los planes incluyen 30 días de prueba gratuita. No necesitas ingresar tarjeta de crédito para empezar.",
  },
  {
    question: "¿Los clientes (Guests) cuentan como usuarios pagos?",
    answer:
      "No. Los clientes que acceden al portal de clientes son Guests y no cuentan como usuarios pagos. Puedes invitar clientes ilimitados sin costo adicional.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes cambiar de plan cuando quieras. Si subes de plan, se prorratea la diferencia. Si bajas, el cambio aplica en tu próximo ciclo de facturación.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express). Para planes anuales también ofrecemos transferencia bancaria.",
  },
  {
    question: "¿Hay descuento por pago anual?",
    answer:
      "Sí, el pago anual tiene un 20% de descuento respecto al pago mensual.",
  },
  {
    question: "¿Necesito instalar algo?",
    answer:
      "No. Robotipy Projects es 100% web. Solo necesitas un navegador moderno para acceder desde cualquier dispositivo.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Planes simples para consultoras de cualquier tamaño
              </h1>
              <p className="text-lg text-white/70 mb-8">
                30 días gratis. Sin tarjeta de crédito. Los clientes (Guests) no
                cuentan como usuarios pagos.
              </p>

              <div className="flex items-center justify-center gap-3 mb-12">
                <span
                  className={`text-sm font-medium ${!isAnnual ? "text-white" : "text-gray-400"}`}
                >
                  Mensual
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isAnnual ? "bg-accent" : "bg-gray-600"}`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${isAnnual ? "translate-x-7" : ""}`}
                  />
                </button>
                <span
                  className={`text-sm font-medium ${isAnnual ? "text-white" : "text-gray-400"}`}
                >
                  Anual{" "}
                  <span className="text-green-400 font-bold">(-20%)</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Freelancer Plan */}
              <div
                className="rounded-xl p-8 flex flex-col"
                style={{ backgroundColor: "#11222c" }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  Freelancer
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Para consultores independientes
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? "15" : "19"}
                  </span>
                  <span className="text-gray-400">/mes</span>
                  {isAnnual && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      $19/mes
                    </span>
                  )}
                </div>
                <ul className="text-gray-300 text-sm space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>1
                    usuario
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>Clientes
                    ilimitados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Proyectos ilimitados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>Portal de
                    clientes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>Soporte
                    básico
                  </li>
                </ul>
                <ButtonMain
                  text="Empieza gratis"
                  link="https://robotipy.dev"
                  type="primary"
                />
              </div>

              {/* Studio Plan */}
              <div
                className="rounded-xl p-8 flex flex-col border border-accent/30"
                style={{ backgroundColor: "#11222c" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">Studio</h3>
                  <span className="badge badge-sm bg-accent text-white border-accent">
                    Popular
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Para equipos y consultoras
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${isAnnual ? "39" : "49"}
                  </span>
                  <span className="text-gray-400">/usuario/mes</span>
                  {isAnnual && (
                    <span className="text-sm text-gray-500 line-through ml-2">
                      $49/mes
                    </span>
                  )}
                </div>
                <ul className="text-gray-300 text-sm space-y-3 mb-8 flex-1">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>Usuarios
                    ilimitados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>Todo de
                    Freelancer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Planificación de recursos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Cotizador de propuestas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Integraciones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>Soporte
                    prioritario
                  </li>
                </ul>
                <ButtonMain
                  text="Empieza gratis"
                  link="https://robotipy.dev"
                  type="primary"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Preguntas Frecuentes
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#11222c" }}
                >
                  <button
                    className="w-full px-6 py-5 text-left focus:outline-none"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                      >
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
