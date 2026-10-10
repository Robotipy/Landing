import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/automatizacion-en-el-sector-salud/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Qué pasa con los datos de salud que procesa el robot?",
    a: "En la mayoría de las leyes de protección de datos de la región, los datos de salud tienen un tratamiento más estricto que casi cualquier otro dato personal. Por eso hay que definir desde el diseño qué se guarda, por cuánto tiempo y quién puede acceder a los archivos intermedios que el robot genera mientras trabaja. El robot usa una cuenta de servicio propia, con permisos limitados a lo que el proceso necesita, y registra cada archivo que toca. Eso deja más trazabilidad que el mismo trámite hecho a mano por varias personas durante el día. Este punto se revisa con el equipo legal del centro de salud antes de empezar el proyecto, con los criterios de seguridad y gobierno en proyectos de RPA.",
  },
  {
    q: "¿Cuánto tarda un proyecto de autorizaciones?",
    a: "Un flujo que cubre dos o tres financiadores suele estar en producción en un plazo de siete a nueve semanas, incluida la marcha blanca, que se hace en paralelo al proceso manual. Es una estimación basada en nuestros proyectos anteriores.",
  },
  {
    q: "¿Y si trabajamos con diez financiadores distintos?",
    a: "Se puede. El tamaño del proyecto depende de cuántos portales distintos hay que operar. El volumen de pacientes casi no influye. Lo habitual es salir a producción con los dos o tres financiadores de más volumen y sumar el resto en etapas posteriores, sin esperar a tener los diez listos. Un desarrollo de este tipo cuesta desde unos USD 6.000, con la marcha blanca incluida, y el soporte posterior, si se contrata, desde USD 300 al mes. El desglose está en cuánto cuesta automatizar un proceso.",
  },
];

// Respuestas con enlaces internos para el render (mismo texto que faqs[i].a).
const faqsJsx = [
  null,
  null,
  (
    <>
      Se puede. El tamaño del proyecto depende de cuántos portales distintos
      hay que operar. El volumen de pacientes casi no influye. Lo habitual es
      salir a producción con los dos o tres financiadores de más volumen y
      sumar el resto en etapas posteriores, sin esperar a tener los diez
      listos. Un desarrollo de este tipo cuesta desde unos USD 6.000, con la
      marcha blanca incluida, y el soporte posterior, si se contrata, desde USD
      300 al mes. El desglose está en{" "}
      <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
        cuánto cuesta automatizar un proceso
      </IntLink>
      .
    </>
  ),
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "automatizacion-en-el-sector-salud";

export const post = {
  slug,
  locale: "es",
  title: "Automatización en el sector salud: qué procesos rinden con RPA",
  description:
    "Automatización en salud con RPA: qué procesos de clínicas y laboratorios automatizar, de autorizaciones a resultados, y qué decisiones no le tocan al robot.",
  keywords: [
    "automatización en salud",
    "RPA en salud",
    "automatizar clínicas",
    "automatizar autorizaciones médicas",
    "RPA para hospitales",
    "automatización de historias clínicas",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-27",
  image: {
    src: thumbnail,
    urlRelative: "/blog/automatizacion-en-el-sector-salud/header.jpeg",
    alt: "Automatización en el sector salud: qué procesos rinden con RPA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Con cuántos financiadores trabajas?",
    texto:
      "Cuéntanos cuántos son y cuántas autorizaciones tramita tu equipo al mes. Con eso vemos en una llamada por qué portal conviene empezar.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo priorizar qué procesos automatizar",
    linkUrl: "/blog/como-priorizar-que-procesos-automatizar",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En los centros de salud con los que conversamos, pocas autorizaciones
          médicas salen aprobadas en la primera pantalla sin que alguien de la
          clínica tenga que llamar por teléfono para preguntar por qué siguen
          pendientes. La causa casi nunca es clínica. Una persona entra al
          portal del financiador y copia a mano datos que ya están en la
          historia clínica. Adjunta la orden médica. Después vuelve cada día a
          ver si hubo respuesta, porque ningún portal avisa cuando un trámite
          cambia de estado.
        </p>
        <p className={styles.p}>
          La salud llega tarde a la automatización por un motivo parecido al de
          otros sectores regulados. El HIS, o historia clínica electrónica, de
          muchas clínicas se armó con módulos de distintos proveedores comprados
          a lo largo de los años. Es un producto antiguo y no tiene una API que
          converse con el resto de los sistemas. Con los financiadores ocurre
          algo similar: cada uno tiene su propio portal, con formularios y
          reglas distintas, y no hay forma de integrarse a nivel de sistema con
          todos a la vez.
        </p>
        <p className={styles.p}>
          Un robot de RPA opera esos portales y el HIS por la misma pantalla que
          usa hoy el equipo administrativo. No hay que pedirle nada al proveedor
          del HIS ni esperar a que un financiador abra una API que tal vez nunca
          llegue. Ese es el escenario donde más rinde, porque una integración
          tradicional con cada sistema suele salir cara y a veces es imposible
          de conseguir.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Autorizaciones y preautorizaciones médicas</h2>
        <p className={styles.p}>
          Una prestación que requiere autorización previa, como una resonancia,
          una cirugía programada o un medicamento de alto costo, no se agenda ni
          se factura hasta que el financiador la aprueba. Mientras tanto,
          alguien de admisión o de facturación revisa la cobertura del paciente,
          carga la orden médica y los datos del plan en el portal que
          corresponde, y espera. Si la respuesta se demora, la cita queda en el
          aire y el paciente llama a preguntar. Cuando la autorización se pierde
          o lleva un dato mal ingresado, la prestación se realiza igual y
          después nadie la cobra.
        </p>
        <p className={styles.p}>
          La orden médica entra al flujo apenas se genera. El robot valida
          contra el padrón de cobertura vigente qué plan tiene el paciente y si
          esa prestación requiere autorización previa según las reglas del
          financiador. Si la requiere, carga la solicitud en el portal con los
          datos y documentos que pide ese trámite. Cada solicitud enviada queda
          registrada en la base SQLite local del proyecto junto con el número de
          trámite que devuelve el portal. Con ese registro, un reproceso del
          mismo día no carga dos veces la misma autorización.
        </p>
        <p className={styles.p}>
          Qué prestaciones requieren autorización en cada financiador cambia
          cada vez que ese financiador actualiza sus coberturas. Por eso esas
          reglas quedan en el archivo de configuración del proyecto. Cuando
          cambian, basta con editar ese archivo. Los usuarios y contraseñas de
          cada portal también se guardan fuera del flujo.
        </p>
        <p className={styles.p}>
          Una vez cargada la solicitud, el robot vuelve a entrar al portal todos
          los días, a una hora fija, para revisar el estado. Sin automatización,
          ese seguimiento suele quedar en una planilla que alguien abre una vez
          por semana, cuando se acuerda. Si el trámite sigue pendiente después
          del plazo que define ese financiador, o si fue rechazado, el robot
          genera un aviso con el motivo que informó el portal, para que alguien
          del área lo gestione.
        </p>
        <p className={styles.p}>
          Al{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            priorizar
          </IntLink>{" "}
          entre los procesos de este artículo, las autorizaciones suelen quedar
          primero porque son las que más dinero mueven de forma directa: una
          autorización perdida o mal cargada es una prestación que se hizo y no
          se cobra. La consolidación de resultados de laboratorio libera más
          horas administrativas, aunque su efecto en caja se nota más lento.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Resultados de laboratorio e imágenes</h2>
        <p className={styles.p}>
          Un laboratorio externo o un centro de imágenes envía el resultado por
          correo en PDF, o lo publica en su propio portal para descarga. Alguien
          tiene que bajarlo, identificar a qué paciente y a qué orden
          corresponde, y subirlo a la historia clínica, que es donde el médico
          tratante espera encontrarlo. Con un volumen alto, la tarea se acumula
          y el resultado llega tarde aunque el laboratorio lo haya entregado a
          tiempo.
        </p>
        <p className={styles.p}>
          El robot descarga el archivo y extrae los datos que identifican al
          paciente y la orden, con las técnicas de{" "}
          <IntLink href="/blog/idp-procesamiento-inteligente-de-documentos">
            IDP: procesamiento inteligente de documentos
          </IntLink>
          . Antes de subir nada, cruza esos datos con el registro del paciente
          en el HIS. Si no hay una coincidencia exacta, por ejemplo un nombre
          parecido o un número de documento que no cuadra, el resultado queda en
          una cola para que un administrativo lo confirme a mano. La lectura
          clínica del resultado, incluido decidir si un valor es normal o
          crítico, queda fuera del robot.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Confirmación de citas y ausentismo</h2>
        <p className={styles.p}>
          Es un flujo acotado y rentable. El robot confirma las citas por
          WhatsApp o SMS uno o dos días antes. Si el paciente no responde dentro
          de un plazo definido, libera ese horario en la agenda para que lo
          ocupe otra persona.
        </p>
        <p className={styles.p}>
          Las inasistencias sin aviso son uno de los costos menos visibles de un
          centro de salud: al profesional se le paga igual y el horario se
          pierde. El robot se ejecuta cada mañana y le quita a la recepción las
          llamadas a pacientes uno por uno.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Facturación a financiadores de salud</h2>
        <p className={styles.p}>
          Una vez realizada la prestación, y autorizada si correspondía, hay que
          facturarla. Cada financiador pide un formato de presentación distinto
          y usa su propia codificación de prestaciones. Los plazos de rendición
          también cambian de uno a otro.
        </p>
        <p className={styles.p}>
          La mecánica es la misma que describimos en{" "}
          <IntLink href="/blog/como-automatizar-la-facturacion-electronica">
            cómo automatizar la facturación electrónica
          </IntLink>
          . El robot consolida las prestaciones del período y prepara el archivo
          o la carga en el portal de cada financiador. Lo que no cuadra con el
          padrón queda aparte, y alguien lo revisa antes de presentar para
          evitar el rechazo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo no conviene usar RPA en salud</h2>
        <p className={styles.p}>
          Un consultorio que atiende veinte pacientes al día, con una sola
          persona que maneja todas las autorizaciones de memoria, todavía no
          necesita un robot. Lo urgente ahí es que esa persona documente cómo lo
          hace, porque el día que sale de vacaciones las autorizaciones se
          detienen, haya automatización o no. Automatizar empieza a tener
          sentido con varios financiadores y varios administrativos que hacen lo
          mismo cada uno a su manera, cuando el volumen ya no cabe en la cabeza
          de una persona.
        </p>
        <p className={styles.p}>
          Nunca usaríamos RPA para algo que se parezca a una decisión clínica,
          aunque el financiador te ofrezca un algoritmo que promete priorizar
          casos según urgencia. Esas decisiones requieren trazabilidad médica y
          una responsabilidad profesional que un robot de automatización de
          procesos no está diseñado para asumir.
        </p>
        <p className={styles.p}>
          La aprobación de una autorización tampoco pasa por el robot. Depende
          del financiador y de sus reglas de cobertura. El robot prepara y
          presenta el trámite, y avisa cuando hay que actuar sobre la respuesta.
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
        <p className={styles.p}>
          Si la clínica también tramita con compañías de seguros, varios de
          estos procesos se cruzan con lo que contamos en{" "}
          <IntLink href="/blog/automatizacion-en-seguros-polizas-y-siniestros">
            automatización en seguros: pólizas y siniestros
          </IntLink>
          . Para decidir a quién encargarle un proyecto así, escribimos sobre
          <PostLink slug="como-elegir-un-partner-de-rpa-en-latam">cómo elegir un partner de RPA en LatAm</PostLink>.
        </p>
      </section>
    </>
  ),
};
