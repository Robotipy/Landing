import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export default function CotizadorPage() {
  return (
    <FeaturePageTemplate
      title="De la propuesta al proyecto sin copiar-pegar"
      subtitle="Crea propuestas profesionales con estimaciones detalladas y conviértelas en proyectos activos con un solo click."
      howItWorks={[
        {
          title: "Plantillas de propuesta",
          description:
            "Usa plantillas pre-armadas para distintos tipos de proyecto (RPA, desarrollo, consultoría). Personaliza y envía en minutos.",
        },
        {
          title: "Estimación detallada",
          description:
            "Desglosa el proyecto en fases, tareas y recursos. El cotizador calcula costos, márgenes y tiempos automáticamente.",
        },
        {
          title: "De propuesta a proyecto",
          description:
            "Cuando el cliente aprueba, convierte la propuesta en un proyecto con un click. Fases, tareas y asignaciones ya están listas.",
        },
        {
          title: "Historial de versiones",
          description:
            "Cada cambio en la propuesta queda registrado. Compara versiones y ve qué cambió entre la propuesta original y la final.",
        },
      ]}
      problemTitle="El problema que resuelve"
      problemDescription="Las propuestas se hacen en Excel, Word o Google Docs. Cada una empieza de cero o se copia de otra anterior (con datos que no se actualizan). Cuando el cliente aprueba, alguien tiene que crear el proyecto manualmente, re-ingresando toda la información. Este proceso no escala. Con el cotizador, la propuesta es el inicio del proyecto. Todo fluye sin fricciones y sin pérdida de información."
    />
  );
}
