import Image from "next/image";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles.js";
import thumbnail from "@/public/blog/porque-elegir-rocketbot/header.jpeg"; // TODO: Replace
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "porque-elegir-rocketbot",
  title: "¿Por qué elegir Rocketbot para tu automatización?",
  description:
    "Descubre por qué Rocketbot es la mejor herramienta para automatizar tus procesos. Con Rocketbot, puedes automatizar tus procesos de manera sencilla y eficiente.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-01-01",
  image: {
    src: thumbnail,
    urlRelative: "/blog/porque-elegir-rocketbot/header.jpeg", // TODO: Update
    alt: "Porque Elegir Rocketbot",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
        Si llevas tiempo en el mundo de la automatización, seguramente te has topado con la "paradoja de la escalabilidad": empiezas automatizando un par de procesos con resultados increíbles, pero cuando quieres escalar a toda la empresa, los costos de licencias e infraestructura se disparan, comiéndose tu ROI.
        </p>
        <p className={styles.p}>
        Aquí es donde entra <strong>Rocketbot</strong>. No es solo otra herramienta de RPA; es una reingeniería completa de cómo pensamos la automatización. Mientras los gigantes como UiPath o Automation Anywhere te cobran por cada robot, Rocketbot te cobra por productividad.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Se eliminó el Modelo "1 Bot = 1 Máquina" (Y tu presupuesto lo agradecerá)</h3>
        <p className={styles.p}>
        El estándar de la industria ha sido siempre cobrarte una licencia por cada robot, y ese robot bloquea una máquina completa mientras trabaja. Si quieres hacer tres cosas a la vez, necesitas tres licencias y tres máquinas. Eso es el pasado.
        </p>
        <p className={styles.p}>
        Rocketbot introduce una arquitectura de Procesamiento Paralelo.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
          ¿Qué significa? Que bajo una sola licencia (como la On-Premise L), puedes ejecutar hasta 10 procesos simultáneamente en una misma máquina.
          </li>
          <li className={styles.li}>
          El Impacto: Imagina triplicar tu fuerza de trabajo digital sin pagar de más en licencias de software. Esto reduce drásticamente tu TCO (Costo Total de Propiedad) y hace viable automatizar procesos que antes eran demasiado costosos.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Python en el ADN: Flexibilidad sin "Cajas Negras"</h3>
        <p className={styles.p}>
        Mientras otros te encierran en ecosistemas propietarios basados en.NET, Rocketbot es nativo en Python.
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>
          <strong className={styles.strong}>Para los Desarrolladores:</strong> Acceso directo al ecosistema de programación más grande del mundo. 
          ¿Necesitas usar una librería avanzada de Machine Learning como TensorFlow o manipular datos masivos con Pandas? 
          En Rocketbot es nativo. No necesitas comprar "skills" extra ni complementos costosos de IA. <strong>Los modulos son de código abierto</strong>.
          </li>
          <li className={styles.li}>
          <strong className={styles.strong}>Para el Negocio:</strong> Significa que tus robots son más inteligentes, más rápidos y capaces de adaptarse a cualquier tecnología nueva que aparezca mañana, sin depender del roadmap de un proveedor cerrado.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>¿Servidores Linux? Sí, por favor</h3>
        <p className={styles.p}>
          La mayoría de los RPAs tradicionales te obligan a usar servidores Windows. Eso significa pagar licencias de Windows Server, consumir más recursos de hardware y lidiar con actualizaciones constantes.
        </p>
        <p className={styles.p}>
        <strong className={styles.strong}>Rocketbot</strong> es verdaderamente <strong className={styles.strong}>Multiplataforma.</strong> Corre nativamente en Linux, Windows y MacOS.
        </p>
      </section>
      <section className="space-y-3">
        <h3 className={styles.h3}>Soporte que Entiende tu Idioma y tu Cultura</h3>
        <p className={styles.p}>
          Seamos honestos, cuando tienes un problema crítico en producción, no quieres abrir un ticket que será respondido en 48 horas desde un huso horario opuesto.
        </p>
        <p className={styles.p}>
        <strong className={styles.strong}>Rocketbot</strong>, con sus raíces en Latinoamérica, ofrece un soporte técnico que ha sido calificado con 9.1/10 en G2, superando a competidores globales.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Cercanía: Soporte en español directo con el equipo de desarrollo de Rocketbot, en tu zona horaria y con una comprensión real de cómo operan los negocios en la región.
          </li>
          <li className={styles.li}>Comunidad: Una red creciente de partners y desarrolladores que comparten soluciones reales para problemas locales.
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className={styles.h3}>Casos de Éxito que Hablan por Sí Solos
        </h3>
        <p className={styles.p}>
        No tienes que confiar solo en nuestra palabra. Grandes corporaciones ya han validado el modelo:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><a href="https://www.agrosuper.cl/" target="_blank">Agrosuper:</a> Transformó su logística ahorrando más de 200,000 horas-hombre y acelerando sus procesos 5 veces.
          </li>
          <li className={styles.li}><a href="https://www.consorcio.cl/" target="_blank">Consorcio:</a> Logró un 100% de uso de sus licencias, generando ahorros anuales superiores a $109,000 USD al automatizar procesos críticos en el sector financiero.
          </li>
          <li className={styles.li}><a href="https://www.latamairlines.com/" target="_blank">LATAM Airlines:</a> Utiliza la tecnología para optimizar operaciones críticas en un mercado de alta demanda.
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <h3 className={styles.h3}>El veredicto?
        </h3>
        <p className={styles.p}>
        Si buscas una herramienta que te permita escalar sin penalizarte, que te dé la libertad técnica de Python y que te ofrezca un soporte cercano de clase mundial, la respuesta es clara.
        </p>
        <p className={styles.p}>Rocketbot no es solo una alternativa económica; es la evolución lógica del RPA hacia un modelo más eficiente, abierto y escalable.</p>
        <p className={styles.p}>Deje de pagar costos de licencias que penalizan su escalabilidad. 
          Agenda una evaluación técnica de su ecosistema actual y reciba una propuesta concreta que demuestre la reducción inmediata en su Costo Total de Propiedad (TCO) gracias a la arquitectura de <a href="https://rocketbot.io/" target="_blank">Rocketbot</a>.</p>
        <div className="flex justify-center mt-5 py-5">
          <ButtonMain text="Contactanos" link="/contact-us" noblank={true} />
        </div>
      </section>
      
       
    </>
  ),
};
