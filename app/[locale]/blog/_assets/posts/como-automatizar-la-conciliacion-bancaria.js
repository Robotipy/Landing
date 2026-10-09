import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-automatizar-la-conciliacion-bancaria/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Se puede automatizar la conciliación bancaria si el banco no ofrece API?",
    a: "Sí. Un robot de RPA puede ingresar al portal de banca empresas con un usuario propio, descargar la cartola o el extracto de cada cuenta y cruzarlo con el ERP, igual que lo haría una persona. Es el canal que funciona con cualquier banco de Chile o de Argentina. Su punto débil es el mantenimiento: cuando el banco cambia el portal, hay que ajustar el robot. Por eso conviene pasar a archivo, host-to-host o API cuando el banco lo permite.",
  },
  {
    q: "¿Un robot de conciliación bancaria puede trabajar con bancos que exigen token o clave dinámica?",
    a: "Sí, siempre que el acceso se acuerde con el banco y con el área de TI. Lo correcto es un usuario dedicado al robot con permisos de solo consulta. Si el banco exige el segundo factor en cada ingreso, se usa un canal sin inicio de sesión interactivo (archivo, host-to-host, API o Interbanking) o un esquema semiatendido, donde una persona designada ingresa el código. Nunca se usa el token de un apoderado ni se desactiva el segundo factor.",
  },
  {
    q: "¿Interbanking sirve para automatizar la conciliación bancaria en Argentina?",
    a: "Sí. Según su sitio oficial, a octubre de 2026 Interbanking conecta a empresas con 58 bancos argentinos, y sus planes incluyen consulta de extractos, movimientos y saldos consolidados, con acceso a APIs en los planes superiores. Eso permite obtener los movimientos de varios bancos por un solo canal. Finnegans, además, documenta una integración que trae a diario los movimientos desde Interbanking a su módulo de conciliación bancaria.",
  },
  {
    q: "¿Un robot de conciliación bancaria contabiliza en el ERP sin revisión humana?",
    a: "No, solo registra lo que calza con reglas acordadas de antemano. El robot marca como conciliados los movimientos con un calce único por monto, referencia, fecha o RUT y CUIT, y contabiliza partidas repetitivas, como comisiones e impuestos bancarios, según reglas aprobadas por contabilidad. Todo lo ambiguo o sin contraparte queda como excepción para una persona, con el motivo y un registro de cada acción del robot.",
  },
  {
    q: "¿Cuánto cuesta automatizar la conciliación bancaria con Robotipy?",
    a: "El desarrollo de un proyecto RPA en Robotipy cuesta en promedio USD 6.000 (2026) e incluye un mes de trabajo y la marcha blanca. La licencia de Rocketbot, de USD 2.500, solo se cobra si la empresa no tiene una propia, y el soporte mensual es opcional desde USD 300. En una conciliación, el precio cambia según la cantidad de bancos, el canal de cada uno y la complejidad de las reglas de calce. El diagnóstico inicial no se cobra.",
  },
  {
    q: "¿El Sistema de Finanzas Abiertas de Chile reemplaza a un robot de conciliación bancaria?",
    a: "No, por ahora. La CMF publicó el 1 de junio de 2026 una modificación a la NCG 514 que posterga hasta julio de 2027 la entrada en vigor del Sistema de Finanzas Abiertas creado por la Ley Fintec, con una puesta en marcha gradual. Mientras tanto, los movimientos se obtienen por portal, archivo, host-to-host o API de cada banco. Cuando el sistema opere, podrá ser un canal más para alimentar la misma conciliación.",
  },
];

const etapas = [
  {
    etapa: "1. Obtener movimientos",
    hace: "Descarga la cartola o el extracto de cada cuenta, o lo recibe por archivo o API.",
    falla: "Cambio en el portal, segundo factor, archivo vacío.",
    control:
      "Alerta si una cuenta activa trae cero movimientos. El saldo inicial debe igualar el saldo final del día anterior.",
  },
  {
    etapa: "2. Normalizar formatos",
    hace: "Lleva Excel, TXT, CSV o PDF a una estructura única: fecha, monto, cargo o abono, glosa, referencia y moneda.",
    falla: "El banco cambia columnas, separador decimal o formato de fecha.",
    control:
      "Validación de estructura. La suma de movimientos debe explicar la variación del saldo.",
  },
  {
    etapa: "3. Leer el ERP",
    hace: "Trae las partidas abiertas de bancos: pagos emitidos, cobros y depósitos.",
    falla: "Usuario sin permisos o período contable cerrado.",
    control: "Usuario dedicado con rol acotado y conteo de registros leídos.",
  },
  {
    etapa: "4. Calzar",
    hace: "Aplica reglas por monto, fecha, referencia y RUT o CUIT.",
    falla: "Calces falsos entre montos repetidos.",
    control: "Reglas en orden de exigencia. Solo se aceptan calces únicos.",
  },
  {
    etapa: "5. Separar excepciones",
    hace: "Deja lo que no calza en una planilla o bandeja, con el motivo.",
    falla: "Excepciones sin dueño que se acumulan.",
    control: "Responsable y plazo para cada tipo de excepción.",
  },
  {
    etapa: "6. Registrar en el ERP",
    hace: "Marca lo conciliado y contabiliza comisiones e impuestos según reglas acordadas.",
    falla: "Registros duplicados si el robot se vuelve a ejecutar.",
    control: "Identificador único por movimiento y registro de cada acción.",
  },
  {
    etapa: "7. Reportar",
    hace: "Resume por banco y cuenta: calzados, excepciones, saldo según banco y según libros.",
    falla: "Nadie revisa el reporte.",
    control: "Envío diario a responsables y monitoreo del robot.",
  },
];

const canales = [
  {
    canal: "Portal web de banca empresas",
    ventajas: "Funciona con cualquier banco y no requiere un proyecto con el banco.",
    requisitos:
      "Usuario dedicado, resolver el segundo factor y mantener el robot cuando cambia el portal.",
    cuando: "Bancos sin otro canal, o mientras se habilita uno mejor.",
  },
  {
    canal: "Archivo que envía el banco",
    ventajas: "Formato estable y sin inicio de sesión interactivo.",
    requisitos:
      "Que el banco ofrezca el envío programado para tu cuenta, y un buzón o carpeta controlada.",
    cuando: "Cuentas con movimiento diario en bancos que ya lo ofrecen.",
  },
  {
    canal: "Host-to-host",
    ventajas:
      "Conexión directa y cifrada (por ejemplo, SFTP) con archivos diarios de movimientos y extractos.",
    requisitos: "Contrato con el banco, proyecto con TI, llaves y certificados.",
    cuando: "Empresas grandes con alto volumen en pocos bancos principales.",
  },
  {
    canal: "API del banco",
    ventajas: "Datos estructurados y consultas varias veces al día.",
    requisitos:
      "Que el banco la publique, credenciales o contrato, y desarrollo de la integración.",
    cuando: "Banco principal con API disponible y necesidad de conciliar en el día.",
  },
  {
    canal: "Plataforma multibanco (Argentina)",
    ventajas: "Un solo acceso para muchos bancos, con extractos y movimientos consolidados.",
    requisitos: "Suscripción a un plan y, para integrar, acceso a sus APIs.",
    cuando: "Empresas argentinas que operan con varios bancos.",
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
};

const slug = "como-automatizar-la-conciliacion-bancaria";

export const post = {
  slug,
  locale: "es",
  title: "Cómo automatizar la conciliación bancaria con bancos de Chile y Argentina",
  description:
    "Cómo funciona un robot de conciliación bancaria con bancos de Chile y Argentina: cartolas, cruce con SAP, Defontana o Finnegans, tokens y excepciones.",
  keywords: [
    "automatizar conciliación bancaria",
    "conciliación bancaria automática Chile",
    "conciliación bancaria Argentina Interbanking",
    "robot de conciliación bancaria",
    "automatizar cartolas bancarias",
    "RPA conciliación bancaria ERP",
  ],
  categories: [
    categories.find((category) => category.slug === categorySlugs.fintech),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-10-01",
  updatedAt: "2026-10-01",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-automatizar-la-conciliacion-bancaria/header.jpeg",
    alt: "Robot de conciliación bancaria que cruza cartolas de bancos de Chile y Argentina con el ERP",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tu conciliación depende de varios portales bancarios y de un token?",
    texto:
      "Cuéntanos cuántos bancos, cuentas y movimientos manejas, y te decimos qué canal conviene para cada banco y si el robot se paga.",
    botonLabel: "Evaluar mi conciliación",
    botonUrl: "/contact-us",
    linkLabel: "Cuánto cuesta automatizar un proceso",
    linkUrl: "/blog/cuanto-cuesta-automatizar-un-proceso",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Automatizar la conciliación bancaria consiste en que un robot descargue
          los movimientos de cada banco, los cruce con los registros del ERP y
          deje para revisión humana solo las partidas que no calzan. Se puede
          hacer con bancos de Chile y de Argentina aunque el banco no ofrezca
          API, porque el robot trabaja sobre el mismo portal que usa tu equipo.
          En un grupo agropecuario argentino, un solo robot conectado a 3 bancos
          y al ERP Finnegans dejó la conciliación multibanco en minutos en lugar
          de horas.
        </p>
        <p className={styles.p}>
          En Robotipy hemos automatizado procesos sobre portales y cartolas de
          bancos de Chile y de Argentina, y sobre ERP como SAP, Defontana y
          Finnegans, como parte de nuestro servicio de{" "}
          <IntLink href="/rpa">automatización con RPA</IntLink>. Esta guía
          resume cómo se arma un robot de conciliación, qué canal conviene para
          cada banco, cómo se maneja el token sin debilitar la seguridad y en qué
          casos te recomendamos no automatizar.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué es la conciliación bancaria y por qué se atrasa?
        </h2>
        <p className={styles.p}>
          La conciliación bancaria es el control que compara cada movimiento de
          la cartola (en Chile) o del extracto (en Argentina) con lo registrado
          en la contabilidad, y explica cada diferencia. Su resultado es un saldo
          según banco y un saldo según libros que cuadran, con las partidas
          pendientes identificadas.
        </p>
        <p className={styles.p}>
          Se atrasa por razones bastante predecibles. Cada banco tiene su
          portal, su formato de descarga y su forma de describir una
          transferencia. Con cinco o seis cuentas, solo juntar los archivos toma
          una mañana. Después vienen los movimientos difíciles: depósitos sin
          referencia, pagos de clientes que agrupan varias facturas, comisiones
          e impuestos que nadie registró. Y como el token suele estar en manos
          del tesorero, la descarga depende de que esa persona esté disponible.
        </p>
        <p className={styles.p}>
          El efecto se nota en el cierre. Si concilias una vez al mes, los
          errores aparecen semanas después de ocurridos, cuando cuesta más
          rastrearlos, y la posición de caja que usa la gerencia durante el mes
          es menos confiable de lo que parece.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué hace un robot de conciliación bancaria, paso a paso?
        </h2>
        <p className={styles.p}>
          Un robot de conciliación bancaria ejecuta siete etapas encadenadas:
          obtiene los movimientos, los normaliza, lee el ERP, aplica reglas de
          calce, separa excepciones, registra lo conciliado y reporta. Cada etapa
          tiene su propio punto de falla y su propio control.
        </p>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Etapa</th>
                <th className={ui.th}>Qué hace el robot</th>
                <th className={ui.th}>Qué puede fallar</th>
                <th className={ui.th}>Cómo se controla</th>
              </tr>
            </thead>
            <tbody>
              {etapas.map((e) => (
                <tr key={e.etapa}>
                  <td className={`${ui.td} font-semibold text-white`}>
                    {e.etapa}
                  </td>
                  <td className={ui.td}>{e.hace}</td>
                  <td className={ui.td}>{e.falla}</td>
                  <td className={ui.td}>{e.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.p}>
          La etapa que define la calidad del robot es la de calce. Las reglas
          van de la más exigente a la más laxa: primero monto exacto más
          referencia (número de documento, de cheque o de operación), después
          monto más RUT o CUIT del pagador cuando el banco lo informa, y al final
          monto más fecha dentro de una tolerancia acordada. Si un movimiento
          calza con dos partidas posibles, el robot no elige: lo deja como
          excepción. Un calce falso es peor que una excepción, porque nadie lo
          vuelve a mirar.
        </p>
        <p className={styles.p}>
          El calce por referencia funciona mucho mejor cuando los pagos salen
          del ERP con el número de documento en la glosa. Por eso conviene
          diseñar la conciliación junto con{" "}
          <IntLink href="/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas">
            la automatización de cuentas por pagar y carga de facturas
          </IntLink>
          . La escritura en SAP, Defontana o Finnegans sigue las reglas de
          cualquier integración, que detallamos en{" "}
          <IntLink href="/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros">
            cómo integrar RPA con tu ERP
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿De qué formas puede un robot obtener los movimientos de cada banco?
        </h2>
        <p className={styles.p}>
          Hay cinco canales: la descarga desde el portal web, el archivo que
          envía el banco, la conexión host-to-host, la API del banco y, en
          Argentina, una plataforma multibanco como Interbanking. La mayoría de
          los proyectos combina dos o más, según lo que ofrezca cada banco para
          tu tipo de cuenta.
        </p>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Canal</th>
                <th className={ui.th}>Ventajas</th>
                <th className={ui.th}>Requisitos</th>
                <th className={ui.th}>Cuándo conviene</th>
              </tr>
            </thead>
            <tbody>
              {canales.map((c) => (
                <tr key={c.canal}>
                  <td className={`${ui.td} font-semibold text-white`}>
                    {c.canal}
                  </td>
                  <td className={ui.td}>{c.ventajas}</td>
                  <td className={ui.td}>{c.requisitos}</td>
                  <td className={ui.td}>{c.cuando}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.p}>
          Dos ejemplos de canales oficiales. En Chile, Scotiabank publica en su
          portal para desarrolladores una API de saldos y movimientos de cuenta
          corriente, que el propio banco presenta como apoyo a la conciliación
          bancaria. En Argentina, Interbanking indica en su sitio, a octubre de
          2026, que conecta a empresas con 58 bancos del país, y sus planes
          incluyen consulta de extractos, movimientos y saldos consolidados, con
          acceso a APIs en los planes superiores.
        </p>
        <p className={styles.p}>
          El portal web sigue siendo el canal más usado porque no exige nada del
          banco. También es el más frágil: cuando el banco rediseña el ingreso,
          el robot se detiene. Conviene tratarlo como punto de partida y migrar a
          archivo o API cuando el banco lo permita.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Cómo se resuelven los tokens y claves dinámicas sin saltarse la
          seguridad?
        </h2>
        <p className={styles.p}>
          El segundo factor se resuelve con un acceso propio para el robot,
          acordado con el banco y con TI, y nunca usando el token de una
          persona. Si un proveedor te propone saltarse el token, es una mala
          señal.
        </p>
        <p className={styles.p}>
          En banca empresas, un administrador de la empresa crea los usuarios y
          les asigna productos y permisos. El primer paso es crear un usuario
          dedicado al robot con permisos de solo consulta: ve cartolas y
          movimientos, pero no paga, no transfiere y no firma. Si esas
          credenciales se filtraran, el daño posible queda acotado a lectura.
        </p>
        <p className={styles.p}>
          El segundo paso es preguntarle al banco si ese perfil exige el segundo
          factor en cada ingreso o solo al autorizar operaciones. Si lo exige en
          cada ingreso, hay tres caminos razonables: cambiar a un canal sin
          inicio de sesión interactivo (archivo, host-to-host, API o
          Interbanking), dejar el robot semiatendido para que una persona
          designada ingrese el código cuando el robot lo pide, o usar el
          mecanismo que el banco autorice formalmente para ese usuario.
        </p>
        <p className={styles.p}>
          Lo que no se hace: usar el usuario de un apoderado, copiar la semilla
          de un token, guardar claves en una planilla o pedir que desactiven el
          segundo factor. Las credenciales del robot van en un almacén cifrado y
          se rotan con la misma política que las de cualquier usuario.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Qué cambia entre Chile y Argentina?</h2>
        <p className={styles.p}>
          El robot es el mismo en ambos países; cambian el canal para obtener
          los movimientos, el identificador tributario y el tipo de partidas que
          hay que calzar.
        </p>
        <p className={styles.p}>
          En Chile se concilia sobre la cartola y el identificador es el RUT. La
          consolidación se resuelve banco por banco, con portal, archivo o API
          según lo que ofrezca cada uno. Algunos ERP locales ya importan
          cartolas: según su centro de ayuda, Defontana acepta el archivo TXT
          descargado de Santander, Banco de Chile y BancoEstado, y un formato
          genérico para el resto. Sobre finanzas abiertas, la CMF publicó el 1 de
          junio de 2026 una modificación a la NCG 514 que posterga hasta julio de
          2027 la entrada en vigor del Sistema de Finanzas Abiertas. Para una
          conciliación que necesitas hoy, todavía no es un canal disponible.
        </p>
        <p className={styles.p}>
          En Argentina se concilia sobre el extracto y el identificador es el
          CUIT. Interbanking concentra en un solo acceso las cuentas de muchos
          bancos, y Finnegans documenta una integración que trae a diario
          movimientos y saldos desde Interbanking a su módulo de conciliación
          bancaria. Otro rasgo propio es el volumen de débitos chicos: los bancos
          actúan como agentes de percepción del impuesto sobre los créditos y
          débitos (Ley 25.413), y esas líneas, junto con comisiones y otras
          percepciones, conviene agruparlas con reglas, por ejemplo en un asiento
          por día y por cuenta.
        </p>
        <p className={styles.p}>
          En ambos países, las cuentas en dólares suman una regla: el calce se
          hace en la moneda de la cuenta y la diferencia de cambio se registra
          aparte.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Qué resultados ha tenido Robotipy al automatizar cartolas y
          conciliaciones?
        </h2>
        <p className={styles.p}>
          Dos casos publicados, ambos construidos en Rocketbot, muestran el
          patrón en cada país.
        </p>
        <p className={styles.p}>
          En Argentina, un grupo agropecuario con operaciones en varias
          provincias conciliaba a mano, contra el ERP Finnegans, las cuentas de
          sus entidades en distintos bancos, entre ellos Banco Córdoba y Banco
          Galicia. El robot entra a los portales, extrae los movimientos, los
          cruza con Finnegans, genera un reporte de discrepancias y corre a
          diario de forma programada. La conciliación multibanco pasó a
          ejecutarse en minutos en lugar de horas, con una visión consolidada de
          la posición financiera del grupo. El detalle está en el{" "}
          <IntLink href="/blog/caso-exito-conciliacion-bancaria-agropecuario">
            caso de conciliación multibanco con Finnegans
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          En Chile, una empresa vitivinícola y frutícola exportadora dedicaba
          horas diarias a descargar, formatear y cargar cartolas de varias
          cuentas y monedas. El robot las descarga de los portales, les da el
          formato que pide el sistema contable y las carga sin intervención
          humana, sin modificar ninguna plataforma. El proceso diario bajó de
          horas a minutos, como cuenta el{" "}
          <IntLink href="/blog/caso-exito-cartolas-factoring-vitivinicola">
            caso de cartolas y factoring en viticultura
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Cuándo no conviene automatizar la conciliación bancaria?
        </h2>
        <p className={styles.p}>
          No conviene cuando el volumen es bajo o cuando tu ERP ya resuelve la
          conciliación con el banco. Con una o dos cuentas y pocas decenas de
          movimientos al mes, una persona concilia en menos tiempo del que toma
          mantener un robot, y el proyecto no se paga.
        </p>
        <p className={styles.p}>
          Antes de cotizar, revisa lo que ya tienes. Finnegans permite conciliar
          de forma automática importando un Excel con fecha e importe. Defontana
          tiene una opción de conciliación automática que parea cartola y
          contabilidad. SAP Business One ofrece conciliación manual, automática
          y semiautomática, además de un módulo de procesamiento de extractos.
          Si tu cuello de botella era solo cargar el archivo, puede bastar con
          configurar bien esa función, o con un robot mucho más chico que solo
          descargue e importe.
        </p>
        <p className={styles.p}>
          Tampoco conviene si el problema está antes del banco. Si la mayoría de
          los cobros llega sin referencia, el robot va a producir tantas
          excepciones como hoy tiene tu equipo. Primero hay que ordenar cómo te
          pagan los clientes.
        </p>
        <p className={styles.p}>
          Como referencia, el desarrollo de un proyecto RPA en Robotipy cuesta en
          promedio USD 6.000, con un mes de trabajo y la marcha blanca
          incluidos. La licencia de Rocketbot (USD 2.500) solo se cobra si no
          tienes una, y el soporte mensual es opcional desde USD 300. El detalle
          está en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
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
