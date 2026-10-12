import { Suspense } from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import { getArticlesByLocale } from "@/app/[locale]/blog/_assets/content";
import {
  CONTACT_HREF,
  CTA_LABEL,
  INDUSTRY_COUNT,
  MAP_INDUSTRIES,
  META,
  PAGE_PATH,
  STEP_KEYS,
  SYSTEMS,
  bigIndustries,
  diagnosticIndustries,
  diagnosticSystems,
  factCells,
  faqs,
  hero,
  iaCards,
  iaContactHref,
  iaGuides,
  permittedLogos,
  priceLinks,
  priceRows,
  principle,
  productCards,
  rocketbotBlock,
  securityPoints,
  serviceGuides,
  services,
  smallIndustries,
  team,
  teamIntro,
  toolCards,
  toolsIntro,
} from "./data";
import { h2Css } from "./_components/styles";
import ClickTracker from "./_components/ClickTracker";
import HeroMapa from "./_components/HeroMapa";
import Hechos from "./_components/Hechos";
import Sistemas from "./_components/Sistemas";
import Industrias from "./_components/Industrias";
import IaAplicada from "./_components/IaAplicada";
import Servicios from "./_components/Servicios";
import Productos from "./_components/Productos";
import Precio from "./_components/Precio";
import Herramientas from "./_components/Herramientas";
import Equipo from "./_components/Equipo";
import Blog from "./_components/Blog";
import Preguntas from "./_components/Preguntas";
import Diagnostico from "./_components/Diagnostico";

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-h2-mono",
  display: "swap",
});

// Los últimos posts y los enlaces a guías programadas se recalculan cada hora.
export const revalidate = 3600;

// Propuesta de home (Mapa de sistemas). Solo en español, noindex.
export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    title: META.title,
    description: META.description,
    canonicalUrlRelative: PAGE_PATH,
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });
}

// Fecha en UTC: sin timeZone, "2026-10-11" puede mostrarse como 10 de octubre.
const formatDate = (value) =>
  new Date(value).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function Home2Page({ params }) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);

  const articles = getArticlesByLocale("es");
  const publicados = new Set(articles.map((a) => a.slug));
  const latestPosts = [...articles]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      category: a.categories?.find(Boolean)?.title || "Blog",
      publishedAt: a.publishedAt,
      date: formatDate(a.publishedAt),
    }));

  // Mismos pasos de /about (messages/es.json about.process.steps).
  const t = await getTranslations({ locale: "es", namespace: "about" });
  const steps = STEP_KEYS.map((key) => ({
    title: t(`process.steps.${key}.title`),
    description: t(`process.steps.${key}.description`),
  }));

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
    <div className={`${mono.variable} bg-primary`}>
      <style dangerouslySetInnerHTML={{ __html: h2Css }} />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
      )}
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="h2 overflow-x-clip antialiased">
        <ClickTracker />
        <HeroMapa
          hero={hero}
          industries={MAP_INDUSTRIES}
          systems={SYSTEMS}
          industryCount={INDUSTRY_COUNT}
          ctaLabel={CTA_LABEL}
          ctaHref={CONTACT_HREF}
        />
        <Hechos cells={factCells} logos={permittedLogos} />
        <Sistemas systems={SYSTEMS} publicados={publicados} />
        <Industrias big={bigIndustries} small={smallIndustries} />
        <IaAplicada cards={iaCards} guides={iaGuides} contactHref={iaContactHref} publicados={publicados} />
        <Servicios services={services} systems={SYSTEMS} guides={serviceGuides} publicados={publicados} />
        <Productos products={productCards} />
        <Precio
          steps={steps}
          rows={priceRows}
          principle={principle}
          security={securityPoints}
          links={priceLinks}
          publicados={publicados}
        />
        <Herramientas tools={toolCards} intro={toolsIntro} />
        <Equipo team={team} intro={teamIntro} rocketbot={rocketbotBlock} publicados={publicados} />
        <Blog posts={latestPosts} />
        <Preguntas faqs={faqs} />
        <Diagnostico industries={diagnosticIndustries} systems={diagnosticSystems} ctaLabel={CTA_LABEL} />
      </main>
      <Footer />
    </div>
  );
}
