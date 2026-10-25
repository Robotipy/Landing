import { getSEOTags } from "@/libs/seo";
import {
  PATHS,
  pageUrl,
  ogImages,
  alternates,
  buildMetadata,
  buildJsonLd,
} from "../vision-artificial/content";

export async function generateMetadata() {
  const m = buildMetadata("en");
  return {
    ...getSEOTags({
      locale: "en",
      ogLocale: m.ogLocale,
      title: m.title,
      description: m.description,
      keywords: m.keywords,
      canonicalUrlRelative: PATHS.en,
      openGraph: { title: m.title, description: m.description, url: pageUrl("en"), images: ogImages(m.title) },
    }),
    alternates: alternates("en"),
  };
}

const jsonLd = buildJsonLd("en");

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
