import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export default function SoportePage() {
  return (
    <FeaturePageTemplate
      title="El soporte post-entrega que tus clientes merecen"
      subtitle="Gestiona tickets de soporte, cumple SLAs y dale a tus clientes un canal profesional para reportar incidencias."
      howItWorks={[
        {
          title: "Portal de tickets para clientes",
          description:
            "Tus clientes crean tickets de soporte desde su portal. Sin emails, sin WhatsApp. Todo registrado y trazable.",
        },
        {
          title: "Gestión de SLAs",
          description:
            "Define tiempos de respuesta y resolución por tipo de ticket y cliente. El sistema alerta cuando un SLA está en riesgo.",
        },
        {
          title: "Asignación y escalamiento",
          description:
            "Asigna tickets automáticamente según tipo, prioridad o disponibilidad del equipo. Escala cuando sea necesario.",
        },
        {
          title: "Métricas de soporte",
          description:
            "Mide tiempos de respuesta, resolución, satisfacción del cliente y carga del equipo de soporte.",
        },
      ]}
      problemTitle="El problema que resuelve"
      problemDescription="Después de entregar un proyecto, el soporte se convierte en un caos. Los clientes escriben por WhatsApp, email o llaman directamente a los desarrolladores. No hay registro de qué se pidió, cuándo se resolvió ni cuánto tiempo tomó. La mesa de ayuda profesionaliza tu soporte post-entrega, mejora la satisfacción del cliente y te da datos para tomar decisiones sobre contratos de mantenimiento."
    />
  );
}
