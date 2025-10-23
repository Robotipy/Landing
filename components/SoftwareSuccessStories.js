const SoftwareSuccessStories = () => {
  const stories = [
    {
      title: "Gestión Automatizada de Inventario",
      description: "Desarrollamos un sistema personalizado que automatizó el seguimiento de stock y pedidos, reduciendo errores manuales y ahorrando tiempo.",
      metric: "40%",
      metricDescription: "Aumento en Eficiencia",
      logo: "📦"
    },
    {
      title: "Portal de Relaciones con Clientes",
      description: "Construimos un portal seguro para clientes de una firma de servicios financieros, mejorando la comunicación y acceso a datos para sus clientes.",
      metric: "30%",
      metricDescription: "Mayor Satisfacción del Cliente",
      logo: "🏦"
    },
    {
      title: "App Móvil para Agentes de Campo",
      description: "Creamos una aplicación móvil multiplataforma para entrada de datos en tiempo real y reportes, empoderando a los agentes de campo en movimiento.",
      metric: "2x",
      metricDescription: "Recolección de Datos Más Rápida",
      logo: "📱"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Historias de Éxito
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="text-4xl mb-6">
                {story.logo}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {story.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                {story.description}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {story.metric}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {story.metricDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSuccessStories;
