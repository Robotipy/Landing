const problems = [
  {
    icon: "\u{1F4C9}",
    title: "Scope creep sin control",
    description:
      "Los proyectos crecen sin que nadie lo note hasta que el margen desaparece.",
  },
  {
    icon: "\u{1F9D1}\u200D\u{1F4BB}",
    title: "No sabes quién está libre",
    description:
      "Asignas personas a proyectos sin visibilidad real de su carga de trabajo.",
  },
  {
    icon: "\u{1F4CB}",
    title: "Propuestas en Excel",
    description:
      "Las cotizaciones se hacen en planillas que se pierden y no se conectan con los proyectos.",
  },
  {
    icon: "\u{1F4F1}",
    title: "Clientes preguntan por WhatsApp",
    description:
      '\"¿Cómo va mi proyecto?\" es la pregunta que más recibes, y nunca tienes la respuesta a mano.',
  },
];

const ProjectsProblem = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            ¿Tu consultora sufre de estos problemas?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Si gestionas una consultora de software o RPA, probablemente te
            identificas con esto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl p-6 transition-all duration-300"
              style={{ backgroundColor: "#11222c" }}
            >
              <div className="text-3xl flex-shrink-0">{problem.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsProblem;
