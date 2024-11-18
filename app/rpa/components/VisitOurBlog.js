import config from "@/config";
import ilusflow from "../../../public/assets/ilus-flow.png";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import Rocketbot from "../../../public/images/rocketbotwhite.svg";

const items = [
  {
    image: "",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam lorem congue id dignissim diam lectus elementum pellentesque.",
  },
  {
    image: "",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam lorem congue id dignissim diam lectus elementum pellentesque.",
  },
  {
    image: "",
    title: "Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam lorem congue id dignissim diam lectus elementum pellentesque.",
  },
];

const VisitOurBlog = () => {
  return (
    <section className="flex flex-col justify-center items-center text-neutral-content lg:mx-32">
      <div className="mx-auto flex justify-start items-start text-3xl md:text-6xl tracking-tight w-full mb-8">
        <h1 className="flex flex-row justify-center items-center gap-x-4">
          <h1>Visit our blog</h1>
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-x-6 h-[150px]">
        {items.map((e) => {
          return (
            <div className="flex flex-row justify-start items-start gap-x-4 w-full h-full" key={e.title}>
              <h1 className="bg-white w-full h-full"></h1>
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-teal-700 text-xl">{e.title}</h1>
                <h1 className="text-xl">{e.description}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <button className="flex justify-center items-center flex-row mt-12 gap-x-4">
        <h1 className="">See all articles</h1>
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </section>
  );
};

export default VisitOurBlog;
