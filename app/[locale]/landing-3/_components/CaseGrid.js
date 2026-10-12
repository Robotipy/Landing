import { Link } from "@/i18n/routing";
import { routes } from "@/libs/landingFacts";
import { successCases } from "@/libs/successCases";
import { container, line, SectionHeader, textMuted } from "./ui";

// La cifra se lee de libs/successCases.js (results o la primera métrica).
// Aquí solo vive el texto de detalle, el sector y los sistemas de cada tarjeta.
const CASES = [
  {
    id: "hoteleria-1",
    detail: "Censo diario de ocupación en una cadena de tres hoteles.",
    sector: "Hotelería",
    systems: "PMS hotelero, Excel y SharePoint",
  },
  {
    id: "automotriz-5",
    detail: "Creación de materiales en SAP para unos 60 solicitantes en todo Chile, con respuesta automática a cada solicitud.",
    sector: "Flotas y alquiler de vehículos",
    systems: "SAP, correo y API de flota",
  },
  {
    id: "automotriz-3",
    detail: "Generación de órdenes de compra en SAP con envío al proveedor las 24 horas.",
    sector: "Alquiler de vehículos",
    systems: "SAP, Excel y correo",
  },
  {
    id: "alimentos-4",
    detail: "Descarga, carga y contabilización diaria en SAP de los extractos de seis bancos y del adquirente de tarjetas, con validación de cuadratura en cero.",
    sector: "Alimentos",
    systems: "SAP, portales bancarios y correo",
  },
  {
    id: "agricola-2",
    detail: "Conciliación de varios bancos argentinos contra Finnegans.",
    sector: "Agroindustria, Argentina",
    systems: "Finnegans, Excel y correo",
  },
  {
    id: "financiero-7",
    detail: "Conciliación bancaria diaria con IA. El OCR anterior acertaba cerca del 90% de los registros.",
    sector: "Cooperativa",
    systems: "Portales bancarios, modelo de IA y sistema contable",
  },
];

const cleanTime = (s) => s.replace(/\s*hr$/i, " h").trim();
const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

function figureFor(c) {
  if (c.results) {
    return {
      value: `De ${cleanTime(c.results.manualExecution)} a ${cleanTime(c.results.automatedExecution)}`,
      label: "tiempo del proceso, antes y después",
    };
  }
  const m = c.metrics?.[0];
  return m ? { value: m.value, label: lowerFirst(m.label) } : null;
}

export default function CaseGrid() {
  const cards = CASES.map((item) => {
    const data = successCases.find((c) => c.id === item.id);
    const figure = data && figureFor(data);
    return figure ? { ...item, figure } : null;
  }).filter(Boolean);

  return (
    <section
      id="casos"
      aria-labelledby="casos-titulo"
      className={`scroll-mt-16 border-t ${line} bg-white py-16 text-[#0A2540] md:py-24`}
    >
      <div className={container}>
        <SectionHeader
          titleId="casos-titulo"
          eyebrow="Casos"
          title={cards.length === 6 ? "Seis procesos que ya automatizamos" : "Procesos que ya automatizamos"}
          body="Por ahora mostramos solo el sector. El nombre de cada cliente aparece cuando tengamos su autorización."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.id} className={`flex flex-col rounded-xl border ${line} bg-white p-6`}>
              <p className="text-[30px] font-bold leading-tight tabular-nums text-[#00182B] sm:text-[36px]">
                {card.figure.value}
              </p>
              <p className={`mt-1 text-sm ${textMuted}`}>{card.figure.label}</p>
              <p className="mt-4 text-base leading-[26px]">{card.detail}</p>
              <div className="mt-auto pt-5">
                <p className={`border-t ${line} pt-4 text-sm leading-5 ${textMuted}`}>
                  <span className="font-bold text-[#0A2540]">{card.sector}.</span> {card.systems}.
                </p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href={routes.cases}
          className="mt-10 inline-block text-[15px] font-bold underline decoration-accent decoration-2 underline-offset-4 hover:decoration-[#0A2540]"
        >
          Ver todos los casos
        </Link>
      </div>
    </section>
  );
}
