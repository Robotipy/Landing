const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González, COO",
      company: "TechCorp",
      quote: "El ROI fue casi inmediato. Nuestro equipo está mucho más feliz y productivo.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Juan Jorge Herrera, CEO",
      company: "Rocketbot",
      quote: "Danilo (Fundador de Robotipy) es uno de los experto en RPA de toda latinoamerica.",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQGVy5HyBQARHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1604667216482?e=1762387200&v=beta&t=LQwgvrFUw-M4mBhL9NFD7JBHRv80d5pz-uDt5kf-PnQ"
    },
    {
      name: "Ana Martínez, Directora de TI",
      company: "DigitalFlow",
      quote: "Una experiencia fluida y profesional de principio a fin. Altamente recomendado.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-[720px] mx-auto text-center mb-12">
        <h1 className="text-primary dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
          Confiado por Líderes de la Industria
        </h1>
      </div>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex h-full flex-1 flex-col gap-4 text-center rounded-lg min-w-80 pt-4 bg-white dark:bg-slate-800/50 p-6 shadow-sm"
            >
              <img 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex flex-col self-center w-20 h-20" 
                alt={`Portrait of ${testimonial.name}`}
                src={testimonial.image}
              />
              <div>
                <p className="text-primary dark:text-white text-lg font-medium leading-normal">
                  {testimonial.name}
                </p>
                <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal mt-2">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
