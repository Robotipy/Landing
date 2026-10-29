import { getSEOTags } from "@/libs/seo";
import { PATH, pageUrl, siteOrigin, PAGE_TITLE, PAGE_DESCRIPTION, PUBLISHED_AT, faqs } from "./data";

const ogImages = [
  {
    url: `${siteOrigin}/blog/como-hacer-un-aforo-vehicular/header.jpeg`,
    width: 1280,
    height: 720,
    alt: "Highway seen from above with every vehicle detected and numbered by YOAO",
  },
];

// Guía solo en inglés: hreflang apunta únicamente a /en y middleware.js
// redirige /es y /pt hacia aquí. La versión en español es el post
// /blog/como-hacer-un-aforo-vehicular.
export async function generateMetadata() {
  return getSEOTags({
    locale: "en",
    availableLocales: ["en"],
    ogLocale: "en_US",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "how to do a traffic count",
      "turning movement count",
      "traffic count template",
      "traffic count excel template",
      "peak hour factor",
      "manual traffic count",
      "video traffic count",
    ],
    canonicalUrlRelative: PATH,
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: pageUrl,
      images: ogImages,
    },
  });
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: pageUrl,
    inLanguage: "en",
    datePublished: PUBLISHED_AT,
    dateModified: PUBLISHED_AT,
    image: ogImages[0].url,
    author: { "@type": "Person", name: "Danilo Toro" },
    publisher: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/en` },
      { "@type": "ListItem", position: 2, name: "How to do a traffic count", item: pageUrl },
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
