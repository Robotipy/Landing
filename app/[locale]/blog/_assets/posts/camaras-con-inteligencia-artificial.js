import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/camaras-con-inteligencia-artificial/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuánto cuesta una cámara con inteligencia artificial?",
    a: "Varía mucho según la marca, la resolución y las funciones de analítica, y suele costar bastante más que una cámara equivalente sin analítica. Más que el precio por cámara, conviene calcular el costo total: equipos, instalación, licencias y el tiempo de quien va a revisar los resultados.",
  },
  {
    q: "¿La IA reemplaza a quien mira las cámaras?",
    a: "No del todo. Reduce el tiempo que alguien pasa mirando pantallas, porque la persona revisa alertas o reportes en lugar de horas de video. Pero las decisiones, como enviar a alguien o cambiar un turno, siguen siendo de una persona.",
  },
  {
    q: "¿Qué pasa con la privacidad?",
    a: "Para contar personas o vehículos, medir filas o verificar el uso de casco no hace falta identificar a nadie, así que se puede trabajar sin reconocimiento facial y con datos agregados. Igual conviene definir qué se graba, cuánto tiempo se guarda y quién accede.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
  th: "text-left text-white font-semibold py-3 pr-4 border-b border-white/20",
  td: "py-3 pr-4 align-top text-white/80 border-b border-white/10",
};

const caminos = [
  ["Cámaras nuevas con IA integrada", "La cámara analiza la imagen y avisa", "Alarmas en el momento en pocos puntos nuevos", "Hay que reemplazar equipos y las funciones vienen fijas"],
  ["Grabador o servidor con IA", "Un equipo analiza las cámaras que ya tienes", "Alertas sobre muchas cámaras existentes", "Inversión en hardware y en configuración inicial"],
  ["Análisis del video grabado", "Subes el video y recibes datos", "Estudios, mediciones y reportes de gestión", "No da alertas en el momento"],
];

const slug = "camaras-con-inteligencia-artificial";

export const post = {
  slug,
  locale: "es",
  title: "Cámaras con IA: ¿comprar nuevas o agregar inteligencia artificial a las que ya tienes?",
  description:
    "Tres formas de sumar inteligencia artificial a la videovigilancia de una empresa: cámaras nuevas con IA, un grabador con IA o analizar el video grabado. Cuándo conviene cada una y cómo decidir.",
  keywords: [
    "cámaras con inteligencia artificial",
    "cámaras con ia para negocios",
    "cámaras con inteligencia artificial precio",
    "inteligencia artificial para cámaras de seguridad",
    "cámaras ip con inteligencia artificial",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-17",
  image: {
    src: thumbnail,
    urlRelative: "/blog/camaras-con-inteligencia-artificial/header.jpeg",
    alt: "Supermercado con clientes detectados y seguidos por YOAO",
  },
  faq: faqs,
  cta: {
    titulo: "Antes de comprar, prueba con tu video",
    texto:
      "Envíanos una muestra de lo que graban tus cámaras y lo que quieres saber. Te decimos si se resuelve con el video que ya tienes o si de verdad hace falta comprar equipos.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-camaras-ia&additionalInfo=Estoy+evaluando+c%C3%A1maras+con+inteligencia+artificial.",
    linkLabel: "Calculadora de costo de visión artificial",
    linkUrl: "/calculadora-vision-artificial",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          "Cámaras con IA" es una de las búsquedas que más crece entre
          empresas que ya tienen videovigilancia. La idea es atractiva: que la
          cámara avise sola, cuente sola y deje de depender de alguien mirando
          pantallas. La pregunta que casi nadie se hace antes de pedir
          cotizaciones es si hace falta comprar cámaras nuevas.
        </p>
        <p className={styles.p}>
          Muchas veces no. Hay tres formas de sumar inteligencia artificial a lo
          que ya tienes, y cada una sirve para algo distinto.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Tres caminos</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr>
                <th className={ui.th}>Camino</th>
                <th className={ui.th}>Cómo funciona</th>
                <th className={ui.th}>Sirve para</th>
                <th className={ui.th}>Hay que considerar</th>
              </tr>
            </thead>
            <tbody>
              {caminos.map(([c, como, sirve, ojo]) => (
                <tr key={c}>
                  <td className={`${ui.td} font-semibold text-white`}>{c}</td>
                  <td className={ui.td}>{como}</td>
                  <td className={ui.td}>{sirve}</td>
                  <td className={ui.td}>{ojo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuatro preguntas para decidir</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>¿Necesitas reaccionar en el momento o tener datos?</strong>{" "}
            Una intrusión de noche exige una alerta. Saber cuántas personas
            entran por hora o cuánto esperan en caja se resuelve con un reporte.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>¿La cámara actual ve lo que quieres medir?</strong>{" "}
            Si el encuadre y la luz son buenos, su video sirve. Si no, el
            problema es la ubicación, y una cámara nueva en el mismo lugar no lo
            arregla.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>¿Cuántos puntos y por cuánto tiempo?</strong>{" "}
            Un estudio de una semana en tres puntos no justifica comprar
            equipos. Un control permanente en cincuenta puntos, quizás sí.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>¿Quién va a usar el resultado?</strong>{" "}
            Una alerta que nadie atiende o un reporte que nadie abre no sirve,
            tenga la IA que tenga.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El error más común</h2>
        <p className={styles.p}>
          Comprar cámaras con IA para responder una pregunta puntual. Una
          empresa quiere saber cuánta gente entra a su local en distintos
          horarios, cotiza cámaras nuevas con conteo integrado y termina con
          una inversión grande para un dato que podía sacar del video que ya
          grababa.
        </p>
        <p className={styles.p}>
          Si la pregunta es de medición, empieza por analizar una muestra del
          video existente. Con YOAO cuesta USD 7 por hora de video, sin
          comprar nada. Si después de eso necesitas alertas permanentes, ya
          sabrás exactamente qué detectar y dónde, y la compra de equipos o el
          proyecto a medida van a estar mucho mejor definidos.
        </p>
        <p className={styles.p}>
          Si tus cámaras son Hikvision o Dahua, en{" "}
          <IntLink href="/blog/analitica-de-video-hikvision-dahua">qué trae su analítica y qué no</IntLink>{" "}
          explicamos qué ya tienes. Para los casos de personas, mira{" "}
          <PostLink slug="contador-de-personas">contador de personas para tiendas y oficinas</PostLink>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className={styles.h2}>Preguntas frecuentes</h2>
        <div className="my-2">
          {faqs.map((f, i) => (
            <details key={i} className={ui.faqItem} open={i === 0}>
              <summary className={ui.faqQ}>
                <span>{f.q}</span>
                <span className="text-accent text-2xl font-light flex-shrink-0">+</span>
              </summary>
              <div className={ui.faqA}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  ),
};
