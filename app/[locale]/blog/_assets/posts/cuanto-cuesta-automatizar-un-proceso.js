import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/cuanto-cuesta-automatizar-un-proceso/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);
const Lead = ({ children }) => (
  <strong className="font-bold text-white">{children}</strong>
);

const faqs = [
  {
    q: "¿Cuánto cuesta en promedio automatizar un proceso con RPA?",
    a: "En Robotipy, el desarrollo de un proyecto de automatización cuesta en promedio USD 6.000, e incluye un mes de trabajo y la marcha blanca sin costo aparte. A eso se suma una licencia de USD 2.500 solo si el cliente todavía no tiene una propia, y el soporte mensual posterior, si se contrata, arranca en USD 300 y no es obligatorio. El diagnóstico previo para decidir qué automatizar no se cobra.",
  },
  {
    q: "¿El diagnóstico o consultoría inicial tiene costo?",
    a: "No. Analizamos el proceso y te decimos si conviene automatizarlo antes de que pagues nada.",
  },
  {
    q: "¿Cuál es el proyecto más barato que han hecho?",
    a: "Depende mucho del año y del cliente, pero los más económicos suelen ser automatizaciones de un solo sistema, con datos de entrada limpios y sin integraciones adicionales: un robot que entra, extrae, carga y listo.",
  },
  {
    q: "¿Siempre hay que pagar la licencia de la plataforma de RPA?",
    a: "No. Solo se cobra si el cliente todavía no tiene una licencia propia. Si ya la tiene, ese ítem directamente no aparece en la cotización.",
  },
  {
    q: "¿Es obligatorio contratar el soporte mensual?",
    a: "No. Es un servicio aparte, no parte del paquete base. Hay clientes que se quedan operando el robot con su propio equipo después de la entrega y no pagan nada mensual; otros prefieren que sigamos monitoreándolo nosotros.",
  },
  {
    q: "¿Cómo dan un precio si todavía no conocen mi proceso?",
    a: "No lo damos a ciegas. Primero hacemos el diagnóstico gratis: cuántas veces por mes se ejecuta el proceso, cuánta gente participa y qué tan documentado está el sistema que hay que tocar. Con esos tres datos, en la mayoría de los casos alcanza para dar un rango de precio real en la primera llamada. El número exacto se cierra recién cuando se define el alcance por escrito.",
  },
  {
    q: "¿Qué pasa si el proyecto termina costando más de lo cotizado?",
    a: "Si el alcance no cambió y el proceso funcionaba como se documentó al inicio, el precio cerrado se respeta. Si durante el desarrollo aparece algo que no estaba en el alcance original (un sistema adicional, una excepción no contemplada), eso se conversa como un cambio de alcance antes de seguir, no se factura por sorpresa al final.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "cuanto-cuesta-automatizar-un-proceso";

export const post = {
  slug,
  locale: "es",
  title: "Cuánto cuesta automatizar un proceso (y cómo se cobra)",
  description:
    "Cuánto cuesta un proyecto de RPA en Chile y Argentina: desde USD 6.000 de desarrollo, cuándo se suma la licencia de USD 2.500 y cómo funciona el soporte mensual opcional.",
  keywords: [
    "cuánto cuesta automatizar un proceso",
    "precio de RPA",
    "cotización de automatización",
    "costo de un robot RPA",
    "cuánto cuesta un proyecto de RPA",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-05",
  image: {
    src: thumbnail,
    urlRelative: "/blog/cuanto-cuesta-automatizar-un-proceso/header.jpeg",
    alt: "Cuánto cuesta automatizar un proceso con RPA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Quieres un rango de precio real para tu caso?",
    texto:
      "Cuéntanos cómo funciona hoy el proceso y en cuánto tiempo te damos un número, no una demo genérica.",
    botonLabel: "Pedir cotización",
    botonUrl: "/contact-us",
    linkLabel: "Calcula tu ROI",
    linkUrl: "/roi-calculator",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Un proyecto de RPA con nosotros arranca, en la mayoría de los casos,
          alrededor de los USD 6.000. Ese número es el desarrollo: un mes de
          trabajo, con la marcha blanca (el robot corriendo en paralelo al
          proceso manual para validar que todo cuadre antes de apagar el proceso
          viejo) incluida sin costo aparte. Si el cliente todavía no tiene su
          propia licencia de la plataforma de RPA, se suma una licencia de USD
          2.500. El soporte mensual después de la entrega, si se contrata,
          arranca en USD 300 y no es obligatorio: hay clientes que se quedan
          operando el robot solos.
        </p>
        <p className={styles.p}>
          Damos esos números así de rápido porque es lo primero que preguntan
          antes de agendar cualquier reunión, y no tiene sentido hacer esperar a
          nadie 40 minutos de demo para llegar a esa respuesta.
        </p>
        <p className={styles.p}>
          Dicho eso, un número solo, sin contexto, sirve para poco. Lo que de
          verdad determina si un proyecto cuesta 6.000 dólares, el triple o
          menos son cuatro variables, y ninguna de las cuatro es &quot;cuántos
          procesos quieres automatizar&quot;.
        </p>
        <p className={styles.p}>
          Ojo con esto: los 6.000 son un promedio, no un piso. Un proceso muy
          acotado, de dos o tres pasos, con datos limpios y sin nada raro que
          validar, puede salir por debajo de eso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El diagnóstico de qué automatizar no se cobra</h2>
        <p className={styles.p}>
          Antes de cotizar nada, miramos el proceso junto al cliente: qué hace
          hoy, cuánta gente participa, qué sistemas toca y si de verdad conviene
          automatizarlo primero, en vez de otro proceso de la misma lista. Ese
          diagnóstico no tiene costo. Se paga recién cuando se decide avanzar con
          el desarrollo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Por qué no hay una tarifa fija por robot</h2>
        <p className={styles.p}>
          Un robot que hace clic en tres pantallas de un sistema estable, con
          datos limpios y reglas claras, es un proyecto de semanas. Un robot que
          tiene que leer PDFs con formatos distintos, cruzar contra un ERP sin
          API y decidir qué hacer con las excepciones, es otro animal
          completamente distinto aunque en el papel &quot;automatice lo
          mismo&quot;: una factura que entra y un asiento contable que sale.
        </p>
        <p className={styles.p}>
          Por eso cuando alguien pregunta &quot;¿cuánto cuesta un robot?&quot; la
          respuesta honesta es &quot;depende de qué tan sucio está el proceso, no
          de qué tan grande es la empresa&quot;. Hemos cotizado proyectos más
          baratos para compañías grandes con procesos ordenados que proyectos
          caros para pymes con datos desordenados en tres sistemas distintos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Las cuatro variables que mueven el precio</h2>
        <p className={styles.p}>
          <Lead>Complejidad de la interfaz.</Lead> No es lo mismo automatizar un
          sistema web moderno que uno de escritorio hecho en los 2000, con
          ventanas emergentes y campos que cambian de posición según el usuario
          logueado. SAP, para tomar un caso que conocemos bien, es relativamente
          predecible una vez que se mapea la transacción, como vemos en{" "}
          <IntLink href="/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa">
            qué procesos de SAP se pueden automatizar con RPA
          </IntLink>
          . Un sistema legado sin documentación puede triplicar las horas de
          desarrollo solo en la etapa de reconocimiento.
        </p>
        <p className={styles.p}>
          <Lead>Calidad de los datos de entrada.</Lead> Es la que más subestiman
          los clientes, y casi siempre la que más horas termina consumiendo. Si
          la planilla o el correo que dispara el proceso viene siempre con el
          mismo formato, el robot es simple. Si viene de proveedores distintos,
          con columnas que a veces están y a veces no, o el mismo campo con tres
          nombres según quién lo cargó, hay que construir una capa entera de
          validación antes de llegar a la parte que de verdad automatiza algo.
        </p>
        <p className={styles.p}>
          <Lead>Volumen y frecuencia.</Lead> Un proceso semanal no necesita la
          robustez de uno que corre cada cinco minutos con miles de transacciones
          diarias, que sí exige monitoreo, reintentos automáticos y alertas.
        </p>
        <p className={styles.p}>
          Y la cuarta, <Lead>las integraciones puntuales</Lead>, es la que casi
          nadie pregunta en la primera reunión: cuántos sistemas más, aparte del
          principal, tiene que tocar el robot. Un ERP, un correo, un WhatsApp
          Business, una base de datos propia, cada uno suma configuración y
          pruebas. Un robot que toca un solo sistema sale más barato que uno que
          orquesta cuatro.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La licencia: por qué no todos la pagan</h2>
        <p className={styles.p}>
          La licencia de la herramienta de RPA va aparte del desarrollo, y solo
          se cotiza cuando el cliente no la tiene todavía. Si ya tiene una
          licencia vigente (porque la compró antes, porque la trae de otro
          proyecto, o porque la gestiona directamente con el proveedor de la
          plataforma) ese costo no existe en la cotización. Es una de las
          confusiones más comunes que vemos: pensar que los USD 2.500 son parte
          fija de cualquier proyecto, cuando en realidad dependen de un solo dato
          puntual, si el cliente ya tiene licencia o no. Si trabajas sobre{" "}
          <IntLink href="/rocketbot">Rocketbot</IntLink>, ese punto lo resolvemos
          en la etapa de cotización.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Los tres modelos de cobro que usamos</h2>
        <p className={styles.p}>
          No cobramos igual en todos los proyectos, porque el riesgo lo asume
          distinto cada parte según el modelo.
        </p>
        <p className={styles.p}>
          <Lead>Por proyecto cerrado</Lead> es el más común: se define el
          alcance, se cotiza el desarrollo (los USD 6.000 de los que hablamos
          arriba, más la licencia si corresponde) y se entrega el robot
          funcionando, con la marcha blanca incluida. Funciona bien cuando el
          proceso ya está documentado y las reglas son claras desde el día uno.
        </p>
        <p className={styles.p}>
          <Lead>Soporte y mantenimiento mensual</Lead> es opcional, no parte del
          paquete base. Arranca en USD 300 al mes y sube según cuántos robots hay
          que monitorear y qué tan crítico es el proceso. Algunos clientes lo
          contratan desde el día uno porque no quieren que nadie interno tenga
          que aprender a mantenerlo. Otros prefieren quedarse solos después de la
          entrega, y recién vuelven a golpearnos la puerta cuando algo se rompe.
          Las dos decisiones son razonables: depende de si el equipo del cliente
          tiene a alguien disponible para hacerse cargo.
        </p>
        <p className={styles.p}>
          <Lead>Por bolsa de horas</Lead> es el modelo menos frecuente, y lo
          usamos casi exclusivamente con clientes que ya tienen experiencia con
          RPA y saben exactamente qué necesitan mes a mes, sin un alcance fijo que
          cerrar de entrada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Lo que no debería entrar en la cotización (y a veces sí entra)
        </h2>
        <p className={styles.p}>
          Esta parte es incómoda pero hay que decirla. Un presupuesto de RPA bien
          armado separa el costo del robot del costo de arreglar un proceso que
          estaba mal desde antes de pensar en automatizarlo. Si el proceso tiene
          pasos manuales que existen solo porque &quot;siempre se hizo así&quot; y
          nadie los cuestionó, ese trabajo de rediseño es consultoría de
          procesos, no desarrollo de RPA, y debería cotizarse (o discutirse) por
          separado. Cuando un proveedor mete todo en la misma bolsa, el cliente
          termina pagando por horas de reingeniería de procesos disfrazadas de
          horas de programación de robot.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo se justifica el gasto frente a la dirección</h2>
        <p className={styles.p}>
          El argumento que convence no es &quot;esto es barato&quot;. Es comparar
          el costo del robot contra las horas que hoy dedica el equipo a la tarea,
          multiplicadas por lo que cuesta esa hora, más lo que sale un error que
          hoy nadie mide pero que existe. Un proceso donde dos personas se pasan
          medio día cada semana suele pagar el proyecto en pocos meses, sin
          contar los errores evitados. Para ponerle números al caso puntual,
          tenemos una <IntLink href="/roi-calculator">calculadora de ROI</IntLink>{" "}
          que compara la inversión contra el ahorro estimado antes de firmar nada.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Antes de pedir una cotización</h2>
        <p className={styles.p}>
          Llegar a la primera reunión con tres datos acelera todo: cuántas veces
          por mes se ejecuta el proceso hoy, cuántas personas participan y cuánto
          tiempo les toma, y si el sistema que hay que tocar tiene alguna
          documentación (aunque sea vieja o incompleta). Con eso, en la mayoría
          de los casos podemos dar un rango de precio en la primera llamada, no
          después de tres reuniones de descubrimiento.
        </p>
        <p className={styles.p}>
          Danilo Toro, fundador de Robotipy, cotiza personalmente los proyectos de
          automatización en Chile y Argentina, sin vender de más ni esconder lo
          que no sabe todavía sobre un proceso hasta no verlo.
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
