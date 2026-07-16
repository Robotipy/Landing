import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/rpa-vs-desarrollo-a-medida/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿RPA es más barato que el desarrollo a medida?",
    a: "En la implementación inicial, casi siempre sí, porque no hay que escribir código desde cero. En volumen alto sostenido en el tiempo, no necesariamente: ejecutar miles de transacciones simulando clics de interfaz consume más recursos de cómputo que una llamada directa a una API, así que el costo se puede invertir a partir de cierta escala.",
  },
  {
    q: "¿Se puede empezar con RPA y migrar después a desarrollo a medida?",
    a: "Sí, y es más común de lo que parece. Varios clientes arrancan con un robot para validar que el proceso vale la pena automatizar, y una vez que el volumen crece y justifica la inversión, migran la parte de mayor volumen a una integración directa. El robot suele quedar cubriendo las excepciones que la integración no contempla.",
  },
  {
    q: "¿Qué pasa si mi sistema no tiene API pero tampoco quiero depender de la interfaz visual?",
    a: "Ahí hay una tercera opción menos conocida: algunos sistemas exponen datos a nivel de base de datos aunque no tengan API pública. Hay que evaluarlo caso por caso, porque tocar la base de datos directamente de un sistema de terceros trae riesgos propios si no se hace con cuidado.",
  },
  {
    q: "¿Rocketbot puede combinarse con desarrollo propio?",
    a: "Sí, es habitual. Rocketbot permite embeber scripts Python dentro del flujo, así que el robot maneja la parte de interfaz y el script maneja la lógica de negocio compleja.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "rpa-vs-desarrollo-a-medida";

export const post = {
  slug,
  locale: "es",
  title: "RPA vs desarrollo a medida: cuándo conviene cada uno",
  description:
    "RPA o desarrollo a medida: comparamos costo, tiempo de implementación y mantenimiento para elegir bien la opción al automatizar un proceso empresarial.",
  keywords: [
    "RPA vs desarrollo a medida",
    "cuándo usar RPA",
    "RPA o software a medida",
    "elegir automatización de procesos",
    "desarrollo a medida vs RPA",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-03",
  image: {
    src: thumbnail,
    urlRelative: "/blog/rpa-vs-desarrollo-a-medida/header.jpeg",
    alt: "RPA vs desarrollo a medida: cuándo conviene cada uno",
  },
  faq: faqs,
  cta: {
    titulo: "¿No sabes si tu proceso necesita RPA o desarrollo a medida?",
    texto:
      "Lo evaluamos sin costo: miramos el sistema fuente, el volumen y quién lo va a mantener, y te decimos con qué conviene arrancar.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo calculamos el ROI",
    linkUrl: "/blog/como-calcular-el-roi-en-proyectos-rpa",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Hace un par de meses nos sentamos con el gerente de una clínica
          oncológica que estaba evaluando automatizar el pago de honorarios a
          profesionales. Su primera pregunta no fue "cuánto cuesta el proyecto".
          Fue "¿por qué no conectamos directo a la API de Softland en vez de
          armar un robot?". Buena pregunta. La respuesta no fue "porque RPA es
          mejor". Fue que esa conexión API directa todavía no estaba confirmada
          como viable: dependía de que el proveedor Softland habilitara el
          acceso, algo que en ese momento seguía en veremos.
        </p>
        <p className={styles.p}>
          Esa conversación se repite seguido, con roles invertidos. Hay clientes
          que llegan convencidos de que necesitan un desarrollo a medida y
          terminan con un robot corriendo en tres semanas. Y hay clientes que nos
          piden RPA y terminamos recomendando que lo construyan con su propio
          equipo de desarrollo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué es cada cosa, sin vueltas</h2>
        <p className={styles.p}>
          RPA opera sobre la interfaz que ya existe: abre el sistema, hace clic
          donde haría clic una persona, lee lo que hay en pantalla. No necesita
          que el sistema tenga una API, y por eso funciona incluso sobre software
          viejo, sin documentación, o que el proveedor dejó de mantener hace
          años.
        </p>
        <p className={styles.p}>
          El desarrollo a medida se conecta directamente a la base de datos o a
          una API. Es más rápido en ejecución, más estable a largo plazo y no
          depende de que la pantalla no cambie de un día para el otro. El costo
          de esa estabilidad es que hay que construirlo desde cero, y alguien
          tiene que mantenerlo con conocimiento de código, no de configuración.
        </p>
        <p className={styles.p}>
          Ninguna de las dos es "la buena". Son herramientas con supuestos
          distintos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo conviene RPA</h2>
        <p className={styles.p}>
          Tres condiciones suelen inclinar la balanza hacia RPA:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            El sistema fuente no tiene API, o la tiene pero no cubre la
            funcionalidad puntual que necesitas automatizar. Pasa más seguido de
            lo que parece, sobre todo en SAP con transacciones viejas o módulos
            poco usados.
          </li>
          <li className={styles.li}>
            El proceso necesita salir funcionando en semanas, no en meses, porque
            hay una persona a punto de irse o un pico estacional encima.
          </li>
          <li className={styles.li}>
            El equipo que va a operar el robot después no tiene perfil de
            desarrollador. Configurar un flujo en{" "}
            <IntLink href="/rocketbot">Rocketbot</IntLink> lo puede hacer alguien
            de operaciones con una capacitación de un par de días. Modificar
            código Python en producción, no.
          </li>
        </ul>
        <p className={styles.p}>
          Hay un cuarto punto que pesa más de lo que parece: RPA es reversible. Si
          el proceso cambia el mes que viene, ajustas el flujo. Si un desarrollo a
          medida queda mal diseñado desde el inicio, la reescritura sale casi tan
          cara como el proyecto original.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo conviene el desarrollo a medida</h2>
        <p className={styles.p}>
          Acá es donde muchos partners de RPA se quedan callados, porque no les
          conviene decirlo: si tienes volumen alto (decenas de miles de
          transacciones diarias) y el sistema sí tiene una API estable, un
          desarrollo a medida va a ser más rápido en ejecución y más barato de
          correr a largo plazo. Usar RPA simulando clics de interfaz para ese
          volumen es poner un martillo donde entra un tornillo.
        </p>
        <p className={styles.p}>
          También conviene el desarrollo propio cuando ya existe un equipo interno
          con capacidad ociosa y conocimiento del dominio. Pagarle a un tercero
          para automatizar algo que tu propio equipo puede construir con su tiempo
          disponible no tiene sentido económico, aunque tarde un poco más en
          salir.
        </p>
        <p className={styles.p}>
          Y conviene cuando el proceso es el núcleo del negocio, no una tarea de
          soporte. Si la lógica que estás automatizando es la que te diferencia de
          la competencia, probablemente no quieras que viva en un flujo que
          cualquier consultor externo puede abrir y replicar. Ese tipo de lógica
          suele merecer código propio, versionado, con pruebas automatizadas
          detrás.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Cómo se combinan RPA y desarrollo a medida en la práctica
        </h2>
        <p className={styles.p}>
          En la práctica, la mayoría de los proyectos grandes que hacemos no son
          puramente uno u otro. Es el patrón que más se repite en los proyectos de
          SAP que armamos (puedes ver el detalle en{" "}
          <IntLink href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa">
            qué procesos de SAP se pueden automatizar con RPA
          </IntLink>
          ): el robot extrae datos de un sistema legado sin API, y la validación y
          el cálculo de reglas de negocio complejas corre en un script Python
          embebido en el mismo flujo, que el robot solo invoca. RPA para la parte
          que necesita simular interfaz humana, código a medida para la parte que
          necesita precisión y velocidad.
        </p>
        <p className={styles.p}>
          La pregunta correcta casi nunca es "¿RPA o desarrollo?". Es "¿qué parte
          de este proceso necesita cada cosa?".
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Lo que de verdad determina el mantenimiento</h2>
        <p className={styles.p}>
          El mantenimiento de un robot no depende tanto de la herramienta como de
          quién lo cuida. Un robot bien construido con monitoreo activo se
          mantiene con horas puntuales cuando el sistema fuente cambia de pantalla.
          Un robot sin dueño interno, entregado y olvidado, se rompe en silencio a
          los pocos meses, y nadie se entera hasta que alguien pregunta por qué el
          reporte de siempre dejó de llegar.
        </p>
        <p className={styles.p}>
          Con el desarrollo a medida pasa lo mismo, al revés. Si el desarrollador
          que lo construyó se va de la empresa y no dejó documentación, ese código
          se vuelve una caja negra que nadie quiere tocar. Ahí no importa si era
          RPA o Python. El problema es de gobierno del proyecto, no de la
          tecnología elegida.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Antes de decidir</h2>
        <p className={styles.p}>
          Antes de asumir que ya sabes cuál necesitas, conviene confirmar tres
          cosas: si el sistema fuente tiene API real (no "en teoría la tiene", sino
          si cubre exactamente lo que necesitas tocar), cuál es el volumen diario
          del proceso, y quién en tu equipo va a quedar a cargo del mantenimiento
          el día después de la entrega.
        </p>
        <p className={styles.p}>
          Esas tres respuestas suelen decidir más que cualquier comparación
          técnica.
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
        <p className={styles.p}>
          Danilo Toro, fundador de Robotipy, ayuda a empresas medianas y grandes
          en Chile y Argentina a decidir qué automatizar y con qué herramienta,
          sin vender de más.
        </p>
      </section>
    </>
  ),
};
