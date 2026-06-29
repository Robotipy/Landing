import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Agro y Agroindustria | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en agro y agroindustria: conciliaciones, inteligencia de mercado y carga de datos con ahorros y métricas concretas.",
  },
  en: {
    title: "RPA and AI Cases in Agriculture and Agribusiness | Robotipy",
    description:
      "Real RPA and AI automation cases in agriculture and agribusiness: reconciliations, market intelligence and data loading with concrete savings and metrics.",
  },
  pt: {
    title: "Casos RPA e IA em Agro e Agroindústria | Robotipy",
    description:
      "Casos reais de automação RPA e IA em agro e agroindústria: conciliações, inteligência de mercado e carga de dados com economias e métricas concretas.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/agricola",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
