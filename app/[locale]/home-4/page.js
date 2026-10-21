import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import Clientes from "../_home/components/Clientes";
import MegaMenu from "./_components/MegaMenu";
import ServiciosCarrusel from "./_components/ServiciosCarrusel";
import HeroCarrusel from "./_components/HeroCarrusel";
import { Banda, Boletin, CasosDestacados, Cierre, Declaracion, Industrias, LoUltimo, TrabajaConNosotros } from "./_components/Secciones";

// Propuesta de home con estructura de consultora (Quiénes somos, Qué hacemos,
// Perspectivas), inspirada en el orden de secciones de deloitte.com/cl.
export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    title: "Robotipy: automatización, agentes de IA y software a medida",
    description: "Robots, agentes de IA y software a medida para empresas medianas y grandes.",
    canonicalUrlRelative: "/home-4",
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });
}

const fadeCss = `
@keyframes h4-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.h4-fade { animation: h4-fade .45s ease-out; }
@media (prefers-reduced-motion: reduce) { .h4-fade { animation: none; } }
`;

export default async function Home4Page({ params }) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);

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
