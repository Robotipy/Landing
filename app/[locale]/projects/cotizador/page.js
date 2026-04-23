import { useTranslations } from "next-intl";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

const howItWorksKeys = [
  "templates",
  "estimation",
  "toProject",
  "versionHistory",
];

export default function CotizadorPage() {
  const t = useTranslations("productsProjects.featurePages.cotizador");
  const howItWorks = howItWorksKeys.map((key) => ({
    title: t(`howItWorks.${key}.title`),
    description: t(`howItWorks.${key}.description`),
  }));

  return (
    <FeaturePageTemplate
      title={t("title")}
      subtitle={t("subtitle")}
      howItWorks={howItWorks}
      problemDescription={t("problemDescription")}
    />
  );
}
