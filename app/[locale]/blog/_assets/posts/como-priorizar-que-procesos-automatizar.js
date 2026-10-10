import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import PostLink from "../components/PostLink";
import thumbnail from "@/public/blog/como-priorizar-que-procesos-automatizar/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuánto tarda un assessment de procesos?",
    a: "Entre una y tres semanas para un inventario de diez a quince procesos. La mayor parte de ese tiempo lo pone la empresa, en entrevistas con quienes ejecutan las tareas. Puntuar y ordenar se resuelve en un par de reuniones, una vez que los datos están sobre la mesa.",
  },
  {
    q: "¿Puedo hacer el assessment sin un proveedor?",
    a: "Sí, y conviene que el inventario lo prepares tú. Nadie externo sabe con qué frecuencia se ejecuta un proceso ni qué excepciones tuvo el mes pasado.",
  },
  {
    q: "¿Y si todos los procesos de mi lista tienen un impacto parecido?",
    a: "Deciden la reutilización y la estabilidad. Primero va el que comparte sistemas con más candidatos de la lista. El que depende de un sistema con cambios planificados se descarta por ahora. Es el escenario más común en empresas medianas: cinco procesos administrativos de tamaño similar, donde la decisión pasa por cuál deja más construido para los otros cuatro. Si dos de ellos usan el mismo ERP, hazlos uno detrás del otro. Con el contexto fresco en el equipo y la biblioteca recién construida, el segundo sale bastante más barato que si se hace seis meses después.",
  },
  {
    q: "¿Qué hago con los procesos que quedan fuera de la priorización?",
    a: "Mantenlos en el inventario. Un candidato descartado hoy por complejidad puede volverse viable cuando el programa ya resolvió las piezas que compartía con otros. Revisa los descartes cada seis meses.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "como-priorizar-que-procesos-automatizar";

export const post = {
  slug,
  locale: "es",
  title: "Cómo priorizar qué procesos automatizar primero",
  description:
    "Cómo priorizar qué procesos automatizar cuando hay diez candidatos y presupuesto para dos: inventario, puntaje de cinco preguntas y orden de los proyectos.",
  keywords: [
    "cómo priorizar qué procesos automatizar",
    "assessment de automatización",
    "matriz de priorización RPA",
    "qué procesos automatizar primero",
    "inventario de procesos automatizables",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-17",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-priorizar-que-procesos-automatizar/header.jpeg",
    alt: "Cómo priorizar qué procesos automatizar primero",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes varios procesos candidatos y no sabes cuál va primero?",
    texto:
      "Armamos el inventario contigo y te recomendamos un orden, incluidos los procesos que es mejor posponer o dejar fuera.",
    botonLabel: "Evaluar mis procesos",
    botonUrl: "/contact-us",
    linkLabel: "Cómo calcular el ROI en proyectos RPA",
    linkUrl: "/blog/como-calcular-el-roi-en-proyectos-rpa",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Una empresa que ya decidió automatizar rara vez tiene pocos
          candidatos. Lo normal es que aparezcan doce procesos, casi todos
          automatizables, cada uno defendido por su jefe de área, y un
          presupuesto que este año da para dos o tres. Hay que decidir en qué
          orden hacerlos y cuáles no hacer nunca.
        </p>
        <p className={styles.p}>
          Esa decisión suele tomarse en una reunión, y la gana el gerente que
          más insiste o el proceso que más problemas dio el mes pasado. Es
          comprensible, pero sale caro, porque el orden de los proyectos
          influye más en el retorno del programa que la calidad de cada robot.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El inventario de procesos</h2>
        <p className={styles.p}>
          Antes de puntuar hay que saber qué procesos existen. La base de
          cualquier assessment de automatización es una tabla de procesos
          reales con cuatro datos por fila: quién lo hace, con qué frecuencia
          se ejecuta, cuántas horas consume a la semana y qué sistemas toca. Un
          proceso al que le falta alguno de esos datos todavía es una
          intuición, y queda fuera de la evaluación hasta completarlo.
        </p>
        <p className={styles.p}>
          El inventario lo arma la empresa, entrevistando a quienes ejecutan
          cada tarea. Si se le pregunta al gerente, lo más probable es que
          estime menos tiempo del real. Esa diferencia aparece en casi todos
          los inventarios y suele ir en la misma dirección, porque nadie
          contabiliza los reprocesos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Impacto, complejidad y reutilización</h2>
        <p className={styles.p}>
          Con el inventario listo, cada proceso se puntúa por impacto (horas
          liberadas al año, errores evitados, riesgo reducido) y por
          complejidad. La complejidad crece con el número de sistemas y de
          excepciones, y también cuando la interfaz cambia con frecuencia.
          Arriba de la lista quedan los de alto impacto y baja complejidad. Los
          del cuadrante opuesto se descartan aunque su área presione.
        </p>
        <p className={styles.p}>
          Esa es la matriz de priorización clásica de RPA, la que aparece en
          cualquier presentación del tema. Le falta la reutilización, que en la
          práctica es el criterio que más pesa en el orden. Si un proceso usa
          el mismo login a SAP, lee el mismo Excel de entrada y escribe los
          resultados igual que otros cuatro de la lista, su puntaje de impacto
          lo subestima, porque lo que se construye ahí queda hecho para los
          siguientes. Con las seis semanas de ese proyecto se paga un robot más
          la mitad de la biblioteca que usará el resto del programa.
        </p>
        <p className={styles.p}>
          En los proyectos que hacemos con Rocketbot, la conexión a SAP, las
          rutas y el manejo de credenciales viven en subrobots de
          inicialización separados. El segundo robot que necesita SAP los llama
          en vez de construirlos de nuevo. Por eso, si en una evaluación quedan
          tres candidatos empatados y uno comparte sistema con la mitad de la
          lista, conviene hacerlo primero aunque su ROI individual sea el más
          bajo de los tres, porque así el programa completo termina antes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Un puntaje de cinco preguntas</h2>
        <p className={styles.p}>
          Para puntuar basta con asignar un valor de 1 a 5 a cada una de estas
          preguntas y sumar los resultados. Una fórmula ponderada de nueve
          variables sería trabajo de más.
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>¿Cuántas horas a la semana consume hoy?</li>
          <li className={styles.li}>
            ¿Se hace siempre de la misma forma o depende del criterio de quien
            lo ejecuta?
          </li>
          <li className={styles.li}>
            ¿Cuántos sistemas distintos toca? ¿Alguno tiene API disponible?
          </li>
          <li className={styles.li}>
            ¿Cuántas excepciones reales tiene? Cuenta las que ocurrieron este
            mes y deja fuera las teóricas.
          </li>
          <li className={styles.li}>
            ¿Qué tan estable fue durante el último año y hay algún cambio
            planificado?
          </li>
        </ol>
        <p className={styles.p}>
          La quinta pregunta elimina candidatos que en la hoja de cálculo se
          ven perfectos. Si el sistema de origen de un proceso se migra en seis
          meses, ponerlo primero es perder dinero, por mucho impacto y poca
          complejidad que tenga. Antes de priorizar, pregunta por el roadmap de
          TI. Un proveedor apurado por cerrar la venta puede no hacer esa
          pregunta, porque la respuesta podría costarle el proyecto.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Procesos que hay que eliminar en vez de automatizar
        </h2>
        <p className={styles.p}>
          En casi todas las listas de diez candidatos aparecen uno o dos
          procesos que sobran. Suelen ser cosas como un reporte semanal que
          nadie abre desde hace un año, una doble carga que existe porque dos
          áreas no se han puesto de acuerdo en cuál es el sistema oficial, o
          una conciliación manual que nació cuando alguien desactivó una
          integración en 2023.
        </p>
        <p className={styles.p}>
          Automatizarlos funciona y el ROI cierra en la hoja de cálculo, pero
          el presupuesto se gastó en conservar un problema que se podía
          resolver. Un buen assessment marca esos casos aunque eso reduzca el
          proyecto que el mismo proveedor está cotizando. Para detectarlos,
          pregunta por qué existe cada proceso. Si la respuesta empieza con
          &quot;porque en su momento...&quot;, revísalo con más cuidado antes
          de puntuarlo. Los criterios para descartar este tipo de candidatos están en el artículo sobre <PostLink slug="cuando-no-conviene-automatizar-un-proceso">cuándo no conviene automatizar un proceso</PostLink>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cómo ordenar la secuencia de proyectos</h2>
        <p className={styles.p}>
          Con los puntajes listos falta el calendario, y el proceso con mejor
          puntaje no siempre es el que debe ir primero.
        </p>
        <p className={styles.p}>
          Supón que el candidato número uno depende de un dato que hoy carga a
          mano el área menos dispuesta a colaborar, y que el número tres no
          depende de nadie. Es mejor empezar por el tres aunque tenga menos
          puntaje, porque llega antes a producción. Ese robot en operación es
          evidencia interna que la hoja de cálculo no registra, y para las
          áreas que todavía dudan pesa más que cualquier presentación de ROI
          proyectado.
        </p>
        <p className={styles.p}>El orden que recomendamos:</p>
        <ol className={styles.ol}>
          <li className={styles.li}>
            Un proceso corto que el equipo pueda terminar sin depender de otras
            áreas y cuyo resultado se note en la empresa, para generar
            confianza desde el primer robot.
          </li>
          <li className={styles.li}>
            El de mayor reutilización, que abarata los siguientes.
          </li>
          <li className={styles.li}>
            El proyecto grande, el que toca cuatro áreas y exige que todos
            colaboren, cuando los dos anteriores ya están en producción y nadie
            discute si la automatización sirve.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Revisión del inventario cada seis meses</h2>
        <p className={styles.p}>
          La priorización se revisa porque los procesos cambian, aparecen
          candidatos nuevos y algunos descartados se vuelven viables cuando la
          biblioteca del programa ya creció.
        </p>
        <p className={styles.p}>
          Revisa el inventario cada dos trimestres con los datos reales de los
          robots que ya operan: cuánto tardó cada uno en construirse frente a
          lo estimado y cuánto mantenimiento ha consumido. El dato de
          mantenimiento es el que más corrige el modelo, así que hay que
          registrarlo robot por robot. Si un tipo de proceso resultó el doble
          de caro de mantener de lo previsto, debería bajar en la lista.
        </p>
        <p className={styles.p}>
          Si tu programa está en su etapa inicial y todavía no tienes estos
          números, revisa primero{" "}
          <IntLink href="/blog/como-empezar-un-proyecto-de-automatizacion">
            cómo empezar un proyecto de automatización
          </IntLink>
          . Los tropiezos que más hemos visto en esa etapa están reunidos en{" "}
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

      <section className="space-y-3">
        <h2 className={styles.h2}>También te puede servir</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
              Cuánto cuesta automatizar un proceso
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/rpa-vs-desarrollo-a-medida">
              RPA vs desarrollo a medida
            </IntLink>
          </li>
          <li className={styles.li}>
            <IntLink href="/blog/como-empezar-un-proyecto-de-automatizacion">
              Cómo empezar un proyecto de automatización
            </IntLink>
          </li>
        </ul>
      </section>
    </>
  ),
};
