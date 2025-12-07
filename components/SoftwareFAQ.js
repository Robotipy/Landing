"use client";
import { useState } from "react";

const SoftwareFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto cuesta desarrollar un software a medida o un bot RPA?",
      answer: "El costo depende del alcance. Desarrollamos desde scripts de automatización RPA rápidos (RPA con Python o Rocketbot) hasta sistemas empresariales complejos. Tras una fase de descubrimiento gratuita, te entregamos un presupuesto detallado y un cálculo del ROI estimado."
    },
    {
      question: "¿Es seguro integrar robots con nuestros sistemas bancarios o ERP?",
      answer: "Absolutamente. La seguridad es nuestra prioridad. Nuestras soluciones de automatización y software interactúan de forma segura (encriptación TLS, manejo de credenciales) con sistemas como SAP, Salesforce o portales bancarios, sin comprometer la integridad de tus datos ni el compliance."
    },
    {
      question: "¿Quién es propietario del código fuente y la propiedad intelectual?",
      answer: "Tú eres el propietario. A diferencia de las soluciones SaaS cerradas, en Robotipy entregamos la propiedad completa del código fuente y los derechos intelectuales del software o bots que construimos para tu empresa al finalizar el proyecto."
    },
    {
      question: "¿Brindan servicios fuera de Chile?",
      answer: "Sí. Trabajamos de forma remota con empresas líderes en Chile, Argentina, Perú y España. Nuestro equipo se adapta a tu zona horaria para reuniones de seguimiento (Sprints) y soporte continuo."
    },
    {
      question: "¿Pueden integrar el nuevo software con nuestros sistemas legacy?",
      answer: "Es nuestra especialidad. Diseñamos APIs y conectores RPA para que tu nuevo software moderno se comunique fluidamente con infraestructura antigua o herramientas de terceros, extendiendo la vida útil de tus sistemas actuales."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Resolvemos tus dudas sobre desarrollo de software, seguridad en automatización y nuestros procesos de trabajo en Latinoamérica.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
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
