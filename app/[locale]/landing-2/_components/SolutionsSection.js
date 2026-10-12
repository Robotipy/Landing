import { SectionHeading, SystemChips, container, sectionPad } from "./ui";

export default function SolutionsSection({ solutions, note }) {
  return (
    <section id="soluciones" aria-labelledby="soluciones-title" className={`scroll-mt-16 bg-background-light ${sectionPad}`}>
      <div className={container}>
        <SectionHeading
          id="soluciones-title"
          tone="light"
          eyebrow="Soluciones probadas"
          title="Lo que ya está en producción y se puede replicar en tu empresa"
          body="Cada una salió de un proyecto real. Partir de algo que ya funciona acorta el desarrollo y deja el alcance claro antes de empezar."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <li key={s.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="text-lg font-bold leading-snug text-text-primary">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
              <SystemChips items={s.systems} tone="light" className="mt-5" />
              <p className="mt-5 border-t border-slate-200 pt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
                Nació en: {s.origin}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-600">{note}</p>
      </div>
    </section>
  );
}
