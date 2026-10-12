import { pricing, usd } from "./pricing";
import { CheckList, container, line, SectionHeader, textMuted } from "./ui";

const stages = [
  {
    name: "Diagnóstico sin costo",
    what: "Revisamos el proceso contigo y te decimos si conviene automatizarlo.",
    price: usd(pricing.diagnostic),
  },
  {
    name: "Documentación y alcance",
    what: "Documentamos el proceso con sus excepciones y los sistemas que toca. Alcance y precio quedan por escrito.",
    price: "Incluido en el proyecto",
    soft: true,
  },
  {
    name: "Desarrollo y marcha blanca",
    what: "Construimos el robot con un usuario dedicado y lo probamos con datos reales. Durante la marcha blanca te acompañamos.",
    price: usd(pricing.rpaAverage),
    priceNote: "en promedio",
  },
  {
    name: "Soporte y monitoreo",
    what: "Si lo necesitas, seguimos a cargo del robot con soporte mensual y monitoreo en producción.",
    pricePrefix: "desde",
    price: usd(pricing.supportFrom),
    priceNote: "al mes, opcional",
  },
];

const principles = [
  {
    title: "Precio claro antes de empezar",
    text: "El diagnóstico no se cobra. Después cerramos alcance y precio por escrito, y publicamos cuánto cuesta un proyecto típico.",
  },
  {
    title: "Robots que se pueden mantener",
    text: "Documentamos cada proceso antes de construir y ofrecemos soporte y monitoreo opcionales después de la entrega.",
  },
];

const accessPractices = [
  "Cada robot trabaja con un usuario propio y solo con los permisos que el proceso necesita.",
  "El token o la clave dinámica del banco se resuelve con el banco y con tu equipo de TI, con permisos de solo consulta cuando bastan.",
  "Si tus políticas lo exigen, el robot corre en servidores de tu empresa, sin exponer datos a la nube.",
  "Cada ejecución queda registrada y el robot avisa cuando algo falla.",
  "Revisamos qué datos personales quedan en registros y capturas, como pide la Ley 21.719.",
  "Los agentes de IA usan servicios empresariales, como Claude por API o modelos alojados en Azure, cuyas condiciones comerciales no usan tus datos para entrenar modelos.",
];

function StagePrice({ stage }) {
  if (stage.soft) {
    return <span className={`text-[15px] font-bold ${textMuted}`}>{stage.price}</span>;
  }
  return (
    <span className="inline-block text-right">
      <span className="whitespace-nowrap">
        {stage.pricePrefix && <span className={`mr-1 text-sm ${textMuted}`}>{stage.pricePrefix}</span>}
        <span className="text-xl font-bold tabular-nums text-accent">{stage.price}</span>
      </span>
      {stage.priceNote && <span className={`block text-sm ${textMuted}`}>{stage.priceNote}</span>}
    </span>
  );
}

export default function HowWeWork() {
  return (
    <section
      id="como-trabajamos"
      aria-labelledby="como-trabajamos-titulo"
      className="scroll-mt-16 bg-[#F4F7F9] py-16 text-[#0A2540] md:py-24"
    >
      <div className={container}>
        <SectionHeader
          titleId="como-trabajamos-titulo"
          eyebrow="Cómo trabajamos"
          title="Qué pagas en cada etapa"
          body="Cada etapa tiene su precio y decides en cada paso si sigues."
        />

        <div className={`mt-12 overflow-hidden rounded-xl border ${line} bg-white`}>
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Etapas del proyecto y precio de cada una</caption>
            <thead className={`hidden border-b ${line} bg-[#F4F7F9] md:table-header-group`}>
              <tr>
                <th scope="col" className={`w-[26%] px-6 text-left py-3 text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>
                  Etapa
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>
                  Qué hacemos
                </th>
                <th scope="col" className={`w-[22%] px-6 py-3 text-right text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>
                  Precio
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${line}`}>
              {stages.map((stage) => (
                <tr
                  key={stage.name}
                  className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2 px-5 py-5 md:table-row md:p-0"
                >
                  <th scope="row" className="order-1 text-left text-base font-bold leading-6 md:px-6 md:py-5 md:align-top">
                    {stage.name}
                  </th>
                  <td className={`order-3 col-span-2 text-[15px] leading-6 md:px-6 md:py-5 md:align-top ${textMuted}`}>
                    {stage.what}
                  </td>
                  <td className="order-2 text-right md:px-6 md:py-5 md:align-top">
                    <StagePrice stage={stage} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-8 lg:col-span-5">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className={`mt-2 text-base leading-[26px] ${textMuted}`}>{p.text}</p>
              </div>
            ))}
          </div>

          <div className={`rounded-xl border ${line} bg-white p-6 md:p-8 lg:col-span-7`}>
            <h3 className="text-lg font-bold">Cómo cuidamos tus accesos al banco y al ERP</h3>
            <p className={`mt-1 text-sm ${textMuted}`}>Lo que hacemos hoy en cada proyecto</p>
            <CheckList items={accessPractices} className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
