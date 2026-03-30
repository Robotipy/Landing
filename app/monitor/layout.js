import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Monitoreo en Tiempo Real de Robots RPA | Robotipy Monitor",
  description:
    "Monitorea tus robots RPA en tiempo real. Alertas, logs y métricas de tus automatizaciones en producción. Detecta fallos antes que tus clientes.",
  keywords: [
    "monitoreo robots RPA",
    "monitoreo bots",
    "alertas RPA producción",
    "métricas automatización",
  ],
  canonicalUrlRelative: "/monitor",
});

export default function Layout({ children }) {
  return <>{children}</>;
}
