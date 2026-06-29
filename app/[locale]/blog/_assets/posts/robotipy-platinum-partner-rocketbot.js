import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/robotipy-platinum-partner-rocketbot/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Quién implementa Rocketbot en Chile?",
    a: "Robotipy implementa Rocketbot en Chile como Platinum Partner del fabricante, el tier más alto de certificación, con más de 60 proyectos en la región.",
  },
  {
    q: "¿Qué diferencia a un Platinum Partner de un partner oficial?",
    a: 'Platinum es el nivel más alto del programa de Rocketbot y exige un equipo de ingenieros y consultores certificados. Un partner "oficial" o "certificado" puede estar en un tier inferior.',
  },
  {
    q: "¿Robotipy implementa fuera de Chile?",
    a: "Sí, en Argentina, Colombia y España, además de Chile.",
  },
];

const ui = {
  callout:
    "rounded-xl border-l-4 border-accent bg-accent/10 p-5 my-7 text-white",
  calloutTitle: "text-xs uppercase tracking-widest font-bold mb-2 text-accent",
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "robotipy-platinum-partner-rocketbot";

export const post = {
  slug,
  locale: "es",
  title: "Robotipy es Platinum Partner de Rocketbot en Latinoamérica",
  description:
    "Robotipy alcanza el tier Platinum, la máxima certificación de Rocketbot, e implementa RPA en Chile, Argentina y LatAm con más de 60 proyectos.",
  keywords: [
    "rocketbot",
    "rpa chile",
    "rpa latam",
    "platinum partner rocketbot",
    "implementar rocketbot",
  ],
  tags: ["rocketbot", "rpa chile", "rpa latam"],
  categories: [categories.find((category) => category.slug === categorySlugs.rpa)],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-01-12",
  image: {
    src: thumbnail,
    urlRelative: "/blog/robotipy-platinum-partner-rocketbot/header.jpeg",
    alt: "Robotipy, Platinum Partner de Rocketbot en Latinoamérica",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes un proceso para automatizar con Rocketbot?",
    texto:
      "Lo evaluamos sin compromiso y te decimos si conviene automatizarlo con Rocketbot, por API o una mezcla de las dos.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Por qué somos Platinum Partner",
    linkUrl: "/rocketbot",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Robotipy es{" "}
          <strong className={styles.strong}>
            Platinum Partner de Rocketbot, el nivel más alto del programa de
            certificación del fabricante
          </strong>
          . Esto nos posiciona como uno de los{" "}
          <IntLink href="/rocketbot">implementadores de Rocketbot</IntLink> con
          mayor certificación en Chile y Latinoamérica, con más de 80 proyectos
          de automatización en producción en 8 países, incluyendo clientes en
          España. Y hay un detalle que pocos partners pueden igualar:{" "}
          <strong className={styles.strong}>
            Danilo Toro, fundador de Robotipy, fue desarrollador de Rocketbot
            durante 6 años.
          </strong>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué significa el tier Platinum</h2>
        <p className={styles.p}>
          El programa de partners de Rocketbot tiene varios niveles. Platinum es
          el más alto: exige un equipo de ingenieros y consultores certificados
          por el fabricante, e implica acceso directo a su soporte y a casos con
          clientes finales. En la práctica, significa que tu proyecto lo
          implementa un equipo validado por los propios creadores de la
          plataforma.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Conocemos Rocketbot desde adentro</h2>
        <p className={styles.p}>
          Antes de fundar Robotipy, Danilo Toro pasó 6 años desarrollando
          Rocketbot. Esa experiencia directa con la plataforma es lo que nos
          permite resolver casos que otros equipos no pueden: entendemos cómo
          está construida por dentro, dónde están sus límites y cómo sacarle el
          máximo. Sumado al tier Platinum, es una combinación difícil de igualar
          en la región. Lo contamos en detalle en{" "}
          <IntLink href="/blog/porque-elegir-rocketbot">
            por qué elegir Rocketbot
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Por qué importa para tu empresa</h2>
        <p className={styles.p}>
          No todos los partners de Rocketbot son iguales. Elegir un Platinum
          Partner reduce el riesgo del proyecto: más experiencia comprobable,
          mejores prácticas validadas y soporte de primer nivel. Es la
          diferencia entre un piloto que queda a medias y una automatización que
          escala y se mantiene en el tiempo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué hacemos con Rocketbot</h2>
        <p className={styles.p}>
          Implementamos Rocketbot de punta a punta: analizamos el proceso,
          calculamos el ROI, construimos los robots, los ponemos en producción y
          los monitoreamos. Tenemos casos reales en minería, banca, agro,
          siderurgia y logística, automatizando desde{" "}
          <IntLink href="/blog/caso-exito-conciliacion-bancaria-agropecuario">
            conciliaciones bancarias
          </IntLink>{" "}
          hasta{" "}
          <IntLink href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa">
            órdenes de compra en SAP
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Empieza hoy</h2>
        <p className={styles.p}>
          Si tienes un proceso repetitivo que hoy se hace a mano, lo evaluamos
          sin compromiso y te decimos si conviene automatizarlo con Rocketbot.{" "}
          <IntLink href="/contact-us">Habla con nosotros</IntLink> o{" "}
          <IntLink href="/success-cases">mira nuestros casos de éxito</IntLink>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={styles.h2}>Preguntas frecuentes</h2>
        <div className="my-2">
          {faqs.map((f, i) => (
            <details key={i} className={ui.faqItem} open={i === 0}>
              <summary className={ui.faqQ}>
                <span>{f.q}</span>
                <span className="text-accent text-2xl font-light flex-shrink-0">
                  +
                </span>
              </summary>
              <div className={ui.faqA}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  ),
};
