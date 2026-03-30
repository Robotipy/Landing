import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Precios — Software de Gestión para Consultoras | Robotipy Projects",
  description:
    "Planes simples para consultoras de cualquier tamaño. 30 días gratis, sin tarjeta de crédito. Freelancer y Studio.",
  keywords: [
    "precio software gestión proyectos",
    "software PSA precio",
    "herramienta consultora precio",
  ],
  canonicalUrlRelative: "/projects/pricing",
});

export default function Layout({ children }) {
  return <>{children}</>;
}
