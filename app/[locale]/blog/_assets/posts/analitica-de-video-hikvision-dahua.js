import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/analitica-de-video-hikvision-dahua/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Tengo que cambiar mis cámaras Hikvision o Dahua para hacer analítica?",
    a: "No. Si la cámara ve bien lo que quieres medir, su video sirve tal como está. La analítica que trae la cámara sigue funcionando para alarmas, y el análisis del video grabado se suma para los estudios y reportes que la cámara no entrega.",
  },
  {
    q: "¿Funciona con cámaras antiguas que no traen analítica?",
    a: "Sí, siempre que la imagen tenga buena resolución, una ubicación que vea toda la escena y luz suficiente. El análisis se hace sobre el video, así que la marca y la edad de la cámara importan menos que el encuadre.",
  },
  {
    q: "¿Se conecta directo a mi grabador o a mi VMS?",
    a: "Para estudios y mediciones se trabaja con el video exportado desde el grabador o el VMS, que es lo más simple. Conectarse en vivo a las cámaras para recibir alertas es posible como proyecto a medida, que se cotiza aparte.",
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

const comparacion = [
  ["Para qué está pensada", "Alarmas en el momento: alguien cruzó una línea o entró a una zona", "Datos para un informe: cuántos, de qué tipo, por dónde y a qué hora"],
  ["Clasificación", "Persona o vehículo, en algunos modelos algo más", "Livianos, buses, camiones, motos, bicicletas y personas"],
  ["Origen y destino", "En general no", "Sí, por movimiento entre zonas"],
  ["Varias cámaras", "Cada cámara con sus reglas", "Un reporte consolidado de varias cámaras u horas"],
  ["Video histórico", "Solo lo que se configuró antes de grabar", "Se puede analizar video ya grabado"],
  ["Cámaras de otras marcas", "Depende de la integración", "Cualquier video con buena imagen"],
];

const slug = "analitica-de-video-hikvision-dahua";

export const post = {
  slug,
  locale: "es",
  title: "Analítica de video en cámaras Hikvision y Dahua: qué trae la cámara y qué no",
  description:
    "Qué analítica traen las cámaras Hikvision y Dahua, para qué sirve bien y dónde se queda corta para estudios de tránsito, filas o personas, y cómo complementarla analizando el video grabado.",
  keywords: [
    "analítica de video hikvision",
    "analítica de video dahua",
    "conteo de vehículos hikvision",
    "conteo de personas dahua",
    "cámaras con inteligencia artificial",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-10",
  image: {
    src: thumbnail,
    urlRelative: "/blog/analitica-de-video-hikvision-dahua/header.jpeg",
    alt: "Intersección vista con dron con cada vehículo detectado y numerado por YOAO",
  },
  faq: faqs,
  cta: {
    titulo: "Saca más de las cámaras que ya tienes",
    texto:
      "Envíanos una muestra de video de tus cámaras Hikvision, Dahua o de cualquier marca, y te decimos qué se puede medir con ellas.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-hikvision-dahua&additionalInfo=Tengo+c%C3%A1maras+Hikvision+o+Dahua+y+me+interesa+la+anal%C3%ADtica+de+video.",
    linkLabel: "Visión artificial para empresas e instituciones",
    linkUrl: "/vision-artificial",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Hikvision y Dahua son las marcas de cámaras más comunes en empresas,
          condominios y municipios de la región. Las dos venden líneas con
          analítica integrada: en Hikvision se llaman AcuSense y DeepinView, y
          en Dahua, WizSense y WizMind. Por eso muchas personas que buscan
          "analítica de video" ya tienen algo de eso instalado sin saberlo.
        </p>
        <p className={styles.p}>
          La pregunta útil no es si la cámara trae analítica, sino si esa
          analítica responde lo que necesitas saber. Para alarmas, muchas veces
          sí. Para un estudio o un reporte de gestión, casi nunca alcanza.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué trae la cámara</h2>
        <p className={styles.p}>
          Depende del modelo y del firmware, así que revisa la ficha técnica de
          tus equipos. Las funciones más comunes son:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Cruce de línea e intrusión en una zona, con aviso en el momento.</li>
          <li className={styles.li}>Filtro de personas y vehículos, para que una rama o un perro no disparen la alarma.</li>
          <li className={styles.li}>Conteo de personas en una puerta, en modelos específicos.</li>
          <li className={styles.li}>Lectura de patentes, en cámaras dedicadas a eso.</li>
        </ul>
        <p className={styles.p}>
          Todo eso funciona bien para lo que fue diseñado: vigilar un perímetro
          y avisar cuando pasa algo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Dónde se queda corta</h2>
        <p className={styles.p}>
          Los problemas aparecen cuando lo que se necesita es un dato y no una
          alarma. Un estudio de tránsito pide separar autos, buses, camiones y
          motos, saber qué giros hace cada uno y tener los datos en bloques de
          15 minutos de varias horas. Una gerencia de operaciones quiere saber
          cuánto espera la gente en una fila cada día, no recibir un aviso cada
          vez que alguien entra.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr>
                <th className={ui.th}></th>
                <th className={ui.th}>Analítica en la cámara</th>
                <th className={ui.th}>Análisis del video grabado</th>
              </tr>
            </thead>
            <tbody>
              {comparacion.map(([k, cam, video]) => (
                <tr key={k}>
                  <td className={`${ui.td} font-semibold text-white`}>{k}</td>
                  <td className={ui.td}>{cam}</td>
                  <td className={ui.td}>{video}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo complementarla</h2>
        <p className={styles.p}>
          No hace falta reemplazar nada. El video se exporta desde el grabador
          o desde el software de gestión (iVMS-4200 en Hikvision, SmartPSS o
          DSS en Dahua) y se analiza aparte. Con YOAO, marcas las zonas sobre
          la imagen y recibes conteos, tiempos y movimientos listos para un
          informe, a USD 7 por hora de video.
        </p>
        <p className={styles.p}>
          La analítica de la cámara sigue a cargo de las alarmas y el análisis
          del video entrega los números. Cada uno hace lo que mejor sabe hacer.
        </p>
        <p className={styles.p}>
          Si estás evaluando comprar cámaras nuevas con IA, antes lee{" "}
          <PostLink slug="camaras-con-inteligencia-artificial">cámaras con IA: ¿comprar nuevas o agregar IA a las que ya tienes?</PostLink>.
          Y si tu caso es de tránsito, en{" "}
          <IntLink href="/blog/como-hacer-un-aforo-vehicular">cómo hacer un aforo vehicular</IntLink>{" "}
          está el formato que pide un estudio.
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
