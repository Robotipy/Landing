import Clientes from "../../_home/components/Clientes";
import MegaMenu from "./MegaMenu";
import ServiciosCarrusel from "./ServiciosCarrusel";
import HeroCarrusel from "./HeroCarrusel";
import { Banda, Boletin, CasosDestacados, Cierre, Declaracion, Industrias, LoUltimo, TrabajaConNosotros } from "./Secciones";

// Home principal en español, con estructura de consultora (Quiénes somos, Qué
// hacemos, Perspectivas). La metadata viene de app/[locale]/layout.js.

const fadeCss = `
@keyframes h4-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.h4-fade { animation: h4-fade .45s ease-out; }
@media (prefers-reduced-motion: reduce) { .h4-fade { animation: none; } }
`;

export default function HomeNueva() {
  return (
    <>
      <MegaMenu />
      <main id="main-content" className="bg-white text-[#00182B] antialiased">
        <HeroCarrusel />
        <Clientes />
        <Declaracion />
        <LoUltimo />
        <style dangerouslySetInnerHTML={{ __html: fadeCss }} />
        <section id="que-hacemos" className="scroll-mt-16 bg-white">
          <Banda tone="navy">Qué hacemos</Banda>
          <ServiciosCarrusel />
        </section>
        <CasosDestacados />
        <Industrias />
        <TrabajaConNosotros />
        <Boletin />
      </main>
      <Cierre />
    </>
  );
}
