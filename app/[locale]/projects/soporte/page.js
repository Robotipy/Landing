import { useTranslations } from "next-intl";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

const howItWorksKeys = ["ticketPortal", "slas", "assignment", "metrics"];

export default function SoportePage() {
  const t = useTranslations("productsProjects.featurePages.soporte");
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
