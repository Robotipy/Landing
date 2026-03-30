import ButtonMain from "./ButtonMain";

const ProductCTA = ({
  title = "Empieza a gestionar tu consultora de forma profesional",
  subtitle = "Prueba gratis por 30 días. Sin tarjeta de crédito.",
  ctaText = "Empieza gratis",
  ctaLink = "https://projects.robotipy.dev",
}) => {
  return (
    <section className="py-16 lg:py-32 bg-primary/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 py-5">
          {title}
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed py-5">
          {subtitle}
        </p>
        <div className="flex justify-center">
          <ButtonMain text={ctaText} link={ctaLink} type="primary" />
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
