"use client";
import { useState } from "react";

const ChatbotFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué tan seguros están mis datos?",
      answer: "La seguridad es nuestra máxima prioridad. Las conversaciones son encriptadas y cumplimos con los estándares de seguridad líderes en la industria para asegurar que tus datos estén siempre protegidos."
    },
    {
      question: "Mis datos son usados para entrenar la IA?",
      answer: "No. Utilizamos modelos almacenados en Azure y el entrenamiento es realizado por nuestros expertos en IA."
    },
    {
      question: "¿Qué tipo de datos se pueden consultar?",
      answer: "El chatbot puede aprender de PDFs, base de datos, tickets de soporte, websites, entre otras fuentes de información."
    },
    {
      question: "¿Qué pasa si el chatbot no conoce la respuesta?",
      answer: "Nuestros chatbots están diseñados para escalar perfectamente consultas complejas a un agente humano cuando sea necesario, asegurando que tus clientes siempre reciban la ayuda que necesitan."
    },
    {
      question: "¿Con qué plataformas se integran?",
      answer: "Ofrecemos capacidades de integración extensas con sistemas ERP principales como SAP, Oracle y Microsoft Dynamics, así como varias plataformas CRM y de comercio electrónico."
    },
    {
      question: "¿Cuánto tiempo toma implementar un chatbot?",
      answer: "El tiempo de implementación varía según la complejidad, pero típicamente completamos proyectos en 2-4 semanas, desde el descubrimiento inicial hasta el lanzamiento completo."
    },
    {
      question: "¿Puedo personalizar las respuestas del chatbot?",
      answer: "Absolutamente. Nuestros chatbots se entrenan específicamente con tus datos y terminología empresarial para proporcionar respuestas precisas y consistentes con tu marca."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Respuestas a las preguntas más comunes sobre nuestros chatbots inteligentes
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
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

export default ChatbotFAQ;
