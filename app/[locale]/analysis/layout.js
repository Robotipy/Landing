import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Análisis de Video con Inteligencia Artificial | Robotipy Analysis",
  description:
    "Extrae insights automatizados de tus grabaciones con IA. Análisis de video inteligente para empresas.",
  keywords: [
    "análisis video inteligencia artificial",
    "análisis video IA",
    "insights video automatizado",
  ],
  canonicalUrlRelative: "/analysis",
});

export default function Layout({ children }) {
  return <>{children}</>;
}
