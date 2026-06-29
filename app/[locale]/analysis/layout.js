import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Análisis de Video con Inteligencia Artificial | Robotipy Analysis",
    description:
      "Extrae insights automatizados de tus grabaciones con IA. Análisis de video inteligente para empresas.",
  },
  en: {
    title: "Video Analysis with Artificial Intelligence | Robotipy Analysis",
    description:
      "Extract automated insights from your recordings with AI. Intelligent video analysis for businesses.",
  },
  pt: {
    title: "Análise de Vídeo com Inteligência Artificial | Robotipy Analysis",
    description:
      "Extraia insights automatizados das suas gravações com IA. Análise de vídeo inteligente para empresas.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/analysis",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
