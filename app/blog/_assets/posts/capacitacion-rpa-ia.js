import Image from "next/image";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg"; // TODO: Replace
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "capacitacion-rpa-ia",
  title: "Capacitación en RPA e IA: Importancia de formar equipos técnicos",
  description:
    "La tecnología por sí sola no transforma empresas; las personas sí. Descubre por qué la capacitación en RPA e IA es la mejor inversión para tu equipo.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.capacitacion),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-01-21",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg", // TODO: Update
    alt: "Capacitacion RPA IA",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          Comprar licencias de software es fácil. Implementarlas con éxito y mantenerlas en el tiempo es lo difícil. Uno de los principales motivos de fracaso en los proyectos de transformación digital no es la tecnología, sino la <strong>brecha de habilidades</strong> en los equipos internos.
        </p>
        <p className={styles.p}>
          Invertir en capacitación en RPA (Automatización Robótica de Procesos) e Inteligencia Artificial no es un gasto, es el seguro de vida de tu proyecto de innovación.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>¿Por qué capacitar a tu equipo interno?</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong className={styles.strong}>Autonomía y Velocidad:</strong> Un equipo capacitado puede resolver incidencias menores y realizar mantenimientos sin depender constantemente de consultores externos. Esto reduce el tiempo de inactividad de los bots.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Identificación de Oportunidades:</strong> Nadie conoce mejor los procesos de tu empresa que tus propios empleados. Al entender qué puede hacer la tecnología, ellos mismos se convierten en los principales generadores de ideas para nuevas automatizaciones.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Retención de Talento:</strong> Los profesionales de TI valoran el aprendizaje continuo. Ofrecer formación en tecnologías de vanguardia como Python, Rocketbot o IA aumenta la satisfacción y lealtad del equipo.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>¿Qué debe incluir un programa de formación?</h3>
        <p className={styles.p}>
          No basta con un curso teórico. La formación efectiva debe ser práctica y orientada a roles:
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Para Desarrolladores:</strong> Profundización en lógica de programación, manejo de excepciones, integración de APIs y buenas prácticas de arquitectura RPA.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Para Analistas de Negocio:</strong> Cómo documentar procesos para automatización (PDD), cálculo de ROI y gestión del cambio.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Para Operadores:</strong> Cómo monitorear, ejecutar y detener robots de manera segura (Orquestación).
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>El Modelo de Centro de Excelencia (CoE)</h3>
        <p className={styles.p}>
          El objetivo final de la capacitación es establecer un <strong>Centro de Excelencia (CoE)</strong> interno. Este equipo multidisciplinario lidera la estrategia de automatización, establece estándares y asegura que la tecnología escale de manera ordenada y segura en toda la organización.
        </p>
        <p className={styles.p}>
          En Robotipy, no solo implementamos soluciones; transferimos conocimiento. Nuestros programas de capacitación están diseñados para que tu equipo tome el control.
        </p>
        <div className="flex justify-center mt-5 py-5">
          <ButtonMain text="Conoce nuestros programas de capacitación" link="/capacitaciones" noblank={true} />
        </div>
      </section>
    </>
  ),
};
