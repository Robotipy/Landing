import { Link } from "@/i18n/routing";

const RelatedReading = ({ title, links }) => {
  if (!links || links.length === 0) return null;
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
          {title || "Lectura recomendada"}
        </h2>
        <ul className="space-y-4">
          {links.map((item) => (
            <li
              key={item.href}
              className="border border-white/10 bg-white/5 rounded-xl p-5 hover:border-accent transition-colors"
            >
              <Link
                href={item.href}
                className="text-accent font-semibold text-lg link link-hover"
              >
                {item.title}
              </Link>
              <p className="text-white/80 mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedReading;
