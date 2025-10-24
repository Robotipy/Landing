import ButtonMain from "./ButtonMain";

const SoftwareHero = () => {
  return (
    <div className="relative flex h-auto w-full flex-col overflow-x-hidden">
      <div className="flex flex-1 justify-center py-5 lg:py-16 background-image">
        <div className="flex flex-col max-w-8xl flex-1 px-4 sm:px-6 lg:px-8">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 items-center justify-center p-4"
              >
                <div className="flex flex-col gap-4 text-center my-3">
                  <h1 className="text-white text-6xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Construimos la Tecnología que <br/>tu negocio necesita para ganar
                  </h1>
                  <h2 className="text-white/80 text-xl max-w-4xl mx-auto font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal pt-10 pb-5">
                    Diseñamos y desarrollamos sistemas web, móviles y empresariales robustos, escalables y seguros que se adaptan a tus objetivos comerciales únicos.
                  </h2>
                </div>
                <ButtonMain 
                  text="Cotizar tu Proyecto" 
                  link="https://zfrmz.com/5qF4fJBL86AmHtyluQjh" 
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareHero;
