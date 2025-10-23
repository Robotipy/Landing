"use client";
import { useState } from "react";

const SoftwareFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar una aplicación de software personalizada?",
      answer: "Los tiempos de desarrollo varían según la complejidad del proyecto, características y stack tecnológico. Un proyecto simple puede tomar 2-4 meses, mientras que un sistema empresarial complejo podría tomar un año o más. Proporcionamos un cronograma detallado después de la fase inicial de descubrimiento."
    },
    {
      question: "¿Qué metodología de gestión de proyectos utilizan?",
      answer: "Utilizamos principalmente la metodología Ágil, que nos permite ser flexibles y receptivos al cambio. Trabajamos en sprints, proporcionando actualizaciones regulares y demos para asegurar que el proyecto se mantenga en el camino correcto y alineado con tu visión."
    },
    {
      question: "¿Quién es propietario del código fuente y la propiedad intelectual?",
      answer: "Tú eres el propietario. Al completar el pago final y la finalización del proyecto, recibes la propiedad completa del código fuente y todos los derechos de propiedad intelectual del software personalizado que construimos para ti."
    },
    {
      question: "¿Proporcionan soporte y mantenimiento post-lanzamiento?",
      answer: "Sí, ofrecemos varios paquetes de soporte y mantenimiento para asegurar que tu aplicación funcione sin problemas después del lanzamiento. Esto puede incluir corrección de errores, monitoreo de rendimiento, actualizaciones de seguridad y mejoras de características."
    },
    {
      question: "¿Pueden integrar el nuevo software con nuestros sistemas existentes?",
      answer: "Absolutamente. La integración perfecta es una de nuestras especialidades. Analizamos tu infraestructura actual y diseñamos soluciones que se comunican efectivamente con tus herramientas y sistemas existentes, minimizando la interrupción de tus operaciones."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas Frecuentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
  );
};

export default SoftwareFAQ;
