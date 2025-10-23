import Image from "next/image";

const TrainingStories = () => {
  const stories = [
    {
      name: "Sarah L.",
      role: "Gerente de Marketing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwQD0jsJf_hvCOVVdiUqvsxoXqlRqAKXWXzF_c4AczrxFENpPD1cOIgLVzlqsHfwutTFMhJqgu--JN2oVS7QT6OAuKPcMJ-Hs9fg7TvKpU4nzddIzGz6HETXsBgkcTp6uA4XhSz_MleL5aZl6070vTVC_MBd1PeKHY4Y0ZFzSV1cDEhB4m7TFcjgm4_NK9yVEVEi3f80UMiHI0JUsXTAb4ABZemwN7ibEUWpPcMYpd1yDkRbTAxA_esmsdcMet09cecYh-WfSIVY",
      testimonial: "El curso de desarrollador ciudadano fue un cambio total. Automaticé todo nuestro proceso de reportes sin escribir una sola línea de código, ahorrando a nuestro equipo 10 horas por semana."
    },
    {
      name: "Mike T.",
      role: "Desarrollador Senior",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyj5BhY1ChO-H-YNaoP_Caecfu0Z4mdqC7lvu4MgEaVNjloPlxshz6nu4E1f7j8Fpsvch0F4xWqR_qG0updQgtxhOJwcLCru4dap_hTpLCEaZBHo5Gv5F140EyjWyuOSqjkRPgC3Fheziap7l7CAaZhsQkN1QN4QhcIXRsGklXHHxUB9tkGRm94w4BfIyR5D-qV_Y7p6ACSDkOSn4Nz4e0y1qPSlD1IILg3q-T9fi0o3kjuHpnFysRnjSUT1Qv5Hs750PnmJfCPdo",
      testimonial: "La especialización avanzada en IA me dio las habilidades para implementar modelos complejos de machine learning. Desde entonces hemos lanzado una nueva función de análisis predictivo que ha aumentado la participación del cliente en un 30%."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Historias de Transformación
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Image
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  src={story.image}
                  alt={`Foto de perfil de ${story.name}`}
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {story.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {story.role}
                  </p>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed">
                &quot;{story.testimonial}&quot;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingStories;
