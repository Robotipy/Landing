import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Banca, Seguros y Finanzas | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en banca, seguros y finanzas: conciliaciones, facturación y cierres contables con ahorros y métricas concretas.",
  },
  en: {
    title: "RPA and AI Cases in Banking and Finance | Robotipy",
    description:
      "Real RPA and AI automation cases in banking, insurance and finance: reconciliations, billing and accounting closes with concrete savings and metrics.",
  },
  pt: {
    title: "Casos RPA e IA em Bancos, Seguros e Finanças | Robotipy",
    description:
      "Casos reais de automação RPA e IA em bancos, seguros e finanças: conciliações, faturamento e fechamentos contábeis com economias e métricas concretas.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/financiero",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
