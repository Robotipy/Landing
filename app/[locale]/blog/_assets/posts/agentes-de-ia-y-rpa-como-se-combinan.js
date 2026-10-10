import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/agentes-de-ia-y-rpa-como-se-combinan/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Un agente de IA puede reemplazar completamente a un robot RPA?",
    a: "Todavía no, al menos para operar sistemas con pantallas fijas de forma repetible. Si un ERP se usa quinientas veces al día, cada ejecución tiene que seguir el mismo camino. Un agente se orienta en la interfaz con flexibilidad, y por eso dos ejecuciones del mismo caso no siempre toman la misma ruta.",
  },
  {
    q: "¿Qué pasa si el modelo cambia de versión y empieza a responder distinto?",
    a: "Es un riesgo real y otra razón para no dejarlo decidir solo. El umbral de confianza y la validación humana absorben buena parte del problema. Si el modelo empieza a fallar más, sube el volumen que se deriva a revisión, y eso aparece en las métricas antes de convertirse en un error silencioso en el sistema destino.",
  },
  {
    q: "¿Esto encarece mucho el proyecto respecto de un robot RPA tradicional?",
    a: "Depende sobre todo de cuántos puntos de interpretación tenga el proceso. Un robot con un único paso de clasificación agrega poco sobre el costo base que explicamos en cuánto cuesta automatizar un proceso. Lo que sube el costo es diseñar y calibrar el umbral y el circuito de revisión humana, un trabajo que de todos modos hay que hacer para que el resultado sea confiable.",
  },
  {
    q: "¿Se puede usar cualquier modelo de IA para esto?",
    a: "Técnicamente sirve casi cualquiera que reciba texto y devuelva una respuesta. Lo recomendable es fijar el modelo desde el inicio y no cambiarlo a mitad de proyecto. Un umbral calibrado con un modelo no se traslada directamente a otro, porque cada uno tiene sus propios sesgos al expresar qué tan seguro está de una respuesta.",
  },
  {
    q: "¿Esto es lo mismo que \"agentic AI\" o \"agentes autónomos\"?",
    a: "No exactamente. Aquí describimos un modelo que interpreta un dato puntual dentro de un flujo que el robot sigue controlando paso a paso. Un agente autónomo, en el sentido que ha tomado el término últimamente, encadena varias decisiones y acciones por su cuenta sin que una persona revise cada tramo. Eso todavía lo manejamos con mucho más cuidado, solo en pasos acotados y nunca en un proceso completo.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "agentes-de-ia-y-rpa-como-se-combinan";

export const post = {
  slug,
  locale: "es",
  title: "Agentes de IA y RPA: cómo se combinan en un proceso real",
  description:
    "Cómo combinar agentes de IA y RPA en un mismo proceso: en qué punto entra el modelo dentro de un robot Rocketbot y qué decisiones no conviene delegarle.",
  keywords: [
    "agentes de IA y RPA",
    "combinar RPA con inteligencia artificial",
    "diferencia entre RPA y agente de IA",
    "automatización con IA para procesos",
    "cuándo usar un agente de IA en un robot",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-15",
  image: {
    src: thumbnail,
    urlRelative: "/blog/agentes-de-ia-y-rpa-como-se-combinan/header.jpeg",
    alt: "Agentes de IA y RPA: cómo se combinan en un proceso real",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes un proceso detenido porque la información llega sin estructura?",
    texto:
      "Cuéntanos qué dato te llega sin formato fijo y evaluamos si un agente dentro del robot resuelve el cuello de botella o si basta con una regla más simple.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "IDP: procesamiento inteligente de documentos",
    linkUrl: "/blog/idp-procesamiento-inteligente-de-documentos",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En casi todas las llamadas comerciales de los últimos meses aparece
          alguna versión de la misma duda. Si ya existen agentes de IA que
          entienden lenguaje natural y pueden tomar decisiones, el cliente
          quiere saber para qué seguir construyendo robots con pasos fijos. Es
          una inquietud lógica para quien todavía no ha visto un proyecto por
          dentro. En la práctica casi nunca hay que elegir entre uno y otro,
          porque cada uno resuelve un problema distinto y la mayoría de los
          procesos que automatizamos terminan usando los dos.
        </p>
        <p className={styles.p}>
          Ya hemos aplicado esta combinación en varios proyectos, aunque sin
          llamarla así. El robot se apoya en un modelo para leer un documento
          poco común o clasificar algo que no tiene formato fijo, y después
          continúa con la parte determinística del proceso. Ahora existen
          herramientas que permiten construirla de forma repetible, sin partir
          de cero en cada caso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Diferencia entre un robot RPA y un agente de IA</h2>
        <p className={styles.p}>
          Un robot RPA ejecuta pasos definidos, siempre en el mismo orden, y por
          eso se usa en tareas repetitivas de alto volumen sobre sistemas con
          pantallas o APIs estables. Abre SAP, completa un campo, guarda y pasa
          al siguiente registro. No tiene margen para interpretar: si encuentra
          algo que no coincide con lo esperado, se detiene o entra en una
          excepción.
        </p>
        <p className={styles.p}>
          El agente de IA trabaja con entradas ambiguas, como un mensaje, un
          párrafo suelto de un documento o una consulta que alguien redactó con
          sus propias palabras. Devuelve una interpretación, por ejemplo qué
          tipo de solicitud es y en qué categoría cae, o qué campo representa
          probablemente un número que llegó sin etiqueta. Esa interpretación
          viene con un nivel de confianza. La acción en el sistema destino queda
          a cargo de otra pieza del proceso.
        </p>
        <p className={styles.p}>
          Un error frecuente en proyectos iniciados sin asesoría es tratar al
          agente como reemplazo del robot completo. El resultado es un modelo
          que hace clic en pantallas siguiendo instrucciones en lenguaje
          natural. Es técnicamente posible, pero frágil. En una tarea que se
          repite igual miles de veces, cada ejecución puede razonar un camino
          distinto para el mismo caso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo se conecta el agente dentro de un robot Rocketbot</h2>
        <p className={styles.p}>
          Construimos sobre Rocketbot, donde el agente es un paso más del flujo
          y participa una sola vez, en el punto donde hace falta criterio.
          Cuando el robot llega a ese punto, porque tiene que interpretar un
          correo, un campo de un PDF o una descripción libre, invoca un módulo
          de IA con un prompt construido a partir de las variables del proceso.
          Según el proyecto usamos Gemini o AiStudio. La respuesta vuelve como
          texto o como campo estructurado y queda guardada en una variable,
          igual que cualquier otro dato que maneja el robot.
        </p>
        <p className={styles.p}>
          Desde ahí el robot vuelve a ser tan determinístico como cualquiera de
          los que documentamos en este blog. Un <code>evaluateIf</code> lee esa
          variable para elegir la rama. Si hay un lote que procesar, lo recorre
          un <code>for</code>, y los errores quedan contenidos en un{" "}
          <code>trycatch</code>.
        </p>
        <p className={styles.p}>
          Es la misma arquitectura que describimos para el{" "}
          <IntLink href="/blog/idp-procesamiento-inteligente-de-documentos">
            procesamiento inteligente de documentos
          </IntLink>
          , con el agente dentro del robot: el modelo (Gemini o el AI Studio de Rocketbot, según el proyecto) lee el PDF y entrega los campos, y el robot los valida y los carga. Un agente que clasifica texto libre sigue el mismo patrón con otro tipo de entrada. Cuando el agente conversa directamente con personas, por WhatsApp, correo o chat, usamos Melon Help, nuestra plataforma de agentes de IA, y el robot ejecuta en los sistemas lo que el agente resolvió.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Ejemplo: clasificar solicitudes que llegan por correo</h2>
        <p className={styles.p}>
          Pensemos en un robot que procesa solicitudes recibidas por correo.
          Algunas llegan con asunto libre, sin ningún campo estructurado que
          indique de qué se tratan, y no existe una regla fija a la que el robot
          pueda mapearlas. Sin un modelo, esa entrada queda fuera de su alcance.
          Alguien tiene que clasificar cada correo a mano antes de que el
          proceso automatizado pueda empezar.
        </p>
        <p className={styles.p}>
          Con el agente incorporado, el robot le envía al modelo el asunto y el
          cuerpo del correo, y le pide una de las categorías que el proceso ya
          conoce junto con un nivel de confianza. Si la confianza supera el
          umbral acordado con el cliente, el robot sigue solo por la rama de esa
          categoría. Si queda por debajo, no fuerza una decisión y deriva el
          correo a una persona con la categoría sugerida ya marcada. Esa persona
          confirma en segundos en lugar de leer todo desde cero. Su corrección
          queda registrada para revisar más adelante si conviene ajustar el
          umbral.
        </p>
        <p className={styles.p}>
          Ese umbral se calibra con los primeros lotes reales de cada cliente,
          porque el nivel de ambigüedad de una &quot;solicitud de cambio de
          dirección&quot; varía de una empresa a otra.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Decisiones que no le delegamos al modelo</h2>
        <p className={styles.p}>
          En todos los proyectos donde participa un agente mantenemos una regla
          fija, sin importar la presión de plazo o de presupuesto. El modelo
          interpreta y clasifica, y con eso entrega una lectura inicial. Las
          decisiones de negocio las firma una persona: autorizar pagos, aprobar
          montos, elegir qué factura se paga y cuál se rechaza, o cerrar un
          reclamo a favor o en contra del cliente. El robot ejecuta lo que esa
          persona confirmó y nunca actúa solo con la sugerencia del modelo.
        </p>
        <p className={styles.p}>
          Un modelo de lenguaje puede sostener una interpretación equivocada con
          la misma seguridad que una correcta. En decisiones con consecuencias
          legales o financieras directas, esa seguridad aparente es un riesgo
          serio. Sus errores, además, cambian de un caso a otro. Una regla mal
          escrita en un robot falla siempre igual y se audita con facilidad.
          Detectar una interpretación equivocada antes de que llegue al sistema
          destino cuesta bastante más.
        </p>
        <p className={styles.p}>
          Definir quién puede decidir qué, y quién solo ejecuta lo que otro
          autorizó, es el mismo ejercicio que hicimos con credenciales y cuentas de servicio en el artículo sobre <PostLink slug="seguridad-y-gobierno-en-proyectos-de-rpa">seguridad y gobierno en proyectos de RPA</PostLink>. En este caso
          lo aplicamos al modelo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo no hace falta un agente</h2>
        <p className={styles.p}>
          Muchos procesos que parecen requerir IA se resuelven sin ella. Puede
          que la entrada ya traiga un campo fijo con el tipo de solicitud, o que
          los casos ambiguos sean tan pocos que una persona los separa en cinco
          minutos a la semana. En esos escenarios basta con RPA puro, que es más
          barato de construir y no tiene el costo recurrente de las llamadas al
          modelo. Un agente solo sumaría mantenimiento (prompts que hay que
          revisar, respuestas que pueden variar entre versiones del modelo) para
          un problema que una regla simple ya resolvía.
        </p>
        <p className={styles.p}>
          Antes de proponer un agente preguntamos si el dato que necesita el
          proceso llega como texto libre, sin estructura. Cuando la respuesta es
          sí, el agente empieza a justificarse, siempre que el volumen alcance
          para pagar el flujo completo con su validación humana. Esa pregunta la
          hacemos temprano, cuando se decide <PostLink slug="como-priorizar-que-procesos-automatizar">qué procesos automatizar primero</PostLink>.
          Un candidato con entrada ambigua sigue en la lista, aunque la
          respuesta cambia el tipo de proyecto que hay que diseñar.
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
            <IntLink href="/blog/idp-procesamiento-inteligente-de-documentos">
              IDP: procesamiento inteligente de documentos
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
              Cuánto cuesta automatizar un proceso
            </IntLink>
          </li>
        </ul>
      </section>
    </>
  ),
};
