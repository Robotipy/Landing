import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/seguridad-y-gobierno-en-proyectos-de-rpa/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Un robot RPA es más riesgoso que una persona haciendo la misma tarea?",
    a: "Puede serlo en cuanto a permisos, porque concentra en un solo usuario tareas que antes estaban repartidas. A cambio, deja registro de cada ejecución con hora y volumen, algo que un proceso manual en planilla no ofrece.",
  },
  {
    q: "¿Se pueden guardar las credenciales en el archivo de configuración del robot?",
    a: "No. El configuracion.ini es para parámetros operativos que cambian sin tocar la lógica. Las claves van en el gestor de credenciales del orquestador o en el vault del cliente, y el robot las obtiene al ejecutarse.",
  },
  {
    q: "Estamos preparando la certificación ISO 27001, ¿qué nos van a revisar de los robots?",
    a: "Lo mismo que a cualquier otro usuario de tus sistemas. El auditor trata a los robots como un tema de control de acceso, y el error de enfoque más común es prepararlos como una categoría aparte. Por cada robot revisará cinco puntos: la cuenta con que opera y quién la administra, cómo se otorgan y revisan sus permisos, dónde y cómo se almacenan las credenciales, qué registro queda de cada ejecución y de cada cambio, y cómo se da de baja todo al retirar el proceso. Si esos cinco puntos están documentados para cada robot, tienes cubierto lo principal. Una política escrita no reemplaza esa documentación, porque el auditor revisa las cuentas reales y el hallazgo suele ser una cuenta con perfil de administrador que sigue activa.",
  },
  {
    q: "¿Quién debería ser dueño del gobierno de los robots, TI o el área usuaria?",
    a: "Los permisos y las credenciales son responsabilidad de TI, sin discusión. Las reglas de negocio y la decisión sobre qué controles se mantienen dentro del flujo corresponden al área usuaria, que es la que responde por el proceso. Los proyectos se estancan cuando nadie define esa frontera hasta que aparece el primer conflicto.",
  },
];

const ui = {
  faqItem: "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",
};

const slug = "seguridad-y-gobierno-en-proyectos-de-rpa";

export const post = {
  slug,
  locale: "es",
  title: "Seguridad y gobierno en proyectos de RPA",
  description:
    "Seguridad en RPA: cómo manejar las credenciales, los permisos y la segregación de funciones de un robot, y qué controles cerrar antes de producción.",
  keywords: [
    "seguridad en RPA",
    "gobierno de RPA",
    "credenciales de robots RPA",
    "segregación de funciones RPA",
    "auditoría de robots RPA",
    "riesgos de la automatización RPA",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-31",
  image: {
    src: thumbnail,
    urlRelative: "/blog/seguridad-y-gobierno-en-proyectos-de-rpa/header.jpeg",
    alt: "Seguridad y gobierno en proyectos de RPA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tus robots pasarían una revisión de seguridad hoy?",
    texto:
      "Revisamos con qué cuenta entra cada robot, qué permisos tiene y dónde están sus credenciales, antes de que lo pregunte el auditor.",
    botonLabel: "Revisar mis robots",
    botonUrl: "/contact-us",
    linkLabel: "Cómo monitorear robots en producción",
    linkUrl: "/blog/como-monitorear-robots-rpa-en-produccion",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Cuando el área de seguridad se entera de que hay una automatización en
          producción, lo primero que pregunta es quién conoce la contraseña del
          robot. Pocas veces hay una respuesta clara. La conoce el consultor que
          lo implementó y también el analista que pidió el proceso. En el peor
          caso está escrita en texto plano dentro del propio archivo del robot,
          en una carpeta compartida que hereda los permisos de la carpeta
          superior.
        </p>
        <p className={styles.p}>
          Las conversaciones sobre seguridad en RPA suelen empezar por otro
          lado, con dudas sobre si el robot puede equivocarse o borrar algo en
          el ERP. El riesgo mayor es menos llamativo. Un robot es un usuario más
          de tus sistemas, con credenciales, permisos y horario, y casi nunca
          entra en las políticas de acceso que se aplican a las personas.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Una cuenta de servicio propia para cada robot</h2>
        <p className={styles.p}>
          Muchos robots entran a los sistemas con la cuenta de alguien del
          equipo. Es lo más rápido. No hay que pedirle nada a TI y funciona
          desde el primer día, hasta que esa persona renuncia. Su cuenta se da
          de baja y el robot deja de funcionar sin que nadie relacione una cosa
          con la otra. Mientras tanto, todo lo que el robot hizo durante meses
          aparece en la auditoría a nombre de esa persona, incluso los días en
          que estaba de vacaciones.
        </p>
        <p className={styles.p}>
          Una cuenta de servicio propia para cada robot resuelve ambos problemas
          y cuesta una reunión con TI. El paso siguiente, que pocas veces se da,
          es limitar esa cuenta a los permisos del proceso que automatiza. Un
          robot que carga facturas no necesita aprobarlas, y uno que consulta
          stock no tiene por qué modificarlo.
        </p>
        <p className={styles.p}>
          La mayoría de las cuentas de robot que hemos revisado tenían perfil de
          administrador. Venían así porque era más rápido que definir el perfil
          exacto y porque se asumía que &quot;es un robot, no va a hacer otra
          cosa&quot;. El robot hará lo que se le programó, pero con esas
          credenciales se puede entrar a los sistemas aunque el robot esté
          apagado. Además quedan anotadas en archivos y correos, y las conocen
          personas que después se van de la empresa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Segregación de funciones al automatizar</h2>
        <p className={styles.p}>
          En un proceso manual, la segregación de funciones se da por defecto:
          quien carga el pedido no lo aprueba y quien concilia no registra. Si
          la automatización va de punta a punta, las tareas que hacían tres
          personas distintas quedan en un solo usuario técnico. Ese usuario
          acumula una combinación de permisos que la política interna nunca le
          habría dado a un empleado. Nadie decidió eliminar ese control. Se
          perdió como efecto secundario de automatizar, y el problema sale a la
          luz en la primera auditoría interna seria o cuando la empresa inicia
          su certificación.
        </p>
        <p className={styles.p}>
          La solución es diseñar el control dentro del flujo desde el principio.
          En el robot de creación masiva de materiales que describimos en{" "}
          <IntLink href="/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros">
            cómo integrar RPA con tu ERP
          </IntLink>
          , el proceso se detiene solo y espera a que un analista revise la
          planilla antes de cargarla en SAP. El robot arma bien la planilla y
          aun así la pausa se mantiene, porque conserva el control que existía
          antes de automatizar: el robot prepara la carga y una persona la
          libera. Si alguien pide quitarla para ganar quince minutos por
          ejecución, está pidiendo que la preparación y la liberación vuelvan a
          quedar en un solo usuario.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Dónde guardar credenciales y parámetros</h2>
        <p className={styles.p}>
          Dónde se guardan las credenciales se decide en la primera semana de
          desarrollo, y después cuesta cambiarlo. Nosotros no escribimos ningún
          dato sensible dentro del flujo del robot. Los parámetros que pueden
          cambiar sin tocar la lógica (rutas, casillas de destino, umbrales,
          fechas de corte) se guardan en un archivo <code>configuracion.ini</code>{" "}
          en la carpeta de recursos del proyecto, separado del código. Las
          contraseñas tampoco van en ese archivo. Se resuelven con el gestor de
          credenciales del orquestador o con el vault que ya tenga el cliente, y
          el robot las solicita en tiempo de ejecución.
        </p>
        <p className={styles.p}>Con esa separación:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            TI puede rotar la contraseña del robot según su política de 90 días
            sin llamar a nadie ni abrir el proyecto.
          </li>
          <li className={styles.li}>
            El consultor externo que desarrolla el robot nunca necesita conocer
            la clave productiva.
          </li>
          <li className={styles.li}>
            El paso de desarrollo a producción se hace cambiando el vault, sin
            modificar el robot.
          </li>
          <li className={styles.li}>
            Si mañana cambias de proveedor de automatización, no le entregas un
            archivo con las claves de tu ERP.
          </li>
          <li className={styles.li}>
            Si alguien copia la carpeta del robot a una memoria USB, lo que se
            lleva no sirve para entrar a ningún sistema.
          </li>
        </ul>
        <p className={styles.p}>
          Este último punto es el que más convence, porque la carpeta de un
          robot se copia más de lo que se supone. Se respalda o se prueba en
          otro equipo, y a veces se le envía a un colega que ayuda a resolver un
          error.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué registros revisa una auditoría</h2>
        <p className={styles.p}>
          En trazabilidad, un robot bien construido deja mejor registro que una
          persona, y eso es un argumento a tu favor en una auditoría. Cada
          ejecución queda registrada con hora de inicio, hora de fin, resultado
          y volumen procesado. En nuestros proyectos ese registro se guarda
          además en una base de datos local del propio robot, de modo que la
          trazabilidad no depende de que alguien haya revisado la consola ese
          día. Ese mismo registro es la base para{" "}
          <IntLink href="/blog/como-monitorear-robots-rpa-en-produccion">
            monitorear los robots en producción
          </IntLink>{" "}
          en la operación diaria.
        </p>
        <p className={styles.p}>
          Los vacíos aparecen en otros dos registros: quién pidió ejecutar el
          robot fuera de su horario programado y quién autorizó el último cambio
          en su lógica. Sin el primero, las ejecuciones fuera de horario quedan
          como una vía lateral para hacer cosas irregulares sin que nadie
          responda por ellas. El segundo marca la diferencia entre una
          automatización gobernada y un script que alguien edita un viernes a
          las siete de la tarde sin dejar rastro.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Qué debe cubrir el gobierno de RPA</h2>
        <p className={styles.p}>
          Buena parte de lo que se vende como &quot;gobierno de RPA&quot; es un
          aparato de comités, formularios y matrices de aprobación que alarga
          los proyectos de tres semanas a tres meses sin reducir el riesgo. El
          robot sigue entrando con una cuenta personal y la clave sigue en un
          Excel, pero ahora hay un acta que dice que se evaluó.
        </p>
        <p className={styles.p}>
          El gobierno que sirve es más pequeño y más incómodo. Cabe en una hoja
          que se completa a mano para cada robot y responde estas preguntas:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Con qué cuenta entra a los sistemas.</li>
          <li className={styles.li}>Qué permisos tiene esa cuenta.</li>
          <li className={styles.li}>Dónde está la contraseña.</li>
          <li className={styles.li}>Quién puede cambiar la lógica.</li>
          <li className={styles.li}>Quién se entera cuando falla.</li>
          <li className={styles.li}>
            Qué pasa con todo lo anterior el día que el proceso se discontinúa.
          </li>
        </ul>
        <p className={styles.p}>
          La última suele quedar sin respuesta. Cuando eso pasa, la cuenta de
          servicio de un robot dado de baja sigue activa, con sus permisos
          vigentes y sin nadie que la supervise. Eso es una credencial huérfana.
        </p>
        <p className={styles.p}>
          No todos los procesos requieren el mismo nivel de control. A un robot
          que arma un reporte de solo lectura y lo envía por correo le bastan
          una cuenta propia y un log. Los controles completos, con vault, matriz
          de segregación y acta de cambios, se justifican cuando el robot
          escribe en sistemas transaccionales o maneja dinero o datos
          personales. Esos controles se definen antes del desarrollo, porque
          cambiarlos con el robot ya en producción obliga a volver a probar
          todo.
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

      <section className="space-y-6">
        <hr className="border-white/10" />
        <p className={styles.p}>
          Si estás evaluando automatizar un proceso que toca sistemas
          transaccionales, resuelve estas definiciones en la etapa de
          levantamiento, cuando{" "}
          <IntLink href="/blog/como-documentar-un-proceso-antes-de-automatizarlo">
            documentes el proceso antes de automatizarlo
          </IntLink>
          . Sobre los tropiezos más frecuentes en este tipo de proyectos
          escribimos en{" "}
          <IntLink href="/blog/errores-comunes-al-implementar-rpa">
            errores comunes al implementar RPA
          </IntLink>
          .
        </p>
      </section>
    </>
  ),
};
