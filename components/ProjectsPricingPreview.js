import Link from "next/link";
import { useTranslations } from "next-intl";

const freelancerFeatureKeys = ["users", "clients", "projects", "clientPortal"];
const studioFeatureKeys = [
  "users",
  "everythingFromFreelancer",
  "resources",
  "integrations",
];

const ProjectsPricingPreview = () => {
  const t = useTranslations("productsProjects.pricingPreview");

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-white/70">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div
            className="rounded-xl p-8 text-center"
            style={{ backgroundColor: "#11222c" }}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {t("plans.freelancer.name")}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("plans.freelancer.tagline")}
            </p>
            <ul className="text-gray-300 text-sm space-y-2 text-left mb-6">
              {freelancerFeatureKeys.map((key) => (
                <li key={key}>
                  &#10003; {t(`plans.freelancer.features.${key}`)}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-xl p-8 text-center border border-accent/30"
            style={{ backgroundColor: "#11222c" }}
          >
            <h3 className="text-xl font-bold text-white mb-2">
              {t("plans.studio.name")}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("plans.studio.tagline")}
            </p>
            <ul className="text-gray-300 text-sm space-y-2 text-left mb-6">
              {studioFeatureKeys.map((key) => (
                <li key={key}>&#10003; {t(`plans.studio.features.${key}`)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects/pricing"
            className="text-accent hover:underline font-bold text-lg"
          >
            {t("ctaText")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPricingPreview;
