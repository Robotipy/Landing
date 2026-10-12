"use client";

// Variante de app/[locale]/evaluador-automatizacion/components/AutomationScorer.js
// con las mismas preguntas y el mismo puntaje. Cambia el cierre: el botón
// lleva al bloque de agenda de esta página y deja el resultado en el estado
// compartido. Si cambian las preguntas o los pesos allá, hay que replicarlos aquí.

import { useEffect, useMemo, useRef, useState } from "react";
import { useLandingState } from "./LandingState";
import { trackLanding } from "./track";
import { btnPrimary } from "./ui";

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
      { value: "mixto", label: "PDF digitales y correos", points: 10 },
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
    text: "Tu proceso es buen candidato. Se repite seguido y sigue reglas claras, que es donde un robot rinde más.",
    coverage: 0.8,
  },
  {
    min: 50,
    title: "Potencial medio",
    text: "Se puede automatizar buena parte del proceso. Conviene separar los pasos estándar de las excepciones y dejar estas últimas a tu equipo.",
    coverage: 0.6,
  },
  {
    min: 30,
    title: "Potencial bajo por ahora",
    text: "Antes de automatizar conviene ordenar el proceso: documentar los pasos, definir reglas y digitalizar las entradas. Así el robot no hereda el desorden.",
    coverage: 0.35,
  },
  {
    min: 0,
    title: "No es prioridad automatizarlo",
    text: "Hoy el esfuerzo de automatizarlo sería mayor que el beneficio. Es probable que tengas otros procesos con mejor retorno para empezar.",
    coverage: 0.15,
  },
];

function recommendTech(a) {
  if (a.datos === "escaneado" || a.datos === "mixto") {
    return {
      slug: "rpa-ia-documental",
      name: "RPA más IA documental",
      why: "Tus datos vienen en documentos. La IA los lee y extrae los campos, y el robot los carga en tus sistemas.",
    };
  }
  if (a.reglas === "aveces" || a.reglas === "criterio") {
    return {
      slug: "rpa-agentes-ia",
      name: "RPA más agentes de IA",
      why: "Hay decisiones que requieren criterio. Un agente de IA puede clasificar o resolver los casos ambiguos y derivar a una persona los que no.",
    };
  }
  if (a.sistemas === "todos") {
    return {
      slug: "api",
      name: "Integración por API",
      why: "Tus sistemas permiten conectarse de forma directa. Una integración es más rápida y estable que operar las pantallas.",
    };
  }
  return {
    slug: "rpa",
    name: "RPA (automatización robótica de procesos)",
    why: "El robot opera tus sistemas actuales igual que una persona, sin cambiar tu ERP ni tus planillas.",
  };
}

const fmt = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function ScoreRing({ score }) {
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
        className="stroke-accent transition-all duration-700"
      />
      <text x="60" y="68" textAnchor="middle" className="fill-white text-[30px] font-bold">
        {score}
      </text>
    </svg>
  );
}

export default function Evaluator() {
  const { setEvaluation } = useLandingState();
  const [answers, setAnswers] = useState({});
  const resultRef = useRef(null);
  const answered = Object.keys(answers).length;
  const complete = answered === QUESTIONS.length;

  const result = useMemo(() => {
    if (!complete) return null;
    const score = QUESTIONS.reduce((sum, q) => {
      const opt = q.options.find((o) => o.value === answers[q.id]);
      return sum + (opt ? opt.points : 0);
    }, 0);
    const level = LEVELS.find((l) => score >= l.min);
    const weekly = QUESTIONS[1].options.find((o) => o.value === answers.horas).hours;
    const monthly = Math.round(weekly * 4.33 * level.coverage);
    return {
      score,
      level,
      tech: recommendTech(answers),
      hoursMonth: monthly,
      hoursYear: monthly * 12,
    };
  }, [answers, complete]);

  const prevComplete = useRef(false);
  useEffect(() => {
    if (complete && !prevComplete.current) {
      trackLanding("evaluador_resultado", { score: result.score, tecnologia: result.tech.slug });
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    prevComplete.current = complete;
  }, [complete, result]);

  const select = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));

  const goToAgenda = () => {
    setEvaluation({
      score: result.score,
      tech: result.tech.slug,
      hoursMonth: result.hoursMonth,
    });
    trackLanding("evaluador_cta", { score: result.score, tecnologia: result.tech.slug });
    document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("agenda-titulo")?.focus({ preventScroll: true });
  };

  return (
    <div>
      <ol className="space-y-5">
        {QUESTIONS.map((q, i) => (
          <li key={q.id}>
            <fieldset className="rounded-xl border border-white/10 bg-white/5 p-5">
              <legend className="sr-only">{q.label}</legend>
              <p className="mb-4 text-lg font-bold text-white" aria-hidden="true">
                <span className="mr-2 tabular-nums text-accent">{i + 1}.</span>
                {q.label}
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {q.options.map((o) => {
                  const checked = answers[q.id] === o.value;
                  return (
                    <label
                      key={o.value}
                      className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-[10px] border px-4 py-3 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                        checked
                          ? "border-accent bg-accent/15 text-white"
                          : "border-white/40 text-white/80 hover:border-white/70"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={o.value}
                        checked={checked}
                        onChange={() => select(q.id, o.value)}
                        className="radio radio-accent radio-sm border-white/40"
                      />
                      <span className="text-[15px] leading-snug">{o.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>

      <div className="sticky bottom-0 z-10 -mx-4 mt-6 border-t border-white/10 bg-primary/95 px-4 py-3 backdrop-blur">
        <div className="mb-2 flex items-center justify-between text-sm text-white/75">
          <span>
            {answered} de {QUESTIONS.length} respondidas
          </span>
          {answered > 0 && (
            <button
              type="button"
              className="underline underline-offset-4 hover:text-white"
              onClick={() => setAnswers({})}
            >
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
          <div className="rounded-xl border border-accent/50 bg-white/5 p-6 sm:p-8">
            <h3 className="sr-only">Tu resultado</h3>
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <ScoreRing score={result.score} />
              <div>
                <p className="mb-1 text-sm uppercase tracking-[0.14em] text-white/65">
                  Puntaje de 0 a 100
                </p>
                <p className="text-2xl font-bold text-white">{result.level.title}</p>
                <p className="mt-2 leading-relaxed text-white/80">{result.level.text}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-primary/60 p-5">
                <p className="text-sm text-white/65">Tecnología recomendada</p>
                <p className="mt-1 text-lg font-bold text-white">{result.tech.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{result.tech.why}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-primary/60 p-5">
                <p className="text-sm text-white/65">Horas que podrías liberar</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-white">
                  Cerca de {fmt(result.hoursMonth)} h al mes
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Unas {fmt(result.hoursYear)} horas al año. Es una cifra referencial según tus
                  respuestas.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button type="button" onClick={goToAgenda} className={`${btnPrimary} w-full sm:w-auto`}>
                Agenda tu diagnóstico con este resultado
              </button>
              <p className="mt-3 text-sm text-white/65">
                Un especialista revisa tu caso contigo. Sin costo ni compromiso.
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-sm text-white/65">
            Responde las {QUESTIONS.length} preguntas y verás tu resultado al instante.
          </p>
        )}
      </div>
    </div>
  );
}
