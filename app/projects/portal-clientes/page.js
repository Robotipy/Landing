import FeaturePageTemplate from "@/components/FeaturePageTemplate";

export default function PortalClientesPage() {
  return (
    <FeaturePageTemplate
      title="Transparencia que genera confianza con tus clientes"
      subtitle="Dale a cada cliente un portal donde puede ver el avance de sus proyectos, aprobar entregables y comunicarse con tu equipo."
      howItWorks={[
        {
          title: "Portal personalizado por cliente",
          description:
            "Cada cliente accede a su propio espacio donde ve solo sus proyectos, avance, documentos y comunicaciones.",
        },
        {
          title: "Actualizaciones en tiempo real",
          description:
            "Los clientes ven el progreso del proyecto actualizado automáticamente. Sin necesidad de enviar reportes manuales.",
        },
        {
          title: "Aprobación de entregables",
          description:
            "Los clientes aprueban o solicitan cambios directamente en el portal. Todo queda documentado con fechas y comentarios.",
        },
        {
          title: "Comunicación centralizada",
          description:
            "Reemplaza los hilos de WhatsApp y email por una comunicación organizada por proyecto y entregable.",
        },
      ]}
      problemTitle="El problema que resuelve"
      problemDescription='Cada semana recibes el mismo mensaje: "¿Cómo va mi proyecto?". Respondes por WhatsApp, buscas la información en distintos lugares, armas un resumen y lo envías. Al día siguiente, otro cliente pregunta lo mismo. El portal de clientes elimina este ciclo. Tus clientes tienen acceso directo a la información que necesitan, cuando la necesitan. El resultado: menos interrupciones para tu equipo, más confianza del cliente y una imagen profesional que te diferencia de la competencia.'
    />
  );
}
