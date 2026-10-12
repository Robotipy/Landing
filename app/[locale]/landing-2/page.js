import { setRequestLocale } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import {
  CTA_LABEL,
  INDUSTRY_SLUGS,
  META,
  PAGE_PATH,
  deepIndustries,
  explorerTarget,
  factCells,
  faqs,
  featuredCases,
  formSectors,
  formSystems,
  formVolumes,
  headerAnchors,
  industries,
  moreIndustries,
  priceLine,
  rocketbotBlock,
  securityPoints,
  servicioBySector,
  solutions,
  solutionsNote,
  stackLine,
  steps,
  systemsLine,
  team,
  teamIntro,
} from "./data";
import { IndustryProvider } from "./_components/IndustryContext";
import LandingHeader from "./_components/LandingHeader";
import HeroSection from "./_components/HeroSection";
import FactSheet from "./_components/FactSheet";
import FeaturedCases from "./_components/FeaturedCases";
import IndustriesSection from "./_components/IndustriesSection";
import EvaluateSection from "./_components/EvaluateSection";
import SolutionsSection from "./_components/SolutionsSection";
import ProcessStrip from "./_components/ProcessStrip";
import TeamSection from "./_components/TeamSection";
import FaqList from "./_components/FaqList";
import DiagnosticSection from "./_components/DiagnosticSection";
import LandingFooter from "./_components/LandingFooter";
import MobileStickyCta from "./_components/MobileStickyCta";

// Propuesta de rediseño (Prueba por industria). Solo en español, noindex.
export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getSEOTags({
    locale,
    title: META.title,
    description: META.description,
    canonicalUrlRelative: PAGE_PATH,
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

const firstValue = (value) => (Array.isArray(value) ? value[0] : value);

function readIndustry(value) {
  const slug = firstValue(value);
  return typeof slug === "string" && INDUSTRY_SLUGS.includes(slug) ? slug : null;
}

function readScore(value) {
  const raw = firstValue(value);
  if (typeof raw !== "string" || !/^\d{1,3}$/.test(raw)) return null;
  const score = Number(raw);
  return score >= 0 && score <= 100 ? score : null;
}

export default async function Landing2Page({ params, searchParams }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const query = (await searchParams) || {};
  const initialIndustry = readIndustry(query.industria);
  const initialScore = readScore(query.puntaje);

  const scorerSectors = industries.map((i) => ({ slug: i.slug, label: i.label }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <IndustryProvider initialIndustry={initialIndustry} initialScore={initialScore} validSlugs={INDUSTRY_SLUGS}>
      {/* Oculta el chat de Zoho SalesIQ en esta landing (una sola acción por página). */}
      <style>{`#zsiq_float { display: none !important; }`}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <LandingHeader anchors={headerAnchors} ctaLabel={CTA_LABEL} />
      <main id="main-content" className="overflow-x-clip bg-primary">
        <HeroSection industries={industries} explorerTarget={explorerTarget} ctaLabel={CTA_LABEL} />
        <FactSheet cells={factCells} systems={systemsLine} />
        <FeaturedCases items={featuredCases} explorerTarget={explorerTarget} />
        <IndustriesSection deep={deepIndustries} more={moreIndustries} ctaLabel={CTA_LABEL} />
        <EvaluateSection sectors={scorerSectors} />
        <SolutionsSection solutions={solutions} note={solutionsNote} />
        <ProcessStrip steps={steps} priceLine={priceLine} />
        <TeamSection
          team={team}
          intro={teamIntro}
          rocketbot={rocketbotBlock}
          security={securityPoints}
          stack={stackLine}
        />
        <FaqList faqs={faqs} />
        <DiagnosticSection
          industries={industries}
          sectors={formSectors}
          systems={formSystems}
          volumes={formVolumes}
          servicioBySector={servicioBySector}
        />
      </main>
      <LandingFooter />
      <MobileStickyCta label={CTA_LABEL} />
    </IndustryProvider>
  );
}
