import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/como-automatizar-la-facturacion-electronica/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Sirve el mismo robot para Chile, Argentina y México?",
    a: "La mayor parte, sí. La validación, el cruce con la orden de compra y la carga en el ERP funcionan casi igual en los tres países, y son el grueso del desarrollo. Cambian el acceso a cada organismo fiscal, el formato de los documentos y los plazos legales, y eso se resuelve país por país. En un proyecto multipaís recomendamos construir completo el país con más volumen y después reutilizar el núcleo en los demás. Lo preferimos a intentar un diseño universal desde el primer día.",
  },
  {
    q: "¿Es legal que un robot entre al portal del organismo fiscal con nuestro certificado?",
    a: "Sí, siempre que sea el certificado de la empresa, usado por la empresa, y que cada ejecución quede registrada. Lo que no corresponde es usar la clave personal de un empleado. Lo vemos con frecuencia, y además el robot deja de funcionar el día que esa persona renuncia. La gestión de credenciales se define al diseñar el proyecto.",
  },
  {
    q: "¿Necesito que mis proveedores cambien algo?",
    a: "No. El robot trabaja con lo que ya llega al portal del organismo fiscal y a tu correo.",
  },
  {
    q: "¿Y si el proveedor envía la factura por correo y nunca por el portal?",
    a: "Hay que contemplarlo desde el diseño, porque siempre hay proveedores así. El robot monitorea también el correo para detectar documentos nuevos, extrae el adjunto y lo valida contra el registro del organismo fiscal, que es la fuente que vale, antes de procesarlo. Así evita cargar un documento inexistente o anulado.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-automatizar-la-facturacion-electronica";

export const post = {
  slug,
  locale: "es",
  title: "Cómo automatizar la facturación electrónica",
  description:
    "Cómo automatizar la facturación electrónica donde está el trabajo manual: descarga de documentos recibidos, validación, cruce con órdenes de compra y acuse.",
  keywords: [
    "cómo automatizar la facturación electrónica",
    "automatizar facturación electrónica",
    "RPA facturación electrónica",
    "descarga masiva de facturas SII",
    "automatizar acuse de recibo",
    "facturación electrónica LatAm",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.fintech),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-13",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-automatizar-la-facturacion-electronica/header.jpeg",
    alt: "Cómo automatizar la facturación electrónica",
  },
  faq: faqs,
  cta: {
    titulo: "¿Cuántos documentos recibes al mes?",
    texto:
      "Con esa cifra y una descripción de cómo los revisas hoy, podemos estimar en una llamada si el caso se justifica.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo automatizar cuentas por pagar",
    linkUrl: "/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Cuando una empresa nos pide automatizar la facturación electrónica, en
          la mayoría de los casos la emisión no es lo que hay que tocar. Esa
          parte ya la resuelve el ERP o el proveedor autorizado que firma y
          timbra los documentos. Poner un robot encima de algo que funciona por
          API solo agrega un punto frágil.
        </p>
        <p className={styles.p}>
          El trabajo manual está en lo que viene después, desde que el documento
          electrónico existe hasta que queda contabilizado, aceptado o rechazado
          dentro del plazo que fija la ley. Ese tramo todavía lo hace una persona
          con el portal del organismo fiscal abierto en una pestaña, el ERP en
          otra y una hoja de cálculo de por medio.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Las tres partes de la facturación electrónica</h2>
        <p className={styles.p}>
          El término agrupa tres procesos que se automatizan de manera
          diferente, y solo dos de ellos justifican un robot: la recepción y el
          ciclo posterior. Conviene separarlos antes de pedir una cotización.
        </p>
        <h3 className={styles.h3}>Emisión y timbrado</h3>
        <p className={styles.p}>
          Generar el documento, firmarlo, obtener la autorización del organismo
          fiscal (CAE en Argentina, folio autorizado en Chile, timbre del PAC en
          México) y entregarlo al cliente. Esto le corresponde al ERP o a un
          proveedor certificado. Si tu ERP no lo hace, lo correcto es integrar
          ese proveedor por API. La comparación entre un robot y una integración
          está en{" "}
          <IntLink href="/blog/rpa-vs-desarrollo-a-medida">
            RPA vs desarrollo a medida
          </IntLink>
          .
        </p>
        <h3 className={styles.h3}>Recepción</h3>
        <p className={styles.p}>
          Descargar desde el organismo fiscal y desde el correo los documentos
          que te emitieron, cruzarlos con órdenes de compra y recepciones de
          mercancía, y cargarlos en el ERP. Aquí se concentra la mayor parte del
          trabajo manual.
        </p>
        <h3 className={styles.h3}>Ciclo de vida posterior</h3>
        <p className={styles.p}>
          Acuses de recibo, reclamos, notas de crédito, cancelaciones,
          referencias entre documentos y archivo de respaldo. Suele planificarse
          poco y, como aquí corren los plazos legales, es donde aparecen los
          problemas cuando algo se hace tarde.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Plazos legales: reclamo en Chile y cancelación en México
        </h2>
        <p className={styles.p}>
          En Chile, una factura electrónica recibida que no se reclama dentro de
          8 días corridos queda irrevocablemente aceptada. Desde ese momento ya no puedes objetar su contenido, aunque la mercancía haya llegado con diferencias, y el proveedor puede cederla a una empresa de factoring.
        </p>
        <p className={styles.p}>
          El plazo corre aunque la persona responsable esté de vacaciones o el
          área de compras todavía no confirme si la recepción coincide con lo
          facturado. Con varios cientos de documentos al mes y una sola persona
          revisando el portal cuando tiene tiempo, lo esperable es que durante el
          año se acepten por silencio facturas que debieron reclamarse.
        </p>
        <p className={styles.p}>
          En México el riesgo está en las cancelaciones. Para cancelar un CFDI, en muchos casos el emisor necesita que el receptor acepte o rechace la cancelación, y si el receptor no responde en 72 horas la cancelación procede igual.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo funciona el robot de recepción</h2>
        <p className={styles.p}>
          El principal beneficio de automatizar la recepción es que el control
          del plazo deja de depender de la agenda de una persona. En nuestros
          proyectos el flujo tiene cuatro pasos, y el orden importa porque cada
          uno alimenta al siguiente:
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>
            Descarga: el robot entra al portal del organismo fiscal con el
            certificado digital de la empresa, filtra por período y baja los
            documentos recibidos a una carpeta ordenada, cada uno con su XML y su
            representación impresa. También revisa el correo, porque hay
            proveedores que solo mandan el PDF adjunto y nunca aparecen donde
            deberían. De los cuatro pasos, este es el que libera más horas.
          </li>
          <li className={styles.li}>
            Validación formal: toma poco tiempo y descarta bastante. Se verifica
            que el documento exista y esté vigente en el organismo, que el emisor
            sea un proveedor registrado, que montos e impuesto sean consistentes
            y que no sea un duplicado de algo ya cargado.
          </li>
          <li className={styles.li}>
            Cruce con la operación: es el paso que decide. Cada documento se
            compara con la orden de compra y con la recepción de mercancía, usando
            la tolerancia que haya fijado tu empresa. Si hay una diferencia, el
            documento queda apartado con el motivo y el robot avisa a la persona
            responsable, indicando cuántos días quedan de plazo. El resto pasa
            directo a la carga.
          </li>
          <li className={styles.li}>
            Acción: carga en el ERP lo aprobado, emite el acuse o registra el
            reclamo dentro del plazo.
          </li>
        </ol>
        <p className={styles.p}>
          Si trabajas con SAP, el último paso se conecta con lo que explicamos
          en{" "}
          <IntLink href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa">
            qué procesos de SAP se pueden automatizar con RPA
          </IntLink>
          . La lógica de cruce es la misma que describimos en{" "}
          <IntLink href="/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas">
            cómo automatizar cuentas por pagar
          </IntLink>
          , y en varios proyectos ambos procesos terminaron siendo un solo robot
          con dos entradas.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Reclamo automático o solo aviso</h2>
        <p className={styles.p}>
          Antes de construir el robot hay que definir, en el levantamiento del
          proceso, si va a emitir reclamos por su cuenta o si solo va a avisar.
          Es la decisión que más veces hemos visto postergar, y si queda sin
          definir se termina descubriendo en producción.
        </p>
        <p className={styles.p}>
          Un reclamo mal emitido afecta la relación comercial con el proveedor.
          Durante el primer año recomendamos que el robot detecte las
          diferencias, las ordene por vencimiento y avise, y que la decisión la
          tome una persona. Cuando hay seis meses de historial y se ve que cierto
          tipo de diferencia siempre termina en reclamo, ese tipo puntual se
          puede automatizar de punta a punta.
        </p>
        <p className={styles.p}>
          Si el robot solo avisa, define desde el inicio qué persona recibe cada
          aviso, qué debe hacer con él y a quién lo escala si no puede
          resolverlo. Un reporte diario sin destinatario claro termina sin
          abrirse.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuándo no conviene automatizar la recepción</h2>
        <p className={styles.p}>
          Si recibes veinte o treinta documentos al mes, no automatices nada de
          esto. Una persona los revisa en poco rato y el desarrollo nunca se
          recupera.
        </p>
        <p className={styles.p}>
          La inversión empieza a pagarse con cientos de documentos mensuales, o
          cuando hay varias sociedades y varios RUT donde el mismo trabajo se
          repite en paralelo. Este segundo escenario es el que más hemos visto:
          un grupo cuyo volumen por sociedad no justificaría un robot, pero que
          repite la misma revisión en cinco filiales.
        </p>
        <p className={styles.p}>
          Tampoco conviene si tu ERP ya incluye un módulo de recepción y nadie lo
          ha activado, algo que ocurre con más frecuencia de lo que se piensa.
          Antes de cotizar un robot preguntamos qué hace hoy el sistema que ya
          pagaste, y en un par de casos la conversación terminó ahí. Los criterios completos están en el artículo sobre <PostLink slug="cuando-no-conviene-automatizar-un-proceso">cuándo no conviene automatizar un proceso</PostLink>.
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
            <IntLink href="/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas">
              Cómo automatizar cuentas por pagar
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
              Cuánto cuesta automatizar un proceso
            </IntLink>
          </li>
        </ul>
      </section>
    </>
  ),
};
