import ButtonMain from "./ButtonMain";
import Link from "next/link";

const TrainingCTA = () => {
  return (
    <section className="py-16 lg:py-32 bg-primary/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Listo para potenciar el talento de tu organización?
          </h2>
          <p className="md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hablemos sobre cómo nuestros programas de capacitación personalizados pueden ayudarte a alcanzar tus objetivos de transformación digital.
            <br/>Impulsa la innovación desde adentro con equipos capacitados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <ButtonMain 
                text="Hablar con un Asesor de Capacitación" 
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

export default TrainingCTA;
