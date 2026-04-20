import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Software de Gestión para Consultoras de Software y RPA | Robotipy Projects",
  description:
    "La herramienta todo-en-uno para consultoras de software y RPA. Gestiona proyectos, recursos, propuestas y soporte. Diseñado por una consultora, para consultoras.",
  keywords: [
    "software gestión proyectos consultora",
    "software PSA",
    "herramienta consultora RPA",
    "gestión proyectos RPA",
    "software consultora tecnología",
  ],
  canonicalUrlRelative: "/projects",
  openGraph: {
    title: "Robotipy Projects — Software de Gestión para Consultoras",
    description:
      "Gestiona proyectos, recursos, propuestas y soporte en un solo lugar. Diseñado por una consultora, para consultoras.",
  },
});

export default function Layout({ children }) {
  return <>{children}</>;
}
