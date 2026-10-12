import NextLink from "next/link";
import { SectionHeader, container, sectionBase } from "./ui";

// Los enlaces van con next/link y href /blog/<slug> (el blog vive sin prefijo
// de idioma), igual que PostLink, para evitar el redirect de /es/blog.
export default function Blog({ posts }) {
  if (!posts.length) return null;
  return (
    <section id="blog" aria-labelledby="blog-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="blog-title"
          eyebrow="Blog"
          title="Lo último que publicamos"
          body="Guías y casos para quien todavía está evaluando."
        />

        <ul className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <NextLink href={`/blog/${post.slug}`} className="h2-card flex h-full flex-col p-6">
                <span className="h2-mono h2-muted text-xs uppercase tracking-[0.12em]">{post.category}</span>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{post.title}</h3>
                <time dateTime={post.publishedAt} className="h2-mono h2-muted mt-auto pt-6 text-xs">
                  {post.date}
                </time>
              </NextLink>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[15px]">
          <NextLink href="/blog" className="h2-link inline-flex min-h-11 items-center">
            Ver todo el blog
          </NextLink>
        </p>
      </div>
    </section>
  );
}
