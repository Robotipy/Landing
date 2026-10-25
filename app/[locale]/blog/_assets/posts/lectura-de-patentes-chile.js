import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/lectura-de-patentes-chile/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Sirve cualquier cámara para leer patentes?",
    a: "No. La lectura necesita que la patente se vea nítida, con suficiente tamaño en la imagen y sin desenfoque por movimiento. Las cámaras de seguridad generales suelen tener un ángulo demasiado abierto para eso. Para un acceso conviene una cámara dedicada o, al menos, una ubicada cerca del punto de paso y apuntando a la altura de la patente.",
  },
  {
    q: "¿La patente es un dato personal?",
    a: "Puede serlo cuando permite identificar a la persona dueña del vehículo, por ejemplo al cruzarla con un registro de residentes o de visitas. Por eso conviene tratarla como dato personal: informar que se registra, usarla solo para el fin declarado y borrarla cuando deja de hacer falta. Para tu caso concreto, consulta a tu asesor legal.",
  },
  {
    q: "¿Se puede abrir una barrera automáticamente con la lectura?",
    a: "Sí, pero eso requiere procesar el video en vivo y conectarse al control de acceso, y en Robotipy lo hacemos como proyecto a medida. Para medir estadías, rotación o registrar accesos a partir del video grabado, YOAO funciona sin integraciones.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "lectura-de-patentes-chile";

export const post = {
  slug,
  locale: "es",
  title: "Lectura de patentes en Chile: cómo funciona y qué exige la Ley 21.719",
  description:
    "Cómo funciona la lectura automática de patentes, qué cámara necesitas, para qué la usan empresas, condominios y municipios en Chile, y qué cuidar con la nueva Ley 21.719 de datos personales.",
  keywords: [
    "lectura de patentes chile",
    "software lectura de patentes",
    "cámara lectura de patentes",
    "sistema de lectura de patentes",
    "LPR chile",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-24",
  image: {
    src: thumbnail,
    urlRelative: "/blog/lectura-de-patentes-chile/header.jpeg",
    alt: "Acceso a un recinto con bodegas y vehículos detectados por YOAO",
  },
  faq: faqs,
  cta: {
    titulo: "¿Quieres registrar los vehículos que entran a tu recinto?",
    texto:
      "Cuéntanos dónde está el acceso y qué necesitas saber. Revisamos si tu cámara sirve para leer patentes y te proponemos cómo medirlo.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-patentes&additionalInfo=Me+interesa+la+lectura+de+patentes.",
    linkLabel: "Visión artificial para empresas e instituciones",
    linkUrl: "/vision-artificial",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          La lectura automática de patentes, también llamada LPR o ANPR, usa una
          cámara y un software para registrar la patente de cada vehículo que
          pasa por un punto. En Chile se usa en accesos de condominios,
          estacionamientos, bodegas y patios logísticos, y en municipios que
          fiscalizan o controlan accesos.
        </p>
        <p className={styles.p}>
          Aquí explicamos cómo funciona, qué cámara hace falta y qué cuidar con
          la Ley 21.719 de protección de datos personales.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo funciona</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>El software detecta el vehículo en la imagen.</li>
          <li className={styles.li}>Ubica la patente dentro del vehículo.</li>
          <li className={styles.li}>Lee los caracteres y los convierte en texto.</li>
          <li className={styles.li}>Registra la hora y, si corresponde, la compara con una lista: residentes, proveedores autorizados o vehículos buscados.</li>
        </ol>
        <p className={styles.p}>
          En Chile conviven dos formatos: el actual, de cuatro letras y dos
          números, y el antiguo, de dos letras y cuatro números. Un buen
          sistema lee ambos sin configuración especial.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué cámara necesitas</h2>
        <p className={styles.p}>
          Es la parte que más falla en la práctica. Para que la lectura sea
          confiable, revisa estos puntos:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Que la cámara apunte de frente a la patente, sin un ángulo muy lateral ni muy desde arriba.</li>
          <li className={styles.li}>Que la patente ocupe suficientes píxeles. Como referencia, unos 130 píxeles de ancho dan buenos resultados.</li>
          <li className={styles.li}>Que la velocidad de obturación sea rápida, para que la patente no salga movida si el vehículo no se detiene.</li>
          <li className={styles.li}>Que de noche tenga iluminación infrarroja, porque los focos del auto encandilan a una cámara común.</li>
        </ul>
        <p className={styles.p}>
          Por eso una cámara de seguridad que cubre todo un estacionamiento casi
          nunca sirve para leer patentes, aunque tenga buena resolución. Hace
          falta una cámara ubicada en el punto de paso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Para qué se usa</h2>
        <ul className={styles.ul}>
          <li className={styles.li}><strong className={styles.strong}>Estacionamientos:</strong> medir cuánto dura cada estadía y cuántas veces rota cada cupo.</li>
          <li className={styles.li}><strong className={styles.strong}>Patios logísticos:</strong> registrar a qué hora entra y sale cada camión y cuánto esperó.</li>
          <li className={styles.li}><strong className={styles.strong}>Condominios y empresas:</strong> llevar un registro de accesos sin anotar a mano.</li>
          <li className={styles.li}><strong className={styles.strong}>Municipios:</strong> controlar los accesos a recintos municipales, como un vertedero o un parque.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué exige la Ley 21.719</h2>
        <p className={styles.p}>
          La Ley 21.719 moderniza la protección de datos personales en Chile y
          su entrada en vigencia está fijada para el 1 de diciembre de 2026
          (hay un proyecto en trámite para postergarla un año). Una patente
          puede ser un dato personal cuando permite identificar a la persona
          dueña del vehículo, así que un sistema de lectura debería cumplir lo
          básico:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Informar que se registran las patentes, por ejemplo con un letrero en el acceso.</li>
          <li className={styles.li}>Definir para qué se usan y no darles otro uso.</li>
          <li className={styles.li}>Guardar los registros solo el tiempo necesario.</li>
          <li className={styles.li}>Restringir quién puede consultarlos y protegerlos.</li>
        </ul>
        <p className={styles.p}>
          Esto es una orientación general. Para tu caso concreto, revísalo con
          tu asesor legal.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Lectura de patentes con YOAO</h2>
        <p className={styles.p}>
          YOAO lee patentes sobre video grabado. Sirve para medir estadías en
          un estacionamiento o registrar los accesos de un día sin instalar un
          sistema completo, a USD 7 por hora de video. Abrir barreras o enviar
          alertas en el momento requiere procesar en vivo, y eso lo hacemos como
          proyecto a medida.
        </p>
        <p className={styles.p}>
          Si estás evaluando qué comprar, lee también{" "}
          <IntLink href="/blog/camaras-con-inteligencia-artificial">cámaras con IA: ¿comprar nuevas o agregar IA a las que ya tienes?</IntLink>.
          Para otros usos del video en recintos con público, mira{" "}
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
