import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/deteccion-de-epp-con-ia/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Qué elementos de protección se pueden detectar con video?",
    a: "Con buena precisión, el casco y el chaleco reflectante, porque son grandes y de colores visibles. Lentes, guantes o protectores auditivos son pequeños y a distancia cuesta verlos, así que su detección depende mucho de la cámara y de la distancia.",
  },
  {
    q: "¿Se puede avisar en el momento cuando alguien entra sin casco?",
    a: "Sí, como proyecto a medida que se cotiza aparte, porque implica procesar el video en vivo. Para auditar el cumplimiento y tener evidencia, YOAO trabaja sobre video grabado y entrega el cumplimiento por hora con el clip de cada caso.",
  },
  {
    q: "¿Hay que avisar a los trabajadores?",
    a: "Conviene hacerlo. El objetivo es medir el cumplimiento, no identificar personas, y explicarlo desde el inicio evita resistencias. Recomendamos dejarlo establecido en el reglamento interno y trabajar con métricas agregadas.",
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

const deteccion = [
  ["Casco", "Alta", "Grande y de color visible desde varios metros"],
  ["Chaleco reflectante", "Alta", "Contrasta con la ropa de trabajo"],
  ["Ingreso a zonas restringidas", "Alta", "Se marca la zona sobre la imagen"],
  ["Personas cerca de vehículos o máquinas", "Media a alta", "Depende del ángulo y de que no haya obstáculos"],
  ["Caídas", "Media", "Funciona mejor con la persona completa a la vista"],
  ["Lentes, guantes, protección auditiva", "Baja a distancia", "Son pequeños; hace falta una cámara cercana"],
];

const slug = "deteccion-de-epp-con-ia";

export const post = {
  slug,
  locale: "es",
  title: "Detección de EPP con IA en faenas: qué se puede medir con las cámaras actuales",
  description:
    "Qué elementos de protección personal se pueden detectar con inteligencia artificial y las cámaras que ya tienes, la diferencia entre auditar y alertar, y cómo partir con un piloto.",
  keywords: [
    "detección de epp con ia",
    "detección de casco con cámaras",
    "control de epp con inteligencia artificial",
    "seguridad laboral con visión artificial",
    "cumplimiento de epp",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-12-08",
  image: {
    src: thumbnail,
    urlRelative: "/blog/deteccion-de-epp-con-ia/header.jpeg",
    alt: "Obra en construcción: YOAO marca qué trabajadores llevan casco y cuáles no",
  },
  faq: faqs,
  cta: {
    titulo: "Mide el cumplimiento de EPP con tu video",
    texto:
      "Envíanos una muestra de las cámaras de tu faena o planta. Te mostramos el cumplimiento de casco por hora y los casos que lo bajan.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-epp&additionalInfo=Me+interesa+medir+el+uso+de+EPP+con+video.",
    linkLabel: "Visión artificial para empresas e instituciones",
    linkUrl: "/vision-artificial",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En Chile, el DS 594 obliga a la empresa a entregar los elementos de
          protección personal sin costo para el trabajador, y a cuidar que se
          usen. En la práctica, ese control depende de supervisores que
          recorren la faena y anotan lo que ven. Es un muestreo pequeño y deja
          poca evidencia.
        </p>
        <p className={styles.p}>
          Las faenas, plantas y bodegas ya tienen cámaras. La detección de EPP
          con inteligencia artificial usa ese video para medir el cumplimiento
          todo el turno, no solo durante la ronda.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué se puede detectar</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr>
                <th className={ui.th}>Qué</th>
                <th className={ui.th}>Precisión esperable</th>
                <th className={ui.th}>Por qué</th>
              </tr>
            </thead>
            <tbody>
              {deteccion.map(([q, p, por]) => (
                <tr key={q}>
                  <td className={`${ui.td} font-semibold text-white`}>{q}</td>
                  <td className={ui.td}>{p}</td>
                  <td className={ui.td}>{por}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figure className="my-6">
          <video
            src="/vision/videos/seguridad.mp4"
            poster="/vision/videos/seguridad.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-label="Obra en construcción: YOAO marca qué trabajadores llevan casco y cuáles no"
            className="block aspect-video w-full rounded-xl bg-black object-cover"
          />
          <figcaption className="mt-2 text-sm text-white/60">
            Obra analizada con YOAO: en verde quien lleva casco y en rojo quien
            no.
          </figcaption>
        </figure>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Auditar o alertar</h2>
        <p className={styles.p}>
          Son dos usos distintos y conviene separarlos desde el principio.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong className={styles.strong}>Auditar:</strong> analizar el
            video grabado de un turno o una semana y obtener el cumplimiento
            por hora y por zona, con el clip de cada caso como evidencia. Sirve
            para saber dónde y cuándo está el problema, y para medir si una
            campaña funcionó.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Alertar:</strong> procesar el
            video en vivo y avisar al supervisor cuando alguien entra sin casco
            a una zona crítica. Sirve para prevenir en el momento, pero exige
            más infraestructura.
          </li>
        </ul>
        <p className={styles.p}>
          Recomendamos partir auditando. Con una semana de datos sabes en qué
          zonas y horarios se concentran los incumplimientos, y la alerta en
          vivo, si hace falta, se instala justo ahí.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo partir</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>Elige dos o tres cámaras que vean a los trabajadores de cuerpo completo en zonas de riesgo.</li>
          <li className={styles.li}>Exporta el video de unos días de operación normal.</li>
          <li className={styles.li}>Analízalo con YOAO y revisa el cumplimiento por hora y los clips de cada caso.</li>
          <li className={styles.li}>Usa ese resultado como línea base y vuelve a medir después de cada acción.</li>
        </ol>
        <p className={styles.p}>
          El análisis cuesta USD 7 por hora de video. Las alertas en vivo se
          cotizan aparte como proyecto a medida.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Privacidad</h2>
        <p className={styles.p}>
          Para saber si alguien lleva casco no hace falta saber quién es. Se
          puede trabajar sin reconocimiento facial y con métricas agregadas
          por zona y turno. Igual conviene definir qué video se guarda, por
          cuánto tiempo y quién accede, considerando la Ley 21.719 de
          protección de datos personales.
        </p>
        <p className={styles.p}>
          Para otros usos del video en tu operación, revisa{" "}
          <IntLink href="/blog/contador-de-personas">contador de personas para tiendas y oficinas</IntLink>{" "}
          o la página de{" "}
          <IntLink href="/es/vision-artificial">visión artificial</IntLink>.
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
