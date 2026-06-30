import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonMain from "@/components/ButtonMain";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

const faqs = [
  {
    q: "¿Quién implementa Rocketbot en Chile?",
    a: "Robotipy, Platinum Partner del fabricante, con proyectos en producción en minería, retail, banca y SAP.",
  },
  {
    q: "¿Pueden automatizar procesos sobre SAP y el SII?",
    a: "Sí: leemos TXT del SII, actualizamos SAP y automatizamos órdenes, cesiones y conciliaciones.",
  },
  {
    q: "¿Tienen casos reales en Chile?",
    a: "Sí, en renta de vehículos, retail y hotelería, vitivinicultura y minería, varios en producción.",
  },
  {
    q: "¿Qué los diferencia de otros partners?",
    a: "El tier Platinum y que el fundador fue desarrollador de Rocketbot durante 6 años.",
  },
];

const casos = [
  {
    rubro: "Renta de vehículos",
    detalle:
      "Un bot en Rocketbot bloquea ventas de sucursales en un sistema legacy y corre automáticamente cuatro veces al día sobre 34 sucursales. En producción.",
  },
  {
    rubro: "Arriendo de maquinaria y vehículos",
    detalle:
      "Automatización de la carga masiva de repuestos al maestro de materiales (15 a 20 solicitudes al día que tomaban 6 a 8 horas manuales), más bots de órdenes de compra e impuestos. En producción.",
  },
  {
    rubro: "Holding industrial y hotelería",
    detalle:
      "Bots que integran HubSpot con SAP para notas de venta, generan estados de pago leyendo el sistema hotelero y ejecutan censos automáticos diarios.",
  },
  {
    rubro: "Vitivinícola exportadora",
    detalle:
      "Bot de factoring que lee los TXT del SII, actualiza SAP y emite un reporte, ejecutándose cada 30 minutos sin errores.",
  },
  {
    rubro: "Minería del cobre",
    detalle: (
      <>
        RPA más un agente de IA que automatiza los reportes de costos y permite
        consultar los datos en lenguaje natural 24/7, eliminando la dependencia
        de una sola persona.{" "}
        <Link
          href="/blog/caso-exito-rpa-ia-mineria-costos"
          className="text-accent hover:underline"
        >
          Ver el caso
        </Link>
        .
      </>
    ),
  },
  {
    rubro: "Siderurgia",
    detalle: (
      <>
        Automatización del ciclo completo de órdenes de compra en SAP, de la
        lectura del documento a la creación del pedido, con cero errores de
        transcripción entre tres sistemas.{" "}
        <Link
          href="/blog/caso-exito-automatizacion-ordenes-sap-siderurgia"
          className="text-accent hover:underline"
        >
          Ver el caso
        </Link>
        .
      </>
    ),
  },
];

export async function generateMetadata() {
  return getSEOTags({
    locale: "es",
    availableLocales: ["es"],
    ogLocale: "es_LA",
    title: "Implementación de Rocketbot en Chile | Robotipy, Platinum Partner",
    description:
      "Robotipy implementa Rocketbot en Chile: automatización de procesos en SAP, conciliaciones, minería y retail. Platinum Partner, fundador con 6 años desarrollando Rocketbot.",
    canonicalUrlRelative: "/rocketbot/chile",
  });
}

const buildJsonLd = () => {
  const pageUrl = `${siteOrigin}/es/rocketbot/chile`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Implementación de Rocketbot en Chile",
    serviceType: "Rocketbot RPA implementation",
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
    areaServed: { "@type": "Country", name: "Chile" },
    description:
      "Implementación de Rocketbot en Chile por un Platinum Partner: automatización sobre SAP, SII, conciliaciones, minería y retail.",
    url: pageUrl,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/es` },
      { "@type": "ListItem", position: 2, name: "Rocketbot", item: `${siteOrigin}/es/rocketbot` },
      { "@type": "ListItem", position: 3, name: "Chile", item: pageUrl },
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

const RocketbotChilePage = () => {
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
            <span className="text-white/80">Chile</span>
          </nav>

          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Rocketbot en Chile · Platinum Partner
          </div>
          <h1 className="mb-6 font-display text-[clamp(30px,4.5vw,46px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Implementación de Rocketbot en Chile: Robotipy, Platinum Partner
          </h1>
          <p className="max-w-3xl text-[18px] leading-[1.7] text-white/85">
            ¿Buscas quién implementa Rocketbot en Chile? Robotipy es{" "}
            <Link href="/rocketbot" className="text-accent hover:underline">
              Platinum Partner de Rocketbot
            </Link>
            , el tier más alto de certificación, con más de 80 proyectos de
            automatización. Su fundador, Danilo Toro, fue desarrollador de
            Rocketbot durante 6 años. Implementamos automatizaciones en
            producción para empresas chilenas en SAP, banca, minería y retail.
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

        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Qué automatizamos en Chile
          </h2>
          <p className="max-w-3xl text-[17px] leading-[1.7] text-white/80">
            Procesos sobre SAP, lectura de TXT del SII y cesiones, conciliación
            de cartolas bancarias, operaciones de minería del cobre,
            vitivinicultura y exportación, y back office de retail. Si tu proceso
            vive en SAP, lo cubrimos en detalle en{" "}
            <Link
              href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa"
              className="text-accent hover:underline"
            >
              qué procesos de SAP se pueden automatizar con RPA
            </Link>
            .
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Casos reales por industria
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {casos.map((c) => (
              <div
                key={c.rubro}
                className="rounded-2xl border border-white/[0.07] bg-secondary p-6"
              >
                <h3 className="mb-2 font-display text-[18px] font-bold text-white">
                  {c.rubro}
                </h3>
                <p className="text-[15px] leading-[1.6] text-white/75">
                  {c.detalle}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-white/50">
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
            que fue desarrollador de Rocketbot durante 6 años y más de 80
            proyectos, varios en producción en Chile. Conoce el detalle en la{" "}
            <Link href="/rocketbot" className="text-accent hover:underline">
              página de Rocketbot
            </Link>
            .
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-10">
          <div className="mx-auto max-w-[760px] rounded-2xl border border-accent/30 bg-[#2D3648] px-8 py-10 text-center">
            <h2 className="mb-3 font-display text-[26px] font-extrabold leading-[1.15] tracking-tight md:text-[30px]">
              ¿Tienes un proceso para automatizar en Chile?
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

export default RocketbotChilePage;
