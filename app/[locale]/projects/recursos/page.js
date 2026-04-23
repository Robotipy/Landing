import { useTranslations } from "next-intl";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

const howItWorksKeys = [
  "capacityView",
  "smartAssign",
  "forecast",
  "alerts",
];

export default function RecursosPage() {
  const t = useTranslations("productsProjects.featurePages.recursos");
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
