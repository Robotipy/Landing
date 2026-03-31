import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProjectsProblem from "@/components/ProjectsProblem";
import ProjectsFeatures from "@/components/ProjectsFeatures";
import ProjectsDifferentiator from "@/components/ProjectsDifferentiator";
import ProjectsPricingPreview from "@/components/ProjectsPricingPreview";
import ProductCTA from "@/components/ProductCTA";

export default function ProjectsPage() {
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
      <main>
        <ProductHero
          title="El sistema operativo para consultoras de software y RPA"
          subtitle="Deja de gestionar tu consultora con WhatsApp y Excel. Centraliza proyectos, recursos, estimaciones y soporte en un solo lugar."
          ctaText="Empieza gratis"
          ctaLink="https://projects.robotipy.dev"
          ctaSecondaryText="Ver precios"
          ctaSecondaryLink="/projects/pricing"
          heroImage="/projects/home.png"
          heroImageAlt="Dashboard principal de Robotipy Projects"
        />
        <ProjectsProblem />
        <ProjectsFeatures />
        <ProjectsDifferentiator />
        <ProjectsPricingPreview />
        <ProductCTA
          title="Empieza a gestionar tu consultora de forma profesional"
          subtitle="30 días gratis. Sin tarjeta de crédito. Configurado en minutos."
          ctaText="Empieza gratis"
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
