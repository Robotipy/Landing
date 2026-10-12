import config from "@/config";
import DiagnosticCta from "./DiagnosticCta";
import { pricing, usd } from "./pricing";
import { container } from "./ui";

export default function Closing() {
  const summary = [
    { label: "Diagnóstico", value: usd(pricing.diagnostic) },
    { label: "Proyecto", value: `${usd(pricing.rpaAverage)} en promedio` },
    { label: "Licencia", value: `${usd(pricing.license)} solo si no tienes` },
    { label: "Soporte", value: `desde ${usd(pricing.supportFrom)} al mes` },
  ];

  return (
    <section
      id="agenda"
      aria-labelledby="agenda-titulo"
      className="scroll-mt-16 bg-primary py-16 text-white md:py-24"
    >
      <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
        <div className="lg:col-span-5">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
            <span aria-hidden="true" className="h-0.5 w-6 bg-accent" />
            Diagnóstico sin costo
          </p>
          <h2
            id="agenda-titulo"
            tabIndex={-1}
            className="mt-4 text-[28px] font-bold leading-[36px] tracking-tight [text-wrap:balance] focus:outline-none md:text-[32px] md:leading-[40px]"
          >
            Cuéntanos qué proceso quieres automatizar
          </h2>
          <p className="mt-4 text-base leading-[26px] text-white/80">
            Elige el proceso y si tu empresa tiene licencia Rocketbot. Después agendas el
            diagnóstico: una reunión donde revisamos tu proceso y, normalmente, te damos un rango de
            precio.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {summary.map((item) => (
              <div key={item.label} className="bg-primary p-4">
                <dt className="text-sm text-white/65">{item.label}</dt>
                <dd className="mt-1 text-[15px] font-bold leading-6 tabular-nums">{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-[15px] text-white/75">
            ¿Prefieres escribirnos?{" "}
            <a
              href={`mailto:${config.mailgun.supportEmail}`}
              className="font-bold text-white underline decoration-accent decoration-2 underline-offset-4"
            >
              {config.mailgun.supportEmail}
            </a>
          </p>
        </div>

        <div className="lg:col-span-7">
          <DiagnosticCta />
        </div>
      </div>
    </section>
  );
}
