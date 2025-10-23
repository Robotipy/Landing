const AutomationHero = () => {
  return (
    <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex flex-1 justify-center py-5">
        <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="@container">
            <div
              className="flex min-h-[520px] flex-col gap-6 lg:px-16 px-4 items-start justify-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(10, 37, 64, 0.8) 0%, rgba(10, 37, 64, 0.4) 100%)",
              }}
            >
              <div className="flex flex-col gap-4 text-left max-w-3xl">
                <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Elimina tareas repetitivas y reduce errores humanos.
                </h1>
                <h2 className="text-slate-200 text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
                  Desbloquea la eficiencia operacional, minimiza costos y libera
                  a tu equipo para trabajo de mayor valor con nuestras
                  soluciones de automatización inteligente.
                </h2>
              </div>
              <a href="/contact-us" 
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-accent hover:bg-accent/90 text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-colors"
              >Solicitar Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationHero;
