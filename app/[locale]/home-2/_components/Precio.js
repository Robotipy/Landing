import { MixedLink, SectionHeader, container, sectionBase, visibleLinks } from "./ui";

// Espacios duros para que el monto no se parta: "USD 6.000" / "en promedio".
const NBSP = "\u00a0";
const keepTogether = (value) =>
  String(value)
    .replace(/USD /g, `USD${NBSP}`)
    .replace(/ (a|al|en) (\d|mes|promedio)/g, ` $1${NBSP}$2`);

export default function Precio({ steps, rows, principle, security, links, publicados }) {
  return (
    <section id="precio" aria-labelledby="precio-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="precio-title"
          eyebrow="Método y precio"
          title="Cómo trabajamos y cuánto cuesta"
          body="Antes de la primera reunión ya puedes conocer el plazo y el rango de precio. El valor final se cierra por escrito después del diagnóstico."
        />

        <ol className="h2-line mt-10 grid border-t md:mt-12 lg:grid-cols-4 lg:gap-8 lg:border-t-0">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="h2-line flex gap-4 border-b py-5 lg:flex-col lg:gap-3 lg:border-b-0 lg:border-t lg:py-0 lg:pt-5"
            >
              <span className="h2-mono h2-num shrink-0 pt-0.5 text-sm text-[rgb(3,150,149)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block text-base font-semibold text-white">{step.title}</span>
                <span className="h2-text mt-1.5 block text-[15px] leading-relaxed">{step.description}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <caption className="h2-eyebrow pb-4 text-left">Precios de referencia</caption>
                <thead>
                  <tr className="h2-line border-b">
                    <th scope="col" className="h2-mono h2-muted pb-3 pr-4 text-xs font-normal">
                      Concepto
                    </th>
                    <th scope="col" className="h2-mono h2-muted pb-3 text-right text-xs font-normal">
                      Precio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.concept} className="h2-line border-b align-top">
                      <th scope="row" className="py-4 pr-4 font-normal">
                        <span className="block text-[15px] font-medium text-white">{row.concept}</span>
                        {row.note && (
                          <span className="h2-muted mt-1 block text-sm leading-relaxed">{row.note}</span>
                        )}
                      </th>
                      <td className="h2-num w-[9.5rem] py-4 text-right text-[15px] font-semibold text-white sm:w-auto sm:whitespace-nowrap sm:text-base">
                        {keepTogether(row.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="h2-surface rounded-r-lg border-l-2 border-[rgb(3,150,149)] p-6">
              <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
              <p className="h2-text mt-3 text-[15px] leading-relaxed">{principle.text}</p>
            </div>
            <div>
              <h3 className="h2-eyebrow">Seguridad</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {security.map((line) => (
                  <li key={line} className="h2-text flex gap-3 text-[15px] leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(3,150,149)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid gap-x-8 text-[15px] sm:grid-cols-2 lg:grid-cols-3">
          {visibleLinks(links, publicados).map((link) => (
            <li key={link.label} className="flex min-h-11 items-center">
              <MixedLink item={link} publicados={publicados} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
