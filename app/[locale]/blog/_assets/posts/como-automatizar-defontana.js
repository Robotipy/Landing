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
    a: "Sí. Defontana publica una API REST con autenticación por token JWT que, según su documentación a octubre de 2026, cubre contabilidad, ventas, compras, órdenes de compra, inventario, pedidos, despachos y precios. Permite grabar documentos de venta, registrar compras, ingresar comprobantes contables y crear clientes, productos y proveedores. No encontramos servicios publicados para conciliación bancaria ni para rendiciones de gastos.",
  },
  {
    q: "¿Cómo se obtiene acceso a la API de Defontana?",
    a: "Se solicita al área de Postventa de Defontana, módulo por módulo, y tu empresa debe ser cliente del ERP. La documentación aclara que el desarrollo de la integración corre por cuenta del cliente o de su proveedor tecnológico, y ofrece un ambiente de pruebas disponible de lunes a viernes. A octubre de 2026 no encontramos un precio publicado por el acceso, así que conviene confirmarlo directamente con Defontana.",
  },
  {
    q: "¿Un robot RPA puede operar Defontana sin usar la API?",
    a: "Sí. Como Defontana es un ERP 100% web, un robot RPA puede entrar con un usuario propio, navegar los menús, cargar datos y descargar informes igual que una persona. Es el camino para tareas que solo existen en pantalla, como la conciliación en Tesorería, o para módulos a los que tu empresa no tiene acceso por API. Su punto débil es que un cambio de pantalla lo detiene hasta que alguien lo ajusta.",
  },
  {
    q: "¿Se puede automatizar la conciliación bancaria en Defontana?",
    a: "Sí, combinando funciones nativas y un robot. Defontana importa cartolas y tiene un pareo automático en Tesorería, pero los movimientos que no calzan siguen siendo trabajo manual y, a octubre de 2026, la API pública no incluye un servicio de conciliación. Un robot puede descargar las cartolas, identificar los abonos contra los documentos pendientes de pago, ejecutar la conciliación en pantalla y dejar solo las excepciones para revisión.",
  },
  {
    q: "¿Un robot puede cargar facturas de compra en Defontana de forma automática?",
    a: "Sí. Las facturas electrónicas recibidas ya llegan a Defontana desde el SII, y la API permite registrarlas y aceptarlas o rechazarlas. El robot aporta las reglas: cruzar cada factura con su orden de compra, asignar cuenta y centro de negocio, y avisar a tiempo cuando hay que reclamar, porque según el SII el reclamo o el acuse de recibo se informa dentro de 8 días.",
  },
  {
    q: "¿Cuánto cuesta automatizar un proceso en Defontana con Robotipy?",
    a: "USD 6.000 en promedio por proyecto (Robotipy, 2026), con un mes de desarrollo y la marcha blanca incluidos. La licencia de Rocketbot, de USD 2.500, solo se suma si tu empresa no tiene una propia, y el soporte mensual es opcional y parte en USD 300. El diagnóstico inicial, donde decidimos si conviene la API, un robot o ambos, no tiene costo.",
  },
  {
    q: "¿Qué usuario y permisos necesita un robot que trabaja en Defontana?",
    a: "Un usuario dedicado, distinto al de cualquier persona, con permisos solo para los módulos y acciones que usa el proceso. Así cada movimiento queda trazado y una falla no compromete más de lo necesario. Si el robot también usa la API, el usuario propio evita otro problema: según la documentación de Defontana, cada token nuevo invalida los anteriores del mismo usuario.",
  },
];

const procesos = [
  {
    proceso: "Carga de facturas de compra y documentos recibidos del SII",
    camino: "Mixto",
    porque:
      "Los documentos recibidos ya aparecen en Defontana y la API permite registrarlos y aceptarlos o rechazarlos. El robot suma lo que no llega por el SII (facturas de proveedores extranjeros, boletas) y las reglas de imputación.",
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
      "La importación de cartolas y el pareo automático se hacen en la pantalla de Tesorería, y en la API no encontramos un servicio de conciliación. El robot opera esa pantalla; la API consulta documentos pendientes e ingresa comprobantes.",
  },
  {
    proceso: "Rendiciones de gastos",
    camino: "Integración nativa o mixto",
    porque:
      "Si usas Rindegastos, la integración oficial contabiliza los gastos aprobados. Si las rendiciones llegan en Excel o por correo, el robot valida los respaldos y el registro va por API como comprobante contable.",
  },
  {
    proceso: "Reportes y consolidación en Excel",
    camino: "Mixto",
    porque:
      "Ventas, compras, comprobantes y documentos pendientes de pago se extraen por API. Los informes que solo existen en pantalla los descarga el robot, y un script arma el Excel final.",
  },
  {
    proceso: "Mantención de maestros de clientes, productos y proveedores",
    camino: "API",
    porque:
      "Hay servicios para crear y actualizar clientes, productos, proveedores y listas de precios. El trabajo real está en validar los datos antes de escribirlos.",
  },
  {
    proceso: "Asientos contables recurrentes (provisiones, remuneraciones calculadas en otro sistema)",
    camino: "API",
    porque:
      "El servicio de comprobantes contables recibe el asiento ya armado. Conviene revisarlo antes del primer envío, porque un error de regla se repite en cada ejecución.",
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
  title: "Cómo automatizar Defontana en Chile: API, RPA o las dos",
  description:
    "Qué procesos de Defontana conviene automatizar, cuándo usar su API, cuándo un robot RPA sobre la interfaz web y cuándo combinar ambos, con riesgos y límites.",
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
  publishedAt: "2026-10-01",
  updatedAt: "2026-10-01",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-automatizar-defontana/header.jpeg",
    alt: "Automatización de Defontana con API y robots RPA",
  },
  faq: faqs,
  cta: {
    titulo: "¿Tienes un proceso en Defontana que hoy se hace a mano?",
    texto:
      "Cuéntanos cuál es y te decimos si conviene resolverlo por API, con un robot o combinando ambos. El diagnóstico no tiene costo.",
    botonLabel: "Evaluar mi proceso",
    botonUrl: "/contact-us",
    linkLabel: "Cómo integrar RPA con tu ERP",
    linkUrl: "/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros",
  },
  content: (
    <>
      <section className="space-y-4">
        <p className={styles.p}>
          Sí, Defontana se puede automatizar, y hay dos caminos para hacerlo:
          su API REST, que permite crear documentos, comprobantes contables y
          maestros desde otro sistema, y un robot RPA que opera la interfaz web
          con un usuario propio, igual que una persona. La regla práctica es
          usar la API donde existe un servicio para la tarea y dejar el robot
          para lo que solo se hace en pantalla. En la mayoría de los procesos
          reales conviene combinar los dos.
        </p>
        <p className={styles.p}>
          En Robotipy hemos automatizado procesos sobre Defontana, además de
          SAP, Finnegans y portales de bancos de Chile y Argentina. Esta guía
          resume cómo elegimos el camino para cada proceso, qué cubre la API
          según la documentación pública de Defontana a octubre de 2026 y en
          qué casos te recomendamos no automatizar.
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
          inventario, pedidos, despachos y precios. En la práctica permite
          grabar documentos de venta y notas de crédito, registrar documentos
          de compra, aceptar o rechazar los que llegan desde el SII, ingresar
          comprobantes contables, crear y actualizar clientes, productos y
          proveedores, y consultar documentos pendientes de pago.
        </p>
        <p className={styles.p}>
          El acceso no es abierto. Tu empresa tiene que ser cliente del ERP y
          el acceso a cada módulo se solicita al área de Postventa de
          Defontana. La misma documentación aclara que el desarrollo de la
          integración es responsabilidad del cliente o de su proveedor
          tecnológico. Hay un ambiente de pruebas disponible de lunes a viernes,
          de 09:00 a 20:00. Lo que no encontramos publicado: el precio del
          acceso, los límites de llamadas y servicios para conciliación
          bancaria o rendiciones.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Qué procesos de Defontana conviene automatizar?</h2>
        <p className={styles.p}>
          Conviene automatizar los procesos de alto volumen y reglas claras:
          documentos de compra, emisión de documentos, conciliación bancaria,
          rendiciones, reportes y mantención de maestros. La tabla resume el
          camino que recomendamos para cada uno y por qué.
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
        <h2 className={styles.h2}>¿Cuándo conviene usar la API de Defontana?</h2>
        <p className={styles.p}>
          Conviene usar la API de Defontana cuando existe un servicio
          documentado para la tarea, el volumen es alto o los datos nacen en
          otro sistema, como un e-commerce propio, un sistema de producción o
          la planilla de otra área. Una llamada a la API no depende de dónde
          está un botón, corre más rápido que cualquier navegación y devuelve
          una respuesta clara cuando algo falla, lo que facilita reintentar o
          escalar el error.
        </p>
        <p className={styles.p}>
          El costo está en otro lado. Necesitas a alguien que programe la
          integración, porque Defontana no la construye por ti, y tienes que
          pedir acceso a cada módulo por separado. Hay además un detalle
          técnico que conviene conocer antes de diseñar: según la
          documentación, cada token nuevo invalida de inmediato los anteriores
          del mismo usuario. Si dos procesos comparten la cuenta, se cierran la
          sesión entre ellos. Por eso cada integración necesita su propio
          usuario o una gestión centralizada del token.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Cuándo conviene un robot RPA sobre la interfaz web de Defontana?
        </h2>
        <p className={styles.p}>
          Un robot RPA conviene cuando la tarea solo existe en la pantalla,
          cuando no tienes acceso a la API del módulo o cuando el proceso cruza
          Defontana con portales que tampoco tienen API, como los bancos. El
          robot entra con su propio usuario, navega los menús y hace lo mismo
          que tu analista, dejando registro de cada paso.
        </p>
        <p className={styles.p}>
          El caso típico es Tesorería. La importación de cartolas y el botón de
          conciliación automática son funciones de pantalla, y para bancos
          distintos de Santander, Banco de Chile y BancoEstado la cartola hay
          que llevarla primero a un formato genérico de seis columnas.
          Descargar, transformar, subir y conciliar es justo el tipo de trabajo
          que un robot hace bien. Lo mismo aplica a informes que Defontana
          muestra en pantalla pero no expone por API.
        </p>
        <p className={styles.p}>
          La contracara es la fragilidad: si Defontana cambia una pantalla, el
          robot se detiene hasta que alguien lo ajusta. Comparamos los caminos
          de interfaz, API y carga masiva en{" "}
          <IntLink href="/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros">
            cómo integrar RPA con tu ERP
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cuándo conviene combinar API y RPA?</h2>
        <p className={styles.p}>
          Conviene combinarlos cuando un mismo proceso tiene tramos con
          servicio en la API y tramos que solo existen en pantalla o fuera de
          Defontana. La conciliación bancaria es el mejor ejemplo.
        </p>
        <p className={styles.p}>
          Un diseño mixto funciona así: el robot entra a los portales de los
          bancos y descarga las cartolas; un script identifica a quién
          corresponde cada abono cruzando el RUT o la glosa con los documentos
          pendientes de pago que entrega la API; la API ingresa los
          comprobantes contables de lo que calza, y el robot ejecuta la
          conciliación en la pantalla de Tesorería. Lo que no calza queda en
          una lista para que una persona lo revise. Detallamos ese flujo en{" "}
          <IntLink href="/blog/como-automatizar-la-conciliacion-bancaria">
            cómo automatizar la conciliación bancaria
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          En nuestros proyectos sobre SAP aplicamos la misma lógica: pantalla
          para lo que no tiene otra puerta y llamada directa para lo que sí la
          tiene. Así planteamos los proyectos de nuestro{" "}
          <IntLink href="/rpa">servicio de RPA</IntLink>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>
          ¿Cómo se conecta Defontana con el SII, los bancos, el e-commerce y Excel?
        </h2>
        <p className={styles.p}>
          Defontana ya trae varias conexiones nativas, y lo primero es usarlas
          antes de construir algo propio. Automatizar encima de ellas suele
          salir más barato que reemplazarlas.
        </p>
        <p className={styles.p}>
          Con el SII, el módulo de compras sincroniza los documentos recibidos
          y muestra el estado de aceptación de cada uno. Lo que queda manual es
          decidir si se acepta o se reclama, y el plazo importa: según el SII,
          el reclamo o el acuse de recibo se informa dentro de 8 días. Un robot
          que revisa a diario los pendientes contra las órdenes de compra evita
          que una factura con errores se dé por aceptada al vencer el plazo. El
          resto del flujo está en{" "}
          <IntLink href="/blog/como-automatizar-cuentas-por-pagar-y-carga-de-facturas">
            cómo automatizar cuentas por pagar y la carga de facturas
          </IntLink>
          .
        </p>
        <p className={styles.p}>
          Con los bancos, Defontana importa cartolas de forma automática si le
          entregas las credenciales del banco, con frecuencia diaria, semanal o
          mensual. Si tu política de seguridad no permite compartirlas, un
          robot propio puede descargar las cartolas con credenciales guardadas
          en tu infraestructura.
        </p>
        <p className={styles.p}>
          Con el e-commerce, el plugin oficial sincroniza stock y precios y
          genera documentos de venta a partir de las órdenes pagadas, en ciclos
          de 30 minutos. Con Excel, lo habitual es extraer los datos por API o
          por exportación, consolidarlos con un script y distribuir el archivo,
          como explicamos en{" "}
          <IntLink href="/blog/como-automatizar-reportes-excel">
            cómo automatizar los reportes que hoy haces en Excel
          </IntLink>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Qué cuidados necesita un robot que trabaja en Defontana?</h2>
        <p className={styles.p}>
          Un robot que trabaja en Defontana necesita cuatro cuidados: un
          usuario propio, permisos acotados, un plan para los cambios de
          interfaz y pruebas que consideren los límites de la API.
        </p>
        <p className={styles.p}>
          El usuario dedicado va primero. Si el robot usa la cuenta de una
          persona, nadie sabe después quién hizo qué, y en la API el token del
          robot puede cerrar la sesión de otra integración. Los permisos van
          acotados a los módulos y acciones que usa el proceso: un robot que
          registra compras no necesita aprobar pagos ni ver remuneraciones.
        </p>
        <p className={styles.p}>
          Los cambios de interfaz son inevitables. La nueva versión del módulo
          de compras, por ejemplo, reorganizó el listado en documentos
          ingresados y pendientes por ingresar, y un cambio así detiene a un
          robot de pantalla. Conviene tener alertas y a alguien que lo ajuste
          rápido.
        </p>
        <p className={styles.p}>
          Sobre la API, la documentación no publica límites de llamadas, así
          que pregúntalos a Postventa antes de diseñar cargas grandes y trabaja
          por lotes con reintentos. Ojo con el ambiente de pruebas: según
          Defontana, lo que configuras ahí se pierde con la siguiente
          actualización, así que planifica las pruebas con eso en mente.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>¿Cuándo no conviene automatizar en Defontana?</h2>
        <p className={styles.p}>
          No conviene automatizar cuando Defontana ya resuelve la tarea con una
          función nativa, cuando el volumen es bajo o cuando el proceso todavía
          cambia de un mes a otro.
        </p>
        <p className={styles.p}>
          Si vendes en Shopify o Mercado Libre, usa el plugin oficial antes de
          pagar un robot. Si tus rendiciones ya pasan por Rindegastos, la
          integración existente cubre la contabilización. Si tu banco permite
          la importación directa de cartolas y el pareo automático concilia la
          mayoría de los movimientos, el robot solo se justifica para las
          excepciones que quedan.
        </p>
        <p className={styles.p}>
          El volumen manda. Un proyecto de RPA con nosotros cuesta en promedio
          USD 6.000 de desarrollo, con un mes de trabajo y la marcha blanca
          incluidos (el detalle está en{" "}
          <IntLink href="/blog/cuanto-cuesta-automatizar-un-proceso">
            cuánto cuesta automatizar un proceso
          </IntLink>
          ). Un proceso que le toma dos horas al mes a una persona difícilmente
          devuelve esa inversión. Tampoco lo recomendamos si estás por migrar
          de ERP o si nadie puede explicar las reglas del proceso sin decir
          &quot;depende&quot;: primero se ordena y después se automatiza. Si
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
