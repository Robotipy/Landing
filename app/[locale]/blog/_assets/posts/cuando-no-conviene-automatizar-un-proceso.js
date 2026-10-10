import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/cuando-no-conviene-automatizar-un-proceso/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Un proceso descartado hoy puede volverse viable más adelante?",
    a: "Sí, y pasa seguido. Un proceso que hoy se descarta por complejidad puede cambiar de categoría cuando el programa de automatización ya resolvió las piezas que comparte con otros robots, como la conexión al ERP, el manejo de credenciales o la lectura de los archivos de entrada. Esa infraestructura se construye una vez y después se reutiliza, de modo que un proceso que hace un año tomaba seis semanas puede tomar dos. Recomendamos revisar la lista de descartes cada seis meses en lugar de borrarla.",
  },
  {
    q: "Mi proceso tiene muchas excepciones. ¿Eso lo descarta?",
    a: "Depende de cuántas son reales y cuántas teóricas. Si pides solo las que ocurrieron el mes pasado, la lista suele quedar en la mitad. Con excepciones acotadas y documentadas, el robot maneja el camino principal y deriva el resto a una persona. Si las excepciones son la mayoría de los casos, el proceso no es buen candidato.",
  },
  {
    q: "¿Conviene automatizar algo que va a cambiar de sistema el año que viene?",
    a: "No.",
  },
  {
    q: "¿Ustedes cobran por decirme que no automatice?",
    a: "No. El diagnóstico previo no tiene costo, sea cual sea la conclusión. Revisamos el proceso y te decimos si conviene automatizarlo ahora, más adelante o nunca. Si la respuesta es no, normalmente el mismo diagnóstico muestra qué otro proceso es mejor candidato.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "cuando-no-conviene-automatizar-un-proceso";

export const post = {
  slug,
  locale: "es",
  title: "Cuándo NO conviene automatizar un proceso",
  description:
    "Cuándo no conviene automatizar un proceso: las señales que nos llevan a recomendar no construir un robot y qué alternativas revisar antes de invertir.",
  keywords: [
    "cuándo no conviene automatizar un proceso",
    "cuándo no usar RPA",
    "límites del RPA",
    "procesos que no se deben automatizar",
    "cuándo no automatizar con robots",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-25",
  image: {
    src: thumbnail,
    urlRelative: "/blog/cuando-no-conviene-automatizar-un-proceso/header.jpeg",
    alt: "Cuándo NO conviene automatizar un proceso",
  },
  faq: faqs,
  cta: {
    titulo: "Evaluemos tu proceso",
    texto:
      "Si no tienes claro si tu proceso justifica un robot, cuéntanos cuál es. Te damos una recomendación concreta y sin costo: automatizarlo, esperar o resolverlo de otra forma.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo priorizar qué procesos automatizar",
    linkUrl: "/blog/como-priorizar-que-procesos-automatizar",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          De cada diez procesos que nos piden cotizar,{" "}
          <strong className={styles.strong}>dos o tres</strong> terminan con la
          recomendación de no automatizarlos. Casi todos se podían construir y
          el robot habría funcionado bien, pero iba a resolver algo que no
          convenía resolver de esa manera. En los artículos sobre RPA se habla
          poco de esto, porque un proyecto descartado no se factura.
        </p>
        <p className={styles.p}>
          Lo escribo igual porque, cuando la decisión es mala, el cliente paga
          dos veces: primero al construir el robot y después al mantenerlo
          durante tres años.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El proceso cambia con frecuencia</h2>
        <p className={styles.p}>
          Alguien explica la tarea y, a mitad de la explicación, dice "bueno,
          ahora lo hacemos así, antes era distinto". Esa frase indica que el
          proceso no está listo. Si cambió de forma dos veces en el último
          trimestre, todavía es un borrador.
        </p>
        <p className={styles.p}>
          Un robot RPA depende de la mecánica exacta del proceso, es decir, en
          qué pantalla y en qué orden se completa cada campo. Si eso cambia, el
          robot deja de servir y hay que pagar para reconfigurarlo. Con cambios
          cada seis semanas, el mantenimiento se come el ahorro antes de que
          termine el primer año.
        </p>
        <p className={styles.p}>
          El contenido, en cambio, puede variar sin problema. Pasar de 300
          facturas un mes a 900 al siguiente no afecta al robot. Si el próximo
          mes esas facturas se cargan en otro sistema, hay que rehacerlo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El volumen es demasiado bajo</h2>
        <p className={styles.p}>
          Hay tareas que la persona a cargo odia, porque son tediosas y es fácil
          equivocarse, y que aun así no justifican un desarrollo. Un proceso
          mensual de veinte registros ocupa quizás dos horas al año de alguien.
          El desarrollo cuesta lo mismo si el robot se ejecuta veinte veces o
          veinte mil, así que con ese volumen la inversión no se recupera.
        </p>
        <p className={styles.p}>
          Esa cuenta conviene hacerla antes de empezar, y la detallamos en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          . En la primera reunión uso un criterio más rápido. Si el proceso no
          ocupa al menos varias horas semanales de alguien, o no evita un error
          que sale caro cuando ocurre, los números no van a cuadrar por buena
          que sea la solución.
        </p>
        <p className={styles.p}>
          Antes de descartar un proceso por pequeño, pregunta si se hace en más
          de un lugar. A veces un volumen bajo esconde uno alto. Cuatro personas
          en cuatro sucursales que dedican "un ratito" a la misma carga pueden
          sumar una jornada completa por semana, y nadie lo nota porque el
          trabajo está repartido.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Hay una alternativa más barata que un robot</h2>
        <p className={styles.p}>
          Si el sistema que hay que operar tiene una API documentada, un robot
          que simula clics resulta más lento y más frágil que una integración
          directa o un flujo en n8n, y por eso cuesta más mantenerlo. Revisa
          también si el proveedor del software ofrece una función de
          importación masiva. Es común que esa función exista y que nadie en la
          empresa la conozca.
        </p>
        <p className={styles.p}>
          Otro caso es el trabajo que consiste en leer documentos desordenados y
          decidir con criterio qué hacer con cada uno. Ahí un agente de IA rinde
          mucho mejor que un robot RPA tradicional, que no está pensado para
          eso. Lo comparamos en detalle en{" "}
          <IntLink href="/blog/rpa-vs-ia-agentica">RPA vs IA Agéntica</IntLink>.
        </p>
        <p className={styles.p}>
          RPA conviene cuando el sistema no tiene API, su interfaz cambia poco y
          el proceso se repite muchas veces de la misma forma. Si tu caso no
          cumple esas condiciones, revisa las otras vías antes de firmar.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La tarea depende del criterio de una persona</h2>
        <p className={styles.p}>
          "Revisa la solicitud y aprueba si está todo bien." Dicho así en una
          reunión, suena automatizable.
        </p>
        <p className={styles.p}>
          Pide a quien hace la tarea que escriba las reglas exactas detrás de
          ese "está todo bien". Si logra armar una lista cerrada, el proceso se
          puede automatizar. Cuando contesta "depende, uno ya sabe", tienes a
          una persona con veinte años de oficio y ninguna regla escrita.
        </p>
        <p className={styles.p}>
          En ese caso, automatizar es prematuro. Primero hay que documentar el
          criterio y convertirlo en reglas, y solo con ese trabajo terminado se
          empieza a construir. Al documentarlo, lo habitual es descubrir que
          cerca del <strong className={styles.strong}>80%</strong> de los casos
          se resuelve con reglas y que el 20% restante requiere juicio. El robot
          toma ese 80% y deriva el resto a la persona.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El proceso no debería existir</h2>
        <p className={styles.p}>
          Pasa con un reporte semanal que nadie abre hace un año, con una doble
          carga que existe porque dos áreas nunca acordaron qué sistema manda o
          con una conciliación manual que empezó el día que alguien desactivó
          una integración y nadie la volvió a activar.
        </p>
        <p className={styles.p}>
          Automatizar cualquiera de ellos funciona en lo técnico. El robot
          libera horas y el ROI cuadra en la hoja de cálculo. Aun así, la
          empresa gastó presupuesto en conservar un problema que podía eliminar,
          y ahora además tiene un robot que mantener.
        </p>
        <p className={styles.p}>
          Para detectarlo, pregunta por qué existe el proceso. Cuando la
          respuesta empieza con "porque en su momento...", conviene confirmar
          que todavía hace falta antes de cotizar nada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>No hay un responsable del robot en operaciones</h2>
        <p className={styles.p}>
          Un robot en producción necesita un dueño en operaciones, alguien que
          revise el reporte de ejecución, avise cuando algo se ve raro y sepa a
          quién llamar. Esa persona no necesita saber programar ni ser de TI.
          Por eso pregunto quién va a cumplir ese rol antes de escribir la
          primera línea de código. Si la respuesta es un silencio o un "ya
          veremos", lo más probable es que el robot termine abandonado.
        </p>
        <p className={styles.p}>
          El abandono es gradual. El robot falla una vez sin que nadie lo note y
          alguien hace la tarea a mano ese día. Tres meses después, el proceso
          volvió a ser manual, aunque el robot sigue apareciendo en el
          presupuesto.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué hacemos cuando recomendamos no automatizar</h2>
        <p className={styles.p}>
          Cuando descartamos un proceso, seguimos con el resto de los
          candidatos. En casi todos los diagnósticos donde dijimos que no a
          uno, había otro en la misma lista que sí se justificaba y que el
          cliente no había considerado porque no era el que más ruido hacía.
          Encontrar ese otro candidato es la parte útil del diagnóstico, y por
          eso no lo cobramos.
        </p>
        <p className={styles.p}>
          Decir que no a veces nos cuesta la cotización original. Lo preferimos
          a entregar un robot que en dos años sea el ejemplo interno de por qué
          la automatización "no funcionó aquí".
        </p>
        <p className={styles.p}>
          Si estás armando tu lista de candidatos, en{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            cómo priorizar qué procesos automatizar primero
          </IntLink>{" "}
          explicamos en qué orden revisarlos. Los tropiezos más repetidos están
          en{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
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

      <section className="space-y-3">
        <h2 className={styles.h2}>Lecturas relacionadas</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
              Cómo priorizar qué procesos automatizar
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
              Cuánto cuesta automatizar un proceso
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/rpa-vs-desarrollo-a-medida">
              RPA vs desarrollo a medida
            </IntLink>
          </li>
        </ul>
      </section>
    </>
  ),
};
