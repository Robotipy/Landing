import Image from "next/image";
import config from "@/config";
import ButtonMain from "./ButtonMain";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      {/* <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="object-cover w-full"
        fill
      /> */}
      {/* <div className="relative hero-overlay"></div> */}
      <div className="relative hero-content text-center p-2 lg:p-8">
        <div className="flex flex-col items-center p-8 md:p-0 ">
          <h2 className="text-4xl md:text-6xl tracking-tight mb-8 md:mb-12">
            Ready to start <strong>automating</strong> your business?
          </h2>
          <p className="text-lg mb-12 md:mb-16 lg:px-40">
          We are here to help you transform your processes and take your company to the next level. Discover how our solutions in RPA, artificial intelligence, and software development can make a difference for your business.
          </p>

          <ButtonMain text="Talk with us" />
           
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
