import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Salud | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en salud: gestión de pacientes, facturación y validación de datos con menos errores y más velocidad.",
  },
  en: {
    title: "RPA and AI Cases in Healthcare | Robotipy",
    description:
      "Real RPA and AI automation cases in healthcare: patient management, billing and data validation with fewer errors and greater speed.",
  },
  pt: {
    title: "Casos RPA e IA em Saúde | Robotipy",
    description:
      "Casos reais de automação RPA e IA em saúde: gestão de pacientes, faturamento e validação de dados com menos erros e mais velocidade.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/salud",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
