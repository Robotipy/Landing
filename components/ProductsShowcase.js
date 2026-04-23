import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const products = [
  {
    icon: "\u{1F4CA}",
    key: "projects",
    link: "/projects",
  },
  {
    icon: "\u{1F50D}",
    key: "monitor",
    link: "/monitor",
  },
  {
    icon: "\u{1F3A5}",
    key: "analysis",
    link: "/analysis",
  },
];

const ProductsShowcase = () => {
  const t = useTranslations("productsShowcase");
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-white/80">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.key} href={product.link}>
              <div
                className="flex flex-col gap-4 rounded-xl p-8 text-center items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full"
                style={{ backgroundColor: "#11222c" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{product.icon}</span>
                  <span className="badge badge-outline badge-sm text-green-400 border-green-400">
                    {t("status")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {t(`items.${product.key}.title`)}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`items.${product.key}.description`)}
                </p>
                <span className="mt-auto font-bold text-accent hover:underline">
                  {t("learnMore")}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://projects.robotipy.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            {t("seeAll")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
