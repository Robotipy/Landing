import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-base-content/10 text-white">
      <div className="px-8 md:px-12 mx-auto py-24">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 w-full">
          <div className="w-full mx-auto md:mx-0 text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm md:text-base leading-relaxed">
              {t("description")}
            </p>
            <p className="mt-3 text-sm md:text-base leading-relaxed">
              {t.rich("regions", {
                strong: (chunks) => (
                  <strong className="text-white">{chunks}</strong>
                ),
              })}
            </p>
            <p className="mt-3 text-sm">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3 text-center md:text-left">
            <span className="text-sm font-semibold text-gray-400">
              {t("partnersTitle")}
            </span>
            <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
              <span className="badge badge-outline badge-lg px-4 py-2 text-sm font-medium border-gray-500 text-gray-300 hover:border-gray-400 hover:text-gray-200 transition-colors whitespace-nowrap">
                {t("partners.platinum")}
              </span>
              <span className="badge badge-outline badge-lg px-4 py-2 text-sm font-medium border-gray-500 text-gray-300 hover:border-gray-400 hover:text-gray-200 transition-colors whitespace-nowrap">
                {t("partners.certified")}
              </span>
            </div>
          </div>
          <div className="w-full xl:w-2/3 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-8 justify-center md:justify-end">
            <div className="w-full md:w-auto px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3 text-center md:text-left">
                {t("sections.rpa.title")}
              </div>
              <div className="flex flex-col gap-4 justify-center items-center md:items-start mb-10 text-sm">
                <Link href="/rpa" className="link link-hover text-start">
                  {t("sections.rpa.whyRpa")}
                </Link>
                <Link href="#" className="link link-hover text-start">
                  {t("sections.rpa.rocketbot")}
                </Link>
              </div>
            </div>
            <div className="w-full md:w-auto px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3 text-center md:text-left">
                {t("sections.solutions.title")}
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-4 mb-10 text-sm">
                <Link
                  href="/capacitaciones"
                  className="link link-hover text-start"
                >
                  {t("sections.solutions.training")}
                </Link>
                <Link href="/automation" className="link link-hover text-start">
                  {t("sections.solutions.automation")}
                </Link>
                <Link href="/chatbot" className="link link-hover text-start">
                  {t("sections.solutions.chatbots")}
                </Link>
                <Link
                  href="/desarrollo-software"
                  className="link link-hover text-start"
                >
                  {t("sections.solutions.software")}
                </Link>
              </div>
            </div>
            <div className="w-full md:w-auto px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3 text-center md:text-left">
                {t("sections.products.title")}
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-4 mb-10 text-sm">
                <Link href="/projects" className="link link-hover text-start">
                  {t("sections.products.projects")}
                </Link>
                <Link href="/monitor" className="link link-hover text-start">
                  {t("sections.products.monitor")}
                </Link>
                <Link href="/analysis" className="link link-hover text-start">
                  {t("sections.products.analysis")}
                </Link>
              </div>
            </div>
            <div className="w-full md:w-auto px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3 text-center md:text-left">
                {t("sections.resources.title")}
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/blog" className="link link-hover text-start">
                  {t("sections.resources.blog")}
                </Link>
                <a
                  href="https://newsletter.robotipy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover text-start"
                >
                  {t("sections.resources.newsletter")}
                </a>
              </div>
            </div>
            <div className="w-full md:w-auto px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3 text-center md:text-left">
                {t("sections.company.title")}
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover text-start">
                  {t("sections.company.tos")}
                </Link>
                <Link
                  href="/privacy-policy"
                  className="link link-hover text-start"
                >
                  {t("sections.company.privacy")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
