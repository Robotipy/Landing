const ProcessSection = () => {
  const steps = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      ),
      title: "1. Descubrimiento",
      description: "Trabajamos contigo para identificar las mejores oportunidades de automatización dentro de tus flujos de trabajo actuales, asegurando el máximo impacto."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "2. Desarrollo",
      description: "Nuestros expertos diseñan y construyen soluciones de automatización robustas adaptadas a tus necesidades específicas, utilizando herramientas líderes en la industria."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "3. Despliegue",
      description: "Desplegamos la solución de manera fluida en tu entorno y proporcionamos capacitación integral y soporte a tu equipo."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-[720px] mx-auto text-center mb-12">
        <h1 className="text-primary dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
          Nuestro Proceso Probado
        </h1>
        <p className="text-text-light dark:text-text-dark text-lg mt-2 px-3">
          Desde el concepto hasta la finalización, hacemos que la automatización sea simple.
        </p>
      </div>
      <div className="flex flex-col gap-8 px-4 max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center size-12 rounded-full bg-accent/10 text-accent">
                {step.icon}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-8 bg-slate-300 dark:bg-slate-600 mt-4"></div>
              )}
            </div>
            <div className="flex flex-1 flex-col">
              <p className="text-primary dark:text-white text-xl font-bold leading-normal">{step.title}</p>
              <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
