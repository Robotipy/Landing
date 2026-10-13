import { Suspense } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import { home1Css } from "./_components/ui";
import Hero from "./_components/Hero";
import TrustBand from "./_components/TrustBand";
import Needs from "./_components/Needs";
import Atencion from "./_components/Atencion";
import Products from "./_components/Products";
import Cases from "./_components/Cases";
import WorkModels from "./_components/WorkModels";
import Closing from "./_components/Closing";

export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    title: "Robotipy: automatización, agentes de IA y software a medida",
    description:
      "Automatizamos lo repetitivo y creamos agentes de IA y software a la medida de tu empresa. La primera reunión no tiene costo.",
    canonicalUrlRelative: "/home-1",
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });
}

export default async function Home1Page({ params }) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="bg-white text-primary antialiased">
        <style dangerouslySetInnerHTML={{ __html: home1Css }} />
        <Hero />
        <TrustBand />
        <Needs />
        <Atencion />
        <Products />
        <Cases />
        <WorkModels />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
