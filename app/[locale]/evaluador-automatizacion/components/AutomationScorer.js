"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/routing";

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
      { value: "2a5", label: "2–5 h", points: 10, hours: 3.5 },
      { value: "5a15", label: "5–15 h", points: 16, hours: 10 },
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
    text: "Tu proceso es un candidato ideal. Es repetitivo, frecuente y basado en reglas: el tipo de tarea donde un robot trabaja sin pausas y sin errores de tipeo.",
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

function track(name, params) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params || {});
  }
}

const fmt = (n) => Math.round(n).toLocaleString("es-CL");

function ScoreRing({ score, ringClass }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 120 120" className="w-32 h-32 shrink-0" aria-hidden="true">
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

export default function AutomationScorer() {
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
      track("evaluador_resultado", { score: result.score });
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    prevComplete.current = complete;
  }, [complete, result]);

  const select = (id, value) => setAnswers((prev) => ({ ...prev, [id]: value }));

  return (
    <div className="max-w-3xl mx-auto">
      <ol className="space-y-6">
        {QUESTIONS.map((q, i) => (
          <li key={q.id}>
            <fieldset className="border border-white/10 bg-white/5 rounded-2xl p-5">
              <legend className="sr-only">{q.label}</legend>
              <p className="text-white font-semibold text-lg mb-4" aria-hidden="true">
                <span className="text-accent mr-2">{i + 1}.</span>
                {q.label}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((o) => {
                  const checked = answers[q.id] === o.value;
                  return (
                    <label
                      key={o.value}
                      className={`flex items-center gap-3 min-h-12 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                        checked
                          ? "border-accent bg-accent/15 text-white"
                          : "border-white/10 text-white/80 hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
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

      <div className="sticky bottom-0 z-10 -mx-4 px-4 py-3 mt-6 bg-primary/95 backdrop-blur border-t border-white/10">
        <div className="flex items-center justify-between text-sm text-white/70 mb-2">
          <span>
            {answered} de {QUESTIONS.length} respondidas
          </span>
          {answered > 0 && (
            <button type="button" className="link link-hover" onClick={() => setAnswers({})}>
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
          className="h-2 w-full rounded-full bg-white/10 overflow-hidden"
        >
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div ref={resultRef} className="scroll-mt-28 mt-10" aria-live="polite">
        {result ? (
          <section className="border border-accent/40 bg-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="sr-only">Tu resultado</h2>
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <ScoreRing score={result.score} ringClass={result.level.ring} />
              <div>
                <p className="text-sm uppercase tracking-widest text-white/60 mb-1">
                  Puntaje de automatización
                </p>
                <p className={`text-2xl font-bold ${result.level.tone}`}>{result.level.title}</p>
                <p className="text-white/80 mt-2 leading-relaxed">{result.level.text}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl bg-primary/60 border border-white/10 p-5">
                <p className="text-sm text-white/60">Tecnología recomendada</p>
                <p className="text-lg font-semibold text-white mt-1">{result.tech.name}</p>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">{result.tech.why}</p>
              </div>
              <div className="rounded-xl bg-primary/60 border border-white/10 p-5">
                <p className="text-sm text-white/60">Horas que podrías liberar</p>
                <p className="text-lg font-semibold text-white mt-1">
                  ~{fmt(result.hoursMonth)} h/mes
                </p>
                <p className="text-sm text-white/70 mt-2 leading-relaxed">
                  Unas {fmt(result.hoursYear)} horas al año. Cifra referencial según tus respuestas.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center w-full sm:w-auto min-h-14 px-8 py-3 leading-tight rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-lg transition-colors"
                onClick={() => track("evaluador_cta", { score: result.score })}
              >
                Agenda un diagnóstico gratuito
              </Link>
              <p className="text-xs text-white/50 mt-3">
                30 minutos con un especialista para validar tu caso. Sin costo ni compromiso.
              </p>
            </div>
          </section>
        ) : (
          <p className="text-center text-white/60 text-sm">
            Responde las {QUESTIONS.length} preguntas y verás tu resultado al instante.
          </p>
        )}
      </div>
    </div>
  );
}
