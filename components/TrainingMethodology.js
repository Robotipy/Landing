const TrainingMethodology = () => {
  const methodologies = [
    {
      icon: "lightbulb",
      title: "Aprendizaje Práctico",
      description:
        "Proyectos prácticos y escenarios del mundo real para asegurar que puedas aplicar lo que aprendes.",
    },
    {
      icon: "school",
      title: "Instructores Expertos",
      description:
        "Aprende de expertos de la industria con años de experiencia en IA y automatización.",
    },
    {
      icon: "schedule",
      title: "Flexibilidad",
      description:
        "Cursos en línea y en vivo para adaptarse al horario y ritmo de aprendizaje de tu equipo.",
    },
    {
      icon: "verified",
      title: "Certificación Reconocida",
      description:
        "Te preparamos para que puedas certificarte en la herramienta que elijas, brindándote los conocimientos y habilidades necesarios.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Nuestra Metodología de Aprendizaje
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {methodologies.map((methodology, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <span className="material-icons text-success">
                  {methodology.icon}
                </span>
                <h3 className="text-lg font-bold text-white mb-4">
                  {methodology.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {methodology.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingMethodology;
