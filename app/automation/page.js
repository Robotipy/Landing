import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutomationHero from "@/components/AutomationHero";
import ProblemSection from "@/components/ProblemSection";
import ROICalculator from "@/components/ROICalculator";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AutomationCTA from "@/components/AutomationCTA";

export default function AutomationPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="max-w-7xl mx-auto">
        <AutomationHero />
        <ProblemSection />
        <ROICalculator />
        <ProcessSection />
        {/* <TestimonialsSection /> */}
        <AutomationCTA />
      </main>
      <Footer />
    </>
  );
}
