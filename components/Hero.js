import { useTranslations } from "next-intl";
import ButtonMain from "./ButtonMain";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-12 py-20 lg:py-32 lg:px-20 h-600 background-image">
      <div className="flex flex-col gap-4 lg:gap-8 items-center self-stretch text-center w-1200 text-white">
        <h1 className="text-4xl lg:text-7xl tracking-tight text-center">
          {t.rich("title", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br: () => <br />,
          })}
        </h1>
        <p className="text-lg lg:text-xl w-3/4">
          {t.rich("subtitle", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br: () => <br />,
          })}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <ButtonMain text={t("contactButton")} link="/contact-us" type="quaternary" />
          <ButtonMain
            text={t("projectsButton")}
            link="/portafolio"
            type="primary"
            noblank={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
