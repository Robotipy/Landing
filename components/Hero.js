import config from "@/config";
import ButtonMain from "./ButtonMain";
const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-12 py-20 lg:py-32 lg:px-20 h-600 background-image">
      <div className="flex flex-col gap-4 lg:gap-8 items-center self-stretch text-center w-1200 text-white">
        <h1
          className="text-4xl lg:text-7xl tracking-tight text-center"
        >
          Let the robots work for you
        </h1>
        <p className="text-lg lg:text-xl w-3/4">
          Optimize your processes with our automation solutions <strong>RPA, artificial intelligence and software development.</strong>
          </p>
        <div className="flex flex-row gap-4">
          <ButtonMain text="Contact us" link="/client-info" type="quaternary"/>
          {/* <ButtonMain text="Contact us" link="/contact" type="primary" /> */}
          <ButtonMain text="Schedule a call" link="https://calendar.app.google/bp4toLzqWLMT6BWi8" type="primary"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
