import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos de éxito en seguros | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en seguros: emisión de pólizas, gestión de siniestros y validación de datos con menos errores y más velocidad.",
  },
  en: {
    title: "Insurance success cases | Robotipy",
    description:
      "Real RPA and AI automation cases in insurance: policy issuance, claims management and data validation with fewer errors and greater speed.",
  },
  pt: {
    title: "Casos de sucesso em seguros | Robotipy",
    description:
      "Casos reais de automação RPA e IA em seguros: emissão de apólices, gestão de sinistros e validação de dados com menos erros e mais velocidade.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/seguros",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
