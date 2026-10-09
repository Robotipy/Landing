import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqJsonLd } from "@/components/FaqSection";
import { faqHub, faqHubUpdatedAt } from "@/libs/faqs";
import { getSEOTags } from "@/libs/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getSEOTags({
    locale,
    availableLocales: ["es"],
    title: "Preguntas frecuentes sobre RPA, IA y automatización | Robotipy",
    description:
      "Respuestas directas sobre Robotipy: precios de un proyecto RPA, plataformas, sistemas que automatizamos (SAP, AS400, Defontana, bancos), plazos, soporte y seguridad.",
    canonicalUrlRelative: "/preguntas-frecuentes",
  });
}

const toAnchor = (text) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[¿?]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const updatedLabel = new Date(`${faqHubUpdatedAt}T12:00:00Z`).toLocaleDateString(
  "es-ES",
  { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }
);

export default function PreguntasFrecuentesPage() {
  const allFaqs = faqHub.flatMap((category) => category.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(allFaqs)) }}
      />
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="bg-[#00182B]">
        <div className="mx-auto max-w-[880px] px-6 py-16">
          <header className="mb-12">
            <h1 className="mb-5 font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.025em] text-white md:text-[42px]">
              Preguntas frecuentes sobre Robotipy, RPA y automatización de procesos
            </h1>
            <p className="text-[18px] leading-[1.6] text-white/80">
              Respuestas cortas sobre quiénes somos, cuánto cuesta un proyecto,
              con qué plataformas trabajamos, qué sistemas hemos automatizado,
              cómo es la implementación y cómo cuidamos los datos. Cada
              respuesta enlaza al artículo con el detalle completo.
            </p>
            <p className="mt-4 text-[14px] text-white/60">
              Actualizado el{" "}
              <time dateTime={faqHubUpdatedAt}>{updatedLabel}</time>
            </p>
          </header>

          <nav
            aria-label="Temas"
            className="mb-14 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="mb-3 font-bold text-white">Temas</p>
            <ul className="space-y-2">
              {faqHub.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="text-accent underline-offset-2 hover:underline"
                  >
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            {faqHub.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <h2 className="mb-6 text-2xl font-bold tracking-tight text-white lg:text-3xl">
                  {category.title}
                </h2>
                <div className="space-y-8">
                  {category.faqs.map((item) => (
                    <article
                      key={item.q}
                      id={toAnchor(item.q)}
                      className="scroll-mt-24 border-b border-white/10 pb-8"
                    >
                      <h3 className="mb-3 text-xl font-bold text-white">
                        {item.q}
                      </h3>
                      <p className="text-[16px] leading-relaxed text-white/85">
                        {item.a}
                      </p>
                      {item.link && (
                        <p className="mt-3 text-[14px]">
                          <Link
                            href={item.link.href}
                            className="text-accent underline-offset-2 hover:underline"
                          >
                            {item.link.label}
                          </Link>
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              ¿Tu pregunta no está aquí?
            </h2>
            <p className="mb-6 text-white/80">
              Cuéntanos tu proceso y te respondemos con un diagnóstico sin costo.
            </p>
            <Link
              href="/es/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 font-bold text-white hover:bg-opacity-90"
            >
              Agenda una reunión
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
