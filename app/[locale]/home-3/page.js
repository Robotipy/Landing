import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import Closing from "./_components/Closing";
import Faq from "./_components/Faq";
import Hero from "./_components/Hero";
import HowWeWork from "./_components/HowWeWork";
import Industries from "./_components/Industries";
import Products from "./_components/Products";
import Services from "./_components/Services";
import Stories from "./_components/Stories";
import Team from "./_components/Team";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getSEOTags({
    locale,
    title: "Robotipy | Automatización, IA y software para tu empresa",
    description:
      "Asistentes de IA para WhatsApp, robots de software para tareas repetitivas, software a medida y capacitación. Un equipo cercano en Chile y Argentina. La primera reunión no tiene costo.",
    canonicalUrlRelative: "/home-3",
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });
}

// Banda de logos en movimiento (se detiene al pasar el mouse y queda fija
// con movimiento reducido) y respaldo sin JavaScript para las apariciones.
const pageStyles = `
@keyframes h3-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.h3-marquee { animation: h3-marquee 45s linear infinite; }
.h3-marquee-wrap:hover .h3-marquee { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .h3-marquee { animation: none; width: 100%; }
  .h3-marquee > ul:first-child { flex-wrap: wrap; flex-shrink: 1; width: 100%; row-gap: 1.5rem; }
  .h3-marquee-dup { display: none !important; }
}
#home-3 :focus-visible { outline: 3px solid rgb(3, 150, 149); outline-offset: 3px; }
`;

export default async function Home3Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <style>{pageStyles}</style>
      <noscript>
        <style>{".h3-reveal{opacity:1!important;transform:none!important}"}</style>
      </noscript>
      <Suspense>
        <Header />
      </Suspense>
      <div id="home-3" className="overflow-x-clip bg-white text-primary">
        <main id="main-content">
          <Hero />
          <Services />
          <Products />
          <Stories />
          <HowWeWork />
          <Team />
          <Industries />
          <Faq />
          <Closing />
        </main>
      </div>
      <Footer />
    </>
  );
}
