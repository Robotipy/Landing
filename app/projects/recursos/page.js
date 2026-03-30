import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export default function RecursosPage() {
  return (
    <FeaturePageTemplate
      title="Nunca más pierdas un proyecto por no saber quién está libre"
      subtitle="Visualiza la disponibilidad real de tu equipo y toma decisiones de asignación basadas en datos, no en suposiciones."
      howItWorks={[
        {
          title: "Vista de capacidad del equipo",
          description:
            "Ve la carga de trabajo de cada miembro del equipo en un timeline visual. Identifica quién tiene disponibilidad y quién está al límite.",
        },
        {
          title: "Asignación inteligente",
          description:
            "Asigna personas a proyectos considerando sus habilidades, disponibilidad y carga actual. Evita la sobreasignación automáticamente.",
        },
        {
          title: "Planificación a futuro",
          description:
            "Proyecta la demanda de recursos a 30, 60 y 90 días. Anticipa cuellos de botella antes de que se conviertan en problemas.",
        },
        {
          title: "Alertas de capacidad",
          description:
            "Recibe notificaciones cuando un recurso está sobreasignado o cuando hay capacidad ociosa que podrías aprovechar.",
        },
      ]}
      problemTitle="El problema que resuelve"
      problemDescription="En una consultora, el recurso más valioso es el tiempo de tu equipo. Sin visibilidad de la capacidad real, terminas rechazando proyectos porque 'todos están ocupados' o aceptando proyectos sin saber que ya estás al límite. El resultado: burnout, entregas tarde y clientes insatisfechos. La planificación de recursos te da el control que necesitas para crecer sin caos."
    />
  );
}
