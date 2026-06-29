import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Planificación de Recursos para Consultoras | Robotipy Projects",
    description:
      "Visualiza la disponibilidad de tu equipo y asigna personas a proyectos sin sobrecargar a nadie. Planificación de capacidad para consultoras de software y RPA.",
  },
  en: {
    title: "Resource Planning for Consultancies | Robotipy Projects",
    description:
      "See your team's availability and assign people to projects without overloading anyone. Capacity planning for software and RPA consultancies.",
  },
  pt: {
    title: "Planejamento de Recursos para Consultorias | Robotipy Projects",
    description:
      "Visualize a disponibilidade da sua equipe e aloque pessoas em projetos sem sobrecarregar ninguém. Planejamento de capacidade para consultorias de software e RPA.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/projects/recursos",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
