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
              ¿Por qué RPA y por qué Robotipy?
            </>
          }
          position="right"
          link="/rpa"
          srcImage={"/assets/pc-robotipy.png"}
        >
          <p className="text-md">
            La automatización de procesos con RPA reduce errores, mejora la eficiencia y
            ahorra tiempo en tareas repetitivas. En Robotipy, integramos la tecnología
            RPA más avanzada y modelos de inteligencia artificial, garantizando una
            implementación rápida adaptada a las necesidades de tu empresa.
          </p>
        </PagePreview>
        <PagePreview
          title="Soluciones integrales de automatización para cada necesidad"
          position="left"
          link="/solutions"
          buttonText="Ver todos los servicios ➡️"
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
