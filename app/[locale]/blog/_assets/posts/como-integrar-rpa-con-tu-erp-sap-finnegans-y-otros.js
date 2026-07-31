import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Necesito acceso a la documentación técnica del ERP para automatizarlo con RPA?",
    a: "No. Para la interfaz gráfica alcanza con un usuario y los permisos correctos. La documentación técnica (BAPIs, esquemas de carga) hace falta recién cuando se decide integrar por esos caminos.",
  },
  {
    q: "¿Finnegans se puede automatizar igual que SAP?",
    a: "Se puede automatizar, pero con menos opciones. SAP ofrece una capa de BAPIs y objetos de carga masiva que otros ERP de mercado medio, incluido Finnegans, no siempre tienen documentada o disponible. En la práctica, la mayoría de las automatizaciones sobre estos sistemas quedan a nivel de interfaz gráfica, y eso está bien: sigue siendo un robot confiable, solo que con un camino menos entre los tres que describimos arriba.",
  },
  {
    q: "¿Conviene combinar interfaz y API en el mismo robot?",
    a: "Sí, y es más común de lo que parece. En nuestros proyectos de SAP, lo habitual es que el robot navegue la pantalla para lo que no tiene otra puerta y llame a una BAPI para lo que sí la tiene, sobre todo cuando ese dato es sensible a errores de tipeo. Forzar todo por un solo camino, cuando el otro existe y es mejor para ese tramo puntual, es la forma más común de dejar rendimiento sobre la mesa.",
  },
  {
    q: "¿Qué pasa si mi ERP no tiene ni interfaz web ni API, solo una terminal?",
    a: "Existe, y lo resolvimos con un módulo que conecta directo por el protocolo de la terminal (TN3270 en el caso que nos tocó), sin pasar por ningún emulador visual. Es más trabajo de puesta en marcha porque hay que identificar bien la ruta de conexión del lado de infraestructura, pero una vez resuelta funciona igual de estable que cualquier otra integración.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros";

export const post = {
  slug,
  locale: "es",
  title: "Cómo integrar RPA con tu ERP: SAP, Finnegans y sistemas legacy",
  description:
    "Qué caminos existen para conectar un robot a tu ERP (SAP, Finnegans u otro): interfaz gráfica, BAPI o carga masiva, con ejemplos reales de cada uno.",
  keywords: [
    "cómo integrar RPA con tu ERP",
    "automatizar SAP con RPA",
    "RPA para Finnegans",
    "integración RPA ERP",
    "BAPI vs RPA",
    "robot para ERP",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-26",
  image: {
    src: thumbnail,
    urlRelative:
      "/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros/header.jpeg",
    alt: "Cómo integrar RPA con tu ERP: SAP, Finnegans y sistemas legacy",
  },
  faq: faqs,
  cta: {
    titulo:
      "¿Tienes un proceso que hoy vive atado a tu ERP y no sabes por dónde conviene automatizarlo?",
    texto: "Escríbenos y lo evaluamos juntos: interfaz, BAPI o carga masiva, según lo que de verdad conviene en tu caso.",
    botonLabel: "Escríbenos",
    botonUrl: "/contact-us",
    linkLabel: "Qué procesos de SAP automatizar",
    linkUrl: "/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          El robot de creación de materiales que estamos por cerrar para una
          empresa de arriendo y gestión de flota de vehículos entra a SAP dos
          veces al día, a las 12:00 y a las 15:30. Cada corrida hace tres cosas
          distintas: lee un correo con el pedido, arma una planilla maestra
          aplicando las reglas de jerarquía del repuesto, y recién ahí genera los
          archivos que se cargan en SAP por lote. En el medio hay una pausa
          deliberada: el proceso se detiene y espera que un analista revise la
          planilla antes de que la carga llegue a producción.
        </p>
        <p className={styles.p}>
          Ese robot no "usa RPA para integrarse con SAP" como si fuera una sola
          técnica. Combina tres formas distintas de hablar con el ERP en el mismo
          flujo. Ese es el tema real detrás de la pregunta "¿cómo integro RPA con
          mi ERP?": no hay una respuesta única, hay que elegir el camino correcto
          para cada tramo del proceso, y esa elección cambia según qué sistema
          tengas del otro lado.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Los tres caminos para que un robot hable con tu ERP</h2>
        <p className={styles.p}>
          El más conocido es la interfaz gráfica: el robot abre el ERP con un
          usuario propio y hace clic, escribe y navega igual que una persona. Es
          el camino universal, funciona con cualquier sistema que tenga pantalla,
          y es el único disponible cuando no existe otra puerta.
        </p>
        <p className={styles.p}>
          El segundo es la llamada directa a una función del sistema, sin pasar
          por ninguna pantalla. En SAP esto tiene nombre y forma: BAPI, RFC,
          IDoc. El robot le pide un dato o le entrega uno a través de esa
          función, y el ERP responde sin que nadie vea una ventana abrirse. Es
          más rápido y no depende de que el layout de una pantalla siga igual el
          mes que viene.
        </p>
        <p className={styles.p}>
          El tercero es la carga masiva por archivo, que en SAP se llama LSMW y
          en otros sistemas tiene su propio nombre. El robot no interactúa con
          nada en vivo: prepara un archivo con el formato exacto que el ERP
          espera, se lo entrega a una transacción de carga, y esa transacción
          hace el trabajo de escribir cientos o miles de registros de una sola
          vez. Es la opción cuando el volumen es alto y las reglas están
          cerradas.
        </p>
        <p className={styles.p}>
          El bot de materiales que abre este artículo usa los tres: interfaz
          para leer el correo y armar la planilla, y carga masiva para el
          volumen final. En otro proyecto de ventas que tenemos en producción, el
          robot navega la pantalla para armar el documento comercial pero trae
          los datos del cliente con una BAPI hecha a medida, porque tipearlos a
          mano introducía errores de dígito que la BAPI no comete. Elegir uno
          solo de los tres caminos porque es "el estándar" suele dejar plata
          sobre la mesa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>SAP tiene puertas que otros ERP no tienen</h2>
        <p className={styles.p}>
          Acá hay algo que conviene decir sin vueltas: SAP es, de los ERP
          grandes, el que más caminos alternativos a la interfaz ofrece. Años de
          BAPIs documentadas, una comunidad enorme y clientes dispuestos a pagar
          por esa capa de integración hicieron que ese ecosistema exista.
        </p>
        <p className={styles.p}>
          Finnegans, como la mayoría de los ERP pensados para el mercado local o
          de tamaño medio, no llega con ese mismo nivel de API pública. Ahí el
          camino casi siempre es la interfaz: el robot abre el sistema web o de
          escritorio y opera como lo haría un usuario, porque no hay una BAPI
          equivalente esperando del otro lado. Eso lo define el sistema, no el
          robot, y conviene saberlo antes de prometerle al cliente una
          integración "por API" que ese ERP simplemente no ofrece.
        </p>
        <p className={styles.p}>
          También nos tocó el otro extremo: un sistema central que corre sobre
          mainframe, sin interfaz web ni pantalla moderna, solo una terminal
          verde y negra que habla el protocolo TN3270. Ahí el robot tiene un
          solo camino disponible: conectarse directo por ese mismo protocolo,
          carácter por carácter, porque no existe ni una API que llamar ni un
          botón que hacer clic en un navegador. Ese proyecto todavía está en
          desarrollo, así que no doy más detalle del cliente, pero sirve para el
          punto: antes de diseñar la integración hay que mirar qué sistema tienes
          en frente, y no asumir que todos los ERP se parecen a SAP.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Elegir el camino correcto es una decisión de plata, no de preferencia técnica
        </h2>
        <p className={styles.p}>
          Una integración por BAPI o API, cuando existe, casi siempre gana en
          velocidad y en robustez frente a cambios de pantalla. Pero construirla
          toma tiempo de desarrollo especializado que no todos los proyectos
          justifican, y en varios ERP medianos directamente no está disponible.
          La interfaz gráfica se construye más rápido y no depende de que exista
          documentación técnica del sistema, pero es más frágil ante una
          actualización que mueva un campo de lugar.
        </p>
        <p className={styles.p}>
          La carga masiva es la más eficiente quirúrgicamente para volumen, pero
          solo sirve para el tramo del proceso donde los datos ya están
          validados y listos. Nadie carga por LSMW un dato que todavía puede
          tener un error, porque un objeto de carga masiva que falla a mitad de
          camino con 2.000 registros es un problema mucho más grande que uno que
          falla con un solo registro en pantalla.
        </p>
        <p className={styles.p}>
          La decisión correcta casi nunca es "cuál de los tres es mejor" sino
          qué parte del proceso necesita cada uno. Sobre cómo se documenta esa
          clase de decisión antes de que el desarrollo arranque, ya escribimos
          en{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            cómo documentar un proceso antes de automatizarlo
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Lo que rompe una integración con el ERP</h2>
        <p className={styles.p}>
          El gobierno del acceso tumba más integraciones que un error de
          código. Usar una cuenta compartida o genérica del ERP para el robot
          suele frenar el proyecto en la revisión de seguridad, sobre todo en
          empresas con auditoría seria. Lo que funciona es un usuario dedicado
          al robot con un rol acotado a las pocas transacciones o funciones que
          de verdad usa.
        </p>
        <p className={styles.p}>
          El segundo motivo es el timing en las cargas masivas: un objeto LSMW
          mal configurado corta la carga si un parámetro (por ejemplo, el número
          máximo de registros esperados) queda más chico que el volumen real. Es
          un error que no avisa con una alarma, avisa con la mitad de los datos
          cargados y nadie enterándose hasta el día siguiente.
        </p>
        <p className={styles.p}>
          El tercero es asumir que una BAPI resuelve todo. Una BAPI valida los
          datos que le llegan según sus propias reglas, y si el dato de origen
          está mal (un cliente que no existe en la tabla de equivalencias, un
          código de material sin mapear) la BAPI simplemente rechaza la llamada.
          El robot necesita un camino para esos rechazos, no solo para el camino
          feliz.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo no conviene meter el robot en el ERP todavía</h2>
        <p className={styles.p}>
          Si tu empresa tiene planificado un cambio de ERP en los próximos
          meses, construir una integración profunda con el sistema actual es, la
          mayoría de las veces, tiempo que se va a tirar. Conviene esperar al
          sistema nuevo o, si el proceso es urgente, resolverlo con la interfaz
          gráfica más simple posible, sabiendo que es una solución puente.
        </p>
        <p className={styles.p}>
          Tampoco tiene sentido invertir en una integración por API para un
          proceso que se ejecuta pocas veces al mes. El desarrollo de una BAPI a
          medida se paga con volumen; si el volumen no está, la interfaz
          gráfica, aunque sea más lenta por ejecución, sale más barata en total.
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
          ¿Tienes un proceso que hoy vive atado a tu ERP y no sabes por dónde
          conviene automatizarlo?{" "}
          <IntLink href="/contact-us">Escríbenos</IntLink> y lo evaluamos
          juntos. Si todavía estás decidiendo qué automatizar primero, te sirve{" "}
          <IntLink href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa">
            qué procesos de SAP se pueden automatizar con RPA
          </IntLink>{" "}
          y{" "}
          <IntLink href="/blog/rpa-vs-desarrollo-a-medida">
            RPA vs desarrollo a medida: cuándo conviene cada uno
          </IntLink>
          .
        </p>
      </section>
    </>
  ),
};
