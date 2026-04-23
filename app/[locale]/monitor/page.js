import { Suspense } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProductCTA from "@/components/ProductCTA";

const featureIcons = {
  alerts: "\u{1F6A8}",
  dashboard: "\u{1F4CA}",
  logs: "\u{1F4DD}",
  history: "\u{23F0}",
};
const featureKeys = ["alerts", "dashboard", "logs", "history"];

export default function MonitorPage() {
  const t = useTranslations("productsMonitor");

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <ProductHero
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
          ctaText={t("hero.ctaText")}
          ctaLink="https://monitor.robotipy.dev"
        />

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t("features.heading")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featureKeys.map((key) => (
                <div
                  key={key}
                  className="flex gap-4 rounded-xl p-6"
                  style={{ backgroundColor: "#11222c" }}
                >
                  <div className="text-3xl flex-shrink-0">
                    {featureIcons[key]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t(`features.items.${key}.title`)}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t(`features.items.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {t("origin.heading")}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("origin.paragraph")}
            </p>
          </div>
        </section>

        <ProductCTA
          title={t("cta.title")}
          subtitle={t("cta.subtitle")}
          ctaText={t("cta.ctaText")}
          ctaLink="https://monitor.robotipy.dev"
        />
      </main>
      <Footer />
    </>
  );
}
