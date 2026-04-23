import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Solutions = () => {
  const t = useTranslations("solutions");
  const solutions = [
    {
      icon: "/assets/icons/rpa_icon.png",
      key: "rpa",
      link: "/automation",
    },
    {
      icon: "/assets/icons/chatbot_icon.png",
      key: "chatbot",
      link: "/chatbot",
    },
    {
      icon: "/assets/icons/training_icon.png",
      key: "training",
      link: "/capacitaciones",
    },
    {
      icon: "/assets/icons/ai_icon.png",
      key: "ai",
      link: "/contact-us",
    },
    {
      icon: "/assets/icons/software_icon.png",
      key: "software",
      link: "/desarrollo-software",
    },
    {
      icon: "/assets/icons/object_icon.png",
      key: "staffOutsourcing",
      link: "/contact-us",
    },
  ];

  return (
    <section className="py-20 md:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("sectionTitle")}
          </h2>
          <p className="mt-4 text-lg text-white">{t("sectionSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution) => {
            const title = t(`items.${solution.key}.title`);
            return (
              <div
                key={solution.key}
                className="flex flex-col gap-1 rounded-xl p-5 text-center items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                style={{ backgroundColor: "#11222c" }}
              >
                <div className="text-accent">
                  <Image
                    src={solution.icon}
                    alt={title}
                    className="w-120 h-120"
                    width={150}
                    height={150}
                  />
                </div>
                <h3 className="text-xl font-bold text-success">{title}</h3>
                <p className="text-text-light dark:text-white text-base text-md">
                  {t(`items.${solution.key}.description`)}
                </p>
                <Link
                  href={solution.link}
                  className="mt-2 font-bold text-accent hover:underline"
                >
                  {t("learnMore")}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
