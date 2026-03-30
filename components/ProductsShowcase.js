import Link from "next/link";

const products = [
  {
    icon: "\u{1F4CA}",
    title: "Projects",
    description:
      "Gestión de proyectos, recursos, propuestas y soporte para consultoras de software y RPA.",
    link: "/projects",
    status: "LIVE",
  },
  {
    icon: "\u{1F50D}",
    title: "Monitor",
    description:
      "Monitoreo en tiempo real de robots RPA. Alertas, logs y métricas de tus automatizaciones en producción.",
    link: "/monitor",
    status: "LIVE",
  },
  {
    icon: "\u{1F3A5}",
    title: "Analysis",
    description:
      "Análisis de video con inteligencia artificial. Extrae insights automatizados de tus grabaciones.",
    link: "/analysis",
    status: "LIVE",
  },
];

const ProductsShowcase = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nuestros Productos
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Herramientas que construimos desde nuestra experiencia como
            consultora.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.title} href={product.link}>
              <div
                className="flex flex-col gap-4 rounded-xl p-8 text-center items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full"
                style={{ backgroundColor: "#11222c" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{product.icon}</span>
                  <span className="badge badge-outline badge-sm text-green-400 border-green-400">
                    {product.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {product.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {product.description}
                </p>
                <span className="mt-auto font-bold text-accent hover:underline">
                  Conocer más &rarr;
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
            Ver todos nuestros productos &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
