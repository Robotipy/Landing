import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingHero from "@/components/TrainingHero";
import TrainingPrograms from "@/components/TrainingPrograms";
import TrainingMethodology from "@/components/TrainingMethodology";
import TrainingFAQ from "@/components/TrainingFAQ";
import TrainingCTA from "@/components/TrainingCTA";
import { getSEOTags } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "seo.pages.capacitaciones",
  });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/capacitaciones",
  });
}

const CapacitacionesPage = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <TrainingHero />
        <TrainingPrograms />
        <TrainingMethodology />
        <TrainingCTA />
        <TrainingFAQ />
      </main>
      <Footer />
    </>
  );
};

export default CapacitacionesPage;
