import { routes } from "@/libs/landingFacts";
import { findPost, formatPostDate, postHref, publishedPosts } from "./blog";
import { AppLink, bandWhite, btnSecondaryLight, cardHover, container, line, SectionHeader, sectionY, textLink, textMuted } from "./ui";

const BUYING_GUIDES = [
  "cuanto-cuesta-automatizar-un-proceso",
  "como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros",
  "que-procesos-de-sap-se-pueden-automatizar-con-rpa",
];

const NEWSLETTER_URL = "https://newsletter.robotipy.com";

export default function LatestPosts() {
  const latest = publishedPosts().slice(0, 3);
  const latestSlugs = new Set(latest.map((post) => post.slug));
  const guides = BUYING_GUIDES.filter((slug) => !latestSlugs.has(slug)).map(findPost).filter(Boolean);

  if (latest.length === 0) return null;

  return (
    <section id="blog" aria-labelledby="blog-titulo" className={`${bandWhite} ${sectionY}`}>
      <div className={container}>
        <SectionHeader titleId="blog-titulo" eyebrow="Blog" title="Guías para decidir antes de invertir" />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-8">
          <ul className="grid gap-5 md:grid-cols-3 lg:col-span-9">
            {latest.map((post) => (
              <li
                key={post.slug}
                className={`relative flex min-w-0 flex-col rounded-2xl border ${line} bg-white p-6 ${cardHover} hover:border-[#B9C6D3]`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#027A79]">
                  {post.categories?.[0]?.title || "Blog"}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-[26px] text-[#0A2540] [text-wrap:pretty]">
                  <AppLink
                    href={postHref(post.slug)}
                    className="decoration-[#027A79] underline-offset-4 after:absolute after:inset-0 after:rounded-2xl after:content-[''] hover:underline"
                  >
                    {post.title}
                  </AppLink>
                </h3>
                <p className={`mt-auto pt-6 text-sm leading-5 ${textMuted}`}>
                  <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                  {post.author?.name && (
                    <>
                      <br />
                      {post.author.name}
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>

          <aside
            aria-labelledby={guides.length > 0 ? "guias-compra" : undefined}
            aria-label={guides.length > 0 ? undefined : "Más del blog"}
            className="min-w-0 lg:col-span-3"
          >
            {guides.length > 0 && (
              <>
                <h3 id="guias-compra" className="text-base font-bold leading-6">
                  Para decidir la compra
                </h3>
                <ul className={`mt-4 divide-y divide-[#E3E8EE] border-y ${line}`}>
                  {guides.map((post) => (
                    <li key={post.slug} className="py-3">
                      <AppLink href={postHref(post.slug)} className={`${textLink} text-[15px] leading-6`}>
                        {post.title}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-6 flex flex-col gap-3">
              <AppLink href={routes.blog} className={`${btnSecondaryLight} w-full`}>
                Ver el blog
              </AppLink>
              <AppLink href={NEWSLETTER_URL} className={`${textLink} text-center text-[15px] leading-6`}>
                Suscríbete al boletín
              </AppLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
