import { getSEOTags } from "@/libs/seo";

const META = {
  es: {
    title: "Precios: Software de Gestión para Consultoras | Robotipy Projects",
    description:
      "Planes simples para consultoras de cualquier tamaño. 30 días gratis, sin tarjeta de crédito. Freelancer y Studio.",
  },
  en: {
    title: "Pricing: Management Software for Consultancies | Robotipy Projects",
    description:
      "Simple plans for consultancies of any size. 30 days free, no credit card required. Freelancer and Studio.",
  },
  pt: {
    title: "Preços: Software de Gestão para Consultorias | Robotipy Projects",
    description:
      "Planos simples para consultorias de qualquer tamanho. 30 dias grátis, sem cartão de crédito. Freelancer e Studio.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const m = META[locale] || META.es;
  return getSEOTags({
    locale,
    title: m.title,
    description: m.description,
    canonicalUrlRelative: "/projects/pricing",
  });
}

export default function Layout({ children }) {
  return <>{children}</>;
}
