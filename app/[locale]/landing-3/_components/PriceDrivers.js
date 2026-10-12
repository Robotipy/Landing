import { pricing, usd } from "./pricing";
import { container, line, SectionHeader, textMuted } from "./ui";

const columns = [
  {
    title: "Lo que define el precio final",
    items: [
      "Cuántos sistemas toca el robot",
      "Cuántas excepciones tiene el proceso",
      "Qué tan documentado está hoy",
    ],
  },
  {
    title: "Lo que alarga el plazo",
    items: [
      "El acceso a los sistemas y el usuario dedicado para el robot",
      "La cantidad de excepciones",
      "El tiempo que toma validar las reglas de negocio con tu equipo",
    ],
  },
];

// Sistemas que aparecen en los casos de libs/successCases.js.
const systems =
  "SAP, Finnegans, Dynamics NAV, ERP Quality (Q-Biz), PMS hotelero, mainframe 3270, SII, la Agencia Tributaria de España y portales bancarios";

export default function PriceDrivers() {
  return (
    <section
      id="precio-y-plazo"
      aria-labelledby="precio-plazo-titulo"
      className="scroll-mt-16 bg-[#F4F7F9] py-16 text-[#0A2540] md:py-24"
    >
      <div className={container}>
        <SectionHeader
          titleId="precio-plazo-titulo"
          eyebrow="Por qué es un promedio"
          title="Qué sube el precio y qué alarga el plazo"
          body={`${usd(pricing.rpaAverage)} es el promedio de nuestros proyectos de RPA. Hay proyectos de menor valor y otros que cuestan más. Antes de firmar te mostramos qué mueve tu cotización.`}
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-lg font-bold">{col.title}</h3>
              <ul className={`mt-4 divide-y ${line} border-y ${line}`}>
                {col.items.map((item) => (
                  <li key={item} className="py-4 text-base leading-[26px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-10 rounded-r-xl border ${line} border-l-4 border-l-accent bg-white p-6 md:p-8`}>
          <h3 className="text-lg font-bold">Te decimos cuándo no conviene</h3>
          <p className={`mt-2 text-base leading-[26px] ${textMuted}`}>
            Si un proceso no se paga con RPA, lo decimos y proponemos otra salida: una API,
            desarrollo a medida o un agente de IA.
          </p>
        </div>

        <p className={`mt-8 text-[15px] leading-6 ${textMuted}`}>
          <span className="font-bold text-[#0A2540]">Sistemas que ya automatizamos: </span>
          {systems}.
        </p>
      </div>
    </section>
  );
}
