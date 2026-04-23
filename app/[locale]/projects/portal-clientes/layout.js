import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Portal de Clientes para Consultoras | Robotipy Projects",
  description:
    "Tus clientes ven el avance de sus proyectos en tiempo real. Sin WhatsApp, sin emails. Transparencia que genera confianza.",
  keywords: [
    "portal clientes consultora software",
    "transparencia proyectos clientes",
    "seguimiento proyectos clientes",
  ],
  canonicalUrlRelative: "/projects/portal-clientes",
});

export default function Layout({ children }) {
  return <>{children}</>;
}
