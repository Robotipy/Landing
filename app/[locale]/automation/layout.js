import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const META = {
  es: {
    title: "Información de automatización | Robotipy",
    description:
      "Cuéntanos tus necesidades de automatización y nuestro equipo creará una solución RPA a medida para tu empresa.",
  },
  en: {
    title: `Client Information | ${config.appName}`,
    description:
      "Share your automation needs with us. Our team will create a customized RPA solution for your business.",
  },
  pt: {
    title: "Informações de automação | Robotipy",
    description:
      "Conte-nos suas necessidades de automação e nossa equipe criará uma solução RPA sob medida para a sua empresa.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/capacitaciones",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
} 