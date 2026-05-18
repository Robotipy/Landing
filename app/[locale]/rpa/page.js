import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import HeroRPA from "./components/HeroRPA";
import WhatIsRpa from "./components/WhatIsRpa";
import RelatedReading from "@/components/RelatedReading";

const rpaRelatedLinks = [
  {
    href: "/blog/rpa-con-peras-y-manzanas",
    title: "RPA con peras y manzanas: qué es y cómo funciona",
    description:
      "Guía completa con ejemplos por industria, costos reales, ROI esperado y los pasos para implementar RPA en tu empresa.",
  },
  {
    href: "/roi-calculator",
    title: "Calculadora ROI RPA",
    description:
      "Estima ahorros anuales, payback y VPN de tu proyecto de automatización con licencias Rocketbot.",
  },
];

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
        <RelatedReading
          title="Aprende más sobre RPA"
          links={rpaRelatedLinks}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
