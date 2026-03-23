import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "caso-exito-conciliacion-bancaria-agropecuario",
  title: "Conciliación multi-banco con ERP automatizada",
  description:
    "Se automatizó la conciliación de múltiples bancos con el ERP Finnegans en un grupo agropecuario en Argentina, ejecutando en minutos lo que antes tomaba horas.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.casosDeExito),
    categories.find((category) => category.slug === categorySlugs.fintech),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-03-15",
  image: {
    src: null,
    urlRelative: "/blog/caso-exito-conciliacion-bancaria-agropecuario/header.jpeg",
    alt: "Conciliación bancaria automatizada agropecuario Argentina",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          En agronegocios argentinos, la gestión multi-banco es particularmente compleja por la cantidad de operaciones, las regulaciones cambiantes y la diversidad de plataformas bancarias.
        </p>
        <p className={styles.p}>
          Este caso muestra cómo un <strong>grupo agropecuario con operaciones en múltiples provincias de Argentina</strong> automatizó su conciliación bancaria multi-entidad con <strong>RPA</strong>, conectando múltiples bancos con su ERP Finnegans.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El Desafío: Múltiples bancos, un ERP, cero integración</h2>
        <p className={styles.p}>
          El grupo operaba con múltiples bancos y utilizaba el ERP Finnegans para su gestión financiera. Los problemas eran claros:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Múltiples portales bancarios:</strong> Banco Córdoba, Banco Galicia, entre otros, cada uno con su propia interfaz y formato de datos.</li>
          <li className={styles.li}><strong>Conciliación manual:</strong> El equipo contable debía ingresar a cada portal bancario, descargar movimientos, y cruzarlos manualmente con Finnegans.</li>
          <li className={styles.li}><strong>Dispersión geográfica:</strong> Operaciones en múltiples provincias hacían el proceso especialmente tedioso.</li>
          <li className={styles.li}><strong>Multiplicidad de cuentas:</strong> Cada entidad del grupo tenía sus propias cuentas en diferentes bancos.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La Solución: Robot RPA multi-banco</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Extracción multi-banco:</strong> Robot RPA que ingresa a múltiples portales bancarios y extrae movimientos automáticamente.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Cruce automático con ERP:</strong> Los movimientos se cruzan automáticamente con los registros del ERP Finnegans.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Detección de discrepancias:</strong> Identificación automática de diferencias y generación de reporte de excepciones.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Ejecución programada:</strong> Ejecución diaria sin intervención humana, con conexión remota vía AnyDesk para operación desde cualquier ubicación.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Tecnologías Utilizadas</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>RPA:</strong> Rocketbot</li>
          <li className={styles.li}><strong>ERP:</strong> Finnegans</li>
          <li className={styles.li}><strong>Bancos:</strong> Banco Córdoba, Banco Galicia y otros</li>
          <li className={styles.li}><strong>Acceso remoto:</strong> AnyDesk</li>
          <li className={styles.li}><strong>Otros:</strong> Python</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Resultados</h2>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Conciliación multi-banco ejecutada en minutos</strong>, no horas.</li>
          <li className={styles.li}><strong>Visión consolidada</strong> de posición financiera del grupo.</li>
          <li className={styles.li}><strong>Reducción de errores de cuadre</strong> entre bancos y ERP.</li>
          <li className={styles.li}><strong>Escalabilidad:</strong> mismo bot adaptable a nuevas cuentas o bancos.</li>
        </ul>
      </section>

      <section className="space-y-3 p-6 rounded-xl border-l-4 border-cyan-400" style={{ backgroundColor: "rgba(3, 150, 149, 0.1)" }}>
        <h3 className={styles.h3}>💡 Insight Estratégico</h3>
        <p className={styles.p}>
          En agronegocios argentinos, la gestión multi-banco es particularmente compleja por la cantidad de operaciones, las regulaciones cambiantes y la diversidad de plataformas bancarias.
        </p>
        <p className={styles.p}>
          <strong>Un solo robot conectando 3 bancos con 1 ERP</strong> hace el trabajo de lo que antes requería una persona dedicada.
        </p>
        <p className={`${styles.p} font-semibold text-cyan-400`}>
          El modelo partner (SCTI/Robotipy) permitió al cliente acceder a tecnología RPA sin tener que contratar un equipo interno.
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
