import Link from "next/link";
import { categories, categorySlugs } from "../categories.js";
import { authors, authorSlugs } from "../authors.js";
import { styles } from "../styles";
import thumbnail from "@/public/blog/rpa-vs-ia-agentica/header.jpeg"; // TODO: Replace with definitive image
import ButtonMain from "@/components/ButtonMain.js";

const faqs = [
  {
    q: "¿Claude con computer use va a matar al RPA?",
    a: "No en el corto plazo. Claude computer use es impresionante para tareas puntuales y de bajo volumen, pero todavía no puede reemplazar la velocidad, precisión y escalabilidad de un bot de RPA para procesos críticos de alto volumen. Lo que sí está haciendo es democratizar la automatización: ahora cualquier persona sin conocimientos técnicos puede automatizar tareas simples. Eso es revolucionario, pero diferente a \"matar\" al RPA.",
  },
  {
    q: "¿Cuánto cuesta automatizar con IA agéntica vs RPA?",
    a: "Depende del volumen. Para menos de 50 ejecuciones diarias, un agente de IA a $100/mes es más económico. Para más de 200 ejecuciones diarias, RPA es entre 3x y 6x más barato por transacción. El punto de quiebre está alrededor de las 50-100 ejecuciones diarias: ahí es donde necesitas hacer las cuentas para tu caso específico.",
  },
  {
    q: "¿Puedo usar Claude para automatizar procesos bancarios?",
    a: "Podrías técnicamente, pero no deberías. Los procesos bancarios requieren precisión del 99.99%, trazabilidad completa para auditorías y ejecución determinística (siempre el mismo resultado). La IA agéntica actual no garantiza ninguna de esas tres cosas. Para procesos financieros, RPA sigue siendo la opción correcta, con IA como complemento para clasificación y detección de anomalías.",
  },
  {
    q: "¿Qué es el self-healing RPA?",
    a: "Es un modelo híbrido donde un bot de RPA ejecuta los procesos repetitivos, pero cuando se rompe por un cambio de interfaz, un agente de IA detecta los cambios y reconfigura el bot automáticamente. Proveedores como UiPath y Rocketbot (con su próxima funcionalidad Resilient) ya están integrando esta capacidad de forma nativa.",
  },
];

const ui = {
  statGrid: "grid grid-cols-2 md:grid-cols-4 gap-4 my-8",
  statCard:
    "rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 text-center",
  statVal: "text-3xl font-extrabold text-accent leading-none mb-2",
  statLbl: "text-xs text-white/70 leading-snug",

  toc: "rounded-xl border border-white/10 border-l-4 border-l-accent bg-white/5 p-6 my-8",
  tocTitle: "text-xs uppercase tracking-widest font-bold text-accent mb-3",
  tocList: "list-decimal pl-5 space-y-1.5 text-white/90 text-[15px]",

  analogy:
    "relative rounded-xl border-2 border-dashed border-accent bg-white/5 pt-10 px-7 pb-7 my-8 space-y-3",
  analogyTag:
    "absolute -top-3 left-6 bg-accent text-white text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-0.5",
  analogyTagPurple:
    "absolute -top-3 left-6 bg-purple-500 text-white text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-0.5",

  callout: (tone) =>
    `rounded-xl border-l-4 p-5 my-7 ${
      {
        blue: "border-accent bg-accent/10",
        green: "border-success bg-success/10",
        orange: "border-warning bg-warning/10",
        purple: "border-purple-400 bg-purple-400/10",
        red: "border-error bg-error/10",
      }[tone]
    }`,
  calloutTitle: (tone) =>
    `text-xs uppercase tracking-widest font-bold mb-2 ${
      {
        blue: "text-accent",
        green: "text-success",
        orange: "text-warning",
        purple: "text-purple-300",
        red: "text-error",
      }[tone]
    }`,

  table: "w-full border-collapse my-7 text-[15px] rounded-xl overflow-hidden",
  th: "bg-primary text-white text-left text-[13px] font-semibold px-4 py-3 border-b border-white/10",
  td: "px-4 py-3 border-b border-white/10 text-white/90",
  badge: (tone) =>
    `inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold whitespace-nowrap border ${
      {
        cyan: "bg-accent/20 text-accent border-accent/30",
        purple: "bg-purple-400/20 text-purple-400 border-purple-400/30",
        green: "bg-success/20 text-success border-success/30",
        orange: "bg-warning/20 text-warning border-warning/30",
        red: "bg-error/20 text-error border-error/30",
      }[tone]
    }`,

  costThGreen:
    "bg-success/20 text-success text-left text-[13px] font-semibold px-4 py-3 border-b border-success/30",
  costTdTotal: "px-4 py-3 bg-success/10 font-bold text-success",

  scenarioCard: (color) =>
    `rounded-xl border border-white/10 bg-white/5 p-7 my-7 border-t-4 ${color}`,

  step: "flex gap-5 items-start rounded-xl border border-white/10 bg-white/5 p-5 mb-4",
  stepNum:
    "flex-shrink-0 w-11 h-11 rounded-full bg-accent text-white font-extrabold text-lg flex items-center justify-center",
  stepNumPurple:
    "flex-shrink-0 w-11 h-11 rounded-full bg-purple-500 text-white font-extrabold text-lg flex items-center justify-center",
  stepTitle: "text-white font-bold mb-1",
  stepBody: "text-white/80 text-[15px] leading-relaxed",

  quote:
    "border-l-4 border-accent bg-white/5 rounded-r-xl px-7 py-5 my-8 italic text-white text-lg",
  cite: "block mt-3 not-italic text-sm text-white/70 font-semibold",

  frameworkNum: "text-purple-400 font-extrabold text-lg px-4 py-3 border-b border-white/10",
  frameworkTh:
    "bg-purple-400/15 text-purple-300 text-left text-[13px] font-semibold px-4 py-3 border-b border-purple-400/30",

  faqItem:
    "group rounded-xl border border-white/10 bg-white/5 mb-3 overflow-hidden",
  faqQ:
    "cursor-pointer list-none flex justify-between items-center px-5 py-4 text-white font-bold text-base [&::-webkit-details-marker]:hidden",
  faqA: "px-5 pb-5 text-white/80 text-[15px] leading-relaxed",

  cta: "rounded-2xl p-10 my-12 text-center text-white bg-gradient-to-br from-primary via-secondary to-accent/40",
  ctaTitle: "text-2xl md:text-3xl font-extrabold mb-3",
  ctaText: "text-white/80 max-w-xl mx-auto mb-7",
};

const slug = "rpa-vs-ia-agentica";

export const post = {
  slug,
  locale: "es",
  title:
    "RPA vs IA Agéntica: ¿Vale la Pena Pagar $100/mes por un Agente IA en Lugar de un Bot RPA?",
  description:
    "Comparamos RPA tradicional vs IA agéntica (Claude, GPT) para automatización web. Costos, confiabilidad, casos reales y cuándo usar cada uno. Guía con datos 2026.",
  categories: [
    categories.find((category) => category.slug === categorySlugs.rpa),
  ],
  author: authors.find((author) => author.slug === authorSlugs.GabrielToro),
  publishedAt: "2026-05-17",
  image: {
    src: thumbnail,
    urlRelative: "/blog/rpa-vs-ia-agentica/header.jpeg",
    alt: "RPA vs IA Agéntica comparativa 2026",
  },
  faq: faqs,
  content: (
    <>
      {/* ── INTRO ── */}
      <section className="space-y-4">
        <p className={styles.p}>
          Un cliente nos preguntó la semana pasada:{" "}
          <strong className={styles.strong}>
            &quot;¿Para qué voy a contratar un proyecto de RPA si puedo pagar $100 al mes por
            Claude y que él haga todo?&quot;
          </strong>
        </p>
        <p className={styles.p}>
          Es una pregunta legítima. Y honestamente, si la hubiéramos escuchado hace dos años, nos
          habríamos reído. Hoy no.
        </p>
        <p className={styles.p}>
          En 2026, los agentes de IA como Claude (de Anthropic), GPT (de OpenAI) y Gemini (de
          Google) ya pueden controlar un navegador, hacer clics, llenar formularios, leer pantallas
          y tomar decisiones. Por $100 al mes. Sin código. Sin configuración técnica compleja.
        </p>
        <p className={styles.p}>
          Entonces, ¿el RPA está muerto? ¿O hay algo que los titulares no te están contando?
        </p>
        <p className={styles.p}>
          En este artículo vamos a hacer algo que pocas empresas de automatización se atreven a
          hacer:{" "}
          <strong className={styles.strong}>
            un análisis honesto, con datos reales y desde la experiencia
          </strong>
          , de cuándo te conviene un agente IA, cuándo te conviene RPA, y cuándo la respuesta
          correcta es usar ambos. Lo escribimos como empresa que implementa RPA desde hace años y
          que ahora también trabaja con IA agéntica, y no tenemos interés en que &quot;gane&quot; uno u otro.
        </p>

        <div className={ui.statGrid}>
          <div className={ui.statCard}>
            <div className={ui.statVal}>6-6</div>
            <div className={ui.statLbl}>Empate en 12 dimensiones comparadas entre RPA e IA Agéntica</div>
          </div>
          <div className={ui.statCard}>
            <div className={ui.statVal}>3-6×</div>
            <div className={ui.statLbl}>más barato el RPA por transacción a alto volumen</div>
          </div>
          <div className={ui.statCard}>
            <div className={ui.statVal}>40%</div>
            <div className={ui.statLbl}>de proyectos de IA agéntica serán cancelados antes de 2027 (Gartner)</div>
          </div>
          <div className={ui.statCard}>
            <div className={ui.statVal}>99.2%</div>
            <div className={ui.statLbl}>precisión lograda con modelo híbrido RPA + IA</div>
          </div>
        </div>
      </section>

      {/* ── TOC ── */}
      <nav className={ui.toc} aria-label="Tabla de contenidos">
        <div className={ui.tocTitle}>En este artículo</div>
        <ol className={ui.tocList}>
          <li><a href="#que-es-cada-uno" className="link link-hover">Qué es RPA y qué es IA Agéntica (explicado simple)</a></li>
          <li><a href="#la-promesa" className="link link-hover">La promesa de $100/mes: qué puede hacer un agente IA hoy</a></li>
          <li><a href="#lo-que-no-dicen" className="link link-hover">Lo que no te dicen: limitaciones reales de la IA agéntica</a></li>
          <li><a href="#donde-rpa-gana" className="link link-hover">Dónde RPA sigue ganando (y por mucho)</a></li>
          <li><a href="#comparativa" className="link link-hover">Tabla comparativa: RPA vs IA Agéntica en 12 dimensiones</a></li>
          <li><a href="#costos" className="link link-hover">Análisis de costos real: no es tan simple como parece</a></li>
          <li><a href="#casos-reales" className="link link-hover">3 escenarios reales: cuál elegirías tú</a></li>
          <li><a href="#hibrido" className="link link-hover">El modelo que realmente funciona: RPA + IA Agéntica</a></li>
          <li><a href="#decision" className="link link-hover">Cómo decidir: el framework de 5 preguntas</a></li>
          <li><a href="#faq" className="link link-hover">Preguntas Frecuentes</a></li>
        </ol>
      </nav>

      {/* ── SECCIÓN 1 ── */}
      <section id="que-es-cada-uno" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>1. Qué es RPA y qué es IA Agéntica (explicado simple)</h2>
        <p className={styles.p}>Antes de compararlos, asegurémonos de que hablamos el mismo idioma.</p>

        <div className={ui.analogy}>
          <span className={ui.analogyTag}>RPA</span>
          <p className={styles.p}>
            Un bot de RPA es como un empleado que sigue instrucciones al pie de la letra. Le dices:
            &quot;Abre esta página, haz clic en este botón, copia este dato, pégalo aquí, repite 500
            veces.&quot; Y lo hace. Siempre igual. Sin cansarse. Sin errores.
          </p>
          <p className={styles.p}>
            La clave: <strong className={styles.strong}>sigue reglas explícitas</strong>. Si le dices
            &quot;haz clic en el botón verde que dice &apos;Enviar&apos;&quot;, lo hace. Si mañana el botón cambia de
            color o de posición, el bot se rompe.
          </p>
        </div>

        <div className="relative rounded-xl border-2 border-dashed border-purple-500 bg-white/5 pt-10 px-7 pb-7 my-8 space-y-3">
          <span className={ui.analogyTagPurple}>IA Agéntica</span>
          <p className={styles.p}>
            Un agente de IA es como un asistente inteligente al que le describes un objetivo:
            &quot;Necesito que entres a esta página, busques las facturas pendientes y me hagas un
            resumen.&quot; El agente <strong className={styles.strong}>entiende la intención</strong>, navega
            la página, interpreta lo que ve y toma decisiones sobre cómo llegar al resultado.
          </p>
          <p className={styles.p}>
            La clave: <strong className={styles.strong}>opera por intención, no por instrucciones</strong>.
            Si el botón cambia de posición, el agente lo encuentra porque entiende qué es un botón de
            envío. No depende de coordenadas de píxeles.
          </p>
        </div>

        <p className={styles.p}>
          Dicho así, parece que la IA agéntica es superior en todo. Pero la realidad es más matizada.
          Cada una tiene fortalezas claras y limitaciones reales. La diferencia fundamental es que RPA
          es <strong className={styles.strong}>determinístico</strong> (mismo input = mismo output,
          siempre) y la IA agéntica es{" "}
          <strong className={styles.strong}>probabilística</strong> (mismo input = output similar pero
          no idéntico cada vez). Esta diferencia lo cambia todo dependiendo del contexto.
        </p>

        {/* Diagrama VS */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-stretch my-8">
          {/* RPA */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 text-center">
            <div className="text-accent text-lg font-extrabold mb-1">RPA</div>
            <div className="text-white/50 text-xs mb-5">Determinístico</div>
            <div className="flex flex-col gap-2">
              {["Paso 1: Abrir web", "Paso 2: Clic en botón", "Paso 3: Copiar dato", "Paso 4: Pegar en ERP"].map(
                (s, i) => (
                  <div key={i}>
                    <div className="rounded-md bg-accent/15 border border-accent/25 px-3 py-2 text-xs text-white/80">
                      {s}
                    </div>
                    {i < 3 && <div className="text-accent/50 text-sm my-0.5">↓</div>}
                  </div>
                )
              )}
            </div>
            <div className="text-accent/60 text-xs mt-4">Siempre el mismo camino</div>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-warning/20 border-2 border-warning flex items-center justify-center text-warning font-extrabold text-base">
              VS
            </div>
          </div>

          {/* IA Agéntica */}
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-6 text-center">
            <div className="text-purple-400 text-lg font-extrabold mb-1">IA Agéntica</div>
            <div className="text-white/50 text-xs mb-5">Probabilístico</div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-purple-500/15 border border-purple-500/35 flex items-center justify-center text-xs text-white/80 font-semibold">
                Objetivo
              </div>
              <div className="text-purple-400/60 text-sm tracking-widest">↙ ↓ ↘</div>
              <div className="grid grid-cols-3 gap-1.5 w-full">
                {["Camino A", "Camino B", "Camino C"].map((c) => (
                  <div
                    key={c}
                    className="rounded-md bg-purple-500/15 border border-purple-500/25 px-2 py-2 text-xs text-white/80"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-purple-400/60 text-xs mt-4">Decide el mejor camino</div>
          </div>
        </div>

        {/* Barra comparativa */}
        <div className="rounded-md bg-warning/10 border border-warning/25 px-4 py-3 text-center text-warning text-sm font-bold">
          Reglas explícitas vs. Intención + razonamiento contextual
        </div>
      </section>

      {/* ── SECCIÓN 2 ── */}
      <section id="la-promesa" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>2. La promesa de $100/mes: qué puede hacer un agente IA hoy</h2>
        <p className={styles.p}>
          Seamos concretos. En mayo de 2026, con una suscripción de $100/mes a Claude Max (plan 5x),
          puedes pedirle a un agente que:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong className={styles.strong}>Navegue páginas web:</strong> abre sitios, hace clics, llena formularios, sube archivos</li>
          <li className={styles.li}><strong className={styles.strong}>Lea y entienda documentos:</strong> facturas, contratos, correos, PDFs escaneados</li>
          <li className={styles.li}><strong className={styles.strong}>Tome decisiones:</strong> clasifique información, detecte anomalías, priorice tareas</li>
          <li className={styles.li}><strong className={styles.strong}>Escriba y responda:</strong> redacte correos, genere reportes, resuma reuniones</li>
          <li className={styles.li}><strong className={styles.strong}>Se adapte a cambios:</strong> si una página web cambia su diseño, el agente se ajusta sin reprogramación</li>
        </ul>
        <p className={styles.p}>Todo esto sin escribir una línea de código. Con lenguaje natural.</p>
        <p className={styles.p}>
          Desde marzo de 2026, Claude cuenta con un agente de uso de computadora (
          <em>computer use agent</em>) que puede ver, navegar y controlar un escritorio completo. Le
          asignas una tarea desde tu celular y el agente la ejecuta de forma autónoma, pidiendo
          permiso antes de acceder a nuevas aplicaciones. OpenAI y Google tienen capacidades similares
          con Operator y Project Mariner respectivamente.
        </p>
        <div className={ui.callout("green")}>
          <div className={ui.calloutTitle("green")}>Ejemplo real</div>
          <p className={styles.p}>
            Un dueño de negocio que gastó $20,000 el año pasado en automatizar la gestión de
            inventario con RPA tradicional podría lograr algo similar con Claude por una fracción del
            costo, usando conversaciones en lenguaje natural.
          </p>
        </div>
        <p className={styles.p}>
          Para una PyME que necesita automatizar 2-3 procesos simples basados en web, esto suena como
          un sueño. Y en muchos casos, lo es.
        </p>
      </section>

      {/* ── SECCIÓN 3 ── */}
      <section id="lo-que-no-dicen" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>3. Lo que no te dicen: limitaciones reales de la IA agéntica</h2>
        <p className={styles.p}>
          Aquí es donde la conversación se pone interesante. Porque hay cosas que los artículos
          entusiastas y los hilos de Twitter no mencionan. Y son precisamente las limitaciones que un
          CEO o gerente de operaciones necesita conocer antes de decidir si cambiar su infraestructura
          de automatización.
        </p>

        <h3 className={styles.h3}>3.1 Comportamiento probabilístico (no determinístico)</h3>
        <p className={styles.p}>
          Un bot de RPA ejecuta la misma tarea exactamente igual, cada vez, para siempre. Un agente
          de IA puede producir resultados ligeramente diferentes cada vez que lo ejecutas, incluso con
          la misma instrucción. Los modelos de lenguaje son probabilísticos por naturaleza.
        </p>
        <p className={styles.p}>
          ¿Esto importa? Depende. Para redactar un correo, no. Para procesar una conciliación
          bancaria donde necesitas precisión del 99.99%, sí importa, y mucho.
        </p>

        <h3 className={styles.h3}>3.2 Límites de uso</h3>
        <p className={styles.p}>
          El plan de $100/mes de Claude Max no es ilimitado. Ofrece 5x la capacidad del plan Pro,
          pero cuando alcanzas el límite de uso, tienes que esperar a que se renueve tu cuota. Esto
          significa que{" "}
          <strong className={styles.strong}>no puedes correr un proceso 24/7</strong> como sí lo hace
          un bot de RPA.
        </p>
        <div className={ui.callout("orange")}>
          <div className={ui.calloutTitle("orange")}>El punto clave</div>
          <p className={styles.p}>
            Un bot de RPA puede ejecutar 10,000 transacciones por noche sin detenerse. Un agente de
            IA con plan de $100/mes, no.
          </p>
        </div>

        <h3 className={styles.h3}>3.3 Velocidad de ejecución</h3>
        <p className={styles.p}>
          Un bot de RPA ejecuta un proceso de 15 pasos en segundos. Un agente de IA, al tener que
          &quot;pensar&quot; cada paso, interpretar la pantalla y decidir qué hacer, puede tardar minutos en lo
          mismo. Para 5 ejecuciones al día, no importa. Para 5,000, la diferencia es brutal.
        </p>

        <h3 className={styles.h3}>3.4 Alucinaciones y errores de razonamiento</h3>
        <p className={styles.p}>
          Los modelos de IA pueden &quot;alucinar&quot;: inventar datos, interpretar mal un campo o tomar una
          decisión incorrecta con total confianza. En un contexto financiero o regulatorio, esto puede
          ser un problema serio.
        </p>
        <div className={ui.callout("red")}>
          <div className={ui.calloutTitle("red")}>Dato Gartner (junio 2025)</div>
          <p className={styles.p}>
            Gartner proyecta que{" "}
            <strong className={styles.strong}>
              más del 40% de los proyectos de IA agéntica serán cancelados antes de finales de 2027
            </strong>{" "}
            debido a sobrecostos, valor poco claro o controles de riesgo débiles. No por limitaciones
            técnicas, sino por fallos de gobernanza.
          </p>
          <p className={styles.p}>
            Gartner también acuñó el término{" "}
            <strong className={styles.strong}>&quot;agent washing&quot;</strong>: de miles de proveedores que
            dicen ofrecer soluciones agénticas, solo alrededor de 130 realmente tienen capacidades
            genuinas. El resto rebautizó chatbots como &quot;agentes&quot; para subirse a la tendencia.
          </p>
        </div>

        <h3 className={styles.h3}>3.5 Sin trazabilidad para auditorías</h3>
        <p className={styles.p}>
          Un bot de RPA genera logs exactos: &quot;A las 14:32:05 hice clic en X, a las 14:32:06 copié Y,
          a las 14:32:07 pegué Z.&quot; Un agente de IA no genera ese nivel de trazabilidad. Para
          industrias reguladas (banca, seguros, salud), esto es un deal-breaker.
        </p>
      </section>

      {/* ── SECCIÓN 4 ── */}
      <section id="donde-rpa-gana" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>4. Dónde RPA sigue ganando (y por mucho)</h2>
        <p className={styles.p}>
          RPA no está muerto. Ni cerca. El mercado global de RPA se estima entre $6 mil millones y
          $35 mil millones en 2026 según distintos analistas (Grand View Research, Mordor
          Intelligence, Precedence Research), con proyecciones que alcanzan los $247 mil millones
          para 2035 y un crecimiento de doble dígito anual, impulsado precisamente por la
          integración con IA. Hay escenarios donde un bot de RPA es objetivamente la mejor opción:
        </p>

        <h3 className={styles.h3}>Alto volumen, misma tarea</h3>
        <p className={styles.p}>
          Si necesitas procesar 10,000 facturas por mes con el mismo formato, un bot de RPA lo hace
          más rápido, más barato y con mayor precisión que cualquier agente de IA. Mientras un agente
          de IA procesa una factura en minutos (leyendo, interpretando, decidiendo), un bot de RPA la
          procesa en segundos siguiendo pasos predefinidos. Multiplicado por miles, la diferencia es
          de horas contra días.
        </p>

        <h3 className={styles.h3}>Integración con sistemas legacy</h3>
        <p className={styles.p}>
          Muchas empresas en LATAM siguen usando sistemas que no tienen API: ERPs antiguos como
          Softland o Monica, plataformas gubernamentales como el SII en Chile o AFIP en Argentina, y
          sistemas bancarios de los 90s con interfaces de escritorio. RPA puede interactuar con
          cualquier interfaz, sin importar lo antigua que sea, de forma confiable y repetible. El
          sector financiero lidera la adopción global de RPA con cerca del 28% de participación según
          Grand View Research, precisamente por esta capacidad de conectar sistemas legacy sin
          modificarlos.
        </p>

        <h3 className={styles.h3}>Precisión del 99.99% requerida</h3>
        <p className={styles.p}>
          En conciliaciones bancarias, declaraciones de impuestos, reportes regulatorios: cualquier
          proceso donde un error de $0.01 importa, RPA gana. No alucina. No &quot;interpreta&quot;. Ejecuta
          exactamente lo que le dijiste.
        </p>

        <h3 className={styles.h3}>Ejecución 24/7 sin supervisión</h3>
        <p className={styles.p}>
          Un bot de RPA puede correr a las 3 AM un sábado sin que nadie lo vigile. Los agentes de IA
          actuales todavía requieren cierto nivel de supervisión humana, especialmente en tareas
          críticas.
        </p>

        <h3 className={styles.h3}>Cumplimiento y auditoría</h3>
        <p className={styles.p}>
          En sectores regulados, necesitas demostrar exactamente qué hizo el sistema, cuándo y por
          qué. RPA genera esta trazabilidad de forma nativa. Cada acción queda registrada con
          timestamp, captura de pantalla y resultado. Para auditorías de la CMF en Chile, la BCRA en
          Argentina, o cualquier regulador financiero, esto no es negociable. Un agente de IA genera
          logs de conversación, pero no un registro operativo con el nivel de detalle que exigen los
          auditores.
        </p>
      </section>

      {/* ── SECCIÓN 5: TABLA 12 DIMENSIONES ── */}
      <section id="comparativa" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>5. Tabla comparativa: RPA vs IA Agéntica en 12 dimensiones</h2>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.th}>Dimensión</th>
                <th className={ui.th}>RPA Tradicional</th>
                <th className={ui.th}>IA Agéntica (Claude, GPT)</th>
                <th className={ui.th}>Ganador</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Costo inicial", "$1,000 - $15,000 por proceso", "$20 - $200/mes (suscripción)", "purple", "IA Agéntica"],
                ["Costo por transacción", "Muy bajo (licencia fija, sin costo marginal)", "Más alto ($0.01-$0.15 por decisión)", "cyan", "RPA"],
                ["Velocidad de ejecución", "Segundos por proceso", "Minutos por proceso", "cyan", "RPA"],
                ["Precisión en tareas repetitivas", "99.99%", "90-98%", "cyan", "RPA"],
                ["Adaptación a cambios de UI", "Se rompe, necesita reprogramación", "Se adapta automáticamente", "purple", "IA Agéntica"],
                ["Manejo de datos no estructurados", "Muy limitado", "Excelente (lee PDFs, correos, imágenes)", "purple", "IA Agéntica"],
                ["Toma de decisiones", "Solo reglas if/then", "Razonamiento contextual", "purple", "IA Agéntica"],
                ["Ejecución 24/7", "Sí, sin límites", "Limitado por plan de uso", "cyan", "RPA"],
                ["Trazabilidad / Auditoría", "Logs detallados nativos", "Limitada", "cyan", "RPA"],
                ["Configuración técnica", "Requiere desarrollador RPA", "Lenguaje natural, sin código", "purple", "IA Agéntica"],
                ["Escalabilidad (volumen)", "Excelente (miles de ejecuciones)", "Limitada por tokens y costos", "cyan", "RPA"],
                ["Manejo de excepciones", "Se detiene o falla", "Razona y se adapta", "purple", "IA Agéntica"],
              ].map(([dim, rpa, ia, tone, winner]) => (
                <tr key={dim}>
                  <td className={ui.td}>{dim}</td>
                  <td className={ui.td}>{rpa}</td>
                  <td className={ui.td}>{ia}</td>
                  <td className={ui.td}><span className={ui.badge(tone)}>{winner}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={ui.callout("blue")}>
          <div className={ui.calloutTitle("blue")}>Marcador final</div>
          <p className={styles.p}>
            <strong className={styles.strong}>RPA 6 - IA Agéntica 6.</strong> No es casualidad. Son
            herramientas complementarias, no competidoras. RPA domina en ejecución, velocidad,
            precisión y escala. La IA agéntica domina en comprensión, adaptación, configuración y
            manejo de lo impredecible. El ganador real es quien sabe cuándo usar cada una.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 6: COSTOS ── */}
      <section id="costos" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>6. Análisis de costos real: no es tan simple como parece</h2>
        <p className={styles.p}>
          La comparación de &quot;$100/mes vs miles de dólares&quot; es engañosa si no consideras el costo
          total de propiedad. El precio de la suscripción es solo la punta del iceberg. Hay que sumar
          desarrollo, mantenimiento, supervisión humana, costo de errores y tiempo de ejecución.
          Veamos dos escenarios concretos.
        </p>

        <h3 className={styles.h3}>Escenario A: Proceso simple (5 ejecuciones/día)</h3>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.costThGreen}>Concepto</th>
                <th className={ui.costThGreen}>IA Agéntica (Claude Max)</th>
                <th className={ui.costThGreen}>RPA (Rocketbot)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={ui.td}>Suscripción/licencia mensual</td>
                <td className={ui.td}>$100/mes</td>
                <td className={ui.td}>$220/mes ($2,640/año, bots ilimitados)</td>
              </tr>
              <tr>
                <td className={ui.td}>Desarrollo inicial</td>
                <td className={ui.td}>$0 (tú mismo lo configuras)</td>
                <td className={ui.td}>$1,000-$3,000</td>
              </tr>
              <tr>
                <td className={ui.td}>Mantenimiento mensual</td>
                <td className={ui.td}>$0</td>
                <td className={ui.td}>$100-$300/mes</td>
              </tr>
              <tr>
                <td className={ui.costTdTotal}>Costo anual total</td>
                <td className={ui.costTdTotal}>$1,200</td>
                <td className={ui.costTdTotal}>$4,840-$9,240</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.p}>
          <strong className={styles.strong}>Veredicto:</strong> Para procesos simples de bajo volumen,
          la IA agéntica gana en costo. Si puedes tolerar un 5-10% de errores o supervisión manual,
          es la opción más económica. Un dueño de PyME que hoy paga a un asistente por horas para
          hacer tareas web repetitivas puede reemplazar esas horas con un agente de IA por una
          fracción del costo.
        </p>

        <h3 className={styles.h3}>Escenario B: Proceso crítico (500+ ejecuciones/día)</h3>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.costThGreen}>Concepto</th>
                <th className={ui.costThGreen}>IA Agéntica (API)</th>
                <th className={ui.costThGreen}>RPA (Rocketbot)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={ui.td}>Costo por transacción</td>
                <td className={ui.td}>$0.05-$0.15</td>
                <td className={ui.td}>~$0 marginal (licencia fija)</td>
              </tr>
              <tr>
                <td className={ui.td}>500 transacciones/día × 22 días</td>
                <td className={ui.td}>$550-$1,650/mes</td>
                <td className={ui.td}>$220/mes (licencia fija, sin costo por transacción)</td>
              </tr>
              <tr>
                <td className={ui.costTdTotal}>Costo anual total</td>
                <td className={ui.costTdTotal}>$6,600-$19,800</td>
                <td className={ui.costTdTotal}>$3,640-$4,640</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={styles.p}>
          <strong className={styles.strong}>Veredicto:</strong> A alto volumen, RPA es entre 3x y 6x
          más barato. La IA agéntica por API se vuelve cara rápidamente cuando escalas, especialmente
          si cada transacción requiere razonamiento complejo.
        </p>
        <div className={ui.callout("orange")}>
          <div className={ui.calloutTitle("orange")}>La moraleja</div>
          <p className={styles.p}>
            El costo depende del volumen y la criticidad, no solo del precio de la suscripción.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 7: ESCENARIOS REALES ── */}
      <section id="casos-reales" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>7. Tres escenarios reales: cuál elegirías tú</h2>

        <div className={ui.scenarioCard("border-warning")}>
          <h3 className={styles.h3}>Escenario 1: Scraping de precios de competencia</h3>
          <p className={styles.p}>
            Una empresa de retail necesita revisar los precios de 50 productos en 5 sitios web de la
            competencia, todos los días.
          </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Con RPA:</strong> configuras el bot una vez, corre todos
            los días a las 6 AM, extrae los 250 precios en 10 minutos y los deja en un Excel.
            Problema: cuando un competidor cambia su sitio web (cosa que pasa cada 2-3 meses), el bot
            se rompe y necesita mantenimiento.
          </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Con IA agéntica:</strong> le dices &quot;revisa estos 5 sitios
            y dime los precios de estos productos.&quot; El agente navega, interpreta las páginas aunque
            cambien de diseño, y te da un resumen. Problema: tarda 45 minutos en lugar de 10, y
            ocasionalmente puede leer mal un precio.
          </p>
          <div className="mt-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-warning/15 text-warning border border-warning/30 text-sm font-bold">
              Mejor opción: Híbrido (self-healing RPA)
            </span>
          </div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            RPA hace el scraping diario rápido. Cuando se rompe por un cambio de UI, un agente de IA
            identifica la nueva estructura y actualiza la configuración del bot.
          </p>
        </div>

        <div className={ui.scenarioCard("border-success")}>
          <h3 className={styles.h3}>Escenario 2: Clasificación de correos de soporte</h3>
          <p className={styles.p}>
            Una empresa recibe 200 correos diarios de clientes y necesita clasificarlos por urgencia y
            tipo (reclamo, consulta, solicitud de cotización).
          </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Con RPA:</strong> puedes crear reglas basadas en palabras
            clave: si dice &quot;urgente&quot; → prioridad alta, si dice &quot;cotización&quot; → ventas. Pero los
            clientes no escriben así. Un correo dice &quot;necesito esto para ayer&quot; sin la palabra
            &quot;urgente&quot; y el bot lo clasifica mal.
          </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Con IA agéntica:</strong> el agente lee el correo
            completo, entiende la intención real, detecta el tono de urgencia y clasifica correctamente
            el 95%+ de los casos. Incluso puede redactar una respuesta preliminar.
          </p>
          <div className="mt-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-success/15 text-success border border-success/30 text-sm font-bold">
              Mejor opción: IA Agéntica, claramente
            </span>
          </div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            El razonamiento contextual destruye a las reglas fijas en tareas que requieren comprensión
            de lenguaje natural.
          </p>
        </div>

        <div className={ui.scenarioCard("border-accent")}>
          <h3 className={styles.h3}>Escenario 3: Conciliación bancaria mensual</h3>
          <p className={styles.p}>
            Una empresa necesita conciliar 3,000 movimientos bancarios contra su ERP cada mes.
          </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Con RPA:</strong> el bot descarga el extracto del banco,
            lo compara registro por registro contra el ERP, marca las diferencias y genera un reporte.
            Precisión: 99.9%. Tiempo: 25 minutos. Sin supervisión.
          </p>
          <p className={styles.p}>
            <strong className={styles.strong}>Con IA agéntica:</strong> podría hacer algo similar, pero
            el riesgo de que &quot;interprete&quot; un monto de forma incorrecta, o que una alucinación marque
            un registro como conciliado cuando no lo es, es inaceptable para el equipo financiero.
          </p>
          <div className="mt-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent border border-accent/30 text-sm font-bold">
              Mejor opción: RPA, sin duda
            </span>
          </div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Cuando el error cuesta dinero real y necesitas auditoría perfecta, no hay discusión.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 8: MODELO HÍBRIDO ── */}
      <section id="hibrido" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>8. El modelo que realmente funciona: RPA + IA Agéntica</h2>
        <p className={styles.p}>
          Las empresas que mejor están automatizando en 2026 no eligen entre uno u otro. Usan ambos
          donde cada uno es más fuerte. Es lo mismo que ocurre con un equipo humano bien organizado:
          tienes gente que ejecuta procesos operativos con disciplina y precisión, y tienes gente que
          analiza, interpreta y toma decisiones ante lo inesperado. El modelo híbrido replica esa
          lógica con tecnología: RPA es el operador disciplinado, la IA es el analista inteligente.
        </p>
        <blockquote className={ui.quote}>
          Ni el RPA solo ni la IA sola habrían logrado lo que logramos combinándolos. El resultado:
          precisión del 99.2% con procesamiento automático del 85% de las facturas.
          <cite className={ui.cite}>Caso real de implementación Robotipy</cite>
        </blockquote>
        <p className={styles.p}>Un ejemplo concreto que implementamos en Robotipy:</p>
        <div className="my-6">
          {[
            {
              n: 1,
              color: "purple",
              t: "IA lee y entiende los correos",
              d: "Un agente de IA lee los correos entrantes con facturas adjuntas, extrae los datos clave (proveedor, monto, fecha) y los valida contra el presupuesto aprobado.",
            },
            {
              n: 2,
              color: "accent",
              t: "RPA ejecuta en el ERP",
              d: "Un bot de RPA toma esos datos validados e ingresa la factura en el ERP, la asocia a la orden de compra y dispara el flujo de aprobación. Sin errores. En segundos.",
            },
            {
              n: 3,
              color: "purple",
              t: "IA maneja las excepciones",
              d: "Si hay una discrepancia, el agente de IA redacta un correo al proveedor pidiendo aclaración, usando lenguaje profesional y contexto del documento.",
            },
          ].map((s) => (
            <div key={s.n} className={ui.step}>
              <div className={s.color === "purple" ? ui.stepNumPurple : ui.stepNum}>{s.n}</div>
              <div>
                <h4 className={ui.stepTitle}>{s.t}</h4>
                <p className={ui.stepBody}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.p}>
          El resultado:{" "}
          <strong className={styles.strong}>
            reducción del tiempo de procesamiento de 5 días a 2 horas
          </strong>
          . Ni el RPA solo ni la IA sola habrían logrado eso.
        </p>
        <p className={styles.p}>
          Este modelo híbrido tiene un nombre en la industria:{" "}
          <strong className={styles.strong}>&quot;self-healing RPA&quot;</strong>. Proveedores como UiPath ya
          integran agentes de IA que reparan bots automáticamente cuando una interfaz cambia. Según
          Tech Mahindra, las implementaciones de self-healing reducen el mantenimiento por cambios de
          UI entre un 60% y 70%. Diversos estudios de la industria reportan que los programas de RPA
          destinan una porción significativa de su presupuesto al mantenimiento continuo, y el
          self-healing ataca directamente ese problema.
        </p>
        <p className={styles.p}>
          En LATAM,{" "}
          <strong className={styles.strong}>Rocketbot está desarrollando &quot;Resilient&quot;</strong>, su propia
          capacidad de auto-reparación que apunta a competir con lo que UiPath ofrece en el mercado
          enterprise. Como partners de Rocketbot, hemos visto el roadmap de cerca: Resilient
          permitirá que los bots detecten cambios en las interfaces y se reconfiguren
          automáticamente, reduciendo drásticamente los tiempos de caída por mantenimiento. Para
          empresas que ya usan Rocketbot, esto significa que el modelo híbrido RPA + IA no será un
          lujo, sino una funcionalidad nativa de la plataforma. Para 2027, se espera que esta
          capacidad sea el estándar en la industria, no la excepción.
        </p>
      </section>

      {/* ── SECCIÓN 9: FRAMEWORK ── */}
      <section id="decision" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>9. Cómo decidir: el framework de 5 preguntas</h2>
        <p className={styles.p}>
          Antes de elegir entre RPA o IA agéntica, responde estas 5 preguntas:
        </p>
        <div className="overflow-x-auto">
          <table className={ui.table}>
            <thead>
              <tr>
                <th className={ui.frameworkTh}>#</th>
                <th className={ui.frameworkTh}>Pregunta</th>
                <th className={ui.frameworkTh}>Si la respuesta es SÍ → usa...</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "¿El proceso sigue reglas fijas y siempre iguales?", "cyan", "RPA"],
                ["2", "¿Necesitas procesar más de 100 transacciones por día?", "cyan", "RPA"],
                ["3", "¿El proceso requiere \"leer\" y \"entender\" texto no estructurado?", "purple", "IA Agéntica"],
                ["4", "¿La interfaz donde trabajas cambia frecuentemente?", "purple", "IA Agéntica"],
                ["5", "¿Un error del 1-2% es inaceptable (financiero, regulatorio)?", "cyan", "RPA"],
              ].map(([num, q, tone, label]) => (
                <tr key={num}>
                  <td className={ui.frameworkNum}>{num}</td>
                  <td className={ui.td}>{q}</td>
                  <td className={ui.td}><span className={ui.badge(tone)}>{label}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.p}>
          Este framework no es teórico: es exactamente lo que usamos en Robotipy cuando un cliente
          nos contacta. Le hacemos estas 5 preguntas en la primera reunión de diagnóstico y con las
          respuestas ya sabemos qué tecnología (o combinación) recomendarle. El 70% de los proyectos
          que implementamos hoy terminan usando algún grado de modelo híbrido, porque la realidad de
          las empresas rara vez cabe en una sola categoría.
        </p>
        <p className={styles.p}>
          Un error común es elegir la tecnología primero y buscar el problema después. Hemos visto
          empresas que compraron licencias de IA agéntica para procesos que un script de Python
          resolvía en 20 líneas, y otras que gastaron meses configurando RPA para tareas donde un
          agente de IA habría funcionado desde el día uno sin mantenimiento. La clave está en
          diagnosticar antes de prescribir.
        </p>
        <div className={ui.callout("purple")}>
          <div className={ui.calloutTitle("purple")}>Tip</div>
          <p className={styles.p}>
            Si respondiste SÍ a preguntas de ambos lados, la respuesta es el{" "}
            <strong className={styles.strong}>modelo híbrido</strong>. Y probablemente es donde mayor
            valor vas a encontrar.
          </p>
        </div>
      </section>

      {/* ── SECCIÓN 10: FAQ ── */}
      <section id="faq" className="space-y-4 scroll-mt-24">
        <h2 className={styles.h2}>10. Preguntas Frecuentes</h2>
        <div className="my-6">
          {faqs.map((f, i) => (
            <details key={i} className={ui.faqItem} open={i === 0}>
              <summary className={ui.faqQ}>
                <span>{f.q}</span>
                <span className="text-accent text-2xl font-light flex-shrink-0">+</span>
              </summary>
              <div className={ui.faqA}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── LINKS INTERNOS ── */}
      <section className="space-y-3">
        <h2 className={styles.h2}>Profundiza en cada servicio</h2>
        <p className={styles.p}>
          Si quieres llevar lo que leíste a un proyecto concreto, estas son las páginas donde
          explicamos cada servicio en detalle:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/rpa" className="link link-accent">
              Automatización RPA con Rocketbot
            </Link>
            : cómo construimos bots, qué procesos automatizar primero y nuestra metodología de
            implementación.
          </li>
          <li className={styles.li}>
            <Link href="/chatbot" className="link link-accent">
              Chatbots con IA
            </Link>
            : asistentes conversacionales conectados a tus datos para atención al cliente y equipos
            internos.
          </li>
          <li className={styles.li}>
            <Link href="/roi-calculator" className="link link-accent">
              Calculadora ROI RPA
            </Link>
            : estima ahorros, payback y VPN antes de presentar el caso de negocio.
          </li>
          <li className={styles.li}>
            <Link href="/success-cases" className="link link-accent">
              Casos de éxito
            </Link>
            : 30+ automatizaciones reales, con métricas concretas de ahorro, en industrias de
            Latinoamérica y España.
          </li>
        </ul>
      </section>

      {/* ── CTA ── */}
      <div className={ui.cta}>
        <h2 className={ui.ctaTitle}>¿No sabes si necesitas RPA, IA o ambos?</h2>
        <p className={ui.ctaText}>
          Analizamos tus procesos y te decimos cuál es la mejor tecnología para cada uno, sin
          venderte algo que no necesitas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonMain href="/contact-us" text="Agenda tu evaluación gratuita" />
          <Link
            href="/roi-calculator"
            className="inline-block px-7 py-3 rounded-full border border-white/30 text-white font-semibold hover:border-white/60 transition-colors"
          >
            Calcula tu ROI
          </Link>
        </div>
      </div>
    </>
  ),
};
