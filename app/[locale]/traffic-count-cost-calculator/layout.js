import { getSEOTags } from "@/libs/seo";
import { PATHS, pageUrl, siteOrigin, alternates } from "../calculadora-aforo-vehicular/paths";
import { PAGE_TITLE, PAGE_DESCRIPTION, faqs } from "./data";

const ogImages = [
  {
    url: `${siteOrigin}/vision/og-vision-artificial.jpg`,
    width: 1200,
    height: 630,
    alt: "Drone view of an intersection with every vehicle detected by YOAO",
  },
];

export async function generateMetadata() {
  return {
    ...getSEOTags({
      locale: "en",
      ogLocale: "en_US",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      keywords: [
        "traffic count cost",
        "traffic count cost calculator",
        "turning movement count cost",
        "manual traffic count",
        "video traffic count",
        "traffic counting software",
        "AI traffic counting",
      ],
      canonicalUrlRelative: PATHS.en,
      openGraph: {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: pageUrl("en"),
        images: ogImages,
      },
    }),
    alternates: alternates("en"),
  };
}

const url = pageUrl("en");

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Traffic count cost calculator",
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "en",
    isAccessibleForFree: true,
    description: PAGE_DESCRIPTION,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/en` },
      { "@type": "ListItem", position: 2, name: "Traffic count cost calculator", item: url },
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
