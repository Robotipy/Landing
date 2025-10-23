"use client";
import { useState } from "react";

const TrainingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Necesito experiencia en programación para el track de desarrollador ciudadano?",
      answer: "¡No, para nada! Nuestra capacitación para equipos empresariales está diseñada para no programadores. Nos enfocamos en plataformas de bajo código/sin código que te permiten construir automatizaciones usando una interfaz visual. Solo necesitas saber usar Excel y tener un poco de curiosidad para aprender."
    },
    {
      question: "¿Qué tecnologías específicas enseñan en el track técnico?",
      answer: "Nuestras especializaciones técnicas cubren herramientas RPA líderes como Rocketbot y Power Automate, junto con Python y Node.js para IA y machine learning. Nos enfocamos en la aplicación práctica e integración con sistemas empresariales."
    },
    {
      question: "¿Cuál es el formato de los cursos?",
      answer: "Las clases son por videollamada o presenciales según se acuerde. Además, tendrás acceso a recursos bajo demanda y un foro comunitario para apoyo entre pares."
    },
    {
      question: "¿Puedo obtener una certificación?",
      answer: "Actualmente no contamos con una certificación propia, pero durante nuestras capacitaciones tendrás la posibilidad de prepararte y obtener la certificación oficial de Rocketbot hasta el nivel 2.",
    },
    {
      question: "¿Cuánto tiempo duran los cursos?",
      answer: "La duración varía según el programa. Los cursos para desarrolladores ciudadanos típicamente duran 4-6 semanas, mientras que las especializaciones técnicas pueden extenderse de 8-12 semanas. Todos las clases tienen una duración de 1 hora pero puede variar según necesidad."
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
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
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

export default TrainingFAQ;
