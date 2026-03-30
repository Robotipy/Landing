import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Planificación de Recursos para Consultoras | Robotipy Projects",
  description:
    "Visualiza la disponibilidad de tu equipo y asigna personas a proyectos sin sobrecargar a nadie. Planificación de capacidad para consultoras de software y RPA.",
  keywords: [
    "planificación recursos consultora",
    "gestión capacidad equipo desarrollo",
    "asignación recursos proyectos",
  ],
  canonicalUrlRelative: "/projects/recursos",
});

export default function Layout({ children }) {
  return <>{children}</>;
}
