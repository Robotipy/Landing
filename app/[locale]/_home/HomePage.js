import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import Clientes from "./components/Clientes";
import Soluciones from "./components/Soluciones";
import Rocketbot from "./components/Rocketbot";
import MelonHelp from "./components/MelonHelp";
import Productos from "./components/Productos";
import Casos from "./components/Casos";
import Modelos from "./components/Modelos";
import Cierre from "./components/Cierre";

// Home principal en español. La metadata (título, descripción, canonical)
// viene de app/[locale]/layout.js.

// Animación suave de los elementos flotantes (se apaga con prefers-reduced-motion
// por la regla global de app/globals.css).
const pageCss = `
@keyframes h2-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.h2-float { animation: h2-float 6s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .h2-float { animation: none; } }
@keyframes h2-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.h2-marquee { animation: h2-marquee 45s linear infinite; }
.h2-marquee-wrap:hover .h2-marquee { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .h2-marquee { animation: none; width: 100%; }
  .h2-marquee > ul:first-child { flex-wrap: wrap; flex-shrink: 1; width: 100%; row-gap: 1.5rem; }
  .h2-marquee-dup { display: none !important; }
}
`;

// Sin JavaScript, el contenido con aparición al hacer scroll se muestra igual.
const noscriptCss =
  "<style>[data-h2-reveal]{opacity:1!important;transform:none!important}</style>";

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />
      <noscript dangerouslySetInnerHTML={{ __html: noscriptCss }} />
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="overflow-x-clip bg-white text-[#00182B] antialiased">
        <Hero />
        <Clientes />
        <Soluciones />
        <Rocketbot />
        <MelonHelp />
        <Productos />
        <Casos />
        <Modelos />
        <Cierre />
      </main>
      <Footer />
    </>
  );
}
