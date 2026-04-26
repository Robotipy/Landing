import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import HeroRPA from "./components/HeroRPA";
import WhatIsRpa from "./components/WhatIsRpa";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.pages.rpa" });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/rpa",
  });
}

export default function Rpa() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content">
        <HeroRPA />
        <WhatIsRpa />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
