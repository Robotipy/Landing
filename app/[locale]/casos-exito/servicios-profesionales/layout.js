import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Servicios Profesionales | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en servicios profesionales: facturación, reportes y back office con ahorros de tiempo y menos errores.",
  },
  en: {
    title: "RPA and AI Cases in Professional Services | Robotipy",
    description:
      "Real RPA and AI automation cases in professional services: billing, reports and back office with time savings and fewer errors.",
  },
  pt: {
    title: "Casos RPA e IA em Serviços Profissionais | Robotipy",
    description:
      "Casos reais de automação RPA e IA em serviços profissionais: faturamento, relatórios e back office com economia de tempo e menos erros.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/servicios-profesionales",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
