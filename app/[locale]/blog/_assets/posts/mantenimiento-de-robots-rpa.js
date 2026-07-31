import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/mantenimiento-de-robots-rpa/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Cada cuánto hay que mantener un robot RPA?",
    a: "Depende de por dónde entra el robot, no del tiempo transcurrido. Uno que trabaja contra una API de un sistema estable puede pasar un año sin intervención. Uno que navega portales externos necesita ajustes cada vez que esos portales cambian, y esa frecuencia no la controlas tú.",
  },
  {
    q: "¿El mantenimiento lo puede hacer mi equipo interno?",
    a: "En varios de nuestros clientes es exactamente lo que pasa. Necesitas dos cosas: alguien con la plataforma instalada y capacitada para abrir el proyecto, y el robot entregado con su documentación y sus puntos frágiles identificados. Si la automatización se contrató como proyecto cerrado y el desarrollador ya no está disponible, esa transferencia hay que pedirla explícitamente en la entrega, porque no siempre viene incluida.",
  },
  {
    q: "Mi robot falla una vez por semana. ¿Es normal?",
    a: "No. Un robot bien construido en un entorno estable falla de manera excepcional. Una falla semanal casi siempre apunta a una de dos cosas: el proceso automatizado tiene más variantes de las que se relevaron y el robot está chocando con casos que nunca se modelaron, o hay algo del entorno de ejecución que nadie revisó y que no aparece en los logs del robot. En los dos escenarios el arreglo es estructural, así que lo primero es juntar el registro de las últimas corridas fallidas y buscar el patrón antes de tocar el código. Si nadie tiene ese registro, el diagnóstico empieza por armarlo, y ahí ya perdiste la primera semana.",
  },
  {
    q: "¿Conviene reescribir un robot viejo o seguir manteniéndolo?",
    a: "Si el sistema destino ya expone una API que no existía cuando se construyó, rehacerlo.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "mantenimiento-de-robots-rpa";

export const post = {
  slug,
  locale: "es",
  title: "Mantenimiento de robots RPA: por qué fallan y cómo hacer que fallen menos",
  description:
    "Por qué un robot RPA que funcionaba deja de funcionar, qué lo vuelve frágil, qué entra en mantenimiento correctivo y cuánto cuesta sostener una automatización en producción.",
  keywords: [
    "mantenimiento de robots RPA",
    "por qué falla un robot RPA",
    "mantenimiento correctivo RPA",
    "costo de mantenimiento RPA",
    "robots RPA frágiles",
    "soporte de automatización",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-07-30",
  image: {
    src: thumbnail,
    urlRelative: "/blog/mantenimiento-de-robots-rpa/header.jpeg",
    alt: "Mantenimiento de robots RPA: por qué fallan y cómo hacer que fallen menos",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes un robot que empezó a fallar y no sabes por qué?",
    texto:
      "Revisamos el registro de corridas, identificamos el patrón y te decimos si es correctivo, evolutivo o algo del entorno.",
    botonLabel: "Evaluar mi robot",
    botonUrl: "/contact-us",
    linkLabel: "Cómo monitorear robots en producción",
    linkUrl: "/blog/como-monitorear-robots-rpa-en-produccion",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Si alguna vez te tocó escuchar la frase "el robot dejó de funcionar y
          nosotros no cambiamos nada", ya viste el mecanismo completo del
          mantenimiento en RPA: el entorno se movió debajo del robot mientras el
          robot seguía haciendo exactamente lo mismo que el día que se entregó,
          con la misma precisión de siempre.
        </p>
        <p className={styles.p}>
          Eso vuelve al mantenimiento un tema raro de conversar en la etapa
          comercial. Un robot puede correr dos años sin que nadie le toque una
          línea, porque el código no se desgasta con el uso. Los portales, las
          políticas de contraseñas, los servidores y las reglas del negocio sí se
          mueven, y como ese movimiento vive fuera del alcance del proyecto, casi
          nunca aparece en el business case que se le presentó a la dirección.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Lo que se mueve debajo del robot</h2>
        <p className={styles.p}>
          En los proyectos que sostenemos, las causas de falla se repiten
          bastante y casi ninguna vive dentro del código:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            La pantalla cambió de lugar. Un portal bancario rediseña el login, el
            ERP se actualiza y un campo pasa a otra pestaña, aparece un banner de
            cookies que antes no estaba. Si el robot navega por interfaz,
            cualquiera de esas cosas lo detiene.
          </li>
          <li className={styles.li}>
            Las credenciales expiran. Política de rotación de contraseñas cada 90
            días, un segundo factor que se activó para todos los usuarios, una
            cuenta de servicio que TI dio de baja en una limpieza de usuarios
            inactivos. Este es el más frecuente de todos y el más barato de
            resolver, siempre que alguien sepa que pasó.
          </li>
          <li className={styles.li}>
            El servidor donde vive el robot se movió. Una ruta de red que dejó de
            mapearse, permisos que cambiaron con una política de seguridad
            nueva, una máquina virtual que migró a otro host y quedó sin la
            sesión gráfica que el robot necesitaba.
          </li>
          <li className={styles.li}>
            Llegó un dato que el proceso nunca había visto. Un proveedor nuevo
            que factura en otro formato, un archivo con una columna extra, un
            código con más caracteres de los esperados.
          </li>
          <li className={styles.li}>
            Alguien del otro lado cambió una regla de negocio y no lo comunicó,
            porque desde su silla no era un cambio de sistema.
          </li>
        </ul>
        <p className={styles.p}>
          El primer grupo se detecta rápido: el robot se cae y alguien se
          entera. Los dos últimos son los caros, porque el robot suele terminar
          en verde procesando mal. Ese es exactamente el fallo silencioso del
          que escribimos en{" "}
          <IntLink href="/blog/como-monitorear-robots-rpa-en-produccion">
            cómo monitorear robots RPA en producción
          </IntLink>
          , y es la razón por la que el mantenimiento y el monitoreo se discuten
          juntos: no puedes mantener lo que no sabes que se rompió.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuando el cliente cambia sus propias reglas</h2>
        <p className={styles.p}>
          La causa que más trabajo genera vive fuera de la tecnología. En el
          proyecto de creación masiva de materiales en SAP del que ya escribimos
          en{" "}
          <IntLink href="/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros">
            cómo integrar RPA con tu ERP
          </IntLink>
          , el robot aplica las reglas de jerarquía y nomenclatura de repuestos
          que el cliente tenía definidas. Hace poco nos llegó un documento
          interno de estructura, más nuevo que el que usamos para construir la
          lógica, con criterios distintos para armar esos códigos.
        </p>
        <p className={styles.p}>
          El robot cumple al pie de la letra lo que se validó en discovery. El
          estándar de la empresa evolucionó, como es su derecho, y en ese
          proyecto la diferencia entre un documento y otro son unos siete días de
          desarrollo adicionales sobre un plazo de veinticinco. Eso se resuelve
          con una adenda, no discutiéndolo como si fuera una falla, y por eso la
          vía para pedir y cotizar cambios de reglas conviene dejarla escrita
          antes de que el robot entre en producción.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué vuelve frágil a un robot</h2>
        <p className={styles.p}>
          Dos robots que hacen lo mismo pueden tener costos de mantenimiento muy
          distintos según cómo se construyeron. La diferencia más grande está en
          por dónde entra el robot al sistema. Cuando existe una API, un web
          service o una carga por archivo, ese camino aguanta años sin tocarse.
          La automatización por pantalla sufre cada rediseño, y a veces no hay
          alternativa, porque los sistemas legacy y los emuladores de terminal
          son así. Elegir ese camino significa asumir un costo recurrente además
          del de desarrollo, y conviene decirlo en la cotización.
        </p>
        <p className={styles.p}>
          Después vienen decisiones más aburridas que pesan igual. En nuestros
          desarrollos todo lo que puede cambiar sin cambiar la lógica vive fuera
          del robot: rutas, correos de destino, umbrales y parámetros van en un
          archivo <code>configuracion.ini</code>, y las credenciales nunca se
          escriben dentro del flujo. Cuando el cliente cambia una carpeta de red
          o el destinatario de un reporte, eso se edita en un archivo de texto
          en dos minutos, sin abrir el proyecto ni volver a probar el robot
          completo.
        </p>
        <p className={styles.p}>
          La otra decisión que ahorra horas después es la idempotencia. Cada
          robot lleva su propio registro local en SQLite de qué ítems ya
          procesó, así que si se cae a mitad de un lote y lo vuelves a lanzar,
          retoma sin duplicar. Suena a detalle de implementación y es la
          diferencia entre un incidente que se resuelve relanzando y uno que
          obliga a alguien de contabilidad a revisar qué asientos quedaron
          cargados dos veces.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Correctivo, evolutivo y lo que en realidad es garantía</h2>
        <p className={styles.p}>
          Cuando un robot falla en las primeras semanas por un caso de negocio
          que ya existía antes de construirlo, un formato de proveedor que
          estaba en los datos históricos, una excepción que el analista
          mencionó en una reunión, la causa es un análisis incompleto de
          nuestro lado y se corrige sin cobrar. Buena parte de lo que se
          factura como soporte en esta industria es deuda de discovery del
          proveedor, y al cliente le llega indistinguible del resto, porque en
          su bandeja todo entra como "el robot tenía un error".
        </p>
        <p className={styles.p}>
          El correctivo empieza donde el entorno cambió después de la entrega:
          el portal se rediseñó, la contraseña expiró, el servidor se movió. El
          evolutivo cubre reglas nuevas o alcance nuevo, y se cotiza como
          desarrollo. Tener esos tres casos separados y escritos antes de la
          puesta en producción evita la discusión más incómoda de todo el
          proyecto, que es negociar quién paga justo en el momento en que el
          robot está detenido y el proceso corriendo a mano.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Cuánto cuesta sostener un robot</h2>
        <p className={styles.p}>
          En nuestro modelo el soporte mensual arranca en USD 300 y sube según
          cuántos robots haya que vigilar y qué tan crítico sea el proceso. No es
          obligatorio. El desglose completo del costo de un proyecto está en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Hay clientes que después de la entrega operan sus robots solos y les
          funciona bien: tienen a alguien de TI con tiempo asignado, el robot
          está documentado y las fallas frecuentes son de las baratas. Otros lo
          contratan desde el día uno porque no quieren que nadie interno tenga
          que aprender a mantenerlo. Las dos decisiones son razonables.
        </p>
        <p className={styles.p}>
          La que sale cara es la tercera, que también es la más común. Nadie se
          hace cargo formalmente, el robot funciona seis meses, y cuando se
          rompe hay que reconstruir todo el contexto desde cero para arreglar
          algo que con el proyecto fresco habría tomado una hora.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El inventario de puntos frágiles</h2>
        <p className={styles.p}>
          Hay un documento que casi nunca se pide y que baja el costo de
          mantenimiento más que cualquier decisión técnica: la lista de por
          dónde este robot se va a romper. Qué pasos dependen de una pantalla
          ajena, qué credenciales usa y cada cuánto rotan, qué hace si el
          archivo de entrada llega vacío, en qué servidor corre y quién
          administra ese servidor.
        </p>
        <p className={styles.p}>
          Cuando esa lista existe, una falla se diagnostica leyendo cuatro
          líneas. Cuando no existe, el diagnóstico arranca por reconstruir cómo
          funcionaba el robot, que es la parte lenta y la que se factura por
          hora. Sale de la misma disciplina que{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            documentar el proceso antes de automatizarlo
          </IntLink>
          , y se escribe en la última semana del proyecto o no se escribe
          nunca.
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
        <h2 className={styles.h2}>Por dónde seguir</h2>
        <p className={styles.p}>
          Buena parte de lo que después se paga en mantenimiento se decide en
          las primeras semanas del proyecto, y esas decisiones están en{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
          </IntLink>
          . Si vas a poner tu primer robot en producción este trimestre, el
          orden que recomendamos es dejar la lista de puntos frágiles escrita,
          acordar por contrato qué entra en correctivo y qué se cotiza aparte, y
          recién ahí discutir si contratas soporte o lo operas con tu equipo.
        </p>
      </section>
    </>
  ),
};
