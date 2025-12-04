import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Soluciones para el Sector Software | Casos de Éxito Robotipy",
  description:
    "Descubre cómo Robotipy ha optimizado los procesos de desarrollo de software a través de la automatización inteligente. Caso de éxito: gestión automatizada de permisos en Google Drive, Jira y Slack con ahorro del 92% de tiempo.",
  canonicalUrlRelative: "/casos-exito/software",
  keywords: [
    "automatización software",
    "RPA desarrollo software",
    "gestión permisos automatizada",
    "automatización Google Drive Jira Slack",
    "casos de éxito software",
    "optimización procesos software",
  ],
  extraTags: {
    openGraph: {
      title: "Soluciones para el Sector Software | Robotipy",
      description:
        "Automatización de procesos para empresas de software. Caso de éxito con ahorro del 92% de tiempo en gestión de permisos.",
      url: "/casos-exito/software",
      type: "website",
    },
  },
});

export default function SoftwareLayout({ children }) {
  return <>{children}</>;
}

