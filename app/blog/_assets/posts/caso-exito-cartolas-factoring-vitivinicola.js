import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "caso-exito-cartolas-factoring-vitivinicola",
  title: "Caso de Éxito: Automatización de cartolas y factoring para empresa vitivinícola",
  description:
    "Cómo una empresa vitivinícola y frutícola en Chile automatizó la carga de cartolas bancarias y gestión de factoring con RPA, reduciendo horas de trabajo diario a minutos.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.casosDeExito),
    categories.find((category) => category.slug === categorySlugs.fintech),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-03-16",
  image: {
    src: null,
    urlRelative: "/blog/caso-exito-cartolas-factoring-vitivinicola/header.jpeg",
    alt: "Automatización cartolas factoring vitivinícola Chile",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          En empresas agrícolas con ciclos de caja largos, el factoring es crítico para el flujo de caja. Cada día de retraso en una cesión tiene costo financiero real.
        </p>
        <p className={styles.p}>
          Este caso muestra cómo una <strong>empresa vitivinícola y frutícola con operaciones de exportación en Chile</strong> automatizó sus procesos financieros críticos con <strong>RPA</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>El Desafío: Procesos financieros manuales en múltiples monedas</h3>
        <p className={styles.p}>
          La empresa manejaba procesos financieros críticos de forma manual:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Carga de cartolas bancarias:</strong> Con múltiples cuentas bancarias y operaciones de exportación en diferentes monedas, el equipo financiero dedicaba horas diarias a descargar, formatear y cargar cartolas bancarias al sistema contable.</li>
          <li className={styles.li}><strong>Gestión de factoring:</strong> Las cesiones de facturas para factoring requerían seguimiento manual constante, desde la cesión hasta la conciliación de pagos.</li>
          <li className={styles.li}><strong>Múltiples monedas:</strong> Las operaciones de exportación agregaban complejidad adicional por el manejo de diferentes divisas.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>La Solución: Automatización de carga y factoring</h3>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Carga automática de cartolas:</strong> Descarga automática desde portales bancarios, formateo según requerimientos del sistema contable, y carga directa sin intervención humana.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Gestión automatizada de factoring:</strong> Gestión de cesiones de facturas, seguimiento de estados y conciliación de pagos de forma automatizada.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Integración sin modificaciones:</strong> Conexión entre sistemas bancarios y contables sin modificar ninguna plataforma existente.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Tecnologías Utilizadas</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>RPA:</strong> Rocketbot</li>
          <li className={styles.li}><strong>Sistemas:</strong> Portales bancarios, Sistema contable</li>
          <li className={styles.li}><strong>Datos:</strong> Excel</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Resultados</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Proceso diario de carga de cartolas</strong> reducido de horas a minutos.</li>
          <li className={styles.li}><strong>Eliminación de errores de transcripción</strong> en datos bancarios.</li>
          <li className={styles.li}><strong>Visibilidad en tiempo real</strong> del estado de operaciones de factoring.</li>
          <li className={styles.li}><strong>Equipo financiero enfocado</strong> en gestión de tesorería estratégica.</li>
        </ul>
      </section>

      <section className="space-y-3 p-6 rounded-xl border-l-4 border-cyan-400" style={{ backgroundColor: "rgba(3, 150, 149, 0.1)" }}>
        <h3 className={styles.h3}>💡 Insight Estratégico</h3>
        <p className={styles.p}>
          En empresas agrícolas con ciclos de caja largos (la cosecha se paga meses después), <strong>el factoring es crítico para el flujo de caja</strong>. Automatizar este proceso no solo ahorra tiempo, sino que reduce el riesgo de perder una ventana de cesión por error administrativo.
        </p>
        <p className={`${styles.p} font-semibold text-cyan-400`}>
          Cada día de retraso en una cesión tiene costo financiero real.
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
