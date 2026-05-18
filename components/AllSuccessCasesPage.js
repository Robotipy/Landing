import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SuccessCaseCard from "@/components/SuccessCaseCard";
import { Link } from "@/i18n/routing";
import config from "@/config";
import { industries, successCases } from "@/libs/successCases";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

const buildJsonLd = (locale, pagePath, pageTitle, pageDescription) => {
  const pageUrl = `${siteOrigin}/${locale}${pagePath}`;
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Robotipy",
      url: siteOrigin,
    },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/${locale}` },
      { "@type": "ListItem", position: 2, name: pageTitle, item: pageUrl },
    ],
  };
  return [collection, breadcrumb];
};

export default async function AllSuccessCasesPage({ locale, pagePath }) {
  const t = await getTranslations({ locale, namespace: "successCases" });
  const tCases = await getTranslations({
    locale,
    namespace: "header.dropdowns.cases",
  });

  const groups = industries
    .map((ind) => ({
      ...ind,
      label: tCases(`${ind.key}.label`),
      cases: successCases.filter((c) => c.categoria === ind.slug),
    }))
    .filter((g) => g.cases.length > 0);

  const jsonLdBlocks = buildJsonLd(
    locale,
    pagePath,
    t("hero.title"),
    t("hero.subtitle")
  );

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="min-h-screen bg-gray-900">
        <section
          className="py-16 lg:py-28"
          style={{
            backgroundImage: "url('/assets/banners/agricola.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-primary/40 py-10 rounded-lg text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg lg:text-xl max-w-3xl mx-auto font-medium">
              {t("hero.subtitle")}
            </p>
          </div>
        </section>

        <section className="py-10 lg:py-12 bg-gray-900 sticky top-0 z-10 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-300 text-sm uppercase tracking-wider mb-3 text-center">
              {t("jumpTo")}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {groups.map((g) => (
                <a
                  key={g.slug}
                  href={`#${g.slug}`}
                  className="px-4 py-2 bg-gray-800 hover:bg-teal-700 text-white rounded-full text-sm transition-colors"
                >
                  {g.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {groups.map((g) => (
          <section
            key={g.slug}
            id={g.slug}
            className="py-16 lg:py-20 scroll-mt-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  {g.label}
                </h2>
                <Link
                  href={`/casos-exito/${g.slug}`}
                  className="text-teal-400 hover:text-teal-300 text-sm font-semibold"
                >
                  {t("viewIndustry")} →
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
                {g.cases.map((caseStudy) => (
                  <SuccessCaseCard
                    key={caseStudy.id}
                    caseStudy={caseStudy}
                    showIndustryLink={true}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-gray-300 mb-8">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
              >
                {t("cta.primary")}
              </Link>
              <Link
                href="/roi-calculator"
                className="px-8 py-4 border-2 border-teal-600 text-teal-400 font-semibold rounded-lg hover:bg-teal-600/10 transition-colors"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {jsonLdBlocks.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
