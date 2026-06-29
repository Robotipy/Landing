import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Empresas de Tecnología | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en empresas de tecnología: integración de sistemas, reportes y procesos internos con ahorros concretos.",
  },
  en: {
    title: "RPA and AI Cases in Technology Companies | Robotipy",
    description:
      "Real RPA and AI automation cases in technology companies: systems integration, reports and internal processes with concrete savings.",
  },
  pt: {
    title: "Casos RPA e IA em Empresas de Tecnologia | Robotipy",
    description:
      "Casos reais de automação RPA e IA em empresas de tecnologia: integração de sistemas, relatórios e processos internos com economias concretas.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/industrias-tecnologicas",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
