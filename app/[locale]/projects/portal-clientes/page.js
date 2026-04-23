import { useTranslations } from "next-intl";
import FeaturePageTemplate from "@/components/FeaturePageTemplate";

const howItWorksKeys = [
  "customPortal",
  "realtimeUpdates",
  "approval",
  "centralComms",
];

export default function PortalClientesPage() {
  const t = useTranslations("productsProjects.featurePages.portalClientes");
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
