import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-automatizar-reportes-excel/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿El robot puede trabajar con cualquier versión de Excel?",
    a: "Sí. Rocketbot manipula archivos .xlsx y .xls directamente mediante bibliotecas de Python, sin necesidad de tener Excel instalado en el servidor de ejecución. Eso evita problemas de licencias y hace el robot más estable ante actualizaciones de Office.",
  },
  {
    q: "¿Qué pasa si el sistema fuente cambia la pantalla o el formato del exportable?",
    a: "Eso genera una excepción que queda registrada y notifica por correo o por Monitor antes de que alguien note que el reporte no llegó. No es un fallo silencioso. El mantenimiento correctivo en esos casos es parte del servicio cuando trabajamos en modalidad de soporte continuo; si el cliente opera el robot propio, documentamos cada punto frágil antes de la entrega para que sepan qué ajustar.",
  },
  {
    q: "¿Cuánto tarda implementar este tipo de bot?",
    a: "Para un proceso con una o dos fuentes y lógica de consolidación directa, entre dos y cuatro semanas con pruebas sobre datos reales incluidas. Si hay múltiples fuentes o validaciones complejas, puede extenderse a seis u ocho. El tiempo más variable no es el desarrollo: es el acceso a los sistemas y la definición de las reglas de negocio por parte del cliente.",
  },
  {
    q: "¿El robot puede correr en la nube o solo on-premise?",
    a: "Ambas opciones funcionan. La elección depende de dónde viven los sistemas fuente y de las políticas de seguridad. Para sistemas SAP on-premise, lo más común es ejecutar el robot en un servidor dentro de la red del cliente. Para fuentes web o en la nube, la ejecución en instancia cloud es más limpia.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-automatizar-reportes-excel";

export const post = {
  slug,
  locale: "es",
  title: "Cómo automatizar los reportes que hoy haces en Excel",
  description:
    "Guía práctica para automatizar con RPA los reportes de Excel: qué parte del proceso atacar primero, cómo funciona en la práctica y cuándo no vale la pena.",
  keywords: [
    "automatizar reportes Excel",
    "RPA reportes Excel",
    "automatización Excel empresa",
    "reporte automático RPA",
    "eliminar reportes manuales",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.tutoriales),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-01",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-automatizar-reportes-excel/header.jpeg",
    alt: "Automatización de reportes de Excel con RPA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tu reporte de Excel es candidato a automatizar?",
    texto:
      "Muéstranos el archivo y de dónde vienen los datos. En una llamada de 45 minutos te decimos si conviene y estimamos el retorno.",
    botonLabel: "Agendar diagnóstico",
    botonUrl: "/contact-us",
    linkLabel: "Calcula tu ROI",
    linkUrl: "/roi-calculator",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En casi todos los proyectos que arrancamos, hay un momento en la
          reunión de relevamiento donde el cliente comparte su pantalla y
          aparece lo mismo: un Excel con pestañas que se llaman &quot;Final&quot;,
          &quot;Final_v2&quot;, &quot;Final_USE THIS ONE&quot;. El reporte más
          importante del área, producido a mano, cada semana, desde hace tres
          años.
        </p>
        <p className={styles.p}>
          No lo menciono como crítica. Lo menciono porque ese Excel específico
          es, en muchos casos, el proceso más fácil de automatizar y el que más
          rápido muestra retorno. Y sin embargo la mayoría de las empresas lo
          deja para después, porque &quot;funciona&quot;.
        </p>
        <p className={styles.p}>
          Funciona hasta que la persona que lo hace se va de vacaciones.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué parte del proceso se puede automatizar</h2>
        <p className={styles.p}>
          Un reporte de Excel típico tiene tres momentos diferenciados:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Extracción de datos desde los sistemas fuente (SAP, una base de
            datos, un portal web, otro Excel).
          </li>
          <li className={styles.li}>
            Consolidación: copiar, pegar, calcular, ajustar formato, filtrar
            según la lógica de cada área.
          </li>
          <li className={styles.li}>
            Distribución: adjuntar, escribir el correo, enviar a la lista de
            siempre, guardar en la carpeta compartida.
          </li>
        </ul>
        <p className={styles.p}>
          Un robot RPA puede hacer los tres. Trabaja sobre la interfaz de los
          sistemas igual que un operador humano: abre sesiones, navega
          pantallas, extrae los datos. No necesita API. Si el sistema tiene
          pantalla, el robot lo puede operar.
        </p>
        <p className={styles.p}>
          La parte que más varía entre proyectos es la consolidación. Cuando la
          lógica de transformación es simple (filtros, sumas, formatos), el
          robot la maneja directamente. Cuando es compleja (cruce de múltiples
          fuentes con reglas de negocio no triviales), usamos un script Python
          embebido en el flujo, que hace el trabajo pesado antes de escribir el
          Excel final.
        </p>
        <p className={styles.p}>
          El resultado siempre llega al mismo lugar: el archivo armado, enviado,
          a la hora que definas, sin que nadie tenga que acordarse de hacerlo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo funciona en la práctica</h2>
        <p className={styles.p}>
          El caso que más me gusta contar últimamente es el de un cliente con
          tres hoteles. Cada día, alguien en cada propiedad tenía que generar el
          reporte de censo: cruzar el estado de las habitaciones con lo que
          registraba el sistema de housekeeping y producir un consolidado para
          la dirección. Una hora por hotel, todos los días. Tres horas en total,
          distribuidas entre personas que también tenían que estar atendiendo
          huéspedes.
        </p>
        <p className={styles.p}>
          El problema real no era solo el tiempo. Era que el reporte a veces no
          se hacía. Cuando la recepción estaba ocupada, el censo pasaba a segundo
          plano. Y sin ese reporte, la dirección tomaba decisiones sobre
          disponibilidad con datos del día anterior.
        </p>
        <p className={styles.p}>
          El robot hace ahora el mismo cruce en un minuto. Los tres hoteles, el
          mismo proceso, todos los días a la misma hora, sin depender de si la
          recepción está libre o no.
        </p>
        <p className={styles.p}>
          Una aclaración sobre el número: un minuto es el tiempo de ejecución en
          ese proyecto específico, con esas fuentes y ese volumen de
          habitaciones. No lo uso como benchmark general porque cada reporte es
          distinto. Lo que sí se mantiene en todos los casos es que el robot no
          tiene días ocupados.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo no vale la pena automatizarlo</h2>
        <p className={styles.p}>
          Acá me suelen preguntar si recomiendo siempre automatizar. No.
        </p>
        <p className={styles.p}>
          Si el reporte cambia de estructura cada mes porque el área todavía no
          definió qué quiere medir, el robot va a romperse con el mismo ritmo con
          que cambia el reporte. Antes de automatizar hay que estabilizar. Eso a
          veces toma meses.
        </p>
        <p className={styles.p}>
          Si la fuente de datos es caótica (distintos formatos según quién carga,
          campos que a veces están y a veces no), el primer problema es de
          calidad del dato, no de automatización. El robot va a amplificar el
          caos, no resolverlo.
        </p>
        <p className={styles.p}>
          Y si el reporte se genera una vez por trimestre y demanda dos horas, el
          retorno de un proyecto de automatización puede tardar tanto que no se
          justifica. Hay cosas que se hacen a mano por razones completamente
          válidas.
        </p>
        <p className={styles.p}>
          El candidato ideal para el primer bot es el que combina tres
          condiciones: frecuencia alta (diario o semanal), estructura estable
          desde hace al menos seis meses, y fuentes de datos predecibles. Si las
          tres se dan, el retorno aparece en semanas.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué herramienta usamos y por qué</h2>
        <p className={styles.p}>
          Construimos la mayoría de nuestras soluciones de reportes sobre{" "}
          <IntLink href="/rocketbot">Rocketbot</IntLink>. La razón es simple: es
          la herramienta que, a nuestro criterio, mejor combina las 3B. Es
          buena, es barata y es fácil de operar sin ser desarrollador. Para el
          tipo de cliente con el que trabajamos, esa última parte importa tanto
          como las otras dos.
        </p>
        <p className={styles.p}>
          La capa de monitoreo que ponemos encima es nuestra, desarrollada por
          Robotipy. Cuando el robot falla a las 6 AM un martes, esa capa registra
          cada ejecución, el estado, los errores con el screenshot del momento
          exacto del fallo, y permite al cliente reiniciar o escalar sin depender
          de que yo esté disponible. Puedes ver cómo funciona en{" "}
          <IntLink href="/monitor">Robotipy Monitor</IntLink>.
        </p>
        <p className={styles.p}>
          Para los clientes que operan sus propios robots, eso es la diferencia
          entre un problema resuelto en veinte minutos y un escalado que llega a
          las 10 AM cuando ya perdiste la reunión.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Antes de hablar con nosotros</h2>
        <p className={styles.p}>
          Si estás evaluando si tu reporte tiene potencial de automatización, hay
          tres preguntas que vale responder primero: ¿Cuántas veces por semana se
          ejecuta? ¿La estructura (columnas, fuentes, lógica de cálculo) es la
          misma desde hace seis meses? ¿Hay una persona que es la única que sabe
          hacerlo?
        </p>
        <p className={styles.p}>
          Si respondiste &quot;más de una vez&quot;, &quot;sí&quot; y
          &quot;sí&quot;, probablemente vale la pena explorarlo.
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
        <h2 className={styles.h2}>El próximo paso</h2>
        <p className={styles.p}>
          Si quieres saber si tu proceso de reportes tiene potencial, podemos
          hacer un diagnóstico en una llamada de 45 minutos. Sin compromiso y sin
          necesidad de preparar nada: alcanza con que me muestres el Excel y me
          cuentes de dónde vienen los datos. Si prefieres empezar por los
          números, revisa{" "}
          <IntLink href="/blog/como-calcular-el-roi-en-proyectos-rpa">
            cómo calculamos el ROI antes de arrancar un proyecto
          </IntLink>
          .
        </p>
      </section>
    </>
  ),
};
