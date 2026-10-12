import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import Cases from "./_components/Cases";
import Closing from "./_components/Closing";
import Hero from "./_components/Hero";
import HowWeWork from "./_components/HowWeWork";
import LatestPosts from "./_components/LatestPosts";
import PriceFaq from "./_components/PriceFaq";
import PriceLadder from "./_components/PriceLadder";
import { NBSP, pricing, usd } from "./_components/pricing";
import Products from "./_components/Products";
import Tools from "./_components/Tools";
import TrustStrip from "./_components/TrustStrip";
import ViewTracker from "./_components/ViewTracker";
import { evaluator } from "./_components/evaluator";

// Los últimos posts del blog se publican por fecha: igual que /blog, la página
// se regenera cada hora para que aparezcan sin redeploy.
export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  // La meta descripción es texto plano: va con espacio normal entre USD y la cifra.
  const plain = (n) => usd(n).replace(NBSP, " ");
  return getSEOTags({
    locale,
    title: "Automatización con RPA e IA y precios publicados | Robotipy",
    description: `Diagnóstico sin costo, un proceso automatizado por ${plain(
      pricing.rpaAverage
    )} en promedio y soporte desde ${plain(pricing.supportFrom)} al mes. Evalúa tu proceso en ${
      evaluator.questions
    } preguntas.`,
    canonicalUrlRelative: "/home-3",
    availableLocales: ["es"],
    extraTags: {
      robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
    },
  });
}

// Foco visible en teal (más de 3:1 sobre blanco y sobre #00182B) en lugar del
// #5eead4 global, que casi no se ve en las bandas claras.
const pageStyles = `
#main-content[data-home="3"] :focus-visible { outline: 2px solid rgb(3, 150, 149); outline-offset: 2px; }
`;

export default async function Home3Page({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <style>{pageStyles}</style>
      <ViewTracker />
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" data-home="3" className="overflow-x-clip">
        <Hero />
        <TrustStrip />
        <PriceLadder />
        <Products />
        <Tools />
        <Cases locale={locale} />
        <HowWeWork />
        <LatestPosts />
        <PriceFaq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
