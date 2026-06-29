import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Monitoreo en Tiempo Real de Robots RPA | Robotipy Monitor",
    description:
      "Monitorea tus robots RPA en tiempo real. Alertas, logs y métricas de tus automatizaciones en producción. Detecta fallos antes que tus clientes.",
  },
  en: {
    title: "Real-Time Monitoring of RPA Robots | Robotipy Monitor",
    description:
      "Monitor your RPA robots in real time. Alerts, logs and metrics for your automations in production. Detect failures before your customers do.",
  },
  pt: {
    title: "Monitoramento em Tempo Real de Robôs RPA | Robotipy Monitor",
    description:
      "Monitore seus robôs RPA em tempo real. Alertas, logs e métricas das suas automações em produção. Detecte falhas antes dos seus clientes.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/monitor",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
