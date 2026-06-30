import { Suspense } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonMain from "@/components/ButtonMain";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import ivanCabreraImg from "@/app/[locale]/blog/_assets/images/authors/ivan-cabrera.png";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

const faqs = [
  {
    q: "¿Quién implementa Rocketbot en Argentina?",
    a: "Robotipy, Platinum Partner del fabricante, con equipo local liderado por Ivan Cabrera.",
  },
  {
    q: "¿Pueden automatizar AFIP/ARCA y el Libro IVA?",
    a: "Sí: automatizamos la carga de comprobantes y la generación del Libro IVA Compras, además de conciliaciones bancarias.",
  },
  {
    q: "¿Integran con ERPs argentinos como Finnegans?",
    a: "Sí, tenemos casos de conciliación multi-banco integrados con Finnegans.",
  },
  {
    q: "¿Tienen presencia real en Argentina?",
    a: "Sí, equipo local liderado por el CEO de Robotipy Argentina.",
  },
];

export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    availableLocales: ["es"],
    ogLocale: "es_LA",
    title:
      "Implementación de Rocketbot en Argentina | Robotipy, Platinum Partner",
    description:
      "Robotipy implementa Rocketbot en Argentina: conciliación bancaria, AFIP/ARCA, Libro IVA y ERPs. Platinum Partner con un equipo local liderado por Ivan Cabrera.",
    canonicalUrlRelative: "/rocketbot/argentina",
  });
}

const buildJsonLd = () => {
  const pageUrl = `${siteOrigin}/es/rocketbot/argentina`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Implementación de Rocketbot en Argentina",
    serviceType: "Rocketbot RPA implementation",
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
    areaServed: { "@type": "Country", name: "Argentina" },
    description:
      "Implementación de Rocketbot en Argentina por un Platinum Partner: conciliación bancaria, AFIP/ARCA, Libro IVA e integración con ERPs.",
    url: pageUrl,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/es` },
      { "@type": "ListItem", position: 2, name: "Rocketbot", item: `${siteOrigin}/es/rocketbot` },
      { "@type": "ListItem", position: 3, name: "Argentina", item: pageUrl },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return [service, breadcrumb, faq];
};

const RocketbotArgentinaPage = () => {
  const jsonLdBlocks = buildJsonLd();

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main id="main-content" className="bg-[#00182B] text-white">
        <section className="mx-auto max-w-5xl px-6 pt-12 pb-10 md:pt-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <span className="px-2">/</span>
            <Link href="/rocketbot" className="hover:text-white">
              Rocketbot
            </Link>
            <span className="px-2">/</span>
            <span className="text-white/80">Argentina</span>
          </nav>

          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Rocketbot en Argentina · Platinum Partner
          </div>
          <h1 className="mb-6 font-display text-[clamp(30px,4.5vw,46px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Implementación de Rocketbot en Argentina: Robotipy, Platinum Partner
          </h1>
          <p className="max-w-3xl text-[18px] leading-[1.7] text-white/85">
            ¿Buscas quién implementa Rocketbot en Argentina? Robotipy es{" "}
            <Link href="/rocketbot" className="text-accent hover:underline">
              Platinum Partner de Rocketbot
            </Link>
            , el tier más alto de certificación, con equipo local en Argentina
            liderado por Ivan Cabrera (CEO de Robotipy Argentina) y más de 80
            proyectos en la región. Automatizamos conciliaciones bancarias,
            procesos de AFIP/ARCA e integraciones con ERPs.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonMain link="/contact-us" text="Evaluar mi proceso" type="primary" rounded noblank />
            <Link
              href="/success-cases"
              className="text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
            >
              Ver casos de éxito
            </Link>
          </div>
        </section>

        {/* CARA LOCAL: IVAN CABRERA */}
        <section className="mx-auto max-w-5xl px-6 py-6">
          <div className="mx-auto flex max-w-[760px] items-center gap-5 rounded-2xl border border-white/[0.07] bg-secondary px-7 py-6">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent/20">
              <Image
                src={ivanCabreraImg}
                alt="Ivan Cabrera, CEO de Robotipy Argentina"
                width={64}
                height={64}
                className="h-16 w-16 object-cover object-center"
              />
            </span>
            <div>
              <div className="font-display text-[16px] font-bold text-white">
                Ivan Cabrera
              </div>
              <div className="mb-1 text-[13px] font-medium text-accent">
                CEO de Robotipy Argentina
              </div>
              <div className="text-[14px] leading-[1.5] text-white/70">
                Lidera el equipo local que implementa Rocketbot en Argentina, con
                foco en conciliaciones, AFIP/ARCA y procesos sobre ERPs.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Qué automatizamos en Argentina
          </h2>
          <p className="max-w-3xl text-[17px] leading-[1.7] text-white/80">
            Procesos de AFIP/ARCA, Libro IVA Compras y facturación electrónica;
            conciliaciones con bancos como Macro, Provincia y Redlink; e
            integraciones con ERP Finnegans y otros sistemas locales. También
            automatización en agro y commodities.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Casos reales por industria
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/[0.07] bg-secondary p-6">
              <h3 className="mb-2 font-display text-[18px] font-bold text-white">
                Cooperativa de servicios públicos
              </h3>
              <p className="text-[15px] leading-[1.6] text-white/75">
                Conciliación bancaria diaria automática que extrae movimientos de
                tres bancos (Macro, Provincia y Redlink), los cruza con la base
                de clientes y alerta diferencias, con OCR e IA que llevó el
                acierto a casi 100%. En marcha blanca.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-secondary p-6">
              <h3 className="mb-2 font-display text-[18px] font-bold text-white">
                Agronegocios
              </h3>
              <p className="text-[15px] leading-[1.6] text-white/75">
                Inteligencia de mercado automatizada que consolida precios de
                commodities, tasas y datos macro de más de 10 fuentes públicas
                para una consultora del campo.{" "}
                <Link
                  href="/blog/caso-exito-inteligencia-mercado-agronegocios"
                  className="text-accent hover:underline"
                >
                  Ver el caso
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-secondary p-6">
              <h3 className="mb-2 font-display text-[18px] font-bold text-white">
                Agropecuario
              </h3>
              <p className="text-[15px] leading-[1.6] text-white/75">
                Conciliación multi-banco integrada con el ERP Finnegans en un
                grupo agropecuario: lo que tomaba horas, ahora en minutos.{" "}
                <Link
                  href="/blog/caso-exito-conciliacion-bancaria-agropecuario"
                  className="text-accent hover:underline"
                >
                  Ver el caso
                </Link>
                .
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-secondary p-6">
              <h3 className="mb-2 font-display text-[18px] font-bold text-white">
                Estudio contable agro (en implementación)
              </h3>
              <p className="text-[15px] leading-[1.6] text-white/75">
                Bot que procesa comprobantes y arma el Libro IVA Compras de AFIP.
              </p>
            </div>
          </div>
          <p className="mt-4 text-[13px] text-white/50">
            Casos descritos por industria para resguardar la confidencialidad de
            cada cliente.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Por qué Robotipy
          </h2>
          <p className="max-w-3xl text-[17px] leading-[1.7] text-white/80">
            Tier Platinum (la máxima certificación del fabricante), un fundador
            que fue desarrollador de Rocketbot durante 6 años y un equipo local
            argentino. Conoce el detalle en la{" "}
            <Link href="/rocketbot" className="text-accent hover:underline">
              página de Rocketbot
            </Link>
            .
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-10">
          <div className="mx-auto max-w-[760px] rounded-2xl border border-accent/30 bg-[#2D3648] px-8 py-10 text-center">
            <h2 className="mb-3 font-display text-[26px] font-extrabold leading-[1.15] tracking-tight md:text-[30px]">
              ¿Tienes un proceso para automatizar en Argentina?
            </h2>
            <p className="mx-auto mb-7 max-w-[540px] text-[16px] leading-[1.6] text-white/80">
              Lo evaluamos sin compromiso y te entregamos una estimación de ROI
              antes de empezar.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonMain link="/contact-us" text="Evaluar mi proceso" type="primary" rounded noblank />
              <Link
                href="/success-cases"
                className="text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-10 pb-20">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto max-w-3xl">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group mb-3 overflow-hidden rounded-xl border border-white/10 bg-white/5"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-bold text-white [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="ml-4 flex-shrink-0 text-2xl font-light text-accent">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[15px] leading-relaxed text-white/80">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {jsonLdBlocks.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
};

export default RocketbotArgentinaPage;
