import { Eyebrow, container } from "./ui";

// Cuatro pasos genéricos en una franja corta, más la única línea de precio.
export default function ProcessStrip({ steps, priceLine }) {
  return (
    <section aria-labelledby="como-title" className="border-y border-slate-200 bg-white py-12 md:py-14">
      <div className={container}>
        <Eyebrow tone="light">Cómo trabajamos</Eyebrow>
        <h2 id="como-title" className="mt-3 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
          De la primera reunión al robot en producción
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/30 font-mono text-sm font-semibold text-text-primary"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-text-primary">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-3xl border-t border-slate-200 pt-6 text-center text-base leading-relaxed text-text-primary">
          {priceLine.before}
          <strong className="font-bold">{priceLine.figure}</strong>
          {priceLine.after}
        </p>
      </div>
    </section>
  );
}
