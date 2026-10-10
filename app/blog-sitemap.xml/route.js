import { getArticlesByLocale } from "@/app/[locale]/blog/_assets/content";
import { categories } from "@/app/[locale]/blog/_assets/categories";
import { authors } from "@/app/[locale]/blog/_assets/authors";

// Sitemap del blog separado del que genera next-sitemap en el build: se
// regenera cada hora y solo lista posts ya publicados, así los programados
// entran el día que corresponde sin redeploy. next-sitemap lo enlaza desde
// el índice sitemap.xml (ver robotsTxtOptions.additionalSitemaps).
export const revalidate = 3600;

const siteUrl = process.env.SITE_URL || "https://www.robotipy.com";

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const urlEntry = (path, lastmod) =>
  [
    "  <url>",
    `    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");

export function GET() {
  const posts = getArticlesByLocale("es");
  const lastmodOf = (post) => post.updatedAt || post.publishedAt;
  const latest = posts.map(lastmodOf).filter(Boolean).sort().pop();

  const entries = [
    urlEntry("/blog", latest),
    ...posts.map((post) => urlEntry(`/blog/${post.slug}`, lastmodOf(post))),
    ...categories.map((category) => urlEntry(`/blog/category/${category.slug}`)),
    ...authors.map((author) => urlEntry(`/blog/author/${author.slug}`)),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
