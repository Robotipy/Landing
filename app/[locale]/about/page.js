import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import daniloToroImg from "@/app/[locale]/blog/_assets/images/authors/danilo-toro.png";
import ivanCabreraImg from "@/app/[locale]/blog/_assets/images/authors/ivan-cabrera.png";
import gabrielToroImg from "@/app/[locale]/blog/_assets/images/authors/gabriel-toro.jpeg";

const SITE = "https://www.robotipy.com";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.pages.about" });
  return getSEOTags({
    locale,
    title: t("title"),
    description: t("description"),
    canonicalUrlRelative: "/about",
  });
}

const team = [
  {
    key: "danilo",
    image: daniloToroImg,
    authorSlug: "danilo-toro",
    linkedin: "https://www.linkedin.com/in/danilotorol/",
  },
  { key: "ivan", image: ivanCabreraImg, authorSlug: "ivan-cabrera" },
  { key: "gabriel", image: gabrielToroImg, authorSlug: "gabriel-toro" },
];
const factKeys = ["founded", "projects", "countries", "partner"];
const principleKeys = ["results", "innovation", "transparency"];
const processKeys = ["discovery", "design", "development", "deployment"];

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE}/${locale}/about`,
    name: t("hero.eyebrow"),
    about: { "@id": `${SITE}/#organization` },
    mainEntity: team.map((member) => ({
      "@type": "Person",
      name: t(`team.members.${member.key}.name`),
      jobTitle: t(`team.members.${member.key}.role`),
      description: t(`team.members.${member.key}.description`),
      image: `${SITE}${member.image.src}`,
      url: `${SITE}/blog/author/${member.authorSlug}`,
      worksFor: { "@id": `${SITE}/#organization` },
      ...(member.linkedin ? { sameAs: [member.linkedin] } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense>
        <Header />
      </Suspense>
      <main className="bg-background-light dark:bg-background-dark">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <section className="rounded-lg bg-primary px-6 py-14 md:px-12 text-center">
              <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {t("hero.eyebrow")}
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-heading">
                {t("hero.title")}
              </h1>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-5">
                {t("hero.subtitle")}
              </p>
            </section>

            <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-6">
              {factKeys.map((key) => (
                <div
                  key={key}
                  className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-background-dark p-4 text-center"
                >
                  <dt className="text-text-light dark:text-text-dark text-sm">
                    {t(`facts.${key}.label`)}
                  </dt>
                  <dd className="text-text-primary dark:text-text-primary-dark text-xl font-bold mt-1">
                    {t(`facts.${key}.value`)}
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-10 font-heading">
              {t("team.title")}
            </h2>
            <p className="text-text-light dark:text-text-dark px-4 pt-2 pb-3">
              {t("team.subtitle")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4">
              {team.map((member) => (
                <div
                  key={member.key}
                  className="flex flex-col gap-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-background-dark p-5"
                >
                  <Image
                    src={member.image}
                    alt={t(`team.members.${member.key}.name`)}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-text-primary dark:text-text-primary-dark text-base font-bold leading-normal">
                      {t(`team.members.${member.key}.name`)}
                    </h3>
                    <p className="text-accent text-sm font-bold leading-normal">
                      {t(`team.members.${member.key}.role`)}
                    </p>
                    <p className="text-text-light dark:text-text-dark text-sm leading-normal mt-2">
                      {t(`team.members.${member.key}.description`)}
                    </p>
                  </div>
                  <div className="mt-auto flex gap-4 text-sm">
                    <Link
                      href={`/blog/author/${member.authorSlug}`}
                      className="text-accent hover:underline"
                    >
                      {t("team.articlesLink")}
                    </Link>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">
              {t("stack.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-background-dark p-5">
                <h3 className="text-text-primary dark:text-text-primary-dark font-bold">
                  {t("stack.platformsTitle")}
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mt-2">
                  {t("stack.platforms")}
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-background-dark p-5">
                <h3 className="text-text-primary dark:text-text-primary-dark font-bold">
                  {t("stack.systemsTitle")}
                </h3>
                <p className="text-text-light dark:text-text-dark text-sm mt-2">
                  {t("stack.systems")}
                </p>
              </div>
            </div>

            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">
              {t("principles.title")}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
              {principleKeys.map((key) => (
                <div
                  key={key}
                  className="flex flex-col gap-1 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-background-dark p-4"
                >
                  <h3 className="text-text-primary dark:text-text-primary-dark text-base font-bold leading-tight">
                    {t(`principles.items.${key}.title`)}
                  </h3>
                  <p className="text-text-light dark:text-text-dark text-sm leading-normal">
                    {t(`principles.items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">
              {t("process.title")}
            </h2>
            <ol className="grid md:grid-cols-2 gap-6 p-4">
              {processKeys.map((key, index) => (
                <li key={key} className="flex items-start gap-4">
                  <span className="flex-shrink-0 bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-text-primary dark:text-text-primary-dark">
                      {t(`process.steps.${key}.title`)}
                    </h3>
                    <p className="text-text-light dark:text-text-dark mt-1">
                      {t(`process.steps.${key}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="text-center py-16 px-4">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark font-heading">
                {t("cta.title")}
              </h2>
              <p className="text-text-light dark:text-text-dark mt-2 max-w-xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <Link
                href={`/${locale}/contact-us`}
                className="mt-6 inline-flex items-center justify-center rounded-lg h-12 px-8 bg-accent text-white text-base font-bold hover:bg-opacity-90 transition-colors"
              >
                {t("cta.button")}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
