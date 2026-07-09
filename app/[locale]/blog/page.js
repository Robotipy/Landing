import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { getArticlesByLocale } from "./_assets/content";
import { categories } from "./_assets/categories.js";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

// Los artículos hoy se publican solo en español. Cuando alguien entra al blog
// en otro idioma, mostramos un aviso con enlace a la versión en español en vez
// de una grilla vacía.
const EMPTY_COPY = {
  en: {
    heading: "No articles in English yet",
    body: "We publish the blog in Spanish for now. You can read every article there.",
    cta: "Read the blog in Spanish",
  },
  pt: {
    heading: "Ainda não há artigos em português",
    body: "Por enquanto publicamos o blog em espanhol. Você pode ler todos os artigos lá.",
    cta: "Ler o blog em espanhol",
  },
  es: {
    heading: "Todavía no hay artículos en este idioma",
    body: "Por ahora publicamos el blog en español. Puedes leer todos los artículos ahí.",
    cta: "Ver el blog en español",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return getSEOTags({
    locale,
    title: `${t("heroTitle", { appName: config.appName })} | ${config.appName}`,
    description: t("heroSubtitle"),
    canonicalUrlRelative: "/blog",
  });
}

export default async function Blog({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const articlesToDisplay = getArticlesByLocale(locale).sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  // Solo mostramos categorías que tienen artículos publicados en este locale.
  const usedCategories = categories.filter((c) =>
    articlesToDisplay.some((a) =>
      (a.categories || []).some((ac) => ac && ac.slug === c.slug)
    )
  );

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-16">
      <section className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
        <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          {t("eyebrow")}
        </div>
        <h1 className="mb-5 font-display text-[clamp(32px,4.5vw,50px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
          {t("heroTitle", { appName: config.appName })}
        </h1>
        <p className="text-[18px] leading-[1.6] text-white/70">
          {t("heroSubtitle")}
        </p>
      </section>

      {articlesToDisplay.length === 0 ? (
        <section className="mx-auto mb-20 max-w-xl rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center md:mb-28">
          <h2 className="mb-3 font-display text-2xl font-extrabold text-white">
            {(EMPTY_COPY[locale] || EMPTY_COPY.es).heading}
          </h2>
          <p className="mb-8 text-[16px] leading-[1.6] text-white/70">
            {(EMPTY_COPY[locale] || EMPTY_COPY.es).body}
          </p>
          <Link
            href="/blog"
            locale="es"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-display text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {(EMPTY_COPY[locale] || EMPTY_COPY.es).cta}
          </Link>
        </section>
      ) : (
        <section className="mb-20 grid gap-6 md:mb-28 lg:grid-cols-2">
          {articlesToDisplay.map((article, i) => (
            <CardArticle
              article={article}
              key={article.slug}
              isImagePriority={i <= 2}
            />
          ))}
        </section>
      )}

      {usedCategories.length > 0 && (
        <section>
          <h2 className="mb-8 text-center font-display text-2xl font-extrabold text-white md:mb-12 lg:text-3xl">
            {t("categoriesHeading")}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {usedCategories.map((category) => (
              <CardCategory key={category.slug} category={category} tag="div" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
