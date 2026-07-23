import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/idp-procesamiento-inteligente-de-documentos/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Necesito entrenar un modelo con mis propios documentos?",
    a: "Para documentos estándar (facturas, remitos, órdenes de compra), los modelos actuales ya vienen entrenados y arrancan bien desde el día uno; lo que se ajusta son las reglas de validación, no el modelo. Para documentos muy propios de tu empresa o tu industria conviene una etapa de ajuste con ejemplos reales, y ahí el proyecto necesita que nos pases un lote representativo que incluya los casos feos: el escaneo torcido, el que vino en dos páginas, el manuscrito. Esos son los que definen si funciona.",
  },
  {
    q: "¿Sirve con documentos escaneados de mala calidad?",
    a: "Hasta cierto punto. Un escaneo legible por un humano normalmente se resuelve; uno donde ni tú puedes leer el total, no, y ningún proveedor serio te va a prometer lo contrario. La diferencia la hacen dos cosas antes del modelo: pedir el original digital cuando existe, en vez del papel escaneado, y una etapa de mejora de imagen. Si buena parte de tu entrada son fotos sacadas con el celular, el problema no está en el IDP, está en el proceso que las genera así.",
  },
  {
    q: "¿Qué pasa con un documento que el sistema no reconoce?",
    a: "No se inventa nada. Se marca, se deriva a una persona y queda registrado para evaluar si ese tipo de documento hay que sumarlo al alcance.",
  },
  {
    q: "¿Es lo mismo que un agente de IA?",
    a: "No exactamente. El IDP es un componente especializado en leer documentos; un agente de IA es algo más amplio, que puede decidir pasos. En un proceso real suelen convivir: el IDP extrae, el agente o el robot decide qué hacer con el dato.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "idp-procesamiento-inteligente-de-documentos";

export const post = {
  slug,
  locale: "es",
  title: "IDP: procesamiento inteligente de documentos (sacar datos de PDFs con IA)",
  description:
    "OCR lee, IDP entiende. Cuándo el procesamiento inteligente de documentos rinde de verdad, cómo se mide su precisión y el error caro que casi nadie controla.",
  keywords: [
    "IDP procesamiento inteligente de documentos",
    "extraer datos de PDF con IA",
    "OCR vs IDP",
    "automatizar lectura de facturas",
    "procesamiento inteligente de documentos",
    "extracción de datos de documentos RPA",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-22",
  image: {
    src: thumbnail,
    urlRelative: "/blog/idp-procesamiento-inteligente-de-documentos/header.jpeg",
    alt: "IDP: procesamiento inteligente de documentos con IA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Qué documentos estás cargando a mano hoy?",
    texto:
      "Con el tipo de documento, de dónde vienen y cuántos por mes, se puede estimar en una llamada si el caso cierra y qué tasa de intervención humana es realista.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cuánto cuesta automatizar",
    linkUrl: "/blog/cuanto-cuesta-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En casi todos los proyectos que arrancamos aparece, tarde o temprano, la
          misma planilla. Alguien del equipo la llena a mano mirando facturas,
          remitos o PDFs que llegaron por correo, muchos escaneados y torcidos, y
          de ahí los datos pasan al ERP. El robot sabe abrir SAP y cargar los
          campos sin problema. El cuello de botella está siempre un paso antes: en
          leer el documento y convertirlo en datos limpios.
        </p>
        <p className={styles.p}>
          IDP, por sus siglas en inglés (Intelligent Document Processing), es el
          nombre que se le puso a resolver esa parte con inteligencia artificial en
          lugar de con una persona tipeando. Como pasa con casi todo lo que lleva
          "inteligente" en el nombre, hay una versión que funciona y una que se
          vende mejor de lo que rinde. Este artículo es sobre distinguirlas antes
          de firmar.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué hace un IDP que un OCR no hacía</h2>
        <p className={styles.p}>
          El OCR clásico convierte una imagen en texto. Le pasas un PDF escaneado y
          te devuelve las letras que había en la página, en el orden en que
          aparecían. Útil, pero tonto: no sabe cuál de esos números es el total y
          cuál el número de factura. Si el proveedor rediseña su factura, el OCR
          sigue leyendo bien las letras y mal los campos, porque las coordenadas
          donde estaba el total ahora tienen otra cosa.
        </p>
        <p className={styles.p}>
          IDP agrega la capa que faltaba: entender el documento, no solo
          transcribirlo. Combina el OCR con un modelo que sabe qué es una factura,
          dónde suele estar cada dato y cómo se relaciona con el resto, aunque el
          layout no lo haya visto nunca. Por eso funciona con documentos de
          cientos de proveedores distintos sin armar una plantilla para cada uno,
          que era el techo real del enfoque anterior.
        </p>
        <p className={styles.p}>
          La regla para saber si tu caso necesita IDP es la variedad. Si tus
          documentos vienen todos del mismo sistema, con el mismo formato exacto,
          no hace falta IA para leerlos: un parser de plantilla fija es más
          barato, más rápido y más confiable, porque siempre busca el dato en el
          mismo lugar y nunca "interpreta". IDP se justifica cuando cada documento
          llega distinto y una plantilla por formato sería un trabajo infinito.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La categoría ya tiene ranking, y todos dicen lo mismo</h2>
        <p className={styles.p}>
          En septiembre de 2025, Gartner publicó su primer cuadrante dedicado a
          IDP y ungió como líderes a ABBYY, UiPath, Hyperscience y compañía. Cada
          uno tiene su fuerte real: ABBYY pega bien en escaneos degradados, Rossum
          se apoya en no depender de plantillas cuando hay mucha variedad, UiPath
          lo vende pegado a su RPA. Pero en el folleto todos anuncian entre 90% y
          99% de precisión, y a esta altura esas cifras son casi indistinguibles.
        </p>
        <p className={styles.p}>
          Lo que casi ninguno explica, y menos en español, es qué significa ese
          número cuando el documento entra sucio. Ahí es donde se juega el
          proyecto, no en el porcentaje de la portada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El número que te muestran en la demo</h2>
        <p className={styles.p}>
          Cuando te dicen "99% de precisión", casi siempre es precisión a nivel de
          campo aislado. Suena impecable. El problema es que a nadie le sirve un
          campo suelto, le sirve el documento entero cargado sin errores.
        </p>
        <p className={styles.p}>
          Y la cuenta cambia feo. Si una factura tiene, digamos, quince campos que
          importan y cada uno se extrae con 98% de acierto, la probabilidad de que
          los quince salgan perfectos en el mismo documento es 0,98 elevado a la
          quince, alrededor del 74%. O sea que uno de cada cuatro documentos
          necesita que un humano lo toque, con un sistema que en el papel tiene
          "98% de precisión". Ese es el número que tienes que pedir en la demo: no
          acierto por campo, sino porcentaje de documentos que pasan enteros sin
          intervención (lo que en la jerga llaman <em>straight-through
          processing</em>). Es más bajo que el de la portada y es el que define si
          el proyecto ahorra horas o solo las mueve de lugar.
        </p>
        <p className={styles.p}>
          Hay un error peor, además, y es silencioso. El campo que el modelo
          extrae con alta confianza y está mal igual: un 8 que leyó como 3, un
          total que tomó del subtotal. Ese no lo frena la confianza del modelo,
          porque el modelo está convencido. Por eso la validación no puede
          apoyarse en la confianza que reporta la IA.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo se arma para que el error caro no pase</h2>
        <p className={styles.p}>
          Nosotros implementamos IDP sobre <IntLink href="/rocketbot">Rocketbot</IntLink>,
          del que somos partner, apoyándonos en su capa de IA (AI Studio). En la
          práctica se combinan dos piezas: el OCR y el reconocimiento de imágenes
          para los documentos escaneados, y Documents GPT, que toma el PDF y
          devuelve los campos estructurados con procesamiento de lenguaje natural.
          Rocketbot publica para esa capa números de 88% menos tiempo de
          procesamiento y 98% menos errores humanos. Son sus cifras, y como toda
          cifra de folleto, marcan el potencial del techo, no lo que vas a
          obtener el primer mes.
        </p>
        <p className={styles.p}>
          Lo que separa un proyecto que rinde de uno que no es lo que hace el
          robot con lo que leyó. El flujo tiene cuatro tramos y el orden importa.
        </p>
        <p className={styles.p}>
          Primero clasificar: saber si el documento es una factura, un remito o
          una nota de crédito, porque cada tipo se extrae y se valida distinto.
          Después extraer los campos con el modelo. Hasta ahí es lo que todos
          muestran en la demo.
        </p>
        <p className={styles.p}>
          El tercer tramo es el que casi nadie enseña y el que decide: la
          validación que no le cree al modelo. Que los ítems sumen el subtotal y
          el subtotal más el impuesto dé el total. Que el identificador fiscal del
          emisor exista y esté activo. Que la fecha sea posible y que el número no
          esté ya cargado. Esas reglas atrapan justamente el error silencioso,
          porque un dato mal leído casi siempre rompe una de esas cuentas aunque
          el modelo lo haya dado por bueno.
        </p>
        <p className={styles.p}>
          Y el cuarto: lo que no pasa la validación, o lo que el modelo devuelve
          con baja confianza, no se inventa ni se descarta. Va a una persona con
          el documento y el campo dudoso resaltado, se corrige en segundos y esa
          corrección queda registrada. Con <IntLink href="/monitor">Rocketbot
          Monitor</IntLink> ese pendiente humano se ve y se mide en producción,
          que es como te enteras de qué proveedor o qué tipo de documento te está
          generando el 80% de las revisiones. Suele ser un puñado, y cuando lo
          atiendes puntual, la tasa de intervención baja de golpe.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Los casos donde de verdad cierra el número</h2>
        <p className={styles.p}>
          Los que más veces se pagaron son de recepción de documentos de terceros,
          justamente porque ahí no controlas el formato de entrada.
        </p>
        <p className={styles.p}>
          Cuentas por pagar es el más común: entran facturas de muchos
          proveedores, cada uno con su diseño, y alguien las carga a mano en el
          ERP cotejándolas contra la orden de compra. El IDP extrae emisor,
          número, fechas, ítems, impuestos y total; el robot valida y carga. La
          lógica de cruce es la misma que ya contamos en{" "}
          <IntLink href="/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas">
            cómo automatizar cuentas por pagar
          </IntLink>
          , solo que ahora la entrada no es un XML limpio sino un PDF que puede
          venir escaneado.
        </p>
        <p className={styles.p}>
          En los proyectos de creación masiva de materiales en SAP vimos el mismo
          patrón del otro lado del mostrador: la planilla de entrada nunca llega
          perfecta. El robot que funciona da por hecho que viene sucia. Aparta las
          filas con datos faltantes o sin mapear, sigue con el resto del lote y
          deja esas pocas para que una persona las resuelva, en vez de frenar todo
          por una celda vacía. Ese detalle, que parece menor, es la diferencia
          entre un robot que corre desatendido y uno que se cuelga a la primera
          excepción.
        </p>
        <p className={styles.p}>
          Y en los bots de ventas que cargan pedidos en SAP, el que manda es el
          diccionario de datos: si el producto o el cliente del PDF no está
          mapeado al código del ERP, la IA no lo adivina. Por eso el IDP se apoya
          en una tabla de equivalencias, que en nuestros proyectos vive en una
          base local, y deriva a una persona lo que no reconoce. Si trabajas con
          SAP, la carga final se conecta con lo que ya cubrimos en{" "}
          <IntLink href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa">
            qué procesos de SAP se pueden automatizar con RPA
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Dónde IDP es plata tirada</h2>
        <p className={styles.p}>
          Lo dije arriba y lo repito porque es la conversación que más presupuesto
          ahorra: si tus documentos vienen todos iguales, del mismo emisor y el
          mismo sistema, no compres IDP. Una extracción por plantilla fija hace el
          trabajo mejor y no se equivoca de forma creativa. Meter un modelo de IA
          ahí es pagar de más por una interpretación que no necesitas.
        </p>
        <p className={styles.p}>
          Tampoco cierra con volumen chico. Con treinta o cuarenta documentos al
          mes, una persona los carga en un rato y el desarrollo no se paga nunca.
          El caso donde el número da es el de varios cientos de documentos
          mensuales con formatos variados, o el de varias sociedades repitiendo
          el mismo trabajo en paralelo. Los criterios completos, con la cuenta de
          por medio, están en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          . Si además dudas entre un robot y una integración directa, lo tratamos
          en{" "}
          <IntLink href="/blog/rpa-vs-desarrollo-a-medida">
            RPA vs desarrollo a medida
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

      <section className="space-y-3">
        <p className={styles.p}>
          Danilo Toro, fundador de Robotipy, desarrolló Rocketbot durante seis
          años antes de fundar la consultora.
        </p>
      </section>
    </>
  ),
};
