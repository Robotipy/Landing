import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.pages.about" });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/about",
  });
}

const principleIcons = ["🎯", "💡", "👁️"];
const processIcons = ["🔍", "🎨", "💻", "🚀"];
const teamImages = [
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
];
const teamKeys = ["alice", "bob", "charlie", "diana"];
const principleKeys = ["results", "innovation", "transparency"];
const processKeys = ["discovery", "design", "development", "deployment"];

const AboutPage = () => {
  const t = useTranslations("about");

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="bg-background-light dark:bg-background-dark">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] font-heading">
                      {t("hero.title")}
                    </h1>
                    <p className="text-slate-200 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                      {t("hero.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">
              {t("principles.title")}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
              {principleKeys.map((key, index) => (
                <div
                  key={key}
                  className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-background-dark p-4 flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary text-3xl">{principleIcons[index]}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-text-primary dark:text-text-primary-dark text-base font-bold leading-tight">
                      {t(`principles.items.${key}.title`)}
                    </h3>
                    <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">
                      {t(`principles.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">
              {t("team.title")}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-4">
              {teamKeys.map((key, index) => (
                <div key={key} className="flex flex-col gap-3 pb-3 group">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url("${teamImages[index]}")` }}
                  ></div>
                  <div>
                    <p className="text-text-primary dark:text-text-primary-dark text-base font-medium leading-normal">
                      {t(`team.members.${key}.name`)}
                    </p>
                    <p className="text-primary text-sm font-bold leading-normal">
                      {t(`team.members.${key}.role`)}
                    </p>
                    <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal mt-1">
                      {t(`team.members.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">
              {t("process.title")}
            </h2>
            <div className="relative p-4">
              <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gray-300 dark:bg-slate-700 hidden md:block"></div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {processKeys.map((key, index) => (
                  <div
                    key={key}
                    className={`flex items-start gap-4 ${
                      index % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                    }`}
                  >
                    <div className="flex-shrink-0 bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center text-xl z-10">
                      <span>{processIcons[index]}</span>
                    </div>
                    <div className={index % 2 === 1 ? "md:ml-auto" : ""}>
                      <h3 className="font-bold text-lg text-text-primary dark:text-text-primary-dark">
                        {t(`process.steps.${key}.title`)}
                      </h3>
                      <p className="text-text-light dark:text-text-dark mt-1">
                        {t(`process.steps.${key}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center py-16 px-4">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark font-heading">
                {t("cta.title")}
              </h2>
              <p className="text-text-light dark:text-text-dark mt-2 max-w-xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <button className="mt-6 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 mx-auto bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span>{t("cta.button")}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
