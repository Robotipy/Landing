import Image from "next/image";
import config from "@/config";
import ButtonMain from "./ButtonMain";

const CTA = () => {
  return (
    <section className="flex flex-col item-center justify-center overflow-hidden lg:py-12 py-4 lg:px-12 px-4 text-white">
      {/* <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="object-cover w-full"
        fill
      /> */}
      {/* <div className="relative hero-overlay"></div> */}
      <div className="text-center p-2 lg:p-8">
        <div className="flex flex-col gap-5 items-center p-8 md:p-0 ">
          <h2 className="text-4xl md:text-7xl tracking-tight">
            Ready to <strong>automate</strong>?
          </h2>
          <p className="text-base lg:px-40">
            Unlock the power of automation and take your business to the next level.
          </p>

          <ButtonMain text="Talk with us" link="/contact" noblank={true}/>
           
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
