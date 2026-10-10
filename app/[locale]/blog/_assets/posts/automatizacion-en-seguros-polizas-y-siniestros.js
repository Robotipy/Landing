import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/automatizacion-en-seguros-polizas-y-siniestros/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿El robot decide si un siniestro se paga o no?",
    a: "No. Arma el expediente, valida que esté completo y lo compara con los límites de la póliza. Cuando algo no cuadra lo detiene, y en ningún caso resuelve a favor del pago por su cuenta. La decisión de cobertura, sobre todo en casos límite, la toma una persona con la formación y la responsabilidad legal para hacerlo.",
  },
  {
    q: "¿Qué pasa con los datos médicos y personales de un siniestro?",
    a: "Se manejan con el mismo estándar que debería aplicar hoy cualquier persona que los revisa. El robot usa una cuenta de servicio propia, con los permisos que el proceso necesita y ninguno más, y registra cada documento que abre. Desde el diseño del proyecto se define dónde quedan los archivos intermedios y por cuánto tiempo, según la ley de protección de datos del país donde opera la aseguradora. El criterio completo está en nuestro artículo sobre seguridad y gobierno en proyectos de RPA.",
  },
  {
    q: "¿Sirve si nuestro sistema de pólizas es antiguo y no tiene API?",
    a: "Sí, y es donde RPA le saca más ventaja a una integración tradicional. El robot usa el sistema desde la misma pantalla que tu equipo de operaciones, así que no dependes de que el proveedor del sistema núcleo abra una integración que quizá nunca llegue. Si más adelante el sistema incorpora una API o carga masiva, el robot puede usarla y la ejecución se acelera, pero no hace falta esperarla para empezar.",
  },
  {
    q: "¿Cuánto tarda un proyecto de siniestros?",
    a: "Como referencia, y sin que sea un plazo garantizado, en nuestros proyectos anteriores un flujo de recepción y validación documental con dos o tres tipos de evento suele quedar en producción en ocho a diez semanas. Ese tiempo incluye la marcha blanca, en la que el robot funciona en paralelo al proceso manual hasta que los resultados coinciden.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "automatizacion-en-seguros-polizas-y-siniestros";

export const post = {
  slug,
  locale: "es",
  title: "Automatización en seguros: pólizas y siniestros",
  description:
    "Automatización en seguros con RPA: qué rinde en emisión de pólizas, documentos de siniestros y por qué el robot nunca decide si un siniestro se paga.",
  keywords: [
    "automatización en seguros",
    "RPA en seguros",
    "automatizar pólizas",
    "automatizar siniestros",
    "RPA para aseguradoras",
    "automatización de siniestros",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.fintech),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-19",
  image: {
    src: thumbnail,
    urlRelative: "/blog/automatizacion-en-seguros-polizas-y-siniestros/header.jpeg",
    alt: "Automatización en seguros: pólizas y siniestros",
  },
  faq: faqs,
  cta: {
    titulo: "¿Dónde pierde más tiempo tu aseguradora?",
    texto:
      "Escríbenos con el tamaño de tu cartera y el canal por donde entran los reclamos, y te decimos qué tramo conviene abordar primero.",
    botonLabel: "Escríbenos",
    botonUrl: "/contact-us",
    linkLabel: "Cómo priorizar qué procesos automatizar",
    linkUrl: "/blog/como-priorizar-que-procesos-automatizar",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En casi todas las aseguradoras y agencias con las que hablamos se
          repite el mismo cuadro. Un siniestro tiene toda la información
          necesaria para avanzar, pero está repartida en tres lugares que no se
          comunican. El sistema de pólizas sabe qué cubre el contrato. Las fotos
          del daño y el parte del asegurado llegaron por correo. El estado real
          de cada expediente está en una planilla que nadie reconoce como
          sistema oficial, aunque el equipo la usa como tal porque el sistema de
          pólizas se actualiza tarde.
        </p>
        <p className={styles.p}>
          Alguien pasa buena parte de su jornada copiando datos entre esos tres
          lugares. Ese traspaso es la parte que un robot hace mejor que una
          persona. Decidir si el siniestro se paga sigue siendo tarea del
          equipo.
        </p>
        <p className={styles.p}>
          El seguro trabaja con datos estructurados y plazos estrictos, con
          consecuencias legales si se incumplen, y por eso en teoría es un
          candidato natural para RPA. En la práctica llega tarde a la
          automatización, igual que otros sectores regulados. El sistema núcleo
          suele ser un sistema de administración de pólizas (policy admin
          system) o, en aseguradoras pequeñas, un ERP adaptado. Lleva años en
          uso, sin API o con integraciones caras, y nadie quiere intervenir el
          sistema del que depende toda la operación.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Emisión y renovación de pólizas</h2>
        <p className={styles.p}>
          Entre la cotización y la póliza emitida casi siempre hay una
          reescritura manual. El sistema de cotización captura los datos del
          cliente y del riesgo y calcula la prima. Después alguien vuelve a
          ingresar esos mismos datos en el sistema de pólizas para emitir el
          contrato definitivo, porque los dos sistemas no comparten base de
          datos. En el camino se revisan las reglas de suscripción: sumas
          aseguradas máximas, exclusiones, edades límite y documentación mínima
          según el producto.
        </p>
        <p className={styles.p}>
          El robot que construimos para este tramo toma la cotización aprobada y
          la traspasa al sistema de pólizas campo por campo. Antes de emitir
          aplica la misma matriz de reglas de suscripción que hoy revisa una
          persona con una lista impresa al lado, y la póliza sale solo si la
          cotización cumple todas. Las que fallan pasan a un reporte aparte con
          el motivo exacto por el que se detuvieron, para que las revise un
          suscriptor.
        </p>
        <p className={styles.p}>
          Los números de póliza y la fecha de vigencia no van escritos dentro
          del flujo. Quedan en el archivo de configuración del proyecto, junto
          con las rutas de las carpetas donde llegan las cotizaciones. Cada
          póliza emitida se registra en la base SQLite local del proyecto, así
          que si el robot reprocesa las cotizaciones del día no emite dos veces
          la misma.
        </p>
        <p className={styles.p}>
          Las renovaciones recorren el mismo camino en sentido inverso. El robot
          revisa la cartera según la fecha de vencimiento, arma la propuesta de
          renovación con la prima recalculada y la deja lista para que un agente
          la envíe. Nadie tiene que abrir una planilla el primer día de cada mes
          para saber qué pólizas vencen.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Recepción y validación de siniestros</h2>
        <p className={styles.p}>
          Un siniestro llega por correo, por un portal o, en muchas agencias,
          todavía por WhatsApp. Alguien lo lee, arma el expediente, verifica que
          la póliza esté vigente y que el evento tenga cobertura, y confirma que
          llegó toda la documentación que exige ese tipo de siniestro. Solo
          entonces lo deriva a un ajustador.
        </p>
        <p className={styles.p}>
          Automatizamos primero ese tramo, el que determina si el expediente
          está completo, porque es el que más tiempo del plazo de respuesta
          consume y casi no requiere criterio experto. El robot toma el
          siniestro en cuanto entra, cruza el número de póliza con el sistema
          para confirmar vigencia y cobertura, y compara la documentación
          recibida con el checklist de ese tipo de evento. Si en un robo falta
          el parte policial, o en un choque falta el presupuesto del taller,
          genera el pedido al asegurado con el documento puntual que falta. Sin
          automatización, ese faltante lo descubre un analista tres días
          después, cuando por fin abre el expediente. El caso entra a la cola
          del ajustador solo cuando está completo, con todo cargado y ordenado.
        </p>
        <p className={styles.p}>
          Aprobar, rechazar o pedir una pericia adicional sigue siendo decisión
          de alguien con la formación para tomarla. El robot tampoco evalúa
          cobertura en casos límite ni estima el monto a pagar. Su tarea es
          entregar el expediente armado, para que quien decide no gaste tiempo
          en reunir papeles.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Documentos del siniestro y extracción de datos</h2>
        <p className={styles.p}>
          Un expediente de siniestro reúne fotos del daño, parte policial,
          certificado médico si hubo lesiones, presupuesto del taller y factura
          de reparación. Cada documento llega en un formato distinto, muchos
          como foto tomada con el celular, y alguien los abre uno por uno para
          transcribir los datos que importan: número de parte, monto del
          presupuesto y fecha del evento.
        </p>
        <p className={styles.p}>
          Esto se resuelve con la misma lógica que explicamos en{" "}
          <IntLink href="/blog/idp-procesamiento-inteligente-de-documentos">
            IDP: procesamiento inteligente de documentos
          </IntLink>
          . El modelo extrae los campos y el robot valida las cuentas: que la
          suma de los ítems del presupuesto coincida con el total y que la fecha
          del parte sea igual o posterior a la del evento. Si alguna validación
          falla, el documento queda marcado para revisión y el robot no sigue
          adelante con un valor supuesto.
        </p>
        <p className={styles.p}>
          En seguros hay una validación adicional que en facturación no existe,
          que es comparar contra los límites de la póliza. Si un presupuesto de
          taller supera el límite de cobertura del producto contratado, o un
          certificado médico menciona una condición preexistente excluida, el
          robot detiene el expediente y avisa a un analista antes de que avance
          hacia el pago.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Endosos sobre la base del robot de emisión</h2>
        <p className={styles.p}>
          Un endoso (agregar un conductor, cambiar la dirección del riesgo,
          ajustar la suma asegurada) usa el mismo motor que la emisión. También
          comparte reglas de validación con siniestros, porque con frecuencia es
          un siniestro el que revela que la póliza tenía un dato desactualizado.
          Si ya tienes el robot de emisión, el de endosos es una extensión menor
          que se construye sobre él. Cuando ordenes tus candidatos con el{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            criterio de reutilización al priorizar
          </IntLink>
          , súmale puntos a cualquier proceso que comparta sistema y reglas con
          un robot que ya existe, porque rinde más de lo que su impacto
          individual sugiere.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo no conviene automatizar</h2>
        <p className={styles.p}>
          Con una cartera pequeña, donde los siniestros del mes se cuentan con
          los dedos de una mano, basta con un buen checklist en papel y alguien
          ordenado. Si un proveedor te propone un proyecto de RPA para ese
          volumen, desconfía. A esa escala, el robot tarda más en pagarse que en
          quedar obsoleto.
        </p>
        <p className={styles.p}>
          Siniestros tampoco es buen punto de partida si el criterio sobre qué
          documentación pedir cambia según quién atiende el caso. El robot
          automatiza un proceso que existe y está escrito. Cuando ese proceso
          depende de dos personas con criterios distintos, la aseguradora
          primero tiene que elegir una sola versión y{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            documentarla
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuánto cuesta y por dónde empezar</h2>
        <p className={styles.p}>
          Un desarrollo de este tipo cuesta en promedio desde unos{" "}
          <strong className={styles.strong}>USD 6.000</strong>, con la marcha
          blanca incluida (el detalle está en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          ). El soporte posterior es opcional, desde{" "}
          <strong className={styles.strong}>USD 300 al mes</strong>.
        </p>
        <p className={styles.p}>
          Entre emisión y siniestros, la mayoría de las aseguradoras con las que
          trabajamos empieza por siniestros. Es el proceso donde el asegurado
          sufre el atraso directamente, porque es él quien espera mientras el
          expediente sigue incompleto, y una respuesta más rápida se traduce en
          menos reclamos y en mejores resultados en las encuestas de
          satisfacción. La emisión libera más horas internas, pero esa mejora
          rara vez se nota desde fuera de la aseguradora.
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
        <p className={styles.p}>
          Si tu aseguradora o agencia ya sabe dónde pierde más tiempo entre
          pólizas y siniestros, el orden para automatizar depende del tamaño de
          la cartera y del canal por donde entran los reclamos.{" "}
          <IntLink href="/contact-us">Escríbenos</IntLink> con esos dos datos y
          te decimos qué tramo conviene abordar primero. El método para ordenar
          esa decisión está en{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            cómo priorizar qué procesos automatizar
          </IntLink>
          , y los criterios para elegir a quién confiarle el proyecto, en el artículo sobre <PostLink slug="como-elegir-un-partner-de-rpa-en-latam">cómo elegir un partner de RPA en LatAm</PostLink>.
        </p>
      </section>
    </>
  ),
};
