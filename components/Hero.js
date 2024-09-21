import config from "@/config";
import ButtonMain from "./ButtonMain";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-16 items-center justify-center text-center px-8 lg:px-32">
        <h1
          className="text-4xl lg:text-6xl tracking-tight md:-mb-4"
          style={{ color: config.colors.main }}
        >
          Let the <strong>robots</strong> work for you
        </h1>
        <p>Optimize your processes with our automation solutions <strong>RPA, artificial intelligence and software development.</strong></p>
        <div className="flex flex-row gap-4">
          <ButtonMain text="Learn with us" link="/courses" type="secondary" tooltipText="Just in Spanish" />
          <ButtonMain text="Contact us" link="/contact" type="primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
