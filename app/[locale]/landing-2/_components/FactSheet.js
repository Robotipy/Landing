import ClientLogos from "@/components/landing/ClientLogos";
import { SystemChips, container } from "./ui";

// Franja de hechos: cinco datos de libs/landingFacts.js y los sistemas sobre
// los que corren nuestros robots (respaldados por libs/successCases.js).
export default function FactSheet({ cells, systems }) {
  return (
    <section aria-labelledby="hechos-title" className="border-t border-white/10 bg-primary pb-12 md:pb-16">
      <div className={container}>
        <h2 id="hechos-title" className="sr-only">
          Robotipy en cinco datos
        </h2>
        <p className="pt-8 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
          Ficha de Robotipy
        </p>
        <dl className="mt-4 grid grid-cols-2 border-l border-t border-white/10 lg:grid-cols-5">
          {cells.map((cell, i) => (
            <div
              key={cell.label}
              className={`flex flex-col-reverse justify-end border-b border-r border-white/10 p-4 md:p-5 ${
                i === cells.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <dt className="mt-2 text-sm leading-snug text-white/70">{cell.label}</dt>
              <dd className="text-2xl font-bold tracking-tight text-white tabular-nums sm:text-3xl xl:text-4xl">{cell.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-white/70">
            Sistemas en los que ya corren robots construidos por nuestro equipo.
          </p>
          <SystemChips items={systems} className="mt-4" />
        </div>
        <ClientLogos tone="dark" className="mt-10" />
      </div>
    </section>
  );
}
