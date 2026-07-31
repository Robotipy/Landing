import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-monitorear-robots-rpa-en-produccion/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿El monitoreo se puede dejar para después de la puesta en producción?",
    a: "Se puede, y es exactamente lo que hacíamos nosotros. No lo recomiendo.",
  },
  {
    q: "¿Qué diferencia hay entre monitorear el robot y monitorear el proceso?",
    a: "El monitoreo del robot te dice si la ejecución técnica terminó: arrancó, corrió, cerró sin excepción. El monitoreo del proceso te dice si el resultado de negocio ocurrió: el lote de facturas entró completo, la conciliación cuadró, el reporte llegó al destinatario. Son distintos y necesitas los dos, porque hay fallos que solo se ven en el primero (el servidor se cayó) y fallos que solo se ven en el segundo (el robot terminó feliz habiendo procesado un archivo vacío). La mayoría de las implementaciones cubre el primero y asume que el segundo se deduce, y no se deduce. Un tablero que solo tiene semáforos verdes y rojos por ejecución está mirando la mitad del problema.",
  },
  {
    q: "¿Quién debería operar el monitoreo, el cliente o el proveedor?",
    a: "Depende de cómo quedó el contrato. Cuando trabajamos en modalidad de soporte continuo, el mantenimiento correctivo es parte del servicio y las alertas nos llegan a nosotros además del dueño del proceso. Cuando el cliente opera sus propios robots, entregamos el robot documentado con sus puntos frágiles identificados y la configuración de alertas ya armada, para que el equipo interno sepa qué mirar sin tener que aprenderlo a los golpes.",
  },
  {
    q: "¿Cuántos robots justifican una herramienta de monitoreo?",
    a: "En la práctica, desde el segundo o tercero que corre desatendido en horarios distintos. También lo justifica un solo robot si corre de madrugada o si toca algo sensible.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-monitorear-robots-rpa-en-produccion";

export const post = {
  slug,
  locale: "es",
  title: "Cómo monitorear robots RPA en producción",
  description:
    "Qué mirar de un robot RPA en producción, por qué el fallo silencioso es el más caro y cómo montar alertas que lleguen a la persona correcta a tiempo.",
  keywords: [
    "cómo monitorear robots RPA en producción",
    "monitoreo de robots RPA",
    "robot RPA falla en producción",
    "alertas RPA",
    "Robotipy Monitor",
    "operación de robots RPA",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-28",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-monitorear-robots-rpa-en-produccion/header.jpeg",
    alt: "Cómo monitorear robots RPA en producción",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes robots en producción sin alertas configuradas?",
    texto:
      "Revisamos qué mirar en tu caso y cómo dejar el monitoreo armado antes de que el próximo fallo silencioso te salga caro.",
    botonLabel: "Evaluar mi caso",
    botonUrl: "/contact-us",
    linkLabel: "Conocer Robotipy Monitor",
    linkUrl: "/monitor",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Durante bastante tiempo, en nuestros propios proyectos, quien avisaba
          que un robot había fallado era el cliente. Nos escribía preguntando por
          qué el reporte no había llegado, y recién ahí mirábamos. Es el estándar
          real de buena parte de la industria y no aparece en ninguna propuesta
          comercial: el robot se entrega, se firma la marcha blanca, y el
          monitoreo queda como una promesa vaga de "hacemos seguimiento".
        </p>
        <p className={styles.p}>
          Ese hueco es donde se pierde el ROI que se prometió en el kick-off. Un
          robot que falla sin avisar deja al área usuaria haciendo a mano lo que
          ya daba por resuelto, y el retrabajo de esos días se recupera sin drama.
          Lo que cuesta caro es la conversación que viene después, cuando alguien
          de la dirección pregunta para qué se pagó la automatización.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Un robot no se cae como se cae un sistema</h2>
        <p className={styles.p}>
          Cuando se cae un ERP, todos se enteran en cinco minutos porque nadie
          puede trabajar. Un robot no da esa señal. Sigue "corriendo" mientras
          hace cualquiera de estas cosas:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Se queda esperando un elemento de pantalla que ya no existe, y ahí
            queda hasta que alguien lo mate.
          </li>
          <li className={styles.li}>
            Descarga un archivo vacío porque el portal del banco cambió el flujo
            de login, y carga cero registros sin error.
          </li>
          <li className={styles.li}>
            Procesa la mitad del lote y aborta, dejando el sistema destino en un
            estado intermedio.
          </li>
          <li className={styles.li}>
            Termina con estado "OK" habiendo saltado una validación que nadie
            declaró como obligatoria.
          </li>
        </ul>
        <p className={styles.p}>
          El último de la lista es el que más caro sale. Una caída visible genera
          un ticket y se atiende ese mismo día; los datos mal cargados que nadie
          detectó hasta el cierre obligan a rastrear hacia atrás qué registros
          tocó el robot y cuáles quedaron a medias.
        </p>
        <p className={styles.p}>
          Nos pasó una variante fea de esto en el servidor de un cliente. El
          robot se colgaba entre pasos sin patrón, y ni el equipo de TI ni
          nosotros encontrábamos nada en los logs de firewall. Resultó ser el
          antivirus corporativo, que intercepta todo el tráfico TCP como proxy
          invisible, incluido el tráfico local del puerto que usa Rocketbot
          internamente. No aparecía como bloqueo en ningún registro porque
          técnicamente no bloqueaba nada, dejaba conexiones a medio procesar. El
          robot no tenía ningún defecto y la causa vivía en el entorno donde
          corría, que es justamente el tipo de problema que un monitoreo armado
          solo alrededor del resultado de negocio te devuelve como "el robot
          falla a veces", o sea como nada, y termina diagnosticándose por
          adivinanza.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué hay que mirar, más allá de si corrió</h2>
        <p className={styles.p}>
          La primera capa es obvia y aun así falta en muchas implementaciones:
          ejecución iniciada, ejecución terminada, con qué resultado. Si tienes
          eso registrado con hora y duración ya estás mejor que la mayoría.
        </p>
        <p className={styles.p}>
          Después viene lo que separa un tablero decorativo de uno útil: el
          volumen procesado en cada corrida, comparado contra lo que esa corrida
          suele procesar. Un robot de facturación que venía cargando el lote
          completo y de golpe cierra en verde con un puñado de documentos no está
          bien, por más que no haya marcado error. La duración cumple la misma
          función de aviso temprano: cuando una corrida empieza a tardar bastante
          más que su promedio histórico, algo cambió del otro lado, y eso se nota
          semanas antes de que el robot se caiga del todo.
        </p>
        <p className={styles.p}>
          El conteo de excepciones es la métrica que más terminamos mirando en
          los procesos con revisión humana. Ahí lo que se sigue de cerca es
          cuántos documentos pasaron derecho y cuántos quedaron esperando a una
          persona, porque el total que entró dice poco por sí solo. Si esa
          proporción se mueve, hay una causa concreta detrás, casi siempre un
          proveedor nuevo o un formato que cambió. Escribimos sobre ese efecto en
          el artículo de{" "}
          <IntLink href="/blog/idp-procesamiento-inteligente-de-documentos">
            procesamiento inteligente de documentos
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La alerta que le llega a la persona equivocada no sirve</h2>
        <p className={styles.p}>
          El error de diseño más común que veo es de destinatario: la alerta va
          al correo del desarrollador que construyó el robot, que puede estar de
          vacaciones, en otro proyecto o directamente fuera de la empresa si el
          desarrollo se contrató por proyecto cerrado.
        </p>
        <p className={styles.p}>
          La regla que aplicamos ahora es simple: cada robot en producción tiene
          un dueño del proceso del lado del cliente, y la alerta de negocio le
          llega a esa persona en el idioma del negocio. "El robot de conciliación
          no terminó su corrida de las 9:00" le sirve a un jefe de tesorería para
          decidir qué hace con el cierre del día; un stack trace de Python le
          llega igual de rápido y no le dice nada accionable. El detalle técnico
          va al canal técnico, en paralelo, y no reemplaza al aviso funcional.
        </p>
        <p className={styles.p}>
          Conviene además definir alertas por ausencia de ejecución. Si el robot
          debía correr a las 6:00 y a las 6:30 no hay ningún registro, eso tiene
          que avisar. Los fallos que más tardan en detectarse son los que ocurren
          antes de que el robot arranque: el servidor se reinició por una
          actualización, la tarea programada quedó deshabilitada, la contraseña
          de servicio expiró.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Dónde entra Robotipy Monitor</h2>
        <p className={styles.p}>
          <IntLink href="/monitor">Monitor</IntLink> es la herramienta que
          armamos para no depender de que alguien se acuerde de mirar. Muestra el
          estado de cada worker (si está libre, ocupado o caído), los jobs que se
          ejecutaron con su resultado y su duración, los logs de cada corrida sin
          tener que entrar a la máquina a buscarlos, y las métricas acumuladas del
          período. Cuando un robot no se ejecuta, o se ejecuta y no hace lo que
          corresponde, sale un correo sin que nadie tenga que estar frente a la
          pantalla.
        </p>
        <p className={styles.p}>
          Ese último punto es el que más se subestima. Un log suelto te sirve
          para diagnosticar el incidente de hoy; la serie de las últimas
          cuarenta corridas es la que te muestra que el robot viene tardando cada
          vez más o que las excepciones se dispararon desde que el proveedor
          cambió el formato. Los problemas de producción rara vez aparecen de
          golpe, se degradan, y esa degradación solo se ve mirando el histórico.
        </p>
        <p className={styles.p}>
          Para un gerente el valor está en que el registro queda: cuando alguien
          pregunta cuántas veces falló el robot este trimestre, hay una respuesta
          con fecha y hora en lugar de una impresión. Esa misma trazabilidad es
          la que permite discutir el ROI seis meses después de la puesta en
          producción usando las corridas reales del período, que es la única
          forma de que esa conversación no termine siendo un intercambio de
          percepciones.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo esto es sobreingeniería</h2>
        <p className={styles.p}>
          Si tienes un robot, corre una vez por semana y hay una persona que lo
          lanza y mira el resultado en el momento, no necesitas una plataforma de
          monitoreo. Un correo de fin de ejecución con el resumen alcanza y
          sobra. Montar un tablero para eso es agregar una pieza que alguien
          tiene que mantener.
        </p>
        <p className={styles.p}>
          El punto de quiebre llega antes de lo que la gente cree, eso sí. Con
          tres o cuatro robots corriendo en horarios distintos, algunos de
          madrugada, ya nadie está mirando cuando pasa lo que tiene que pasar.
          Ahí el monitoreo deja de ser una comodidad. Si además el proceso
          automatizado toca dinero, inventario o algo que se reporta hacia
          afuera, yo no lo pondría en producción sin alertas configuradas, por
          más chico que sea el volumen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Antes de poner el robot en producción</h2>
        <p className={styles.p}>
          Dos cosas que conviene cerrar antes del pase, porque después nunca se
          hacen: definir por escrito qué se considera una corrida exitosa, con
          volumen y salida esperados, ya que "que no dé error" es un criterio
          demasiado flojo para operar; y dejar documentado quién recibe cada tipo
          de alerta. Lo segundo suena administrativo y es lo que decide si un
          fallo se atiende el mismo día o queda dando vueltas hasta que lo escala
          el usuario. Va de la mano de{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            documentar el proceso antes de automatizarlo
          </IntLink>
          , que es la otra tarea que todos posponen y todos terminan pagando.
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
        <h2 className={styles.h2}>Para seguir</h2>
        <p className={styles.p}>
          Si estás por poner tu primer robot en producción, vale la pena revisar
          los{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
          </IntLink>{" "}
          y cómo se estructura el costo de un proyecto en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          . Dejar el monitoreo configurado antes del pase a producción cuesta
          bastante menos trabajo que rastrear después qué hizo mal un robot
          durante las semanas en que nadie lo estuvo mirando.
        </p>
      </section>
    </>
  ),
};
