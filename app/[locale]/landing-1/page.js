import { Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import { getArticlesByLocale } from "@/app/[locale]/blog/_assets/content";
import { meta } from "./data";
import { lp1Css } from "./_components/styles";
import { LandingView } from "./_components/tracking";
import HeaderInforme from "./_components/HeaderInforme";
import Portada from "./_components/Portada";
import FactSheet from "./_components/FactSheet";
import PuntoDePartida from "./_components/PuntoDePartida";
import CicloCaptura from "./_components/CicloCaptura";
import PrimerAno from "./_components/PrimerAno";
import Resultados from "./_components/Resultados";
import IaAplicada from "./_components/IaAplicada";
import Gobierno from "./_components/Gobierno";
import Equipo from "./_components/Equipo";
import Biblioteca from "./_components/Biblioteca";
import Preguntas from "./_components/Preguntas";
import Agenda from "./_components/Agenda";
import FooterInforme from "./_components/FooterInforme";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-lp1-serif",
  display: "swap",
});

// La biblioteca y los enlaces a posts programados se recalculan cada hora.
export const revalidate = 3600;

export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    title: meta.title,
    description: meta.description,
    canonicalUrlRelative: "/landing-1",
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });
}

export default async function Landing1Page({ params }) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);

  const publicados = new Set(getArticlesByLocale("es").map((a) => a.slug));

  return (
    <div className={`lp1 ${serif.variable} min-h-screen antialiased`}>
      <style dangerouslySetInnerHTML={{ __html: lp1Css }} />
      <LandingView />
      <HeaderInforme />
      <main id="main-content">
        <Portada />
        <FactSheet />
        <PuntoDePartida />
        <CicloCaptura publicados={publicados} />
        <PrimerAno />
        <Resultados />
        <IaAplicada publicados={publicados} />
        <Gobierno publicados={publicados} />
        <Equipo />
        <Biblioteca publicados={publicados} />
        <Preguntas />
        <Agenda />
      </main>
      <FooterInforme />
    </div>
  );
}
