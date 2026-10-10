import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-elegir-un-partner-de-rpa-en-latam/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿El partner más caro es siempre el mejor?",
    a: "No necesariamente. Un precio alto puede reflejar experiencia o solo un margen mayor sobre un proyecto sencillo. Pide el desglose de lo que incluye para distinguir un caso del otro.",
  },
  {
    q: "¿Cómo sé si un partner tiene ingenieros certificados o si solo revende la licencia?",
    a: "Pide el nombre de la persona certificada que va a trabajar en tu proyecto, además del nivel de partner de la empresa. La mayoría de los fabricantes publica un directorio de partners por país donde puedes confirmar el nivel oficial, y algunos permiten verificar las certificaciones individuales de cada consultor. Si el partner no quiere darte ese nombre antes de firmar, tómalo como señal de alerta.",
  },
  {
    q: "¿Conviene elegir un partner local o uno que trabaja de forma remota desde otro país?",
    a: "Depende de qué tan crítico sea el proceso y de cuánto le importe a tu equipo tener a alguien en el mismo huso horario cuando algo falla en producción. Para procesos de soporte, el trabajo remoto funciona bien. Si el robot toca sistemas críticos con ventanas de mantenimiento ajustadas, la cercanía horaria y la opción de reunirse en persona pesan más.",
  },
  {
    q: "¿Hay que firmar exclusividad con un partner de RPA?",
    a: "No debería ser necesario. Si un partner la pone como condición para empezar, desconfía, porque te impide cotizar con otros en los proyectos siguientes.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-elegir-un-partner-de-rpa-en-latam";

export const post = {
  slug,
  locale: "es",
  title:
    "Cómo elegir un partner de RPA en LatAm: certificación, preguntas y señales de alerta",
  description:
    "Cómo distinguir un partner de RPA en LatAm que resuelve tu proceso de uno que solo revende licencias: preguntas para la primera reunión y señales de alerta.",
  keywords: [
    "partner de RPA en LatAm",
    "cómo elegir un partner de RPA",
    "implementador de Rocketbot",
    "consultora de automatización RPA",
    "partner certificado RPA",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-11-04",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-elegir-un-partner-de-rpa-en-latam/header.jpeg",
    alt: "Cómo elegir un partner de RPA en LatAm: certificación, preguntas y señales de alerta",
  },
  faq: faqs,
  cta: {
    titulo: "Revisión de tu proceso",
    texto:
      "Revisamos sin costo tu proceso para decirte si justifica un proyecto de RPA y qué deberías pedirle a cualquier partner que cotices, incluido Robotipy.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cuánto cuesta automatizar un proceso",
    linkUrl: "/blog/cuanto-cuesta-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          En Chile, Argentina, Colombia y España, cualquier empresa puede presentarse como
          "Partner RPA" en LinkedIn al día siguiente de firmar un acuerdo de
          reventa con un fabricante. Ese acuerdo no le exige tener ingenieros
          certificados ni haber entregado un solo proyecto, y nadie regula el
          uso de la palabra "partner".
        </p>
        <p className={styles.p}>
          Desde fuera, los sitios web de dos partners se ven casi idénticos,
          con el mismo logo del fabricante y casos de éxito de alguna "empresa
          líder del sector". La demo también suele venir bien preparada, pero
          con eso no puedes saber si el robot seguirá funcionando a los tres
          meses. La diferencia aparece en las respuestas a un puñado de
          preguntas concretas, como quién va a construir el robot o qué ocurre
          si el proceso cambia después de la entrega.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué exige cada nivel de partner</h2>
        <p className={styles.p}>
          Rocketbot, UiPath, Automation Anywhere y la mayoría de los
          fabricantes de RPA clasifican a sus implementadores en niveles, con
          nombres como Silver, Gold o Platinum que cambian según la marca. El
          nivel de entrada normalmente pide poco más que el acuerdo comercial
          de reventa.
        </p>
        <p className={styles.p}>
          Los niveles altos piden cosas que se pueden verificar, como un mínimo
          de ingenieros certificados en el equipo y proyectos entregados y
          validados por el propio fabricante. Esos niveles incluyen además
          acceso directo al soporte técnico del fabricante para cuando algo
          falla en producción.
        </p>
        <p className={styles.p}>
          El nivel de la empresa te permite descartar a quien solo firmó el
          acuerdo de reventa. En tu proyecto pesa más la certificación de quien
          va a trabajar en él, porque la persona que consiguió el nivel para la
          empresa no necesariamente estará en tu equipo.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Preguntas para el equipo del partner</h2>
        <p className={styles.p}>
          Lleva estas preguntas a la primera reunión, antes de pedir una
          cotización. Si quieres una lista más amplia, pensada para evaluar a
          cualquier proveedor, revisa{" "}
          <IntLink href="/blog/como-elegir-proveedor-de-rpa">
            las 12 preguntas antes de firmar con un proveedor de RPA en Chile
          </IntLink>
          .
        </p>

        <h3 className={styles.h3}>
          ¿La persona que va a construir el robot está en la reunión de ventas?
        </h3>
        <p className={styles.p}>
          En un equipo pequeño, quien cotiza suele ser quien después programa,
          y eso te conviene porque entiende lo que promete. En las consultoras
          grandes es común que vendedor y desarrollador solo se conozcan
          después de firmar el contrato.
        </p>

        <h3 className={styles.h3}>¿El diagnóstico previo tiene costo?</h3>
        <p className={styles.p}>
          Quien cobra por revisar el proceso antes de saber si conviene
          automatizarlo tiene un incentivo para decir siempre que sí, incluso
          cuando lo honesto sería esperar o resolverlo con una integración más
          simple.
        </p>

        <h3 className={styles.h3}>
          ¿Qué pasa si el proceso cambia dos meses después de la entrega?
        </h3>
        <p className={styles.p}>
          Haz esta pregunta antes de firmar y pide que la respuesta quede en el
          contrato. Si el contrato no dice qué ocurre tras la entrega, esa
          negociación queda para más adelante, cuando ya no tienes margen para
          rechazar un precio inflado.
        </p>

        <h3 className={styles.h3}>¿Puedo hablar con alguno de sus clientes?</h3>
        <p className={styles.p}>
          Pide el contacto de un cliente que tenga hoy un robot del partner en
          producción. Un partner con proyectos reales no debería tener problema
          en dártelo, aunque por confidencialidad el nombre de la empresa quede
          reservado.
        </p>

        <h3 className={styles.h3}>
          ¿Me van a decir si el proceso todavía no justifica automatizarlo, o
          van a cotizar de todas formas?
        </h3>
        <p className={styles.p}>
          Es la pregunta más incómoda de la lista, así que fíjate también en
          cómo reacciona la persona al escucharla.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Señales de alerta en una cotización</h2>
        <p className={styles.p}>
          Un precio cerrado a las 48 horas, enviado por alguien que nunca
          preguntó cómo funciona hoy el proceso, indica que cotizó a ciegas o
          con una plantilla genérica.
        </p>
        <p className={styles.p}>
          También es mala señal un presupuesto que junta en una misma línea el
          desarrollo del robot y el rediseño del proceso que hay detrás. Si el
          proceso tiene pasos que existen solo porque "siempre se hizo así",
          ordenarlos es consultoría de procesos. Ese trabajo debería aparecer
          como ítem propio en la cotización, separado de las horas de
          programación.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo comparar cotizaciones de RPA</h2>
        <p className={styles.p}>
          Comparar tres cotizaciones de RPA solo por el número final casi
          siempre lleva a una mala decisión, porque cada una puede cubrir cosas
          distintas. Pide que cada propuesta muestre por separado estos tres
          puntos:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Licencia de la plataforma: entra o no en el precio según si tu
            empresa ya la tiene.
          </li>
          <li className={styles.li}>
            Marcha blanca: algunos partners la incluyen y otros la cobran
            aparte. Es el periodo en que el robot funciona en paralelo al
            proceso manual antes de reemplazarlo.
          </li>
          <li className={styles.li}>
            Soporte mensual: revisa si cubre los primeros tres meses o si queda
            fuera desde el primer día.
          </li>
        </ul>
        <p className={styles.p}>
          En{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>{" "}
          mostramos ese desglose completo con nuestros propios números, porque
          la mayoría de los partners no publica los suyos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Si ya tienes un equipo interno con tiempo</h2>
        <p className={styles.p}>
          Si tu empresa tiene un equipo de desarrollo interno que conoce el
          sistema y tiene tiempo disponible, puede construir el robot por su
          cuenta. Pagarle a un tercero por un trabajo que ese equipo puede
          hacer con su capacidad ociosa no se justifica económicamente, por
          alto que sea el nivel del partner con el fabricante. Si el partner no
          lo menciona de entrada, plantéalo tú antes de pagar un diagnóstico.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo aplicamos estos criterios en Robotipy</h2>
        <p className={styles.p}>
          Robotipy es Platinum Partner de Rocketbot, el nivel más alto de su
          programa de certificación (lo explicamos en{" "}
          <IntLink href="/blog/robotipy-platinum-partner-rocketbot">
            este artículo
          </IntLink>
          ). Danilo Toro, fundador de Robotipy, pasó seis años desarrollando la
          plataforma Rocketbot antes de crear la consultora, así que el equipo
          la conoce por dentro.
        </p>
        <p className={styles.p}>
          El diagnóstico previo no tiene costo, y si al revisarlo vemos que tu
          proceso todavía no justifica automatizarlo, te lo decimos antes de
          enviarte una cotización.
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
