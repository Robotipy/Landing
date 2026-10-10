"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
const avatars = [
  {
    alt: "Minuto Verde - Chile",
    src: "/assets/logo-minutoverde.png",
    link: "https://minutoverde.com",
    width: 120,
  },
  {
    alt: "Mitta - Chile",
    src: "/assets/logo-mitta.png",
    link: "https://www.mitta.cl",
    width: 120,
  },
  {
    alt: "Avis Budget - Chile",
    src: "/assets/logo-avisbudget.png",
    link: "https://www.avis.cl",
    width: 190,
  },
  {
    alt: "Promet - Chile",
    src: "/assets/logo-promet.png",
    link: "https://www.promet.cl",
    width: 140,
  },
  {
    alt: "Grupo Cintac - Chile",
    src: "/assets/logo-cintac.png",
    link: "https://www.cintac.cl",
    width: 150,
  },
  {
    alt: "Novagric - España",
    src: "/assets/logo-novagric.png",
    link: "https://novagric.com/",
    width: 150,
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
];

// Segundos que tarda en recorrer una vuelta completa a velocidad base.
const LOOP_SECONDS_DESKTOP = 40;
const LOOP_SECONDS_MOBILE = 30;
// Fraccion del ancho, en cada lateral, donde el carrusel acelera.
const EDGE_ZONE = 0.2;
const EDGE_MAX_MULTIPLIER = 5;
// Velocidad relativa con el mouse sobre el centro, para poder hacer clic.
const CENTER_MULTIPLIER = 0.15;

const TrustInUs = ({ priority = false }) => {
  const t = useTranslations("trustInUs");
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const secondCopyRef = useRef(null);
  const targetMultiplier = useRef(1);

  // Duplicate logos for infinite scroll
  const duplicatedLogos = [...avatars, ...avatars];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let offset = 0;
    let multiplier = reducedMotion ? 0 : 1;
    let last = performance.now();
    let frame;

    const step = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const loopWidth = secondCopyRef.current?.offsetLeft || track.scrollWidth / 2;
      const loopSeconds = window.innerWidth < 768 ? LOOP_SECONDS_MOBILE : LOOP_SECONDS_DESKTOP;
      const base = reducedMotion && targetMultiplier.current === 1 ? 0 : targetMultiplier.current;
      multiplier += (base - multiplier) * Math.min(1, dt * 6);
      offset += (loopWidth / loopSeconds) * multiplier * dt;
      offset = ((offset % loopWidth) + loopWidth) % loopWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    if (ratio < EDGE_ZONE) {
      targetMultiplier.current = -EDGE_MAX_MULTIPLIER * (1 - ratio / EDGE_ZONE) - CENTER_MULTIPLIER;
    } else if (ratio > 1 - EDGE_ZONE) {
      targetMultiplier.current = EDGE_MAX_MULTIPLIER * ((ratio - (1 - EDGE_ZONE)) / EDGE_ZONE) + CENTER_MULTIPLIER;
    } else {
      targetMultiplier.current = CENTER_MULTIPLIER;
    }
  };

  return (
    <section className="flex flex-col gap-8 md:gap-10 lg:px-20 px-4 py-8 md:py-12 text-white w-full justify-center overflow-hidden">
      {/* Column 1: Text */}
      <div className="mx-auto text-center px-4">
        <p className="text-xl md:text-2xl lg:text-4xl text-balance">
          {t("heading")}
        </p>
      </div>

      {/* Column 2: Carousel */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          targetMultiplier.current = 1;
        }}
      >
        <div
          ref={trackRef}
          className="flex gap-8 md:gap-12 lg:gap-16 w-max will-change-transform"
        >
          {duplicatedLogos.map((image, i) => (
            <div
              key={`${i}-${image.alt}`}
              ref={i === avatars.length ? secondCopyRef : undefined}
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
