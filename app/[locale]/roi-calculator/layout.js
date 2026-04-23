import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Calculadora de ROI para RPA | ${config.appName}`,
  description: "Calcula el ROI de tu proyecto de automatización con nuestra calculadora de ROI para RPA. Conoce cuánto podrías ahorrar con la automatización de tus procesos.",
  canonicalUrlRelative: "/desarrollo-software",
}); 

export default function Layout({ children }) {
  return <>{children}</>;
} 