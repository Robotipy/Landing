import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Casos RPA e IA en Alimentos y Bebidas | Robotipy",
    description:
      "Casos reales de automatización RPA e IA en alimentos y bebidas: facturación, inventario y reportes con menos errores y más velocidad.",
  },
  en: {
    title: "RPA and AI Cases in Food and Beverage | Robotipy",
    description:
      "Real RPA and AI automation cases in food and beverage: billing, inventory and reports with fewer errors and greater speed.",
  },
  pt: {
    title: "Casos RPA e IA em Alimentos e Bebidas | Robotipy",
    description:
      "Casos reais de automação RPA e IA em alimentos e bebidas: faturamento, estoque e relatórios com menos erros e mais velocidade.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/casos-exito/alimentos",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
