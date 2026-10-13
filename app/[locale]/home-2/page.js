import { Suspense } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import { meta } from "./data";
import Hero from "./_components/Hero";
import Clientes from "./_components/Clientes";
import Soluciones from "./_components/Soluciones";
import MelonHelp from "./_components/MelonHelp";
import Productos from "./_components/Productos";
import Casos from "./_components/Casos";
import Modelos from "./_components/Modelos";
import Cierre from "./_components/Cierre";

export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    title: meta.title,
    description: meta.description,
    canonicalUrlRelative: "/home-2",
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });
}

// Animación suave de los elementos flotantes (se apaga con prefers-reduced-motion
// por la regla global de app/globals.css).
const pageCss = `
@keyframes h2-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
.h2-float { animation: h2-float 6s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .h2-float { animation: none; } }
`;

// Sin JavaScript, el contenido con aparición al hacer scroll se muestra igual.
const noscriptCss =
  "<style>[data-h2-reveal]{opacity:1!important;transform:none!important}</style>";

export default async function Home2Page({ params }) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);

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
