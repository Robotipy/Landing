import { getArticlesByLocale } from "../../blog/_assets/content";

// El blog se publica solo en español. getArticlesByLocale ya filtra los posts
// programados, así que un enlace armado con findPost aparece en su fecha sin
// redeploy (la página revalida cada hora).
export const publishedPosts = () =>
  getArticlesByLocale("es").sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

export const findPost = (slug) => getArticlesByLocale("es").find((post) => post.slug === slug) || null;

export const postHref = (slug) => `/blog/${slug}`;

// Sin timeZone UTC, una fecha como 2026-10-11 se muestra como el 10 en Chile.
const dateFormat = new Intl.DateTimeFormat("es-CL", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatPostDate = (isoDate) => dateFormat.format(new Date(isoDate));
