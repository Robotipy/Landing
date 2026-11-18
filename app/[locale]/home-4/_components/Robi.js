"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";

// Robi, la mascota de Robotipy, aparece de vez en cuando en la portada:
// - RobiColgando: cuelga del borde superior de una sección y se balancea al entrar en pantalla.
// - RobiAsoma: una vez por visita se asoma desde el borde derecho, saluda y se esconde.
// Ninguno tapa contenido clicable (solo la imagen recibe clics y lleva a contacto),
// se ocultan en pantallas chicas y respetan prefers-reduced-motion.

const css = `
.robi-hang{position:absolute;top:-16px;right:6%;width:140px;z-index:5;transform-origin:22% 2%;opacity:0;transform:translateY(-40px) rotate(-14deg);pointer-events:none}
.robi-hang.on{animation:robi-drop .7s cubic-bezier(.2,.8,.3,1.2) forwards,robi-swing 2.8s ease-in-out .7s 3 alternate}
.robi-hang a{pointer-events:auto;display:block}
@keyframes robi-drop{to{opacity:1;transform:translateY(0) rotate(6deg)}}
@keyframes robi-swing{from{transform:rotate(6deg)}to{transform:rotate(-5deg)}}
.robi-peek{position:fixed;right:0;top:46%;width:130px;z-index:40;transform:translateX(120%) rotate(0);pointer-events:none}
.robi-peek.on{animation:robi-peek 5.2s cubic-bezier(.3,.7,.3,1) forwards}
.robi-peek a{pointer-events:auto;display:block}
@keyframes robi-peek{0%{transform:translateX(120%) rotate(0)}12%{transform:translateX(26%) rotate(-10deg)}20%{transform:translateX(30%) rotate(-6deg)}28%{transform:translateX(26%) rotate(-10deg)}36%{transform:translateX(30%) rotate(-6deg)}80%{transform:translateX(26%) rotate(-10deg)}100%{transform:translateX(120%) rotate(0)}}
@media (max-width:1023px){.robi-hang{display:none}}
@media (max-width:767px){.robi-peek{display:none}}
@media (prefers-reduced-motion:reduce){.robi-hang.on{animation:none;opacity:1;transform:rotate(4deg)}.robi-peek{display:none}}
`;

function RobiImg({ src }) {
  return (
    <Link href="/contact-us" aria-label="Robi, la mascota de Robotipy: hablemos" title="¡Hola! Soy Robi. ¿Hablamos?">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" width={327} height={520} loading="lazy" draggable="false" className="h-auto w-full select-none drop-shadow-[0_12px_18px_rgba(0,24,43,0.18)]" />
    </Link>
  );
}

export function RobiColgando() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { rootMargin: "0px 0px -35% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div ref={ref} className={`robi-hang${on ? " on" : ""}`}>
        <RobiImg src="/home-4/robi-colgando.webp" />
      </div>
    </>
  );
}

export function RobiAsoma({ delay = 18000 }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let done = false;
    try { done = sessionStorage.getItem("robi-asomo") === "1"; } catch {}
    if (done) return;
    let t;
    const intentar = () => {
      // no se asoma si la pestaña no está visible o si el Robi que cuelga ya está en pantalla
      const colgado = document.querySelector(".robi-hang");
      const r = colgado && colgado.getBoundingClientRect();
      const visible = r && r.bottom > 0 && r.top < window.innerHeight;
      if (document.visibilityState !== "visible" || visible) { t = setTimeout(intentar, 6000); return; }
      setOn(true);
      try { sessionStorage.setItem("robi-asomo", "1"); } catch {}
    };
    t = setTimeout(intentar, delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={`robi-peek${on ? " on" : ""}`} aria-hidden={!on}>
      <RobiImg src="/home-4/robi-saludo.webp" />
    </div>
  );
}
