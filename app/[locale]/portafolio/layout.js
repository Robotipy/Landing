import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Portafolio de Casos de Éxito | Robotipy",
    description:
      "Descubre todos nuestros casos de éxito en automatización y RPA para diferentes industrias. Soluciones que transformaron procesos empresariales.",
  },
  en: {
    title: "Portfolio of Success Stories | Robotipy",
    description:
      "Discover all our success stories in automation and RPA across different industries. Solutions that transformed business processes.",
  },
  pt: {
    title: "Portfólio de Casos de Sucesso | Robotipy",
    description:
      "Conheça todos os nossos casos de sucesso em automação e RPA para diferentes indústrias. Soluções que transformaram processos empresariais.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/portafolio",
  });
}

export default function PortfolioLayout({ children }) {
  return children;
}
