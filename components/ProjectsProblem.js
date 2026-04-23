import { useTranslations } from "next-intl";

const problemIcons = {
  scopeCreep: "\u{1F4C9}",
  availability: "\u{1F9D1}‍\u{1F4BB}",
  excelProposals: "\u{1F4CB}",
  whatsappClients: "\u{1F4F1}",
};
const problemKeys = [
  "scopeCreep",
  "availability",
  "excelProposals",
  "whatsappClients",
];

const ProjectsProblem = () => {
  const t = useTranslations("productsProjects.problem");

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("heading")}
          </h2>
          <p className="mt-4 text-lg text-white/70">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemKeys.map((key) => (
            <div
              key={key}
              className="flex gap-4 rounded-xl p-6 transition-all duration-300"
              style={{ backgroundColor: "#11222c" }}
            >
              <div className="text-3xl flex-shrink-0">{problemIcons[key]}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsProblem;
