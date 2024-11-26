import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustInUs from "@/components/TrustInUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PagePreview from "@/components/PagePreview";
import PagePreviewCenter from "@/components/PagePreviewCenter";
import BlogPreview from "@/components/BlogPreview";
import Image from "next/image";

function ServicesList() {
  return (
    <div>
      At <strong>Robotipy</strong>, we offer a full range of solutions that will
      transform your business:
      <ul className="space-y-1">
        {[
          "Process automation",
          "RPA training",
          "Personalized chatbots",
          "Software development",
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

export default function Home() {
  return (
    <>
      {/* <Image src="/images/background.png" alt="Background" layout="fill" /> */}
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <TrustInUs priority={true} />
        <PagePreview
          title={
            <>
              Why RPA and why Robotipy?
            </>
          }
          position="right"
          link="/rpa"
          srcImage={"/assets/pc-robotipy.png"}
        >
          <p className="text-md">
            Process automation with RPA reduces errors, improves efficiency and
            saves time in repetitive tasks. At Robotipy, we integrate the latest
            RPA technology and artificial intelligence models, guaranteeing a
            fast implementation tailored to your company&rsquo;s needs.
          </p>
        </PagePreview>
        <PagePreview
          title="Comprehensive automation solutions for every need"
          position="left"
          link="/solutions"
          buttonText="See all services ➡️"
          srcImage={"/assets/ilus-automation.png"}
        >
          <>
            <ServicesList />
          </>
        </PagePreview>
        <PagePreviewCenter />
        {/* <BlogPreview /> */}
        {/* <FeaturesAccordion />
        <Pricing />
        <FAQ /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
