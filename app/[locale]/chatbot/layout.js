import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const META = {
  es: {
    title: `Agentes para consultar ERP y CRM | ${config.appName}`,
    description:
      "Agentes de IA que consultan tu ERP y CRM en lenguaje natural. Da soporte instantáneo a tu equipo y clientes 24/7, integrado a tus sistemas actuales.",
  },
  en: {
    title: `AI Agents to Query Your ERP and CRM | ${config.appName}`,
    description:
      "AI agents that query your ERP and CRM in natural language. Give your team and customers instant 24/7 support, integrated with your current systems.",
  },
  pt: {
    title: `Agentes de IA para consultar ERP e CRM | ${config.appName}`,
    description:
      "Agentes de IA que consultam seu ERP e CRM em linguagem natural. Dê suporte instantâneo à sua equipe e clientes 24/7, integrado aos seus sistemas atuais.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/chatbot",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
