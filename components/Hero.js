import config from "@/config";
import ButtonMain from "./ButtonMain";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-12 py-20 lg:py-32 lg:px-20 h-600 background-image">
      <div className="flex flex-col gap-4 lg:gap-8 items-center self-stretch text-center w-1200 text-white">
        <h1
          className="text-4xl lg:text-7xl tracking-tight text-center"
        >
          Creamos la <strong>inteligencia</strong> que<br /> tu <strong>negocio</strong> necesita.
        </h1>
        <p className="text-lg lg:text-xl w-3/4">
          Optimiza tus procesos con nuestras soluciones de automatización <br /><strong>inteligencia artificial y desarrollo de software.</strong>
          </p>
        <div className="flex flex-row gap-4 mt-8">
          <ButtonMain text="Contáctanos" link="/contact-us" type="quaternary"/>
          {/* <ButtonMain text="Contact us" link="/contact" type="primary" /> */}
          <ButtonMain text="Ve nuestros proyectos" link="/portafolio" type="primary" noblank={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
