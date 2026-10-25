import { getSEOTags } from "@/libs/seo";
import { PATHS, pageUrl, ogImages, alternates, buildMetadata, buildJsonLd } from "./content";

export async function generateMetadata() {
  const m = buildMetadata("es");
  return {
    ...getSEOTags({
      locale: "es",
      ogLocale: m.ogLocale,
      title: m.title,
      description: m.description,
      keywords: m.keywords,
      canonicalUrlRelative: PATHS.es,
      openGraph: { title: m.title, description: m.description, url: pageUrl("es"), images: ogImages(m.title) },
    }),
    alternates: alternates("es"),
  };
}

const jsonLd = buildJsonLd("es");

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
