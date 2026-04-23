import { getSEOTags } from "@/libs/seo";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.pages.contact" });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/contact-us",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
