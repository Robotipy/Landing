import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";

// Tarjeta de artículo usada en el índice, en las categorías y en la página de
// autor. Tema oscuro con borde, coherente con el design system de Robotipy.
const CardArticle = ({
  article,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}) => {
  const TitleTag = tag;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-secondary transition-colors hover:border-accent/40">
      {article.image?.src && (
        <Link href={`/blog/${article.slug}`} title={article.title} rel="bookmark">
          <figure>
            <Image
              src={article.image.src}
              alt={article.image.alt || article.title}
              width={600}
              height={338}
              priority={isImagePriority}
              placeholder="blur"
              className="aspect-video object-cover object-center duration-200 ease-in-out hover:scale-[1.03]"
            />
          </figure>
        </Link>
      )}
      <div className="flex flex-1 flex-col p-6">
        {showCategory && article.categories && article.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {article.categories
              .filter((category) => category && category.slug)
              .map((category) => (
                <BadgeCategory category={category} key={category.slug} />
              ))}
          </div>
        )}

        <TitleTag className="mb-2 font-display text-[20px] font-bold leading-[1.3] text-white">
          <Link
            href={`/blog/${article.slug}`}
            className="hover:text-accent"
            title={article.title}
            rel="bookmark"
          >
            {article.title}
          </Link>
        </TitleTag>

        <p className="mb-5 text-[15px] leading-[1.6] text-white/70">
          {article.description}
        </p>

        <div className="mt-auto flex items-center gap-3 text-[13px] text-white/60">
          <span>{article.author.name}</span>
          <span className="h-[3px] w-[3px] rounded-full bg-white/30" />
          <span itemProp="datePublished">
            {new Date(article.publishedAt).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
            })}
          </span>
          {article.readingTime && (
            <>
              <span className="h-[3px] w-[3px] rounded-full bg-white/30" />
              <span className="inline-flex items-center gap-1.5">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                    clipRule="evenodd"
                  />
                </svg>
                {article.readingTime} min
              </span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardArticle;
