"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Segundos que tarda una vuelta completa a velocidad normal.
const LOOP_SECONDS_DESKTOP = 45;
const LOOP_SECONDS_MOBILE = 30;
// Fracción del ancho, en cada costado, donde el carrusel acelera.
const EDGE_ZONE = 0.2;
const EDGE_MAX_MULTIPLIER = 5;
// Velocidad con el mouse en el centro: casi quieto para poder mirar.
const CENTER_MULTIPLIER = 0.15;

// Alto de cada logo según su proporción, para que todos pesen parecido:
// los anchos quedan más bajos y los cuadrados más altos.
function logoHeight(aspect, scale = 1) {
  return Math.round(Math.min(44, Math.max(22, 34 * Math.pow(3 / aspect, 0.4))) * scale);
}

export default function LogoMarquee({ logos }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const secondCopyRef = useRef(null);
  const target = useRef(1);
  // Con movimiento reducido no hay banda: se muestran todos los logos quietos.
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion) return;
    let offset = 0;
    let multiplier = 1;
    let last = performance.now();
    let frame;

    const step = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const loopWidth = secondCopyRef.current?.offsetLeft || track.scrollWidth / 2;
      const loopSeconds = window.innerWidth < 768 ? LOOP_SECONDS_MOBILE : LOOP_SECONDS_DESKTOP;
      multiplier += (target.current - multiplier) * Math.min(1, dt * 6);
      offset += (loopWidth / loopSeconds) * multiplier * dt;
      offset = ((offset % loopWidth) + loopWidth) % loopWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  // Solo el mouse cambia la velocidad: en pantallas táctiles el toque llega
  // como un mousemove sin mouseleave y dejaba la banda casi detenida.
  const handlePointerMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const rect = containerRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    if (ratio < EDGE_ZONE) {
      target.current = -EDGE_MAX_MULTIPLIER * (1 - ratio / EDGE_ZONE) - CENTER_MULTIPLIER;
    } else if (ratio > 1 - EDGE_ZONE) {
      target.current = EDGE_MAX_MULTIPLIER * ((ratio - (1 - EDGE_ZONE)) / EDGE_ZONE) + CENTER_MULTIPLIER;
    } else {
      target.current = CENTER_MULTIPLIER;
    }
  };

  // fit: en la grilla estática los logos anchos se achican a su columna.
  const renderList = (copy, fit = false) =>
    logos.map((logo, i) => {
      const h = logoHeight(logo.aspect, logo.scale);
      const w = Math.round(h * logo.aspect);
      return (
        <li
          key={`${copy ? "b" : "a"}-${logo.src}`}
          ref={copy && i === 0 ? secondCopyRef : undefined}
          aria-hidden={copy || undefined}
          className={fit ? "flex h-12 min-w-0 items-center justify-center" : "flex h-12 shrink-0 items-center"}
        >
          <Image
            src={logo.src}
            alt={copy ? "" : logo.alt}
            width={w}
            height={h}
            sizes={`${w * 2}px`}
            style={fit ? { height: h, width: w, maxWidth: "100%", objectFit: "contain" } : { height: h, width: w }}
            className="opacity-85"
          />
        </li>
      );
    });

  if (reducedMotion) {
    return (
      <ul className="grid min-w-0 flex-1 grid-cols-3 items-center gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-10" aria-label="Clientes de Robotipy">
        {renderList(false, true)}
      </ul>
    );
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        target.current = 1;
      }}
      className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <ul ref={trackRef} className="flex w-max items-center gap-14 will-change-transform" aria-label="Clientes de Robotipy">
        {renderList(false)}
        {renderList(true)}
      </ul>
    </div>
  );
}
