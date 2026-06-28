import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByLocale } from "../_assets/content";
import BadgeCategory from "../_assets/components/BadgeCategory";
import ReadingProgress from "../_assets/components/ReadingProgress";
import ArticleShare from "../_assets/components/ArticleShare";
import StickyCta from "../_assets/components/StickyCta";
import logo from "@/app/icon.png";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const articleId = resolvedParams?.articleId;
  const locale = resolvedParams?.locale;
  const localeArticles = getArticlesByLocale(locale);

  if (!articleId || !Array.isArray(localeArticles)) {
    return getSEOTags({
      title: "Artículo no encontrado",
      description: "El artículo solicitado no se pudo encontrar.",
    });
  }

  const article = localeArticles.find((article) => article.slug === articleId);

  if (!article) {
    return getSEOTags({
      title: "Artículo no encontrado",
      description: "El artículo solicitado no se pudo encontrar.",
    });
  }

  return getSEOTags({
    title: article.title,
    description: article.description,
    canonicalUrlRelative: `/blog/${article.slug}`,
    extraTags: {
      openGraph: {
        title: article.title,
        description: article.description,
        url: `/blog/${article.slug}`,
        images: [
          {
            url: article.image.urlRelative,
            width: 1200,
            height: 660,
          },
        ],
        locale: "es_LA",
        type: "article",
      },
    },
  });
}

// Enlaces evergreen para que "Sigue leyendo" siempre muestre tres tarjetas,
// incluso cuando no hay suficientes artículos relacionados.
const EVERGREEN = [
  {
    tag: "Herramienta",
    title: "Calcula el ROI de automatizar",
    href: "/roi-calculator",
    meta: "Calculadora interactiva",
  },
  {
    tag: "Casos de éxito",
    title: "Casos reales de automatización",
    href: "/casos-exito",
    meta: "Resultados medibles",
  },
  {
    tag: "Robotipy",
    title: "Conoce qué hacemos",
    href: "/",
    meta: "RPA, IA y software a medida",
  },
];

export default async function Article({ params }) {
  const resolvedParams = await params;
  const articleId = resolvedParams?.articleId;
  const locale = resolvedParams?.locale;
  const localeArticles = getArticlesByLocale(locale);

  if (!articleId) {
    notFound();
  }

  const article = localeArticles.find((article) => article.slug === articleId);

  if (!article) {
    notFound();
  }

  const articleCategories = (article.categories || []).filter(Boolean);
  const category = articleCategories[0];

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    "es-ES",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const toCard = (a) => ({
    tag: a.categories?.find(Boolean)?.titleShort || "Blog",
    title: a.title,
    href: `/blog/${a.slug}`,
    meta: a.readingTime ? `${a.readingTime} min de lectura` : "Artículo",
  });

  const others = localeArticles
    .filter((a) => a.slug !== articleId)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Primero artículos que comparten categoría, luego cualquier reciente y, por
  // último, evergreen para que siempre haya tres tarjetas.
  const sameCategory = others.filter(
    (a) =>
      a.categories &&
      a.categories
        .filter(Boolean)
        .some((c) => articleCategories.map((x) => x.slug).includes(c.slug))
  );
  const relatedPosts = [
    ...sameCategory,
    ...others.filter((a) => !sameCategory.includes(a)),
  ];
  const readMore = [...relatedPosts.map(toCard), ...EVERGREEN].slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-[#00182B]">
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://${config.domainName}/blog/${article.slug}`,
            },
            name: article.title,
            headline: article.title,
            description: article.description,
            image: `https://${config.domainName}${article.image.urlRelative}`,
            datePublished: article.publishedAt,
            dateModified: article.publishedAt,
            author: {
              "@type": "Person",
              name: article.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: config.appName,
              logo: {
                "@type": "ImageObject",
                url: `https://${config.domainName}/images/robotipy-logo.png`,
              },
            },
          }),
        }}
      />

      {Array.isArray(article.faq) && article.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            }),
          }}
        />
      )}

      <ReadingProgress />
      <StickyCta />

      <article className="relative mx-auto max-w-[880px] px-6 pt-8">
        {/* TOP BAR: VOLVER + COMPARTIR */}
        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2.5 text-[14px] text-white/70 transition-colors hover:text-accent"
            title="Volver al Blog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              />
            </svg>
            Volver al Blog
          </Link>
          <ArticleShare title={article.title} />
        </div>

        {/* HEADER CENTRADO */}
        <header className="mx-auto max-w-[700px] text-center">
          <Image
            src={logo}
            alt={config.appName}
            width={80}
            height={80}
            className="mx-auto mb-[22px] h-16 w-16 object-contain"
            priority
          />
          <div className="mb-[22px] inline-flex flex-wrap items-center justify-center gap-3 text-[13px] text-white/60">
            {category && (
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.06em] text-accent">
                {category.titleShort || category.title}
              </span>
            )}
            {article.readingTime && (
              <>
                <span className="h-[3px] w-[3px] rounded-full bg-white/30" />
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-[11px] h-[11px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {article.readingTime} min de lectura
                </span>
              </>
            )}
            <span className="h-[3px] w-[3px] rounded-full bg-white/30" />
            <span itemProp="datePublished">{formattedDate}</span>
          </div>
          <h1 className="mb-[18px] font-display text-[34px] font-extrabold leading-[1.07] tracking-[-0.025em] text-white md:text-[42px]">
            {article.title}
          </h1>
          <p className="text-[18px] leading-[1.6] text-white/70">
            {article.description}
          </p>
        </header>

        <div className="mx-auto my-10 h-[3px] w-[46px] rounded-sm bg-accent" />

        {/* CUERPO */}
        <div className="space-y-12">{article.content}</div>

        {/* BIO DEL AUTOR */}
        <div className="mx-auto mt-12 flex max-w-[700px] items-center gap-4 rounded-2xl border border-white/[0.07] bg-secondary px-7 py-[26px]">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent/20">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={56}
              height={56}
              unoptimized={article.author.avatar?.src?.endsWith?.(".svg") ?? false}
              className="h-14 w-14 object-cover object-center"
            />
          </span>
          <div>
            <div className="mb-0.5 font-display text-[16px] font-bold text-white">
              {article.author.name}
            </div>
            {article.author.job && (
              <div className="mb-1 text-[13px] font-medium text-accent">
                {article.author.job}
              </div>
            )}
            <div className="text-[14px] leading-[1.5] text-white/70">
              {article.author.description}
            </div>
          </div>
        </div>
      </article>

      {/* SIGUE LEYENDO */}
      <div className="relative mx-auto max-w-[880px] px-6 pb-[72px] pt-16">
        <div className="mb-6 font-display text-[22px] font-extrabold text-white">
          Sigue leyendo
        </div>
        <div className="flex flex-wrap gap-5">
          {readMore.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="block min-w-[210px] flex-1 rounded-2xl border border-white/[0.07] bg-secondary p-6 transition-colors hover:border-accent/40"
            >
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.06em] text-accent">
                {card.tag}
              </span>
              <div className="my-3 font-display text-[18px] font-bold leading-[1.3] text-white">
                {card.title}
              </div>
              <div className="text-[13px] text-white/60">{card.meta}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
