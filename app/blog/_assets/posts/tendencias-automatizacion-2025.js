import Image from "next/image";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg"; // TODO: Replace
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "tendencias-automatizacion-2025",
  title: "Tendencias 2025 en Automatización e IA: Qué esperar en Latinoamérica",
  description:
    "Exploramos las tendencias tecnológicas que definirán el 2025 en LatAm: Hiperautomatización, IA Generativa y la democratización del desarrollo de software.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
    categories.find((category) => category.slug === categorySlugs.fintech), // Relevant for trends
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-01-07",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg", // TODO: Update
    alt: "Tendencias Automatizacion 2025",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          El ritmo de la innovación tecnológica se ha acelerado exponencialmente. Lo que en 2023 era novedad, en 2025 será el estándar. Para las empresas en Latinoamérica, mantenerse al día no es solo una cuestión de vanguardia, sino de supervivencia.
        </p>
        <p className={styles.p}>
          Analizamos las 3 tendencias clave que dominarán la agenda de los CIOs y líderes empresariales en la región durante el próximo año.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>1. Hiperautomatización: RPA + IA</h3>
        <p className={styles.p}>
          La era de los bots simples que solo siguen reglas ha terminado. La tendencia es la <strong>Hiperautomatización</strong>, que combina RPA con Inteligencia Artificial (Machine Learning, NLP, OCR inteligente).
        </p>
        <p className={styles.p}>
          Ya no se trata solo de mover datos de A a B. Ahora, los sistemas pueden leer documentos no estructurados (contratos, facturas escaneadas), entender el contenido, tomar decisiones basadas en probabilidades y ejecutar acciones complejas. En 2025, veremos una adopción masiva de estas tecnologías en sectores tradicionales como la banca y el agro.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>2. IA Generativa en Procesos Corporativos</h3>
        <p className={styles.p}>
          Herramientas como ChatGPT o Claude dejarán de ser juguetes curiosos para integrarse profundamente en los flujos de trabajo.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Generación automática de reportes:</strong> Resumir miles de datos en informes ejecutivos legibles.</li>
          <li className={styles.li}><strong>Asistentes de codificación:</strong> Acelerando el desarrollo de software a medida.</li>
          <li className={styles.li}><strong>Personalización masiva:</strong> Crear correos de marketing únicos para cada cliente a escala.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>3. Democratización del Desarrollo (Low-Code/No-Code)</h3>
        <p className={styles.p}>
          La escasez de talento TI en LatAm seguirá siendo un desafío. La respuesta será el auge de plataformas Low-Code y No-Code, permitiendo que los "Citizen Developers" (empleados no técnicos) creen sus propias automatizaciones simples.
        </p>
        <p className={styles.p}>
          Sin embargo, esto trae el desafío de la gobernanza. Las empresas deberán equilibrar la agilidad con la seguridad y el control centralizado para evitar el "Shadow IT".
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Conclusión</h3>
        <p className={styles.p}>
          El 2025 será el año de la integración. Las tecnologías dejarán de verse como silos separados y comenzarán a trabajar en orquesta. Las empresas que logren unificar RPA, IA y análisis de datos tendrán una ventaja competitiva inalcanzable para quienes sigan operando manualmente.
        </p>
        <div className="flex justify-center mt-4">
          <ButtonMain text="Prepara tu empresa para el futuro" link="/contact-us" type="primary"/>
        </div>
      </section>
    </>
  ),
};
