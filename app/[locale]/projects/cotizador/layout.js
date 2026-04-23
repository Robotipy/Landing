import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Cotizador de Propuestas para Consultoras | Robotipy Projects",
  description:
    "Crea propuestas profesionales y conviértelas en proyectos con un click. Estimación de proyectos de software y RPA sin copiar-pegar.",
  keywords: [
    "cotizador propuestas consultora",
    "estimación proyectos software",
    "propuestas consultora RPA",
  ],
  canonicalUrlRelative: "/projects/cotizador",
});

export default function Layout({ children }) {
  return <>{children}</>;
}
