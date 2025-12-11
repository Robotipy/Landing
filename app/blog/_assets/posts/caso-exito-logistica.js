import Image from "next/image";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/caso-exito-logistica/header.jpeg"
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "caso-exito-logistica",
  title: "Caso de éxito Robotipy: Implementación de RPA en logística y retail",
  description:
    "Analizamos cómo una empresa de retail optimizó su cadena de suministro y redujo tiempos de entrega mediante la automatización de procesos logísticos.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.logistica),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2025-12-24",
  image: {
    src: thumbnail,
    urlRelative: "/blog/caso-exito-logistica/header.jpeg", 
    alt: "Caso Exito Logistica RPA",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          La logística moderna es una carrera contra el tiempo. En el sector retail, la promesa de &quot;entrega en 24 horas&quot; ha pasado de ser una ventaja competitiva a un estándar de la industria. Sin embargo, detrás de esa promesa, muchas empresas luchan con procesos manuales, desconexión entre sistemas y errores de inventario.
        </p>
        <p className={styles.p}>
          En este caso de estudio, exploramos cómo ayudamos a un importante actor del retail a transformar su operación logística mediante <strong>RPA (Robotic Process Automation)</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>El Desafío: Cuellos de Botella en el Despacho</h3>
        <p className={styles.p}>
          El cliente enfrentaba un problema crítico: su volumen de ventas online crecía, pero su capacidad de procesamiento de órdenes estaba estancada. Los desafíos incluían:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Entrada manual de pedidos:</strong> Los pedidos de diferentes marketplaces (MercadoLibre, Sitio Web, Falabella) debían ingresarse manualmente al ERP.</li>
          <li className={styles.li}><strong>Generación de etiquetas:</strong> El equipo de bodega dedicaba 4 horas diarias a generar e imprimir etiquetas de envío en los portales de los couriers.</li>
          <li className={styles.li}><strong>Errores de Stock:</strong> La falta de sincronización en tiempo real provocaba ventas de productos sin stock (quiebres), dañando la reputación de la marca.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>La Solución: Orquestación Digital</h3>
        <p className={styles.p}>
          Implementamos una fuerza de trabajo digital compuesta por 3 robots RPA especializados:
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Bot Integrador de Pedidos:</strong> Monitorea constantemente todos los canales de venta. Al detectar una nueva orden, la inyecta automáticamente en el ERP en menos de 30 segundos.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Bot de Logística Inversa y Etiquetas:</strong> Toma los datos del pedido, se conecta al portal del courier (Chilexpress, BlueExpress, Starken), genera la etiqueta de envío y la envía a la impresora de bodega automáticamente.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Bot de Sincronización de Inventario:</strong> Actualiza el stock en todos los canales de venta cada 15 minutos, asegurando consistencia total.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Resultados Cuantificables</h3>
        <p className={styles.p}>
          Tras 3 meses de implementación, los resultados transformaron la operación:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Reducción del 90% en tiempo de procesamiento de pedidos.</strong></li>
          <li className={styles.li}><strong>Eliminación del 100% de errores de digitación</strong> en direcciones de despacho.</li>
          <li className={styles.li}><strong>Ahorro de 40 horas semanales</strong> del equipo administrativo, reasignadas a atención al cliente.</li>
          <li className={styles.li}><strong>Aumento del 15% en ventas</strong> al evitar quiebres de stock por mala sincronización.</li>
        </ul>
        <p className={styles.p}>
          La automatización no solo redujo costos, sino que habilitó la escalabilidad necesaria para afrontar eventos de alta demanda sin contratar personal temporal excesivo.
        </p>
        <div className="flex justify-center mt-4">
          <ButtonMain text="Ver más Casos de Éxito" link="/casos-exito" type="primary"/>
        </div>
      </section>
    </>
  ),
};
