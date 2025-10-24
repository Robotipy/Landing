import ButtonMain from "./ButtonMain";
import Link from "next/link";

const SoftwareCTA = () => {
  return (
    <section className="py-16 lg:py-32 bg-primary dark:bg-primary/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 py-5">
            ¿Listo para construir la herramienta que llevará tu negocio al siguiente nivel?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed py-5">
            Hablemos sobre tus ideas y veamos cómo podemos convertirlas en realidad.
            <br/>Construyamos juntos el software que transformará tu empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <ButtonMain 
                text="Agendar Consulta Técnica Gratuita" 
                link="/contact-us" 
                type="primary" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCTA;
