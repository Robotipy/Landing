import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProductCTA from "@/components/ProductCTA";

const FeaturePageTemplate = ({
  title,
  subtitle,
  howItWorks,
  problemTitle,
  problemDescription,
}) => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <ProductHero
          title={title}
          subtitle={subtitle}
          ctaText="Empieza gratis"
          ctaLink="https://projects.robotipy.dev"
          ctaSecondaryText="Ver todas las funciones"
          ctaSecondaryLink="/projects"
        />

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Cómo funciona
            </h2>
            <div className="space-y-6">
              {howItWorks.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl p-6"
                  style={{ backgroundColor: "#11222c" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              {problemTitle}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {problemDescription}
            </p>
          </div>
        </section>

        <ProductCTA
          title="Empieza a gestionar tu consultora de forma profesional"
          subtitle="30 días gratis. Sin tarjeta de crédito."
          ctaText="Empieza gratis"
          ctaLink="https://projects.robotipy.dev"
        />
      </main>
      <Footer />
    </>
  );
};

export default FeaturePageTemplate;
