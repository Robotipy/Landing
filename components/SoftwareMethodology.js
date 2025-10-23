const SoftwareMethodology = () => {
  const phases = [
    {
      icon: "search",
      title: "Fase 1: Descubrimiento",
      description: "Comenzamos entendiendo tus objetivos comerciales, audiencia objetivo y requisitos técnicos a través de talleres colaborativos y análisis profundo."
    },
    {
      icon: "design_services",
      title: "Fase 2: Diseño UX/UI",
      description: "Nuestro equipo crea wireframes intuitivos, mockups y prototipos para visualizar el recorrido del usuario y asegurar una experiencia fluida y atractiva."
    },
    {
      icon: "code",
      title: "Fase 3: Desarrollo Ágil",
      description: "Usamos un enfoque ágil, construyendo tu software en sprints iterativos. Esto permite flexibilidad, transparencia y retroalimentación continua durante todo el ciclo de desarrollo."
    },
    {
      icon: "bug_report",
      title: "Fase 4: Pruebas y QA",
      description: "Se realizan pruebas rigurosas en cada etapa para asegurar que el producto final sea seguro, libre de errores y funcione perfectamente en todos los dispositivos y plataformas."
    },
    {
      icon: "cloud_upload",
      title: "Fase 5: Despliegue y Soporte",
      description: "Gestionamos el proceso de despliegue de principio a fin y proporcionamos soporte y mantenimiento continuo para asegurar que tu software permanezca óptimo y actualizado."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Nuestra Metodología de Desarrollo
        </h2>
        
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          {phases.map((phase, index) => (
            <div key={index} className="contents">
              <div className="flex flex-col items-center gap-2 pt-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-500 py-2 text-white">
                  <span className="material-icons text-sm">
                    {phase.icon}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div className="w-[2px] bg-gray-300 dark:bg-gray-600 h-full grow"></div>
                )}
              </div>
              <div className="flex flex-1 flex-col pt-3 pb-8">
                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-normal mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareMethodology;
