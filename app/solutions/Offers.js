import Image from "next/image";
import TeamTraining from "@/public/assets/ilus-learning.png";
import Automation from "@/public/assets/ilus-automation.png";
import Chatbot from "@/public/assets/ilus-chatbot.png";
import Software from "@/public/assets/ilus-coding.png";

const offers = [
  {
    title: "Team trainings",
    description:
      "At Robotipy, we train your team to efficiently use Rocketbot for process automation. Our training focuses on teaching you how to develop optimized bots, manage variables, handle logs, and perform debugging. With a hands-on approach, we aim to boost productivity and tailor automations to your business’s evolving needs.",
    image: TeamTraining,
  },
  {
    title: "Process automations",
    description:
      "We specialize in automating not just repetitive tasks but also critical processes that demand precision and reliability. Utilizing Rocketbot, we transform complex workflows, optimizing everything from data capture to integration with key systems. Our solutions enhance efficiency, reduce errors, and ensure that your essential business processes run smoothly and seamlessly.",
    image: Automation,
  },
  {
    title: "Chatbots",
    description:
      "Our chatbots enhance customer interaction in an automated and efficient manner. Our intelligent bots are designed to handle inquiries, guide users through processes, and provide 24/7 support, seamlessly integrating with your systems. With advanced technology, our chatbots not only answer questions but also optimize the user experience and improve your business’s operational efficiency.",
    image: Chatbot,
  },
  {
    title: "Software development",
    description:
      "We create custom software solutions tailored to your business needs. We specialize in designing robust, scalable, and easy-to-maintain applications that integrate the latest technologies. Whether you need to optimize internal processes, develop new features, or enhance user experience, our focus is on delivering agile and efficient solutions that drive your operations and accelerate your growth.",
    image: Software,
  },
];

const Offers = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-dark-blue py-16">
      <div className="flex flex-col gap-4 lg:gap-8 items-center text-center w-full text-white">
        <h1 className="text-4xl lg:text-7xl tracking-tight">
          What do we offer?
        </h1>
        <p className="text-lg lg:text-xl w-3/4 lg:w-2/4">
          Discover our comprehensive range of automation services designed to
          streamline your operations and enhance efficiency.
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
