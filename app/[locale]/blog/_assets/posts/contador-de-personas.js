import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/contador-de-personas/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Qué precisión tiene un contador de personas con cámara?",
    a: "Depende del lugar. En una puerta con una cámara cenital la precisión es alta. En un espacio abierto con mucha gente, las personas se tapan entre sí y la precisión baja. Lo recomendable es comparar una franja corta con un conteo manual antes de confiar en los datos.",
  },
  {
    q: "¿Puedo saber la tasa de conversión de mi tienda?",
    a: "Sí, si cruzas las entradas por hora con las boletas o ventas de la misma hora. El contador entrega el denominador, y tu sistema de ventas, el numerador.",
  },
  {
    q: "¿Necesito un sensor en cada puerta?",
    a: "Si quieres un conteo permanente en cada acceso, un sensor o una cámara dedicada por puerta es lo más preciso. Si lo que necesitas es un estudio, como comparar dos semanas o dimensionar el personal, analizar el video de las cámaras existentes suele bastar.",
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

const opciones = [
  ["Sensor infrarrojo de haz", "Cuenta cada vez que alguien corta un haz en la puerta", "Barato y simple", "Cuenta mal a grupos y no siempre distingue si entran o salen"],
  ["Sensor térmico", "Detecta el calor de las personas desde el techo", "No graba imágenes", "Solo cuenta en el área que cubre"],
  ["Cámara 3D cenital", "Dos lentes miden profundidad sobre la puerta", "Muy precisa en accesos", "Un equipo por acceso y costo más alto"],
  ["Análisis de cámaras existentes", "Software sobre el video que ya grabas", "Cubre zonas, filas y recorridos, no solo puertas", "Depende de que la cámara vea bien la escena"],
];

const slug = "contador-de-personas";

export const post = {
  slug,
  locale: "es",
  title: "Contador de personas para tiendas y oficinas de atención: opciones, precisión y costos",
  description:
    "Cómo contar personas en una tienda o una oficina de atención: sensores, cámaras 3D o análisis del video existente. Qué medir, qué precisión esperar y cuándo conviene cada opción.",
  keywords: [
    "contador de personas",
    "contador de personas para tienda",
    "contador de personas automático",
    "conteo de personas con cámaras",
    "tiempo de espera en filas",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-12-01",
  image: {
    src: thumbnail,
    urlRelative: "/blog/contador-de-personas/header.jpeg",
    alt: "Fila en un terminal con cada persona detectada y seguida por YOAO",
  },
  faq: faqs,
  cta: {
    titulo: "Mide tu flujo de personas con el video que ya tienes",
    texto:
      "Cuéntanos qué quieres saber: entradas por hora, ocupación o tiempo de espera. Revisamos una muestra de tus cámaras y te decimos qué se puede medir.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-contador-personas&additionalInfo=Me+interesa+contar+personas+con+mis+c%C3%A1maras.",
    linkLabel: "Visión artificial para empresas e instituciones",
    linkUrl: "/vision-artificial",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Saber cuántas personas entran a una tienda, cuántas hay dentro a cada
          hora o cuánto esperan en una fila cambia decisiones concretas: cuántas
          cajas abrir, cuándo reforzar el turno o si una campaña trajo más
          gente. Un contador de personas entrega ese dato, pero hay varias
          formas de obtenerlo y no todas sirven para lo mismo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Opciones para contar personas</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr>
                <th className={ui.th}>Opción</th>
                <th className={ui.th}>Cómo funciona</th>
                <th className={ui.th}>A favor</th>
                <th className={ui.th}>En contra</th>
              </tr>
            </thead>
            <tbody>
              {opciones.map(([o, como, favor, contra]) => (
                <tr key={o}>
                  <td className={`${ui.td} font-semibold text-white`}>{o}</td>
                  <td className={ui.td}>{como}</td>
                  <td className={ui.td}>{favor}</td>
                  <td className={ui.td}>{contra}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué conviene medir</h2>
        <ul className={styles.ul}>
          <li className={styles.li}><strong className={styles.strong}>Entradas por hora:</strong> para ver los peaks y comparar días, semanas o locales.</li>
          <li className={styles.li}><strong className={styles.strong}>Ocupación:</strong> cuántas personas hay dentro en cada momento, útil para aforos y para dimensionar personal.</li>
          <li className={styles.li}><strong className={styles.strong}>Permanencia:</strong> cuánto tiempo pasa la gente en una zona.</li>
          <li className={styles.li}><strong className={styles.strong}>Filas:</strong> cuánto espera cada persona, cuánto dura la atención y cuántos abandonan.</li>
          <li className={styles.li}><strong className={styles.strong}>Conversión:</strong> entradas cruzadas con ventas de la misma hora.</li>
        </ul>
        <p className={styles.p}>
          Los sensores de puerta resuelven bien las dos primeras. Para
          permanencia y filas hace falta ver la escena, y ahí el análisis de
          video tiene ventaja.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El caso de las oficinas de atención</h2>
        <p className={styles.p}>
          En una oficina de atención, como una sucursal bancaria, un servicio
          público o un mesón de un municipio, la pregunta suele ser cuánto
          espera la gente y cuánto dura cada atención. Con una cámara que vea la
          zona de espera y los mesones, el video entrega el tiempo de espera
          por persona, el tiempo de atención por mesón y los abandonos, sin
          pedirle a nadie que anote horas en una planilla.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Costos</h2>
        <p className={styles.p}>
          Los sensores y las cámaras 3D se pagan por acceso: equipo,
          instalación y muchas veces una licencia mensual. Tienen sentido para
          un conteo permanente en pocas puertas.
        </p>
        <p className={styles.p}>
          Si lo que necesitas es un estudio, como medir dos semanas antes y
          después de un cambio, analizar el video de las cámaras existentes con
          YOAO cuesta USD 7 por hora de video y no requiere instalar nada. Con
          esos datos sabrás si vale la pena un conteo permanente y dónde.
        </p>
        <p className={styles.p}>
          Si estás pensando en cámaras nuevas, antes lee{" "}
          <IntLink href="/blog/camaras-con-inteligencia-artificial">cámaras con IA: ¿comprar nuevas o agregar IA a las que ya tienes?</IntLink>.
          Para recintos con riesgos laborales, en{" "}
          <PostLink slug="deteccion-de-epp-con-ia">detección de EPP con IA</PostLink>{" "}
          explicamos qué se puede auditar con video.
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
