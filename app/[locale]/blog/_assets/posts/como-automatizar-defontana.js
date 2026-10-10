import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-automatizar-defontana/header.jpeg";

const linkCls = "text-accent underline-offset-2 hover:underline";
const IntLink = ({ href, children }) => (
  <Link href={href} className={linkCls}>
    {children}
  </Link>
);

const faqs = [
  {
    q: "¿Defontana tiene una API para integrar otros sistemas?",
    a: "Sí. Defontana publica una API REST con autenticación por token JWT que, según su documentación a octubre de 2026, cubre contabilidad, ventas, compras, órdenes de compra, inventario, pedidos, despachos y precios. Con ella se pueden grabar documentos de venta, registrar compras, ingresar comprobantes contables y crear clientes, productos y proveedores. No encontramos servicios publicados para conciliación bancaria ni para rendiciones de gastos.",
  },
  {
    q: "¿Cómo se obtiene acceso a la API de Defontana?",
    a: "Tu empresa debe ser cliente del ERP y pedir el acceso al área de Postventa de Defontana, módulo por módulo. La documentación aclara que el desarrollo de la integración corre por cuenta del cliente o de su proveedor tecnológico. Defontana ofrece un ambiente de pruebas disponible de lunes a viernes. A octubre de 2026 no encontramos un precio publicado por el acceso, así que hay que consultarlo directamente con Defontana.",
  },
  {
    q: "¿Un robot RPA puede operar Defontana sin usar la API?",
    a: "Sí. Defontana es un ERP 100% web, así que un robot RPA puede entrar con un usuario propio, navegar los menús, cargar datos y descargar informes igual que una persona. Es la opción para tareas que solo existen en pantalla, como la conciliación en Tesorería, o para módulos a los que tu empresa no tiene acceso por API. Su punto débil es que un cambio de pantalla lo detiene hasta que alguien lo ajusta.",
  },
  {
    q: "¿Se puede automatizar la conciliación bancaria en Defontana?",
    a: "Sí, combinando funciones nativas y un robot. Defontana importa cartolas y tiene un pareo automático en Tesorería, pero los movimientos que no coinciden se siguen revisando a mano y, a octubre de 2026, la API pública no incluye un servicio de conciliación. Un robot puede descargar las cartolas, identificar los abonos contra los documentos pendientes de pago y ejecutar la conciliación en pantalla. Para revisión quedan solo las excepciones.",
  },
  {
    q: "¿Un robot puede cargar facturas de compra en Defontana de forma automática?",
    a: "Sí. Las facturas electrónicas recibidas ya llegan a Defontana desde el SII, y la API permite registrarlas y aceptarlas o rechazarlas. El robot aplica las reglas de negocio: cruza cada factura con su orden de compra, asigna cuenta y centro de negocio y avisa a tiempo cuando hay que reclamar, porque según el SII el reclamo o el acuse de recibo se informa dentro de 8 días.",
  },
  {
    q: "¿Cuánto cuesta automatizar un proceso en Defontana con Robotipy?",
    a: "USD 6.000 en promedio por proyecto (Robotipy, 2026), con un mes de desarrollo y la marcha blanca incluidos. La licencia de Rocketbot, de USD 2.500, solo se suma si tu empresa no tiene una propia. El soporte mensual es opcional y cuesta desde USD 300. El diagnóstico inicial, en el que decidimos entre la API, un robot o ambos, no tiene costo.",
  },
  {
    q: "¿Qué usuario y permisos necesita un robot que trabaja en Defontana?",
    a: "Un usuario dedicado, distinto al de cualquier persona, con permisos solo para los módulos y acciones que usa el proceso. Con eso cada movimiento queda trazado y una falla no compromete más de lo necesario. Si el robot también usa la API, tener un usuario propio evita otro problema, porque según la documentación de Defontana cada token nuevo invalida los anteriores del mismo usuario.",
  },
];

const procesos = [
  {
    proceso: "Carga de facturas de compra y documentos recibidos del SII",
    camino: "Mixto",
    porque:
      "Los documentos recibidos ya aparecen en Defontana y la API permite registrarlos y aceptarlos o rechazarlos. El robot se encarga de lo que no llega por el SII, como facturas de proveedores extranjeros o boletas, y de aplicar las reglas de imputación.",
  },
  {
    proceso: "Emisión de facturas y notas de crédito desde otro sistema",
    camino: "API",
    porque:
      "Hay servicios para grabar documentos de venta y notas de crédito y de débito. Con volumen alto, la API es más rápida y no depende del diseño de la pantalla.",
  },
  {
    proceso: "Ventas de e-commerce y marketplaces",
    camino: "Integración nativa o API",
    porque:
      "Defontana tiene un plugin para Shopify, WooCommerce, Mercado Libre, VTEX, Jumpseller y otros canales. La API queda para canales propios o que no están en esa lista.",
  },
  {
    proceso: "Conciliación bancaria",
    camino: "Mixto",
    porque:
      "La importación de cartolas y el pareo automático se hacen en la pantalla de Tesorería, y en la API no encontramos un servicio de conciliación. El robot opera esa pantalla y la API se usa para consultar documentos pendientes e ingresar comprobantes.",
  },
  {
    proceso: "Rendiciones de gastos",
    camino: "Integración nativa o mixto",
    porque:
      "Si usas Rindegastos, la integración oficial contabiliza los gastos aprobados. Cuando las rendiciones llegan en Excel o por correo, el robot valida los respaldos y el registro se hace por API como comprobante contable.",
  },
  {
    proceso: "Reportes y consolidación en Excel",
    camino: "Mixto",
    porque:
      "Ventas, compras, comprobantes y documentos pendientes de pago se extraen por API. Los informes que solo existen en pantalla los descarga el robot, y un script arma el Excel final.",
  },
  {
    proceso: "Mantenimiento de maestros de clientes, productos y proveedores",
    camino: "API",
    porque:
      "Hay servicios para crear y actualizar clientes, productos, proveedores y listas de precios. La mayor parte del esfuerzo está en validar los datos antes de escribirlos.",
  },
  {
    proceso: "Asientos contables recurrentes (provisiones, remuneraciones calculadas en otro sistema)",
    camino: "API",
    porque:
      "El servicio de comprobantes contables recibe el asiento ya armado. Hay que revisarlo antes del primer envío, porque un error en una regla se repite en cada ejecución.",
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

const slug = "como-automatizar-defontana";

export const post = {
  slug,
  locale: "es",
  title: "Cómo automatizar Defontana en Chile con API, RPA o ambos",
  description:
    "Guía para elegir entre la API de Defontana, un robot RPA sobre su interfaz web o una combinación de ambos, con los procesos que se pueden automatizar, sus riesgos y sus límites.",
  keywords: [
    "cómo automatizar Defontana",
    "API de Defontana",
    "RPA para Defontana",
    "integrar Defontana con otros sistemas",
    "automatizar facturas de compra en Defontana",
    "conciliación bancaria en Defontana",
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
    urlRelative: "/blog/como-automatizar-defontana/header.jpeg",
    alt: "Automatización de Defontana con API y robots RPA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes un proceso en Defontana que todavía se hace a mano?",
    texto:
      "Cuéntanos cuál es y te diremos si es mejor resolverlo por API, con un robot o combinando ambos. El diagnóstico no tiene costo.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo integrar RPA con tu ERP",
    linkUrl: "/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Defontana se puede automatizar por dos caminos. El primero es su API
          REST, que permite crear documentos, comprobantes contables y maestros
          desde otro sistema. El segundo es un robot RPA que opera la interfaz
          web con un usuario propio, igual que una persona. Como regla general,
          usamos la API donde existe un servicio para la tarea y dejamos el
          robot para lo que solo se hace en pantalla. La mayoría de los
          procesos reales necesita los dos.
        </p>
        <p className={styles.p}>
          En Robotipy hemos automatizado procesos sobre Defontana, además de
          SAP, Finnegans y portales de bancos de Chile y Argentina. Lo que
          describimos sobre la API se basa en la documentación pública de
          Defontana revisada a octubre de 2026.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Qué es Defontana y qué cubre su API?</h2>
        <p className={styles.p}>
          Defontana es un ERP chileno 100% web, con planes para pymes y para
          empresas medianas y grandes, que opera en Chile, Perú, México y
          Colombia. Sus módulos cubren ventas y facturación electrónica,
          compras, inventario, contabilidad, tesorería y remuneraciones.
        </p>
        <p className={styles.p}>
          Su API REST usa tokens JWT y, según la documentación pública, tiene
          servicios para contabilidad, ventas, compras, órdenes de compra,
          inventario, pedidos, despachos y precios. Con ellos se pueden grabar
          documentos de venta y notas de crédito, registrar documentos de compra
          y aceptar o rechazar los que llegan desde el SII. También permite
          ingresar comprobantes contables, crear y actualizar clientes,
          productos y proveedores, y consultar documentos pendientes de pago.
        </p>
        <p className={styles.p}>
          El acceso tiene requisitos. Tu empresa debe ser cliente del ERP y el
          acceso a cada módulo se solicita al área de Postventa de Defontana. La
          misma documentación aclara que el desarrollo de la integración es
          responsabilidad del cliente o de su proveedor tecnológico. Hay un
          ambiente de pruebas disponible de lunes a viernes, de 09:00 a 20:00.
          En cambio, no encontramos publicados el precio del acceso, los límites
          de llamadas ni servicios para conciliación bancaria o rendiciones.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Qué procesos de Defontana se pueden automatizar?</h2>
        <p className={styles.p}>
          Los mejores candidatos son los procesos de alto volumen y reglas
          claras, como los documentos de compra, la emisión de documentos, la
          conciliación bancaria, las rendiciones, los reportes y el
          mantenimiento de maestros. En la tabla está el camino que recomendamos
          para cada uno y la razón.
        </p>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Proceso</th>
                <th className={ui.th}>Camino recomendado</th>
                <th className={ui.th}>Por qué</th>
              </tr>
            </thead>
            <tbody>
              {procesos.map((p, i) => (
                <tr key={i}>
                  <td className={`${ui.td} font-semibold text-white`}>{p.proceso}</td>
                  <td className={`${ui.td} whitespace-nowrap`}>{p.camino}</td>
                  <td className={ui.td}>{p.porque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cuándo usar la API de Defontana?</h2>
        <p className={styles.p}>
          La API es la mejor opción cuando existe un servicio documentado para
          la tarea, sobre todo si el volumen es alto o si los datos nacen en
          otro sistema, como un e-commerce propio, un sistema de producción o
          la hoja de cálculo de otra área. Una llamada a la API no depende de
          dónde está un botón y es más rápida que cualquier navegación. Si algo
          falla, devuelve una respuesta clara, y eso facilita reintentar o
          escalar el error.
        </p>
        <p className={styles.p}>
          Su costo está en la integración. Necesitas a alguien que la programe,
          porque Defontana no la construye por ti, y tienes que pedir acceso a
          cada módulo por separado. Antes de diseñar, ten en cuenta que cada
          token nuevo invalida de inmediato los anteriores del mismo usuario,
          según la documentación. Dos procesos que comparten la cuenta se
          cierran la sesión entre ellos, así que cada integración necesita su
          propio usuario o una gestión centralizada del token.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Cuándo usar un robot RPA sobre la interfaz web de Defontana?
        </h2>
        <p className={styles.p}>
          Un robot RPA sirve cuando la tarea solo existe en la pantalla o
          cuando no tienes acceso a la API del módulo. También es útil si el
          proceso cruza Defontana con portales que tampoco tienen API, como los
          de los bancos. El robot entra con su propio usuario y hace en los
          menús lo mismo que tu analista, con registro de cada paso.
        </p>
        <p className={styles.p}>
          El caso típico es Tesorería. La importación de cartolas y el botón de
          conciliación automática son funciones de pantalla. Además, para bancos
          distintos de Santander, Banco de Chile y BancoEstado, la cartola hay
          que llevarla primero a un formato genérico de seis columnas. Esa
          secuencia de descargar, transformar, subir y conciliar la puede
          ejecutar un robot. Lo mismo ocurre con los informes que Defontana
          muestra en pantalla pero no expone por API.
        </p>
        <p className={styles.p}>
          Su debilidad es que, si Defontana cambia una pantalla, el robot se
          detiene hasta que alguien lo ajusta. Comparamos los caminos de
          interfaz, API y carga masiva en{" "}
          <IntLink href="/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros">
            cómo integrar RPA con tu ERP
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cuándo combinar API y RPA?</h2>
        <p className={styles.p}>
          La combinación se justifica cuando un mismo proceso tiene tramos con
          servicio en la API y tramos que solo existen en pantalla o fuera de
          Defontana.
          La conciliación bancaria es un caso de este tipo.
        </p>
        <p className={styles.p}>
          En un diseño mixto, el robot entra a los portales de los bancos y
          descarga las cartolas. Luego un script identifica a quién corresponde
          cada abono, cruzando el RUT o la glosa con los documentos pendientes
          de pago que entrega la API. Para los movimientos que coinciden, la API
          ingresa los comprobantes contables y el robot ejecuta la conciliación
          en la pantalla de Tesorería. Los que no coinciden quedan en una lista
          para que una persona los revise. Detallamos ese flujo en{" "}
          <IntLink href="/blog/como-automatizar-la-conciliacion-bancaria">
            cómo automatizar la conciliación bancaria
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          En nuestros proyectos sobre SAP seguimos el mismo criterio: llamadas
          directas donde el sistema las permite y operación por pantalla para
          el resto. Con esa lógica planteamos los proyectos de nuestro{" "}
          <IntLink href="/rpa">servicio de RPA</IntLink>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Cómo se conecta Defontana con el SII, los bancos, el e-commerce y Excel?
        </h2>
        <p className={styles.p}>
          Defontana ya trae varias conexiones nativas. Úsalas antes de
          construir algo propio, porque automatizar encima de ellas suele salir
          más barato que reemplazarlas.
        </p>
        <p className={styles.p}>
          En el caso del SII, el módulo de compras sincroniza los documentos
          recibidos y muestra el estado de aceptación de cada uno. La decisión
          de aceptar o reclamar sigue siendo manual y tiene plazo, ya que según
          el SII el reclamo o el acuse de recibo se informa dentro de 8 días. Un
          robot que revisa a diario los pendientes contra las órdenes de compra
          evita que una factura con errores se dé por aceptada al vencer el
          plazo. El resto del flujo está en{" "}
          <IntLink href="/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas">
            cómo automatizar cuentas por pagar y la carga de facturas
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Para los bancos, Defontana importa cartolas de forma automática con
          frecuencia diaria, semanal o mensual si le entregas las credenciales
          del banco. Si tu política de seguridad no permite compartirlas, un
          robot propio puede descargar las cartolas con credenciales guardadas
          en tu infraestructura.
        </p>
        <p className={styles.p}>
          En e-commerce, el plugin oficial sincroniza stock y precios y genera
          documentos de venta a partir de las órdenes pagadas, en ciclos de 30
          minutos. Para Excel, lo habitual es extraer los datos por API o por
          exportación, consolidarlos con un script y distribuir el archivo, como
          explicamos en{" "}
          <IntLink href="/blog/como-automatizar-reportes-excel">
            cómo automatizar los reportes que hoy haces en Excel
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Qué cuidados necesita un robot que trabaja en Defontana?</h2>
        <p className={styles.p}>
          Hay cuatro puntos que revisar: un usuario propio, permisos acotados,
          un plan para los cambios de interfaz y pruebas que consideren los
          límites de la API.
        </p>
        <p className={styles.p}>
          El usuario dedicado va primero. Si el robot usa la cuenta de una
          persona, después nadie sabe quién hizo qué, y en la API el token del
          robot puede cerrar la sesión de otra integración. Los permisos se
          limitan a los módulos y acciones que usa el proceso. Un robot que
          registra compras no necesita aprobar pagos ni ver remuneraciones.
        </p>
        <p className={styles.p}>
          Los cambios de interfaz van a ocurrir. La nueva versión del módulo de
          compras, por ejemplo, reorganizó el listado en documentos ingresados y
          pendientes por ingresar, y un cambio así detiene a un robot de
          pantalla. Por eso hay que tener alertas y a alguien que pueda
          ajustarlo rápido.
        </p>
        <p className={styles.p}>
          La documentación de la API no publica límites de llamadas. Pregúntalos
          a Postventa antes de diseñar cargas grandes y trabaja por lotes con
          reintentos. En el ambiente de pruebas, según Defontana, lo que
          configuras se pierde con la siguiente actualización.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cuándo es mejor no automatizar en Defontana?</h2>
        <p className={styles.p}>
          No recomendamos automatizar si Defontana ya resuelve la tarea con una
          función nativa o si el volumen es bajo, ni mientras el proceso siga
          cambiando de un mes a otro.
        </p>
        <p className={styles.p}>
          Si vendes en Shopify o Mercado Libre, usa el plugin oficial antes de
          pagar un robot. Para las rendiciones que ya pasan por Rindegastos, la
          integración existente se encarga de contabilizarlas. Y cuando tu
          banco permite la importación directa de cartolas y el pareo
          automático concilia la mayoría de los movimientos, el robot solo se
          justifica para las excepciones que quedan.
        </p>
        <p className={styles.p}>
          En cuanto al volumen, un proyecto de RPA con nosotros cuesta en
          promedio USD 6.000 de desarrollo, con un mes de trabajo y la marcha
          blanca incluidos (el detalle está en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          ). Un proceso que le toma dos horas al mes a una persona difícilmente
          recupera esa inversión. Tampoco lo recomendamos si estás por migrar de
          ERP. Y si nadie puede explicar las reglas del proceso sin decir
          &quot;depende&quot;, hay que ordenarlo antes de automatizarlo. Si
          tienes dudas sobre tu caso,{" "}
          <IntLink href="/contact-us">escríbenos</IntLink> y lo revisamos.
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
