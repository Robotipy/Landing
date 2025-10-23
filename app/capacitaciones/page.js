import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingHero from "@/components/TrainingHero";
import TrainingPrograms from "@/components/TrainingPrograms";
import TrainingMethodology from "@/components/TrainingMethodology";
import TrainingStories from "@/components/TrainingStories";
import TrainingFAQ from "@/components/TrainingFAQ";
import TrainingCTA from "@/components/TrainingCTA";

export const metadata = {
  title: "Capacitación en IA y Automatización - Robotipy",
  description: "Potencia a tu equipo con nuestros cursos prácticos y especializaciones avanzadas en RPA e IA. Capacitación para equipos empresariales y técnicos.",
};

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
        {/* <TrainingStories /> */}
        <TrainingCTA />
        <TrainingFAQ />
      </main>
      <Footer />
    </>
  );
};

export default CapacitacionesPage;
