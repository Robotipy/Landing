import ButtonMain from "./ButtonMain";

const ChatbotHero = () => {
  return (
    <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex flex-1 justify-center py-5 lg:py-16 background-image">
        <div className="flex flex-col max-w-8xl flex-1 px-4 sm:px-6 lg:px-8">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] flex-col gap-6 items-center justify-center p-4"
              >
                <div className="flex flex-col gap-4 text-center my-3">
                  <h1 className="text-white text-6xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Conversaciones que Impulsan tu Negocio, <br/>Interna y Externamente
                  </h1>
                  <h2 className="text-white/80 text-xl max-w-4xl mx-auto font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Potencia a tus equipos con acceso instantáneo a datos ERP y deleita a tus clientes con servicio inteligente 24/7. 
                    Los asistentes conversacionales con IA de Robotipy conectan la brecha entre tus datos y las personas que más los necesitan.
                  </h2>
                </div>
                <ButtonMain 
                  text="Solicitar Demo Personalizada" 
                  link="/contact-us" 
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

export default ChatbotHero;
