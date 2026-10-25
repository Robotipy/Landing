import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustInUs from "@/components/TrustInUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import MapsSolutions from "@/components/MapsSolutions";
import CasosDeExito from "@/components/CasosDeExito";
import ProductsShowcase from "@/components/ProductsShowcase";
import HomeNueva from "./home-4/_components/HomeNueva";

// La home nueva solo existe en español. Inglés y portugués siguen con la
// home anterior, que sí está traducida.
export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "es") return <HomeNueva />;

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content">
        <Hero />
        <TrustInUs priority={true} />
        <Solutions />
        <ProductsShowcase />
        <CasosDeExito />
        <MapsSolutions />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
