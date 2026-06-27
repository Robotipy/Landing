import Link from "next/link";

// Badge de categoría que aparece en la página del artículo y en <CardArticle />.
const Category = ({ category, extraStyle }) => {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className={`inline-flex items-center rounded-full border border-accent/25 bg-accent/15 px-2.5 py-0.5 font-display text-xs font-semibold uppercase tracking-[0.04em] text-accent transition-colors hover:bg-accent hover:text-white ${
        extraStyle ? extraStyle : ""
      }`}
      title={`Posts en ${category.title}`}
      rel="tag"
    >
      {category.titleShort}
    </Link>
  );
};

export default Category;
