import { useTranslations } from "next-intl";
import ProductFeatureShowcase from "./ProductFeatureShowcase";

const featureImages = {
  resourcePlanning: "/projects/planificador.png",
  ganttTimeline: "/projects/proyecto-cliente.png",
  helpDesk: "/projects/soporte.png",
  dashboardKpis: "/projects/home.png",
  licenses: "/projects/licencias.png",
};
const featureLinks = {
  resourcePlanning: "/projects/recursos",
  ganttTimeline: null,
  helpDesk: "/projects/soporte",
  dashboardKpis: null,
  licenses: null,
};
const featurePositions = {
  resourcePlanning: "right",
  ganttTimeline: "left",
  helpDesk: "right",
  dashboardKpis: "left",
  licenses: "right",
};
const featureKeys = [
  "resourcePlanning",
  "ganttTimeline",
  "helpDesk",
  "dashboardKpis",
  "licenses",
];

const ProjectsFeatures = () => {
  const t = useTranslations("productsProjects.features");

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-white/70">{t("subtitle")}</p>
        </div>

        <div className="space-y-16">
          {featureKeys.map((key) => (
            <ProductFeatureShowcase
              key={key}
              image={featureImages[key]}
              alt={t(`items.${key}.alt`)}
              title={t(`items.${key}.title`)}
              description={t(`items.${key}.description`)}
              position={featurePositions[key]}
              link={featureLinks[key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatures;
