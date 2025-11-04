import { articles } from "./_assets/content";
import { categories } from "./_assets/categories.js";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `${config.appName} Blog | Automatización de Procesos, Inteligencia Artificial y Desarrollo de Software`,
  description:
    "Descubre cómo optimizar y automatizar los procesos de tu empresa para maximizar la eficiencia y construir soluciones que impulsen tu crecimiento empresarial",
  canonicalUrlRelative: "/blog",
});

export default async function Blog() {
  const articlesToDisplay = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 6);
  return (
    <>
      <section className="text-center max-w-5xl mx-auto mt-12 mb-24 md:mb-32">
        <h1 className="text-white text-3xl lg:text-5xl tracking-tight mb-6">
          The {config.appName} Blog
        </h1>
        <p className="text-white text-lg opacity-80 leading-relaxed">
            Descubre cómo optimizar y automatizar los procesos de tu empresa para maximizar la eficiencia y construir soluciones que impulsen tu crecimiento empresarial
        </p>
      </section>

      <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <p className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12 text-white">
          Explora los artículos por categoría
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CardCategory key={category.slug} category={category} tag="div" />
          ))}
        </div>
      </section>
    </>
  );
}
