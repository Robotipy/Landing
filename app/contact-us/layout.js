import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Contacto | ${config.appName}`,
  description: "Explícanos tus problemas y agenda una llamada para que podamos discutir la mejor manera de hacer tu vida más fácil.",
  canonicalUrlRelative: "/contact",
});

export default function Layout({ children }) {
  return <>{children}</>;
} 