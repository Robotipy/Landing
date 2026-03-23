import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "caso-exito-automatizacion-ordenes-sap-siderurgia",
  title: "Órdenes SAP automatizadas en siderurgia",
  description:
    "Se automatizó el ciclo completo de órdenes de compra en una empresa siderúrgica: desde la lectura de tickets hasta la creación de pedidos en SAP, sin intervención manual.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.casosDeExito),
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-03-19",
  image: {
    src: null,
    urlRelative: "/blog/caso-exito-automatizacion-ordenes-sap-siderurgia/header.jpeg",
    alt: "Automatización RPA SAP siderurgia Chile",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          Cuando una empresa opera con tres sistemas que no se hablan entre sí, la tentación es comprar un cuarto sistema integrador. Pero hay una alternativa más rápida y menos riesgosa.
        </p>
        <p className={styles.p}>
          Este caso muestra cómo un <strong>grupo siderúrgico con operaciones en Chile y presencia internacional</strong> conectó sus sistemas desconectados mediante <strong>RPA</strong>, sin tocar una sola API.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El Desafío: Tres sistemas desconectados</h2>
        <p className={styles.p}>
          La gestión de órdenes de compra involucraba tres sistemas que no se comunicaban entre sí:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Sistema de tickets (CRM):</strong> Tickets con PDFs de órdenes de compra adjuntos.</li>
          <li className={styles.li}><strong>SAP (ERP):</strong> Donde se crean los pedidos con la transacción VA01.</li>
          <li className={styles.li}><strong>Portal del cliente retail:</strong> Donde se consultan y validan órdenes.</li>
        </ul>
        <p className={styles.p}>
          Un operador debía abrir cada ticket en el sistema de tickets, extraer datos del PDF adjunto, ingresar manualmente a SAP para crear el pedido, anotar el número generado, volver al sistema de tickets a actualizar el estado, y luego verificar en el portal del cliente. <strong>Cada ciclo tomaba minutos y era propenso a errores de transcripción.</strong>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La Solución: Robot RPA como integrador</h2>
        <p className={styles.p}>
          Se implementó un robot RPA que ejecuta el ciclo completo de forma autónoma:
        </p>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Lectura de tickets:</strong> El bot lee cada ticket del sistema de tickets y extrae los datos del PDF de orden de compra adjunto mediante OCR.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Creación en SAP:</strong> Con los datos extraídos, crea el pedido en SAP (transacción VA01) y captura el número de pedido generado.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Actualización de CRM:</strong> Vuelve al sistema de tickets para actualizar el ticket con el número de pedido y el estado.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Validación en portal:</strong> Módulo adicional para consultar, filtrar y extraer órdenes del portal del cliente automáticamente.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Validación de datos:</strong> Reglas de negocio aplicadas antes del ingreso a SAP para prevenir errores.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Tecnologías Utilizadas</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>RPA:</strong> Rocketbot</li>
          <li className={styles.li}><strong>ERP:</strong> SAP VA01</li>
          <li className={styles.li}><strong>CRM:</strong> Sistema de tickets</li>
          <li className={styles.li}><strong>Portal:</strong> Portal del cliente retail</li>
          <li className={styles.li}><strong>Otros:</strong> Excel, OCR</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Resultados</h2>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Proceso de minutos reducido</strong> a ejecución automatizada sin intervención humana.</li>
          <li className={styles.li}><strong>Eliminación de errores de transcripción</strong> entre los tres sistemas.</li>
          <li className={styles.li}><strong>Trazabilidad completa y auditable</strong> de cada orden procesada.</li>
          <li className={styles.li}><strong>Liberación del equipo comercial</strong> para tareas de mayor valor.</li>
        </ul>
      </section>

      <section className="space-y-3 p-6 rounded-xl border-l-4 border-cyan-400" style={{ backgroundColor: "rgba(3, 150, 149, 0.1)" }}>
        <h3 className={styles.h3}>💡 Insight Estratégico</h3>
        <p className={styles.p}>
          Cuando una empresa tiene tres sistemas que no se hablan entre sí, la tentación es comprar un cuarto sistema integrador. La realidad es que <strong>RPA puede conectarlos en semanas, no meses</strong>, sin tocar las APIs de ninguno.
        </p>
        <p className={`${styles.p} font-semibold text-cyan-400`}>
          El robot hace exactamente lo que hace el humano: abre, copia, pega, valida. Es la integración más rápida y menos riesgosa que existe.
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
