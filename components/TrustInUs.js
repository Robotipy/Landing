"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowWidth;
};
const avatars = [
  {
    alt: "Novagric - España",
    // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
    src: "/assets/logo-novagric.png",
    link: "https://novagric.com/",
    width: 150,
  },
  {
    alt: "Kabeli - Chile",
    src: "/assets/logo-kabeli.png",
    link: "https://kabeli.cl",
    width: 130,

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
    alt: "(Rabbit)² - Argentina",
    src: "/assets/logo-rabbit.png",
    link: "https://www.linkedin.com/company/rabbit-%C2%B2",
    width: 150,
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
    width: 200,
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
    width: 150,
  },
  {
    alt: "Interact Solutions - Latinoamerica",
    src: "/assets/logo-interact.png",
    link: "https://www.interactsolutions.com",
    width: 150,
  },
  {
    alt: "Grupo Cintac - Chile",
    src: "/assets/logo-cintac.png",
    link: "https://www.cintac.cl",
    width: 150,
  }
];

const TrustInUs = ({ priority = false }) => {
  // Split avatars into two rows
  const windowWidth = useWindowWidth();
  let rows = 6;
  if (windowWidth < 1024) {
    rows = 10;
    
  }
  const firstRow = avatars.slice(0, rows);
  const secondRow = avatars.slice(rows);
  

  return (
    <section className="flex flex-col gap-10 lg:px-20 py-12 text-white w-full justify-center">
      {/* Column 1: Text */}
      <div className="mx-auto text-center">
        <p className="text-2xl lg:text-4xl text-balance">
          Las empresas líderes confían en nuestro equipo para revolucionar sus procesos
        </p>
      </div>

      {/* Column 2: Logos in two rows */}
      <div className="flex flex-col md:w-full lg:w-2/3 mx-auto">
        {/* First row of logos */}
        <div className="flex flex-wrap justify-around gap-0 lg:gap-4">
          {firstRow.map((image, i) => (
            <div className="flex items-center justify-center" key={i} style={{ height: 70 }}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  priority={priority}
                  width={image.width || 150}
                  height={70}
                  title={image.alt}
                />
              </a>
            </div>
          ))}
        </div>

        {/* Second row of logos */}
        <div className="flex flex-wrap justify-around gap-0 lg:gap-4">
          {secondRow.map((image, i) => (
            <div className="flex items-center justify-center" key={i}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  priority={priority}
                  width={image.width || 150}
                  height={100}
                  title={image.alt}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustInUs;
