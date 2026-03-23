import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "caso-exito-automatizacion-financiera-agroindustria",
  title: "Caso de Éxito: Automatización financiera para grupo agroindustrial en Chile",
  description:
    "Cómo un holding agroindustrial en Chile automatizó conciliaciones bancarias y revisión de facturas con RPA, reduciendo errores y liberando al equipo financiero para tareas estratégicas.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.casosDeExito),
    categories.find((category) => category.slug === categorySlugs.fintech),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-03-17",
  image: {
    src: null,
    urlRelative: "/blog/caso-exito-automatizacion-financiera-agroindustria/header.jpeg",
    alt: "Automatización financiera agroindustria Chile RPA",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          La automatización financiera es el caso de uso con ROI más inmediato en agroindustria. No porque la tecnología sea compleja, sino porque el volumen de transacciones repetitivas es enorme y cada error de cuadre tiene costo real.
        </p>
        <p className={styles.p}>
          Este caso muestra cómo un <strong>holding agroindustrial con múltiples unidades de negocio en Chile</strong> transformó sus procesos de conciliación bancaria y revisión de facturas con <strong>RPA</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>El Desafío: Conciliaciones manuales entre múltiples bancos y sistemas</h3>
        <p className={styles.p}>
          El grupo manejaba conciliaciones bancarias y revisión de facturas de forma manual entre múltiples bancos y sistemas contables. Los problemas incluían:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Operaciones en distintas unidades de negocio</strong> con alto volumen de documentos y transacciones.</li>
          <li className={styles.li}><strong>Proceso lento y propenso a errores de cuadre</strong> que consumía horas semanales del equipo financiero.</li>
          <li className={styles.li}><strong>Quality check de facturas</strong> que requería cruzar datos de distintas fuentes para validar montos, proveedores y condiciones comerciales.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>La Solución: Automatización integral del proceso financiero</h3>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Conciliaciones bancarias automatizadas:</strong> Robot que extrae movimientos de bancos, los cruza con registros contables, e identifica diferencias automáticamente.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Revisión automatizada de facturas:</strong> Extracción de datos clave (monto, proveedor, fecha, condiciones) y validación contra reglas de negocio.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Reportes de excepciones:</strong> Generación automática para revisión humana solo cuando hay discrepancias.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Documentación y capacitación:</strong> Proceso documentado con video de entrenamiento para el equipo.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Tecnologías Utilizadas</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>RPA:</strong> Rocketbot</li>
          <li className={styles.li}><strong>Datos:</strong> Excel</li>
          <li className={styles.li}><strong>Sistemas:</strong> Portales bancarios, Sistema contable</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Resultados</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Reducción drástica del tiempo</strong> de conciliación bancaria.</li>
          <li className={styles.li}><strong>Detección temprana de discrepancias</strong> en facturas antes de pago.</li>
          <li className={styles.li}><strong>Equipo financiero liberado</strong> para análisis y tareas de mayor valor.</li>
          <li className={styles.li}><strong>Proceso escalable</strong> a nuevas unidades de negocio del holding.</li>
        </ul>
      </section>

      <section className="space-y-3 p-6 rounded-xl border-l-4 border-cyan-400" style={{ backgroundColor: "rgba(3, 150, 149, 0.1)" }}>
        <h3 className={styles.h3}>💡 Insight Estratégico</h3>
        <p className={styles.p}>
          La automatización financiera es el caso de uso con <strong>ROI más inmediato en agroindustria</strong>. No porque la tecnología sea compleja, sino porque el volumen de transacciones repetitivas es enorme y cada error de cuadre tiene costo real.
        </p>
        <p className={`${styles.p} font-semibold text-cyan-400`}>
          La clave es diseñar el bot para que escale: una vez que funciona para una unidad de negocio, replicarlo a las demás es cuestión de configuración, no de desarrollo.
        </p>
      </section>

      <section className="space-y-3">
        <div className="flex justify-center mt-4">
          <ButtonMain text="¿Quieres algo similar? Contáctanos" link="/contact-us" type="primary"/>
        </div>
      </section>
    </>
  ),
};
