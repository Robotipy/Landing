import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Mesa de Ayuda para Consultoras | Robotipy Projects",
  description:
    "Gestiona el soporte post-entrega con tickets, SLAs y portal de clientes integrado. La mesa de ayuda que tus clientes merecen.",
  keywords: [
    "mesa ayuda consultora",
    "gestión tickets soporte software",
    "soporte post-entrega consultora",
  ],
  canonicalUrlRelative: "/projects/soporte",
});

export default function Layout({ children }) {
  return <>{children}</>;
}
