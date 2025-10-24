const SoftwareAdvantages = () => {
  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "100% Hecho a Medida",
      description: "Tu software está diseñado desde cero para coincidir exactamente con tus flujos de trabajo y requisitos."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Construido para Escalar",
      description: "Tu aplicación será diseñada para manejar el crecimiento, desde unos pocos usuarios hasta demanda a nivel empresarial."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Integración Perfecta",
      description: "Aseguramos que tu nuevo software se comunique perfectamente con tus herramientas y sistemas existentes."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Propiedad Intelectual Completa",
      description: "Eres propietario del código fuente y la propiedad intelectual del software que construimos para ti."
    }
  ];

  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            La Ventaja del Software Personalizado
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            El software genérico no se adapta a todos los negocios. Abordamos las limitaciones de las soluciones genéricas, sistemas heredados y desafíos de integración construyendo software personalizado que te da control total, aumenta la eficiencia y escala con tu crecimiento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 dark:bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-200 dark:border-gray-600">
                <div className="text-green-600 dark:text-green-400 mb-6 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareAdvantages;
