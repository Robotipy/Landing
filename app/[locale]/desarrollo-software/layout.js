import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Desarrollo de Software a Medida para Empresas | ${config.appName}`,
  description: "Desarrollo de software a medida, sistemas web y apps móviles para empresas en Latinoamérica. Integramos RPA, IA y APIs con tus sistemas legacy. Casos reales, equipo certificado y ROI medible.",
  canonicalUrlRelative: "/desarrollo-software",
});

export default function Layout({ children }) {
  return <>{children}</>;
} 