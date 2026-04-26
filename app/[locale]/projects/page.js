import { Suspense } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProjectsProblem from "@/components/ProjectsProblem";
import ProjectsFeatures from "@/components/ProjectsFeatures";
import ProjectsDifferentiator from "@/components/ProjectsDifferentiator";
import ProjectsPricingPreview from "@/components/ProjectsPricingPreview";
import ProductCTA from "@/components/ProductCTA";

export default function ProjectsPage() {
  const t = useTranslations("productsProjects");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Robotipy Projects",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://projects.robotipy.dev",
    description:
      "Software de gestión de proyectos para consultoras de software y RPA. Gestiona proyectos, recursos, propuestas y soporte en un solo lugar.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Robotipy",
      url: "https://robotipy.com",
    },
  };

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content">
        <ProductHero
          title={t("hero.title")}
          subtitle={t("hero.subtitle")}
          ctaText={t("hero.ctaText")}
          ctaLink="https://projects.robotipy.dev"
          ctaSecondaryText={t("hero.ctaSecondaryText")}
          ctaSecondaryLink="/projects/pricing"
          heroImage="/projects/home.png"
          heroImageAlt={t("hero.heroImageAlt")}
        />
        <ProjectsProblem />
        <ProjectsFeatures />
        <ProjectsDifferentiator />
        <ProjectsPricingPreview />
        <ProductCTA
          title={t("cta.title")}
          subtitle={t("cta.subtitle")}
          ctaText={t("cta.ctaText")}
          ctaLink="https://projects.robotipy.dev"
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
