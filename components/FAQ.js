"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "¿Cuánto cuesta desarrollar un software a medida o un bot RPA?",
    answer: <div className="space-y-2 leading-relaxed">
      El costo varía según la complejidad del proceso. Para RPA, los proyectos suelen partir desde soluciones rápidas de implementación (semanas) hasta orquestaciones complejas. Agendamos una llamada de descubrimiento gratuita para evaluar tu caso y entregarte un presupuesto exacto y el ROI estimado antes de comenzar.
    </div>,
  },
  {
    question: "¿Es seguro integrar robots en nuestros sistemas bancarios o internos?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Absolutamente. La seguridad es nuestra prioridad. Trabajamos bajo estándares bancarios y nuestras implementaciones de RPA (con Rocketbot o Python) no requieren modificar sus sistemas actuales; interactúan a nivel de interfaz de usuario o API segura, manteniendo la integridad de sus datos y cumpliendo con normativas de compliance.
      </div>
    ),
  },
  {
    question: "¿Qué pasa si el software o el bot falla después de la entrega?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Ofrecemos un periodo de garantía post-implementación donde corregimos cualquier error derivado del desarrollo sin costo adicional. Además, ofrecemos planes de soporte y mantenimiento (SLA) para asegurar que tus automatizaciones sigan operando 24/7 ante cambios en tus sistemas o actualizaciones de terceros.
      </div>
    ),
  },
  {
    question: "¿Trabajan con empresas fuera de Chile?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Sí. Actualmente brindamos servicios de desarrollo de software y RPA a empresas en <strong>Chile, Argentina, Perú, España y resto de Latinoamérica</strong>. Nuestro equipo trabaja de forma remota y eficiente, coordinando con tu zona horaria.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
