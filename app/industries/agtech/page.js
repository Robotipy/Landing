import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero"; 
import TrustInUs from "@/components/TrustInUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeaturesAgTech from "./FeaturesAgTech";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "AgTech: Soluciones de Software y RPA para el Agro | Robotipy",
  description: "Aumente la productividad agrícola con IoT, Drones y RPA. Soluciones tecnológicas para la gestión hídrica, trazabilidad y automatización de procesos en el agro.",
  canonicalUrlRelative: "/industries/agtech",
});

export default function AgTechPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        {/* Custom Hero Section for AgTech */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-base-100">
            <div className="px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-5xl text-4xl font-extrabold title-font mb-4 text-base-content">
                        Revolución AgTech
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
                        Llevamos la agricultura de precisión a su campo. Integramos software a medida, sensores y automatización para enfrentar la crisis hídrica y mejorar la rentabilidad.
                    </p>
                </div>
            </div>
        </section>

        <TrustInUs />
        <FeaturesAgTech />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
