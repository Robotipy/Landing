import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustInUs from "@/components/TrustInUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PagePreview from "@/components/PagePreview";
import PagePreviewCenter from "@/components/PagePreviewCenter";
import BlogPreview from "@/components/BlogPreview";
import Image from "next/image";
import HeroSolutions from "./solutions/HeroSolutions";
import Offers from "./solutions/Offers";
import Solutions from "@/components/Solutions";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import MapsSolutions from "@/components/MapsSolutions";


export default function Home() {
  return (
    <>
      {/* <Image src="/images/background.png" alt="Background" layout="fill" /> */}
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <TrustInUs priority={true} />
        <Solutions />
        <FeaturedCaseStudies />
        <MapsSolutions />
        {/* <PagePreviewCenter /> */}
        {/* <BlogPreview /> */}
        {/* <FeaturesAccordion />
        <Pricing />
        <FAQ /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
