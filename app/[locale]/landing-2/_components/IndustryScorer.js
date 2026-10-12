"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { scrollToId, useIndustry } from "./IndustryContext";
import { trackLanding } from "./track";
import { ctaClass } from "./ui";

// Mismas preguntas, puntajes y niveles de
// app/[locale]/evaluador-automatizacion/components/AutomationScorer.js.
// Ese componente no exporta sus datos ni acepta props, por eso se replican
// aquí; si cambian allá, hay que cambiarlos también acá. Única diferencia: el
// texto del nivel alto se reescribió para cumplir las reglas de redacción.
const QUESTIONS = [
  {
    id: "frecuencia",
    label: "¿Cada cuánto se ejecuta el proceso?",
    options: [
      { value: "diario", label: "Todos los días", points: 20 },
      { value: "semanal", label: "Cada semana", points: 14 },
      { value: "mensual", label: "Una vez al mes", points: 8 },
      { value: "esporadico", label: "De vez en cuando", points: 2 },
    ],
  },
  {
    id: "horas",
    label: "¿Cuántas horas a la semana le dedica tu equipo en total?",
    options: [
      { value: "menos2", label: "Menos de 2 h", points: 4, hours: 1 },
      { value: "2a5", label: "2 a 5 h", points: 10, hours: 3.5 },
      { value: "5a15", label: "5 a 15 h", points: 16, hours: 10 },
      { value: "mas15", label: "Más de 15 h", points: 20, hours: 20 },
    ],
  },
  {
    id: "reglas",
    label: "¿Las decisiones siguen reglas claras?",
    options: [
      { value: "siempre", label: "Siempre, es un paso a paso", points: 20 },
      { value: "casi", label: "Casi siempre, con pocas excepciones", points: 14 },
      { value: "aveces", label: "A veces hay que usar criterio", points: 7 },
      { value: "criterio", label: "Depende mucho del criterio de la persona", points: 1 },
    ],
  },
  {
    id: "datos",
    label: "¿En qué formato llegan los datos?",
    options: [
      { value: "estructurado", label: "Excel, ERP o sistemas web", points: 15 },
      { value: "mixto", label: "PDFs digitales y correos", points: 10 },
      { value: "escaneado", label: "Documentos escaneados o fotos", points: 6 },
      { value: "papel", label: "Papel o información verbal", points: 0 },
    ],
  },
  {
    id: "estabilidad",
    label: "¿Qué tan seguido cambia el proceso?",
    options: [
      { value: "estable", label: "Casi nunca, lleva más de un año igual", points: 10 },
      { value: "menor", label: "Cambios menores cada algunos meses", points: 7 },
      { value: "seguido", label: "Cambia todo el tiempo", points: 1 },
    ],
  },
  {
    id: "sistemas",
    label: "¿Los sistemas involucrados tienen API o integración disponible?",
    options: [
      { value: "todos", label: "Sí, todos", points: 5 },
      { value: "algunos", label: "Algunos", points: 5 },
      { value: "no", label: "No o no lo sé", points: 5 },
    ],
  },
  {
    id: "errores",
    label: "¿Qué pasa cuando hay un error en el proceso?",
    options: [
      { value: "alto", label: "Multas, pagos mal hechos o clientes molestos", points: 10 },
      { value: "medio", label: "Retrabajo interno de varias horas", points: 6 },
      { value: "bajo", label: "Se corrige rápido, sin mayor impacto", points: 2 },
    ],
  },
];

const LEVELS = [
  {
    min: 75,
    title: "Alto potencial de automatización",
    text: "Tu proceso es un buen candidato: se repite seguido y sigue reglas claras, que es el tipo de tarea que un robot hace sin errores de tipeo.",
    coverage: 0.8,
    tone: "text-success",
    ring: "stroke-success",
  },
  {
    min: 50,
    title: "Potencial medio",
    text: "Se puede automatizar buena parte del proceso. Conviene separar los pasos estándar de las excepciones y dejar estas últimas en manos de tu equipo.",
    coverage: 0.6,
    tone: "text-accent",
    ring: "stroke-accent",
  },
  {
    min: 30,
    title: "Potencial bajo por ahora",
    text: "Antes de automatizar, ordena el proceso: documenta los pasos, define reglas y digitaliza las entradas. Así el robot no hereda el desorden.",
    coverage: 0.35,
    tone: "text-warning",
    ring: "stroke-warning",
  },
  {
    min: 0,
    title: "No es prioridad automatizarlo",
    text: "El esfuerzo de automatizar hoy sería mayor que el beneficio. Probablemente tengas otros procesos con mejor retorno para empezar.",
    coverage: 0.15,
    tone: "text-error",
    ring: "stroke-error",
  },
];

function recommendTech(a) {
  if (a.datos === "escaneado" || a.datos === "mixto") {
    return {
      name: "RPA + IA documental (IDP)",
      why: "Tus datos vienen en documentos. La IA los lee y extrae los campos, y el robot RPA los carga en tus sistemas.",
    };
  }
  if (a.reglas === "aveces" || a.reglas === "criterio") {
    return {
      name: "RPA + agentes de IA",
      why: "Hay decisiones que requieren criterio. Un agente de IA puede clasificar o resolver casos ambiguos y derivar a una persona los que no.",
    };
  }
  if (a.sistemas === "todos") {
    return {
      name: "Integración por API",
      why: "Tus sistemas permiten conectarse directamente. Una integración es más rápida y estable que operar las pantallas.",
    };
  }
  return {
    name: "RPA (automatización robótica de procesos)",
    why: "El robot opera tus sistemas actuales tal como lo hace una persona, sin cambiar tu ERP ni tus planillas.",
  };
}

const fmt = (n) => Math.round(n).toLocaleString("es-CL");

function ScoreRing({ score, ringClass }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32 shrink-0" aria-hidden="true">
      <circle cx="60" cy="60" r={r} fill="none" strokeWidth="10" className="stroke-white/10" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c - (score / 100) * c}
        transform="rotate(-90 60 60)"
        className={`${ringClass} transition-all duration-700`}
      />
      <text x="60" y="66" textAnchor="middle" className="fill-white text-3xl font-bold">
        {score}
      </text>
    </svg>
  );
}

export default function IndustryScorer({ sectors }) {
  const { industry, display, selectIndustry, setScore } = useIndustry();
  const [answers, setAnswers] = useState({});
  const [changing, setChanging] = useState(false);
  const resultRef = useRef(null);
  const answered = Object.keys(answers).length;
  const complete = answered === QUESTIONS.length;
  const sector = sectors.find((s) => s.slug === display) || sectors[0];

  const result = useMemo(() => {
    if (!complete) return null;
    const score = QUESTIONS.reduce((sum, q) => {
      const opt = q.options.find((o) => o.value === answers[q.id]);
      return sum + (opt ? opt.points : 0);
    }, 0);
    const level = LEVELS.find((l) => score >= l.min);
    const weekly = QUESTIONS[1].options.find((o) => o.value === answers.horas).hours;
    const monthly = Math.round(weekly * 4.33 * level.coverage);
    return { score, level, tech: recommendTech(answers), hoursMonth: monthly, hoursYear: monthly * 12 };
  }, [answers, complete]);

  const prevComplete = useRef(false);
  useEffect(() => {
    if (complete && !prevComplete.current && result) {
      trackLanding("evaluador_resultado", { score: result.score, industria: industry || "ninguna" });
      const reduce =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      resultRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    prevComplete.current = complete;
  }, [complete, result, industry]);

  const select = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));

  const goToDiagnostic = (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    selectIndustry(sector.slug, "evaluador");
    setScore(result.score);
    trackLanding("evaluador_cta", { score: result.score, industria: sector.slug });
    trackLanding("landing_cta_click", { ubicacion: "evaluador", industria: sector.slug });
    scrollToId("diagnostico");
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-3 rounded-xl border border-white/10 bg-secondary px-5 py-4">
        <p className="text-sm text-white/80">
          Evaluando un proceso de <span className="font-semibold text-white">{sector.label}</span>
        </p>
        {changing ? (
          <label className="flex w-full items-center gap-3 sm:w-auto">
            <span className="sr-only">Sector del proceso</span>
            <select
              className="min-h-10 w-full rounded-lg border border-white/20 bg-primary px-3 text-sm text-white focus:border-accent focus:outline-none sm:w-auto"
              value={sector.slug}
              onChange={(e) => {
                selectIndustry(e.target.value, "evaluador");
                setChanging(false);
              }}
            >
              {sectors.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <button
            type="button"
            onClick={() => setChanging(true)}
            className="text-sm font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
          >
            Cambiar sector
          </button>
        )}
      </div>

      <ol className="space-y-5">
        {QUESTIONS.map((q, i) => (
          <li key={q.id}>
            <fieldset className="rounded-xl border border-white/10 bg-white/5 p-5">
              <legend className="sr-only">{q.label}</legend>
              <p className="mb-4 text-base font-semibold text-white md:text-lg" aria-hidden="true">
                <span className="mr-2 font-mono text-accent">{i + 1}.</span>
                {q.label}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {q.options.map((o) => {
                  const checked = answers[q.id] === o.value;
                  return (
                    <label
                      key={o.value}
                      className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                        checked
                          ? "border-accent bg-accent/15 text-white"
                          : "border-white/10 text-white/80 hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`l2-${q.id}`}
                        value={o.value}
                        checked={checked}
                        onChange={() => select(q.id, o.value)}
                        className="radio radio-accent radio-sm"
                      />
                      <span className="text-sm leading-snug">{o.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="sticky bottom-0 z-10 -mx-4 mt-6 border-t border-white/10 bg-primary/95 px-4 py-3 backdrop-blur md:mx-0 md:rounded-b-xl">
        <div className="mb-2 flex items-center justify-between text-sm text-white/70">
          <span>
            {answered} de {QUESTIONS.length} respondidas
          </span>
          {answered > 0 && (
            <button type="button" className="underline-offset-4 hover:underline" onClick={() => setAnswers({})}>
              Reiniciar
            </button>
          )}
        </div>
        <div
          role="progressbar"
          aria-label="Progreso del evaluador"
          aria-valuemin={0}
          aria-valuemax={QUESTIONS.length}
          aria-valuenow={answered}
          className="h-2 w-full overflow-hidden rounded-full bg-white/10"
        >
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div ref={resultRef} className="mt-10 scroll-mt-24" aria-live="polite">
        {result ? (
          <section className="rounded-xl border border-accent/40 bg-white/5 p-6 sm:p-8">
            <h3 className="sr-only">Tu resultado</h3>
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <ScoreRing score={result.score} ringClass={result.level.ring} />
              <div>
                <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">
                  Puntaje de automatización
                </p>
                <p className={`text-2xl font-bold ${result.level.tone}`}>{result.level.title}</p>
                <p className="mt-2 leading-relaxed text-white/80">{result.level.text}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-primary/60 p-5">
                <p className="text-sm text-white/60">Tecnología recomendada</p>
                <p className="mt-1 text-lg font-semibold text-white">{result.tech.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{result.tech.why}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-primary/60 p-5">
                <p className="text-sm text-white/60">Horas que podrías liberar</p>
                <p className="mt-1 text-lg font-semibold text-white">~{fmt(result.hoursMonth)} h/mes</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Unas {fmt(result.hoursYear)} horas al año. Cifra referencial según tus respuestas.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={`?industria=${encodeURIComponent(sector.slug)}&puntaje=${result.score}#diagnostico`}
                onClick={goToDiagnostic}
                className={`${ctaClass} w-full sm:w-auto`}
              >
                Agenda tu diagnóstico sin costo
              </a>
              <p className="mt-3 text-sm text-white/60">
                Tu puntaje y tu sector pasan al formulario, así no te preguntamos dos veces.
              </p>
            </div>
          </section>
        ) : (
          <p className="text-center text-sm text-white/60">
            Responde las {QUESTIONS.length} preguntas y verás tu resultado al instante.
          </p>
        )}
      </div>
    </div>
  );
}
