import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/que-es-rpa/header.jpeg";
import ButtonMain from "@/components/ButtonMain.js";

// Tailwind class helpers tailored for this post.
// Keep the visual structure of the original HTML (callouts, stat cards,
// diagrams, comparison tables, FAQ) but use the Robotipy dark palette
// (primary #00182B, accent teal rgb(3,150,149)).
const ui = {
  statGrid: "grid grid-cols-2 md:grid-cols-4 gap-4 my-8",
  statCard:
    "rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center",
  statVal: "text-3xl font-extrabold text-accent leading-none mb-2",
  statLbl: "text-xs text-white/70 leading-snug",

  toc:
    "rounded-xl border border-white/10 border-l-4 border-l-accent bg-white/5 p-6 my-8",
  tocTitle:
    "text-xs uppercase tracking-widest font-bold text-accent mb-3",
  tocList: "list-decimal pl-5 space-y-1.5 text-white/90 text-[15px]",

  analogy:
    "relative rounded-xl border-2 border-dashed border-accent bg-white/5 pt-10 px-7 pb-7 my-8 space-y-3",
  analogyTag:
    "absolute -top-3 left-6 bg-accent text-white text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-0.5",

  callout: (tone) =>
    `rounded-xl border-l-4 p-5 my-7 ${
      {
        blue: "border-accent bg-accent/10",
        green: "border-success bg-success/10",
        orange: "border-warning bg-warning/10",
        purple: "border-secondary bg-secondary/30",
      }[tone]
    }`,
  calloutTitle: (tone) =>
    `text-xs uppercase tracking-widest font-bold mb-2 ${
      {
        blue: "text-accent",
        green: "text-success",
        orange: "text-warning",
        purple: "text-white",
      }[tone]
    }`,

  table:
    "w-full border-collapse my-7 text-[15px] rounded-xl overflow-hidden",
  th:
    "bg-primary text-white text-left text-[13px] font-semibold px-4 py-3 border-b border-white/10",
  td: "px-4 py-3 border-b border-white/10 text-white/90",
  badge: (tone) =>
    `inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap ${
      {
        green: "bg-success/20 text-success",
        orange: "bg-warning/20 text-warning",
        gray: "bg-white/10 text-white/70",
      }[tone]
    }`,

  industryGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8",
  industryCard: (color) =>
    `rounded-xl border border-white/10 bg-white/5 p-5 border-t-4`,
  industryTitle: "text-base font-bold text-white mb-2",
  industryList:
    "list-disc pl-5 space-y-1 text-[14px] text-white/80 leading-relaxed",

  step:
    "flex gap-5 items-start rounded-xl border border-white/10 bg-white/5 p-5 mb-4",
  stepNum:
    "flex-shrink-0 w-11 h-11 rounded-full bg-accent text-white font-extrabold text-lg flex items-center justify-center",
  stepTitle: "text-white font-bold mb-1",
  stepBody: "text-white/80 text-[15px] leading-relaxed",

  quote:
    "border-l-4 border-accent bg-white/5 rounded-r-xl px-7 py-5 my-8 italic text-white text-lg",
  cite: "block mt-3 not-italic text-sm text-white/70 font-semibold",

  diagramWrap:
    "rounded-xl border border-white/10 bg-white/5 p-5 my-8 overflow-x-auto",
  figcaption:
    "text-center text-xs italic text-white/60 mt-3",

  faqItem:
    "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",

  cta:
    "rounded-2xl p-10 my-12 text-center text-white bg-gradient-to-br from-primary via-secondary to-accent/40",
  ctaTitle: "text-2xl md:text-3xl font-extrabold mb-3",
  ctaText: "text-white/80 max-w-xl mx-auto mb-7",
};

const slug = "rpa-con-peras-y-manzanas";

export const post = {
  slug,
  locale: "es",
  title: "RPA con Peras y Manzanas: Qué es la Automatización y Cómo Funciona",
  description:
    "Explicamos qué es RPA (Automatización Robótica de Procesos) de forma simple, sin tecnicismos. Casos reales, ejemplos por industria y cómo implementarlo en tu empresa en Chile y Argentina.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.GabrielToro),
  publishedAt: "2026-05-13",
  image: {
    src: thumbnail,
    urlRelative: "/blog/que-es-rpa/header.jpeg",
    alt: "RPA con peras y manzanas",
  },
  content: (
    <>
      {/* INTRO + STATS */}
      <section className="space-y-3">
        <p className={styles.p}>
          Cada semana alguien nos hace la misma pregunta:{" "}
          <strong className={styles.strong}>
            &quot;¿Qué es exactamente un bot RPA? ¿Es como un robot físico?
            ¿Necesito saber programar para usarlo? ¿Es caro?&quot;
          </strong>
        </p>
        <p className={styles.p}>
          Y nuestra respuesta siempre empieza igual: <em>con peras y manzanas</em>.
        </p>
        <p className={styles.p}>
          Sin jerga tecnológica, sin siglas misteriosas, sin promesas vacías. En
          este artículo vas a entender qué es la automatización robótica de
          procesos, cómo funciona, para qué sirve en una empresa real, y cómo
          calcular si le conviene a tu negocio. Con ejemplos concretos,
          diagramas y números.
        </p>

        <div className={ui.statGrid}>
          <div className={ui.statCard}>
            <div className={ui.statVal}>86%</div>
            <div className={ui.statLbl}>de empresas con RPA reportan mayor productividad</div>
          </div>
          <div className={ui.statCard}>
            <div className={ui.statVal}>10×</div>
            <div className={ui.statLbl}>más rápido que un empleado en tareas repetitivas</div>
          </div>
          <div className={ui.statCard}>
            <div className={ui.statVal}>24/7</div>
            <div className={ui.statLbl}>disponible, sin descansos ni errores humanos</div>
          </div>
          <div className={ui.statCard}>
            <div className={ui.statVal}>49%</div>
            <div className={ui.statLbl}>de las implementaciones globales son en PyMEs</div>
          </div>
        </div>
      </section>

      {/* TOC */}
      <nav className={ui.toc} aria-label="Tabla de contenidos">
        <div className={ui.tocTitle}>En este artículo</div>
        <ol className={ui.tocList}>
          <li><a href="#que-es-rpa" className="link link-hover">¿Qué es RPA? La explicación con peras y manzanas</a></li>
          <li><a href="#como-funciona" className="link link-hover">¿Cómo funciona un bot RPA?</a></li>
          <li><a href="#que-automatizar" className="link link-hover">¿Qué procesos puede automatizar?</a></li>
          <li><a href="#por-industria" className="link link-hover">Ejemplos reales por industria</a></li>
          <li><a href="#rpa-vs-otros" className="link link-hover">RPA vs. otras tecnologías</a></li>
          <li><a href="#para-pymes" className="link link-hover">¿RPA es para empresas grandes o también para PyMEs?</a></li>
          <li><a href="#roi" className="link link-hover">¿Cuánto cuesta y en cuánto tiempo recupero la inversión?</a></li>
          <li><a href="#como-implementar" className="link link-hover">Cómo implementar RPA paso a paso</a></li>
          <li><a href="#faq" className="link link-hover">Preguntas frecuentes</a></li>
        </ol>
      </nav>

      {/* SECCIÓN 1 */}
      <section id="que-es-rpa" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>1. ¿Qué es RPA? La explicación con peras y manzanas</h2>
        <p className={styles.p}>
          RPA son las siglas de <strong className={styles.strong}>Robotic Process Automation</strong>, o en español:{" "}
          <strong className={styles.strong}>Automatización Robótica de Procesos</strong>. Pero eso todavía no te dice mucho, ¿verdad?
        </p>
        <p className={styles.p}>Vamos con la analogía que da nombre a este artículo:</p>

        <div className={ui.analogy}>
          <span className={ui.analogyTag}>La analogía</span>
          <p className={styles.p}>
            Imagina que tienes un colaborador en tu empresa cuya tarea es, todos los días, abrir el sistema de ventas,
            copiar cada pedido a una planilla de Excel, enviarlo por correo al proveedor y luego registrarlo en el
            sistema contable.
          </p>
          <p className={styles.p}>
            Son exactamente los mismos pasos, en el mismo orden, con las mismas reglas. Siempre.{" "}
            <strong className={styles.strong}>Ese colaborador es una máquina de seguir instrucciones.</strong>
          </p>
          <p className={styles.p}>
            El problema: se equivoca, se cansa, tarda, está ausente algunos días y (seamos honestos) odia esa tarea.
          </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Un bot RPA es ese colaborador, pero digital.</strong> Hace exactamente los
            mismos pasos, en el mismo orden, sin errores, en minutos en vez de horas, y disponible los 365 días del año.
          </p>
        </div>

        <p className={styles.p}>La clave está en entender qué <strong className={styles.strong}>no</strong> es RPA:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>No es un robot físico ni mecánico.</li>
          <li className={styles.li}>No es inteligencia artificial (aunque puede combinarse con ella).</li>
          <li className={styles.li}>No modifica ni reemplaza los sistemas que ya usas.</li>
          <li className={styles.li}>No requiere que cambies tu software actual.</li>
        </ul>

        <p className={styles.p}>
          Un bot RPA trabaja <strong className={styles.strong}>sobre los sistemas que ya tienes</strong>, exactamente
          como lo haría una persona: abre el programa, hace clic, lee la pantalla, escribe datos, guarda y sigue al
          siguiente paso.
        </p>

        <div className={ui.callout("blue")}>
          <div className={ui.calloutTitle("blue")}>Definición en una oración</div>
          <p className={styles.p}>
            RPA es un software que imita las acciones de una persona frente a una computadora para ejecutar tareas
            repetitivas de forma automática, sin errores y sin descanso.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2 */}
      <section id="como-funciona" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>2. ¿Cómo funciona un bot RPA? (paso a paso)</h2>
        <p className={styles.p}>
          Para entender cómo opera un bot, tomemos un proceso muy común:{" "}
          <strong className={styles.strong}>la conciliación bancaria mensual</strong>. En muchas empresas, alguien pasa
          horas cruzando el estado de cuenta del banco con los registros del sistema contable.
        </p>
        <p className={styles.p}>Así lo haría una persona. Así lo hace un bot:</p>

        <figure className={ui.diagramWrap}>
          <svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagrama de flujo de cómo funciona un bot RPA en 6 pasos" className="w-full h-auto">
            <title>Cómo funciona un bot RPA</title>
            <defs>
              <marker id="arr-rpapm" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="rgb(3,150,149)" />
              </marker>
            </defs>

            <rect x="10" y="30" width="200" height="100" rx="10" fill="rgba(3,150,149,0.15)" stroke="rgb(3,150,149)" strokeWidth="2" />
            <rect x="280" y="30" width="200" height="100" rx="10" fill="rgba(3,150,149,0.15)" stroke="rgb(3,150,149)" strokeWidth="2" />
            <rect x="550" y="30" width="200" height="100" rx="10" fill="rgba(3,150,149,0.15)" stroke="rgb(3,150,149)" strokeWidth="2" />

            <circle cx="32" cy="52" r="14" fill="#00182B" />
            <text x="32" y="57" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">1</text>
            <circle cx="302" cy="52" r="14" fill="#00182B" />
            <text x="302" y="57" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">2</text>
            <circle cx="572" cy="52" r="14" fill="#00182B" />
            <text x="572" y="57" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">3</text>

            <text x="55" y="57" textAnchor="start" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial">El bot se activa</text>
            <text x="325" y="57" textAnchor="start" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial">Accede a los sistemas</text>
            <text x="595" y="57" textAnchor="start" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial">Extrae los datos</text>

            <text x="110" y="78" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">Automáticamente a la</text>
            <text x="110" y="93" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">hora programada o al</text>
            <text x="110" y="108" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">recibir un archivo</text>

            <text x="380" y="78" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">Abre el banco online,</text>
            <text x="380" y="93" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">el ERP, el correo</text>
            <text x="380" y="108" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">o cualquier sistema</text>

            <text x="650" y="78" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">Lee, copia y estructura</text>
            <text x="650" y="93" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">la información de cada</text>
            <text x="650" y="108" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">transacción</text>

            <line x1="212" y1="80" x2="276" y2="80" stroke="rgb(3,150,149)" strokeWidth="2" markerEnd="url(#arr-rpapm)" />
            <line x1="482" y1="80" x2="546" y2="80" stroke="rgb(3,150,149)" strokeWidth="2" markerEnd="url(#arr-rpapm)" />
            <line x1="650" y1="132" x2="650" y2="185" stroke="rgb(3,150,149)" strokeWidth="2" markerEnd="url(#arr-rpapm)" />

            <rect x="550" y="190" width="200" height="100" rx="10" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2" />
            <rect x="280" y="190" width="200" height="100" rx="10" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2" />
            <rect x="10" y="190" width="200" height="100" rx="10" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2" />

            <circle cx="572" cy="212" r="14" fill="#16a34a" />
            <text x="572" y="217" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">4</text>
            <circle cx="302" cy="212" r="14" fill="#16a34a" />
            <text x="302" y="217" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">5</text>
            <circle cx="32" cy="212" r="14" fill="#16a34a" />
            <text x="32" y="217" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">6</text>

            <text x="595" y="217" textAnchor="start" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial">Procesa y compara</text>
            <text x="325" y="217" textAnchor="start" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial">Registra y notifica</text>
            <text x="55" y="217" textAnchor="start" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="Arial">Reporta y cierra</text>

            <text x="650" y="238" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">Aplica las reglas del</text>
            <text x="650" y="253" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">proceso: si coincide OK,</text>
            <text x="650" y="268" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">si no, genera alerta</text>

            <text x="380" y="238" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">Ingresa los datos en el</text>
            <text x="380" y="253" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">sistema contable y envía</text>
            <text x="380" y="268" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">correo con diferencias</text>

            <text x="110" y="238" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">Genera reporte final,</text>
            <text x="110" y="253" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">archiva los documentos</text>
            <text x="110" y="268" textAnchor="middle" fill="#cfd8dc" fontSize="11.5" fontFamily="Arial">y espera el próximo mes</text>

            <line x1="546" y1="240" x2="484" y2="240" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arr-rpapm)" />
            <line x1="277" y1="240" x2="215" y2="240" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arr-rpapm)" />

            <rect x="10" y="330" width="740" height="36" rx="8" fill="#00182B" />
            <text x="380" y="353" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Arial">
              Tiempo del proceso: persona humana = 6–8 horas · Bot RPA = 18–25 minutos
            </text>
          </svg>
          <figcaption className={ui.figcaption}>
            Diagrama: Flujo de trabajo de un bot RPA para conciliación bancaria. 6 pasos, 18–25 minutos.
          </figcaption>
        </figure>

        <p className={styles.p}>
          Lo que acabas de ver aplica a prácticamente cualquier proceso repetitivo: el bot sigue los pasos exactamente
          igual cada vez, sin saltarse nada, sin cansarse y dejando un registro de cada acción.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section id="que-automatizar" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>3. ¿Qué procesos puede automatizar un bot RPA?</h2>
        <p className={styles.p}>
          La regla de oro para saber si un proceso es automatizable es hacerse estas 4 preguntas:
        </p>

        <figure className={ui.diagramWrap}>
          <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Regla de oro para detectar procesos automatizables con RPA" className="w-full h-auto">
            <title>Regla de oro para procesos automatizables</title>
            <circle cx="360" cy="130" r="70" fill="#00182B" stroke="rgb(3,150,149)" strokeWidth="2" />
            <text x="360" y="120" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">¿Es</text>
            <text x="360" y="137" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Arial">automatizable?</text>
            <text x="360" y="154" textAnchor="middle" fill="rgb(3,150,149)" fontSize="12" fontFamily="Arial">4 preguntas</text>

            <rect x="10" y="10" width="220" height="68" rx="10" fill="rgba(3,150,149,0.15)" stroke="rgb(3,150,149)" strokeWidth="1.5" />
            <text x="120" y="34" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="Arial">¿Es repetitivo?</text>
            <text x="120" y="52" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">¿Se hace de la misma forma</text>
            <text x="120" y="66" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">cada vez, con las mismas reglas?</text>
            <line x1="230" y1="44" x2="292" y2="90" stroke="rgb(3,150,149)" strokeWidth="1.5" strokeDasharray="4" />

            <rect x="490" y="10" width="220" height="68" rx="10" fill="rgba(3,150,149,0.15)" stroke="rgb(3,150,149)" strokeWidth="1.5" />
            <text x="600" y="34" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="Arial">¿Usa sistemas digitales?</text>
            <text x="600" y="52" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">¿El proceso ocurre en</text>
            <text x="600" y="66" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">una pantalla / computadora?</text>
            <line x1="490" y1="44" x2="428" y2="90" stroke="rgb(3,150,149)" strokeWidth="1.5" strokeDasharray="4" />

            <rect x="10" y="182" width="220" height="68" rx="10" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
            <text x="120" y="206" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="Arial">¿Tiene alto volumen?</text>
            <text x="120" y="224" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">¿Se ejecuta muchas veces</text>
            <text x="120" y="238" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">al día / semana / mes?</text>
            <line x1="230" y1="216" x2="292" y2="170" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4" />

            <rect x="490" y="182" width="220" height="68" rx="10" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5" />
            <text x="600" y="206" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="Arial">¿Las reglas son claras?</text>
            <text x="600" y="224" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">¿Se puede describir paso</text>
            <text x="600" y="238" textAnchor="middle" fill="#cfd8dc" fontSize="11" fontFamily="Arial">a paso sin ambigüedad?</text>
            <line x1="490" y1="216" x2="428" y2="170" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4" />
          </svg>
          <figcaption className={ui.figcaption}>
            Si respondes &quot;sí&quot; a las 4 preguntas, ese proceso es un candidato ideal para automatizar con RPA.
          </figcaption>
        </figure>

        <h3 className={styles.h3}>Los 10 procesos más automatizados en empresas de LATAM</h3>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Proceso</th>
                <th className={ui.th}>Área</th>
                <th className={ui.th}>Tiempo ahorrado típico</th>
                <th className={ui.th}>Dificultad</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={ui.td}>Conciliación bancaria</td><td className={ui.td}>Finanzas / Contabilidad</td><td className={ui.td}>5–8 horas/mes → 20 min</td><td className={ui.td}><span className={ui.badge("green")}>Fácil</span></td></tr>
              <tr><td className={ui.td}>Declaraciones tributarias (SII / AFIP)</td><td className={ui.td}>Contabilidad</td><td className={ui.td}>3–6 horas/mes → 30 min</td><td className={ui.td}><span className={ui.badge("green")}>Fácil</span></td></tr>
              <tr><td className={ui.td}>Emisión masiva de facturas</td><td className={ui.td}>Facturación</td><td className={ui.td}>4–10 horas/mes → 45 min</td><td className={ui.td}><span className={ui.badge("green")}>Fácil</span></td></tr>
              <tr><td className={ui.td}>Onboarding de empleados (RRHH)</td><td className={ui.td}>Recursos Humanos</td><td className={ui.td}>2–4 horas/empleado → 20 min</td><td className={ui.td}><span className={ui.badge("green")}>Fácil</span></td></tr>
              <tr><td className={ui.td}>Carga de pedidos en ERP</td><td className={ui.td}>Operaciones / Logística</td><td className={ui.td}>Eliminación de carga manual diaria</td><td className={ui.td}><span className={ui.badge("green")}>Fácil</span></td></tr>
              <tr><td className={ui.td}>Envío de reportes automáticos</td><td className={ui.td}>Gerencia / Comercial</td><td className={ui.td}>1–3 horas/semana → automático</td><td className={ui.td}><span className={ui.badge("green")}>Fácil</span></td></tr>
              <tr><td className={ui.td}>Seguimiento de envíos y logística</td><td className={ui.td}>Logística</td><td className={ui.td}>Alertas en tiempo real sin intervención</td><td className={ui.td}><span className={ui.badge("orange")}>Moderado</span></td></tr>
              <tr><td className={ui.td}>Atención de consultas frecuentes (chatbot)</td><td className={ui.td}>Atención al cliente</td><td className={ui.td}>80% de consultas resueltas sin humano</td><td className={ui.td}><span className={ui.badge("orange")}>Moderado</span></td></tr>
              <tr><td className={ui.td}>Procesamiento de solicitudes de seguros</td><td className={ui.td}>Seguros / Salud</td><td className={ui.td}>De días a horas</td><td className={ui.td}><span className={ui.badge("orange")}>Moderado</span></td></tr>
              <tr><td className={ui.td}>Validación de datos entre sistemas</td><td className={ui.td}>TI / Operaciones</td><td className={ui.td}>Eliminación de errores de tipeo</td><td className={ui.td}><span className={ui.badge("green")}>Fácil</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section id="por-industria" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>4. Ejemplos reales por industria</h2>
        <p className={styles.p}>
          La teoría es linda, pero lo que convence son los ejemplos. Acá van casos concretos de procesos que Robotipy ha
          automatizado en empresas de Chile y Argentina:
        </p>

        <div className={ui.industryGrid}>
          <div className={ui.industryCard("primary")} style={{ borderTopColor: "rgb(3,150,149)" }}>
            <h4 className={ui.industryTitle}>🏦 Banca y Finanzas</h4>
            <ul className={ui.industryList}>
              <li>Conciliación de cuentas corrientes con el libro mayor</li>
              <li>Generación automática de informes regulatorios (CMF, BCRA)</li>
              <li>Validación de identidad en proceso de onboarding de clientes</li>
              <li>Procesamiento de transferencias masivas</li>
            </ul>
          </div>
          <div className={ui.industryCard("green")} style={{ borderTopColor: "#22c55e" }}>
            <h4 className={ui.industryTitle}>📊 Contabilidad y Estudios</h4>
            <ul className={ui.industryList}>
              <li>Declaración mensual F29 en SII Chile de forma automática</li>
              <li>Presentación de formularios en AFIP Argentina</li>
              <li>Emisión de facturas electrónicas en lote</li>
              <li>Extracción de datos de facturas recibidas</li>
            </ul>
          </div>
          <div className={ui.industryCard("orange")} style={{ borderTopColor: "#f59e0b" }}>
            <h4 className={ui.industryTitle}>🚛 Logística y Transporte</h4>
            <ul className={ui.industryList}>
              <li>Carga automática de guías de despacho en portales de clientes</li>
              <li>Seguimiento de envíos y notificación proactiva</li>
              <li>Conciliación de fletes con facturas de transportistas</li>
              <li>Generación de reportes de trazabilidad</li>
            </ul>
          </div>
          <div className={ui.industryCard("red")} style={{ borderTopColor: "#ef4444" }}>
            <h4 className={ui.industryTitle}>🏥 Salud y Seguros</h4>
            <ul className={ui.industryList}>
              <li>Validación automática de pólizas de seguro</li>
              <li>Procesamiento de solicitudes de reembolso médico</li>
              <li>Carga de prestaciones en el sistema FONASA/ISAPRE</li>
              <li>Generación de informes de auditoría clínica</li>
            </ul>
          </div>
          <div className={ui.industryCard("purple")} style={{ borderTopColor: "#a855f7" }}>
            <h4 className={ui.industryTitle}>👥 Recursos Humanos</h4>
            <ul className={ui.industryList}>
              <li>Creación automática de usuarios al ingresar un empleado</li>
              <li>Generación de liquidaciones de sueldo</li>
              <li>Notificación de vencimientos de contratos</li>
              <li>Registro de asistencia en múltiples sistemas</li>
            </ul>
          </div>
          <div className={ui.industryCard("teal")} style={{ borderTopColor: "#14b8a6" }}>
            <h4 className={ui.industryTitle}>🌾 Agroindustria y Alimentos</h4>
            <ul className={ui.industryList}>
              <li>Ingreso de datos de campo al sistema de trazabilidad</li>
              <li>Generación de informes de producción diaria</li>
              <li>Gestión automática de pedidos a proveedores</li>
              <li>Conciliación de inventarios en múltiples bodegas</li>
            </ul>
          </div>
        </div>

        <div className={ui.callout("green")}>
          <div className={ui.calloutTitle("green")}>Caso real: Estudio contable en Chile</div>
          <p className={styles.p}>
            Un estudio contable con 8 contadores en Santiago destinaba{" "}
            <strong className={styles.strong}>3 días hábiles al mes</strong> a ingresar declaraciones tributarias de sus
            60 clientes en el SII. Con un bot RPA, ese proceso pasó a ejecutarse en{" "}
            <strong className={styles.strong}>4 horas automáticamente, de madrugada</strong>, liberando a los contadores
            para tareas de mayor valor. El ROI fue de 3 meses.
          </p>
        </div>
      </section>

      {/* SECCIÓN 5 */}
      <section id="rpa-vs-otros" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>5. RPA vs. otras tecnologías: ¿cuál elegir?</h2>
        <p className={styles.p}>
          Una de las preguntas más frecuentes es: &quot;¿No es lo mismo que una macro de Excel?&quot; o &quot;¿Esto no
          lo hace la IA?&quot;. No es lo mismo. Aquí la comparativa:
        </p>

        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Tecnología</th>
                <th className={ui.th}>Qué hace bien</th>
                <th className={ui.th}>Limitaciones</th>
                <th className={ui.th}>¿Se combina con RPA?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={ui.td}><strong className={styles.strong}>RPA</strong></td>
                <td className={ui.td}>Automatiza pasos repetitivos en cualquier sistema, sin API ni código</td>
                <td className={ui.td}>No &quot;aprende&quot; solo, requiere reglas claras</td>
                <td className={ui.td}>N/A</td>
              </tr>
              <tr>
                <td className={ui.td}><strong className={styles.strong}>Macros de Excel</strong></td>
                <td className={ui.td}>Automatiza tareas dentro de Excel</td>
                <td className={ui.td}>No interactúa con otros sistemas. Se rompe fácilmente.</td>
                <td className={ui.td}><span className={ui.badge("orange")}>Parcialmente</span></td>
              </tr>
              <tr>
                <td className={ui.td}><strong className={styles.strong}>Inteligencia Artificial (IA)</strong></td>
                <td className={ui.td}>Entiende lenguaje, imágenes, contexto, toma decisiones</td>
                <td className={ui.td}>No ejecuta pasos operativos por sí sola</td>
                <td className={ui.td}><span className={ui.badge("green")}>Sí (combo poderoso)</span></td>
              </tr>
              <tr>
                <td className={ui.td}><strong className={styles.strong}>Integración de sistemas (API)</strong></td>
                <td className={ui.td}>Conecta sistemas a nivel técnico, muy robusta</td>
                <td className={ui.td}>Requiere que ambos sistemas tengan API. Costosa de desarrollar.</td>
                <td className={ui.td}><span className={ui.badge("green")}>Sí (complementarios)</span></td>
              </tr>
              <tr>
                <td className={ui.td}><strong className={styles.strong}>ERP personalizado</strong></td>
                <td className={ui.td}>Centraliza todos los procesos del negocio</td>
                <td className={ui.td}>Muy costoso, implementación de meses o años</td>
                <td className={ui.td}><span className={ui.badge("green")}>Sí (RPA llena los gaps)</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={ui.callout("purple")}>
          <div className={ui.calloutTitle("purple")}>La combinación ganadora: RPA + IA</div>
          <p className={styles.p}>
            El futuro de la automatización está en combinar RPA (que ejecuta los pasos) con IA (que entiende el contexto
            y toma decisiones). Por ejemplo: un bot puede{" "}
            <strong className={styles.strong}>leer el texto de una factura PDF</strong> usando IA para extraer los
            datos, y luego usar RPA para{" "}
            <strong className={styles.strong}>cargarlos automáticamente en el sistema contable</strong>. Ninguna de las
            dos tecnologías sola lo lograría igual.
          </p>
        </div>
      </section>

      {/* SECCIÓN 6 */}
      <section id="para-pymes" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>6. ¿RPA es solo para empresas grandes?</h2>
        <p className={styles.p}>Esta es la creencia que más nos encontramos, y la que más nos gusta desmentir.</p>

        <blockquote className={ui.quote}>
          &quot;Pensé que el RPA era solo para el Banco de Chile o para grandes multilatinas. Cuando vi que podíamos
          implementarlo en nuestra PyME por una fracción de lo que esperaba, fue un cambio de juego.&quot;
          <cite className={ui.cite}>Gerente de operaciones, empresa de servicios profesionales en Santiago</cite>
        </blockquote>

        <p className={styles.p}>
          Los números lo confirman:{" "}
          <strong className={styles.strong}>
            el 49% de las implementaciones de RPA a nivel mundial ocurren en PyMEs
          </strong>
          . De hecho, son las empresas más pequeñas las que más se benefician, porque:
        </p>

        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong className={styles.strong}>Tienen menos margen para el error.</strong> Un error en una factura o
            declaración tributaria impacta directamente el flujo de caja.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>El tiempo de su equipo vale más.</strong> Con equipos de 5–20 personas,
            liberar 20 horas mensuales de trabajo manual es transformador.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>No necesitan departamentos de TI.</strong> Las plataformas actuales como
            Rocketbot permiten operar bots sin un equipo de ingenieros dedicado.
          </li>
          <li className={styles.li}>
            <strong className={styles.strong}>El ROI es más visible y rápido.</strong> En una PyME, el impacto de
            automatizar un proceso es inmediato y medible.
          </li>
        </ul>
      </section>

      {/* SECCIÓN 7 */}
      <section id="roi" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>7. ¿Cuánto cuesta y en cuánto tiempo recupero la inversión?</h2>
        <p className={styles.p}>
          Esta es la pregunta del millón. Y la buena noticia es que los números suelen ser mucho más favorables de lo
          que la gente espera.
        </p>
        <p className={styles.p}>Veamos un ejemplo concreto para una empresa de contabilidad mediana en Chile:</p>

        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Concepto</th>
                <th className={ui.th}>Situación actual (manual)</th>
                <th className={ui.th}>Con RPA</th>
                <th className={ui.th}>Diferencia mensual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={ui.td}>Horas mensuales en tareas tributarias</td>
                <td className={ui.td}>80 horas/mes (2 personas)</td>
                <td className={ui.td}>8 horas/mes (supervisión)</td>
                <td className={ui.td}><strong className={styles.strong}>72 horas liberadas</strong></td>
              </tr>
              <tr>
                <td className={ui.td}>Costo de esas horas (CLP $25.000/hora)</td>
                <td className={ui.td}>CLP $2.000.000/mes</td>
                <td className={ui.td}>CLP $200.000/mes</td>
                <td className={ui.td}><strong className={styles.strong}>CLP $1.800.000 ahorro</strong></td>
              </tr>
              <tr>
                <td className={ui.td}>Errores y correcciones</td>
                <td className={ui.td}>3–5 errores/mes promedio</td>
                <td className={ui.td}>0 errores en tareas automatizadas</td>
                <td className={ui.td}><strong className={styles.strong}>100% precisión</strong></td>
              </tr>
              <tr>
                <td className={ui.td}>Disponibilidad del proceso</td>
                <td className={ui.td}>Horario laboral solamente</td>
                <td className={ui.td}>24/7 incluyendo fines de semana</td>
                <td className={ui.td}><strong className={styles.strong}>+128 horas disponibles</strong></td>
              </tr>
              <tr className="bg-success/10">
                <td className={ui.td} colSpan={2}>
                  <strong className={styles.strong}>Inversión típica implementación + licencia (año 1)</strong>
                </td>
                <td className={ui.td} colSpan={2}>
                  <strong className={styles.strong}>CLP $4.000.000 – $8.000.000 (varía según complejidad)</strong>
                </td>
              </tr>
              <tr className="bg-success/10">
                <td className={ui.td} colSpan={2}>
                  <strong className={styles.strong}>Retorno de inversión estimado</strong>
                </td>
                <td className={ui.td} colSpan={2}>
                  <strong className={styles.strong}>2 a 5 meses</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={ui.callout("orange")}>
          <div className={ui.calloutTitle("orange")}>Importante sobre los costos</div>
          <p className={styles.p}>
            Los valores anteriores son referenciales. El costo real depende de la complejidad del proceso, el número de
            sistemas involucrados y el volumen de transacciones. Lo que sí es consistente es que el ROI en PyMEs
            raramente supera los 6 meses para procesos de automatización simples.
          </p>
        </div>
      </section>

      {/* SECCIÓN 8 */}
      <section id="como-implementar" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>8. Cómo implementar RPA en tu empresa: paso a paso</h2>
        <p className={styles.p}>
          En Robotipy seguimos una metodología probada en más de 200 proyectos. Esto es lo que pasa desde que nos
          contactas hasta que el bot está trabajando por ti:
        </p>

        <div className="my-6">
          {[
            { n: 1, t: "Diagnóstico de procesos (gratuito)", d: "Conversamos contigo para mapear los procesos candidatos a automatizar. Priorizamos por impacto (horas ahorradas × frecuencia) y viabilidad técnica. Al final tienes un listado ordenado de qué automatizar primero. Duración: 1–2 reuniones." },
            { n: 2, t: "Documentación del proceso", d: "Registramos cada paso del proceso en detalle: qué sistemas se usan, qué datos entran y salen, cuáles son las excepciones y reglas de negocio. Esta es la \"partitura\" que el bot va a seguir. Duración: 2–5 días." },
            { n: 3, t: "Desarrollo del bot", d: "Nuestro equipo construye el bot usando Rocketbot. Configuramos los pasos, las reglas, el manejo de errores y las notificaciones. Hacemos pruebas internas con datos reales. Duración: 1–4 semanas según complejidad." },
            { n: 4, t: "Pruebas con tu equipo (UAT)", d: "Tu equipo prueba el bot con casos reales. Validamos que todo funcione según lo esperado, ajustamos detalles y confirmamos los resultados. Esta etapa es clave para que el equipo confíe en el bot. Duración: 3–7 días." },
            { n: 5, t: "Puesta en producción", d: "El bot entra en operación real. Monitoreamos el primer mes de cerca para asegurar que todo funcione perfectamente. Te entregamos un dashboard de seguimiento con métricas de ahorro y rendimiento." },
            { n: 6, t: "Capacitación y soporte continuo", d: "Capacitamos a tu equipo para que entiendan cómo opera el bot y puedan monitorear su funcionamiento. Ofrecemos soporte y mantenimiento para adaptar el bot cuando tus sistemas o procesos cambien." },
          ].map((s) => (
            <div key={s.n} className={ui.step}>
              <div className={ui.stepNum}>{s.n}</div>
              <div>
                <h4 className={ui.stepTitle}>{s.t}</h4>
                <p className={ui.stepBody}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={ui.callout("blue")}>
          <div className={ui.calloutTitle("blue")}>¿Cuánto tiempo hasta que el bot trabaja por mí?</div>
          <p className={styles.p}>
            Para procesos simples: <strong className={styles.strong}>2 a 4 semanas</strong> desde el diagnóstico hasta
            producción. Para procesos más complejos o con múltiples sistemas:{" "}
            <strong className={styles.strong}>6 a 10 semanas</strong>. En ambos casos, los resultados son visibles desde
            el primer mes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-3 scroll-mt-24">
        <h2 className={styles.h2}>9. Preguntas Frecuentes sobre RPA</h2>
        <div className="my-6">
          {[
            { q: "¿El bot RPA puede \"romperse\" si cambia el sistema?", a: "Sí, si cambia la interfaz del sistema que el bot usa (por ejemplo, el SII actualiza su sitio web), puede ser necesario ajustar el bot. Por eso el mantenimiento y soporte son parte fundamental del servicio. En Robotipy, este tipo de ajustes se resuelven rápidamente y forman parte del contrato de soporte." },
            { q: "¿Necesito saber programar para usar RPA?", a: "No. Las plataformas modernas como Rocketbot permiten diseñar bots de forma visual, sin escribir código. Tu equipo puede aprender a monitorear y operar los bots con una capacitación básica. El desarrollo técnico lo hace el equipo de Robotipy." },
            { q: "¿El bot tiene acceso a información confidencial de mi empresa?", a: "El bot accede solo a los sistemas y datos que tú le das acceso, bajo las mismas credenciales y permisos que defines. Puede implementarse en tu infraestructura local (on-premise) si tienes requerimientos de seguridad estrictos, sin necesidad de exponer datos a la nube." },
            { q: "¿RPA reemplaza empleados?", a: "Esta es la pregunta más sensible y la respuesta real es: no reemplaza, libera. La experiencia de nuestros clientes es que las personas que hacían esas tareas repetitivas pasan a enfocarse en trabajo de mayor valor: análisis, atención a clientes, resolución de problemas, estrategia. El bot hace lo mecánico; las personas hacen lo humano." },
            { q: "¿Qué pasa si el proceso tiene excepciones o casos especiales?", a: "Los bots pueden manejar múltiples excepciones con reglas condicionales (\"si pasa X, hacer Y; si no, hacer Z\"). Para casos muy inusuales, el bot puede enviar una alerta al equipo humano para que lo resuelva manualmente, y luego continuar con el resto. Ningún proceso es 100% estandarizable, pero RPA cubre el 80–95% de los casos y reduce drásticamente el trabajo manual." },
            { q: "¿Funciona con mis sistemas actuales? (SAP, Excel, correo, webs)", a: "Sí. Rocketbot funciona con prácticamente cualquier sistema que tenga interfaz visual: SAP, Oracle, Defontana, Buk, Softland, sistemas web (SII, AFIP, portales bancarios), Excel, Outlook, PDFs, y más. No necesita que los sistemas tengan API." },
          ].map((f, i) => (
            <details key={i} className={ui.faqItem} open={i === 0}>
              <summary className={ui.faqQ}>
                <span>{f.q}</span>
                <span className="text-accent text-2xl font-light group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className={ui.faqA}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className={ui.cta}>
          <h2 className={ui.ctaTitle}>¿Listo para dejar de hacer tareas repetitivas?</h2>
          <p className={ui.ctaText}>
            Agenda un diagnóstico gratuito de 20 minutos y te mostramos exactamente qué procesos de tu empresa podemos
            automatizar y cuánto ahorrarías.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonMain text="Quiero mi diagnóstico gratuito" link="/contact-us" type="primary" />
            <ButtonMain text="Ver casos de éxito" link="/blog/category/casos-de-exito" type="secondary" />
          </div>
        </div>
      </section>
    </>
  ),
};
