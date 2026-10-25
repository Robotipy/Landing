"use client";

import { useEffect, useRef, useState } from "react";

// Video anotado por YOAO: corre solo, sin sonido y en loop. El archivo se pide
// recién cuando el video entra en pantalla, para no bajar todos de una vez en
// el teléfono; antes se ve el póster.
export default function VideoYoao({ name, label, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={visible ? `/vision/videos/${name}.mp4` : undefined}
      poster={`/vision/videos/${name}.jpg`}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={`block aspect-video w-full bg-black object-cover ${className}`}
    />
  );
}
