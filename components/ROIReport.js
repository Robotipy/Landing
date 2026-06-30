"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { computeROI, fmtMoney, fmtPct, DEFAULT_FORM, parseParams } from "@/libs/roi";

const printCss = `
@media print {
  .roi-no-print { display: none !important; }
  [id^="zsiq"], .zsiq_floatmain, #zsiqbtn, .zsiq_flt_rel, .skip-to-content { display: none !important; }
  html, body { background: #fff !important; }
  @page { margin: 18mm; }
}
`;

function Row({ label, value, strong }) {
  return (
    <div
      className={`flex items-center justify-between py-2 ${
        strong ? "border-t border-gray-300 font-semibold" : "border-b border-gray-100"
      }`}
    >
      <span className={strong ? "text-[#00182B]" : "text-gray-600"}>{label}</span>
      <span className="text-[#00182B]">{value}</span>
    </div>
  );
}

export default function ROIReport() {
  const t = useTranslations("roiCalculator");
  const [form, setForm] = useState(null);

  useEffect(() => {
    const { values } = parseParams(window.location.search);
    setForm({ ...DEFAULT_FORM, ...values });
  }, []);

  const calc = useMemo(() => (form ? computeROI(form) : null), [form]);

  useEffect(() => {
    if (!form) return;
    const id = setTimeout(() => {
      try {
        window.print();
      } catch {
        /* el usuario puede usar el botón manual */
      }
    }, 600);
    return () => clearTimeout(id);
  }, [form]);

  if (!form || !calc) {
    return <main className="min-h-screen bg-white" />;
  }

  const proceso = form.descripcion || t("step4.noDescription");
  const metrics = [
    { label: t("step4.metrics.annualSavings"), value: fmtMoney(calc.beneficioAnual) },
    { label: t("step4.metrics.payback"), value: `${calc.paybackMeses.toFixed(1)} ${t("step4.metrics.paybackUnit")}` },
    { label: t("step4.metrics.roi1y"), value: fmtPct(calc.ROI1a) },
    { label: t("step4.metrics.npv"), value: fmtMoney(calc.VPN) },
  ];

  return (
    <main className="min-h-screen bg-white text-[#00182B]">
      <style dangerouslySetInnerHTML={{ __html: printCss }} />
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="roi-no-print mb-8 flex flex-wrap justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="rounded-md bg-[#039695] px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            {t("step4.cta.pdf")}
          </button>
          <Link
            href="/roi-calculator"
            className="rounded-md border border-[#039695] px-5 py-2 text-sm font-semibold text-[#039695] hover:bg-[#039695]/5"
          >
            {t("report.back")}
          </Link>
        </div>

        <header className="mb-8 border-b border-gray-200 pb-6">
          <div className="text-lg font-bold text-[#039695]">Robotipy</div>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight">{t("hero.title")}</h1>
          <p className="mt-2 text-gray-600">
            {t("step4.processLabel")} <span className="text-[#00182B]">{proceso}</span>
          </p>
        </header>

        <section className="mb-8 rounded-xl border border-gray-200 py-8 text-center">
          <div className="text-5xl font-extrabold text-[#039695] lg:text-6xl">{fmtPct(calc.ROI)}</div>
          <p className="mt-2 text-gray-600">{t("step4.roiHero")}</p>
        </section>

        <section className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-gray-200 p-4 text-center">
              <div className="mb-1 text-[11px] uppercase tracking-wide text-gray-500">{m.label}</div>
              <div className="text-lg font-bold text-[#00182B]">{m.value}</div>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-lg font-bold">{t("step4.benefitsTitle")}</h2>
          <Row label={t("step4.benefits.productivity")} value={fmtMoney(calc.ahorroProductividad)} />
          <Row label={t("step4.benefits.errors")} value={fmtMoney(calc.ahorroErrores)} />
          <Row label={t("step4.benefits.overtime")} value={fmtMoney(calc.ahorroHorasExtra)} />
          <Row label={t("step4.benefits.fines")} value={fmtMoney(calc.multasRecuperadas)} />
          <Row label={t("step4.benefits.total")} value={fmtMoney(calc.beneficioAnual)} strong />
        </section>

        <section className="mb-8">
          <h2 className="mb-2 text-lg font-bold">{t("step4.investmentTitle")}</h2>
          <Row label={t("step4.investment.development")} value={fmtMoney(form.costoDesarrollo)} />
          <Row label={t("step4.investment.licenses")} value={fmtMoney(calc.licenciasAnualUSD)} />
          <Row label={t("step4.investment.maintenance")} value={fmtMoney(calc.mantenimiento)} />
          <Row label={t("step4.investment.year1")} value={fmtMoney(calc.inversionAño1)} strong />
          <div className="flex items-center justify-between pt-2 text-sm text-gray-500">
            <span>{t("step4.investment.recurring")}</span>
            <span>{fmtMoney(calc.recurrenteAnual)}</span>
          </div>
        </section>

        <p className="border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-500">
          {t("step4.formula")}
        </p>
        <p className="mt-3 text-xs text-gray-400">robotipy.com</p>
      </div>
    </main>
  );
}
