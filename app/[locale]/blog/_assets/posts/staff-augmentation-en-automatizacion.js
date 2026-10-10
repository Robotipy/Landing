import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/staff-augmentation-en-automatizacion/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuánto cuesta un desarrollador de RPA bajo este modelo?",
    a: "Varía demasiado según la experiencia, el país y la dedicación como para dar una cifra útil, y conviene desconfiar del proveedor que da un número sin hacer preguntas. La comparación que sirve es contra la alternativa completa: un proyecto cerrado con nosotros promedia USD 6.000 con marcha blanca incluida, y el soporte posterior, si lo contratas, va desde USD 300 al mes. Si el costo mensual de la dedicación se acerca al de dos o tres proyectos cerrados al año y solo tienes dos procesos reales por automatizar, el modelo no te está rindiendo.",
  },
  {
    q: "¿La persona trabaja con nuestras herramientas o con las suyas?",
    a: "Con las tuyas y con tu licencia. Es lo habitual en este modelo.",
  },
  {
    q: "¿Qué pasa con los robots si terminamos el contrato?",
    a: "Siguen siendo tuyos, y eso no debería ser negociable en ningún contrato. Revisa con cuidado la licencia de la plataforma, que es un contrato aparte con sus propias reglas. Si está a nombre del proveedor, los robots son tuyos pero no tienes dónde ejecutarlos. Pide que esté a tu nombre desde el inicio, aunque la administre el proveedor. Exige también un traspaso documentado con lo que hace cada robot, la cuenta con que entra, los archivos que toca y la ubicación de los logs. Sin ese traspaso te quedas con código que nadie de tu equipo sabe operar, una situación peor que no tener nada porque da una falsa sensación de control.",
  },
  {
    q: "¿Se puede combinar con proyectos cerrados?",
    a: "Sí. Es el esquema que más vemos en empresas que ya tienen un programa de automatización en marcha. Los procesos grandes y bien definidos van por proyecto, con alcance y fecha, mientras que las tareas pequeñas y el mantenimiento quedan en la dedicación. La condición es que las dos líneas no compitan por la misma persona: un desarrollador con un proyecto que tiene fecha y que además atiende incidentes no llega a esa fecha.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "staff-augmentation-en-automatizacion";

export const post = {
  slug,
  locale: "es",
  title: "Staff augmentation en automatización: sumar un experto a tu equipo",
  description:
    "Cómo elegir entre staff augmentation en automatización y un proyecto cerrado de RPA, y qué exigir por escrito antes de sumar un desarrollador a tu equipo.",
  keywords: [
    "staff augmentation automatización",
    "staff augmentation RPA",
    "contratar desarrollador RPA",
    "sumar un experto en automatización",
    "equipo interno de RPA",
    "outsourcing de automatización",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-10",
  image: {
    src: thumbnail,
    urlRelative: "/blog/staff-augmentation-en-automatizacion/header.jpeg",
    alt: "Staff augmentation en automatización: sumar un experto a tu equipo",
  },
  faq: faqs,
  cta: {
    titulo: "¿Ya tienes robots en producción?",
    texto:
      "Cuéntanos cuántos son y quién los mantiene hoy, y revisamos contigo qué modelo te conviene.",
    botonLabel: "Contarnos tu caso",
    botonUrl: "/contact-us",
    linkLabel: "De 1 robot a un Centro de Excelencia",
    linkUrl: "/blog/de-1-robot-a-un-centro-de-excelencia-de-automatizacion",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En LatAm la automatización se compra de dos maneras. En un proyecto
          cerrado contratas un resultado: un proceso específico funcionando en
          una fecha acordada. El staff augmentation te da capacidad, es decir,
          un desarrollador de RPA que trabaja dentro de tu equipo con tus
          prioridades, tu lista de pendientes y tus reuniones.
        </p>
        <p className={styles.p}>
          Los dos modelos son válidos y en Robotipy trabajamos con ambos. Elegir
          mal sale caro, y el error tarda unos seis meses en hacerse visible.
          Esa elección queda en un contrato que, entre otras cosas, define quién
          arregla un robot que falla un martes a las siete de la mañana, antes
          de que el área usuaria empiece su jornada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué compras en cada modelo</h2>
        <p className={styles.p}>
          Entre los dos modelos cambia sobre todo quién asume el riesgo de
          estimación. El precio por hora, que suele ser lo primero que se
          compara, sirve poco para decidir.
        </p>
        <p className={styles.p}>
          En un proyecto cerrado ese riesgo es del proveedor. Si el proceso
          resulta más enredado de lo que se vio en el levantamiento y el trabajo
          se alarga, el costo extra lo absorbemos nosotros. Un desarrollo con
          nosotros promedia{" "}
          <strong className={styles.strong}>USD 6.000</strong> e incluye la
          marcha blanca, un período en que el robot funciona en paralelo al
          proceso manual hasta que los números cuadran. Ese valor está publicado
          y explicado en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Si pagas las horas de un perfil, el riesgo pasa a ser tuyo. A cambio
          ganas continuidad y una persona que va conociendo tus sistemas, y
          puedes cambiar de prioridad un lunes sin renegociar alcance con nadie.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Cuándo conviene más el staff augmentation que un proyecto
        </h2>
        <p className={styles.p}>
          Contratar capacidad rinde más que contratar entregables en estos
          casos:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Ya tienes robots en producción y te falta gente para sostenerlos.
            Los proyectos nuevos son lo que se ve, pero con ocho o diez robots
            en operación, buena parte del trabajo consiste en adaptarse a
            cambios de portales, ajustar reglas y reprocesar ejecuciones. Ese
            trabajo no tiene un alcance definible, así que cotizarlo como
            proyecto funciona mal.
          </li>
          <li className={styles.li}>
            Las prioridades cambian más rápido de lo que tarda una cotización.
            El proceso urgente de hoy puede dejar de serlo en tres semanas, y
            cerrar alcances con esa volatilidad termina en una cadena de órdenes
            de cambio.
          </li>
          <li className={styles.li}>
            Estás formando un equipo interno y necesitas a alguien con
            experiencia al lado de tus analistas. Un desarrollador senior les
            enseña a decidir con criterio, sobre todo qué procesos conviene
            dejar sin automatizar.
          </li>
          <li className={styles.li}>
            Tienes muchos procesos pequeños. Automatizaciones de tres o cuatro
            pasos no justifican el costo comercial de cotizar cada una por
            separado. Avanzan mejor como una lista priorizada que alguien va
            resolviendo.
          </li>
          <li className={styles.li}>
            Tus restricciones de acceso impiden trabajar desde fuera. Algunas
            empresas, sobre todo de banca y salud, no pueden dar accesos a un
            tercero por proyecto, pero sí pueden incorporar a una persona bajo
            su propio esquema de usuarios y auditoría.
          </li>
        </ul>
        <p className={styles.p}>
          Si solo quieres automatizar un proceso puntual y evaluar después, no
          estás en ninguno de esos cinco casos. Te conviene un proyecto cerrado,
          que da un resultado más previsible y no te obliga a gestionar a nadie.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Por qué fracasa el staff augmentation</h2>
        <p className={styles.p}>
          El fracaso más común empieza en el cliente. Compra horas de un
          desarrollador, espera el resultado de un proyecto y no asigna a nadie
          que priorice, consiga los accesos y haga que el dueño del proceso
          responda las dudas. La persona avanza bien mientras tiene tareas
          claras y luego se queda esperando respuestas. Meses más tarde se
          discute por qué se avanzó tan poco, aunque el freno estuvo en las
          decisiones que el cliente no tomó.
        </p>
        <p className={styles.p}>
          El segundo problema es que cobrar por hora premia que el trabajo dure.
          Ocurre con cualquier servicio profesional que se cobra por tiempo, y
          puede sesgar las decisiones técnicas del proveedor sin que haya mala
          fe: ante dos opciones, tiende a elegir la más completa antes que la
          más corta. Para nosotros, la única defensa razonable es medir lo que
          pasa a producción.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          El estándar de desarrollo tiene que quedar por escrito
        </h2>
        <p className={styles.p}>
          El contrato debería incluir como anexo el estándar con que se
          construyen los robots. De esa cláusula depende cuánto te cuesta
          mantenerlos dos años después.
        </p>
        <p className={styles.p}>
          El código que escribe un desarrollador externo dentro de tu equipo se
          queda en tu empresa. Las personas rotan bastante en este modelo,
          porque cambian de proyecto, de proveedor y a veces de país. Si cada
          persona que pasó por el puesto armó los robots a su manera, quien
          llega después tarda medio día en encontrar dónde está definida una
          ruta. Ese medio día lo pagas tú cada vez que alguien rota.
        </p>
        <p className={styles.p}>
          Nosotros entregamos con el mismo estándar en cualquier modelo de
          contratación. Para evaluar el de un proveedor, pregúntale cómo se
          cambia la carpeta de descarga de un robot que ya está en producción.
          Una respuesta del tipo &quot;hay que abrir el flujo y buscar dónde
          quedó escrita la ruta&quot; anticipa un robot caro de mantener. En los
          nuestros, ese tipo de parámetro está en un archivo <code>.ini</code>{" "}
          separado, dentro de la carpeta de recursos, y se modifica sin tocar el
          robot.
        </p>
        <p className={styles.p}>
          La segunda pregunta es qué pasa si hay que reprocesar el día de ayer.
          Cada uno de nuestros proyectos lleva su propia base SQLite local con
          el registro de lo que ya procesó, y esa base impide que un reproceso
          duplique operaciones.
        </p>
        <p className={styles.p}>
          Pide el estándar por escrito antes de que se escriba la primera línea
          de código, aunque sea el del proveedor. Es un anexo de unas dos
          páginas. Lo tratamos con más detalle en{" "}
          <IntLink href="/blog/de-1-robot-a-un-centro-de-excelencia-de-automatizacion">
            de 1 robot a un Centro de Excelencia
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Cómo medir a un desarrollador que no entrega proyectos
        </h2>
        <p className={styles.p}>
          Lo que proponemos es acordar un compromiso por período con dos
          números: cuántos procesos pasan a producción y qué parte del mes se
          reserva para sostener los robots que ya están en operación.
        </p>
        <p className={styles.p}>
          Acordar el segundo número evita una discusión típica del cuarto mes.
          Un desarrollador que además opera diez robots no tiene ocho horas
          diarias para desarrollo nuevo, aunque su contrato diga cuarenta horas
          semanales. De dónde sale esa carga de mantenimiento lo explicamos
          en{" "}
          <IntLink href="/blog/mantenimiento-de-robots-rpa">
            mantenimiento de robots RPA
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Pide además que ambos números salgan de sistemas que la persona
          evaluada no pueda editar, porque un reporte de avance escrito por ella
          misma no permite verificar nada. En nuestro caso, Rocketbot, el
          orquestador, maneja la agenda de ejecuciones y el reparto del trabajo
          entre máquinas, y{" "}
          <IntLink href="/blog/como-monitorear-robots-rpa-en-produccion">
            Robotipy Monitor
          </IntLink>{" "}
          registra qué se ejecutó, qué falló y con qué logs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Los accesos se definen antes del primer día</h2>
        <p className={styles.p}>
          Un desarrollador de automatización casi siempre necesita más permisos
          que uno de software tradicional, porque entra a los sistemas
          transaccionales con una cuenta que ejecuta operaciones reales. Si para
          eso usa la cuenta personal de alguien del equipo, tienes un problema
          de auditoría desde el primer día y nadie lo va a notar hasta que
          llegue una revisión.
        </p>
        <p className={styles.p}>
          Antes de que la persona empiece, deja definido qué cuenta de servicio
          usa cada robot, dónde se guardan las credenciales, quién las rota y
          qué pasa el día que termina el contrato. Se resuelve en una
          conversación de treinta minutos con el área de seguridad durante la
          semana previa al inicio. Cuando se posterga, el proyecto suele
          frenarse en la misma semana en que había que entregar. El tema
          completo está en{" "}
          <IntLink href="/blog/seguridad-y-gobierno-en-proyectos-de-rpa">
            seguridad y gobierno en proyectos de RPA
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

      <section className="space-y-6">
        <hr className="border-white/10" />
        <p className={styles.p}>
          Si estás decidiendo entre formar un equipo interno, contratar
          proyectos o sumar a alguien por dedicación, primero define qué
          procesos conviene automatizar y después elige el modelo para
          ejecutarlos. Lo primero lo tratamos en{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            cómo priorizar qué procesos automatizar
          </IntLink>
          , y los criterios para evaluar a un proveedor están en{" "}
          <IntLink href="/blog/como-elegir-un-partner-de-rpa-en-latam">
            cómo elegir un partner de RPA en LatAm
          </IntLink>
          .
        </p>
      </section>
    </>
  ),
};
