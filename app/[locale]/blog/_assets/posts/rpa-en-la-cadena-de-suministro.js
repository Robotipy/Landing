import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/rpa-en-la-cadena-de-suministro/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿El robot decide cuánto stock pedir?",
    a: "No. Arma un borrador con las reglas de reposición de esa categoría, y compras confirma o ajusta la cantidad antes de enviar la orden.",
  },
  {
    q: "¿Sirve si algunos proveedores trabajan con EDI y otros con portales manuales?",
    a: "Sí. Esa mezcla es habitual en empresas medianas de la región. El robot usa el canal de cada proveedor: si hay EDI, toma ese archivo, y si no, opera el portal como lo haría una persona. Las reglas de cada proveedor, incluido su canal, quedan en la configuración del proyecto.",
  },
  {
    q: "¿Qué pasa si un proveedor cambia su portal de un día para otro?",
    a: "El robot se detiene solo para ese proveedor, hasta que se ajusta la parte que lee su pantalla. Los demás siguen funcionando con normalidad. Toda automatización que depende de una interfaz de terceros tiene ese riesgo, y por eso conviene monitorear las ejecuciones en lugar de suponer que siempre salen bien. Lo explicamos en cómo monitorear robots RPA en producción.",
  },
  {
    q: "¿Cuánto tarda un proyecto de three-way match?",
    a: "Contra un solo ERP y con datos de entrada limpios, estimamos que puede quedar en producción en pocas semanas. Cada sistema adicional alarga ese plazo.",
  },
  {
    q: "¿Y si ya tenemos un robot de facturación electrónica funcionando?",
    a: "Se puede reutilizar buena parte de la lógica de extracción de documentos y de la base de datos local de control. Antes de cotizar un proyecto nuevo desde cero, conviene revisar juntos lo que ya existe. Esa revisión también aplica si ya automatizaste cuentas por pagar.",
  },
];

// Respuestas con enlaces internos para el render (mismo texto que faqs[i].a).
const faqsJsx = [
  null,
  null,
  (
    <>
      El robot se detiene solo para ese proveedor, hasta que se ajusta la parte
      que lee su pantalla. Los demás siguen funcionando con normalidad. Toda
      automatización que depende de una interfaz de terceros tiene ese riesgo,
      y por eso conviene monitorear las ejecuciones en lugar de suponer que
      siempre salen bien. Lo explicamos en{" "}
      <IntLink href="/blog/como-monitorear-robots-rpa-en-produccion">
        cómo monitorear robots RPA en producción
      </IntLink>
      .
    </>
  ),
  null,
  (
    <>
      Se puede reutilizar buena parte de la lógica de extracción de documentos
      y de la base de datos local de control. Antes de cotizar un proyecto
      nuevo desde cero, conviene revisar juntos lo que ya existe. Esa revisión
      también aplica si ya automatizaste{" "}
      <IntLink href="/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas">
        cuentas por pagar
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

const slug = "rpa-en-la-cadena-de-suministro";

export const post = {
  slug,
  locale: "es",
  title: "RPA en la cadena de suministro: los procesos que rinden con automatización",
  description:
    "RPA en la cadena de suministro: cómo automatizar el three-way match, las alertas de quiebre de stock y el seguimiento de pedidos en portales de proveedores.",
  keywords: [
    "RPA en la cadena de suministro",
    "automatización de supply chain",
    "automatizar logística",
    "RPA para logística",
    "three-way match automatizado",
    "automatización de compras y reposición",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.logistica),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-06",
  image: {
    src: thumbnail,
    urlRelative: "/blog/rpa-en-la-cadena-de-suministro/header.jpeg",
    alt: "RPA en la cadena de suministro: los procesos que rinden con automatización",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tu equipo cuadra órdenes de compra, recepciones y facturas a mano?",
    texto:
      "Revisamos tus proveedores, tus sistemas y los canales por donde llegan los documentos, y te decimos qué proceso conviene automatizar primero.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Automatizar cuentas por pagar",
    linkUrl: "/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Una empresa que compra insumos a una docena de proveedores recibe la
          documentación por canales distintos. Unos proveedores la mandan por
          correo y otros la suben a su propio portal. Alguno sigue con un EDI
          que se instaló hace diez años y que nadie quiere tocar. Si es tu caso,
          lo más probable es que el cuello de botella esté antes del transporte
          y del almacén, en el momento de cuadrar lo que llegó con lo que se
          pidió y con lo que registra el sistema. Mientras ese cuadre no esté
          hecho, no se puede pagar, facturar ni reponer sin arrastrar errores al
          mes siguiente.
        </p>
        <p className={styles.p}>
          En las empresas medianas con las que trabajamos, ese cuadre casi
          siempre se hace a mano. La orden de compra está en el ERP. La nota de
          entrega viene con el camión y la factura llega por separado. Ninguna
          de esas fuentes se comunica sola con las otras, y conectarlas con una
          integración tradicional suele ser un proyecto aparte, caro y lento de
          justificar.
        </p>
        <p className={styles.p}>
          Con RPA ese proyecto se puede evitar, porque el robot entra a cada
          sistema por la misma pantalla que hoy usa el equipo de compras o de
          recepción. Tampoco hace falta esperar a que un proveedor externo
          habilite una API, algo que puede no ocurrir nunca.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Three-way match: cruzar orden de compra, recepción y factura
        </h2>
        <p className={styles.p}>
          En compras se llama three-way match a verificar que lo pedido, lo
          recibido y lo facturado coincidan antes de autorizar el pago. De los
          procesos de este artículo, es el que mueve más dinero, y casi siempre
          justifica el proyecto por sí solo. Hecho a mano, alguien abre tres
          pantallas o tres papeles y compara cantidades, precios y códigos de
          producto uno por uno. A las cuatro de la tarde nadie relee dos veces
          la misma fila, y así se cuela un error de digitación.
        </p>
        <p className={styles.p}>
          El robot toma la factura y la nota de entrega apenas llegan, por
          correo o desde el portal del proveedor. Si todavía vienen en papel, se
          escanean. Los datos se extraen con el mismo motor de lectura de
          documentos que describimos en{" "}
          <IntLink href="/blog/idp-procesamiento-inteligente-de-documentos">
            IDP: procesamiento inteligente de documentos
          </IntLink>{" "}
          y se cruzan contra la orden de compra abierta en el ERP.
        </p>
        <p className={styles.p}>
          Cuando los tres documentos coinciden dentro de la tolerancia de ese
          proveedor, el registro pasa a la cola de pago sin intervención. Cada
          documento procesado queda anotado en la base SQLite local del
          proyecto, así que una segunda ejecución en el mismo día no vuelve a
          cargar la misma factura.
        </p>
        <p className={styles.p}>
          Si alguno de esos datos no cuadra, el robot aparta el caso y deja
          anotado qué campo falló y por cuánto. Compras recibe la diferencia ya
          calculada y no tiene que reconstruir el cruce desde cero.
        </p>
        <p className={styles.p}>
          Algunos proveedores aceptan un 2% de diferencia en precio y otros
          exigen coincidencia exacta. Esas tolerancias las negocia compras y
          cambian con cada renovación de contrato, por eso se guardan en el
          archivo de configuración del proyecto. Si estuvieran escritas dentro
          del flujo, habría que modificar el robot cada vez que cambian.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Alertas de reposición y quiebre de stock</h2>
        <p className={styles.p}>
          El segundo flujo vigila el stock y avisa cuando un producto se acerca
          a su punto de reposición, antes de que falte. Es más pequeño que el
          three-way match, y cada quiebre que evita se refleja en las ventas. La
          alternativa manual es revisar una hoja de cálculo de stock una vez por
          semana, cuando alguien se acuerda, y suele fallar en la semana de
          mayor demanda.
        </p>
        <p className={styles.p}>
          El robot hace la revisión en un horario fijo. Lee el stock en el ERP y
          en el sistema de almacén (lo habitual es que sean sistemas separados)
          y lo compara con las ventas o el consumo proyectados a partir de los
          últimos periodos. Si un ítem va a llegar a su punto de reposición
          antes de la próxima ejecución, genera una alerta o un borrador de
          orden de compra con el proveedor y la cantidad sugerida. Esa cantidad
          sale de las reglas que ya están definidas para cada categoría.
        </p>
        <p className={styles.p}>
          El borrador no se envía solo. Alguien de compras lo confirma o lo
          ajusta, por ejemplo para pedir más antes de una promoción o para dejar
          de comprarle a un proveedor problemático.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Seguimiento de pedidos en portales de proveedores
        </h2>
        <p className={styles.p}>
          Entrar a diario al portal de cada proveedor para ver si un pedido ya
          salió o si cambió la fecha de entrega consume muchas horas sueltas.
          Con diez proveedores son diez inicios de sesión al día. Alguien los
          hace entre otras tareas y muchas veces quedan para después.
        </p>
        <p className={styles.p}>
          El robot entra a cada portal, toma el estado actual del pedido y lo
          registra en el ERP o en un tablero centralizado. Si detecta una demora
          mayor al plazo acordado, o un cambio de estado a "rechazado" o "en
          revisión", genera un aviso con el motivo que informó el portal para
          que una persona lo gestione. Es el mismo seguimiento diario que usamos
          para autorizaciones médicas en{" "}
          <IntLink href="/blog/automatizacion-en-el-sector-salud">
            automatización en el sector salud
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Documentación de comercio exterior</h2>
        <p className={styles.p}>
          Si tu empresa importa, también se puede automatizar la documentación
          de despacho. El robot reúne la factura comercial, el packing list y el
          certificado de origen y los compara con lo declarado. Con eso deja la
          carpeta armada antes de que la pida el agente de aduanas o la propia
          aduana, y nadie tiene que salir a buscar cada papel cuando ya lo están
          pidiendo. No todos los proyectos lo necesitan, por eso lo tratamos
          como un módulo aparte que se suma al alcance cuando corresponde.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Con pocos proveedores, el cruce manual alcanza</h2>
        <p className={styles.p}>
          Si compras a dos o tres proveedores de bajo volumen y una sola persona
          hace el cruce entre orden, recepción y factura en menos de una hora a
          la semana, automatizarlo no recupera la inversión en un plazo
          razonable. La cuenta cambia cuando el número de proveedores, de
          sistemas o de documentos crece más rápido que el tiempo disponible de
          esa persona, y los errores empiezan a aparecer todas las semanas.
        </p>
        <p className={styles.p}>
          Hay dos decisiones que conviene dejar fuera del robot en cualquier
          caso: negociar con un proveedor y aprobar una compra fuera de
          presupuesto. El robot arma el caso con los números correctos y la
          decisión la toma tu equipo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Precio y plazo del proyecto</h2>
        <p className={styles.p}>
          Un desarrollo de este tipo cuesta en promedio unos{" "}
          <strong className={styles.strong}>USD 6.000</strong> e incluye la
          estabilización después de la puesta en producción. En{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>{" "}
          está el detalle de cómo se arma esa cifra. El soporte posterior es
          opcional y cuesta desde{" "}
          <strong className={styles.strong}>USD 300</strong> al mes.
        </p>
        <p className={styles.p}>
          El plazo depende más de la cantidad de sistemas que hay que integrar
          que del volumen de documentos. Un sistema de almacén separado o los
          portales de varios proveedores alargan el proyecto, porque cada portal
          es una integración distinta, con pantallas y lógica de inicio de
          sesión propias.
        </p>
        <p className={styles.p}>
          Si ya tienes algo integrado, por ejemplo el ERP con un proveedor
          específico, esa parte se reutiliza, igual que en cualquier{" "}
          <IntLink href="/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros">
            integración de RPA con tu ERP
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Por qué empezar por el three-way match</h2>
        <p className={styles.p}>
          Si vas a automatizar uno solo de estos procesos, empieza por el
          three-way match. Con los criterios de{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            priorización
          </IntLink>{" "}
          le gana a la reposición y al seguimiento de portales porque su
          impacto en caja es directo. Un error de conciliación que nadie detecta
          termina en dinero pagado de más o en una nota de crédito que nunca se
          reclama. La reposición automática libera más horas de planificación
          que el three-way match, aunque ese ahorro tarda varias semanas en
          notarse.
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
          Si tu empresa también factura a sus clientes, varios de estos procesos
          se cruzan con lo que explicamos en{" "}
          <IntLink href="/blog/como-automatizar-la-facturacion-electronica">
            cómo automatizar la facturación electrónica
          </IntLink>
          . Y si estás evaluando a quién encargarle un proyecto de este tamaño,
          revisa{" "}
          <IntLink href="/blog/como-elegir-un-partner-de-rpa-en-latam">
            cómo elegir un partner de RPA en LatAm
          </IntLink>
          .
        </p>
      </section>
    </>
  ),
};
