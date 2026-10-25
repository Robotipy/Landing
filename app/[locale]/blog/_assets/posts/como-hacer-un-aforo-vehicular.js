import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/como-hacer-un-aforo-vehicular/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const PLANTILLA = "/blog/como-hacer-un-aforo-vehicular/plantilla-aforo-vehicular.xlsx";

const faqs = [
  {
    q: "¿Cuántas horas hay que contar en un aforo?",
    a: "Depende de lo que pida el estudio. Lo habitual es cubrir los períodos punta de la mañana, del mediodía y de la tarde, en un día laboral típico. Si el estudio responde a términos de referencia o a un permiso, revisa ahí los períodos y la duración exigidos antes de salir a terreno.",
  },
  {
    q: "¿Cuántas personas hacen falta para un aforo manual?",
    a: "Como referencia, una persona puede seguir uno o dos movimientos cuando el volumen es moderado. En una intersección con cuatro accesos y giros en todas las direcciones, eso significa varias personas por período, más alguien que coordine y luego digite las planillas.",
  },
  {
    q: "¿Sirve un video grabado con el celular?",
    a: "Sirve si la toma es estable, está alta y ve todos los movimientos que quieres contar. Un trípode en un segundo piso o un dron dan mejor resultado que una toma a la altura de la calle, donde un camión tapa a los autos que vienen detrás.",
  },
  {
    q: "¿Qué tan preciso es contar con video y software?",
    a: "En un piloto con un municipio, la diferencia con el conteo manual en cámara fija fue cercana a 3%. En rotondas grandes vistas con dron hace falta más ajuste. Por eso conviene validar cada punto nuevo con un conteo manual de una franja corta antes de usar los datos.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
  th: "text-left text-white font-semibold py-3 pr-4 border-b border-white/20",
  td: "py-3 pr-4 align-top text-white/80 border-b border-white/10",
  callout: "rounded-xl border border-white/10 bg-white/5 p-5",
};

const ejemplo = [
  ["07:00", "07:15", 98, 4, 3, 1, 9, 5, 120],
  ["07:15", "07:30", 112, 5, 4, 1, 8, 5, 135],
  ["07:30", "07:45", 124, 6, 5, 2, 9, 4, 150],
  ["07:45", "08:00", 116, 5, 4, 2, 8, 5, 140],
];

const metodos = [
  ["Manual en terreno", "Aforadores con planilla o contador de mano", "Clasifica y registra giros sin equipos", "Caro por hora contada, cansancio y errores de digitación"],
  ["Tubos neumáticos", "Mangueras sobre la calzada que registran ejes", "Mide muchos días seguidos", "No registra giros y se daña con el tránsito pesado"],
  ["Video", "Cámara fija o dron, y conteo posterior en oficina o con software", "Se puede revisar y repetir; con software es rápido", "Necesita una toma que vea todo el cruce"],
];

const slug = "como-hacer-un-aforo-vehicular";

export const post = {
  slug,
  locale: "es",
  title: "Cómo hacer un aforo vehicular: formato, plantilla en Excel y cómo automatizarlo",
  description:
    "Cómo hacer un aforo vehicular paso a paso: qué contar, formato en bloques de 15 minutos, hora punta y factor de hora punta, con plantilla en Excel gratis y la opción de contar con video.",
  keywords: [
    "aforo vehicular",
    "cómo hacer un aforo vehicular",
    "formato de aforo vehicular",
    "aforo vehicular excel",
    "conteo vehicular manual",
    "factor de hora punta",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-27",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-hacer-un-aforo-vehicular/header.jpeg",
    alt: "Autopista vista desde arriba con cada vehículo detectado y numerado por YOAO",
  },
  faq: faqs,
  cta: {
    titulo: "Cuenta con video en vez de planillas",
    texto:
      "Si ya tienes video del punto, o puedes grabarlo con un dron, te devolvemos el conteo por acceso, movimiento y categoría en bloques de 15 minutos.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-aforo&additionalInfo=Me+interesa+automatizar+aforos+vehiculares+con+video.",
    linkLabel: "Calculadora de costo de aforo vehicular",
    linkUrl: "/calculadora-aforo-vehicular",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Un aforo vehicular es el conteo de los vehículos que pasan por un
          punto durante un período, separados por tipo y por movimiento. Es la
          base de cualquier estudio de tránsito: sin esos números no se puede
          ajustar un semáforo, evaluar una obra ni justificar un cambio de
          sentido de una calle.
        </p>
        <p className={styles.p}>
          Esta guía explica qué contar, cómo ordenar los datos, cómo calcular la
          hora punta y su factor, y qué métodos existen. Al final puedes
          descargar una plantilla en Excel que hace los cálculos sola.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué se cuenta en un aforo</h2>
        <p className={styles.p}>
          Tres cosas definen un aforo: las categorías de vehículos, los
          movimientos y los períodos.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong className={styles.strong}>Categorías:</strong> lo común es
            separar livianos, buses, camiones de dos ejes, camiones de tres o
            más ejes, motos y bicicletas. Algunos estudios piden más detalle.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Movimientos:</strong> en una
            intersección no basta con saber cuántos vehículos entran por un
            acceso. Hay que saber hacia dónde van: derecho, a la izquierda o a
            la derecha. Cada combinación de origen y destino es un movimiento.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Períodos:</strong> se cuentan las
            horas que importan para el estudio, normalmente las puntas de la
            mañana, el mediodía y la tarde de un día laboral.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El formato: bloques de 15 minutos</h2>
        <p className={styles.p}>
          Los datos se anotan en bloques de 15 minutos, por movimiento y por
          categoría. Ese nivel de detalle permite encontrar la hora punta y ver
          cómo varía el tránsito dentro de ella. Un ejemplo para un solo
          movimiento:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr>
                {["Desde", "Hasta", "Livianos", "Buses", "Cam. 2 ejes", "Cam. 3+ ejes", "Motos", "Bicicletas", "Total"].map((h) => (
                  <th key={h} className={ui.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ejemplo.map((row) => (
                <tr key={row[0]}>
                  {row.map((v, i) => (
                    <td key={i} className={`${ui.td} ${i === row.length - 1 ? "font-semibold text-white" : ""}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-white/60">Valores de ejemplo, no corresponden a un estudio real.</p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Hora punta y factor de hora punta</h2>
        <p className={styles.p}>
          La hora punta es la hora con más vehículos. Se busca sumando cuatro
          bloques seguidos de 15 minutos y quedándose con la suma más alta. En
          el ejemplo, de 07:00 a 08:00 pasan 120 + 135 + 150 + 140 ={" "}
          <strong className={styles.strong}>545 vehículos</strong>.
        </p>
        <p className={styles.p}>
          El factor de hora punta (FHP) mide qué tan pareja es esa hora. Se
          calcula dividiendo el volumen de la hora por cuatro veces el bloque
          de 15 minutos más cargado:
        </p>
        <div className={ui.callout}>
          <p className={styles.p}>
            FHP = 545 / (4 × 150) = <strong className={styles.strong}>0,91</strong>
          </p>
        </div>
        <p className={styles.p}>
          Un FHP cercano a 1 indica un tránsito parejo durante la hora. Uno más
          bajo indica un pico concentrado en pocos minutos, típico de la
          entrada a un colegio o del cambio de turno de una fábrica.
        </p>
        <p className={styles.p}>
          Muchos estudios piden además el volumen en vehículos equivalentes,
          que pondera cada categoría según cuánto ocupa de la vía (un bus pesa
          más que un auto). Los factores cambian según el manual que exija el
          estudio, así que revisa cuál corresponde.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Métodos para contar</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr>
                <th className={ui.th}>Método</th>
                <th className={ui.th}>Cómo funciona</th>
                <th className={ui.th}>A favor</th>
                <th className={ui.th}>En contra</th>
              </tr>
            </thead>
            <tbody>
              {metodos.map(([m, como, favor, contra]) => (
                <tr key={m}>
                  <td className={`${ui.td} font-semibold text-white`}>{m}</td>
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
        <h2 className={styles.h2}>Plantilla de aforo en Excel</h2>
        <p className={styles.p}>
          Armamos una plantilla con el formato de bloques de 15 minutos de 07:00
          a 20:00. Calcula el total por bloque, los vehículos equivalentes, el
          volumen de la hora móvil, la hora punta y su FHP. Usa una copia de la
          hoja de conteo por cada movimiento.
        </p>
        <p className={styles.p}>
          <a href={PLANTILLA} download className="inline-flex rounded-lg bg-accent px-5 py-3 font-semibold text-white hover:opacity-90">
            Descargar plantilla de aforo (Excel)
          </a>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo automatizar el aforo con video</h2>
        <p className={styles.p}>
          El conteo manual tiene un límite: cada hora contada cuesta lo mismo,
          y por eso se cuenta poco. Con video, la toma se graba una vez y el
          conteo se saca después. Si además lo procesa un software, el trabajo
          de oficina también desaparece.
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>Graba el punto con una cámara alta o con un dron, cubriendo todos los accesos.</li>
          <li className={styles.li}>Sube el video a YOAO y marca sobre la imagen los accesos y movimientos.</li>
          <li className={styles.li}>YOAO detecta, clasifica y sigue cada vehículo, y entrega el conteo por movimiento y categoría en bloques de 15 minutos.</li>
          <li className={styles.li}>Valida el primer punto con un conteo manual corto. Si la diferencia es aceptable, el método queda listo para el resto.</li>
        </ol>
        <p className={styles.p}>
          El análisis cuesta USD 7 por hora de video. Para comparar con lo que
          te cuesta hoy el conteo manual, usa la{" "}
          <IntLink href="/es/calculadora-aforo-vehicular">calculadora de costo de aforo vehicular</IntLink>.
          Si trabajas con un municipio, en{" "}
          <IntLink href="/blog/analitica-de-video-para-municipios">analítica de video para municipios</IntLink>{" "}
          explicamos qué más se puede medir con las mismas cámaras, y en{" "}
          <PostLink slug="caso-exito-aforo-vehicular-municipio">el caso de un municipio del Gran Buenos Aires</PostLink>{" "}
          contamos cómo resultó un piloto real.
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
