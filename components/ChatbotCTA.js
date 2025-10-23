import ButtonMain from "./ButtonMain";
import Link from "next/link";

const ChatbotCTA = () => {
  return (
    <section className="py-16 lg:py-32 bg-primary dark:bg-primary/95">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Preparado para darle un cerebro a tu operación?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Da el siguiente paso en la automatización de procesos empresariales. 
            <br/>Hablemos de cómo nuestros asistentes inteligentes pueden transformar sus operaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <ButtonMain 
                text="Solicitar Demo Personalizada" 
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

export default ChatbotCTA;
