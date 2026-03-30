import ProductFeatureCard from "./ProductFeatureCard";

const features = [
  {
    icon: "\u{1F4C5}",
    title: "Planificación de Recursos",
    description:
      "Visualiza la disponibilidad de tu equipo y asigna personas a proyectos sin sobrecargar a nadie.",
    link: "/projects/recursos",
  },
  {
    icon: "\u{1F465}",
    title: "Portal de Clientes",
    description:
      "Tus clientes ven el avance de sus proyectos en tiempo real. Sin WhatsApp, sin emails.",
    link: "/projects/portal-clientes",
  },
  {
    icon: "\u{1F4DD}",
    title: "Cotizador de Propuestas",
    description:
      "Crea propuestas profesionales y conviértelas en proyectos con un click.",
    link: "/projects/cotizador",
  },
  {
    icon: "\u{1F3AB}",
    title: "Mesa de Ayuda",
    description:
      "Gestiona el soporte post-entrega con tickets, SLAs y portal de clientes integrado.",
    link: "/projects/soporte",
  },
  {
    icon: "\u{1F4CA}",
    title: "Gantt y Timeline",
    description:
      "Planifica y visualiza tus proyectos con diagramas de Gantt interactivos.",
    link: null,
  },
  {
    icon: "\u{1F4C8}",
    title: "Dashboard y KPIs",
    description:
      "Métricas en tiempo real: rentabilidad, utilización, avance y más.",
    link: null,
  },
];

const ProjectsFeatures = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Todo lo que necesitas, nada que no
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Cada función diseñada para resolver problemas reales de consultoras.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <ProductFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatures;
