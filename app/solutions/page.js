import { Suspense } from "react";
import Hero from "@/components/Hero";
import TrustInUs from "@/components/TrustInUs";
import Footer from "@/components/Footer";
import PagePreview from "@/components/PagePreview";
import PagePreviewCenter from "@/components/PagePreviewCenter";
import Image from "next/image";
import Header from "@/components/Header";
import HeroSolutions from "./HeroSolutions";
import Offers from "./Offers";
import CTA from "@/components/CTA";
import PagePreviewCenterSolutions from "./PagePreviewCenterSolutions";

function ServicesList() {
  return (
    <div>
      En <strong>Robotipy</strong>, ofrecemos una gama completa de soluciones que
      transformarán tu negocio:
      <ul className="space-y-1">
        {[
          "Automatización de procesos",
          "Capacitación en RPA",
          "Chatbots personalizados",
          "Desarrollo de software",
        ].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-[18px] h-[18px] inline shrink-0 opacity-80"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>

            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Rpa() {
  return (
    <>
      {/* <Image src="/images/background.png" alt="Background" layout="fill" /> */}
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <HeroSolutions />
        <Offers />
        <PagePreviewCenter />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
