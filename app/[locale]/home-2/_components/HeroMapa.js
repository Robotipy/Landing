import { Link } from "@/i18n/routing";
import ButtonMain from "@/components/ButtonMain";
import CoverageLegend from "./CoverageLegend";
import {
  Chevron,
  container,
  primaryButtonClass,
  primaryButtonStyle,
  secondaryButtonClass,
  secondaryButtonStyle,
} from "./ui";

const MAP_ID = "mapa-cobertura";

function Selector({ label, children }) {
  return (
    <details data-selector className="relative">
      <summary className="h2-surface h2-line-strong flex min-h-12 items-center justify-between gap-3 rounded-lg border px-4 text-[15px] font-medium text-white transition-colors hover:border-white/30">
        <span>{label}</span>
        <Chevron className="h2-chev h2-muted" />
      </summary>
      <ul className="h2-surface h2-line-strong absolute left-0 top-full z-30 mt-2 max-h-[min(32rem,70vh)] w-full min-w-[17rem] overflow-y-auto rounded-lg border p-1.5 shadow-2xl shadow-black/40">
        {children}
      </ul>
    </details>
  );
}

const optionClass =
  "h2-text flex min-h-11 items-center rounded-md px-3 text-[15px] leading-snug transition-colors hover:bg-white/5 hover:text-white";

function CoverageMap({ rows, systems, title, caption, legendDefault }) {
  return (
    <div className="h2-surface h2-line rounded-lg border p-5 xl:p-6">
      <p className="h2-eyebrow">{title}</p>
      <div className="mt-4 overflow-x-auto">
        <table id={MAP_ID} className="w-full border-collapse">
          <caption className="h2-mono h2-muted pb-3 text-left text-[11px] leading-4">{caption}</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[8.5rem] pb-2 align-bottom">
                <span className="sr-only">Industria</span>
              </th>
              {systems.map((system) => {
                const ariaLabel =
                  system.short === system.name ? system.name : `${system.short}, ${system.name}`;
                return (
                  <th
                    key={system.slug}
                    scope="col"
                    data-col-head={system.slug}
                    className="h2-mono h2-muted h-24 px-0 pb-2 align-bottom text-[11px] font-normal tracking-[0.04em] transition-colors"
                  >
                    <a
                      href={`#sistema-${system.slug}`}
                      title={system.name}
                      aria-label={ariaLabel}
                      className="mx-auto flex w-9 justify-center rounded py-1 hover:text-white"
                    >
                      <span className="h2-vtext">{system.short}</span>
                    </a>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.slug} className="h2-line border-t">
                <th
                  scope="row"
                  data-row-head={row.slug}
                  className="h2-text py-1 pr-3 text-left align-middle text-[13px] font-medium leading-tight transition-colors"
                >
                  <Link href={row.href} className="rounded hover:text-white">
                    {row.short}
                  </Link>
                </th>
                {row.cells.map((cell) => (
                  <td key={cell.system} className="p-0 text-center">
                    {cell.lit ? (
                      <Link
                        href={row.href}
                        aria-label={cell.legend}
                        data-legend={cell.legend}
                        data-row={row.slug}
                        data-col={cell.system}
                        data-track="celda_mapa"
                        data-track-item={`${row.slug}:${cell.system}`}
                        className="h2-cell flex h-9 w-full min-w-9 items-center justify-center rounded"
                      >
                        <span className="h2-dot h2-dot-on" aria-hidden="true" />
                      </Link>
                    ) : (
                      <span
                        data-legend={cell.legend}
                        data-row={row.slug}
                        data-col={cell.system}
                        className="flex h-9 min-w-9 items-center justify-center"
                      >
                        <span className="h2-dot h2-dot-off" aria-hidden="true" />
                        <span className="sr-only">Sin caso publicado</span>
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CoverageLegend tableId={MAP_ID} defaultText={legendDefault} />
    </div>
  );
}

export default function HeroMapa({ hero, industries, systems, industryCount, ctaLabel, ctaHref }) {
  return (
    <section id="inicio" aria-labelledby="inicio-title" className="h2-grid scroll-mt-20">
      <div
        className={`${container} grid gap-10 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-12 lg:gap-10 lg:py-20 xl:gap-14`}
      >
        <div className="lg:col-span-5">
          <p className="h2-eyebrow">{hero.eyebrow}</p>
          <h1
            id="inicio-title"
            className="mt-4 text-[1.875rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.25rem] xl:text-[2.625rem]"
          >
            {hero.title}
          </h1>
          <p className="h2-text mt-5 text-base leading-relaxed md:text-lg">{hero.body}</p>

          <div className="mt-7 grid gap-3 lg:grid-cols-2">
            <Selector label="Elige tu industria">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={industry.href}
                    data-track="selector_industria"
                    data-track-item={industry.slug}
                    className={optionClass}
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
              <li className="h2-line mt-1 border-t pt-1">
                <a
                  href="#industrias"
                  data-track="selector_industria"
                  data-track-item="todas"
                  className={`${optionClass} font-medium`}
                >
                  Ver las {industryCount} industrias
                </a>
              </li>
            </Selector>
            <Selector label="Elige tu sistema">
              {systems.map((system) => (
                <li key={system.slug}>
                  <a
                    href={`#sistema-${system.slug}`}
                    data-track="selector_sistema"
                    data-track-item={system.slug}
                    className={optionClass}
                  >
                    {system.name}
                  </a>
                </li>
              ))}
            </Selector>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-start">
            <ButtonMain
              text={ctaLabel}
              link={ctaHref}
              noblank
              data-track="cta_diagnostico"
              data-track-item="hero"
              className={`${primaryButtonClass} w-full sm:w-auto`}
              style={primaryButtonStyle}
            />
            <ButtonMain
              type="quaternary"
              text={hero.secondaryLabel}
              link={hero.secondaryHref}
              noblank
              className={`${secondaryButtonClass} w-full sm:w-auto`}
              style={secondaryButtonStyle}
            />
          </div>
          <p className="h2-muted mt-5 max-w-xl text-sm leading-relaxed">{hero.priceLine}</p>
        </div>

        <div className="hidden lg:col-span-7 lg:block">
          <CoverageMap
            rows={industries}
            systems={systems}
            title={hero.mapTitle}
            caption={hero.mapCaption}
            legendDefault={hero.mapLegendDefault}
          />
        </div>
      </div>
    </section>
  );
}
