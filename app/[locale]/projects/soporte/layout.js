import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Mesa de Ayuda para Consultoras | Robotipy Projects",
    description:
      "Gestiona el soporte post-entrega con tickets, SLAs y portal de clientes integrado. La mesa de ayuda que tus clientes merecen.",
  },
  en: {
    title: "Help Desk for Consultancies | Robotipy Projects",
    description:
      "Manage post-delivery support with tickets, SLAs and an integrated client portal. The help desk your clients deserve.",
  },
  pt: {
    title: "Central de Ajuda para Consultorias | Robotipy Projects",
    description:
      "Gerencie o suporte pós-entrega com tickets, SLAs e portal de clientes integrado. A central de ajuda que seus clientes merecem.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/projects/soporte",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
