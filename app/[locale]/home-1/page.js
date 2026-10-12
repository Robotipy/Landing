import { Suspense } from "react";
import { Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import { getArticlesByLocale } from "@/app/[locale]/blog/_assets/content";
import { meta } from "./data";
import { home1Css } from "./_components/styles";
import { HomeView } from "./_components/track";
import Portada from "./_components/Portada";
import Respaldo from "./_components/Respaldo";
import Rutas from "./_components/Rutas";
import Servicios from "./_components/Servicios";
import Metodo from "./_components/Metodo";
import Resultados from "./_components/Resultados";
import IaAplicada from "./_components/IaAplicada";
import Gobierno from "./_components/Gobierno";
import Equipo from "./_components/Equipo";
import Recursos from "./_components/Recursos";
import Preguntas from "./_components/Preguntas";
import Agenda from "./_components/Agenda";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-home1-serif",
  display: "swap",
});

// Los últimos posts y los enlaces a posts programados se recalculan cada hora.
export const revalidate = 3600;

export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    title: meta.title,
    description: meta.description,
    canonicalUrlRelative: "/home-1",
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false, googleBot: { index: false, follow: false } } },
  });
}

export default async function Home1Page({ params }) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);

  // Mismo orden que /blog: publishedAt descendente, con orden estable en los empates.
  const articulos = [...getArticlesByLocale("es")].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  const publicados = new Set(articulos.map((a) => a.slug));
  const ultimos = articulos.slice(0, 3).map((a) => ({
    slug: a.slug,
    title: a.title,
    publishedAt: a.publishedAt,
    autor: a.author?.name ?? null,
  }));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: home1Css }} />
      <HomeView />
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className={`home1 ${serif.variable} antialiased`}>
        <Portada />
        <Respaldo publicados={publicados} />
        <Rutas publicados={publicados} />
        <Servicios publicados={publicados} />
        <Metodo publicados={publicados} />
        <Resultados publicados={publicados} />
        <IaAplicada publicados={publicados} />
        <Gobierno publicados={publicados} />
        <Equipo />
        <Recursos ultimos={ultimos} />
        <Preguntas publicados={publicados} />
        <Agenda />
      </main>
      <Footer />
    </>
  );
}
