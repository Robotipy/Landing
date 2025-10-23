import Image from "next/image";
import Link from "next/link";

const   FeaturedCaseStudies = () => {
  const caseStudies = [
    {
      category: "SERVICIOS FINANCIEROS",
      title: "Procesamiento Automatizado de Facturas",
      description: "Reducción de entrada manual de datos en",
      highlight: "95%",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "COMERCIO ELECTRÓNICO",
      title: "Puntuación de Prospectos con IA",
      description: "Aumento de velocidad de procesamiento de prospectos en",
      highlight: "300%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "MANUFACTURA",
      title: "Automatización de Control de Calidad",
      description: "Mejora en precisión de detección de defectos en",
      highlight: "40%",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "SALUD",
      title: "Gestión de Datos de Pacientes",
      description: "Entrada de datos automatizada, ahorrando",
      highlight: "20+ horas",
      descriptionEnd: "por semana.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Casos de Estudio Destacados</h2>
          <p className="mt-4 text-lg text-white">Resultados reales que hemos entregado a nuestros clientes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-background-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image 
                width={500}
                height={500}
                className="w-full h-56 object-cover" 
                alt={study.title}
                src={study.image}
                unoptimized={true}
                priority={true}
              />
              <div className="p-6">
                <p className="text-sm text-accent font-semibold">{study.category}</p>
                <h3 className="mt-2 text-xl font-bold text-primary dark:text-text-primary-dark">{study.title}</h3>
                <p className="mt-2 text-text-light dark:text-text-dark">
                  {study.description}
                  <span className="font-bold text-accent">{study.highlight}</span>
                  {study.descriptionEnd && ` ${study.descriptionEnd}`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-opacity-90 transition-colors"
          >
            Ver Todos los Casos de Estudio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
