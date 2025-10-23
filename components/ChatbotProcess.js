const ChatbotProcess = () => {
  const processSteps = [
    {
      icon: "search",
      title: "Paso 1: Descubrimiento & Estrategia",
      description: "Trabajamos contigo para entender tus desafíos únicos y objetivos."
    },
    {
      icon: "architecture", 
      title: "Paso 2: Diseño de Arquitectura",
      description: "Diseñamos una arquitectura de chatbot robusta y escalable adaptada a tus necesidades."
    },
    {
      icon: "security",
      title: "Paso 3: Integración Segura",
      description: "Conectamos de forma segura el chatbot a tu ERP existente y sistemas de datos."
    },
    {
      icon: "model_training",
      title: "Paso 4: Entrenamiento Personalizado",
      description: "La IA es entrenada con tus datos específicos para proporcionar respuestas precisas y relevantes."
    },
    {
      icon: "rocket_launch",
      title: "Paso 5: Lanzamiento & Go-Live",
      description: "Desplegamos el chatbot y aseguramos un lanzamiento suave para tus equipos y clientes."
    },
    {
      icon: "trending_up",
      title: "Paso 6: Optimización & Soporte",
      description: "Monitoreamos continuamente el rendimiento y proporcionamos soporte continuo para asegurar el éxito."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Nuestro Proceso
        </h2>
        
        <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
          {processSteps.map((step, index) => (
            <div key={index} className="contents">
              <div className="flex flex-col items-center gap-2 pt-3">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 dark:bg-primary/20">
                  <span className="material-icons text-success">
                    {step.icon}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-[2px] bg-slate-200 dark:bg-slate-800 h-full grow"></div>
                )}
              </div>
              <div className="flex flex-1 flex-col pt-3 pb-8">
                <h3 className="text-slate-900 dark:text-white text-base font-medium leading-normal">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-white/60 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChatbotProcess;
