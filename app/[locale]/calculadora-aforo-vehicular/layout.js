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
      "aforo vehicular",
      "costo aforo vehicular",
      "conteo vehicular",
      "conteo vehicular con video",
      "estudio de tránsito",
      "software de conteo vehicular",
      "conteo de tráfico con inteligencia artificial",
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
    name: "Calculadora de costo de aforo vehicular",
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
        name: "Calculadora de aforo vehicular",
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
