const ProblemSection = () => {
  const problems = [
    {
      icon: "payments",
      title: "Altos Costos Operacionales",
      description: "Las tareas repetitivas consumen tiempo valioso de los empleados y aumentan los gastos generales."
    },
    {
      icon: "cancel",
      title: "Errores de Entrada Manual de Datos",
      description: "El manejo manual de datos es propenso a errores que pueden costarte caro."
    },
    {
      icon: "mood_bad",
      title: "Agotamiento de Empleados",
      description: "El trabajo mundano y repetitivo lleva a la desmotivación y alta rotación de personal."
    },
    {
      icon: "hourglass_empty",
      title: "Ciclos de Proceso Lentos",
      description: "Los procesos manuales crean cuellos de botella, retrasando resultados críticos del negocio."
    }
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-16 @container">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-w-[720px] mx-auto text-center">
          <h1 className="text-white tracking-light text-4xl font-bold leading-tight">
            ¿Cansado de que los Procesos Manuales Te Retengan?
          </h1>
          <p className="text-text-dark text-lg font-normal leading-relaxed">
            Las tareas manuales y repetitivas son un drenaje de tus recursos y una barrera para el crecimiento. Introducen errores, ralentizan tus operaciones y previenen que tu equipo se enfoque en lo que realmente importa. Te ayudamos a liberarte de estas limitaciones.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 p-0">
        {problems.map((problem, index) => (
          <div 
            key={index}
            className="flex flex-1 gap-4 rounded-xl border border-slate-700 bg-background-secondary p-4 flex-col text-center items-center"
            
          >
            <div className="p-3">
              <span className="material-icons text-3xl text-white">{problem.icon}</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-white text-lg font-bold leading-tight">{problem.title}</h2>
              <p className="text-sm text-text-dark text-base font-normal leading-normal">{problem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSection;
