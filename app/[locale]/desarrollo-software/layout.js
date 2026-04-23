import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Desarrollo de Software a medida para Empresas | ${config.appName}`,
  description: "Somos tu socio tecnológico. Nos encargamos de desarrollar la tecnología que necesitas desde la estrategia hasta la implementación.",
  canonicalUrlRelative: "/desarrollo-software",
}); 

export default function Layout({ children }) {
  return <>{children}</>;
} 