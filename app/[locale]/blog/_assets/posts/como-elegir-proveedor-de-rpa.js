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
    a: "Dos o tres proveedores suelen bastar. Con uno solo no tienes contra qué comparar, y si sumas más, la evaluación se alarga sin aportar información nueva. A cada uno solicítale el alcance por escrito y el desglose entre desarrollo, licencia y soporte, junto con dos referencias de clientes que tengan robots en producción.",
  },
  {
    q: "¿Quién debería ser el dueño del código de un robot RPA desarrollado por un proveedor externo?",
    a: "La empresa que paga el desarrollo debería quedar como dueña del código y de los robots, incluidos los archivos fuente, la documentación y la configuración. Pide que el contrato lo diga de forma explícita. Si el código queda solo en manos del proveedor, cambiar de equipo obliga a rehacer el robot.",
  },
  {
    q: "¿Un proveedor de RPA que accede a datos personales debe cumplir la Ley 21.719 en Chile?",
    a: "Sí. Cuando un proveedor trata datos personales por cuenta de tu empresa, la Ley 21.719 exige un contrato que fije el objeto del encargo, su duración, la finalidad, el tipo de datos y las obligaciones de cada parte. La ley comienza a regir el 1 de diciembre de 2026. A octubre de 2026, el Senado tramita un proyecto para postergarla un año.",
  },
  {
    q: "¿Cuánto cuesta un proyecto de RPA con Robotipy?",
    a: "En 2026, el desarrollo cuesta en promedio USD 6.000 por proyecto e incluye un mes de trabajo y la marcha blanca. La licencia de Rocketbot cuesta USD 2.500 y solo se cobra si tu empresa no tiene una propia. El soporte mensual es opcional, desde USD 300. El diagnóstico inicial no tiene costo.",
  },
  {
    q: "¿Robotipy trabaja solo con Rocketbot?",
    a: "No. Robotipy es Platinum Partner de Rocketbot, pero también ha trabajado con UiPath, Power Automate, n8n, Claude (Anthropic) y Python. Con esas herramientas ha automatizado procesos sobre SAP, Finnegans, AS400, Defontana y portales y cartolas de bancos de Chile y de Argentina.",
  },
];

const filas = [
  { bloque: "Experiencia y referencias" },
  {
    q: "1. ¿Puedo hablar con un cliente de mi industria con un robot en producción?",
    por: "Una llamada a un cliente permite verificar lo que un logo en la presentación no muestra.",
    alerta: "\"Nuestros clientes son confidenciales\", sin otra forma de verificar.",
  },
  {
    q: "2. ¿Ya automatizaron mi ERP, mis bancos o mis portales?",
    por: "Si el sistema es nuevo para el proveedor, la curva de aprendizaje se paga en plazo o en precio.",
    alerta: "\"Todos los sistemas se automatizan igual.\"",
  },
  { bloque: "Método y alcance" },
  {
    q: "3. ¿Cómo documentan el proceso y quién aprueba ese documento?",
    por: "Una excepción que no queda escrita suele aparecer después como falla en producción.",
    alerta: "\"Lo vamos entendiendo sobre la marcha.\"",
  },
  {
    q: "4. ¿Cómo validan el robot antes de apagar el proceso manual?",
    por: "Sin marcha blanca, los errores aparecen en el cierre de mes.",
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
    por: "Con un cobro por hora sin tope, todo el riesgo queda de tu lado.",
    alerta: "\"Cotizamos por hora y vamos viendo.\"",
  },
  { bloque: "Después de la entrega" },
  {
    q: "8. ¿Qué pasa cuando cambia una pantalla y quién paga el ajuste?",
    por: "Cuando un portal o un ERP se actualiza, el robot se detiene.",
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
    "Doce preguntas para comparar proveedores de RPA en Chile antes de firmar: referencias, precio cerrado, licencias, soporte, monitoreo, propiedad del código y Ley 21.719.",
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
  publishedAt: "2026-10-09",
  updatedAt: "2026-10-09",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-elegir-proveedor-de-rpa/header.jpeg",
    alt: "Cómo elegir un proveedor de RPA en Chile: 12 preguntas antes de firmar",
  },
  faq: faqs,
  cta: {
    titulo: "¿Estás comparando propuestas de automatización?",
    texto:
      "Cuéntanos qué proceso quieres automatizar. El diagnóstico inicial no tiene costo y te sirve para comparar nuestra propuesta con las demás.",
    botonLabel: "Pedir diagnóstico",
    botonUrl: "/contact-us",
    linkLabel: "Cuánto cuesta automatizar",
    linkUrl: "/blog/cuanto-cuesta-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Un buen proveedor de RPA puede mostrarte procesos parecidos al tuyo
          funcionando en otros clientes y te da un precio cerrado con el alcance
          por escrito. Además, deja resuelto qué pasa después de la entrega.
          Los proveedores se diferencian sobre todo en el contrato y en los
          meses que siguen a la puesta en producción.
        </p>
        <p className={styles.p}>
          Si tienes dos o tres propuestas parecidas, estas 12 preguntas te
          ayudan a compararlas, incluida la nuestra.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué preguntas hay que hacerle a un proveedor de RPA antes de firmar?
        </h2>
        <p className={styles.p}>
          La tabla agrupa las 12 preguntas en seis bloques. Las que más
          distinguen a un proveedor de otro son las del bloque de después de la
          entrega (preguntas 8 a 10).
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
          tengan robots en producción, idealmente de tu industria y con tus
          mismos sistemas. Pide dos referencias y llama a las dos. En la
          llamada, pregunta cuánto tardó el proyecto en comparación con lo
          prometido y cuántas veces falló el robot durante el primer semestre.
          También interesa saber cómo respondió el proveedor ante esas fallas.
        </p>
        <p className={styles.p}>
          Un caso publicado sirve si dice qué se automatizó, en qué sistema y
          con qué resultado. Revisa además si el equipo ya trabajó con tu ERP y
          tus bancos. SAP, AS400 o el portal de un banco chileno tienen
          particularidades que se aprenden proyecto a proyecto. Si tu sistema es
          nuevo para el proveedor, pregunta cómo consideraron ese aprendizaje en
          el plazo y en el precio.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué método de trabajo debería mostrarte un proveedor de RPA?
        </h2>
        <p className={styles.p}>
          Un proveedor con método documenta el proceso por escrito antes de
          construir el robot. Luego lo valida en paralelo con el proceso manual,
          y solo después tu equipo deja de hacerlo a mano. Pregunta cuántas
          sesiones dedica a entender el
          proceso, si graba la pantalla y quién firma el documento. El objetivo
          es que las excepciones queden escritas. En{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            cómo documentar un proceso antes de automatizarlo
          </IntLink>{" "}
          contamos un caso en que un campo que todos daban por conocido apareció
          con tres largos distintos en tres fuentes.
        </p>
        <p className={styles.p}>
          Pregunta también cómo hacen la marcha blanca, que es el período en que
          el robot opera junto al proceso manual para comparar resultados, y
          qué criterio usan para darla por aprobada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Importa con qué plataforma de RPA trabaja el proveedor?
        </h2>
        <p className={styles.p}>
          Lo que más importa es que el proveedor sepa elegir la herramienta
          adecuada para cada proceso, y eso lo hace mejor quien trabaja con más
          de una plataforma. Un proveedor que usa una sola tiende a resolver
          todo con ella, aunque el proceso funcionara mejor con una API o un
          script en Python. Pregunta en qué casos te recomendarían
          no usar RPA. Si contestan que en ninguno, es probable que también
          propongan RPA para tu proceso aunque no sea la mejor opción.
        </p>
        <p className={styles.p}>
          Sobre la licencia, averigua si está incluida, cada cuánto se renueva,
          cuánto cuesta y a nombre de quién queda. Cuando queda a nombre del
          proveedor, tu robot depende de esa relación comercial. Si tu empresa
          ya tiene una licencia, verifica que la propuesta no la cobre otra vez.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cómo debería cobrar un proveedor de RPA?</h2>
        <p className={styles.p}>
          Para un primer proyecto, lo recomendable es un precio cerrado por un
          alcance escrito, con una regla clara para cotizar los cambios antes de
          ejecutarlos. Si el cobro es por hora y sin tope, cualquier
          subestimación del proveedor se traslada a tu presupuesto.
        </p>
        <p className={styles.p}>
          Lee con cuidado la cláusula de cambios. Durante el desarrollo siempre
          aparece algo que no estaba previsto, como una excepción que nadie
          mencionó, un sistema adicional o una regla que el negocio modificó.
          Cada cambio debería conversarse y cotizarse antes de seguir, para que
          no aparezca por sorpresa en la última factura. Pide además el desglose
          entre desarrollo, licencia y soporte. En{" "}
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
          Antes de firmar deberían quedar por escrito quién arregla el robot
          cuando cambia el entorno, quién lo monitorea y quién es dueño del
          código. Un robot que navega por pantalla se detiene cuando un portal
          se rediseña o cuando el ERP se actualiza. Por eso conviene preguntar
          qué cubre la garantía y qué se cobra como soporte. Una falla por un
          caso que ya existía antes del desarrollo le corresponde al proveedor,
          porque viene de su análisis. En cambio, si un portal cambió después de
          la entrega, se trata de mantenimiento correctivo, como explicamos
          en{" "}
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
          contamos qué conviene registrar y a quién avisar. Al terminar el
          contrato deberías recibir los archivos fuente, la documentación y la
          lista de puntos frágiles del robot. Con eso, otro equipo puede
          mantenerlo si cambias de proveedor.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué preguntar sobre credenciales y la Ley 21.719?
        </h2>
        <p className={styles.p}>
          Cada robot debería operar con un usuario dedicado, cuyos permisos se
          limiten a lo que necesita, y sus credenciales deberían guardarse fuera
          del código. Un robot que entra con la cuenta de un analista no deja
          trazabilidad y se detiene cuando esa persona cambia su contraseña.
        </p>
        <p className={styles.p}>
          Si el proveedor tendrá acceso a datos personales de clientes,
          trabajadores o proveedores, aplica la Ley 21.719, que comienza a regir
          el 1 de diciembre de 2026. Quien trata datos por cuenta de tu empresa
          debe firmar contigo un contrato que fije el objeto del encargo, su
          duración, la finalidad, el tipo de datos y las obligaciones de cada
          parte. Además, el tercero no puede delegar el
          encargo sin tu autorización escrita. A octubre de 2026, el Senado
          tramita un proyecto del Ejecutivo (boletín 18.623-07) que propone
          mover la vigencia al 1 de diciembre de 2027. Mientras ese cambio no se
          publique, rige la fecha de 2026.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cómo responde Robotipy estas preguntas?</h2>
        <p className={styles.p}>
          Robotipy es una consultora de automatización fundada en 2023, con
          operación en Chile y en Argentina. Hemos entregado más de 70 proyectos
          y somos{" "}
          <IntLink href="/blog/robotipy-platinum-partner-rocketbot">
            Platinum Partner de Rocketbot
          </IntLink>
          . También hemos trabajado con UiPath, Power Automate, n8n, Claude
          (Anthropic) y Python. Con esas herramientas hemos automatizado
          procesos sobre SAP, Finnegans, AS400, Defontana y portales bancarios
          de Chile y de Argentina. Los casos publicados están en{" "}
          <IntLink href="/casos-exito">casos de éxito</IntLink>.
        </p>
        <p className={styles.p}>
          El desarrollo cuesta en promedio USD 6.000 e incluye un mes de trabajo
          y la marcha blanca. La licencia de Rocketbot, de USD 2.500, se cobra
          solo si no tienes una propia. El soporte mensual es opcional y cuesta
          desde USD 300. Monitoreamos los robots con{" "}
          <IntLink href="/monitor">Robotipy Monitor</IntLink>. El diagnóstico
          inicial no tiene costo. Lo que acordemos sobre código, credenciales y
          datos debería quedar escrito en la propuesta, igual que se lo pedirías
          a cualquier otro proveedor.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cuándo te conviene otro tipo de proveedor?</h2>
        <p className={styles.p}>
          Si tu empresa ya está estandarizada en una plataforma de RPA y tiene
          un proveedor que la conoce bien, lo más probable es que te convenga
          seguir con él. Una segunda plataforma suma licencias, servidores y
          conocimiento que mantener.
        </p>
        <p className={styles.p}>
          Otro perfil también puede servirte mejor si necesitas un integrador
          global, con presencia en muchos países, para una implementación
          corporativa en varias regiones a la vez. Por último, si al hacer estas
          preguntas descubres que tu proceso todavía cambia cada semana, lo
          recomendable es estabilizarlo antes de contratar a cualquier
          proveedor, como explicamos en{" "}
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
