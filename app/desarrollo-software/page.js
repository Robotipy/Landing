import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareAdvantages from "@/components/SoftwareAdvantages";
import SoftwareMethodology from "@/components/SoftwareMethodology";
import SoftwareTechStack from "@/components/SoftwareTechStack";
import SoftwareSuccessStories from "@/components/SoftwareSuccessStories";
import SoftwareCTA from "@/components/SoftwareCTA";
import SoftwareFAQ from "@/components/SoftwareFAQ";

export const metadata = {
  title: "Desarrollo de Software Personalizado - Robotipy",
  description: "Construimos la tecnología que tu negocio necesita para ganar. Desarrollo de software robusto, escalable y seguro adaptado a tus objetivos únicos.",
};

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
        {/* <SoftwareSuccessStories /> */}
        <SoftwareCTA />
        <SoftwareFAQ />
      </main>
      <Footer />
    </>
  );
};

export default DesarrolloSoftwarePage;
