import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import ButtonMain from "@/components/ButtonMain.js";

export const post = {
  slug: "caso-exito-inteligencia-mercado-agronegocios",
  locale: "es",
  title: "Inteligencia de mercado automatizada para el campo",
  description:
    "Se automatizó el monitoreo diario de precios de commodities, tasas bancarias y datos macro de más de 10 fuentes públicas para una consultora de agronegocios en Argentina.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.casosDeExito),
    categories.find((category) => category.slug === categorySlugs.agtech),
  ],
  author: authors.find((author) => author.slug === authorSlugs.DaniloToro),
  publishedAt: "2026-03-18",
  image: {
    src: null,
    urlRelative: "/blog/caso-exito-inteligencia-mercado-agronegocios/header.jpeg",
    alt: "Automatización inteligencia de mercado agronegocios Argentina",
  },
  content: (
    <>
      <section className="space-y-3">
        <p className={styles.p}>
          RPA no es solo para grandes corporaciones con SAP. Una consultora pequeña puede usar un robot para tener inteligencia de mercado a nivel de Bloomberg, pero para su nicho específico.
        </p>
        <p className={styles.p}>
          Este caso muestra cómo una <strong>consultora de agronegocios especializada en asesoría financiera y productiva para el campo en Argentina</strong> automatizó su proceso de inteligencia de mercado con <strong>RPA y web scraping</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>El Desafío: 10+ fuentes públicas, horas de trabajo manual</h2>
        <p className={styles.p}>
          La consultora necesitaba monitorear diariamente precios de commodities agrícolas (granos, ganadería), tasas bancarias de crédito agro, y datos macroeconómicos de más de 10 fuentes públicas diferentes:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>Cámara Arbitral de Rosario</li>
          <li className={styles.li}>Portales de hacienda: Campo a Campo, Entre Surcos y Corrales</li>
          <li className={styles.li}>Banco Provincia (tasas de crédito agro)</li>
          <li className={styles.li}>INDEC y Ministerio de Economía</li>
          <li className={styles.li}>Agroseries y más portales especializados</li>
        </ul>
        <p className={styles.p}>
          El proceso manual era insostenible: abrir cada página, navegar, extraer datos, consolidar en Excel, calcular promedios acumulativos y distribuir. <strong>Tomaba horas y era propenso a errores</strong>, especialmente con fuentes que cambian formato frecuentemente.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>La Solución: Bot RPA con scraping inteligente</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong className={styles.strong}>Extracción automatizada:</strong> Bot RPA que recorre automáticamente 10+ fuentes web públicas extrayendo precios de granos, precios y pesos de ganadería (novillitos, vacas, terneros), y tasas de crédito agro.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Consolidación inteligente:</strong> Datos consolidados en Excel estructurado con promedios mensuales acumulativos y datos históricos (60 días retrospectivos).
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Distribución automática:</strong> Envío por correo electrónico + copia en Google Drive compartido.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>Manejo de excepciones:</strong> Cuando una página falla o no tiene datos, el bot notifica y continúa con las demás fuentes.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h3 className={styles.h3}>Tecnologías Utilizadas</h3>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>RPA:</strong> Rocketbot</li>
          <li className={styles.li}><strong>Scraping:</strong> Web Scraping con Python</li>
          <li className={styles.li}><strong>Datos:</strong> Excel con promedios acumulativos</li>
          <li className={styles.li}><strong>Distribución:</strong> Google Drive, Email</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className={styles.h2}>Resultados</h2>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Proceso de horas reducido a 10-20 minutos</strong> de ejecución automatizada.</li>
          <li className={styles.li}><strong>Datos disponibles diariamente</strong> para análisis interno y reuniones con clientes.</li>
          <li className={styles.li}><strong>Cobertura de 10+ fuentes simultáneas</strong> que sería imposible mantener manualmente.</li>
          <li className={styles.li}><strong>Información consolidada</strong> utilizada directamente como soporte para decisiones de inversión agrícola.</li>
        </ul>
      </section>

      <section className="space-y-3 p-6 rounded-xl border-l-4 border-cyan-400" style={{ backgroundColor: "rgba(3, 150, 149, 0.1)" }}>
        <h3 className={styles.h3}>💡 Insight Estratégico</h3>
        <p className={styles.p}>
          Este caso demuestra que <strong>RPA no es solo para grandes corporaciones con SAP</strong>. Una consultora pequeña puede usar un robot para tener inteligencia de mercado a nivel de Bloomberg, pero para su nicho específico.
        </p>
        <p className={styles.p}>
          Como se identificó durante el proyecto: los datos son valiosos no cuando los envías, sino <strong>cuando te sientas a analizarlos en una reunión de decisión</strong>.
        </p>
        <p className={`${styles.p} font-semibold text-cyan-400`}>
          El bot no reemplazó al analista, le dio la materia prima para que haga su trabajo real: pensar.
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
