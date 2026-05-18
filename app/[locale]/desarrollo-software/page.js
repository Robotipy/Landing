import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareAdvantages from "@/components/SoftwareAdvantages";
import SoftwareMethodology from "@/components/SoftwareMethodology";
import SoftwareTechStack from "@/components/SoftwareTechStack";
import SoftwareSuccessStories from "@/components/SoftwareSuccessStories";
import SoftwareCTA from "@/components/SoftwareCTA";
import SoftwareFAQ from "@/components/SoftwareFAQ";
import TestimonialsSection from "@/components/TestimonialsSection";
import RelatedReading from "@/components/RelatedReading";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const softwareRelatedLinks = [
  {
    href: "/blog/rpa-con-peras-y-manzanas",
    title: "RPA con peras y manzanas: cuándo conviene un bot y cuándo un sistema a medida",
    description:
      "Guía para decidir si tu proceso necesita un bot RPA, un software propio o ambos integrados.",
  },
  {
    href: "/rpa",
    title: "Automatización RPA con Rocketbot",
    description:
      "Casos donde RPA acelera la automatización antes de invertir en desarrollo de software a medida.",
  },
];

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "seo.pages.desarrolloSoftware",
  });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/desarrollo-software",
  });
}

const buildJsonLd = (locale) => {
  const pageUrl = `${siteOrigin}/${locale}/desarrollo-software`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desarrollo de Software a Medida",
    serviceType: "Custom Software Development",
    provider: {
      "@type": "Organization",
      name: "Robotipy",
      url: siteOrigin,
    },
    areaServed: ["Chile", "Argentina", "Perú", "México", "Colombia", "España"],
    description:
      "Desarrollo de software a medida, sistemas web, apps móviles e integraciones con RPA e IA para empresas en Latinoamérica.",
    url: pageUrl,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Desarrollo de Software", item: pageUrl },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto cuesta desarrollar un software a medida o un bot RPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo depende del alcance. Desarrollamos desde scripts de automatización RPA hasta sistemas empresariales complejos. Tras una fase de descubrimiento gratuita entregamos un presupuesto detallado y un cálculo del ROI estimado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es seguro integrar robots con nuestros sistemas bancarios o ERP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Nuestras soluciones interactúan de forma segura (encriptación TLS, manejo de credenciales) con sistemas como SAP, Salesforce o portales bancarios, sin comprometer la integridad ni el compliance.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién es propietario del código fuente y la propiedad intelectual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El cliente. Entregamos la propiedad completa del código fuente y los derechos intelectuales del software o bots que construimos al finalizar el proyecto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Brindan servicios fuera de Chile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Trabajamos de forma remota con empresas en Chile, Argentina, Perú, México, Colombia y España, adaptándonos a tu zona horaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pueden integrar el nuevo software con nuestros sistemas legacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Diseñamos APIs y conectores RPA para que tu software moderno se comunique con infraestructura antigua o herramientas de terceros.",
        },
      },
    ],
  };
  return [service, breadcrumb, faq];
};

const DesarrolloSoftwarePage = async ({ params }) => {
  const { locale } = await params;
  const jsonLdBlocks = buildJsonLd(locale);
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content">
        <SoftwareHero />
        <SoftwareAdvantages />
        <SoftwareSuccessStories />
        <TestimonialsSection />
        <SoftwareMethodology />
        <SoftwareTechStack />
        <RelatedReading
          title="Recursos relacionados"
          links={softwareRelatedLinks}
        />
        <SoftwareCTA />
        <SoftwareFAQ />
      </main>
      <Footer />
      {jsonLdBlocks.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
};

export default DesarrolloSoftwarePage;
