import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/errores-comunes-al-implementar-rpa/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cuál es el error de RPA que sale más caro?",
    a: "El robot que no avisa cuando falla. No cuesta nada mientras todo funciona y por eso es fácil no incluirlo, pero el día que se frena en silencio puede pasar días roto, y el daño (facturas sin cargar, conciliaciones que no corrieron) se acumula todo ese tiempo antes de que alguien lo note.",
  },
  {
    q: "¿Estos errores se pueden corregir en un robot que ya está en producción?",
    a: "Depende de cuál. Sumar control de errores, mover las credenciales a un archivo de configuración o asignar un responsable son cosas que se hacen sobre un robot que ya corre, sin rehacerlo. El caso sin arreglo fácil es haber automatizado un proceso que todavía cambia todo el tiempo: ahí no hay parche, se reconfigura sin fin hasta que el proceso se estabilice.",
  },
  {
    q: "¿Necesito un equipo técnico interno para evitar todo esto?",
    a: "Para construir el robot, no. Lo que sí necesitas es una persona, aunque no tenga perfil técnico, que quede a cargo de revisar que corrió y avisar si algo falla. Es el rol que más se olvida y el más barato de cubrir.",
  },
  {
    q: "¿Cómo sé si mi proceso está lo bastante estable para automatizarlo?",
    a: "Con la prueba de la página: escribe los pasos exactos, excepciones incluidas. Si te sale sin un \"depende\" en cada renglón, está listo. Si no, conviene documentarlo y dejarlo correr unos meses más antes de automatizar.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "errores-comunes-al-implementar-rpa";

export const post = {
  slug,
  locale: "es",
  title: "Errores comunes al implementar RPA (y cómo evitarlos)",
  description:
    "Los errores que hunden un proyecto de RPA casi nunca están en el código del robot. Aparecen en las decisiones de antes y en lo que nadie previó para el día que falla.",
  keywords: [
    "errores comunes al implementar RPA",
    "por qué falla un proyecto de RPA",
    "implementar RPA sin errores",
    "mantenimiento de robots RPA",
    "buenas prácticas RPA",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-11",
  image: {
    src: thumbnail,
    urlRelative: "/blog/errores-comunes-al-implementar-rpa/header.jpeg",
    alt: "Errores comunes al implementar RPA y cómo evitarlos",
  },
  faq: faqs,
  cta: {
    titulo: "¿Estás por arrancar un proyecto de automatización?",
    texto:
      "Miramos el proceso sin costo y te decimos si está listo para automatizar o qué conviene ordenar antes.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cuánto cuesta automatizar",
    linkUrl: "/blog/cuanto-cuesta-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Casi todos los proyectos de RPA que terminan mal tienen un robot bien
          construido adentro. Suena raro, pero es así: la parte de escribir el
          robot casi nunca es el problema. Lo que falla es lo que lo rodea, y
          buena parte de eso se decidió antes de que alguien escribiera el primer
          comando.
        </p>
        <p className={styles.p}>
          Van los errores que más veces vemos en empresas de Chile y Argentina,
          con lo que conviene hacer en cada caso. No están ordenados por
          gravedad, sino más o menos en el orden en que aparecen a lo largo de un
          proyecto.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El primer robot no debería ser el proceso estrella</h2>
        <p className={styles.p}>
          Cuando una empresa se decide, la tentación es arrancar por el proceso
          que más duele, el que hace ruido en las reuniones. Y ese suele ser el
          más caótico: el que tiene cincuenta excepciones y cambia de forma cada
          tanto. Un mal candidato para estrenar.
        </p>
        <p className={styles.p}>
          Para un primer proyecto conviene algo estable y hasta aburrido, una
          tarea que se hace igual todas las semanas desde hace un año y que nadie
          planea cambiar. Ese robot funciona, muestra el retorno rápido y compra
          la confianza que después vas a necesitar para los procesos difíciles.
          El camino contrario (empezar por el más complicado, que se rompa a los
          dos meses, y que la dirección concluya que "el RPA no sirve") lo vimos
          suficientes veces como para insistir con el orden.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Automatizar algo que todavía cambia todas las semanas</h2>
        <p className={styles.p}>
          Este lo repetimos hasta el cansancio con los clientes y aun así
          reaparece. Cuando el proceso cambia de forma cada dos o tres semanas
          porque el negocio todavía está ajustando cómo lo hace, el robot se
          convierte en algo que hay que reconfigurar sin parar. El mantenimiento
          se termina comiendo el ahorro.
        </p>
        <p className={styles.p}>
          Hay una prueba rápida para saber si un proceso está listo: intenta
          escribir sus pasos exactos en una sola página. Si en cada línea aparece
          un "depende", el proceso todavía se está cocinando. Primero se
          documenta, se lo deja correr así un par de meses, y recién cuando deja
          de moverse se automatiza. Cuándo frenar es parte del trabajo, y lo
          tratamos aparte en{" "}
          <IntLink href="/blog/rpa-para-pymes-conviene-o-es-solo-para-grandes">
            cuándo conviene y cuándo no automatizar en una pyme
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El robot que se construye sin documentar las excepciones</h2>
        <p className={styles.p}>
          Hay una idea instalada de que el desarrollador va a "entender el
          proceso mirándolo". A veces alcanza con eso. El problema son las
          excepciones, y todo proceso las tiene: qué hace la persona cuando el
          sistema tira un error, cuándo un registro se saltea, qué campo a veces
          viene vacío y por qué. Esas cosas viven en la cabeza de quien hace la
          tarea a mano, no en la pantalla que el desarrollador observa.
        </p>
        <p className={styles.p}>
          Un robot construido sin esa información cubre bien los casos normales y
          se traba justo en los raros, que son los que nadie mencionó en la
          reunión. Documentar acá no significa escribir un manual de cincuenta
          páginas. Significa anotar los pasos y, sobre todo, las tres o cuatro
          rarezas que pasan de vez en cuando. Ahí está escondida buena parte del
          valor del robot.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué pasa el día que el robot falla</h2>
        <p className={styles.p}>
          Un robot va a fallar en algún momento. El sistema de destino se cae,
          cambia una pantalla, se corta la conexión a mitad de ejecución. Dar por
          hecho que eso no va a ocurrir es el error más caro que vemos, y también
          el más invisible, porque no se nota hasta que ya pasó.
        </p>
        <p className={styles.p}>
          En los robots que armamos con{" "}
          <IntLink href="/rocketbot">Rocketbot</IntLink>, cada paso crítico va
          envuelto en control de errores. Cuando algo se rompe, el robot registra
          en un log qué estaba haciendo, saca una captura de pantalla del momento
          exacto y avisa a un responsable, en lugar de quedarse colgado en
          silencio. Un robot sin esto y uno con esto se ven idénticos en la demo,
          porque el día que todo sale bien hacen exactamente lo mismo. Se
          diferencian el día que algo se rompe: en un caso alguien recibe el aviso
          y en dos minutos sabe qué pasó mirando la captura; en el otro, el robot
          puede estar frenado desde el jueves y nadie enterarse hasta que el área
          contable pregunta por qué no entraron las facturas. Y a esa altura ya
          no hay forma de agregarle el control de errores hacia atrás. Esa capa de
          monitoreo la resolvemos con{" "}
          <IntLink href="/monitor">Robotipy Monitor</IntLink>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Nadie a cargo después de la entrega</h2>
        <p className={styles.p}>
          Un robot no es un electrodoméstico que se instala y se olvida. Necesita
          que alguien revise cada tanto que corrió, lea el reporte de ejecución y
          avise si algo se ve raro. Cuando ese rol no está asignado, el robot
          corre solo hasta que un cambio en el sistema lo rompe, y como nadie lo
          miraba, puede pasar semanas roto sin que se note.
        </p>
        <p className={styles.p}>
          Para esto no hace falta contratar a un desarrollador. Alcanza con una
          persona de operaciones que sepa leer un reporte y a quién avisar. Lo que
          sí importa es que ese rol exista antes de la entrega y no se improvise
          el día del primer error.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Credenciales y rutas escritas dentro del robot</h2>
        <p className={styles.p}>
          Un error más técnico pero muy frecuente en robots hechos con apuro:
          dejar contraseñas, usuarios y rutas de carpetas escritas directamente en
          el código del robot. El día que el sistema obliga a cambiar la
          contraseña, o que se mueve una carpeta de lugar, hay que abrir el robot
          para arreglarlo. Y si esa contraseña quedó en un archivo que cualquiera
          puede abrir, el problema ya no es solo de mantenimiento.
        </p>
        <p className={styles.p}>
          Todo eso va en un archivo de configuración aparte, fuera del robot,
          donde se cambia sin tocar una línea de código. Es una convención básica
          del oficio y aun así se saltea seguido cuando se cotiza barato y rápido.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Sin medición previa, el ROI es una opinión</h2>
        <p className={styles.p}>
          Si arrancas el proyecto sin registrar cuánto tardaba el proceso a mano y
          con qué frecuencia se hacía, después no vas a poder demostrar que el
          robot valió la pena. "Ahora es más rápido" no le mueve la aguja a nadie
          que tenga que firmar el presupuesto del año que viene.
        </p>
        <p className={styles.p}>
          La medición se hace antes de tocar nada: horas por semana, errores por
          mes, cuánto se reprocesaba. Con esos números el retorno se calcula solo,
          y el proyecto siguiente se justifica en una reunión de diez minutos. Sin
          ellos, cada nueva automatización arranca de cero peleando por su
          presupuesto. Lo desarrollamos en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso y cómo calcular el retorno
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          Por qué a un mal partner le conviene que caigas en estos errores
        </h2>
        <p className={styles.p}>
          Vale decirlo aunque incomode. Varios de estos errores le convienen
          económicamente a quien te vende el proyecto. Un diagnóstico apurado que
          no documenta las excepciones sale más barato de hacer y deriva en horas
          de mantenimiento que se facturan después. Un contrato que no dice qué
          pasa cuando el proceso cambia deja esa conversación para cuando ya
          perdiste el margen para negarte a un precio inflado.
        </p>
        <p className={styles.p}>
          Que un partner insista en documentar bien y en dejar el control de
          errores armado desde el arranque, aunque eso encarezca la primera
          cotización, dice más de sus intenciones que cualquier caso de éxito de
          la landing page. Está apostando a que el robot dure. Un proveedor al que
          le conviene volver a cobrarte en tres meses no te va a pedir ese trabajo
          extra al principio.
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
          años antes de fundar la consultora, y hoy ayuda a empresas en Chile y
          Argentina a implementar automatizaciones que duren, no que haya que
          rehacer cada trimestre.
        </p>
      </section>
    </>
  ),
};
