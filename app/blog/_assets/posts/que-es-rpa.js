import Image from "next/image";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg"; // TODO: Replace with specific image
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "que-es-rpa",
  title: "¿Qué es RPA? Introducción a la automatización de procesos empresariales",
  description:
    "Descubre qué es RPA (Automatización Robótica de Procesos), cómo funciona y por qué es clave para la transformación digital de tu empresa.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.tutoriales),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2025-11-26",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg", // TODO: Update
    alt: "¿Qué es RPA?",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          En el mundo empresarial actual, la eficiencia no es un lujo, es una necesidad. Aquí es donde entra en juego la <strong>RPA (Robotic Process Automation)</strong> o Automatización Robótica de Procesos. Pero, ¿qué es exactamente y por qué todos hablan de ella?
        </p>
        <p className={styles.p}>
          RPA es una tecnología que permite configurar software informático, o un "robot", para emular e integrar las acciones de una interacción humana en sistemas digitales para ejecutar un proceso comercial. Los robots RPA utilizan la interfaz de usuario para capturar datos y manipular aplicaciones tal como lo hacen los humanos.
        </p>
        <p className={styles.p}>
          Interpretan, activan respuestas y se comunican con otros sistemas para realizar una gran variedad de tareas repetitivas. Solo que sustancialmente mejor: un robot RPA nunca duerme y no comete errores.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>¿Cómo funciona RPA?</h3>
        <p className={styles.p}>
          Imagina a un trabajador digital que puede:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Iniciar sesión en aplicaciones.</li>
          <li className={styles.li}>Mover archivos y carpetas.</li>
          <li className={styles.li}>Copiar y pegar datos.</li>
          <li className={styles.li}>Rellenar formularios.</li>
          <li className={styles.li}>Extraer datos estructurados y semiestructurados de documentos.</li>
          <li className={styles.li}>Raspado de navegadores (Scraping).</li>
        </ul>
        <p className={styles.p}>
          La belleza de RPA es que es <strong>no invasiva</strong>. Se implementa sobre los sistemas de TI existentes sin necesidad de una integración compleja o profunda.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Beneficios Clave de RPA</h3>
        <p className={styles.p}>
          La adopción de RPA ofrece ventajas competitivas inmediatas:
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Precisión y Calidad:</strong> Los robots están programados para seguir reglas. No se cansan ni se distraen, eliminando el error humano.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Mejora en el Cumplimiento (Compliance):</strong> Al ejecutar procesos de manera estricta y registrar cada paso, la auditoría se vuelve mucho más sencilla.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Ahorro de Costos:</strong> Se estima que los robots pueden reducir los costos operativos hasta en un 30-50%.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Productividad:</strong> Los robots pueden trabajar 24/7/365, aumentando drásticamente el rendimiento.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Satisfacción del Empleado:</strong> Libera a tu equipo de tareas tediosas para que puedan enfocarse en trabajo estratégico y creativo.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Casos de Uso Comunes</h3>
        <p className={styles.p}>
          RPA es versátil y se aplica en casi todas las industrias:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Finanzas:</strong> Conciliación bancaria, procesamiento de facturas.</li>
          <li className={styles.li}><strong>Recursos Humanos:</strong> Onboarding de empleados, gestión de nóminas.</li>
          <li className={styles.li}><strong>Atención al Cliente:</strong> Procesamiento de pedidos, actualización de datos de clientes.</li>
          <li className={styles.li}><strong>Logística:</strong> Seguimiento de envíos, gestión de inventario.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>¿Por dónde empezar?</h3>
        <p className={styles.p}>
          La clave para una implementación exitosa de RPA es comenzar con el proceso correcto. Busca procesos que sean:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Altamente manuales y repetitivos.</li>
          <li className={styles.li}>Basados en reglas (poca ambigüedad).</li>
          <li className={styles.li}>Con datos estructurados y legibles digitalmente.</li>
          <li className={styles.li}>De alto volumen.</li>
        </ul>
        <p className={styles.p}>
          En <strong>Robotipy</strong>, ayudamos a las empresas a identificar estos procesos y a implementar soluciones de automatización que generan un retorno de inversión real.
        </p>
        <div className="flex justify-center mt-4">
          <ButtonMain text="Agenda una Consultoría Gratuita" link="/contact-us" type="primary"/>
        </div>
      </section>
    </>
  ),
};
