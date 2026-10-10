import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/como-empezar-un-proyecto-de-automatizacion/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuánto tarda un primer proyecto de automatización?",
    a: "Para un proceso acotado y bien documentado, de tres a seis semanas desde el inicio hasta que el robot funciona en producción. Los proyectos que se alargan casi siempre empezaron sin medir ni documentar. Ese trabajo se terminó haciendo durante el desarrollo, y en esa etapa es más difícil hacerlo.",
  },
  {
    q: "¿Tengo que documentar el proceso yo antes de contratar?",
    a: "No hace falta un manual formal. Basta con que puedas describir los pasos y, sobre todo, las tres o cuatro situaciones excepcionales que se dan de vez en cuando. Ese trabajo también lo podemos hacer juntos en el diagnóstico, aunque cuanto más claro lo traigas, más rápido y barato sale el resto.",
  },
  {
    q: "¿Conviene empezar con un proceso pequeño o con el que más duele?",
    a: "En la mayoría de los casos conviene que el primero sea pequeño y estable. El que más duele suele traer más excepciones y cambios. Empezar por ahí es la forma más común de que la dirección concluya que \"el RPA no sirve\", cuando lo que falló fue el orden en que se eligieron los procesos.",
  },
  {
    q: "¿Necesito un área de TI para empezar?",
    a: "Para construir el robot, no. Lo que sí necesitas es una persona, aunque no tenga perfil técnico, que revise que el robot se ejecutó y avise si falla. Es un rol que cuesta poco cubrir y que con frecuencia se pasa por alto.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-empezar-un-proyecto-de-automatizacion";

export const post = {
  slug,
  locale: "es",
  title: "Cómo empezar un proyecto de automatización (guía para gerentes)",
  description:
    "Cómo empezar un proyecto de automatización: elige el primer proceso, mide cómo se hace hoy y confirma si RPA es la herramienta correcta antes de cotizar.",
  keywords: [
    "cómo empezar un proyecto de automatización",
    "por dónde empezar RPA",
    "guía RPA para gerentes",
    "primer proyecto de automatización",
    "cómo automatizar un proceso en la empresa",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-11",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-empezar-un-proyecto-de-automatizacion/header.jpeg",
    alt: "Cómo empezar un proyecto de automatización (guía para gerentes)",
  },
  faq: faqs,
  cta: {
    titulo: "Revisamos tu primer proceso",
    texto:
      "Si tienes un proceso en mente y no sabes si es el correcto para empezar, lo revisamos sin costo. Te decimos si conviene automatizarlo ahora, esperar o resolverlo con algo más simple que un robot.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo documentar un proceso antes de automatizarlo",
    linkUrl: "/blog/como-documentar-un-proceso-antes-de-automatizarlo",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Los gerentes que nos escriben rara vez piden un robot. El mensaje
          suele parecerse a este: &quot;Tengo dos personas que pasan la mañana
          copiando datos de un sistema a otro, y siento que eso debería hacerlo
          una máquina.&quot;
        </p>
        <p className={styles.p}>
          La intuición es correcta. Lo que suele faltar es saber qué hacer, en
          concreto, entre esa idea y un robot funcionando.
        </p>
        <p className={styles.p}>
          Si sospechas que hay algo para automatizar y no sabes por dónde
          empezar, los primeros pasos no son técnicos y puedes darlos sin ayuda.
          Si ya cotizaste y comparas proveedores, probablemente pasaste esta
          etapa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Elegir el primer proceso</h2>
        <p className={styles.p}>
          Antes de hablar con un proveedor, define qué proceso vas a poner sobre
          la mesa. Esa decisión te corresponde, porque nadie conoce el día a día
          del área mejor que quien la dirige.
        </p>
        <p className={styles.p}>
          Busca un proceso que se repita seguido, todos los días o todas las
          semanas, y que se haga casi siempre de la misma forma. El candidato
          ideal, además, toca sistemas que hoy no se comunican entre sí.
        </p>
        <p className={styles.p}>
          Un error frecuente en esta etapa es empezar por el proceso que más
          duele. El que más ruido hace en las reuniones suele ser también el más
          caótico, con cincuenta excepciones y cambios de forma cada cierto
          tiempo.
        </p>
        <p className={styles.p}>
          Para el primer proyecto conviene algo estable, incluso aburrido: una
          tarea que se hace igual desde hace un año y que nadie planea cambiar.
          Un robot así entra rápido en producción y muestra el retorno pronto.
          Eso te da la confianza interna que vas a necesitar cuando toque
          abordar los procesos difíciles. Empezar por el proceso equivocado
          figura entre los{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Medir cómo se hace hoy</h2>
        <p className={styles.p}>
          Si empiezas el proyecto sin registrar cuánto tarda el proceso a mano y
          cada cuánto se ejecuta, cuando el robot esté funcionando no podrás
          demostrar que la inversión se justificó. Un &quot;ahora es más
          rápido&quot; no convence a quien tiene que aprobar el presupuesto del
          próximo año.
        </p>
        <p className={styles.p}>
          Necesitas pocos datos: cuántas horas a la semana se le dedican y
          cuántas veces al mes se ejecuta. Si hay errores humanos que obligan a
          reprocesar, anota también con qué frecuencia ocurren. Con eso el
          retorno se calcula casi solo, y el próximo proyecto se puede
          justificar en una reunión de diez minutos en vez de tener que defender
          su presupuesto desde cero. Cómo se traducen esas horas en dinero lo
          explicamos en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Confirmar que el proceso esté estable</h2>
        <p className={styles.p}>
          A veces lo mejor es esperar, aunque el problema sea real. Pasa cuando
          el proceso todavía cambia de forma cada dos o tres semanas porque el
          negocio está ajustando cómo lo hace. Si construyes un robot sobre algo
          que no se ha estabilizado, vas a tener que reconfigurarlo una y otra
          vez, y ese mantenimiento termina comiéndose el ahorro.
        </p>
        <p className={styles.p}>
          Hay una prueba sencilla para saber si un proceso está listo: intenta
          escribir sus pasos exactos, con sus excepciones, en una sola página.
          Si en cada línea aparece un &quot;depende&quot;, todavía no lo está.
          En ese caso, documéntalo, déjalo funcionar así un par de meses y
          automatízalo cuando deje de cambiar.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Decidir si RPA es la herramienta correcta antes de cotizar
        </h2>
        <p className={styles.p}>
          No todo proceso repetitivo necesita un robot RPA. Si el sistema ya
          tiene una API, una integración directa suele resolver el problema.
          Muchos traspasos de datos también se pueden automatizar sin código con
          n8n. Para leer información y decidir con criterio, rinde mejor un
          agente de IA. Esas alternativas casi siempre cuestan menos y piden
          menos mantenimiento que un robot tradicional.
        </p>
        <p className={styles.p}>
          RPA sigue siendo lo más confiable si el sistema no tiene API, la
          interfaz es estable y el proceso se repite miles de veces de forma
          idéntica. Revisamos cada caso con más detalle en el artículo sobre <PostLink slug="cuando-no-conviene-automatizar-un-proceso">cuándo no conviene automatizar un proceso</PostLink>.
        </p>
        <p className={styles.p}>
          Esta conversación hay que tenerla de entrada, antes de firmar. Si un
          proveedor te cotiza un robot sin preguntar si el sistema tiene API,
          probablemente te está ofreciendo la herramienta que domina sin haber
          evaluado si es la que tu proceso necesita. Ampliamos la comparación
          en{" "}
          <IntLink href="/blog/rpa-vs-desarrollo-a-medida">
            RPA vs desarrollo a medida
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Elegir proveedor y revisar la propuesta</h2>
        <p className={styles.p}>
          Con el proceso elegido y medido, ahora sí tiene sentido buscar quién
          lo construya. Más allá del precio y el portafolio, hay dos señales que
          anticipan cómo va a envejecer el robot. Un buen proveedor insiste en
          documentar las excepciones antes de escribir una línea de código,
          aunque eso encarezca la primera cotización. También te muestra cómo
          maneja las fallas del robot, porque en algún momento va a fallar.
        </p>
        <p className={styles.p}>
          En los robots que construimos con Rocketbot, cada paso crítico tiene
          control de errores. Si algo se rompe, el robot registra en un log qué
          estaba haciendo, guarda una captura de pantalla del momento exacto y
          avisa a un responsable en lugar de quedarse detenido en silencio.
          Quien recibe el aviso sabe en dos minutos qué pasó.
        </p>
        <p className={styles.p}>
          En una demo no se distingue un robot con control de errores de uno sin
          él. El segundo puede llevar detenido desde el jueves sin que nadie lo
          note, hasta que contabilidad pregunta por qué no se ingresaron las
          facturas. Los demás criterios para elegir proveedor los detallamos en el artículo sobre <PostLink slug="como-elegir-un-partner-de-rpa-en-latam">cómo elegir un partner de RPA en LatAm</PostLink>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Asignar un responsable antes de la entrega</h2>
        <p className={styles.p}>
          Un robot en producción necesita que alguien confirme periódicamente
          que se ejecutó, lea el reporte de ejecución y avise si algo se ve
          raro. Para ese rol no hace falta un perfil técnico ni contratar a
          nadie. Basta con una persona de operaciones que sepa leer un reporte y
          a quién escribir si hay un problema.
        </p>
        <p className={styles.p}>
          Como gerente, te toca nombrar a esa persona antes de la entrega. Si
          nadie tiene asignado ese rol, alguien lo va a tener que improvisar el
          día del primer error.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Resumen de los pasos</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>Elige el proceso.</li>
          <li className={styles.li}>Mide cómo se hace hoy.</li>
          <li className={styles.li}>Confirma que esté estable.</li>
          <li className={styles.li}>Decide si RPA es la herramienta correcta.</li>
          <li className={styles.li}>Elige quién lo va a construir.</li>
          <li className={styles.li}>Deja asignado quién lo va a cuidar.</li>
        </ol>
        <p className={styles.p}>
          Los tres primeros pasos los haces tú, sin proveedor, y son los que más
          influyen en el resultado del proyecto.
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
            <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
              Cuánto cuesta automatizar un proceso
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/errores-comunes-al-implementar-rpa">
              Errores comunes al implementar RPA
            </IntLink>
          </li>
          <li className={styles.li}><PostLink slug="como-elegir-un-partner-de-rpa-en-latam">Cómo elegir un partner de RPA en LatAm</PostLink></li>
        </ul>
      </section>
    </>
  ),
};
