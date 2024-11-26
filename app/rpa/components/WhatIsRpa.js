import config from "@/config";
import ilusflow from "../../../public/assets/ilus-flow.png";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import Rocketbot from "../../../public/images/rocketbotwhite.svg";

const WhatIsRpa = () => {
  return (
    <section className="flex flex-col justify-center items-center text-neutral-content lg:p-12 lg:my-20 lg:mx-32">
      <div className="flex flex-col mx-auto px-1 lg:px-12 py-12 lg:py-16 text-start justify-center items-start">
        <h1 className="mx-auto text-5xl md:text-6xl tracking-tight mb-6 md:mb-8 w-full px-5 lg:px-40">
          What is <strong>RPA?</strong>
        </h1>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40 pb-4">
          Automation with RPA is a powerful tool that enables you to improve the
          performance of your business. We’re not just talking about eliminating
          repetitive tasks, but optimizing those vital processes that define the
          success of your organization. What if the processes that matter most -
          financial, logistical or decision-making - could be executed with
          surgical precision and unparalleled speed?
        </p>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40">
          The impact would be significant: faster response times, reduced
          operating costs, increased accuracy in execution and, most
          importantly, the ability to focus human resources on activities that
          truly drive innovation and strategic business growth.
        </p>
      </div>
      <Image src={ilusflow} alt="ilus-flow.png"></Image>
      <h1 className="flex flex-col mx-auto px-12 text-start justify-center items-start border border-teal-700 w-full max-w-[1160px] mt-24"></h1>
      <div className="flex flex-col mx-auto px-1 lg:px-12 py-12 lg:py-16 text-start justify-center items-start">
        <div className="mx-auto flex justify-start items-start text-5xl md:text-6xl tracking-tight mb-6 md:mb-8 w-full px-5 lg:px-40">
          <h1 className="flex flex-row justify-center items-center gap-x-4">
            <strong>Rocketbot</strong>
            RPA
          </h1>
        </div>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40 pb-4">
          Rocketbot is the ideal RPA platform to drive the digital
          transformation of companies of any size. With a global investment in
          RPA that already exceeds $60 billion, Rocketbot has positioned itself
          as a key solution, helping more than 500 customers and automating more
          than 5,000 processes worldwide. Its ability to execute processes in an
          agile and efficient manner allows it to manage up to 10 tasks in
          parallel within the same environment, accelerating operations without
          increasing additional costs.
        </p>
        <p className="mx-auto text-lg opacity-90 leading-relaxed px-5 lg:px-40">
          What really sets Rocketbot apart is its flexibility and scalability.
          Developed in Python, it offers a unique ease of integration with
          different environments, whether local (on-premise) or in the cloud,
          adapting to the specific needs of each organization, from small
          businesses to large corporations. Furthermore, its focus on the
          democratization of automation allows anyone within an organization,
          regardless of their technical expertise, to create and manage robots
          autonomously. With its affordable and expandable licenses from the
          desktop to servers, Rocketbot guarantees an optimized ROI, providing
          companies with a solution that grows with them without overpaying for
          running critical processes in parallel.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-12 h-[80px] mb-10">
        <Link
          href="/#"
          aria-current="page"
          className="flex gap-2 justify-center md:justify-start items-center"
        >
          <Image
            src={logo}
            alt={`${config.appName} logo`}
            priority={true}
            className="lg:w-12 lg:h-12 h-8 w-8"
          />
          <strong className="font-extrabold tracking-tight text-2xl md:text-4xl">
            {config.appName}
          </strong>
        </Link>
        +
        <Image src={Rocketbot} alt="Rocketbot Logo" className="h-44 w-44 lg:w-[280px] mt-1"></Image>
      </div>
    </section>
  );
};

export default WhatIsRpa;
