import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-documentar-un-proceso-antes-de-automatizarlo/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuánto tiempo toma documentar bien un proceso?",
    a: "En un proceso de esta complejidad, dos sesiones de una a dos horas con el usuario que lo ejecuta, más el trabajo de escritura entre medio. Repartido en una semana y media de calendario, porque el tiempo entre sesiones es parte del método: es cuando aparecen las contradicciones.",
  },
  {
    q: "¿No alcanza con grabar la pantalla y que el desarrollador mire el video?",
    a: "No, aunque el video es obligatorio. En este proyecto teníamos dos videos del proceso y se contradecían entre sí en un punto central: uno sugería que había un solo objeto de carga en SAP y el otro que había dos. La respuesta correcta (son dos, secuenciales) se confirmó recién preguntando. Un video muestra una ejecución, y una ejecución es un caso de los muchos que el robot va a tener que resolver.",
  },
  {
    q: "¿Quién escribe el documento, el cliente o el proveedor?",
    a: "Lo escribimos nosotros, porque el documento tiene que quedar en un formato que el desarrollador pueda ejecutar. Pero el contenido no lo tenemos: lo tiene quien hace la tarea. Cuando un proveedor te entrega un relevamiento sin haber visto el proceso corriendo, lo que te está entregando es una plantilla con el nombre de tu empresa arriba.",
  },
  {
    q: "Mi proceso es mucho más simple que este. ¿Necesito todo esto?",
    a: "Probablemente no. Si el proceso toca un solo sistema, tiene menos de diez campos y una sola persona lo ejecuta siempre igual, una página bien escrita y una grabación alcanzan para arrancar. Este nivel de detalle se justifica cuando hay varios sistemas encadenados, reglas de negocio que no están escritas en ningún lado y un volumen donde un error se multiplica por cientos de registros. Documentar de más un proceso chico es una forma cara de postergar el desarrollo.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-documentar-un-proceso-antes-de-automatizarlo";

export const post = {
  slug,
  locale: "es",
  title: "Cómo documentar un proceso antes de automatizarlo",
  description:
    "Qué le pasó de verdad al documento de un proceso SAP entre el kick-off y el desarrollo, y qué conviene capturar para que el robot no se construya dos veces.",
  keywords: [
    "cómo documentar un proceso antes de automatizarlo",
    "documentación de procesos RPA",
    "PDD automatización",
    "relevamiento de procesos SAP",
    "documentar proceso para robot",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.tutoriales),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-19",
  image: {
    src: thumbnail,
    urlRelative:
      "/blog/como-documentar-un-proceso-antes-de-automatizarlo/header.jpeg",
    alt: "Cómo documentar un proceso antes de automatizarlo",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes un proceso relevado y quieres saber si es automatizable?",
    texto: "Escríbenos y lo revisamos: te decimos qué falta capturar antes de escribir una sola línea del robot.",
    botonLabel: "Escríbenos",
    botonUrl: "/contact-us",
    linkLabel: "Qué procesos de SAP automatizar",
    linkUrl: "/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Al kick-off de un proyecto de creación masiva de materiales en SAP
          llegamos con el proceso escrito en siete pasos. No lo improvisamos:
          veníamos de ver los videos del proceso grabados por el cliente, y lo
          pusimos en la pantalla para que el jefe de área y el analista que
          ejecuta la tarea lo validaran. El paso 3 decía esto:
        </p>
        <blockquote className="border-l-4 border-accent/60 bg-white/5 px-5 py-3 text-white/85 italic">
          Jerarquía SAP: buscar un repuesto de la misma marca para copiar el
          código de jerarquía (8 dígitos).
        </blockquote>
        <p className={styles.p}>
          Una línea. Todos asintieron. Doce semanas después ese paso es el módulo
          más complejo del robot, y del número "8 dígitos" no quedó nada: en la
          primera sesión de discovery apareció como un código de 18 caracteres, en
          la segunda como uno de 9. Tres largos distintos para el mismo campo,
          reportados por la misma gente, con dos semanas de diferencia.
        </p>
        <p className={styles.p}>
          Ese es el tema de este artículo. No las secciones que debe tener un
          documento de proceso, que están en cualquier plantilla, sino qué es lo
          que se rompe cuando lo escribes y cómo aprovecharlo antes de que se
          convierta en horas de desarrollo.
        </p>
        <p className={styles.p}>
          Aclaración: el cliente es una empresa chilena de arriendo y gestión de
          flota de vehículos. No la nombro porque el bot todavía está en
          desarrollo y el caso completo se publica cuando esté en producción. Los
          datos del proceso son los reales.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Los campos que "todos saben" son los que nadie sabe</h2>
        <p className={styles.p}>
          La jerarquía de producto no era un campo exótico. Es un dato que el
          analista carga todos los días, varias veces por día, desde hace años.
          Por eso nadie lo cuestionó en el kick-off, y por eso mismo nadie lo
          había mirado nunca con atención: cuando una persona hace algo a mano,
          copia y pega el código sin contar los caracteres. El largo del campo
          simplemente no es información que necesite para trabajar.
        </p>
        <p className={styles.p}>
          Un robot sí la necesita. Y la única manera de conseguirla fue ir a mirar
          la tabla de SAP directamente, en lugar de seguir preguntando.
        </p>
        <p className={styles.p}>
          De ahí sale la primera regla práctica que aplicamos ahora en todo
          relevamiento: cuando un dato aparece descrito de tres formas distintas
          en tres fuentes, deja de preguntar y ve a mirar el sistema. La
          documentación se cierra contra el sistema, no contra el consenso de la
          reunión. Y si el acceso al sistema todavía no está habilitado, ese campo
          queda marcado como pendiente explícito en el documento, no resuelto con
          el promedio de las tres versiones.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>"Se cargan tres repuestos" son 285 registros</h2>
        <p className={styles.p}>
          El paso 5 del flujo original mencionaba, casi al pasar, que el analista
          pega los datos en una base de datos intermedia, aprieta un botón de
          actualizar y de ahí sale el archivo de carga. Con tres repuestos de
          ejemplo, ese paso devolvía 285 registros.
        </p>
        <p className={styles.p}>
          La multiplicación estaba en un lugar que nadie describe porque no es un
          paso, es una consecuencia: cada material hay que crearlo en unos 20
          centros y extenderlo a unos 70 almacenes. El analista no piensa en eso,
          aprieta un botón. Para el robot es la diferencia entre escribir un
          archivo y escribir dos, con dos objetos de carga distintos que corren en
          secuencia.
        </p>
        <p className={styles.p}>
          Cuando un proceso tiene un paso donde alguien aprieta un botón y sale
          algo más grande de lo que entró, ahí hay un multiplicador que hay que
          documentar con número: cuántas filas entran, cuántas salen, y de qué
          depende esa expansión. Es el dato que más cambia el diseño técnico y el
          que más veces vi omitido, incluso en documentos de proceso hechos con
          cuidado.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Un documento sin contradicciones es un documento que nadie leyó</h2>
        <p className={styles.p}>
          Después de la segunda sesión, la especificación quedó con una sección
          incómoda al final: seis contradicciones contra las fuentes anteriores.
          El tipo de material aparecía como un valor que en realidad era el código
          de un centro. El programa de carga figuraba con dos nombres distintos
          según el acta. La clase de valoración tenía un valor fijo en un documento
          y tres valores posibles en otro.
        </p>
        <p className={styles.p}>
          El relevamiento estaba haciendo su trabajo justamente ahí. Cada una de
          esas seis líneas es una pregunta que se resolvió con el cliente en diez
          minutos, y cada una de ellas, sin escribir, habría sido un error en
          producción con SAP rechazando una carga de 2.000 registros y alguien
          revisando línea por línea qué pasó.
        </p>
        <p className={styles.p}>
          Por eso pido que la sección de contradicciones exista formalmente en el
          documento y sobreviva a la revisión. Hay una tendencia natural, sobre
          todo cuando el documento va a firma, a entregar una versión pulida donde
          todo cierra. Un documento donde todo cierra en la primera vuelta es casi
          siempre un documento donde nadie contrastó las fuentes. Prefiero
          entregar uno con seis cosas marcadas en rojo y resolverlas en una
          reunión.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Lo que se documenta mal siempre: la pantalla</h2>
        <p className={styles.p}>
          Hay una categoría de detalle que no entra en ninguna plantilla de
          relevamiento y que define si el robot funciona. Son las cosas que solo
          existen mientras alguien ejecuta el proceso frente a un sistema real.
        </p>
        <p className={styles.p}>
          En este caso concreto, tres ejemplos de lo que hubo que escribir:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            El paso final de la carga masiva tiene un parámetro que hay que fijar a
            mano en cada corrida. Si ese número no es mayor a la cantidad de
            registros leídos, la carga se corta a la mitad. Con 2.090 registros hay
            que poner 9.999. Ningún manual dice esto, y el analista lo hace de
            memoria.
          </li>
          <li className={styles.li}>
            Antes de que la carga arranque aparecen tres ventanas emergentes
            distintas que hay que confirmar, una de ellas advirtiendo que se está
            trabajando en tiempo real.
          </li>
          <li className={styles.li}>
            El resultado se lee por color. Verde pasó, rojo falló, y para saber por
            qué falló hay que hacer doble clic sobre la línea roja.
          </li>
        </ul>
        <p className={styles.p}>
          Nada de esto sale preguntando "¿cómo es el proceso?". Sale de sentarse al
          lado, grabar la pantalla y transcribir. La grabación es insumo
          obligatorio para nosotros, pero no reemplaza al documento: dentro de dos
          años nadie va a mirar cuarenta minutos de video para entender por qué el
          robot pone 9.999 en un campo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Documentar también significa decidir dónde el robot no decide</h2>
        <p className={styles.p}>
          Este proceso tiene una pausa. Después de armar la planilla y antes de
          ejecutar la carga en SAP, el robot se detiene y espera la revisión del
          analista responsable. Fue una decisión que tomamos en el kick-off, con
          el cliente, y quedó escrita como parte del flujo.
        </p>
        <p className={styles.p}>
          Hace falta decirlo porque la documentación tiende a describir un proceso
          ideal de punta a punta, y después el robot se construye igual de largo.
          Marcar en el documento cuáles son los puntos donde una persona valida,
          quién es esa persona y qué pasa si no valida a tiempo es tan importante
          como los pasos automáticos. En este proyecto, además, hay un criterio de
          filtro que se define en el mismo lugar: solo un tipo de material entra a
          la carga masiva, y todo lo demás (neumáticos, lubricantes, insumos) sale
          del flujo del robot y sigue el camino manual de siempre.
        </p>
        <p className={styles.p}>
          Ese filtro reduce el alcance del robot. También es lo que lo hace
          entregable en el plazo comprometido, y es una conversación que conviene
          tener durante el relevamiento y no durante el desarrollo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo lo hacemos hoy</h2>
        <p className={styles.p}>
          El formato que nos quedó después de varios proyectos es simple y no
          requiere una plantilla corporativa: dos sesiones de relevamiento
          separadas por unos días, con grabación de pantalla, y entre una y otra el
          desarrollador escribe la especificación y aparecen las contradicciones.
          La segunda sesión existe para resolverlas. El documento se cierra recién
          después de esa segunda vuelta, y aun así se marca lo que quedó abierto en
          vez de inventar un valor.
        </p>
        <p className={styles.p}>
          Lo que buscamos con esto no es un entregable bonito. Es que el desarrollo
          empiece con las preguntas caras ya hechas. Cada campo mal documentado se
          paga con una vuelta completa de desarrollo, prueba y corrección, y el
          proceso que estoy contando tiene más de veinte campos con reglas propias.
          Si tu proceso vive sobre SAP, cubrimos qué se puede automatizar en{" "}
          <IntLink href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa">
            qué procesos de SAP se pueden automatizar con RPA
          </IntLink>
          .
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
    </>
  ),
};
