import Link from "next/link";

const ProductFeatureCard = ({ icon, title, description, link }) => {
  const content = (
    <div
      className="flex flex-col gap-3 rounded-xl p-6 text-center items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      style={{ backgroundColor: "#11222c" }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      {link && (
        <span className="mt-2 font-bold text-accent hover:underline">
          Más información &rarr;
        </span>
      )}
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
};

export default ProductFeatureCard;
