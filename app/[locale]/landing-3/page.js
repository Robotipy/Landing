import { setRequestLocale } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import CaseGrid from "./_components/CaseGrid";
import Closing from "./_components/Closing";
import Faq from "./_components/Faq";
import Hero from "./_components/Hero";
import HowWeWork from "./_components/HowWeWork";
import LandingFooter from "./_components/LandingFooter";
import { LandingStateProvider } from "./_components/LandingState";
import MobileBar from "./_components/MobileBar";
import Packages from "./_components/Packages";
import PriceDrivers from "./_components/PriceDrivers";
import PricingHeader from "./_components/PricingHeader";
import { formatNumber, pricing } from "./_components/pricing";
import Team from "./_components/Team";
import { CalculatorSection, EvaluatorSection } from "./_components/ToolsSections";
import TrustStrip from "./_components/TrustStrip";

const metaUsd = (n) => `USD ${formatNumber(n)}`;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getSEOTags({
    locale,
    title: `Precios de automatización RPA: ${metaUsd(pricing.rpaAverage)} promedio | Robotipy`,
    description: `Diagnóstico sin costo, un proceso automatizado por ${metaUsd(
      pricing.rpaAverage
    )} en promedio y soporte opcional desde ${metaUsd(
      pricing.supportFrom
    )} al mes. Calcula en cuántos meses se paga.`,
    canonicalUrlRelative: "/landing-3",
    availableLocales: ["es"],
    extraTags: {
      robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
    },
  });
}

// Oculta el chat de Zoho SalesIQ (igual que /contact-us) y usa el acento
// como anillo de foco: da más de 3:1 sobre blanco y sobre #00182B.
const pageStyles = `
#zsiq_float { display: none !important; }
#landing-3 :focus-visible { outline: 2px solid rgb(3, 150, 149); outline-offset: 2px; }
`;

export default async function Landing3Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <style>{pageStyles}</style>
      <LandingStateProvider>
        <div id="landing-3" className="bg-white text-[#0A2540]">
          <PricingHeader />
          <main id="main-content">
            <Hero />
            <TrustStrip />
            <Packages />
            <PriceDrivers />
            <EvaluatorSection />
            <CalculatorSection />
            <CaseGrid />
            <HowWeWork />
            <Team />
            <Faq />
            <Closing />
          </main>
          <LandingFooter />
          <MobileBar />
        </div>
      </LandingStateProvider>
    </>
  );
}
