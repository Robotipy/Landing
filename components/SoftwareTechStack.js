import { tools } from "@/libs/tools";
const SoftwareTechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [ "react", "vuejs", "html", "css", "typescript"],
    },
    {
      title: "Backend",
      technologies: [ "nodejs", "fastapi", "nextjs", "laravel", "django", "express"]
    },
    {
      title: "Móvil, Bases de Datos y Nube",
      technologies: ["swift", "react-native", "postgresql", "mongodb", "aws", "gcp"]
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestro Stack Tecnológico
          </h2>
        </div>

        <div className="space-y-12 text-center">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
                {category.title}
              </h3>
              <div className="flex flex-row items-center justify-center text-center gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                      <div className="w-8 h-8 text-success">
                        {tools[tech]}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareTechStack;
