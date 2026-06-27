import { categories } from "../../_assets/categories";
import { getArticlesByLocale } from "../../_assets/content";
import CardArticle from "../../_assets/components/CardArticle";
import CardCategory from "../../_assets/components/CardCategory";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const category = categories.find((category) => category.slug === categoryId);

  return getSEOTags({
    title: `${category.title} | Blog de ${config.appName}`,
    description: category.description,
    canonicalUrlRelative: `/blog/category/${category.slug}`,
  });
}

export default async function Category({ params }) {
  const { categoryId, locale } = await params;
  const category = categories.find((category) => category.slug === categoryId);
  const articlesInCategory = getArticlesByLocale(locale)
    .filter((article) =>
      article.categories.map((c) => c.slug).includes(category.slug)
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-16">
      <section className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
        <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Categoría
        </div>
        <h1 className="mb-5 font-display text-[clamp(32px,4.5vw,50px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
          {category.title}
        </h1>
        <p className="text-[18px] leading-[1.6] text-white/70">
          {category.description}
        </p>
      </section>

      <section className="mb-20 md:mb-28">
        <h2 className="mb-8 text-center font-display text-2xl font-extrabold text-white md:mb-12 lg:text-3xl">
          Artículos recientes en {category.title}
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {articlesInCategory.map((article) => (
            <CardArticle
              key={article.slug}
              article={article}
              tag="h3"
              showCategory={false}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center font-display text-2xl font-extrabold text-white md:mb-12 lg:text-3xl">
          Otras categorías que te pueden interesar
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories
            .filter((c) => c.slug !== category.slug)
            .map((category) => (
              <CardCategory key={category.slug} category={category} tag="h3" />
            ))}
        </div>
      </section>
    </div>
  );
}
