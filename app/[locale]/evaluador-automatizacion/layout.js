import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { PAGE_PATH, PAGE_TITLE, PAGE_DESCRIPTION, faqs } from "./data";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;
const pageUrl = `${siteOrigin}/es${PAGE_PATH}`;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getSEOTags({
    locale,
    availableLocales: ["es"],
    ogLocale: "es_LA",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "qué procesos se pueden automatizar",
      "evaluador de automatización",
      "test automatización de procesos",
      "automatización de procesos",
      "proceso automatizable",
      "diagnóstico de automatización",
      "rpa o ia",
    ],
    canonicalUrlRelative: PAGE_PATH,
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: pageUrl,
    },
  });
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Evaluador de automatización de procesos",
    url: pageUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "es",
    isAccessibleForFree: true,
    description: PAGE_DESCRIPTION,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/es` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Evaluador de automatización",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function Layout({ children }) {
  return (
    <>
      {children}
      {jsonLd.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
