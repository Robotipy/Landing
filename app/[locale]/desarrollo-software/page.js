import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareAdvantages from "@/components/SoftwareAdvantages";
import SoftwareMethodology from "@/components/SoftwareMethodology";
import SoftwareTechStack from "@/components/SoftwareTechStack";
import SoftwareCTA from "@/components/SoftwareCTA";
import SoftwareFAQ from "@/components/SoftwareFAQ";
import { getSEOTags } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "seo.pages.desarrolloSoftware",
  });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/desarrollo-software",
  });
}

const DesarrolloSoftwarePage = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <SoftwareHero />
        <SoftwareAdvantages />
        <SoftwareMethodology />
        <SoftwareTechStack />
        <SoftwareCTA />
        <SoftwareFAQ />
      </main>
      <Footer />
    </>
  );
};

export default DesarrolloSoftwarePage;
