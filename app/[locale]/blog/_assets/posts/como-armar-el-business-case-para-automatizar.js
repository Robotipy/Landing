import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/como-armar-el-business-case-para-automatizar/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuánto tiempo hay que dedicarle a armar un business case?",
    a: "Si el proceso ya está medido (horas, frecuencia, personas), una tarde basta para dejar el documento listo. Lo que más demora es conseguir el número real de horas, que casi nunca está escrito en ningún lado. Hay que preguntárselo directamente a quien hace la tarea.",
  },
  {
    q: "¿El business case lo tiene que armar el proveedor?",
    a: "No. El proveedor aporta el monto de la inversión y el detalle técnico. El argumento de negocio (cuánto cuesta hoy el proceso, qué errores se evitan) lo arma mejor quien vive el proceso todos los días.",
  },
  {
    q: "¿Qué pasa si finanzas pide un ROI más conservador que el que calculamos?",
    a: "Acéptalo. Si el proyecto supera esa cifra, la dirección gana confianza y te va a costar menos conseguir presupuesto para el siguiente.",
  },
  {
    q: "¿Sirve incluir el costo de no automatizar?",
    a: "Sí. Seguir con el proceso manual también cuesta: los errores siguen ocurriendo, la persona que hace la tarea puede irse y llevarse el conocimiento del proceso, y el volumen crece hasta que el trabajo a mano ya no da abasto. Para este punto no se necesita una cifra exacta. Mencionarlo es suficiente.",
  },
  {
    q: "¿Y si la dirección aprueba el piloto pero no el programa completo?",
    a: "Es el resultado más común y un buen punto de partida. Un piloto bien ejecutado es la evidencia que necesitas para pedir después el programa completo, y convence más rápido que cualquier proyección hecha antes de tener un robot en producción.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
  formula: "border-l-2 border-accent pl-4 py-1",
};

const slug = "como-armar-el-business-case-para-automatizar";

export const post = {
  slug,
  locale: "es",
  title: "Cómo armar el business case para automatizar (y convencer a la dirección)",
  description:
    "Cómo armar el business case para automatizar un proceso con RPA: qué número presentar, qué objeciones anticipar y por qué conviene pedir primero un piloto.",
  keywords: [
    "business case para automatizar",
    "cómo justificar un proyecto de RPA",
    "convencer a la dirección de automatizar",
    "presupuesto para automatización",
    "ROI de RPA para gerencia",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-21",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-armar-el-business-case-para-automatizar/header.jpeg",
    alt: "Cómo armar el business case para automatizar (y convencer a la dirección)",
  },
  faq: faqs,
  cta: {
    titulo: "El número para tu próxima reunión",
    texto:
      "Armamos el cálculo con tus datos reales para que no tengas que pedir presupuesto a ciegas.",
    botonLabel: "Calcular mi ROI",
    botonUrl: "/roi-calculator",
    linkLabel: "Cuánto cuesta automatizar un proceso",
    linkUrl: "/blog/cuanto-cuesta-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          El gerente de operaciones ya mostró la diapositiva del ROI, las horas
          que se liberan y el proceso que hoy hacen tres personas a mano. Cerca
          del minuto doce, alguien de finanzas que no había dicho nada pregunta
          algo como: &quot;¿En cuánto tiempo se paga solo, contando lo que va a
          costar mantenerlo el próximo año?&quot;.
        </p>
        <p className={styles.p}>
          Si la respuesta es un silencio o un &quot;lo vemos después&quot;, el
          proyecto no se cae en ese momento, pero pierde el impulso que traía.
          La mayoría de los business case que no se aprueban traen el ROI bien
          calculado y caen igual, porque nadie preparó la respuesta a esa
          pregunta. Hemos estado en esa reunión muchas veces y las objeciones se
          repiten, así que se pueden anticipar al armar el caso.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El caso lo presenta el dueño del proceso</h2>
        <p className={styles.p}>
          Cuando el business case lo arma o lo presenta el área de sistemas, la
          reunión empieza en desventaja aunque los números estén bien. La
          dirección escucha &quot;tecnología&quot; y lo clasifica como gasto de
          infraestructura.
        </p>
        <p className={styles.p}>
          La conversación cambia cuando lo presenta el gerente cuyo equipo
          pierde horas en esa tarea. Con él, el proyecto se discute como una
          decisión de negocio. Ese gerente habla de las horas de trabajo y del
          dinero que hoy se van en un proceso manual, y lo que pide es recuperar
          tiempo de su gente para dedicarlo a otra cosa.
        </p>
        <p className={styles.p}>
          Como vimos en{" "}
          <IntLink href="/blog/como-priorizar-que-procesos-automatizar">
            cómo priorizar qué procesos automatizar primero
          </IntLink>
          , el inventario de candidatos lo levanta la empresa. El business case
          también lo defiende quien vive el proceso, y el proveedor respalda
          técnicamente los números.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La cuenta del proceso manual</h2>
        <p className={styles.p}>
          Antes de la reunión, ten armada la cuenta de lo que cuesta hoy el
          proceso manual. La fórmula es sencilla:
        </p>
        <p className={`${styles.p} ${ui.formula}`}>
          horas semanales que dedica el equipo × costo de esa hora × 52, más una
          estimación de lo que cuestan los errores.
        </p>
        <p className={styles.p}>
          La{" "}
          <IntLink href="/roi-calculator">calculadora de ROI</IntLink> hace esa
          misma cuenta con los datos reales de tu empresa, sin que tengas que
          pedir nada por escrito.
        </p>
        <p className={styles.p}>
          Los errores casi nunca entran en esa cuenta. Piensa en la factura
          pagada dos veces, el descuento mal aplicado o el reporte que llegó
          tarde y le costó una decisión a otra área. Ese costo no aparece en
          ningún reporte, porque el error se corrige a mano. Es más difícil de
          estimar que las horas y suele ser una parte importante del argumento,
          así que inclúyelo aunque la cifra sea aproximada.
        </p>
        <p className={styles.p}>
          Un ejemplo ilustrativo (no corresponde a un caso real): un proceso que
          ocupa diez horas semanales entre dos personas, con un costo por hora
          cargado de USD 15, suma unos{" "}
          <strong className={styles.strong}>USD 7.800 al año</strong> solo en
          tiempo. La inversión mínima ronda los{" "}
          <strong className={styles.strong}>USD 6.000</strong>, según el
          desglose de{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          . Con esas cifras, las cuentas ya cierran con el ahorro de tiempo, sin
          contar todavía los errores evitados.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El mantenimiento después del primer año</h2>
        <p className={styles.p}>
          Una vez aceptado el precio del desarrollo, la objeción que frena la
          aprobación es qué pasa después del primer año: quién mantiene el robot
          y qué ocurre si el sistema con el que trabaja cambia de versión. Es
          una objeción legítima. Un robot sin mantenimiento termina fallando, y
          si nadie lo nota a tiempo, el daño puede superar el beneficio.
        </p>
        <p className={styles.p}>
          El soporte mensual es opcional y no viene escondido en el precio
          inicial. Cuesta desde{" "}
          <strong className={styles.strong}>USD 300 al mes</strong> si se
          contrata, y hay clientes que prefieren operar el robot con su propio
          equipo.
        </p>
        <p className={styles.p}>
          Dilo también en la misma reunión: cualquier automatización necesita a
          una persona interna que revise que el robot se ejecutó y sepa a quién
          avisar si algo falla. El rol no exige conocimientos técnicos ni sale
          caro. Cuando no se nombra antes de firmar, se improvisa la primera vez
          que el robot se cae.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Quién tiene que estar en la sala</h2>
        <p className={styles.p}>
          Con el gerente del área y el proveedor no basta. Faltan dos personas
          que cambian el resultado de la reunión.
        </p>
        <p className={styles.p}>
          Pide que alguien de finanzas, el área que controla el presupuesto,
          revise los números antes de la reunión de aprobación. Si el cálculo
          llega a la sala sin esa revisión, cualquier duda se discute en vivo
          frente a quien tiene que decidir, y esa discusión le juega en contra al
          proyecto.
        </p>
        <p className={styles.p}>
          Invita también a la persona que hace hoy el trabajo a mano, aunque su
          jefe ya esté en la sala. Ella conoce las excepciones reales del
          proceso, las que no figuran en ningún documento. Aunque solo asista
          diez minutos, su presencia le da credibilidad al proyecto, en especial
          si confirma frente a la dirección que el robot resuelve lo que hoy le
          complica el día.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Empezar por un piloto</h2>
        <p className={styles.p}>
          El error más caro en los business case ambiciosos es pedir aprobación
          para un programa de diez robots antes de tener uno funcionando. La
          dirección tendría que confiar en una promesa sobre diez procesos sin
          haber visto operar ni siquiera el primero. Es mucho pedir para una
          sola reunión, y lo habitual es que termine en un &quot;lo evaluamos el
          próximo trimestre&quot;, que equivale a un no.
        </p>
        <p className={styles.p}>
          Funciona mejor al revés: pide aprobación para un proceso acotado y
          visible, con retorno claro en pocos meses, y deja el resto del programa
          para una segunda reunión, cuando ya haya un robot en producción que
          cualquiera pueda ir a ver. Por qué conviene ese orden lo explicamos en el artículo sobre <PostLink slug="de-1-robot-a-un-centro-de-excelencia-de-automatizacion">cómo pasar de un robot a un Centro de Excelencia de automatización</PostLink>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué no prometer en la reunión</h2>
        <p className={styles.p}>
          Cuando la aprobación se está haciendo difícil, aparece la tentación de
          prometer de más: cero errores, retorno en un mes, nada de
          mantenimiento. Ninguna de esas promesas se cumple, y prometerlas es
          uno de los{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
          </IntLink>
          . Cualquier robot que depende de la interfaz de un tercero puede fallar
          cuando esa interfaz cambia, y ese día la dirección va a recordar lo que
          se le prometió.
        </p>
        <p className={styles.p}>
          Comprométete con un número conservador que el robot pueda superar. La
          primera revisión trimestral va a medir el proyecto contra esa cifra.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Cuándo todavía no conviene armar el business case
        </h2>
        <p className={styles.p}>
          El business case parte de las horas que consume el proceso. Si el área
          todavía está ajustando cómo lo hace y el proceso cambia de forma cada
          dos o tres semanas, esas horas no se mantienen y no hay una cifra
          estable que medir. Cualquier número que calcules hoy quedará
          desactualizado antes de la próxima reunión de directorio.
        </p>
        <p className={styles.p}>
          En ese caso, espera a que el proceso se estabilice antes de armar el
          caso. Esa etapa la tratamos en{" "}
          <IntLink href="/blog/como-empezar-un-proyecto-de-automatizacion">
            cómo empezar un proyecto de automatización
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
