import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Capacitaciones prácticas de IA y Automatización para Empresas | ${config.appName}`,
  description: "Capacitaciones en IA y Automatización para todo tu equipo. Cursos prácticos para que usuarios de negocio automaticen sus tareas y programas avanzados para especializar a tus desarrolladores",
  canonicalUrlRelative: "/capacitaciones",
});

export default function Layout({ children }) {
  return <>{children}</>;
} 