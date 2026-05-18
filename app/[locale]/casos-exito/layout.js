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
    // Espejo de /success-cases. Apunta canonical alli para evitar contenido duplicado.
    canonicalUrlRelative: "/success-cases",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
