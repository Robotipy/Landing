import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Servicios Técnicos | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en servicios técnicos: órdenes de trabajo, despacho y reportes operativos con métricas concretas.",
  },
  en: {
    title: "RPA and AI Cases in Technical Services | Robotipy",
    description:
      "Real RPA and AI automation cases in technical services: work orders, dispatch and operational reports with concrete metrics.",
  },
  pt: {
    title: "Casos RPA e IA em Serviços Técnicos | Robotipy",
    description:
      "Casos reais de automação RPA e IA em serviços técnicos: ordens de serviço, despacho e relatórios operacionais com métricas concretas.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/servicios-tecnicos",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
