import { Suspense } from "react";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonMain from "@/components/ButtonMain";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;

// Copy por idioma. El español mantiene la intención local (Chile/Argentina);
// inglés y portugués van en tono neutro, solo indicando los países donde se
// hicieron proyectos. En en/pt no enlazamos posts del blog (solo existen en es).
const COPY = {
  es: {
    meta: {
      title:
        "Implementación de Rocketbot en Chile y LatAm | Robotipy, Platinum Partner",
      description:
        "¿Buscas quién implementa Rocketbot en Chile o Argentina? Robotipy es Platinum Partner de Rocketbot, el tier más alto, con +80 proyectos en LatAm y España.",
    },
    home: "Inicio",
    eyebrow: "Platinum Partner de Rocketbot",
    h1: "Robotipy: Platinum Partner de Rocketbot en Chile y Latinoamérica",
    bluf: (
      <>
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
        desarrollo de los robots, puesta en producción y soporte) para empresas
        en Chile, Argentina, Colombia y España.
      </>
    ),
    whatTitle: "¿Qué es Rocketbot?",
    whatBody: (
      <>
        Rocketbot es una plataforma de automatización robótica de procesos (RPA)
        de origen chileno, construida sobre Python, pensada para automatizar
        tareas repetitivas en sistemas como SAP, ERPs, bancos y planillas. Es una
        alternativa más accesible que las plataformas enterprise tradicionales,
        con soporte local y en español. Si quieres el detalle, escribimos sobre{" "}
        <Link href="/blog/porque-elegir-rocketbot" className="text-accent hover:underline">
          por qué elegir Rocketbot
        </Link>{" "}
        y sobre{" "}
        <Link href="/rpa" className="text-accent hover:underline">
          cómo automatizamos con RPA
        </Link>
        .
      </>
    ),
    reasonsTitle: "Por qué elegir a Robotipy para implementar Rocketbot",
    reasons: [
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
    ],
    processesTitle: "Qué procesos automatizamos con Rocketbot",
    processesBody: (
      <>
        Conciliaciones bancarias,{" "}
        <Link
          href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa"
          className="text-accent hover:underline"
        >
          órdenes de compra en SAP
        </Link>
        , carga de facturas, reportes financieros, extracción de datos de
        documentos, y cualquier tarea repetitiva entre sistemas que hoy hace una
        persona a mano.
      </>
    ),
    stepsTitle: "Cómo empezamos",
    steps: [
      "Nos cuentas el proceso que quieres automatizar.",
      "Lo evaluamos y te decimos si conviene Rocketbot, una integración por API o una mezcla, con una estimación de ROI.",
      "Construimos, ponemos en producción y damos soporte.",
    ],
    ctaTitle: "¿Tienes un proceso para automatizar con Rocketbot?",
    ctaText:
      "Lo evaluamos sin compromiso y te entregamos una estimación de ROI antes de empezar.",
    ctaBtn: "Evaluar mi proceso",
    ctaLink: "Ver nuestros casos de éxito",
    faqTitle: "Preguntas frecuentes",
    faqs: [
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
    ],
  },

  en: {
    meta: {
      title: "Rocketbot Implementation | Robotipy, Platinum Partner",
      description:
        "Robotipy is a Rocketbot Platinum Partner, the highest certification tier, with 80+ automation projects delivered in Chile, Argentina, Colombia and Spain.",
    },
    home: "Home",
    eyebrow: "Rocketbot Platinum Partner",
    h1: "Robotipy: Rocketbot Platinum Partner",
    bluf: (
      <>
        Robotipy is a{" "}
        <strong className="text-white">
          Rocketbot Platinum Partner, the highest tier of the certification
          program
        </strong>
        , with more than 80 automation projects. We know the platform from the
        inside:{" "}
        <strong className="text-white">
          Danilo Toro, founder of Robotipy, spent 6 years as a Rocketbot
          developer.
        </strong>{" "}
        We implement Rocketbot end to end (process analysis, building the robots,
        go-live and support). We have delivered projects in Chile, Argentina,
        Colombia and Spain.
      </>
    ),
    whatTitle: "What is Rocketbot?",
    whatBody: (
      <>
        Rocketbot is a robotic process automation (RPA) platform, built on
        Python, designed to automate repetitive tasks across systems like SAP,
        ERPs, banks and spreadsheets. It is a more accessible alternative to
        traditional enterprise platforms. See more about{" "}
        <Link href="/rpa" className="text-accent hover:underline">
          how we automate with RPA
        </Link>
        .
      </>
    ),
    reasonsTitle: "Why choose Robotipy to implement Rocketbot",
    reasons: [
      {
        t: "We know Rocketbot from the inside",
        d: "Danilo Toro, founder of Robotipy, spent 6 years as a Rocketbot developer. Few teams understand the platform at that level.",
      },
      {
        t: "Platinum Partner (the highest level)",
        d: "Not all partners are equal: the Platinum tier requires a team of engineers and consultants certified by Rocketbot. It is the highest certification the vendor grants.",
      },
      {
        t: "Proven experience",
        d: "More than 80 projects in production, with real cases in mining, banking, agriculture, steel, logistics and retail, in Chile, Argentina, Colombia and Spain.",
      },
      {
        t: "End to end",
        d: "We do not just build robots: we analyze the process, calculate the ROI, take it live and monitor it with our Monitor tool.",
      },
      {
        t: "Hands-on support",
        d: "In your time zone, no middlemen.",
      },
    ],
    processesTitle: "What we automate with Rocketbot",
    processesBody: (
      <>
        Bank reconciliations, SAP purchase orders, invoice loading, financial
        reports, data extraction from documents, and any repetitive task between
        systems that a person does by hand today.
      </>
    ),
    stepsTitle: "How we start",
    steps: [
      "You tell us the process you want to automate.",
      "We assess it and tell you whether Rocketbot, an API integration or a mix fits best, with an ROI estimate.",
      "We build, take it live and provide support.",
    ],
    ctaTitle: "Have a process to automate with Rocketbot?",
    ctaText:
      "We assess it at no commitment and give you an ROI estimate before starting.",
    ctaBtn: "Evaluate my process",
    ctaLink: "See our success stories",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Who implements Rocketbot?",
        a: "Robotipy implements Rocketbot as a Platinum Partner, the highest certification tier. It has more than 80 automation projects.",
      },
      {
        q: "What does it mean to be a Rocketbot Platinum Partner?",
        a: "It is the highest level of Rocketbot's partner program. It requires a team of certified engineers and consultants, and includes direct access to the vendor's support and client cases.",
      },
      {
        q: "Why does Robotipy know Rocketbot so well?",
        a: "Because its founder, Danilo Toro, spent 6 years as a Rocketbot developer. That inside knowledge of the platform, together with the Platinum tier, lets Robotipy implement Rocketbot at a level that is hard to match.",
      },
      {
        q: "Can Rocketbot automate SAP?",
        a: "Yes. Rocketbot can operate on SAP to automate tasks such as purchase orders, reconciliations and data entry, just like a person would, but without manual intervention.",
      },
      {
        q: "In which countries has Robotipy delivered projects?",
        a: "Robotipy has delivered Rocketbot projects in Chile, Argentina, Colombia and Spain, with more than 80 projects.",
      },
      {
        q: "How much does it cost to implement Rocketbot?",
        a: "It depends on the process and its complexity. Robotipy evaluates each case at no commitment and provides an ROI estimate before starting.",
      },
    ],
  },

  pt: {
    meta: {
      title: "Implementação de Rocketbot | Robotipy, Platinum Partner",
      description:
        "A Robotipy é Platinum Partner da Rocketbot, o nível mais alto de certificação, com mais de 80 projetos de automação no Chile, na Argentina, na Colômbia e na Espanha.",
    },
    home: "Início",
    eyebrow: "Platinum Partner da Rocketbot",
    h1: "Robotipy: Platinum Partner da Rocketbot",
    bluf: (
      <>
        A Robotipy é{" "}
        <strong className="text-white">
          Platinum Partner da Rocketbot, o nível mais alto do programa de
          certificação
        </strong>
        , com mais de 80 projetos de automação. Conhecemos a plataforma por
        dentro:{" "}
        <strong className="text-white">
          Danilo Toro, fundador da Robotipy, foi desenvolvedor da Rocketbot
          durante 6 anos.
        </strong>{" "}
        Implementamos a Rocketbot de ponta a ponta (análise do processo,
        desenvolvimento dos robôs, entrada em produção e suporte). Já entregamos
        projetos no Chile, na Argentina, na Colômbia e na Espanha.
      </>
    ),
    whatTitle: "O que é a Rocketbot?",
    whatBody: (
      <>
        A Rocketbot é uma plataforma de automação robótica de processos (RPA),
        construída sobre Python, pensada para automatizar tarefas repetitivas em
        sistemas como SAP, ERPs, bancos e planilhas. É uma alternativa mais
        acessível que as plataformas enterprise tradicionais. Veja mais sobre{" "}
        <Link href="/rpa" className="text-accent hover:underline">
          como automatizamos com RPA
        </Link>
        .
      </>
    ),
    reasonsTitle: "Por que escolher a Robotipy para implementar a Rocketbot",
    reasons: [
      {
        t: "Conhecemos a Rocketbot por dentro",
        d: "Danilo Toro, fundador da Robotipy, foi desenvolvedor da Rocketbot durante 6 anos. Poucas equipes entendem a plataforma nesse nível.",
      },
      {
        t: "Platinum Partner (o nível mais alto)",
        d: "Nem todos os parceiros são iguais: o nível Platinum exige uma equipe de engenheiros e consultores certificados pela Rocketbot. É a certificação máxima que o fabricante concede.",
      },
      {
        t: "Experiência comprovável",
        d: "Mais de 80 projetos em produção, com casos reais em mineração, bancos, agro, siderurgia, logística e varejo, no Chile, na Argentina, na Colômbia e na Espanha.",
      },
      {
        t: "De ponta a ponta",
        d: "Não apenas programamos robôs: analisamos o processo, calculamos o ROI, colocamos em produção e monitoramos com nossa ferramenta Monitor.",
      },
      {
        t: "Suporte próximo",
        d: "No seu fuso horário, sem intermediários.",
      },
    ],
    processesTitle: "O que automatizamos com a Rocketbot",
    processesBody: (
      <>
        Conciliações bancárias, ordens de compra no SAP, carga de notas fiscais,
        relatórios financeiros, extração de dados de documentos, e qualquer
        tarefa repetitiva entre sistemas que hoje uma pessoa faz manualmente.
      </>
    ),
    stepsTitle: "Como começamos",
    steps: [
      "Você nos conta o processo que quer automatizar.",
      "Avaliamos e dizemos se convém a Rocketbot, uma integração por API ou uma mistura, com uma estimativa de ROI.",
      "Construímos, colocamos em produção e damos suporte.",
    ],
    ctaTitle: "Tem um processo para automatizar com a Rocketbot?",
    ctaText:
      "Avaliamos sem compromisso e entregamos uma estimativa de ROI antes de começar.",
    ctaBtn: "Avaliar meu processo",
    ctaLink: "Ver nossos casos de sucesso",
    faqTitle: "Perguntas frequentes",
    faqs: [
      {
        q: "Quem implementa a Rocketbot?",
        a: "A Robotipy implementa a Rocketbot como Platinum Partner, o nível mais alto de certificação. Tem mais de 80 projetos de automação.",
      },
      {
        q: "O que significa ser Platinum Partner da Rocketbot?",
        a: "É o nível mais alto do programa de parceiros da Rocketbot. Exige uma equipe de engenheiros e consultores certificados e inclui acesso direto ao suporte do fabricante e a casos com clientes.",
      },
      {
        q: "Por que a Robotipy conhece tão bem a Rocketbot?",
        a: "Porque seu fundador, Danilo Toro, foi desenvolvedor da Rocketbot durante 6 anos. Esse conhecimento da plataforma por dentro, somado ao nível Platinum, faz a Robotipy implementar a Rocketbot em um nível difícil de igualar.",
      },
      {
        q: "A Rocketbot serve para automatizar o SAP?",
        a: "Sim. A Rocketbot pode operar sobre o SAP para automatizar tarefas como ordens de compra, conciliações e carga de dados, igual a uma pessoa, mas sem intervenção manual.",
      },
      {
        q: "Em quais países a Robotipy entregou projetos?",
        a: "A Robotipy entregou projetos de Rocketbot no Chile, na Argentina, na Colômbia e na Espanha, com mais de 80 projetos.",
      },
      {
        q: "Quanto custa implementar a Rocketbot?",
        a: "Depende do processo e da sua complexidade. A Robotipy avalia cada caso sem compromisso e entrega uma estimativa de ROI antes de começar.",
      },
    ],
  },
};

const getCopy = (locale) => COPY[locale] || COPY.es;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getCopy(locale);
  return getSEOTags({
    locale,
    title: t.meta.title,
    description: t.meta.description,
    canonicalUrlRelative: "/rocketbot",
  });
}

const buildJsonLd = (locale, t) => {
  const pageUrl = `${siteOrigin}/${locale}/rocketbot`;
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Robotipy",
    url: siteOrigin,
    description: t.meta.description,
    memberOf: {
      "@type": "Organization",
      name: "Rocketbot",
      description: "Platinum Partner",
    },
  };
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Rocketbot RPA implementation",
    serviceType: "Rocketbot RPA implementation",
    provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
    areaServed: ["Chile", "Argentina", "Colombia", "España"],
    description: t.meta.description,
    url: pageUrl,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.home, item: `${siteOrigin}/${locale}` },
      { "@type": "ListItem", position: 2, name: "Rocketbot", item: pageUrl },
    ],
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return [organization, service, breadcrumb, faq];
};

const RocketbotPage = async ({ params }) => {
  const { locale } = await params;
  const t = getCopy(locale);
  const jsonLdBlocks = buildJsonLd(locale, t);

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
              {t.home}
            </Link>
            <span className="px-2">/</span>
            <span className="text-white/80">Rocketbot</span>
          </nav>

          <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {t.eyebrow}
          </div>
          <h1 className="mb-6 font-display text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            {t.h1}
          </h1>
          <p className="max-w-3xl text-[18px] leading-[1.7] text-white/85">
            {t.bluf}
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ButtonMain link="/contact-us" text={t.ctaBtn} type="primary" rounded noblank />
            <Link
              href="/success-cases"
              className="text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
            >
              {t.ctaLink}
            </Link>
          </div>
        </section>

        {/* ¿QUÉ ES ROCKETBOT? */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            {t.whatTitle}
          </h2>
          <p className="max-w-3xl text-[17px] leading-[1.7] text-white/80">
            {t.whatBody}
          </p>
        </section>

        {/* POR QUÉ ROBOTIPY */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            {t.reasonsTitle}
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {t.reasons.map((r) => (
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
            {t.processesTitle}
          </h2>
          <p className="max-w-3xl text-[17px] leading-[1.7] text-white/80">
            {t.processesBody}
          </p>
        </section>

        {/* CÓMO EMPEZAMOS */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            {t.stepsTitle}
          </h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {t.steps.map((s, i) => (
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
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mb-7 max-w-[540px] text-[16px] leading-[1.6] text-white/80">
              {t.ctaText}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonMain link="/contact-us" text={t.ctaBtn} type="primary" rounded noblank />
              <Link
                href="/success-cases"
                className="text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
              >
                {t.ctaLink}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-6 py-10 pb-20">
          <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight lg:text-3xl">
            {t.faqTitle}
          </h2>
          <div className="mx-auto max-w-3xl">
            {t.faqs.map((f, i) => (
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
