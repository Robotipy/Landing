import { getTranslations } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

const ROI_KEYWORDS = [
  "calculadora roi rpa",
  "estimador de costos rpa",
  "roi en rpa",
  "rpa days calculator",
  "cómo calcular roi automatización",
  "calculadora ahorro automatización",
  "calculadora roi automatización",
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "seo.pages.roiCalculator",
  });
  return getSEOTags({
    locale,
    ogLocale: locale === "es" ? "es_LA" : undefined,
    title: t("title"),
    description: t("description"),
    keywords: ROI_KEYWORDS,
    canonicalUrlRelative: "/roi-calculator",
  });
}

const buildJsonLd = async (locale) => {
  const t = await getTranslations({ locale, namespace: "roiCalculator" });
  const pageUrl = `${siteOrigin}/${locale}/roi-calculator`;
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de ROI de automatización",
    url: pageUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Calculadora gratuita para estimar el ahorro, payback, ROI y VPN de automatizar un proceso con RPA, IA o desarrollo a medida.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("hero.title"), item: pageUrl },
    ],
  };
  const faqKeys = ["faq1", "faq2", "faq3", "faq4"];
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqKeys.map((key) => ({
      "@type": "Question",
      name: t(`faqs.${key}.q`),
      acceptedAnswer: { "@type": "Answer", text: t(`faqs.${key}.a`) },
    })),
  };
  return [webApp, breadcrumb, faq];
};

export default async function Layout({ children, params }) {
  const { locale } = await params;
  const jsonLdBlocks = await buildJsonLd(locale);
  return (
    <>
      {children}
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
