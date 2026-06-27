import Image from "next/image";
import { authors } from "../../_assets/authors";
import { getArticlesByLocale } from "../../_assets/content";
import CardArticle from "../../_assets/components/CardArticle";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const { authorId } = await params;
  const author = authors.find((author) => author.slug === authorId);

  return getSEOTags({
    title: `${author.name}, autor en el Blog de ${config.appName}`,
    description: `${author.name}, autor en el Blog de ${config.appName}`,
    canonicalUrlRelative: `/blog/author/${author.slug}`,
  });
}

export default async function Author({ params }) {
  const { authorId, locale } = await params;
  const author = authors.find((author) => author.slug === authorId);
  const articlesByAuthor = getArticlesByLocale(locale)
    .filter((article) => article.author.slug === author.slug)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <div className="mx-auto max-w-[1140px] px-6 py-16">
      <section className="mx-auto mb-16 flex max-w-3xl flex-col gap-8 md:mb-24 md:flex-row md:items-center">
        <div>
          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Autor
          </div>
          <h1 className="mb-2 font-display text-[clamp(32px,4.5vw,50px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
            {author.name}
          </h1>
          <p className="mb-6 font-display text-[18px] font-medium text-accent">
            {author.job}
          </p>
          <p className="text-[18px] leading-[1.6] text-white/70">
            {author.description}
          </p>
        </div>

        <div className="flex shrink-0 gap-4 max-md:order-first md:flex-col md:items-center">
          <Image
            src={author.avatar}
            width={256}
            height={256}
            alt={author.name}
            priority={true}
            unoptimized={author.avatar?.src?.endsWith?.(".svg") ?? false}
            className="w-[12rem] rounded-2xl md:w-[16rem]"
          />

          {author.socials?.length > 0 && (
            <div className="flex gap-3">
              {author.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.07] bg-secondary text-white transition-colors hover:border-accent/40 hover:text-accent [&_svg]:h-5 [&_svg]:w-5 [&_svg]:fill-current"
                  title={`Ir al perfil de ${author.name} en ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center font-display text-2xl font-extrabold text-white md:mb-12 lg:text-3xl">
          Artículos recientes de {author.name}
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {articlesByAuthor.map((article) => (
            <CardArticle key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
