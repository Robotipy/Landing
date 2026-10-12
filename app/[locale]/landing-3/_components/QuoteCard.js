import { pricing, exampleAccount, usd } from "./pricing";
import { line, textMuted } from "./ui";

function QuoteLine({ label, note, amount, prefix, suffix }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <dt>
        <span className="block text-[15px] font-bold leading-6">{label}</span>
        {note && <span className={`block text-sm leading-5 ${textMuted}`}>{note}</span>}
      </dt>
      <dd className="shrink-0 text-right">
        <span className="whitespace-nowrap">
          {prefix && <span className={`mr-1 text-sm ${textMuted}`}>{prefix}</span>}
          <span className="text-xl font-bold tabular-nums text-accent">{amount}</span>
        </span>
        {suffix && <span className={`block text-sm leading-5 ${textMuted}`}>{suffix}</span>}
      </dd>
    </div>
  );
}

export default function QuoteCard() {
  return (
    <div className={`overflow-hidden rounded-xl border ${line} bg-white text-[#0A2540]`}>
      <div className={`flex items-baseline justify-between gap-4 border-b ${line} px-5 py-4 sm:px-6`}>
        <p className="text-base font-bold">Cotización de referencia</p>
        <p className={`text-sm ${textMuted}`}>Valores en USD</p>
      </div>

      <div className="px-5 pb-2 pt-5 sm:px-6">
        <p className={`text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>Un proceso</p>
        <dl className={`mt-1 divide-y ${line}`}>
          <QuoteLine label="Diagnóstico" note="Sin costo" amount={usd(pricing.diagnostic)} />
          <QuoteLine
            label="Desarrollo del robot"
            note="Con un mes de trabajo y la marcha blanca"
            amount={usd(pricing.rpaAverage)}
            suffix="en promedio"
          />
          <QuoteLine
            label="Licencia Rocketbot"
            note="Solo si tu empresa no tiene una"
            amount={usd(pricing.license)}
            suffix={pricing.licensePeriod}
          />
          <QuoteLine
            label="Soporte mensual"
            note="Opcional"
            prefix="desde"
            amount={usd(pricing.supportFrom)}
            suffix="al mes"
          />
        </dl>
      </div>

      <div className={`border-t border-dashed ${line} bg-[#F4F7F9] px-5 pb-5 pt-5 sm:px-6`}>
        <p className={`text-xs font-bold uppercase tracking-[0.12em] ${textMuted}`}>
          Ejemplo: cuenta de tres procesos
        </p>
        <dl className={`mt-1 divide-y ${line}`}>
          <QuoteLine
            label="Desarrollo de tres robots"
            amount={usd(exampleAccount.development)}
            suffix="en promedio"
          />
          <QuoteLine
            label="Soporte de la cuenta"
            prefix="desde"
            amount={usd(exampleAccount.supportMonth)}
            suffix="al mes"
          />
        </dl>
        <dl className="mt-2 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 border-t-2 border-[#0A2540] pt-4">
          <dt className="text-[15px] font-bold leading-6">Primer año, sin licencia</dt>
          <dd className="whitespace-nowrap">
            <span className={`mr-1.5 text-sm ${textMuted}`}>desde</span>
            <span className="text-[32px] font-bold leading-none tabular-nums text-accent">
              {usd(exampleAccount.firstYear)}
            </span>
          </dd>
        </dl>
      </div>

      <p className={`border-t ${line} px-5 py-4 text-sm leading-5 sm:px-6 ${textMuted}`}>
        El precio final se cierra por escrito después del diagnóstico.
        {pricing.taxNote ? ` ${pricing.taxNote}` : ""}
      </p>
    </div>
  );
}
