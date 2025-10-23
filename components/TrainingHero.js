import ButtonMain from "./ButtonMain";

const TrainingHero = () => {
  return (
    <section className="flex h-auto w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex flex-1 justify-center py-5 lg:py-16 background-image">
        <div className="flex flex-col max-w-8xl flex-1 px-4 sm:px-6 lg:px-8">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 items-center justify-center p-4"
              >
                <div className="flex flex-col gap-4 text-center my-3">
                  <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Potencia tu Equipo. <br/>Domina la Automatización e IA
                  </h1>
                  <h2 className="text-white/80 text-base lg:text-xl max-w-4xl mx-auto font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Libera el potencial de tu equipo con nuestros cursos prácticos y especializaciones avanzadas en RPA e IA.
                  </h2>
                </div>
                <ButtonMain 
                  text="Ver Cursos y Rutas de Aprendizaje" 
                  link="/contact-us" 
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
