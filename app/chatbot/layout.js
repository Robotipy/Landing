import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Agentes para consultar ERP y CRM | ${config.appName}`,
  description: "Construímos más que chatbots. Construímos im cerebro de IA para tu empresa. Automatiza las consultas a tu ERP y CRM, y permite que tu equipe consulte sistemas complejos en lenguaje natural",
  canonicalUrlRelative: "/chatbot",
});

export default function Layout({ children }) {
  return <>{children}</>;
} 