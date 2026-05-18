import { getTranslations } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "seo.pages.roiCalculator",
  });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/roi-calculator",
  });
}

const buildJsonLd = (locale) => {
  const pageUrl = `${siteOrigin}/${locale}/roi-calculator`;
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora ROI RPA",
    url: pageUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Calculadora gratuita para estimar el ROI, payback y VPN de un proyecto de automatización RPA con licencias Rocketbot.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Calculadora ROI RPA", item: pageUrl },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo se calcula el ROI de un proyecto RPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El ROI de RPA se calcula comparando los beneficios anuales (ahorro de horas, reducción de errores, eliminación de horas extra, multas y pérdidas evitadas) contra la inversión total (licencias, desarrollo y mantenimiento), aplicando un descuento del 10% para obtener el Valor Presente Neto a tres años.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué payback típico tiene una automatización RPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La mayoría de procesos repetitivos que automatizamos con Rocketbot recuperan la inversión entre 4 y 12 meses, dependiendo del volumen, costo del personal y complejidad del proceso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué costos incluye una implementación RPA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Licencias del software RPA (Rocketbot u otro), desarrollo del robot (en promedio USD 5.800 por bot), infraestructura de orquestación y mantenimiento anual (aprox. 10% del desarrollo).",
        },
      },
    ],
  };
  return [webApp, breadcrumb, faq];
};

export default async function Layout({ children, params }) {
  const { locale } = await params;
  const jsonLdBlocks = buildJsonLd(locale);
  return (
    <>
      {children}
      {jsonLdBlocks.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
