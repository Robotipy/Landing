import { useTranslations } from "next-intl";

const ProjectsDifferentiator = () => {
  const t = useTranslations("productsProjects.differentiator");

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {t("heading")}
        </h2>
        <div
          className="rounded-xl p-8 lg:p-12"
          style={{ backgroundColor: "#11222c" }}
        >
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            {t.rich("paragraph1", {
              b: (chunks) => (
                <strong className="text-white">{chunks}</strong>
              ),
            })}
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            {t("paragraph2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDifferentiator;
