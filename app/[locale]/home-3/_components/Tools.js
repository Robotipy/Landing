import { tools } from "@/libs/landingFacts";
import { evaluator } from "./evaluator";
import TrackedLink from "./TrackedLink";
import {
  AppLink,
  bandLight,
  btnPrimaryLight,
  cardHover,
  container,
  line,
  SectionHeader,
  sectionY,
  textLink,
  textMuted,
} from "./ui";

const COPY = {
  "/evaluador-automatizacion": `Responde ${evaluator.questions} preguntas sobre una tarea de tu empresa y obtén su puntaje de automatización, la tecnología que conviene (RPA, IA o API) y cuántas horas podrías liberar.`,
  "/roi-calculator": "Estima cuánto ahorra un proceso automatizado y en cuántos meses se paga.",
  "/calculadora-vision-artificial": "Estima cuánto cuesta implementar visión artificial en tu empresa.",
  "/calculadora-aforo-vehicular": "Compara un conteo manual con uno hecho con video e IA.",
};

const EXTRA_LINKS = {
  "/roi-calculator": { href: "/blog/como-calcular-el-roi-en-proyectos-rpa", label: "Cómo calcular el ROI" },
};

function EvaluatorCard({ tool }) {
  const { firstQuestion } = evaluator;
  return (
    <article
      aria-labelledby="herramienta-evaluador"
      className={`flex h-full min-w-0 flex-col rounded-2xl border-2 border-accent bg-white p-6 md:p-8`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3 id="herramienta-evaluador" className="text-xl font-bold leading-7">
          {tool.label}
        </h3>
        <span className="rounded-full border border-[#CFE3E3] bg-[#F4FAFA] px-2.5 py-0.5 text-xs font-semibold leading-5 text-[#027A79]">
          Sin registro
        </span>
      </div>
      <p className={`mt-3 text-[15px] leading-6 ${textMuted}`}>{COPY[tool.href]}</p>

      {/* Vista previa sin enlaces: el evaluador no lee parámetros de la URL,
          así que una opción enlazada no llegaría marcada. Si el evaluador
          empieza a leer ?frecuencia=, las opciones pueden volver a ser enlaces. */}
      <div className={`mt-6 rounded-xl border ${line} bg-[#F6F8FA] p-4 sm:p-5`}>
        <p className={`text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>Primera pregunta</p>
        <p id="evaluador-primera-pregunta" className="mt-2 text-base font-bold leading-6">
          {firstQuestion.label}
        </p>
        <ul
          aria-labelledby="evaluador-primera-pregunta"
          className={`mt-3 grid gap-x-6 gap-y-1.5 text-[15px] leading-6 sm:grid-cols-2 ${textMuted}`}
        >
          {firstQuestion.options.map((option) => (
            <li key={option.value} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9AA9B8]" />
              {option.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <TrackedLink
          href={tool.href}
          event="home_tool_click"
          params={{ tool: tool.href }}
          className={`${btnPrimaryLight} w-full sm:w-auto`}
        >
          Empezar el evaluador
        </TrackedLink>
      </div>
    </article>
  );
}

function ToolCard({ tool }) {
  const extra = EXTRA_LINKS[tool.href];
  const titleId = `herramienta-${tool.href.replace(/\W+/g, "-").replace(/^-|-$/g, "")}`;
  return (
    <article
      aria-labelledby={titleId}
      className={`relative min-w-0 rounded-2xl border ${line} bg-white p-5 md:p-6 ${cardHover} hover:border-[#B9C6D3]`}
    >
      <h3 id={titleId} className="text-lg font-bold leading-6">
        <TrackedLink
          href={tool.href}
          event="home_tool_click"
          params={{ tool: tool.href }}
          className="decoration-[#027A79] underline-offset-4 after:absolute after:inset-0 after:rounded-2xl after:content-[''] hover:underline"
        >
          {tool.label}
        </TrackedLink>
      </h3>
      <p className={`mt-2 text-[15px] leading-6 ${textMuted}`}>{COPY[tool.href]}</p>
      {extra && (
        <AppLink href={extra.href} className={`${textLink} relative z-10 mt-3 inline-block text-[15px] leading-6`}>
          {extra.label}
        </AppLink>
      )}
    </article>
  );
}

export default function Tools() {
  const main = tools.find((t) => t.href === evaluator.href);
  const others = tools.filter((t) => t !== main);

  return (
    <section id="herramientas" aria-labelledby="herramientas-titulo" className={`${bandLight} ${sectionY}`}>
      <div className={container}>
        <SectionHeader
          titleId="herramientas-titulo"
          eyebrow="Herramientas gratuitas"
          title="Evalúa tu caso antes de la reunión"
          body="Úsalas por tu cuenta o llega al diagnóstico con el resultado."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {main && (
            <div className="lg:col-span-7">
              <EvaluatorCard tool={main} />
            </div>
          )}
          <div className={`grid gap-5 md:grid-cols-3 ${main ? "lg:col-span-5 lg:grid-cols-1" : "lg:col-span-12"}`}>
            {others.map((tool) => (
              <ToolCard key={tool.href} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
