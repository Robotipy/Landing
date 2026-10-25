import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { PAGE_PATH, PAGE_TITLE, PAGE_DESCRIPTION, yoaoUseCases, customUseCases } from "./data";

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
      "visión artificial para empresas",
      "empresa de visión artificial Chile",
      "desarrollo de visión artificial",
      "computer vision empresas",
      "visión computacional",
      "analítica de video con IA",
      "inspección visual automatizada",
      "conteo vehicular con cámaras",
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
    "@type": "Service",
    name: "Visión artificial para empresas",
    serviceType: "Computer Vision",
    url: pageUrl,
    inLanguage: "es",
    description: PAGE_DESCRIPTION,
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
    areaServed: ["Chile", "Argentina", "Perú", "México", "Colombia"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Casos de uso de visión artificial",
      itemListElement: [...yoaoUseCases, ...customUseCases].map((u) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: u.title, description: u.description },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/es` },
      { "@type": "ListItem", position: 2, name: "Visión artificial", item: pageUrl },
    ],
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
