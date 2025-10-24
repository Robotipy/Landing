import Link from "next/link";
import Image from "next/image";

const Solutions = () => {
  const solutions = [
    {
      // icon of a robot
      icon: "/assets/icons/rpa_icon.png",
      title: "RPA",
      description:
        "Impulsa el crecimiento de tu negocio a través de la automatización inteligente de procesos.",
      link: "/automation",
    },
    {
      icon: "/assets/icons/chatbot_icon.png",
      title: "Chatbot",
      description:
        "Accede en segundos a información clave de tu empresa y brinda soporte instantáneo a clientes.",
      link: "/chatbot",
    },
    {
      icon: "/assets/icons/training_icon.png",
      title: "Capacitación de equipos",
      description:
        "Fortalece tu equipo con capacitación práctica en Inteligencia Artificial y automatización de procesos.",
      link: "/capacitaciones",
    },
    {
      icon: "/assets/icons/ai_icon.png",
      title: "AI & Machine Learning",
      description:
        "Utilice la IA para obtener insights, hacer predicciones y impulsar la innovación inteligente.",
      link: "/ai",
    },
    {
      icon: "/assets/icons/software_icon.png",
      title: "Desarrollo de software",
      description:
        "Crea soluciones de software personalizadas que se ajusten perfectamente a las necesidades únicas de tu negocio.",
      link: "/desarrollo-software",
    },
    {
      icon: "/assets/icons/object_icon.png",
      title: "Staff Outsourcing",
      description:
        "Suma a tu equipo un experto dedicado exclusivamente a tus proyectos. El talento que necesitas, para alcanzar tus metas.",
      link: "/contact-us",
    },
  ];

  return (
    <section className="py-20 md:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-white">
            Servicios a medida para impulsar tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 rounded-xl p-5 text-center items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ backgroundColor: "#11222c" }}
            >
              <div className="text-accent">
                <Image src={solution.icon} alt={solution.title} className="w-120 h-120" width={150} height={150} />
              </div>
              <h3 className="text-xl font-bold text-success">
                {solution.title}
              </h3>
              <p className="text-text-light dark:text-white text-base text-md">
                {solution.description}
              </p>
              <Link
                href={solution.link}
                className="mt-2 font-bold text-accent hover:underline"
              >
                Más información →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
