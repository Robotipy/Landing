import Link from "next/link";

const casosDeExito = [
  {
    id: "mineria-costos",
    industry: "Minería del Cobre",
    country: "Chile",
    title: "RPA + Agente IA para reportes de costos",
    challenge:
      "Reportes semanales de costos desde SAP tomaban horas y dependían de una sola persona. Si ella no estaba, el reporte no se hacía.",
    keyResult: "Acceso 24/7 a datos de costos vía agente IA",
    insight:
      "No automatices el envío de reportes, automatiza el acceso a la información.",
    technologies: ["Rocketbot", "SAP", "Python", "IA", "Excel", "PowerPoint"],
    link: "/blog/caso-exito-rpa-ia-mineria-costos",
    accentColor: "#F59E0B",
  },
  {
    id: "siderurgia-sap",
    industry: "Siderurgia",
    country: "Chile",
    title: "Automatización de órdenes SAP",
    challenge:
      "Tres sistemas desconectados (HubSpot, SAP, Cencosud) con ingreso manual de datos propenso a errores de transcripción.",
    keyResult: "Cero errores de transcripción entre 3 sistemas",
    insight:
      "RPA puede conectar sistemas en semanas, no meses, sin tocar las APIs de ninguno.",
    technologies: ["Rocketbot", "SAP", "HubSpot", "OCR", "Excel"],
    link: "/blog/caso-exito-automatizacion-ordenes-sap-siderurgia",
    accentColor: "#6366F1",
  },
  {
    id: "agronegocios-mercado",
    industry: "Agronegocios",
    country: "Argentina",
    title: "Inteligencia de mercado automatizada",
    challenge:
      "Monitoreo diario de precios de commodities, tasas bancarias y datos macro de 10+ fuentes públicas de forma manual.",
    keyResult: "10+ fuentes consolidadas en 10-20 minutos",
    insight:
      "El bot no reemplazó al analista, le dio la materia prima para que haga su trabajo real: pensar.",
    technologies: ["Rocketbot", "Python", "Web Scraping", "Excel", "Google Drive"],
    link: "/blog/caso-exito-inteligencia-mercado-agronegocios",
    accentColor: "#10B981",
  },
  {
    id: "agroindustria-finanzas",
    industry: "Agroindustria",
    country: "Chile",
    title: "Automatización financiera multi-entidad",
    challenge:
      "Conciliaciones bancarias y revisión de facturas manuales entre múltiples bancos y sistemas contables.",
    keyResult: "Detección temprana de discrepancias antes de pago",
    insight:
      "Una vez que funciona para una unidad de negocio, replicarlo a las demás es configuración, no desarrollo.",
    technologies: ["Rocketbot", "Excel", "Portales bancarios"],
    link: "/blog/caso-exito-automatizacion-financiera-agroindustria",
    accentColor: "#3B82F6",
  },
  {
    id: "vitivinicola-factoring",
    industry: "Vitivinicultura",
    country: "Chile",
    title: "Cartolas bancarias y factoring automatizado",
    challenge:
      "Carga manual diaria de cartolas bancarias y gestión de factoring en múltiples monedas por operaciones de exportación.",
    keyResult: "De horas diarias a minutos automatizados",
    insight:
      "Cada día de retraso en una cesión de factoring tiene costo financiero real.",
    technologies: ["Rocketbot", "Portales bancarios", "Excel"],
    link: "/blog/caso-exito-cartolas-factoring-vitivinicola",
    accentColor: "#8B5CF6",
  },
  {
    id: "agropecuario-conciliacion",
    industry: "Agropecuario",
    country: "Argentina",
    title: "Conciliación bancaria multi-banco con ERP",
    challenge:
      "Conciliación manual entre múltiples bancos (Córdoba, Galicia) y ERP Finnegans con operaciones dispersas geográficamente.",
    keyResult: "1 robot conectando 3 bancos con 1 ERP",
    insight:
      "Un solo robot hace el trabajo de lo que antes requería una persona dedicada.",
    technologies: ["Rocketbot", "Finnegans", "Python", "AnyDesk"],
    link: "/blog/caso-exito-conciliacion-bancaria-agropecuario",
    accentColor: "#EC4899",
  },
];

const CasosDeExito = () => {
  return (
    <section className="py-20 md:py-28" id="casos-exito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Resultados reales
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Casos de Éxito
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Transformaciones concretas en empresas de Latinoamérica. Cada caso
            incluye el insight estratégico que lo hizo diferente.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {casosDeExito.map((caso) => (
            <Link
              key={caso.id}
              href={caso.link}
              className="group block"
            >
              <div className="h-full rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{ backgroundColor: "#11222c" }}
              >
                {/* Header: Industry + Country */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      color: caso.accentColor,
                      backgroundColor: `${caso.accentColor}20`,
                    }}
                  >
                    {caso.industry}
                  </span>
                  <span className="text-gray-500 text-sm">{caso.country}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {caso.title}
                </h3>

                {/* Challenge */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {caso.challenge}
                </p>

                {/* Key Result */}
                <div className="mb-5 p-3 rounded-lg bg-gray-800/50">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    Resultado clave
                  </div>
                  <div
                    className="font-bold text-lg"
                    style={{ color: caso.accentColor }}
                  >
                    {caso.keyResult}
                  </div>
                </div>

                {/* Insight */}
                <div className="border-l-2 border-cyan-400/50 pl-4 mb-5">
                  <p className="text-cyan-300/80 text-sm italic leading-relaxed">
                    &ldquo;{caso.insight}&rdquo;
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caso.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Ver caso completo
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-opacity-90 transition-colors"
          >
            Ver todos los artículos del blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CasosDeExito;
