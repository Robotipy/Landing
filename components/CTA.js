import { useTranslations } from "next-intl";
import ButtonMain from "./ButtonMain";

const CTA = () => {
  const t = useTranslations("cta");
  return (
    <section className="flex flex-col item-center justify-center overflow-hidden lg:py-12 py-4 lg:px-12 px-4 text-white">
      <div className="text-center p-2 lg:p-8">
        <div className="flex flex-col gap-5 items-center p-8 md:p-0 ">
          <h2 className="text-4xl md:text-7xl tracking-tight">
            {t.rich("title", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </h2>
          <p className="text-base lg:px-40">{t("subtitle")}</p>
          <ButtonMain text={t("button")} link="/contact-us" noblank={true} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
