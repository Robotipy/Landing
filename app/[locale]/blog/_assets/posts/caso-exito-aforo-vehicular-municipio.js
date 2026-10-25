import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/caso-exito-aforo-vehicular-municipio/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Por qué no se usaron solo las cámaras de seguridad del municipio?",
    a: "El municipio tiene más de cien cámaras, pero casi todas están ubicadas para seguridad: apuntan a una esquina o a un frente, no a todos los accesos de un cruce. Las que veían bien una intersección se usaron, y para la rotonda se grabó con dron.",
  },
  {
    q: "¿Qué pasó con los movimientos dudosos en la rotonda?",
    a: "Se adoptó un método mixto. YOAO cuenta el volumen y clasifica los vehículos, y una persona revisa solo los movimientos en los que el software no está seguro. Así se mantiene la precisión sin volver al conteo manual completo.",
  },
  {
    q: "¿El municipio tuvo que comprar equipos?",
    a: "No. Se trabajó con video de cámaras existentes y con tomas de dron. YOAO procesa el video grabado en la nube.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
  stat: "border-l-2 border-accent pl-4",
  statVal: "text-3xl font-bold text-white",
  statLabel: "text-white/70 text-sm mt-1",
};

const slug = "caso-exito-aforo-vehicular-municipio";

export const post = {
  slug,
  locale: "es",
  title: "Caso de éxito: aforo vehicular con dron y cámara fija en un municipio del Gran Buenos Aires",
  description:
    "Cómo un municipio del Gran Buenos Aires reemplazó meses de conteo manual por análisis de video con YOAO: diferencia cercana a 3% en cámara fija, lo que costó la rotonda y lo que aprendimos.",
  keywords: [
    "caso de éxito conteo vehicular",
    "aforo vehicular con dron",
    "conteo vehicular municipio",
    "análisis de video tránsito",
    "estudio de tránsito con video",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.casosDeExito),
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-03",
  image: {
    src: thumbnail,
    urlRelative: "/blog/caso-exito-aforo-vehicular-municipio/header.jpeg",
    alt: "Toma de dron de una rotonda con tráfico procesada con YOAO, con cada vehículo numerado",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tu municipio necesita aforos?",
    texto:
      "Cuéntanos qué intersecciones quieres medir. Revisamos el video que ya tienes o planificamos una toma con dron, y te mostramos el resultado sobre un punto antes de escalar.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-caso-municipio&additionalInfo=Me+interesa+un+piloto+de+aforos+con+video+para+un+municipio.",
    linkLabel: "Analítica de video para municipios",
    linkUrl: "/blog/analitica-de-video-para-municipios",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          El área de tránsito de un municipio del Gran Buenos Aires necesitaba
          datos de una rotonda principal y de varias intersecciones cercanas.
          La última vez que contaron esa rotonda a mano, el trabajo les tomó
          meses entre el conteo en terreno y la digitación de planillas.
        </p>
        <p className={styles.p}>
          Esta vez el pedido era más exigente. Además del volumen, querían
          saber de dónde venía y hacia dónde iba cada vehículo, separar las
          categorías y medir colas y ciclos de los semáforos.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className={ui.stat}>
          <p className={ui.statVal}>~3%</p>
          <p className={ui.statLabel}>diferencia con el conteo manual en cámara fija</p>
        </div>
        <div className={ui.stat}>
          <p className={ui.statVal}>402</p>
          <p className={ui.statLabel}>vehículos en 15 minutos en la punta de una intersección</p>
        </div>
        <div className={ui.stat}>
          <p className={ui.statVal}>0</p>
          <p className={ui.statLabel}>cámaras nuevas instaladas</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El desafío</h2>
        <p className={styles.p}>
          El municipio tiene más de cien cámaras, casi todas de seguridad. Están
          ubicadas para ver una esquina o un frente, no para abarcar los
          accesos de un cruce, así que no bastaba con conectarlas a un software.
          A eso se sumaba la rotonda: muchos accesos, giros en todas las
          direcciones y árboles que tapan parte de la calzada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La solución</h2>
        <p className={styles.p}>
          Se combinaron dos fuentes de video. En las intersecciones donde una
          cámara existente veía bien todos los accesos, se usó ese video. Para
          la rotonda se grabó con dron.
        </p>
        <p className={styles.p}>
          Cada video se procesó con YOAO. Sobre la imagen se marcaron los
          accesos y los movimientos, y el sistema detectó, clasificó y siguió
          cada vehículo: livianos, pesados, buses, motos y bicicletas. El
          resultado salió por movimiento, por categoría y en bloques de 15
          minutos, el mismo formato de un aforo manual.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Resultados</h2>
        <p className={styles.p}>
          En cámara fija, la diferencia entre el conteo de YOAO y un conteo
          manual de la misma franja fue{" "}
          <strong className={styles.strong}>cercana a 3%</strong>. En una de las
          intersecciones el sistema registró un pico de 402 vehículos en 15
          minutos, un dato que con conteo manual habría exigido varias personas
          solo para ese acceso.
        </p>
        <p className={styles.p}>
          La rotonda fue más difícil. Desde la altura del dron los vehículos se
          ven pequeños, los árboles y las sombras los tapan por momentos y
          algunos giros generaron falsos positivos. La solución fue un método
          mixto: el software cuenta el volumen y una persona revisa solo los
          movimientos dudosos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Lo que aprendimos</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>Antes de procesar, conviene revisar que cada cámara vea todos los accesos. Una cámara bien ubicada vale más que diez mal orientadas.</li>
          <li className={styles.li}>Las rotondas grandes necesitan una toma estable y lo más cenital posible, y un tiempo de ajuste que una intersección simple no necesita.</li>
          <li className={styles.li}>Comparar cada punto nuevo con un conteo manual corto es lo que da confianza al equipo de tránsito.</li>
          <li className={styles.li}>Hay que acordar desde el inicio qué métrica se reporta. "Detecciones totales" y "vehículos únicos" no son lo mismo, y confundirlas genera desconfianza en los datos.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Lo que sigue</h2>
        <p className={styles.p}>
          El municipio evalúa medir de forma periódica entre 10 y 15
          intersecciones al mes, con unas 6 horas de video cada una. A USD 7 por
          hora de video, eso suma entre USD 420 y USD 630 al mes, sin
          aforadores en terreno ni planillas que digitar.
        </p>
        <p className={styles.p}>
          Si quieres hacer este mismo trabajo, en{" "}
          <IntLink href="/blog/como-hacer-un-aforo-vehicular">cómo hacer un aforo vehicular</IntLink>{" "}
          está el formato con plantilla en Excel, y en{" "}
          <IntLink href="/blog/analitica-de-video-para-municipios">analítica de video para municipios</IntLink>{" "}
          repasamos qué más se puede medir. Si tus cámaras son Hikvision o
          Dahua, lee{" "}
          <PostLink slug="analitica-de-video-hikvision-dahua">qué trae la analítica de esas cámaras y qué no</PostLink>.
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
