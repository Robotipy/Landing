import Link from "next/link";

const Insights = () => {
  const articles = [
    {
      title: "The Future of Work: How AI is Reshaping Industries",
      description: "Explore the transformative impact of artificial intelligence on modern workplaces and what it means for your business.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/blog/future-of-work-ai"
    },
    {
      title: "5 Common Pitfalls in RPA Implementation (And How to Avoid Them)",
      description: "Learn how to navigate the challenges of RPA adoption to ensure a successful and scalable automation strategy.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/blog/rpa-pitfalls"
    },
    {
      title: "Why a Custom Solution Might Be Your Best Investment",
      description: "Discover the long-term benefits of tailor-made software compared to off-the-shelf products for unique business needs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/blog/custom-solutions"
    }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-primary-dark">Insights from Our Experts</h2>
          <p className="mt-4 text-lg text-text-light dark:text-text-dark">The latest news, articles, and perspectives from our team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link 
              key={index}
              href={article.link}
              className="group"
            >
              <div className="overflow-hidden rounded-xl">
                <img 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                  alt={article.title}
                  src={article.image}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-text-light dark:text-text-dark">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-secondary hover:bg-opacity-90 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;
