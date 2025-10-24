import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const principles = [
    {
      icon: "🎯",
      title: "Commitment to Results",
      description: "We are dedicated to delivering measurable outcomes and tangible value to our clients."
    },
    {
      icon: "💡",
      title: "Constant Innovation",
      description: "We relentlessly pursue new ideas and technologies to stay at the forefront of the industry."
    },
    {
      icon: "👁️",
      title: "Radical Transparency",
      description: "We believe in open and honest communication, fostering trust with our clients and partners."
    }
  ];

  const team = [
    {
      name: "Alice Johnson",
      role: "CEO & Founder",
      description: "Alice is a visionary leader with over 20 years of experience in the tech industry. She is passionate about leveraging technology to solve real-world problems.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Bob Williams",
      role: "CTO",
      description: "Bob is the technical genius behind our innovative solutions. He has a deep understanding of AI and RPA, and a knack for building scalable systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Charlie Brown",
      role: "Lead Developer",
      description: "Charlie is a master of code, leading our development team with precision and a commitment to quality. He's a full-stack expert with a love for clean architecture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Diana Prince",
      role: "UX/UI Lead",
      description: "Diana ensures our solutions are not only powerful but also intuitive and user-friendly. She champions a human-centered design approach in all our projects.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const process = [
    {
      icon: "🔍",
      title: "Discovery",
      description: "We start by deeply understanding your challenges and goals. Client collaboration is key to defining the project scope and success criteria."
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Our team designs a user-centric solution, creating wireframes and prototypes. We work with you to refine the design until it's perfect."
    },
    {
      icon: "💻",
      title: "Development",
      description: "Our developers bring the design to life using agile methodology. You'll get regular updates and demos to see progress firsthand."
    },
    {
      icon: "🚀",
      title: "Deployment",
      description: "We handle the full deployment process and provide ongoing support to ensure a seamless transition and continued success."
    }
  ];

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="bg-background-light dark:bg-background-dark">
        {/* Hero Section */}
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div 
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")`
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] font-heading">
                      Humanizing Technology
                    </h1>
                    <h2 className="text-slate-200 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                      Our mission is to blend robotic precision with human ingenuity to create intelligent automation solutions. Our vision is a future where technology empowers people to achieve their full potential.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Guiding Principles */}
            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">Our Guiding Principles</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-background-dark p-4 flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="text-primary text-3xl">{principle.icon}</div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-text-primary dark:text-text-primary-dark text-base font-bold leading-tight">{principle.title}</h2>
                    <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team */}
            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">The Minds Behind the Magic</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-4">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3 group">
                  <div 
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url("${member.image}")` }}
                  ></div>
                  <div>
                    <p className="text-text-primary dark:text-text-primary-dark text-base font-medium leading-normal">{member.name}</p>
                    <p className="text-primary text-sm font-bold leading-normal">{member.role}</p>
                    <p className="text-text-light dark:text-text-dark text-sm font-normal leading-normal mt-1">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <h2 className="text-text-primary dark:text-text-primary-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10 font-heading">How We Work With You</h2>
            <div className="relative p-4">
              <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-gray-300 dark:bg-slate-700 hidden md:block"></div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {process.map((step, index) => (
                  <div key={index} className={`flex items-start gap-4 ${index % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                    <div className="flex-shrink-0 bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center text-xl z-10">
                      <span>{step.icon}</span>
                    </div>
                    <div className={index % 2 === 1 ? 'md:ml-auto' : ''}>
                      <h3 className="font-bold text-lg text-text-primary dark:text-text-primary-dark">{step.title}</h3>
                      <p className="text-text-light dark:text-text-dark mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-16 px-4">
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark font-heading">Ready to Automate Your Success?</h2>
              <p className="text-text-light dark:text-text-dark mt-2 max-w-xl mx-auto">
                Let&apos;s discuss how Robotipy can help your business thrive with intelligent automation.
              </p>
              <button className="mt-6 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 mx-auto bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
