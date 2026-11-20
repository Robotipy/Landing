"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/routing";

// Robi, la mascota de Robotipy, aparece UNA sola vez por visita (sesión del navegador),
// de una de estas dos formas, la que ocurra primero:
// - RobiColgando: al llegar a "Qué hacemos" cae desde el borde de la sección, se balancea,
//   se suelta y se cae fuera de la vista.
// - RobiAsoma: desde los 18 s, cuando el visitante ya bajó a las secciones blancas, se asoma
//   desde el borde derecho, saluda y se esconde.
// No bloquea clics del resto de la página (solo la imagen lleva a contacto), se oculta en
// pantallas chicas y con prefers-reduced-motion no se muestra.

const KEY = "robi-visto";
const yaVisto = () => { try { return sessionStorage.getItem(KEY) === "1"; } catch { return false; } };
const marcarVisto = () => { try { sessionStorage.setItem(KEY, "1"); } catch {} };
const sinAnimaciones = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const css = `
.robi-hang{position:absolute;top:-16px;right:6%;width:140px;z-index:5;transform-origin:22% 2%;opacity:0;pointer-events:none}
.robi-hang.on{animation:robi-hang 7.2s linear forwards}
.robi-hang a{pointer-events:auto;display:block}
@keyframes robi-hang{
  0%{opacity:0;transform:translateY(-40px) rotate(-14deg);animation-timing-function:cubic-bezier(.2,.8,.3,1.2)}
  10%{opacity:1;transform:translateY(0) rotate(6deg);animation-timing-function:ease-in-out}
  27%{transform:translateY(0) rotate(-5deg);animation-timing-function:ease-in-out}
  44%{transform:translateY(0) rotate(5deg);animation-timing-function:ease-in-out}
  61%{transform:translateY(0) rotate(-3deg);animation-timing-function:ease-in-out}
  74%{opacity:1;transform:translateY(-6px) rotate(0deg);animation-timing-function:cubic-bezier(.55,0,1,.45)}
  100%{opacity:0;transform:translateY(760px) rotate(38deg)}
}
.robi-peek{position:fixed;right:0;top:46%;width:130px;z-index:40;transform:translateX(120%);pointer-events:none}
.robi-peek.on{animation:robi-peek 5.5s linear forwards}
.robi-peek a{pointer-events:auto;display:block}
@keyframes robi-peek{0%{transform:translateX(120%) rotate(0);animation-timing-function:cubic-bezier(.2,.8,.3,1)}16%{transform:translateX(26%) rotate(-8deg);animation-timing-function:ease-in-out}38%{transform:translateX(26%) rotate(-3deg);animation-timing-function:ease-in-out}60%{transform:translateX(26%) rotate(-8deg)}80%{transform:translateX(26%) rotate(-8deg);animation-timing-function:cubic-bezier(.5,0,.8,.3)}100%{transform:translateX(120%) rotate(-2deg)}}
@media (max-width:1023px){.robi-hang{display:none}}
@media (max-width:767px){.robi-peek{display:none}}
@media (prefers-reduced-motion:reduce){.robi-hang,.robi-peek{display:none}}
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
  const [estado, setEstado] = useState("espera"); // espera | on | fin
  useEffect(() => {
    const el = ref.current;
    if (!el || yaVisto() || sinAnimaciones() || window.innerWidth < 1024) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (yaVisto()) return; // ya se asomó en esta visita
      marcarVisto();
      setEstado("on");
    }, { rootMargin: "0px 0px -35% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  if (estado === "fin") return null;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div ref={ref} className={`robi-hang${estado === "on" ? " on" : ""}`} onAnimationEnd={() => setEstado("fin")}>
        <RobiImg src="/home-4/robi-colgando.webp" />
      </div>
    </>
  );
}

export function RobiAsoma({ delay = 18000 }) {
  const [estado, setEstado] = useState("espera");
  useEffect(() => {
    if (yaVisto() || sinAnimaciones() || window.innerWidth < 768) return;
    let t;
    const intentar = () => {
      if (yaVisto()) return; // ya colgó en esta visita: no aparece de nuevo
      // solo se asoma sobre las secciones blancas (no sobre el carrusel oscuro del inicio)
      const enInicio = window.scrollY < window.innerHeight * 0.9;
      if (document.visibilityState !== "visible" || enInicio) { t = setTimeout(intentar, 4000); return; }
      marcarVisto();
      setEstado("on");
    };
    t = setTimeout(intentar, delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (estado === "fin") return null;
  return (
    <>
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <div className={`robi-peek${estado === "on" ? " on" : ""}`} aria-hidden={estado !== "on"} onAnimationEnd={() => setEstado("fin")}>
      <RobiImg src="/home-4/robi-saludo.webp" />
    </div>
    </>
  );
}

// RobiVideo: versión en video (Higgsfield, fondo quitado) de Robi en "Qué hacemos".
// 1) Al llegar a la sección, Robi cuelga del borde superior, patalea, se suelta y cae.
// 2) Al llegar al final de la misma sección, cae en escena, saluda y sale corriendo
//    hacia la derecha hasta salir de la pantalla.
// Una sola vez por visita (misma clave que el resto), solo escritorio, sin animación
// si el visitante la desactivó. Los videos son MP4 sobre blanco puro y se mezclan con
// mix-blend-mode: multiply, así el blanco desaparece sin halos (funciona en todos los navegadores).
const cssVideo = `
.robi-v{position:absolute;z-index:5;pointer-events:none;opacity:0;mix-blend-mode:multiply}
.robi-v video{display:block;width:100%;height:auto}
.robi-v a{pointer-events:auto;display:block}
.robi-v.on{opacity:1}
.robi-cae{top:-50px;right:6%;width:187px}
.robi-corre{bottom:0;right:0;width:400px}
.robi-corre a{pointer-events:none}
.robi-corre.on{animation:robi-aterriza .35s cubic-bezier(.5,0,.75,0) both}
@keyframes robi-aterriza{from{transform:translateY(-120px)}to{transform:none}}
@media (max-width:1023px){.robi-v{display:none}}
@media (prefers-reduced-motion:reduce){.robi-v{display:none}}
`;

function VideoRobi({ nombre, videoRef, onEnded }) {
  return (
    <Link href="/contact-us" aria-label="Robi, la mascota de Robotipy: hablemos" title="¡Hola! Soy Robi. ¿Hablamos?">
      <video ref={videoRef} muted playsInline preload="none" onEnded={onEnded} aria-hidden="true">
        <source src={`/home-4/${nombre}.mp4`} type="video/mp4" />
      </video>
    </Link>
  );
}

export function RobiVideo() {
  const caeBox = useRef(null), correBox = useRef(null);
  const caeVid = useRef(null), correVid = useRef(null);
  const [cae, setCae] = useState("espera"); // espera | on | fin
  const [corre, setCorre] = useState("espera"); // espera | lista | on | fin

  const reproducir = (v, alFallar) => {
    if (!v) return alFallar();
    v.load();
    const p = v.play();
    if (p && p.catch) p.catch(alFallar);
  };

  // 1) cuelga y cae, al entrar a la sección
  useEffect(() => {
    const el = caeBox.current;
    if (!el || yaVisto() || sinAnimaciones() || window.innerWidth < 1024) { setCae("fin"); setCorre("fin"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (yaVisto()) { setCae("fin"); setCorre("fin"); return; }
      marcarVisto();
      setCae("on");
      reproducir(caeVid.current, () => { setCae("fin"); setCorre("fin"); });
    }, { rootMargin: "0px 0px -35% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 2) aterriza, saluda y corre, al llegar al final de la sección (solo si ya cayó)
  useEffect(() => {
    if (corre !== "lista") return;
    const el = correBox.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      setCorre("on");
      reproducir(correVid.current, () => setCorre("fin"));
    }, { rootMargin: "0px 0px -10% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [corre]);

  if (cae === "fin" && corre === "fin") return null;
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssVideo }} />
      {cae !== "fin" && (
        <div ref={caeBox} className={`robi-v robi-cae${cae === "on" ? " on" : ""}`}>
          <VideoRobi nombre="robi-cae" videoRef={caeVid} onEnded={() => { setCae("fin"); setCorre((c) => (c === "espera" ? "lista" : c)); }} />
        </div>
      )}
      {corre !== "fin" && (
        <div ref={correBox} className={`robi-v robi-corre${corre === "on" ? " on" : ""}`}>
          <VideoRobi nombre="robi-corre" videoRef={correVid} onEnded={() => setCorre("fin")} />
        </div>
      )}
    </>
  );
}
