import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonMain from "@/components/ButtonMain";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getSEOTags({
    locale,
    title:
      "Implementación de Rocketbot en Chile y LatAm | Robotipy, Platinum Partner",
    description:
      "¿Buscas quién implementa Rocketbot en Chile o Argentina? Robotipy es Platinum Partner de Rocketbot, el tier más alto, con +80 proyectos en LatAm y España.",
    canonicalUrlRelative: "/rocketbot",
  });
}

// FAQ única: se usa para el render visible y para el JSON-LD FAQPage. El texto
// del schema debe coincidir palabra por palabra con el visible.
const faqs = [
  {
    q: "¿Quién implementa Rocketbot en Chile?",
    a: "Robotipy implementa Rocketbot en Chile como Platinum Partner del fabricante, el tier más alto de certificación. Tiene más de 80 proyectos de automatización en la región.",
  },
  {
    q: "¿Qué significa ser Platinum Partner de Rocketbot?",
    a: "Es el nivel más alto del programa de partners de Rocketbot. Exige un equipo de ingenieros y consultores certificados, e implica acceso directo a soporte del fabricante y a casos con clientes.",
  },
  {
    q: "¿Por qué Robotipy conoce tan bien Rocketbot?",
    a: "Porque su fundador, Danilo Toro, fue desarrollador de Rocketbot durante 6 años. Ese conocimiento de la plataforma desde adentro, sumado al tier Platinum, hace que Robotipy implemente Rocketbot a un nivel difícil de igualar en la región.",
  },
  {
    q: "¿Rocketbot sirve para automatizar SAP?",
    a: "Sí. Rocketbot puede operar sobre SAP para automatizar tareas como órdenes de compra, conciliaciones y carga de datos, igual que lo haría una persona, pero sin intervención manual.",
  },
  {
    q: "¿En qué países implementa Robotipy?",
    a: "Robotipy implementa Rocketbot en Chile, Argentina, Colombia y España, con más de 80 proyectos en 8 países.",
  },
  {
    q: "¿Cuánto cuesta implementar Rocketbot?",
    a: "Depende del proceso y su complejidad. Robotipy evalúa cada caso sin compromiso y entrega una estimación de ROI antes de empezar.",
  },
];

const reasons = [
  {
    t: "Conocemos Rocketbot desde adentro",
    d: "Danilo Toro, fundador de Robotipy, fue desarrollador de Rocketbot durante 6 años. Pocos equipos en la región entienden la plataforma a ese nivel.",
  },
  {
    t: "Platinum Partner (el nivel más alto)",
    d: "No todos los partners son iguales: el tier Platinum exige un equipo de ingenieros y consultores certificados por Rocketbot. Es la máxima certificación que otorga el fabricante.",
  },
  {
    t: "Experiencia comprobable",
    d: "Más de 80 proyectos en producción, con casos reales en minería, banca, agro, siderurgia, logística y retail, en Chile, Argentina, Colombia y España.",
  },
  {
    t: "De punta a punta",
    d: "No solo programamos robots: analizamos el proceso, calculamos el ROI, lo ponemos en producción y lo monitoreamos con nuestra herramienta Monitor.",
  },
  {
    t: "Soporte local en español",
    d: "En tu zona horaria, sin intermediarios.",
  },
];

const steps = [
  "Nos cuentas el proceso que quieres automatizar.",
  "Lo evaluamos y te decimos si conviene Rocketbot, una integración por API o una mezcla, con una estimación de ROI.",
  "Construimos, ponemos en producción y damos soporte.",
];

const buildJsonLd = (locale) => {
  const pageUrl = `${siteOrigin}/${locale}/rocketbot`;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Robotipy",
    url: siteOrigin,
    description:
      "Robotipy es Platinum Partner de Rocketbot, el tier más alto de certificación, con más de 80 proyectos de automatización RPA en Latinoamérica y España.",
    memberOf: {
      "@type": "Organization",
      name: "Rocketbot",
      description: "Platinum Partner",
    },
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Implementación de Rocketbot (RPA)",
    serviceType: "Rocketbot RPA implementation",
    provider: {
      "@type": "Organization",
      name: "Robotipy",
      url: siteOrigin,
    },
    areaServed: ["Chile", "Argentina", "Colombia", "España"],
    description:
      "Implementación de Rocketbot de punta a punta (análisis del proceso, desarrollo de los robots, puesta en producción y soporte) por un Platinum Partner certificado.",
    url: pageUrl,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteOrigin}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Rocketbot", item: pageUrl },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return [organization, service, breadcrumb, faq];
};

const RocketbotPage = async ({ params }) => {
  const { locale } = await params;
  const jsonLdBlocks = buildJsonLd(locale);

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>

      <main id="main-content" className="bg-[#00182B] text-white">
        {/* HERO / BLUF */}
        <section className="mx-auto max-w-5xl px-6 pt-12 pb-10 md:pt-16">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Inicio
            </Link>
            <span className="px-2">/</span>
            <span className="text-white/80">Rocketbot</span>
          </nav>

          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Platinum Partner de Rocketbot
          </div>
          <h1 className="mb-6 font-display text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Robotipy: Platinum Partner de Rocketbot en Chile y Latinoamérica
          </h1>
          <p className="max-w-3xl text-[18px] leading-[1.7] text-white/85">
            ¿Buscas quién implementa Rocketbot en Chile o Argentina? Robotipy es{" "}
            <strong className="text-white">
              Platinum Partner de Rocketbot, el tier más alto del programa de
              certificación
            </strong>
            , con más de 80 proyectos de automatización en 8 países. Conocemos la
            plataforma desde adentro:{" "}
            <strong className="text-white">
              Danilo Toro, fundador de Robotipy, fue desarrollador de Rocketbot
              durante 6 años.
            </strong>{" "}
            Implementamos Rocketbot de punta a punta (análisis del proceso,
            desarrollo de los robots, puesta en producción y soporte) para
            empresas en Chile, Argentina, Colombia y España.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonMain link="/contact-us" text="Evaluar mi proceso" type="primary" rounded noblank />
            <Link
              href="/success-cases"
              className="text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
            >
              Ver nuestros casos de éxito
            </Link>
          </div>
        </section>

        {/* ¿QUÉ ES ROCKETBOT? */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            ¿Qué es Rocketbot?
          </h2>
          <p className="max-w-3xl text-[17px] leading-[1.7] text-white/80">
            Rocketbot es una plataforma de automatización robótica de procesos
            (RPA) de origen chileno, construida sobre Python, pensada para
            automatizar tareas repetitivas en sistemas como SAP, ERPs, bancos y
            planillas. Es una alternativa más accesible que las plataformas
            enterprise tradicionales, con soporte local y en español. Si quieres
            el detalle, escribimos sobre{" "}
            <Link href="/blog/porque-elegir-rocketbot" className="text-accent hover:underline">
              por qué elegir Rocketbot
            </Link>{" "}
            y sobre{" "}
            <Link href="/rpa" className="text-accent hover:underline">
              cómo automatizamos con RPA
            </Link>
            .
          </p>
        </section>

        {/* POR QUÉ ROBOTIPY */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Por qué elegir a Robotipy para implementar Rocketbot
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.t}
                className="rounded-2xl border border-white/[0.07] bg-secondary p-6"
              >
                <h3 className="mb-2 font-display text-[18px] font-bold text-white">
                  {r.t}
                </h3>
                <p className="text-[15px] leading-[1.6] text-white/75">{r.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUÉ PROCESOS */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Qué procesos automatizamos con Rocketbot
          </h2>
          <p className="max-w-3xl text-[17px] leading-[1.7] text-white/80">
            Conciliaciones bancarias,{" "}
            <Link
              href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa"
              className="text-accent hover:underline"
            >
              órdenes de compra en SAP
            </Link>
            , carga de facturas, reportes financieros, extracción de datos de
            documentos, y cualquier tarea repetitiva entre sistemas que hoy hace
            una persona a mano.
          </p>
        </section>

        {/* CÓMO EMPEZAMOS */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            Cómo empezamos
          </h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={i}
                className="rounded-2xl border border-white/[0.07] bg-secondary p-6"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-base font-extrabold text-white">
                  {i + 1}
                </div>
                <p className="text-[15px] leading-[1.6] text-white/80">{s}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <div className="mx-auto max-w-[760px] rounded-2xl border border-accent/30 bg-[#2D3648] px-8 py-10 text-center">
            <h2 className="mb-3 font-display text-[26px] font-extrabold leading-[1.15] tracking-tight md:text-[30px]">
              ¿Tienes un proceso para automatizar con Rocketbot?
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
                Ver nuestros casos de éxito
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

export default RocketbotPage;
