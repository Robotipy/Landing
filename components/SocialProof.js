const SocialProof = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-background-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-center lg:text-left text-sm font-bold text-text-light dark:text-text-dark uppercase tracking-widest mb-4">
              Trusted By Industry Leaders & Certified Experts
            </h3>
            <div className="flex justify-center lg:justify-start flex-wrap gap-x-8 gap-y-4">
              <img 
                className="h-8 grayscale opacity-60" 
                alt="Google Logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              />
              <img 
                className="h-8 grayscale opacity-60" 
                alt="Microsoft Logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              />
              <img 
                className="h-8 grayscale opacity-60" 
                alt="AWS Logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              />
              <img 
                className="h-8 grayscale opacity-60" 
                alt="UiPath Logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/UiPath_logo.svg"
              />
            </div>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-accent text-5xl font-bold">+50</p>
              <p className="text-text-light dark:text-text-dark text-base font-medium">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-accent text-5xl font-bold">+10</p>
              <p className="text-text-light dark:text-text-dark text-base font-medium">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-accent text-5xl font-bold">98%</p>
              <p className="text-text-light dark:text-text-dark text-base font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
