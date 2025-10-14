import Image from "next/image";
import TeamTraining from "@/public/assets/ilus-learning.png";
import Automation from "@/public/assets/ilus-automation.png";
import Chatbot from "@/public/assets/ilus-chatbot.png";
import Software from "@/public/assets/ilus-coding.png";

const offers = [
  {
    title: "Capacitación de equipos",
    description:
      "En Robotipy, capacitamos a tu equipo para usar eficientemente Rocketbot para la automatización de procesos. Nuestra capacitación se enfoca en enseñarte cómo desarrollar bots optimizados, gestionar variables, manejar logs y realizar debugging. Con un enfoque práctico, buscamos impulsar la productividad y adaptar las automatizaciones a las necesidades cambiantes de tu negocio.",
    image: TeamTraining,
  },
  {
    title: "Automatizaciones de procesos",
    description:
      "Nos especializamos en automatizar no solo tareas repetitivas sino también procesos críticos que demandan precisión y confiabilidad. Utilizando Rocketbot, transformamos flujos de trabajo complejos, optimizando todo desde la captura de datos hasta la integración con sistemas clave. Nuestras soluciones mejoran la eficiencia, reducen errores y aseguran que tus procesos comerciales esenciales funcionen de manera fluida y sin problemas.",
    image: Automation,
  },
  {
    title: "Chatbots",
    description:
      "Nuestros chatbots mejoran la interacción con el cliente de manera automatizada y eficiente. Nuestros bots inteligentes están diseñados para manejar consultas, guiar a los usuarios a través de procesos y brindar soporte 24/7, integrándose perfectamente con tus sistemas. Con tecnología avanzada, nuestros chatbots no solo responden preguntas sino que también optimizan la experiencia del usuario y mejoran la eficiencia operacional de tu negocio.",
    image: Chatbot,
  },
  {
    title: "Desarrollo de software",
    description:
      "Creamos soluciones de software personalizadas adaptadas a las necesidades de tu negocio. Nos especializamos en diseñar aplicaciones robustas, escalables y fáciles de mantener que integran las últimas tecnologías. Ya sea que necesites optimizar procesos internos, desarrollar nuevas funcionalidades o mejorar la experiencia del usuario, nuestro enfoque está en entregar soluciones ágiles y eficientes que impulsen tus operaciones y aceleren tu crecimiento.",
    image: Software,
  },
];

const Offers = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-dark-blue py-16">
      <div className="flex flex-col gap-4 lg:gap-8 items-center text-center w-full text-white">
        <h1 className="text-4xl lg:text-7xl tracking-tight">
          ¿Qué ofrecemos?
        </h1>
        <p className="text-lg lg:text-xl w-3/4 lg:w-2/4">
          Descubre nuestra gama integral de servicios de automatización diseñados para
          optimizar tus operaciones y mejorar la eficiencia.
        </p>
      </div>

      <div className="flex flex-col mt-12 lg:w-2/3 w-full gap-y-12 lg:gap-y-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse h-auto lg:flex-row gap-x-6 items-center text-left px-4 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            <div className="lg:w-2/3 py-2 px-12">
              <Image
                src={offer.image}
                alt={offer.title}
                className="h-full w-full p-3"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-semibold text-white">
                {offer.title}
              </h2>
              <p className="lg:text-xl mt-2 text-white font-light">
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
