"use client";

import { useEffect, useRef, useState } from "react";

// Entrada suave al hacer scroll. El servidor entrega el contenido visible:
// solo se oculta, ya en el cliente, lo que está bajo el pliegue, y se
// muestra al entrar en pantalla. Si el usuario pide menos movimiento o el
// navegador no tiene IntersectionObserver, no se anima nada.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return undefined;
    if (!("IntersectionObserver" in window)) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return undefined;

    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stateCls =
    state === "hidden"
      ? "opacity-0 translate-y-8"
      : state === "shown"
        ? "opacity-100 translate-y-0 transition-[opacity,transform] duration-700 ease-out"
        : "";

  return (
    <Tag
      ref={ref}
      className={`${stateCls} ${className}`}
      style={state === "shown" && delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
