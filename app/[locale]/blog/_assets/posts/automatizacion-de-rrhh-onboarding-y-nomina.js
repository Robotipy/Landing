import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/automatizacion-de-rrhh-onboarding-y-nomina/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿El robot reemplaza al software de sueldos?",
    a: "No. El software de sueldos calcula y el robot le entrega los datos limpios y revisa lo que salió. La capa de cálculo ya la pagas.",
  },
  {
    q: "¿Qué pasa con los datos personales que maneja el robot?",
    a: "Deben tratarse igual que cuando los maneja una persona, bajo las leyes de protección de datos de tu país. La diferencia es que el robot usa una cuenta de servicio propia, con los permisos exactos del proceso, y deja registro de cada dato que tocó. La planilla que viaja por correo no registra quién la abrió, así que un ciclo de novedades ejecutado por robot es más trazable que el mismo ciclo hecho a mano. Aun así, el proyecto tiene que definir desde el diseño dónde se guardan los archivos intermedios y por cuánto tiempo.",
  },
  {
    q: "¿Cuánto tarda un proyecto así?",
    a: "Depende de cuántas fuentes de novedades tengas y de si el software de sueldos permite carga masiva o hay que operarlo por pantalla. Un ciclo de novedades con tres o cuatro fuentes suele estar en producción en unas seis a ocho semanas, incluido un ciclo completo de nómina en paralelo. Es una estimación nuestra basada en proyectos anteriores, que no debe leerse como un plazo garantizado.",
  },
  {
    q: "¿Sirve si mi software de sueldos es antiguo y no tiene API?",
    a: "Sí. En ese escenario RPA rinde más que otras alternativas, porque el robot opera el sistema por la misma pantalla que usa hoy el equipo de sueldos, sin pedirle nada al proveedor del software. Si el sistema tiene API o importación masiva, el robot la usa y la ejecución es más rápida y más estable.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "automatizacion-de-rrhh-onboarding-y-nomina";

export const post = {
  slug,
  locale: "es",
  title: "Automatización de RR.HH.: onboarding y nómina con RPA",
  description:
    "Automatización de RR.HH. con RPA: qué conviene automatizar en las novedades de nómina y en el alta y la baja de usuarios, y qué parte no necesita un robot.",
  keywords: [
    "automatización de RR.HH.",
    "automatizar nómina",
    "RPA en recursos humanos",
    "automatizar onboarding",
    "novedades de nómina",
    "robots para recursos humanos",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-02",
  image: {
    src: thumbnail,
    urlRelative: "/blog/automatizacion-de-rrhh-onboarding-y-nomina/header.jpeg",
    alt: "Automatización de RR.HH.: onboarding y nómina con RPA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tu equipo de RR.HH. consolida las novedades de nómina a mano?",
    texto:
      "Revisamos tus fuentes de novedades y tu software de sueldos, y te decimos qué parte conviene automatizar primero.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo priorizar qué automatizar",
    linkUrl: "/blog/como-priorizar-que-procesos-automatizar",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Los errores de nómina aparecen el día del pago, cuando cada empleado
          revisa su recibo. Quien encuentra una hora extra mal pagada se salta
          el sistema de tickets y va directo al escritorio de RR.HH. o reclama
          en el grupo de WhatsApp. Por eso, cuando un gerente de RR.HH. nos pide
          automatizar, casi siempre está pensando en la noche del cierre y en
          cómo llegar a ella sin errores pendientes.
        </p>
        <p className={styles.p}>
          En las empresas que conocemos, RR.HH. es de las últimas áreas en
          automatizar. Finanzas ya tiene su robot de{" "}
          <IntLink href="/blog/como-automatizar-la-facturacion-electronica">
            facturación
          </IntLink>{" "}
          o de{" "}
          <IntLink href="/blog/como-automatizar-el-cierre-contable-mensual">
            cierre contable
          </IntLink>{" "}
          y operaciones tiene los suyos, mientras RR.HH. sigue consolidando
          planillas a mano. Ocurre porque sus procesos son mensuales o
          quincenales y los análisis de priorización tradicionales premian el
          volumen diario. Ese criterio ignora que la nómina tiene una fecha
          límite fija y que cualquier atraso lo nota toda la empresa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué se automatiza en la nómina</h2>
        <p className={styles.p}>
          En la nómina automatizamos la consolidación de novedades, la etapa que
          más tiempo consume y donde aparecen los errores. En las empresas con
          las que trabajamos, las novedades llegan de varios lados a la vez:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            la planilla de horas extra que manda cada jefe de área
          </li>
          <li className={styles.li}>las marcaciones del reloj de asistencia</li>
          <li className={styles.li}>
            las licencias, cargadas en un sistema que no se comunica con el de
            sueldos
          </li>
          <li className={styles.li}>
            los descuentos por adelantos, que quedaron en algún correo
          </li>
        </ul>
        <p className={styles.p}>
          Hoy alguien de RR.HH. junta todo eso a mano antes de la fecha de
          corte, lo convierte al formato que pide el software de sueldos y lo
          carga. Es una tarea que se repite cada período con reglas claras, y
          cuando falla le cuesta a RR.HH. la confianza de los empleados. Por eso
          es buena candidata para automatizar.
        </p>
        <p className={styles.p}>
          Un robot para este ciclo recolecta las planillas desde las
          casillas de correo y carpetas acordadas y valida cada novedad contra
          las reglas que define RR.HH. (empleado activo, período correcto, tope
          de horas, autorización presente). Lo que no pasa la validación queda
          en un reporte para que lo resuelva una persona, y al sistema de
          sueldos solo se carga lo que quedó limpio.
        </p>
        <p className={styles.p}>
          Cada novedad procesada queda registrada en la base SQLite local del
          proyecto. Si una planilla llega dos veces o hay que reprocesar un día,
          nada se carga duplicado. Las fechas de corte y las rutas de las
          casillas están en el archivo de configuración del proyecto, fuera del
          flujo, y se cambian sin tocar el robot cuando cambian los períodos de
          nómina.
        </p>
        <p className={styles.p}>
          El cálculo de sueldos queda en tu software, con las tablas tributarias
          y previsionales de cada país mantenidas por gente que se dedica a eso.
          Reescribirlo en un robot sería pagar dos veces por algo que ya
          funciona y asumir una responsabilidad legal que ningún proveedor serio
          de RPA quiere tener.
        </p>
        <p className={styles.p}>
          Un segundo robot, más corto, hace el control inverso, y es el que más
          valoran los equipos de sueldos. Cuando el software termina de
          calcular, compara cada recibo con las novedades que entraron. Si
          alguien cargó 10 horas extra y el recibo muestra 100, la diferencia
          aparece en un reporte antes de que se publiquen los recibos.
        </p>
        <p className={styles.p}>
          En nómina, el robot funciona en paralelo al proceso manual durante al
          menos un ciclo completo, y el proceso antiguo se apaga únicamente
          cuando ambos resultados cuadran. Ese período está incluido en el
          proyecto y nunca lo omitimos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Onboarding: altas y bajas de accesos</h2>
        <p className={styles.p}>
          En el onboarding, el trabajo operativo está en las altas de accesos.
          Una persona que entra a trabajar necesita usuario de red, correo,
          acceso al ERP, alta en el sistema de asistencia y alta en el seguro de
          salud. Cada una de esas altas la hace un equipo distinto con su propio
          tiempo de respuesta, y el cuello de botella suele estar en TI. Cuando
          el alta tarda una semana, el empleado nuevo pasa esos días sin entrar
          a los sistemas que necesita mientras su jefe persigue tickets.
        </p>
        <p className={styles.p}>
          Un robot de onboarding toma el alta desde el sistema de RR.HH. o desde
          una planilla acordada, que funciona como punto de partida si tiene un
          formato definido. A partir de ahí crea el usuario, lo asigna a los
          grupos de su cargo según una matriz de perfiles que se define una sola
          vez, da las altas en los sistemas de la lista y registra qué se creó,
          cuándo y con qué perfil. Así, el alta queda lista el día anterior al
          ingreso, en lugar de tomar días de tickets encadenados.
        </p>
        <p className={styles.p}>
          El mismo robot, con la misma matriz, ejecuta el proceso inverso el día
          del egreso y genera la evidencia de que se revocaron todos los
          accesos. Sin ese paso, una baja puede tardar un mes y el exempleado
          conserva acceso al ERP y al correo corporativo desde su casa. Si tu
          empresa va camino a la certificación ISO 27001, esa evidencia
          automática de bajas es lo que el auditor va a pedir. Un proceso de
          accesos sin dueño claro queda registrado como hallazgo. Lo tratamos
          con más detalle en{" "}
          <IntLink href="/blog/seguridad-y-gobierno-en-proyectos-de-rpa">
            seguridad y gobierno en proyectos de RPA
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Contratos, certificados y otros documentos</h2>
        <p className={styles.p}>
          Entre la nómina y el onboarding se acumulan contratos firmados,
          certificados médicos, títulos y constancias. Llegan en PDF, en fotos
          de celular o escaneados torcidos, y alguien los lee para digitar tres
          datos en un sistema. Esa lectura hoy se resuelve con{" "}
          <IntLink href="/blog/idp-procesamiento-inteligente-de-documentos">
            procesamiento inteligente de documentos
          </IntLink>
          . El robot extrae los datos del certificado o del contrato, los valida
          contra la ficha del empleado y archiva el documento con nombre y
          clasificación. Un certificado médico procesado así entra al ciclo de
          nómina como licencia, sin que nadie la digite. Con ese enlace, las
          automatizaciones de nómina, onboarding y documentos comparten datos y
          se pueden diseñar como un solo flujo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo no conviene automatizar RR.HH.</h2>
        <p className={styles.p}>
          Si tu empresa paga 15 sueldos y las novedades del mes caben en una
          planilla que se completa en una tarde, no necesitas un robot. Te sirve
          más un buen software de sueldos o una firma contable externa que lo
          haga por ti. En la práctica, el punto de quiebre aparece cuando una
          novedad pasa por varias fuentes y varios responsables antes de llegar
          a sueldos. Cada persona que toca el dato suma tiempo y errores, sin
          importar cuántos empleados tenga la empresa.
        </p>
        <p className={styles.p}>
          Tampoco empezaríamos por RR.HH. si el proceso todavía cambia todos los
          meses. Si la regla de qué hora extra se paga doble depende de a quién
          le preguntes, primero hay que{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            documentar el proceso
          </IntLink>{" "}
          y cerrar esa discusión.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuánto cuesta y por dónde empezar</h2>
        <p className={styles.p}>
          En promedio, el desarrollo de un proyecto de este tipo comienza en
          unos <strong className={styles.strong}>USD 6.000</strong>, con el
          período en paralelo incluido. El detalle de ese número y lo que pasa
          con la licencia están en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Cuando hacemos{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            la priorización
          </IntLink>{" "}
          entre nómina, onboarding y documentos, el ciclo de novedades de nómina
          suele quedar primero. Pesan las razones de la primera sección y
          también que el proceso ya está definido, porque alguien lo ejecuta
          hace años. El onboarding va segundo, y conviene diseñarlo desde el
          comienzo con la baja incluida.
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
