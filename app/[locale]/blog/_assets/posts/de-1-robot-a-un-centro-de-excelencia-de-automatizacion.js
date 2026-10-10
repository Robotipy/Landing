import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/de-1-robot-a-un-centro-de-excelencia-de-automatizacion/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Desde cuántos robots conviene armar un Centro de Excelencia?",
    a: "No hay un número fijo. Depende de cuántos equipos y áreas participan. Una persona ordenada puede llevar diez robots hechos por un solo equipo para una sola gerencia. Si en cambio tienes cuatro robots repartidos entre tres áreas con dueños distintos y dos proveedores externos, ya hay un problema de coordinación aunque sean pocos.",
  },
  {
    q: "¿El Centro de Excelencia tiene que estar en TI o en el área de negocio?",
    a: "Depende de lo que esperes de él. En TI se estandariza mejor y los accesos quedan controlados, pero el equipo pierde contacto con el negocio y dejan de llegar procesos candidatos. Si queda en el área de negocio, ideas no faltan, aunque cuesta que los robots se construyan con disciplina técnica. Lo que mejor nos ha funcionado con clientes es repartirlo: un responsable del lado del negocio decide qué se automatiza y en qué orden, y TI se hace cargo de la infraestructura, las cuentas y los estándares.",
  },
  {
    q: "¿Se puede tercerizar el CoE?",
    a: "La operación, sí, y para muchas empresas medianas es lo más sensato, porque el volumen no justifica un equipo interno. La priorización tiene que quedarse dentro de la empresa. Si es el proveedor quien decide qué se automatiza, el programa se orienta a facturar horas de desarrollo y reducir tu costo operativo pasa a segundo plano. Ese conflicto de interés existe aunque el proveedor sea honesto, y nosotros también lo tenemos.",
  },
  {
    q: "Tenemos robots hechos por distintos proveedores, ¿hay que rehacerlos todos?",
    a: "No todos. Ordénalos por criticidad. Los que ejecutan procesos que detienen la operación cuando fallan se llevan al estándar primero, y el resto se migra cuando le toque mantenimiento. Rehacer un robot que funciona bien y falla dos veces al año es un gasto difícil de justificar. En mantenimiento de robots RPA explicamos por qué fallan los robots y cuánto cuesta sostenerlos.",
  },
];

// Versiones con links inline. El texto debe ser idéntico al de faqs[].a.
const faqsJsx = [
  null,
  null,
  null,
  (
    <>
      No todos. Ordénalos por criticidad. Los que ejecutan procesos que
      detienen la operación cuando fallan se llevan al estándar primero, y el
      resto se migra cuando le toque mantenimiento. Rehacer un robot que
      funciona bien y falla dos veces al año es un gasto difícil de
      justificar. En{" "}
      <IntLink href="/blog/mantenimiento-de-robots-rpa">
        mantenimiento de robots RPA
      </IntLink>{" "}
      explicamos por qué fallan los robots y cuánto cuesta sostenerlos.
    </>
  ),
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "de-1-robot-a-un-centro-de-excelencia-de-automatizacion";

export const post = {
  slug,
  locale: "es",
  title: "De 1 robot a un Centro de Excelencia (CoE) de automatización",
  description:
    "Cuándo se justifica un Centro de Excelencia de automatización y qué hay que estandarizar antes, según lo que se rompe entre el primer robot y el quinto.",
  keywords: [
    "centro de excelencia de automatización",
    "CoE de RPA",
    "cómo escalar un programa de RPA",
    "estandarización de robots RPA",
    "gobierno de automatización",
    "de un robot a varios robots",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-08",
  image: {
    src: thumbnail,
    urlRelative: "/blog/de-1-robot-a-un-centro-de-excelencia-de-automatizacion/header.jpeg",
    alt: "De 1 robot a un Centro de Excelencia (CoE) de automatización",
  },
  faq: faqs,
  cta: {
    titulo: "¿Ya pasaste del primer robot y estás armando el plan?",
    texto:
      "Revisamos cuántos robots tienes, cómo están construidos y quién los opera, y te decimos qué conviene ordenar antes de sumar el siguiente.",
    botonLabel: "Revisar mi caso",
    botonUrl: "/contact-us",
    linkLabel: "Seguridad y gobierno en RPA",
    linkUrl: "/blog/seguridad-y-gobierno-en-proyectos-de-rpa",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          La consulta casi siempre nos llega de la misma manera. Una empresa
          automatizó dos o tres procesos con buenos resultados, la dirección
          pidió un plan para el año siguiente y, mientras tanto, llegó el PDF de
          una consultora grande que propone montar un Centro de Excelencia como
          próximo paso. Entonces nos escriben para preguntar cómo armarlo.
        </p>
        <p className={styles.p}>
          Mi respuesta suele decepcionar un poco: con tres robots no hace falta
          un CoE. Lo urgente es dejar por escrito lo que hoy solo sabe una
          persona, un trabajo mucho menos vistoso que diseñar una estructura
          formal. Esa estructura viene después, y en muchas empresas medianas
          nunca llega a justificarse, algo que ningún proveedor tiene incentivo
          para decirte.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué se rompe entre el robot 1 y el robot 5</h2>
        <p className={styles.p}>
          El primer robot no tiene problemas de escala. Lo desarrolla una
          persona, corre en una máquina y, cuando falla, lo arregla quien lo
          hizo. Todo el conocimiento del proyecto cabe en una conversación.
        </p>
        <p className={styles.p}>
          Al llegar al quinto robot aparecen estos problemas, casi siempre en
          este orden:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Nadie sabe cuántos robots hay en producción. Pregúntalo en una
            reunión y es probable que salgan tres cifras distintas, porque
            alguien cuenta el que quedó instalado en el equipo de un analista
            que ya se fue de la empresa.
          </li>
          <li className={styles.li}>
            Cada robot está construido de forma distinta, así que cualquier
            cambio obliga a entenderlo desde cero. El primero lo hizo un
            proveedor, el segundo un consultor independiente y el tercero un
            desarrollador interno que aprendió mirando los otros dos.
          </li>
          <li className={styles.li}>
            La operación depende de una sola persona, que tiene las claves y
            sabe reiniciar los robots. Suele ser también la primera en enterarse
            de un fallo. Cuando sale de vacaciones, el programa completo se
            detiene.
          </li>
          <li className={styles.li}>
            Se automatiza lo que pide quien más presiona. Sin un criterio de
            priorización escrito, el orden lo define la política interna y
            termina automatizado el proceso del gerente más insistente, aunque
            otro tuviera mejor retorno.
          </li>
          <li className={styles.li}>
            Nadie puede decir cuánto se ahorró. El caso de negocio de cada robot
            se escribió para conseguir la aprobación y no se volvió a medir, de
            modo que a los dos años, cuando la dirección pregunta por el retorno
            del programa completo, no hay datos para responder.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Qué parte de un CoE necesitas con pocos robots
        </h2>
        <p className={styles.p}>
          Ninguno de esos cinco problemas se resuelve con un comité. En nuestro
          rubro, buena parte de lo que se vende como &quot;Centro de
          Excelencia&quot; es una estructura de gobierno pensada para empresas
          con cincuenta o cien robots, ofrecida a empresas que tienen cuatro.
          Incluye comité de priorización, matriz RACI, una metodología propia
          con nombre registrado y roles como business analyst, solution
          architect, RPA developer y controller. En una empresa de trescientas
          personas, aprobar con ese esquema la automatización de un proceso de
          doce horas mensuales consume más horas de reunión que las que el robot
          ahorrará en su primer semestre.
        </p>
        <p className={styles.p}>
          Lo que sirve desde el primer robot son unas pocas decisiones
          operativas que alguien toma y deja por escrito: que todos los robots
          se construyan igual, que la operación tenga un responsable con nombre
          y apellido y que exista un registro de qué hace cada robot y quién
          responde por él. Nada de eso pide un organigrama. Una persona a medio
          tiempo puede sostenerlo hasta bastante más lejos de lo que se suele
          suponer, siempre que un solo equipo construya los robots y todos
          sirvan a una sola gerencia.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Estandarizar cómo se construyen los robots</h2>
        <p className={styles.p}>
          Cuando cada robot está hecho al gusto de quien lo programó, el costo
          de mantenimiento crece más rápido que la cantidad de robots y el
          tercer año sale más caro que el primero. Estandarizar la construcción
          cuesta bastante menos que montar una estructura de gobierno y es la
          forma directa de contener ese costo.
        </p>
        <p className={styles.p}>
          En nuestros desarrollos, todos los robots que entregamos tienen la
          misma estructura. Un robot Principal orquesta el proceso.
          Initialization resuelve la copia local, la resolución de pantalla y
          las conexiones. Hay un bloque de Rutas, y EndProcess cierra, reporta y
          devuelve los archivos a su lugar. Los nombres de los robots van en
          PascalCase y las variables en snake_case, sin excepciones. Los
          parámetros que pueden cambiar sin tocar la lógica van en un{" "}
          <code>configuracion.ini</code> dentro de la carpeta de recursos, nunca
          escritos en el flujo. Cada proyecto tiene además su propia base SQLite
          local, donde queda el registro de lo que procesó.
        </p>
        <p className={styles.p}>
          Con esa estructura, un desarrollador que nunca vio el proyecto puede
          abrirlo con un incidente encima y saber en cinco minutos dónde buscar.
        </p>
        <p className={styles.p}>
          Si estás por sumar el cuarto robot y los tres primeros los hicieron
          proveedores distintos, define el estándar antes de encargarlo,
          mientras reescribir los existentes todavía cuesta una fracción de lo
          que costó hacerlos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Quién hace qué cuando hay diez robots</h2>
        <p className={styles.p}>
          Hay dos funciones que conviene separar pronto, aunque las cubra la
          misma persona: la operación diaria y la evolución del programa. Operar
          es revisar que las ejecuciones se hayan completado, atender el fallo
          del día y decidir si algo se reprocesa. Hacer crecer el programa exige
          analizar procesos nuevos y definir prioridades, que después se
          negocian con las áreas. Si ambas tareas quedan en la misma agenda, la
          operación desplaza a la evolución todas las semanas, hasta que el
          programa deja de sumar procesos.
        </p>
        <p className={styles.p}>
          También hay que distinguir la capa que programa las ejecuciones de la
          que las observa. Muchos equipos las confunden y creen que están
          monitoreando cuando solo cargaron los horarios. El orquestador (en
          nuestro caso, Rocketbot) agenda las ejecuciones y reparte el trabajo
          entre las máquinas disponibles.{" "}
          <IntLink href="/blog/como-monitorear-robots-rpa-en-produccion">
            Robotipy Monitor
          </IntLink>{" "}
          muestra qué worker está activo, qué se ejecutó y qué falló, con sus
          logs y métricas.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo se justifica una estructura formal</h2>
        <p className={styles.p}>
          No hay una cantidad de robots que marque ese momento. Ya no basta con
          una persona ordenada cuando se da alguna de estas condiciones:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Hay más de un equipo desarrollando en paralelo.
          </li>
          <li className={styles.li}>
            Los robots tocan sistemas transaccionales de más de un área, cada
            una con su propio dueño.
          </li>
          <li className={styles.li}>
            Llegan más solicitudes de las que se pueden priorizar en una
            conversación de pasillo.
          </li>
        </ul>
        <p className={styles.p}>
          En ese punto, la estructura formal evita que dos desarrollos choquen
          sobre el mismo proceso. Mientras no llegues ahí, basta una hoja de
          cálculo al día con seis columnas: nombre del robot, proceso que
          ejecuta, área dueña, cuenta con la que se conecta, responsable de
          mantenerlo y fecha de la última revisión.
        </p>
        <p className={styles.p}>
          Explicamos esa hoja en detalle en{" "}
          <IntLink href="/blog/seguridad-y-gobierno-en-proyectos-de-rpa">
            seguridad y gobierno en proyectos de RPA
          </IntLink>
          , con foco en credenciales y permisos, que es lo que más rápido se
          descontrola cuando el programa crece.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Escalar sin medir el retorno</h2>
        <p className={styles.p}>
          Cuando el primer robot logra un resultado visible, aparece la presión
          por sumar diez más en poco tiempo. Desde ahí, cada robot nuevo rinde
          menos que el anterior, porque los procesos se eligen para cumplir la
          cantidad de robots comprometida con la dirección.
        </p>
        <p className={styles.p}>
          En los diagnósticos que hacemos, cuando una empresa nos muestra su
          lista de procesos candidatos, es habitual que los tres primeros tengan
          un retorno claro y que del cuarto en adelante la cuenta se vuelva
          discutible. Sostener el criterio de selección en ese momento es
          incómodo, sobre todo si la meta ya se anunció. Si la empresa cede, el
          programa puede apagarse a los tres años con doce robots caros de
          mantener y poco ahorro que mostrar. Cómo hacer esa selección lo
          detallamos en{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            cómo priorizar qué procesos automatizar primero
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
              <div className={ui.faqA}>{faqsJsx[i] || f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Siguientes pasos</h2>
        <p className={styles.p}>
          Si tu empresa ya pasó del primer robot y está definiendo el plan,
          ordena primero el criterio y después la estructura. Los tropiezos más
          frecuentes están en{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
          </IntLink>
          , y la forma de armar la cuenta de un proyecto, en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          . Si quieres revisar tu caso con nosotros,{" "}
          <IntLink href="/contact-us">escríbenos</IntLink>.
        </p>
      </section>
    </>
  ),
};
