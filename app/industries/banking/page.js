import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero"; // Using generic Hero for now, might need custom one
import TrustInUs from "@/components/TrustInUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeaturesBanking from "./FeaturesBanking";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "RPA en la Banca: Automatización y Cumplimiento | Robotipy",
  description: "Optimice procesos financieros, asegure el cumplimiento normativo (KYC/AML) y mejore la experiencia del cliente con nuestras soluciones de RPA para banca.",
  canonicalUrlRelative: "/industries/banking",
});

export default function BankingPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        {/* Custom Hero Section for Banking */}
        <section className="relative pt-32 pb-12 overflow-hidden bg-base-100">
            <div className="px-8 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-5xl text-4xl font-extrabold title-font mb-4 text-base-content">
                        Banca 4.0: Automatización Inteligente
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
                        Transforme su institución financiera con RPA e Inteligencia Artificial. Reduzca costos operativos, elimine errores y garantice el cumplimiento normativo sin sacrificar velocidad.
                    </p>
                </div>
            </div>
        </section>

        <TrustInUs />
        <FeaturesBanking />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
