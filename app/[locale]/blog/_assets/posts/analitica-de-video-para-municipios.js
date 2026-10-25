import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/analitica-de-video-para-municipios/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);
const ExtLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
    {children}
  </a>
);

const faqs = [
  {
    q: "¿Hay que comprar cámaras nuevas para medir el tránsito?",
    a: "No siempre. Las cámaras de seguridad que ya tiene el municipio sirven cuando ven el cruce completo desde una altura razonable. Si una intersección no tiene una cámara bien ubicada, un dron grabando unas horas resuelve el estudio sin instalar nada. Antes de comprar, conviene probar con una muestra del video que ya existe.",
  },
  {
    q: "¿Qué tan preciso es el conteo con video?",
    a: "En un piloto con un municipio del Gran Buenos Aires, la diferencia con el conteo manual en cámara fija fue cercana a 3%. En una rotonda grande vista con dron hicieron falta más ajustes, por árboles, sombras y vehículos pequeños en la imagen. Por eso recomendamos validar cada punto nuevo con un conteo manual de la misma franja antes de usar los datos en un informe.",
  },
  {
    q: "¿Funciona de noche?",
    a: "Funciona cuando la iluminación pública permite distinguir los vehículos en la imagen. Con calles muy oscuras o cámaras sin visión nocturna adecuada, la precisión baja. Lo revisamos con una muestra nocturna antes de comprometer un estudio.",
  },
  {
    q: "¿Sirve para los aforos de un IMIV en Chile?",
    a: "Sirve para obtener los conteos por movimiento y categoría en bloques de 15 minutos que pide un estudio de tránsito. Los períodos, la duración y el formato exactos los fija la metodología del IMIV y quien lo revisa, así que conviene confirmarlos antes de grabar. A la municipalidad también le sirve para tener sus propios conteos y contrastarlos con los que presentan los proyectos.",
  },
  {
    q: "¿Se pueden recibir alertas en tiempo real?",
    a: "Sí, como proyecto a medida que se cotiza aparte, porque implica procesar el video de forma continua. Para estudios de tránsito, aforos y mediciones, YOAO trabaja sobre video grabado, que es lo que la mayoría de las áreas de tránsito necesita.",
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
  th: "text-left text-white font-semibold py-3 pr-4 border-b border-white/20",
  td: "py-3 pr-4 align-top text-white/80 border-b border-white/10",
};

const mediciones = [
  ["Aforo vehicular por acceso y categoría", "Estudios de tránsito, semaforización y evaluación de obras viales", "Cámara fija o dron"],
  ["Origen y destino en rotondas e intersecciones", "Saber qué giros se hacen y rediseñar el cruce", "Dron o cámara alta"],
  ["Peatones y ciclistas", "Medir el uso de una avenida renovada o de una bicisenda nueva", "Cámara fija"],
  ["Personas en eventos y ferias", "Controlar el aforo y dimensionar accesos y personal", "Cámara fija o dron"],
  ["Filas y tiempo de atención", "Saber cuánto espera un vecino en una oficina de atención", "Cámara cenital"],
  ["Ocupación de estacionamientos", "Medir ocupación y rotación antes de cambiar tarifas o ampliar", "Dron o cámara alta"],
  ["Patentes en accesos", "Registrar qué vehículos entran a un basural o a un predio municipal", "Cámara en el punto de paso"],
];

const slug = "analitica-de-video-para-municipios";

export const post = {
  slug,
  locale: "es",
  title: "Analítica de video para municipalidades y municipios: qué medir con las cámaras que ya tienen",
  description:
    "Qué puede medir una municipalidad con analítica de video: aforos vehiculares, origen y destino, peatones, eventos y filas. Qué cámaras sirven, cómo hacer un piloto, cuánto cuesta y cómo se usa en Chile y Argentina.",
  keywords: [
    "analítica de video para municipios",
    "conteo vehicular con cámaras",
    "aforo vehicular automático",
    "cámaras de seguridad con inteligencia artificial",
    "estudio de tránsito con video",
    "visión artificial para municipios",
    "analítica de video para municipalidades",
    "televigilancia municipal",
    "aforos para IMIV",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.visionArtificial),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-25",
  image: {
    src: thumbnail,
    urlRelative: "/blog/analitica-de-video-para-municipios/header.jpeg",
    alt: "Rotonda vista con dron: YOAO detecta cada vehículo y le asigna un número para seguirlo",
  },
  faq: faqs,
  cta: {
    titulo: "Prueba con el video de tu municipio",
    texto:
      "Cuéntanos qué quieres medir y en qué intersección. Revisamos una muestra de tu video y te decimos qué datos se pueden sacar y con qué precisión.",
    botonLabel: "Agenda una reunión",
    botonUrl: "/contact-us?servicio=software&origen=blog-municipios&additionalInfo=Me+interesa+la+anal%C3%ADtica+de+video+para+un+municipio.",
    linkLabel: "Visión artificial para empresas e instituciones",
    linkUrl: "/vision-artificial",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Un municipio mediano tiene hoy decenas o cientos de cámaras. Vicente
          López, en el norte del Gran Buenos Aires, opera{" "}
          <ExtLink href="https://revistainnovacion.com/nota/12327/vicente_lopez_se_transforma_en_una_ciudad_inteligente_con_tecnologia_de_video/">
            más de 2.300
          </ExtLink>{" "}
          desde su centro de monitoreo. En Chile, muchas municipalidades operan
          centros de televigilancia con cámaras en calles y plazas. En los dos
          países casi todas se usan de la misma forma: cuando pasa algo,
          alguien busca la grabación y la revisa.
        </p>
        <p className={styles.p}>
          Mientras tanto, cuando el área de tránsito necesita saber cuántos
          vehículos pasan por una rotonda, contrata aforadores o manda personal
          con planillas. Ese conteo toma días, cubre unas pocas horas y se
          repite poco. La analítica de video saca esos mismos números del video
          de las cámaras que ya existen, o de un dron.
        </p>
        <p className={styles.p}>
          Aquí repasamos qué se puede medir, qué cámaras sirven, cómo se hace un
          piloto y cuánto cuesta, con lo que aprendimos en pilotos con
          municipios.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className={ui.stat}>
          <p className={ui.statVal}>2.300+</p>
          <p className={ui.statLabel}>cámaras en el centro de monitoreo de Vicente López</p>
        </div>
        <div className={ui.stat}>
          <p className={ui.statVal}>~3%</p>
          <p className={ui.statLabel}>diferencia con el conteo manual en cámara fija, en un piloto municipal</p>
        </div>
        <div className={ui.stat}>
          <p className={ui.statVal}>1:1,2</p>
          <p className={ui.statLabel}>hora de video frente a tiempo de proceso en YOAO</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué es la analítica de video</h2>
        <p className={styles.p}>
          Es software que detecta vehículos y personas en cada cuadro del video,
          les asigna un número y los sigue mientras cruzan la imagen. Cuando uno
          de ellos atraviesa una zona o una línea que marcaste, se cuenta. El
          resultado es una tabla, por ejemplo vehículos por acceso, categoría y
          bloque de 15 minutos, lista para un informe o una planilla.
        </p>
        <p className={styles.p}>
          No identifica a nadie. Para contar autos o peatones no hace falta
          reconocimiento facial, y los datos que entrega son agregados: cuántos,
          de qué tipo, por dónde y a qué hora.
        </p>
        <p className={styles.p}>
          Muchas cámaras modernas traen funciones básicas de conteo por línea.
          Sirven para una puerta o un pasillo, pero un estudio de tránsito pide
          más: separar livianos, pesados, buses, motos y bicicletas, registrar
          cada movimiento de origen a destino y consolidar varias cámaras o
          varias horas en un solo reporte.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué puede medir un municipio con video</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-sm">
            <thead>
              <tr>
                <th className={ui.th}>Medición</th>
                <th className={ui.th}>Para qué sirve</th>
                <th className={ui.th}>Fuente de video</th>
              </tr>
            </thead>
            <tbody>
              {mediciones.map(([m, uso, fuente]) => (
                <tr key={m}>
                  <td className={`${ui.td} font-semibold text-white`}>{m}</td>
                  <td className={ui.td}>{uso}</td>
                  <td className={ui.td}>{fuente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <figure className="my-6">
          <video
            src="/vision/videos/interseccion.mp4"
            poster="/vision/videos/interseccion.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-label="Intersección vista con dron: YOAO detecta y numera cada vehículo"
            className="block aspect-video w-full rounded-xl bg-black object-cover"
          />
          <figcaption className="mt-2 text-sm text-white/60">
            Intersección grabada con dron y analizada con YOAO: cada vehículo
            recibe un número y se cuenta al cruzar cada acceso.
          </figcaption>
        </figure>
        <p className={styles.p}>
          Los datos de base muchas veces ya existen y sirven para comparar. En
          Yerba Buena, por ejemplo, la avenida Solano Vera tiene{" "}
          <ExtLink href="https://www.contextotucuman.com/nota/363730/por-dia-ingresan-a-la-avenida-solano-vera-9-500-vehículos.html">
            9.500 vehículos al día medidos
          </ExtLink>
          . Con video se puede repetir esa medición cada mes, en lugar de una
          vez cada varios años, y ver el efecto de un cambio de semáforos o de
          una obra.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Sirven las cámaras de seguridad que ya tienen?</h2>
        <p className={styles.p}>
          Muchas veces sí, con una condición: la cámara tiene que ver el cruce
          completo. Las cámaras de seguridad suelen apuntar a una esquina o a
          una puerta para reconocer lo que pasa ahí, no para abarcar los cuatro
          accesos de una intersección. Antes de diseñar un estudio, revisa
          estas cuatro cosas en el video:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Que se vean todos los accesos y salidas que quieres contar.</li>
          <li className={styles.li}>Que la cámara esté alta, para que un camión no tape a los autos que vienen detrás.</li>
          <li className={styles.li}>Que árboles, postes o carteles no corten los carriles.</li>
          <li className={styles.li}>Que de noche haya luz suficiente para distinguir un vehículo de otro.</li>
        </ul>
        <p className={styles.p}>
          Cuando ninguna cámara cumple, un dron grabando entre tres y cinco
          horas resuelve el estudio sin instalar nada. En los pilotos aprendimos
          que una rotonda grande vista desde mucha altura exige más ajustes,
          porque los vehículos se ven pequeños y las sombras confunden. Ahí
          funciona mejor un método mixto: el software cuenta el volumen y una
          persona revisa los movimientos dudosos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo se hace un piloto</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>Elige uno a tres puntos con una pregunta concreta, por ejemplo cuántos vehículos pesados entran por un acceso en hora punta.</li>
          <li className={styles.li}>Exporta entre tres y cinco horas de video del sistema de cámaras o graba con un dron.</li>
          <li className={styles.li}>Marca sobre la imagen los accesos, las zonas y los movimientos que quieres medir.</li>
          <li className={styles.li}>Procesa el video. En YOAO una hora de video se analiza en alrededor de 1,2 horas.</li>
          <li className={styles.li}>Compara el resultado con un conteo manual de la misma franja. Si la diferencia es aceptable, ese punto queda validado.</li>
          <li className={styles.li}>Decide cuántos puntos y con qué frecuencia quieres medir de ahí en adelante.</li>
        </ol>
        <p className={styles.p}>
          El paso de comparar con un conteo manual es el que da confianza al
          equipo de tránsito, y es el que conviene no saltarse en ningún punto
          nuevo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuánto cuesta</h2>
        <p className={styles.p}>
          En YOAO el análisis cuesta{" "}
          <strong className={styles.strong}>USD 7 por hora de video</strong>,
          sin costo fijo. Un programa de 10 a 15 intersecciones al mes, con unas
          6 horas de video cada una, suma entre 60 y 90 horas, es decir, entre
          USD 420 y USD 630 al mes.
        </p>
        <p className={styles.p}>
          La comparación que importa es contra el conteo manual: varias personas
          por acceso durante cada hora contada, más el tiempo de digitar las
          planillas. Para hacer esa cuenta con tus números, usa la{" "}
          <IntLink href="/es/calculadora-aforo-vehicular">
            calculadora de costo de aforo vehicular
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Si el municipio compra por orden de compra y no con tarjeta, lo
          habitual es armar un paquete de horas. Las alertas en vivo, en
          cambio, se cotizan aparte como proyecto a medida.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>En Chile: televigilancia, Dirección de Tránsito e IMIV</h2>
        <p className={styles.p}>
          En las municipalidades chilenas, las cámaras suelen depender de
          seguridad pública y se operan desde un centro de televigilancia. La
          Dirección de Tránsito rara vez las usa para medir, aunque varias
          están en los mismos cruces que necesita contar. Con el video que ya
          graban, y revisando que vean el cruce completo, la Dirección de
          Tránsito puede tener sus propios aforos sin contratar un estudio cada
          vez.
        </p>
        <p className={styles.p}>
          El otro uso importante es el IMIV. Desde la Ley 20.958, los proyectos
          que generan viajes deben presentar un Informe de Mitigación de
          Impacto Vial, que se revisa en la Dirección de Tránsito de la
          municipalidad o en la Seremi de Transportes, según el tamaño del
          proyecto. Esos informes se apoyan en aforos de las intersecciones
          cercanas.
        </p>
        <p className={styles.p}>
          Con video, una consultora puede hacer esos aforos sin aforadores en
          terreno, y la municipalidad puede tener sus propios conteos para
          contrastar con los que presentan los proyectos. En{" "}
          <PostLink slug="como-hacer-un-aforo-vehicular">cómo hacer un aforo vehicular</PostLink>{" "}
          está el formato de bloques de 15 minutos, con la hora punta y su
          factor.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Privacidad</h2>
        <p className={styles.p}>
          Contar vehículos y personas no requiere identificar a nadie, así que
          estos estudios trabajan sin reconocimiento facial y entregan datos
          agregados. Igual conviene definir desde el inicio qué video se guarda,
          por cuánto tiempo y quién accede, según la ley de datos que aplique:
          la Ley 25.326 en Argentina o la Ley 21.719 en Chile.
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

      <section className="space-y-3">
        <h2 className={styles.h2}>Lecturas relacionadas</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <IntLink href="/es/vision-artificial">Visión artificial para empresas e instituciones</IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/es/calculadora-aforo-vehicular">Calculadora de costo de aforo vehicular</IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/es/analysis">YOAO, nuestra plataforma de analítica de video</IntLink>
          </li>
        </ul>
      </section>
    </>
  ),
};
