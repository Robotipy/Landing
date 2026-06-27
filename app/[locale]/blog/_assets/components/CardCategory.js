import Link from "next/link";

// Tarjeta de categoría que aparece en el índice y en la página de categoría.
const CardCategory = ({ category, tag = "h2" }) => {
  const TitleTag = tag;

  return (
    <Link
      className="rounded-xl border border-white/[0.07] bg-secondary p-4 text-white transition-colors duration-200 hover:border-accent/40 hover:text-accent"
      href={`/blog/category/${category.slug}`}
      title={category.title}
      rel="tag"
    >
      <TitleTag className="font-display font-semibold md:text-lg">
        {category?.titleShort || category.title}
      </TitleTag>
    </Link>
  );
};

export default CardCategory;
