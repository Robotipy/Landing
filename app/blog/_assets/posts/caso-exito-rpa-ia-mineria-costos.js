import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "caso-exito-rpa-ia-mineria-costos",
  title: "RPA + Agente IA: Reportes de Costos en minería",
  description:
    "Se automatizaron los reportes de costos de una empresa minera de cobre en Chile con RPA y un agente de IA que responde preguntas en lenguaje natural, eliminando la dependencia de una sola persona.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.casosDeExito),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-03-20",
  image: {
    src: null,
    urlRelative: "/blog/caso-exito-rpa-ia-mineria-costos/header.jpeg",
    alt: "Automatización RPA e IA en minería del cobre Chile",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          En la minería del cobre, cada decisión de mantención impacta directamente en la productividad de la operación. Sin embargo, la información necesaria para tomar esas decisiones muchas veces está atrapada en sistemas complejos, accesible solo para quienes saben navegarlos.
        </p>
        <p className={styles.p}>
          Este ejemplo muestra cómo una <strong>empresa minera de cobre con operaciones en el norte de Chile</strong> transformó su acceso a información de costos mediante la combinación de <strong>RPA (Robotic Process Automation)</strong> y un <strong>agente de inteligencia artificial</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El Desafío: Reportes manuales y dependencia de una sola persona</h2>
        <p className={styles.p}>
          La gerencia de mantención generaba reportes semanales y mensuales de costos extrayendo datos de SAP a través de un plugin de Excel (SAP Analysis). El proceso requería:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Conectarse a SAP</strong> y aplicar múltiples filtros por jerarquía: centro de costo, clase de gasto, período.</li>
          <li className={styles.li}><strong>Excluir mano de obra</strong> y comparar real vs. presupuesto (budget) vs. ejercicios internos (8+4).</li>
          <li className={styles.li}><strong>Crear tablas resumen</strong>, gráficos en PowerPoint y Canva.</li>
          <li className={styles.li}><strong>Redactar correos</strong> con highlights para la gerencia.</li>
        </ul>
        <p className={styles.p}>
          Todo este proceso era manual, tomaba horas cada semana, y dependía de una sola persona. Si ella no estaba disponible, <strong>el reporte simplemente no se hacía</strong>. Además, las preguntas ad-hoc sobre costos requerían que alguien abriera SAP y filtrara manualmente cada vez.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La Solución: Robot RPA + Agente IA</h2>
        <p className={styles.p}>
          Se implementó una solución en dos capas que transformó completamente el acceso a información de costos:
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Robot RPA:</strong> Replica el proceso completo de extracción, filtrado y generación de reportes desde SAP vía Excel. El bot se conecta a SAP Analysis, aplica todos los filtros necesarios, extrae los datos y genera las tablas de comparación automáticamente.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Agente de IA:</strong> Conectado a la base de datos de costos, responde preguntas en lenguaje natural: &quot;¿Cuánto llevamos gastado en concentradora este mes?&quot;, &quot;¿Cuáles fueron los 5 ítems de mayor gasto?&quot;
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Generación automática de entregables:</strong> Borrador de correo y presentación PowerPoint con highlights para revisión humana antes del envío.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Disponibilidad 24/7:</strong> Datos actualizados disponibles sin depender de una persona específica.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Tecnologías Utilizadas</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>RPA:</strong> Rocketbot</li>
          <li className={styles.li}><strong>ERP:</strong> SAP Analysis (plugin de Excel)</li>
          <li className={styles.li}><strong>Agente IA:</strong> Python + modelo de lenguaje</li>
          <li className={styles.li}><strong>Reportería:</strong> Excel, PowerPoint</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Resultados</h2>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Automatización completa</strong> de reportes que antes tomaban horas de trabajo manual semanal.</li>
          <li className={styles.li}><strong>Democratización del acceso a datos:</strong> cualquier gerente puede consultar al agente directamente.</li>
          <li className={styles.li}><strong>Eliminación del key-person risk:</strong> la información ya no depende de una sola persona.</li>
          <li className={styles.li}><strong>Puente hacia automatización completa</strong> con acceso directo a SAP en la fase siguiente.</li>
        </ul>
      </section>

      <section className="space-y-3 p-6 rounded-xl border-l-4 border-cyan-400" style={{ backgroundColor: "rgba(3, 150, 149, 0.1)" }}>
        <h3 className={styles.h3}>💡 Insight Estratégico</h3>
        <p className={styles.p}>
          El mayor valor no fue automatizar el reporte sino descubrir que <strong>nadie lo leía cuando se enviaba por correo</strong>. La responsable del área mencionó: &quot;Les mando un PDF de tres hojas y nadie lo mira.&quot;
        </p>
        <p className={styles.p}>
          El agente IA resolvió esto: en vez de enviar informes que nadie consume, la información está disponible para consultar cuando el gerente realmente la necesita, <strong>en el momento de tomar una decisión</strong>.
        </p>
        <p className={`${styles.p} font-semibold text-cyan-400`}>
          La lección: no automatices el envío de reportes, automatiza el acceso a la información.
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
