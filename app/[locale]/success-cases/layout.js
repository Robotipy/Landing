import { getTranslations } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "seo.pages.successCases",
  });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/success-cases",
    openGraph: {
      images: [{ url: "/images/og/casos-exito.jpg", width: 1200, height: 630, alt: "Casos de éxito de Robotipy" }],
    },
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
