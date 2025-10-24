import ButtonMain from "./ButtonMain";

const AutomationCTA = () => {
  return (
    <div className="bg-slate-800 rounded-xl my-16 text-center text-white py-16 p-10 md:p-12 lg:p-16">
      <h2 className="text-3xl lg:text-4xl font-black">
        ¿Listo para Comenzar a Automatizar?
      </h2>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-200">
        Hablemos sobre cómo Robotipy puede ayudar a tu negocio a alcanzar nuevos niveles de eficiencia y crecimiento. Programa tu demo gratuita y sin compromiso hoy.
      </p>
      <ButtonMain 
        text="Solicitar Demo Gratuita" 
        link="/contact-us" 
        type="primary"
        className="mt-8 flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-accent hover:bg-accent/90 text-white text-base font-bold leading-normal tracking-[0.015em] @[480px]:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-colors"
        noblank={true}
      />
    </div>
  );
};

export default AutomationCTA;
