import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos de éxito en transporte y logística | Robotipy",
    description:
      "Casos reales de RPA e IA en transporte y logística: seguimiento de pedidos, integración con couriers y ERP, y menos tiempo operativo. Métricas incluidas.",
  },
  en: {
    title: "Transport and logistics success cases | Robotipy",
    description:
      "Real RPA and AI cases in transport and logistics: order tracking, integration with couriers and ERP, and less operational time. Metrics included.",
  },
  pt: {
    title: "Casos de sucesso em transporte e logística | Robotipy",
    description:
      "Casos reais de RPA e IA em transporte e logística: rastreamento de pedidos, integração com couriers e ERP, e menos tempo operacional. Métricas incluídas.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/transporte",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
