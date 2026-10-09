import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-elegir-proveedor-de-rpa/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuántos proveedores de RPA conviene comparar antes de contratar uno?",
    a: "Entre dos y tres proveedores suele bastar. Con menos no tienes contra qué comparar, y con más la evaluación se alarga sin aportar información nueva. Pídeles a todos lo mismo: el alcance por escrito, el desglose entre desarrollo, licencia y soporte, y dos referencias de clientes con robots en producción.",
  },
  {
    q: "¿Quién debería ser el dueño del código de un robot RPA desarrollado por un proveedor externo?",
    a: "La empresa que paga el desarrollo debería quedar como dueña del código y de los robots, con archivos fuente, documentación y configuración. Conviene que el contrato lo diga explícitamente: si el código queda solo en manos del proveedor, cambiar de equipo obliga a rehacer el robot.",
  },
  {
    q: "¿Un proveedor de RPA que accede a datos personales debe cumplir la Ley 21.719 en Chile?",
    a: "Sí. Cuando un proveedor trata datos personales por cuenta de tu empresa, la Ley 21.719 exige un contrato que fije el objeto del encargo, su duración, la finalidad, el tipo de datos y las obligaciones de cada parte. La ley rige desde el 1 de diciembre de 2026; a octubre de 2026, el Senado tramita un proyecto para postergarla un año.",
  },
  {
    q: "¿Cuánto cuesta un proyecto de RPA con Robotipy?",
    a: "El desarrollo cuesta en promedio USD 6.000 por proyecto (2026) e incluye un mes de trabajo y la marcha blanca. La licencia de Rocketbot, de USD 2.500, solo se cobra si tu empresa no tiene una propia. El soporte mensual es opcional y parte en USD 300, y el diagnóstico inicial no tiene costo.",
  },
  {
    q: "¿Robotipy trabaja solo con Rocketbot?",
    a: "No. Robotipy es Platinum Partner de Rocketbot y también ha trabajado con UiPath, Power Automate, n8n, Claude (Anthropic) y Python. Con esas herramientas ha automatizado procesos sobre SAP, Finnegans, AS400, Defontana y portales y cartolas de bancos de Chile y de Argentina.",
  },
];

const filas = [
  { bloque: "Experiencia y referencias" },
  {
    q: "1. ¿Puedo hablar con un cliente de mi industria con un robot en producción?",
    por: "Una referencia que contesta el teléfono vale más que un logo.",
    alerta: "\"Nuestros clientes son confidenciales\", sin otra forma de verificar.",
  },
  {
    q: "2. ¿Ya automatizaron mi ERP, mis bancos o mis portales?",
    por: "Un sistema nuevo para el proveedor trae una curva de aprendizaje que alguien paga.",
    alerta: "\"Todos los sistemas se automatizan igual.\"",
  },
  { bloque: "Método y alcance" },
  {
    q: "3. ¿Cómo documentan el proceso y quién aprueba ese documento?",
    por: "Las excepciones que no quedan escritas terminan como fallas en producción.",
    alerta: "\"Lo vamos entendiendo sobre la marcha.\"",
  },
  {
    q: "4. ¿Cómo validan el robot antes de apagar el proceso manual?",
    por: "Sin marcha blanca, los errores aparecen en el cierre del mes.",
    alerta: "\"Lo probamos nosotros y te lo entregamos listo.\"",
  },
  { bloque: "Tecnología y licencias" },
  {
    q: "5. ¿Trabajan con varias plataformas o con una sola?",
    por: "Quien vende una sola herramienta tiende a usarla para todo.",
    alerta: "Nunca recomienda una API, un script o no automatizar.",
  },
  {
    q: "6. ¿La licencia está incluida o va aparte, y a nombre de quién queda?",
    por: "Suele ser un costo recurrente, aparte del desarrollo.",
    alerta: "Queda a nombre del proveedor y no sabes cuánto cuesta renovarla.",
  },
  { bloque: "Precio y contrato" },
  {
    q: "7. ¿El precio es cerrado y cómo se cobran los cambios de alcance?",
    por: "Un cobro por hora sin tope deja todo el riesgo de tu lado.",
    alerta: "\"Cotizamos por hora y vamos viendo.\"",
  },
  { bloque: "Después de la entrega" },
  {
    q: "8. ¿Qué pasa cuando cambia una pantalla y quién paga el ajuste?",
    por: "Un portal o un ERP que se actualiza detiene al robot.",
    alerta: "\"Eso no debería pasar\", sin tarifa de soporte escrita.",
  },
  {
    q: "9. ¿Quién monitorea el robot y a quién le llegan las alertas?",
    por: "Un robot que falla en silencio puede pasar días detenido.",
    alerta: "\"Si falla, tu equipo nos avisa.\"",
  },
  {
    q: "10. ¿De quién son el código y los robots al terminar el contrato?",
    por: "Sin archivos fuente, cambiar de proveedor obliga a rehacer el robot.",
    alerta: "El contrato no lo menciona.",
  },
  { bloque: "Seguridad y datos" },
  {
    q: "11. ¿El robot usa un usuario dedicado y dónde se guardan sus credenciales?",
    por: "Una cuenta compartida no deja trazabilidad y frena la revisión de seguridad.",
    alerta: "\"Usamos el usuario de tu analista\", o claves escritas en el robot.",
  },
  {
    q: "12. ¿Cómo cumplen la Ley 21.719 si acceden a datos personales?",
    por: "La ley exige un contrato con quien trata datos por cuenta tuya.",
    alerta: "\"Eso lo ve tu área legal\", sin contrato de encargo.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
  table: "w-full border-collapse my-7 text-[15px] rounded-xl overflow-hidden",
  th: "bg-primary text-white text-left text-[13px] font-semibold px-4 py-3 border-b border-white/10",
  td: "px-4 py-3 border-b border-white/10 text-white/90 align-top",
  tdBloque:
    "px-4 py-2 border-b border-white/10 bg-white/5 text-white text-[13px] font-semibold uppercase tracking-wider",
};

const slug = "como-elegir-proveedor-de-rpa";

export const post = {
  slug,
  locale: "es",
  title: "Cómo elegir un proveedor de RPA en Chile: 12 preguntas antes de firmar",
  description:
    "Las 12 preguntas para comparar proveedores de RPA en Chile: referencias, precio cerrado, licencias, soporte, monitoreo, propiedad del código y Ley 21.719.",
  keywords: [
    "cómo elegir un proveedor de RPA",
    "proveedor de RPA en Chile",
    "preguntas para evaluar un proveedor de RPA",
    "contratar automatización de procesos",
    "partner de RPA en Chile",
    "RPA y Ley 21.719",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-01",
  updatedAt: "2026-10-01",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-elegir-proveedor-de-rpa/header.jpeg",
    alt: "Cómo elegir un proveedor de RPA en Chile: 12 preguntas antes de firmar",
  },
  faq: faqs,
  cta: {
    titulo: "¿Estás comparando propuestas de automatización?",
    texto:
      "Cuéntanos qué proceso quieres automatizar. El diagnóstico inicial no se cobra y te sirve para comparar nuestra propuesta con las demás.",
    botonLabel: "Pedir diagnóstico",
    botonUrl: "/contact-us",
    linkLabel: "Cuánto cuesta automatizar",
    linkUrl: "/blog/cuanto-cuesta-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Un buen proveedor de RPA es el que puede mostrarte procesos parecidos
          al tuyo funcionando en otros clientes, te da un precio cerrado con el
          alcance por escrito y deja resuelto qué pasa después de la entrega:
          quién monitorea el robot, quién lo arregla cuando cambia una pantalla
          y de quién es el código. La plataforma pesa menos de lo que parece.
          Las diferencias aparecen en el contrato y en los meses que siguen a la
          puesta en producción.
        </p>
        <p className={styles.p}>
          Si estás comparando dos o tres propuestas parecidas, estas 12
          preguntas te sirven para ordenarlas. Al final contamos cómo las
          respondemos en Robotipy y cuándo te conviene otro tipo de proveedor.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué preguntas hay que hacerle a un proveedor de RPA antes de firmar?
        </h2>
        <p className={styles.p}>
          Las preguntas que más separan a un proveedor de otro son las del día
          después: quién mantiene el robot, quién paga los ajustes y de quién es
          lo construido. La tabla las agrupa en seis bloques.
        </p>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Pregunta</th>
                <th className={ui.th}>Por qué importa</th>
                <th className={ui.th}>Respuesta que debería preocuparte</th>
              </tr>
            </thead>
            <tbody>
              {filas.map((f, i) =>
                f.bloque ? (
                  <tr key={i}>
                    <td colSpan={3} className={ui.tdBloque}>
                      {f.bloque}
                    </td>
                  </tr>
                ) : (
                  <tr key={i}>
                    <td className={`${ui.td} font-semibold text-white`}>{f.q}</td>
                    <td className={ui.td}>{f.por}</td>
                    <td className={ui.td}>{f.alerta}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Cómo se verifica la experiencia de un proveedor de RPA?
        </h2>
        <p className={styles.p}>
          La experiencia de un proveedor se verifica hablando con clientes que
          tengan robots en producción, idealmente de tu industria y sobre tus
          mismos sistemas. Pide dos referencias y llama a las dos. Pregunta
          cuánto tardó el proyecto frente a lo prometido, cuántas veces falló el
          robot el primer semestre y cómo respondió el proveedor.
        </p>
        <p className={styles.p}>
          Un caso publicado sirve si dice qué se automatizó, en qué sistema y
          con qué resultado. Revisa también si el equipo ya trabajó con tu ERP y
          tus bancos: SAP, AS400 o el portal de un banco chileno tienen
          particularidades que se aprenden proyecto a proyecto. Si tu sistema es
          nuevo para el proveedor, esa curva debería reflejarse en el plazo y en
          el precio.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué método de trabajo debería mostrarte un proveedor de RPA?
        </h2>
        <p className={styles.p}>
          Un proveedor con método documenta el proceso por escrito antes de
          construir y valida el robot en paralelo con el proceso manual antes de
          apagarlo. Pregunta cuántas sesiones de relevamiento hace, si graba la
          pantalla y quién firma el documento. Lo que buscas es que las
          excepciones queden escritas. En{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            cómo documentar un proceso antes de automatizarlo
          </IntLink>{" "}
          contamos un caso donde un campo que todos daban por conocido apareció
          con tres largos distintos en tres fuentes.
        </p>
        <p className={styles.p}>
          Pregunta también por la marcha blanca, el período en que el robot
          corre junto al proceso manual para comparar resultados, y con qué
          criterio se da por aprobada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Importa con qué plataforma de RPA trabaja el proveedor?
        </h2>
        <p className={styles.p}>
          La plataforma importa menos que la capacidad del proveedor para elegir
          la herramienta adecuada para cada proceso, y eso lo hace mejor quien
          trabaja con más de una. Un partner de una sola plataforma tiende a
          resolver todo con ella, aunque el proceso saliera mejor con una API o
          un script en Python. Pregunta en qué casos te recomendarían no usar
          RPA: si la respuesta es &quot;nunca&quot;, ya sabes cómo van a evaluar
          tu proceso.
        </p>
        <p className={styles.p}>
          Sobre la licencia, averigua si está incluida, cada cuánto se renueva,
          cuánto cuesta y a nombre de quién queda. Si está a nombre del
          proveedor, tu robot depende de esa relación comercial. Si ya tienes
          una, que no te la cobren de nuevo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cómo debería cobrar un proveedor de RPA?</h2>
        <p className={styles.p}>
          Para un primer proyecto, lo más sano es un precio cerrado por un
          alcance escrito, con una regla clara para cotizar los cambios antes de
          ejecutarlos. El cobro por hora sin tope deja el riesgo de tu lado: si
          el proveedor subestimó el proceso, la diferencia la pagas tú.
        </p>
        <p className={styles.p}>
          Lee con cuidado la cláusula de cambios, porque durante el desarrollo
          siempre aparece algo: una excepción que nadie mencionó, un sistema
          adicional, una regla que el negocio modificó. Cada cambio debería
          conversarse y cotizarse antes de seguir, en lugar de aparecer en la
          última factura. Pide además el desglose entre desarrollo, licencia y
          soporte. En{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>{" "}
          explicamos qué variables mueven el precio.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué tiene que quedar resuelto para después de la entrega?
        </h2>
        <p className={styles.p}>
          Antes de firmar tienen que quedar escritas tres cosas: quién arregla
          el robot cuando cambia el entorno, quién lo monitorea y quién es dueño
          del código. Un robot que navega por pantalla se detiene cuando un
          portal se rediseña o el ERP se actualiza, así que pregunta qué cubre
          la garantía y qué se cobra como soporte. Una falla por un caso que ya
          existía antes del desarrollo es deuda del análisis del proveedor; un
          portal que cambió después de la entrega es mantenimiento correctivo,
          como explicamos en{" "}
          <IntLink href="/blog/mantenimiento-de-robots-rpa">
            mantenimiento de robots RPA
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Si la propuesta dice &quot;hacemos seguimiento&quot; sin explicar
          cómo, asume que el primero en enterarse de una falla será tu equipo.
          En{" "}
          <IntLink href="/blog/como-monitorear-robots-rpa-en-produccion">
            cómo monitorear robots RPA en producción
          </IntLink>{" "}
          contamos qué conviene registrar y a quién avisar. Al cierre deberías
          recibir los archivos fuente, la documentación y la lista de puntos
          frágiles, para que otro equipo pueda mantener el robot si cambias de
          proveedor.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué preguntar sobre credenciales y la Ley 21.719?
        </h2>
        <p className={styles.p}>
          Cada robot debería operar con un usuario dedicado, con permisos
          limitados a lo que usa y con las credenciales guardadas fuera del
          código. Un robot que entra con la cuenta de un analista no deja
          trazabilidad y se detiene cuando esa persona cambia su contraseña.
        </p>
        <p className={styles.p}>
          Si el proveedor verá datos personales de clientes, trabajadores o
          proveedores, aplica la Ley 21.719, que rige desde el 1 de diciembre de
          2026. La ley exige un contrato con quien trata datos por
          cuenta de tu empresa, que fije el objeto del encargo, su duración, la
          finalidad, el tipo de datos y las obligaciones de cada parte, y
          prohíbe que ese tercero delegue el encargo sin tu autorización
          escrita. A octubre de 2026, el Senado tramita un proyecto del
          Ejecutivo (boletín 18.623-07) que propone mover la vigencia al 1 de
          diciembre de 2027; mientras no se publique, rige la fecha de 2026.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cómo respondemos nosotros esas preguntas?</h2>
        <p className={styles.p}>
          Robotipy es una consultora de automatización fundada en 2023, con más
          de 70 proyectos entregados, que opera en Chile y en Argentina. Somos{" "}
          <IntLink href="/blog/robotipy-platinum-partner-rocketbot">
            Platinum Partner de Rocketbot
          </IntLink>{" "}
          y también hemos trabajado con UiPath, Power Automate, n8n, Claude
          (Anthropic) y Python, sobre SAP, Finnegans, AS400, Defontana y
          portales bancarios de Chile y de Argentina. Los casos publicados están
          en{" "}
          <IntLink href="/casos-exito">casos de éxito</IntLink>.
        </p>
        <p className={styles.p}>
          El desarrollo cuesta en promedio USD 6.000 e incluye un mes de trabajo
          y la marcha blanca. La licencia de Rocketbot (USD 2.500) se cobra solo
          si no tienes una propia, el soporte mensual es opcional y parte en USD
          300, el monitoreo lo hacemos con{" "}
          <IntLink href="/monitor">Robotipy Monitor</IntLink> y el diagnóstico
          inicial no se cobra. Sobre código, credenciales y datos, pídenos lo
          mismo que a cualquier proveedor: que quede escrito en la propuesta.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cuándo te conviene más otro tipo de proveedor?</h2>
        <p className={styles.p}>
          Si tu empresa ya está estandarizada en una plataforma de RPA y tiene un
          partner que la conoce bien, lo más probable es que te convenga seguir
          con él. Una segunda plataforma suma licencias, servidores y
          conocimiento que mantener.
        </p>
        <p className={styles.p}>
          También conviene otro perfil si necesitas un integrador global, con
          presencia en muchos países, para una implementación corporativa en
          varias regiones a la vez. Y si al hacer estas preguntas descubres que
          tu proceso todavía cambia cada semana, ningún proveedor es la
          respuesta por ahora: conviene estabilizarlo primero, como explicamos
          en{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
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
    </>
  ),
};
