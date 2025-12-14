"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
const avatars = [
  {
    alt: "Novagric - España",
    src: "/assets/logo-novagric.png",
    link: "https://novagric.com/",
    width: 150,
  },
  {
    alt: "Kabeli - Chile",
    src: "/assets/logo-kabeli.png",
    link: "https://kabeli.cl",
    width: 120,
  },
  {
    alt: "Marketers Group - España",
    src: "/assets/logo-marketersgroup.png",
    link: "https://marketersgroup.es/",
    width: 200,
  },
  {
    alt: "Robotipy es Partner Oficial de Rocketbot RPA en Latinoamerica",
    src: "/images/rocketbot.svg",
    link: "https://rocketbot.com/",
    width: 190,
  },
  {
    alt: "Minuto Verde - Chile",
    src: "/assets/logo-minutoverde.png",
    link: "https://minutoverde.com",
    width: 120,
  },
  {
    alt: "Grupo Delirio - Chile",
    src: "/assets/logo-delirio.png",
    link: "https://grupodelirio.cl",
    width: 110,
  },
  {
    alt: "Digital Bank - Chile",
    src: "/assets/logo-digitalbankla.png",
    link: "https://www.digitalbankla.com",
    width: 130,
  },
  {
    alt: "Mitta - Chile",
    src: "/assets/logo-mitta.png",
    link: "https://www.mitta.cl",
    width: 120,
  },
  {
    alt: "Cerezo Software - Uruguay",
    src: "/assets/logo-cerezosoftware.png",
    link: "https://cerezosoftware.com/",
    width: 100,
  },
  {
    alt: "Interact Solutions - Latinoamerica",
    src: "/assets/logo-interact.png",
    link: "https://www.interactsolutions.com",
    width: 120,
  },
  {
    alt: "Grupo Cintac - Chile",
    src: "/assets/logo-cintac.png",
    link: "https://www.cintac.cl",
    width: 150,
  }
];

const TrustInUs = ({ priority = false }) => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Duplicate logos for infinite scroll
  const duplicatedLogos = [...avatars, ...avatars];

  return (
    <section className="flex flex-col gap-8 md:gap-10 lg:px-20 px-4 py-8 md:py-12 text-white w-full justify-center overflow-hidden">
      {/* Column 1: Text */}
      <div className="mx-auto text-center px-4">
        <p className="text-xl md:text-2xl lg:text-4xl text-balance">
          Las empresas líderes confían en nuestro equipo para revolucionar sus procesos
        </p>
      </div>

      {/* Column 2: Carousel */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={carouselRef}
          className="flex gap-8 md:gap-12 lg:gap-16 animate-scroll"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {duplicatedLogos.map((image, i) => (
            <div 
              key={`${i}-${image.alt}`}
              className="flex items-center justify-center flex-shrink-0 px-4 transition-opacity hover:opacity-80"
            >
              <a 
                href={image.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-full"
              >
                {image.src.endsWith('.svg') ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    title={image.alt}
                    className="object-contain h-[80px] w-auto max-w-[200px]"
                    style={{ height: '80px', width: 'auto' }}
                  />
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    priority={priority && i < 6}
                    width={image.width || 80}
                    height={80}
                    title={image.alt}
                    className="object-contain h-full w-auto"
                  />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TrustInUs;
