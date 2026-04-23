import config from "@/config";
import ilusflow from "../../../../public/assets/ilus-flow.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import logo from "@/app/icon.png";
import Rocketbot from "../../../../public/images/rocketbotwhite.svg";

const WhatIsRpa = () => {
  const t = useTranslations("rpa.whatIs");
  return (
    <section className="flex flex-col justify-center items-center text-neutral-content lg:p-12 lg:my-20 lg:mx-32">
      <div className="flex flex-col mx-auto px-1 lg:px-12 py-12 lg:py-16 text-start justify-center items-start">
        <h1 className="mx-auto text-5xl md:text-6xl tracking-tight mb-6 md:mb-8 w-full px-5 lg:px-40">
          {t.rich("title", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </h1>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40 pb-4">
          {t("paragraph1")}
        </p>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40">
          {t("paragraph2")}
        </p>
      </div>
      <Image src={ilusflow} alt="ilus-flow.png"></Image>
      <h1 className="flex flex-col mx-auto px-12 text-start justify-center items-start border border-teal-700 w-full max-w-[1160px] mt-24"></h1>
      <div className="flex flex-col mx-auto px-1 lg:px-12 py-12 lg:py-16 text-start justify-center items-start">
        <div className="mx-auto flex justify-start items-start text-5xl md:text-6xl tracking-tight mb-6 md:mb-8 w-full px-5 lg:px-40">
          <h1 className="flex flex-row justify-center items-center gap-x-4">
            <strong>Rocketbot</strong>
            RPA
          </h1>
        </div>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40 pb-4">
          {t("rocketbotParagraph1")}
        </p>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40">
          {t("rocketbotParagraph2")}
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-12 h-[80px] mb-10">
        <Link
          href="/#"
          aria-current="page"
          className="flex gap-2 justify-center md:justify-start items-center"
        >
          <Image
            src={logo}
            alt={`${config.appName} logo`}
            priority={true}
            className="lg:w-12 lg:h-12 h-8 w-8"
          />
          <strong className="font-extrabold tracking-tight text-2xl md:text-4xl">
            {config.appName}
          </strong>
        </Link>
        +
        <Image src={Rocketbot} alt="Rocketbot Logo" className="h-44 w-44 lg:w-[280px] mt-1"></Image>
      </div>
    </section>
  );
};

export default WhatIsRpa;
