import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Industria Automotriz | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en el sector automotriz: gestión de repuestos, órdenes y reportes operativos con ahorros medibles.",
  },
  en: {
    title: "RPA and AI Cases in the Automotive Industry | Robotipy",
    description:
      "Real RPA and AI automation cases in the automotive sector: parts management, orders and operational reports with measurable savings.",
  },
  pt: {
    title: "Casos RPA e IA na Indústria Automotiva | Robotipy",
    description:
      "Casos reais de automação RPA e IA no setor automotivo: gestão de peças, pedidos e relatórios operacionais com economias mensuráveis.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/automotriz",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
