import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Empresas de Software | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en empresas de software: procesos internos, soporte y reportes con ahorros medibles.",
  },
  en: {
    title: "RPA and AI Cases in Software Companies | Robotipy",
    description:
      "Real RPA and AI automation cases in software companies: internal processes, support and reports with measurable savings.",
  },
  pt: {
    title: "Casos RPA e IA em Empresas de Software | Robotipy",
    description:
      "Casos reais de automação RPA e IA em empresas de software: processos internos, suporte e relatórios com economias mensuráveis.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/software",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
