import ButtonMain from "@/components/ButtonMain";
const HeroSolutions = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-8 py-20 lg:py-20 lg:px-20 h-600 background-image min-h-screen">
      <div className="flex flex-col gap-4 lg:gap-8 items-center text-center w-1200 text-white">
        <h1 className="text-5xl lg:text-7xl tracking-tight text-center font-medium">
          Soluciones de Automatización Personalizadas para Cada Industria, Cada Desafío
        </h1>
        <div className="flex flex-row gap-4 mt-8">
          <ButtonMain text="Contáctanos" link="/contact" type="primary" className="px-8 py-3" />
        </div>
      </div>
    </section>
  );
};

export default HeroSolutions;
