import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import { facts } from "@/libs/landingFacts";
import MegaMenu from "../home-4/_components/MegaMenu";
import { Cierre, wrap } from "../home-4/_components/Secciones";
import FormularioPostulacion from "./FormularioPostulacion";

export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    title: "Trabaja con nosotros | Robotipy",
    description: "Postula a un trabajo o a tu práctica laboral en Robotipy: robots, agentes de IA y software a medida para empresas de Chile, Argentina, Colombia y España.",
    canonicalUrlRelative: "/trabaja-con-nosotros",
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });
}

export default async function TrabajaConNosotrosPage({ params }) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);

  const points = [
    { title: "Proyectos reales", text: `Robots, agentes de IA y software en producción para empresas de ${facts.clientCountriesText}.` },
    { title: "Equipo en Chile y Argentina", text: "Trabajas con las personas que diseñan, construyen y mantienen cada solución." },
    { title: "Partner de Rocketbot", text: `Somos ${facts.partner}, así que aprendes RPA con la plataforma desde adentro.` },
    { title: "Prácticas con trabajo real", text: "Si haces tu práctica con nosotros, aprendes en proyectos de clientes junto al equipo." },
  ];

  return (
    <>
      <MegaMenu />
      <main id="main-content" className="bg-white text-[#00182B] antialiased">
        <section className="bg-[#00182B] pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
          <div className={wrap}>
            <p className="text-lg text-[#4fd1d0]">Carrera en Robotipy</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">Trabaja con nosotros</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Buscamos profesionales y estudiantes en práctica que disfruten resolver problemas reales con automatización e
              IA. Déjanos tus datos: revisamos cada postulación.
            </p>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/15">
                <p className="text-lg font-semibold">Trabajo</p>
                <p className="mt-1 text-white/70">Para profesionales que quieren sumarse al equipo y construir soluciones para clientes.</p>
              </div>
              <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/15">
                <p className="text-lg font-semibold">Práctica laboral</p>
                <p className="mt-1 text-white/70">Para estudiantes que necesitan hacer su práctica y quieren aprender en proyectos reales.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className={`${wrap} grid gap-14 py-16 sm:py-20 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-light text-[#00182B]">Por qué Robotipy</h2>
              <ul className="mt-8 space-y-8 border-l-2 border-[#039695] pl-6">
                {points.map((p) => (
                  <li key={p.title}>
                    <p className="font-semibold">{p.title}</p>
                    <p className="mt-1 text-slate-600">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white p-6 shadow-[0_24px_60px_rgba(0,24,43,0.12)] ring-1 ring-black/5 sm:p-10">
                <h2 className="text-2xl font-light text-[#00182B]">Envíanos tu postulación</h2>
                <p className="mt-2 text-sm text-slate-600">Los campos con * son obligatorios.</p>
                <div className="mt-8">
                  <FormularioPostulacion />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Cierre />
    </>
  );
}
