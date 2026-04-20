import ProductFeatureShowcase from "./ProductFeatureShowcase";

const showcaseFeatures = [
  {
    image: "/projects/planificador.png",
    alt: "Vista del planificador de recursos mostrando disponibilidad del equipo",
    title: "Planificación de Recursos",
    description:
      "Visualiza la disponibilidad de tu equipo y asigna personas a proyectos sin sobrecargar a nadie.",
    link: "/projects/recursos",
    position: "right",
  },
  {
    image: "/projects/proyecto-cliente.png",
    alt: "Gantt y Timeline con vista de avance del proyecto",
    title: "Gantt y Timeline",
    description:
      "Planifica y visualiza tus proyectos con diagramas de Gantt interactivos. Tus clientes ven el avance en tiempo real.",
    link: null,
    position: "left",
  },
  {
    image: "/projects/soporte.png",
    alt: "Mesa de ayuda con tickets y gestión de SLAs",
    title: "Mesa de Ayuda",
    description:
      "Gestiona el soporte post-entrega con tickets, SLAs y portal de clientes integrado.",
    link: "/projects/soporte",
    position: "right",
  },
  {
    image: "/projects/home.png",
    alt: "Dashboard principal con KPIs y métricas en tiempo real",
    title: "Dashboard y KPIs",
    description:
      "Métricas en tiempo real: rentabilidad, utilización, avance y más.",
    link: null,
    position: "left",
  },
  {
    image: "/projects/licencias.png",
    alt: "Gestión centralizada de licencias y activos digitales",
    title: "Gestión de Licencias y Activos",
    description:
      "Gestiona de forma centralizada las licencias, dominios y activos digitales de tus clientes.",
    link: null,
    position: "right",
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

        <div className="space-y-16">
          {showcaseFeatures.map((feature, index) => (
            <ProductFeatureShowcase
              key={index}
              image={feature.image}
              alt={feature.alt}
              title={feature.title}
              description={feature.description}
              position={feature.position}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatures;
