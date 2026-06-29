import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Estudios Jurídicos | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en estudios jurídicos: gestión documental, control de plazos y reportes con menos trabajo manual.",
  },
  en: {
    title: "RPA and AI Cases in Law Firms | Robotipy",
    description:
      "Real RPA and AI automation cases in law firms: document management, deadline control and reports with less manual work.",
  },
  pt: {
    title: "Casos RPA e IA em Escritórios de Advocacia | Robotipy",
    description:
      "Casos reais de automação RPA e IA em escritórios de advocacia: gestão documental, controle de prazos e relatórios com menos trabalho manual.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/estudio-juridico",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
