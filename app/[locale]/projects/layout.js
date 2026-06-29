import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Software de Gestión para Consultoras de Software y RPA | Robotipy Projects",
    description:
      "La herramienta todo-en-uno para consultoras de software y RPA. Gestiona proyectos, recursos, propuestas y soporte. Diseñado por una consultora, para consultoras.",
  },
  en: {
    title: "Management Software for Software and RPA Consultancies | Robotipy Projects",
    description:
      "The all-in-one tool for software and RPA consultancies. Manage projects, resources, proposals and support. Built by a consultancy, for consultancies.",
  },
  pt: {
    title: "Software de Gestão para Consultorias de Software e RPA | Robotipy Projects",
    description:
      "A ferramenta tudo-em-um para consultorias de software e RPA. Gerencie projetos, recursos, propostas e suporte. Criado por uma consultoria, para consultorias.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/projects",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
