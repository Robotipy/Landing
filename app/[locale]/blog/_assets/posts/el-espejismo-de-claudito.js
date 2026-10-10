import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/el-espejismo-de-claudito/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Entonces le quito Claude a mi equipo?",
    a: "No. Que la gente use bien una herramienta de lenguaje natural para su propio trabajo es lo mejor que le puede pasar hoy a un área administrativa. El error está en confundir eso con un proceso automatizado y planificar el año como si lo tuvieras.",
  },
  {
    q: "¿Cómo sé si mi caso es \"una persona con una herramienta\" o \"un proceso de empresa\"?",
    a: "Hay una pregunta que ordena casi todos los casos: si mañana esa persona se toma dos semanas de vacaciones, ¿qué pasa con la tarea? Si no pasa nada porque es parte de su trabajo personal, estás en el primer caso y no necesitas más. Si otra persona tiene que hacerla sin saber bien cómo, o si otra área usa el resultado sin revisarlo, ya es un proceso de la empresa aunque nadie lo haya declarado. Ahí el resorte hace daño de verdad, porque cuando salta se enteran tres áreas y puede quedar una factura mal emitida.",
  },
  {
    q: "¿El efecto resorte no es resistencia al cambio?",
    a: "Son cosas distintas. La resistencia al cambio aparece cuando la persona ni siquiera quiere probar. Con el resorte, la persona ya probó la herramienta y le gustó, hasta que una vez la decepcionó. Tiene su propia evidencia, y por eso cuesta más revertirlo.",
  },
  {
    q: "¿Ustedes venden IA o venden RPA?",
    a: "Vendemos procesos que siguen funcionando cuando nadie los mira. La tecnología depende del caso, y la elegimos después de analizar el proceso.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
  quote: "border-l-4 border-accent/60 bg-white/5 px-5 py-3 text-white/85",
};

const slug = "el-espejismo-de-claudito";

export const post = {
  slug,
  locale: "es",
  title: "El espejismo de Claudito: por qué tu equipo va a volver a hacerlo a mano",
  description:
    "Automatizar con Claude funciona para una persona y por eso engaña: pasó antes con las macros de Excel y con SAP. Lo que falla es el diseño del proceso.",
  keywords: [
    "automatizar con Claude",
    "automatizar empresa con IA",
    "por qué falla la automatización con IA",
    "IA en pymes",
    "adopción de inteligencia artificial en empresas",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.IvanCabrera),
  publishedAt: "2026-10-29",
  image: {
    src: thumbnail,
    urlRelative: "/blog/el-espejismo-de-claudito/header.jpeg",
    alt: "El espejismo de Claudito: por qué tu equipo va a volver a hacerlo a mano",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tu equipo automatiza por su cuenta y los resultados no son consistentes?",
    texto:
      "Cuéntanos cómo funciona hoy tu proceso. Lo revisamos sin costo y te decimos qué parte conviene automatizar y con qué tecnología. A veces la recomendación es dejarlo como está.",
    botonLabel: "Hablemos de tu proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cuándo NO conviene automatizar un proceso",
    linkUrl: "/blog/cuando-no-conviene-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Llevo más de treinta años recorriendo los pasillos de grandes
          empresas. Fui gerente de sistemas y lideré migraciones enormes. En ese
          tiempo vi pasar varias olas de herramientas que prometían ser la
          solución definitiva.
        </p>
        <p className={styles.p}>
          Conocí directores convencidos de que SAP iba a ordenar sus problemas
          de stock, y gerentes que creían que un curso de Excel avanzado
          convertiría su administración en la NASA. La herramienta se instalaba
          y se pagaba la licencia. Al primer reporte que no cuadraba, el usuario
          volvía al cuaderno o al correo manual, con la frase de siempre: "lo
          hago yo porque el sistema no funciona".
        </p>
        <p className={styles.p}>
          Hoy el fenómeno tiene otro nombre. En varias empresas que visito,
          alguien del equipo le dice Claudito, en diminutivo y con cariño, como a
          un compañero que sale del paso. Ese apodo me anticipa lo que va a
          pasar mejor que cualquier diagnóstico técnico.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Claudito funciona en el trabajo individual</h2>
        <p className={styles.p}>
          Aquí me separo de la mayoría de mis colegas, que llevan meses diciendo
          que la IA todavía no está lista. Yo creo que ya está lista para el
          trabajo individual.
        </p>
        <p className={styles.p}>
          Una persona que aprendió a usar bien una herramienta de lenguaje
          natural resuelve en veinte minutos lo que antes le tomaba media
          mañana. Redacta, ordena datos sueltos, revisa un texto largo o prepara
          el borrador de un análisis. Lo veo funcionar todos los días, y por{" "}
          <strong className={styles.strong}>veinte dólares al mes</strong> es
          probablemente la mejor relación entre precio y resultado que he visto
          en mi carrera.
        </p>
        <p className={styles.p}>
          Si haces tu propia tarea y un error se detecta al leerla sin costarle
          nada a nadie, no necesitas llamarnos. Tampoco un proyecto con
          gobernanza ni consultores. Te basta con la suscripción y algo de
          práctica. Cualquiera que te diga lo contrario te está vendiendo algo.
        </p>
        <p className={styles.p}>
          El espejismo empieza después, cuando lo que funcionó para una persona
          se confunde con algo capaz de sostener un proceso de la empresa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El efecto resorte</h2>
        <p className={styles.p}>
          La forma en que la gente reacciona cuando un sistema le falla no ha
          cambiado en treinta años. Todo proceso automatizado falla alguna vez,
          y cuando pasa se activa lo que llamo el efecto resorte. El usuario se
          frustra y vuelve a hacerlo a mano. Hace décadas que escucho la misma
          frase en ese momento:
        </p>
        <blockquote className={ui.quote}>
          "¿Ves? Te dije que este robotito no servía. Al final tardo menos
          haciéndolo yo."
        </blockquote>
        <p className={styles.p}>
          La escuché con las macros de Excel en 1998, con los flujos de SAP en
          2010 y ahora con Claudito.
        </p>
        <p className={styles.p}>
          El resorte salta por cosas menores, un martes cualquiera. La IA se
          equivoca en un dato o el prompt da otro resultado porque lo escribió
          otra persona. A veces la respuesta parece correcta y nadie nota el
          error hasta dos semanas después. La tarea vuelve a ser manual y el
          equipo queda desconfiado. La próxima herramienta que le presentes va a
          ser mejor, y aun así la van a mirar con recelo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Qué cambia cuando la tarea pasa a ser un proceso de la empresa
        </h2>
        <p className={styles.p}>
          Mientras la tarea es de una persona y ella misma la revisa, el error no
          tiene costo. Cuando ese trabajo alimenta una factura o un dato que otra
          área usa sin revisar, aparecen preguntas que antes nadie se hacía.
        </p>
        <p className={styles.p}>
          Para resolver rápido, alguien pega balances, información fiscal y
          facturas de clientes en una web pública. Nadie lo decidió, pero esos
          datos ya salieron de la empresa.
        </p>
        <p className={styles.p}>
          El registro es otro problema. Si la IA procesó algo y se equivocó,
          ¿dónde queda constancia de lo que recibió y lo que devolvió, y en qué
          momento? Sin esa traza, cuando un número no cuadra no hay forma de
          auditar qué pasó y todo termina en una discusión sobre quién recuerda
          qué.
        </p>
        <p className={styles.p}>
          En mantenimiento, basta con que se actualice una pantalla o cambie un
          procedimiento del área para que algo deje de funcionar. Si se rompe un
          martes de madrugada, alguien tiene que arreglarlo, y no va a ser el
          administrativo de cuentas por cobrar. Tiene su propio trabajo y además
          es quien va a activar el resorte cuando se canse.
        </p>
        <p className={styles.p}>
          Una suscripción mejor no resuelve nada de esto. Son las mismas
          preguntas que nos hacíamos con SAP y con las macros, y la respuesta
          sigue siendo diseñar el proceso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo trabajamos en Robotipy</h2>
        <p className={styles.p}>
          En Robotipy no nos casamos con una tecnología en particular. Usamos
          Python, RPA con Rocketbot, agentes de IA o lo que pida el problema.
          Con frecuencia la solución es más simple y barata de lo que el cliente
          esperaba. Escribimos sobre eso en{" "}
          <IntLink href="/blog/cuando-no-conviene-automatizar-un-proceso">
            cuándo NO conviene automatizar un proceso
          </IntLink>
          , y en{" "}
          <IntLink href="/blog/rpa-vs-ia-agentica">RPA vs IA Agéntica</IntLink>{" "}
          comparamos las dos familias de solución.
        </p>
        <p className={styles.p}>
          Antes de escribir código entendemos el proceso y decidimos qué parte
          tiene que ser determinística y qué parte puede razonar. También
          dejamos a alguien del lado del cliente capaz de leer un reporte de
          ejecución sin llamarnos.
        </p>
        <p className={styles.p}>
          Si tu estrategia de automatización depende de que tus empleados tengan
          ganas de chatear con la IA todos los días, todavía no tienes un
          proceso automatizado, y la tarea va a volver a lo manual la primera
          semana que el trabajo se complique.
        </p>
        <p className={styles.p}>
          Claudito es una herramienta excelente, pero alguien de la empresa
          tiene que decidir qué procesos se automatizan y quién los mantiene.
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
            <IntLink href="/blog/cuando-no-conviene-automatizar-un-proceso">
              Cuándo NO conviene automatizar un proceso
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/como-empezar-un-proyecto-de-automatizacion">
              Cómo empezar un proyecto de automatización
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/errores-comunes-al-implementar-rpa">
              Errores comunes al implementar RPA
            </IntLink>
          </li>
        </ul>
      </section>
    </>
  ),
};
