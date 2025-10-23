import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-primary dark:bg-primary/95 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to transform your operation?</h2>
            <p className="mt-4 text-lg text-gray-200">
              Let's discuss how our expertise in automation and AI can help you achieve your goals. 
              We're committed to delivering measurable results and building lasting partnerships.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg h-14 px-8 bg-accent text-primary text-lg font-bold shadow-2xl hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              <span className="truncate">Schedule Your Free Meeting</span>
            </Link>
          </div>
          <div className="flex justify-center">
            <img 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-accent" 
              alt="Professional headshot of the CEO of Robotipy." 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
