import Image from "next/image";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg"; // TODO: Replace
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "chatbots-ia-ecommerce",
  title: "Chatbots con IA para ventas y soporte: Cómo los asistentes virtuales mejoran el e-commerce",
  description:
    "Descubre cómo los chatbots impulsados por IA están revolucionando el e-commerce, mejorando la atención al cliente y aumentando las ventas 24/7.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa), // Using RPA as proxy for AI/Automation if no specific AI category
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2025-12-10",
  image: {
    src: thumbnail,
    urlRelative: "/blog/como-calcular-el-roi-en-proyectos-rpa/header.jpeg", // TODO: Update
    alt: "Chatbots IA Ecommerce",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          El comercio electrónico nunca duerme. Tus clientes esperan respuestas inmediatas, ya sea a las 3 de la tarde o a las 3 de la mañana. Aquí es donde los <strong>Chatbots con Inteligencia Artificial (IA)</strong> se convierten en el aliado estratégico indispensable para cualquier e-commerce moderno.
        </p>
        <p className={styles.p}>
          A diferencia de los chatbots tradicionales basados en reglas rígidas, los asistentes virtuales impulsados por IA (como los basados en LLMs) pueden entender el contexto, la intención y el sentimiento del usuario, ofreciendo una experiencia de conversación fluida y natural.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Más allá del Soporte: Venta Consultiva 24/7</h3>
        <p className={styles.p}>
          El rol tradicional del chatbot era reducir tickets de soporte. Hoy, su rol es vender. Un asistente de IA bien entrenado actúa como tu mejor vendedor en la tienda:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong className={styles.strong}>Recomendaciones Personalizadas:</strong> &quot;Veo que estás buscando zapatillas de running, ¿prefieres para asfalto o montaña?&quot;
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Recuperación de Carritos:</strong> Puede interactuar proactivamente con usuarios que dudan en el checkout.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Cross-selling Inteligente:</strong> Sugerir complementos basados en el historial de compra y navegación actual.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Beneficios Tangibles para tu E-commerce</h3>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Atención Inmediata:</strong> El tiempo de respuesta baja a cero. Esto aumenta drásticamente la tasa de conversión.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Escalabilidad Infinita:</strong> Un chatbot puede atender a 100 o 10.000 clientes simultáneamente sin perder calidad. En eventos como CyberDay o Black Friday, esto es crítico.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Reducción de Costos Operativos:</strong> Automatiza hasta el 80% de las consultas repetitivas (estado del pedido, devoluciones, horarios), liberando a tu equipo humano para casos complejos.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Integración con tus Sistemas</h3>
        <p className={styles.p}>
          Para que un chatbot sea realmente útil, no puede ser una isla. Debe estar integrado con tu ecosistema:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>ERP/WMS:</strong> Para informar sobre stock real y estado de envíos.</li>
          <li className={styles.li}><strong>CRM:</strong> Para reconocer al cliente y personalizar el trato.</li>
          <li className={styles.li}><strong>Pasarela de Pagos:</strong> Para facilitar transacciones dentro del chat.</li>
        </ul>
        <p className={styles.p}>
          En <strong>Robotipy</strong>, desarrollamos asistentes virtuales que se conectan profundamente con tu infraestructura tecnológica, transformando el chat en un canal de ingresos real.
        </p>
        <div className="flex justify-center mt-4">
          <ButtonMain text="Descubre nuestras soluciones de Chatbot" link="/chatbot" type="secondary"/>
        </div>
      </section>
    </>
  ),
};
