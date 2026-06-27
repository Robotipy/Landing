import { getArticlesByLocale } from "./_assets/content";
import { categories } from "./_assets/categories.js";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Blog de ${config.appName} | Automatización de Procesos, Inteligencia Artificial y Desarrollo de Software`,
  description:
    "Descubre cómo optimizar y automatizar los procesos de tu empresa para maximizar la eficiencia y construir soluciones que impulsen tu crecimiento empresarial",
  canonicalUrlRelative: "/blog",
});

export default async function Blog({ params }) {
  const { locale } = await params;
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
          Blog
        </div>
        <h1 className="mb-5 font-display text-[clamp(32px,4.5vw,50px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
          El Blog de {config.appName}
        </h1>
        <p className="text-[18px] leading-[1.6] text-white/70">
          Descubre cómo optimizar y automatizar los procesos de tu empresa para
          maximizar la eficiencia y construir soluciones que impulsen tu
          crecimiento empresarial.
        </p>
      </section>

      <section className="mb-20 grid gap-6 md:mb-28 lg:grid-cols-2">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <h2 className="mb-8 text-center font-display text-2xl font-extrabold text-white md:mb-12 lg:text-3xl">
          Explora los artículos por categoría
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {usedCategories.map((category) => (
            <CardCategory key={category.slug} category={category} tag="div" />
          ))}
        </div>
      </section>
    </div>
  );
}
