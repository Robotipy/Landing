import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa/header.jpeg";
import ButtonMain from "@/components/ButtonMain.js";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

// FAQs en texto plano para el JSON-LD FAQPage (lo emite [articleId]/page.js).
// El texto visible (faqsJsx) debe coincidir palabra por palabra con este array.
const faqs = [
  {
    q: "¿RPA en SAP necesita licencias especiales de SAP?",
    a: "No para operar la interfaz como lo haría un usuario. El robot usa un usuario de SAP con sus permisos. Y un consejo que sale de proyectos reales: no uses una cuenta genérica. En empresas con auditoría seria, las cuentas compartidas o genéricas directamente no se permiten. Lo correcto es un usuario dedicado al robot, con un rol acotado a las pocas transacciones que de verdad usa (en uno de nuestros proyectos de materiales fueron alrededor de cinco). Eso mantiene el control, la trazabilidad y te evita un freno de auditoría a mitad del proyecto.",
  },
  {
    q: "¿El robot se rompe cuando actualizamos SAP?",
    a: "Puede pasar si una actualización cambia las pantallas que el robot usa. Por eso el mantenimiento es parte del proyecto, no un extra. Un robot bien construido aísla esos puntos para que el ajuste sea rápido. Acá también ayuda monitorear los robots en producción para detectar la falla apenas ocurre.",
  },
  {
    q: "¿Es mejor RPA o una integración por API?",
    a: "Si existe una API o un BAPI para lo que necesitas, la integración suele ganar en velocidad y robustez. RPA es la mejor opción cuando esa puerta no está disponible o conectarla sale más caro que el problema. Muchas veces la solución óptima combina las dos.",
  },
  {
    q: "¿Cuánto tarda un primer proyecto de automatización en SAP?",
    a: "Depende del proceso, pero un caso acotado y bien documentado suele estar productivo en semanas, no meses. La clave es elegir un primer alcance chico y claro en vez de querer automatizar todo de una.",
  },
];

// Versiones con links inline. El texto debe ser idéntico al de faqs[].a.
const faqsJsx = [
  null,
  (
    <>
      Puede pasar si una actualización cambia las pantallas que el robot usa. Por eso el
      mantenimiento es parte del proyecto, no un extra. Un robot bien construido aísla esos puntos
      para que el ajuste sea rápido. Acá también ayuda{" "}
      <IntLink href="/monitor">monitorear los robots en producción</IntLink> para detectar la falla
      apenas ocurre.
    </>
  ),
  null,
  null,
];

const ui = {
  toc: "rounded-xl border border-white/10 border-l-4 border-l-accent bg-white/5 p-6 my-8",
  tocTitle: "text-xs uppercase tracking-widest font-bold text-accent mb-3",
  tocList: "list-decimal pl-5 space-y-1.5 text-white/90 text-[15px]",

  callout: (tone) =>
    `rounded-xl border-l-4 p-5 my-7 ${
      { blue: "border-accent bg-accent/10", green: "border-success bg-success/10" }[tone]
    }`,
  calloutTitle: (tone) =>
    `text-xs uppercase tracking-widest font-bold mb-2 ${
      { blue: "text-accent", green: "text-success" }[tone]
    }`,

  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",

  cta: "rounded-2xl p-10 my-12 text-center text-white bg-gradient-to-br from-primary via-secondary to-accent/40",
  ctaTitle: "text-2xl md:text-3xl font-extrabold mb-3",
  ctaText: "text-white/80 max-w-xl mx-auto mb-7",
};

const slug = "que-procesos-de-sap-se-pueden-automatizar-con-rpa";

export const post = {
  slug,
  locale: "es",
  title: "Qué procesos de SAP se pueden automatizar con RPA",
  description:
    "Guía práctica de qué procesos de SAP conviene automatizar con RPA, cuáles dejar a una API y cómo calcular el ROI. Con casos reales y errores a evitar.",
  keywords: [
    "automatizar SAP con RPA",
    "procesos de SAP automatizables",
    "RPA para SAP",
    "automatización SAP MM",
    "robot para SAP",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.IvanCabrera),
  publishedAt: "2026-06-27",
  image: {
    src: thumbnail,
    urlRelative:
      "/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa/header.jpeg",
    alt: "Automatización de procesos de SAP con RPA",
  },
  faq: faqs,
  content: (
    <>
      {/* ── INTRO ── */}
      <section className="space-y-4">
        <p className={styles.p}>
          SAP corre el negocio de buena parte de las empresas medianas y grandes de la región, y casi
          siempre tiene la misma escena detrás: una persona del equipo de finanzas, compras o
          abastecimiento metiendo datos transacción por transacción, pantalla por pantalla. Carga de
          facturas, creación de materiales, conciliaciones, reportes que se arman copiando y pegando.
          Trabajo que toma horas, que se hace igual todos los meses y donde un error de tipeo cuesta
          caro.
        </p>
        <p className={styles.p}>
          Ese es justo el terreno donde RPA rinde. Un robot opera SAP igual que una persona, usando la
          misma interfaz y las mismas credenciales, pero sin cansarse, sin distraerse y sin
          equivocarse en el dígito 14 de un código de material. La pregunta no es si SAP se puede
          automatizar. Se puede. La pregunta correcta es{" "}
          <strong className={styles.strong}>qué</strong> conviene automatizar primero y dónde el robot
          deja de tener sentido.
        </p>
        <p className={styles.p}>
          Si recién estás entrando al tema, te puede servir leer antes{" "}
          <IntLink href="/blog/que-es-rpa">qué es RPA</IntLink> y cómo opera un robot sobre la interfaz
          de un sistema.
        </p>
      </section>

      {/* ── TOC ── */}
      <nav className={ui.toc} aria-label="Tabla de contenidos">
        <div className={ui.tocTitle}>En este artículo</div>
        <ol className={ui.tocList}>
          <li>
            <a href="#por-que-sap" className="link link-hover">
              Por qué SAP es un buen candidato para RPA
            </a>
          </li>
          <li>
            <a href="#procesos" className="link link-hover">
              Los procesos de SAP que más conviene automatizar
            </a>
          </li>
          <li>
            <a href="#cuando-no" className="link link-hover">
              Cuándo NO conviene un robot (y qué usar en su lugar)
            </a>
          </li>
          <li>
            <a href="#roi" className="link link-hover">
              Cómo se calcula el ROI
            </a>
          </li>
          <li>
            <a href="#empezar" className="link link-hover">
              Por dónde empezar
            </a>
          </li>
          <li>
            <a href="#faq" className="link link-hover">
              Preguntas frecuentes
            </a>
          </li>
        </ol>
      </nav>

      {/* ── POR QUÉ SAP ── */}
      <section id="por-que-sap" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>Por qué SAP es un buen candidato para RPA</h2>
        <p className={styles.p}>Tres razones concretas, no de folleto.</p>
        <p className={styles.p}>
          La primera es que SAP es estable. Las transacciones (la ME21N de pedidos, la MIGO de
          entradas, la FB60 de facturas de acreedor) no cambian de un día para el otro. Un robot que
          aprende a navegar una pantalla la sigue navegando igual el mes que viene. Eso baja el costo
          de mantenimiento, que es donde mueren muchos proyectos de automatización mal pensados.
        </p>
        <p className={styles.p}>
          La segunda es el volumen repetitivo. Si tu equipo crea 800 materiales nuevos por mes o carga
          1.200 facturas, estás frente al caso ideal: misma tarea, muchas veces, reglas claras.
        </p>
        <p className={styles.p}>
          La tercera es la trazabilidad. Cuando un robot ejecuta el proceso, queda registro de qué
          hizo, cuándo y con qué datos. En un entorno auditado eso vale tanto como el ahorro de horas.
        </p>
      </section>

      {/* ── PROCESOS ── */}
      <section id="procesos" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>Los procesos de SAP que más conviene automatizar</h2>
        <p className={styles.p}>
          No todos los procesos rinden igual. Estos son los que, en nuestra experiencia implementando
          con <IntLink href="/blog/porque-elegir-rocketbot">Rocketbot</IntLink>, devuelven la
          inversión más rápido.
        </p>

        <h3 className={styles.h3}>Cuentas por pagar y carga de facturas</h3>
        <p className={styles.p}>
          Tomar la factura (PDF o XML), extraer los datos, validarlos contra la orden de compra y
          cargarlos en SAP. Es el caso más pedido porque el volumen es alto y el proceso es mecánico.
          Acá RPA suele combinarse con lectura inteligente de documentos para sacar los datos del PDF
          antes de cargarlos.
        </p>

        <h3 className={styles.h3}>Creación masiva de materiales y datos maestros (SAP MM)</h3>
        <p className={styles.p}>
          Alta de repuestos, productos o proveedores a partir de una planilla, usando las
          transacciones de siempre (MM01 para crear, MM02 para modificar). Es un trabajo donde una
          persona tarda varios minutos por registro y donde un error se propaga a todo el inventario.
          El robot toma la planilla, valida los campos contra las reglas del maestro y crea cada
          material en SAP con los datos correctos. En{" "}
          <IntLink href="/blog/caso-exito-automatizacion-ordenes-sap-siderurgia">
            proyectos de este tipo
          </IntLink>{" "}
          hemos visto procesos que pasaban de días de carga manual a unas pocas horas desatendidas. Un
          detalle que aprendimos en la práctica: la planilla de entrada casi nunca está perfecta, así
          que el robot tiene que estar preparado para apartar las filas con datos faltantes o no
          mapeados y dejar que una persona resuelva solo esas excepciones, en vez de frenar todo el
          lote.
        </p>

        <h3 className={styles.h3}>Conciliaciones y cierre contable</h3>
        <p className={styles.p}>
          Cruzar saldos entre SAP y otra fuente (un banco, otro sistema, un Excel), marcar diferencias
          y dejar el reporte listo para que una persona revise solo las excepciones. El robot no
          decide, prepara el trabajo para que el analista mire lo que importa. Lo hicimos, por ejemplo,
          en una{" "}
          <IntLink href="/blog/caso-exito-conciliacion-bancaria-agropecuario">
            conciliación bancaria de alto volumen
          </IntLink>
          .
        </p>

        <h3 className={styles.h3}>Reportes recurrentes</h3>
        <p className={styles.p}>
          Esos informes que alguien arma cada lunes entrando a varias transacciones, exportando a
          Excel y pegando. El robot entra, descarga, consolida y manda el reporte ya formateado. Suena
          chico, pero cuando lo multiplicas por la cantidad de reportes que una empresa hace por
          semana, el ahorro es real.
        </p>

        <h3 className={styles.h3}>Procesos de compras y ventas (de la OC al documento en SAP)</h3>
        <p className={styles.p}>
          Generar pedidos, seguir aprobaciones, registrar entradas de mercadería. Y del lado de
          ventas, el caso clásico que automatizamos seguido: una orden de compra entra por un canal (un
          CRM, un correo, un portal), el robot le extrae los datos y genera la nota de venta en SAP,
          creando el cliente si no existe. Acá conviene una aclaración honesta, porque no es solo
          &quot;el robot copia y pega&quot;: el cuello de botella real suele ser el diccionario de
          datos. Si el material o el cliente del documento de origen no está mapeado al código de SAP,
          el robot no puede adivinar. Por eso estos bots se apoyan en una tabla de equivalencias
          (nosotros la mantenemos en una base local) y derivan a una persona lo que no reconocen. Esa
          parte la subestima quien nunca lo construyó.
        </p>

        <h3 className={styles.h3}>Procesos administrativos de SAP Business One</h3>
        <p className={styles.p}>
          No todo es SAP grande. En empresas medianas con SAP Business One automatizamos ciclos
          completos: ingresar pedidos de varios portales, crear clientes, emitir facturas y boletas, y
          cerrar la orden de trabajo después del despacho. Un bot de este tipo corriendo varias veces
          al día se lleva una tarea que antes ocupaba a alguien toda la mañana.
        </p>
      </section>

      {/* ── CUÁNDO NO ── */}
      <section id="cuando-no" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>Cuándo NO conviene un robot (y qué usar en su lugar)</h2>
        <p className={styles.p}>
          Acá está la parte que muchos proveedores se saltan. RPA no siempre es la respuesta correcta
          para SAP.
        </p>
        <p className={styles.p}>
          Si tu SAP expone una <strong className={styles.strong}>API o un BAPI</strong> para lo que
          necesitas hacer, casi siempre conviene integrar por ahí antes que poner un robot a manejar
          pantallas. Una integración por API es más rápida, más robusta y no se rompe si cambia la
          interfaz. El robot tiene sentido cuando esa puerta no existe, está cerrada por política
          interna o conectarla cuesta más que el problema que resuelve.
        </p>
        <p className={styles.p}>
          En la práctica, lo más potente suele ser{" "}
          <IntLink href="/blog/rpa-vs-ia-agentica">combinar las dos cosas</IntLink> en un mismo
          proceso. En uno de nuestros bots de ventas, el robot navega la interfaz para armar el
          documento, pero los datos del cliente (la dirección a partir del RUT) los trae con una BAPI
          hecha a medida en vez de tipearlos a mano. La interfaz para lo que no tiene API, la API para
          lo que sí. Esa mezcla es casi siempre más sólida que forzar todo por un solo lado.
        </p>
        <p className={styles.p}>
          Tampoco conviene automatizar un proceso que cambia todo el tiempo, que depende del criterio
          de una persona en cada caso o que se ejecuta cinco veces al mes. El esfuerzo de construir y
          mantener el robot no se paga. Si el proceso es inestable, primero hay que ordenarlo; recién
          después automatizarlo.
        </p>
        <div className={ui.callout("blue")}>
          <div className={ui.calloutTitle("blue")}>El criterio honesto</div>
          <p className={styles.p}>
            Ser honesto en esto no es perder ventas. Es lo que distingue a un partner que quiere que el
            proyecto funcione de uno que quiere vender horas.
          </p>
        </div>
      </section>

      {/* ── ROI ── */}
      <section id="roi" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>Cómo se calcula el ROI</h2>
        <p className={styles.p}>
          La cuenta es directa. Tomas las horas mensuales que el equipo dedica hoy a la tarea, las
          multiplicas por el costo de esa hora, y lo comparas con el costo de construir y mantener el
          robot. Sumá del lado del beneficio lo que es más difícil de poner en un número pero pesa: los
          errores que dejas de cometer, el reproceso que se evita y la gente que vuelve a tareas de más
          valor.
        </p>
        <p className={styles.p}>
          Un proceso de carga que ocupa a dos personas medio día cada día{" "}
          <IntLink href="/blog/caso-exito-rpa-ia-mineria-costos">se paga solo en pocos meses</IntLink>.
          Por eso recomendamos empezar por un proceso de alto volumen y reglas claras: el primer robot
          tiene que demostrar el caso para que el resto de la organización lo acompañe. Si querés
          ponerle números a tu caso puntual, podés usar nuestra{" "}
          <IntLink href="/roi-calculator">calculadora de ROI de automatización</IntLink> o pedirnos un
          assessment del proceso.
        </p>
      </section>

      {/* ── EMPEZAR ── */}
      <section id="empezar" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>Por dónde empezar</h2>
        <p className={styles.p}>
          No arranques por el proceso más complejo ni por el que más te molesta. Arrancá por el que
          tenga la mejor combinación de volumen alto, reglas estables y datos limpios. Documentá cómo
          se hace hoy, paso a paso, antes de automatizar nada. Esa documentación es la mitad del
          proyecto y es lo que permite que el robot se construya bien a la primera.
        </p>
        <p className={styles.p}>
          Desde ahí, cada proceso que sumas usa la base que ya armaste. Así es como una empresa pasa de
          un robot suelto a un esquema ordenado de automatización que se{" "}
          <IntLink href="/monitor">monitorea</IntLink> y se mantiene en el tiempo.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>Preguntas frecuentes</h2>
        <div className="my-6">
          {faqs.map((f, i) => (
            <details key={i} className={ui.faqItem} open={i === 0}>
              <summary className={ui.faqQ}>
                <span>{f.q}</span>
                <span className="text-accent text-2xl font-light flex-shrink-0">+</span>
              </summary>
              <div className={ui.faqA}>{faqsJsx[i] || f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className={ui.cta}>
        <h2 className={ui.ctaTitle}>¿Tenés un proceso de SAP que hoy se hace a mano?</h2>
        <p className={ui.ctaText}>
          Escribinos y lo evaluamos sin compromiso: te decimos si conviene automatizarlo con RPA, por
          API o una mezcla de las dos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonMain href="/contact-us" text="Evaluar mi proceso de SAP" />
          <Link
            href="/blog/como-calcular-el-roi-en-proyectos-rpa"
            className="inline-block px-7 py-3 rounded-full border border-white/30 text-white font-semibold hover:border-white/60 transition-colors"
          >
            Cómo calcular el ROI
          </Link>
        </div>
      </div>
    </>
  ),
};
