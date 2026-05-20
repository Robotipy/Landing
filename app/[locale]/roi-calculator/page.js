"use client";

import { useState, useEffect, useMemo, useRef, Suspense } from "react";
import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
import Header from "@/components/Header";
import config from "@/config";
import apiClient from "@/libs/api";

const ROCKETBOT_LICENSES = {
  S:     { name: "Licencia S",             price: 2640 },
  M:     { name: "Licencia M",             price: 4200 },
  L:     { name: "Licencia L",             price: 7590 },
  OE:    { name: "Orquestador Entry",      price: 2090 },
  OS:    { name: "Orquestador Standard",   price: 4290 },
  OEnt:  { name: "Orquestador Enterprise", price: 8690 },
  OCorp: { name: "Orquestador Corporate",  price: 13090 },
};

const LICENSE_THRESHOLDS = {
  bot: { S: 60, M: 160 },
  orchestrator: {
    entryMinPeople: 3,
    entryMinHours: 200,
    entryMaxHours: 300,
    standardMaxHours: 500,
  },
};

const DISCOUNT_RATE = 0.10;
const WORKING_DAYS_PER_MONTH = 22;
const WORKING_HOURS_PER_DAY = 8;
const MAINTENANCE_RATE = 0.10;

const TEMPLATE_KEYS = ["facturacion", "conciliacion", "reportes", "datos", "validacion", "otro"];

const TEMPLATE_DEFAULTS = {
  facturacion:  { personas: 1, horasDia: 3, diasMes: 22, erroresMes: 8,  minPorError: 20 },
  conciliacion: { personas: 1, horasDia: 4, diasMes: 22, erroresMes: 10, minPorError: 45 },
  reportes:     { personas: 1, horasDia: 2, diasMes: 22, erroresMes: 3,  minPorError: 30 },
  datos:        { personas: 2, horasDia: 5, diasMes: 22, erroresMes: 15, minPorError: 15 },
  validacion:   { personas: 1, horasDia: 3, diasMes: 22, erroresMes: 6,  minPorError: 25 },
  otro:         null,
};

const CONTACT_URL = "/contact-us";

const DEFAULT_FORM = {
  descripcion: "",
  personas: 2,
  salario: 1000,
  diasMes: 15,
  horasDia: 8,
  erroresMes: 5,
  minPorError: 30,
  horasExtraMes: 0,
  costoHoraExtra: 160,
  multasMes: 0,
  exchangeRate: 1,
  costoDesarrollo: 5800,
};

function deduceLicenses({ personas, horasDia, diasMes }) {
  const h = personas * horasDia * diasMes;
  const bot = h <= LICENSE_THRESHOLDS.bot.S ? "S"
            : h <= LICENSE_THRESHOLDS.bot.M ? "M"
            : "L";
  const t = LICENSE_THRESHOLDS.orchestrator;
  let orq = null;
  if (personas >= t.entryMinPeople || h > t.entryMinHours) {
    if      (h <= t.entryMaxHours)    orq = "OE";
    else if (h <= t.standardMaxHours) orq = "OS";
    else                              orq = "OEnt";
  }
  return orq ? [bot, orq] : [bot];
}

function computeROI(f) {
  const costoHora = f.salario / (WORKING_DAYS_PER_MONTH * WORKING_HOURS_PER_DAY);
  const totalHorasMes = f.personas * f.horasDia * f.diasMes;

  const ahorroProductividad = totalHorasMes * costoHora * 12;
  const ahorroErrores       = (f.erroresMes * f.minPorError / 60) * costoHora * 12;
  const ahorroHorasExtra    = f.horasExtraMes * f.costoHoraExtra * 12;
  const multasRecuperadas   = f.multasMes * 12;
  const beneficioAnual = ahorroProductividad + ahorroErrores + ahorroHorasExtra + multasRecuperadas;

  const licencias = deduceLicenses(f);
  const licenciasAnualUSD = licencias.reduce((sum, key) => sum + ROCKETBOT_LICENSES[key].price, 0);
  const mantenimiento = f.costoDesarrollo * MAINTENANCE_RATE;
  const inversionAño1   = f.costoDesarrollo + licenciasAnualUSD + mantenimiento;
  const recurrenteAnual = licenciasAnualUSD + mantenimiento;

  const benefDesc = [1, 2, 3].reduce(
    (s, y) => s + beneficioAnual / Math.pow(1 + DISCOUNT_RATE, y), 0
  );
  const costoDesc =
      inversionAño1   / Math.pow(1 + DISCOUNT_RATE, 1)
    + recurrenteAnual / Math.pow(1 + DISCOUNT_RATE, 2)
    + recurrenteAnual / Math.pow(1 + DISCOUNT_RATE, 3);

  const VPN = benefDesc - costoDesc;
  const ROI = costoDesc > 0 ? (VPN / costoDesc) * 100 : 0;
  const paybackMeses = beneficioAnual > 0 ? (inversionAño1 / beneficioAnual) * 12 : 0;

  return {
    licencias,
    licenciasAnualUSD,
    mantenimiento,
    inversionAño1,
    recurrenteAnual,
    beneficioAnual,
    beneficioTotal3a: beneficioAnual * 3,
    VPN,
    ROI,
    paybackMeses,
    ahorroProductividad,
    ahorroErrores,
    ahorroHorasExtra,
    multasRecuperadas,
    costoHora,
    totalHorasMes,
  };
}

const fmtMoney = (n) => `$${Math.round(n || 0).toLocaleString("en-US")}`;
const fmtPct   = (n) => `${(n || 0).toFixed(1)}%`;

function track(name, params) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params || {});
  }
}

function ProgressBar({ step, t }) {
  const labels = [t("progress.step1"), t("progress.step2"), t("progress.step3"), t("progress.step4")];
  return (
    <div className="max-w-3xl mx-auto mb-10">
      <div className="flex items-center justify-between">
        {labels.map((label, idx) => {
          const n = idx + 1;
          const isActive    = n === step;
          const isCompleted = n < step;
          return (
            <div key={n} className="flex-1 flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-300 ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                        ? "bg-teal-500 text-white ring-4 ring-teal-500/30"
                        : "bg-cyan-900/40 text-cyan-400 border border-cyan-800/30"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                  ) : n}
                </div>
                <span className={`text-xs mt-2 text-center max-w-[80px] ${isActive ? "text-teal-300 font-semibold" : "text-cyan-400"}`}>
                  {label}
                </span>
              </div>
              {n < 4 && (
                <div className={`h-0.5 flex-1 mx-2 -mt-6 transition-colors duration-300 ${
                  isCompleted ? "bg-green-500" : "bg-cyan-800/40"
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NumberField({ label, hint, name, value, onChange, min = 0, step = 1, suffix }) {
  return (
    <div className="space-y-2">
      <label className="text-cyan-50 uppercase text-xs block">{label}</label>
      <div className="relative">
        <input
          name={name}
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(e) => {
            const v = e.target.value === "" ? 0 : parseFloat(e.target.value);
            onChange(name, Number.isNaN(v) ? 0 : Math.max(min, v));
          }}
          className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 text-sm pointer-events-none">{suffix}</span>
        )}
      </div>
      {hint && <p className="text-cyan-400 text-xs">{hint}</p>}
    </div>
  );
}

const ROICalculator = () => {
  const t = useTranslations("roiCalculator");

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(DEFAULT_FORM);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "", email: "", phone: "", companyName: "", role: "", companySize: "",
  });

  const startTracked = useRef(false);
  useEffect(() => {
    if (startTracked.current) return;
    startTracked.current = true;
    track("roi_wizard_start");

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.size > 0) {
      const peopleInProcess = parseInt(urlParams.get("peopleInProcess"));
      const hoursPerDay = parseFloat(urlParams.get("hoursPerDay"));
      const avgMonthlyCostPerPerson = parseFloat(urlParams.get("avgMonthlyCostPerPerson"));
      setFormData((prev) => ({
        ...prev,
        personas: Number.isFinite(peopleInProcess) ? peopleInProcess : prev.personas,
        horasDia: Number.isFinite(hoursPerDay) ? hoursPerDay : prev.horasDia,
        salario: Number.isFinite(avgMonthlyCostPerPerson) ? avgMonthlyCostPerPerson : prev.salario,
      }));
    }
  }, []);

  const calculations = useMemo(() => computeROI(formData), [formData]);
  const recommendedLicenses = calculations.licencias;

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const applyTemplate = (key) => {
    setSelectedTemplate(key);
    track("roi_wizard_template_used", { template_name: key });
    const defaults = TEMPLATE_DEFAULTS[key];
    if (!defaults) return;
    setFormData((prev) => ({
      ...prev,
      ...defaults,
      descripcion: prev.descripcion || t(`templates.${key}.description`),
    }));
  };

  const goNext = () => {
    if (step === 1) track("roi_wizard_step_2");
    if (step === 2) track("roi_wizard_step_3");
    if (step === 3) {
      track("roi_wizard_complete", {
        roi_value: Math.round(calculations.ROI),
        payback_months: Math.round(calculations.paybackMeses * 10) / 10,
        license_type: recommendedLicenses.join("+"),
      });
    }
    setStep((s) => Math.min(4, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goBack = () => {
    setStep((s) => Math.max(1, s - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetWizard = () => {
    setFormData(DEFAULT_FORM);
    setSelectedTemplate(null);
    setStep(1);
  };

  const handleContact = () => {
    track("roi_wizard_contact");
    const licNames = recommendedLicenses.map((k) => ROCKETBOT_LICENSES[k].name).join(", ");
    const summary = t("contactSummary", {
      roi: fmtPct(calculations.ROI),
      beneficio: fmtMoney(calculations.beneficioAnual),
      payback: calculations.paybackMeses.toFixed(1),
      licencias: licNames,
      personas: formData.personas,
      horas: Math.round(calculations.totalHorasMes),
      descripcion: formData.descripcion || t("step4.noDescription"),
    });
    window.location.href = `${CONTACT_URL}?additionalInfo=${encodeURIComponent(summary)}`;
  };

  const submitEmailRequest = async (e) => {
    e.preventDefault();
    if (!leadData.name || !leadData.email || !leadData.companyName) {
      toast.error(t("lead.validationError"));
      return;
    }
    setIsSubmittingEmail(true);
    try {
      await apiClient.post("/client", leadData);
      await apiClient.post("/roi-calculator", { leadData, formData, calculations });
      toast.success(t("lead.successToast"));
      setShowLeadForm(false);
      setLeadData({ name: "", email: "", phone: "", companyName: "", role: "", companySize: "" });
    } catch (error) {
      toast.error(error.message || t("lead.errorToast"));
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prev) => ({ ...prev, [name]: value }));
  };

  const cardBg = { backgroundColor: config.colors.background };
  const cardClass = "bg-transparent border border-cyan-800/20 rounded-lg p-6 lg:p-8";

  const callout = (() => {
    if (formData.erroresMes <= 0 || formData.minPorError <= 0) return null;
    const costoHora = formData.salario / (WORKING_DAYS_PER_MONTH * WORKING_HOURS_PER_DAY);
    const costoMes = (formData.erroresMes * formData.minPorError / 60) * costoHora;
    return t("step2.callout", {
      errores: formData.erroresMes,
      minutos: formData.minPorError,
      costo: fmtMoney(costoMes),
    });
  })();

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="min-h-screen background-image">
        <section className="px-4 py-16 lg:py-20 lg:px-8">
          <div className="max-w-5xl mx-auto text-white">
            <div className="text-center mb-10">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">{t("hero.title")}</h1>
              <p className="text-base lg:text-lg text-cyan-300 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
              <button
                onClick={() => setShowDemoModal(true)}
                className="mt-6 inline-flex items-center gap-2 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/40 text-teal-200 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.78-.217-2.78-1.643V5.653z" clipRule="evenodd" />
                </svg>
                {t("hero.demo")}
              </button>
            </div>

            <ProgressBar step={step} t={t} />

            {step === 1 && (
              <div className={cardClass} style={cardBg}>
                <h2 className="text-2xl font-bold text-cyan-50 mb-2">{t("step1.title")}</h2>
                <p className="text-cyan-300 mb-6">{t("step1.subtitle")}</p>

                <div className="mb-6">
                  <label className="text-cyan-50 uppercase text-xs block mb-3">{t("step1.templatesLabel")}</label>
                  <div className="flex flex-wrap gap-2">
                    {TEMPLATE_KEYS.map((key) => {
                      const active = selectedTemplate === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => applyTemplate(key)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                            active
                              ? "bg-teal-500 border-teal-400 text-white"
                              : "bg-cyan-950/50 border-cyan-800/30 text-cyan-100 hover:border-teal-500"
                          }`}
                        >
                          {t(`templates.${key}.name`)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <label className="text-cyan-50 uppercase text-xs block">{t("step1.description.label")}</label>
                  <textarea
                    name="descripcion"
                    rows={2}
                    value={formData.descripcion}
                    onChange={(e) => updateField("descripcion", e.target.value)}
                    placeholder={t("step1.description.placeholder")}
                    className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-cyan-400 text-xs">{t("step1.description.hint")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <NumberField
                    label={t("step1.people.label")}
                    name="personas"
                    value={formData.personas}
                    onChange={updateField}
                    min={1}
                  />
                  <NumberField
                    label={t("step1.salary.label")}
                    name="salario"
                    value={formData.salario}
                    onChange={updateField}
                    min={100}
                    step={50}
                  />
                  <NumberField
                    label={t("step1.days.label")}
                    name="diasMes"
                    value={formData.diasMes}
                    onChange={updateField}
                    min={1}
                  />
                  <div className="space-y-2">
                    <label className="text-cyan-50 uppercase text-xs block">
                      {t("step1.hours.label")}
                      <span className="ml-2 text-teal-300 normal-case font-semibold">
                        {formData.horasDia}{t("step1.hours.unit")}
                      </span>
                    </label>
                    <input
                      type="range"
                      name="horasDia"
                      min={0.5}
                      max={8}
                      step={0.5}
                      value={formData.horasDia}
                      onChange={(e) => updateField("horasDia", parseFloat(e.target.value))}
                      className="w-full accent-teal-500"
                    />
                  </div>
                </div>

                <p className="text-cyan-400 text-xs mt-6">{t("step1.footnote")}</p>
              </div>
            )}

            {step === 2 && (
              <div className={cardClass} style={cardBg}>
                <h2 className="text-2xl font-bold text-cyan-50 mb-2">{t("step2.title")}</h2>
                <p className="text-cyan-300 mb-6">{t("step2.subtitle")}</p>

                {callout && (
                  <div className="border-l-4 border-orange-400 bg-orange-500/10 text-orange-100 rounded-md px-4 py-3 mb-6 text-sm">
                    {callout}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <NumberField
                    label={t("step2.errores.label")}
                    hint={t("step2.errores.hint")}
                    name="erroresMes"
                    value={formData.erroresMes}
                    onChange={updateField}
                  />
                  <NumberField
                    label={t("step2.minPorError.label")}
                    hint={t("step2.minPorError.hint")}
                    name="minPorError"
                    value={formData.minPorError}
                    onChange={updateField}
                  />
                  <NumberField
                    label={t("step2.horasExtra.label")}
                    hint={t("step2.horasExtra.hint")}
                    name="horasExtraMes"
                    value={formData.horasExtraMes}
                    onChange={updateField}
                  />
                  <NumberField
                    label={t("step2.costoHoraExtra.label")}
                    name="costoHoraExtra"
                    value={formData.costoHoraExtra}
                    onChange={updateField}
                    step={0.5}
                  />
                  <NumberField
                    label={t("step2.multas.label")}
                    hint={t("step2.multas.hint")}
                    name="multasMes"
                    value={formData.multasMes}
                    onChange={updateField}
                    step={50}
                  />
                  <NumberField
                    label={t("step2.exchangeRate.label")}
                    hint={t("step2.exchangeRate.hint")}
                    name="exchangeRate"
                    value={formData.exchangeRate}
                    onChange={updateField}
                    min={0.01}
                    step={0.01}
                  />
                  <NumberField
                    label={t("step2.costoDesarrollo.label")}
                    hint={t("step2.costoDesarrollo.hint")}
                    name="costoDesarrollo"
                    value={formData.costoDesarrollo}
                    onChange={updateField}
                    step={100}
                  />
                </div>

                <p className="text-cyan-400 text-xs mt-6">{t("step2.mantenimientoNote")}</p>
              </div>
            )}

            {step === 3 && (
              <div className={cardClass} style={cardBg}>
                <h2 className="text-2xl font-bold text-cyan-50 mb-2">{t("step3.title")}</h2>
                <p className="text-cyan-300 mb-6">{t("step3.subtitle")}</p>

                <div className="space-y-3 mb-6">
                  {recommendedLicenses.map((key) => {
                    const lic = ROCKETBOT_LICENSES[key];
                    return (
                      <div key={key} className="flex items-center justify-between bg-cyan-900/30 border border-cyan-800/30 rounded-lg px-5 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-300" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                              <path d="M11.5 1.75a.75.75 0 011.5 0V4h3.25a.75.75 0 010 1.5H13v1.752A8.252 8.252 0 0120.25 15.5v3.75a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V15.5A8.252 8.252 0 0111 7.252V5.5H7.75a.75.75 0 010-1.5H11V1.75zM8.75 13a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6.5 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-cyan-50 font-semibold">{lic.name}</div>
                            <div className="text-cyan-400 text-sm">{t(`licenseDescriptions.${key}`)}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-teal-300 font-bold">{fmtMoney(lic.price)}</div>
                          <div className="text-cyan-500 text-xs">{t("step3.perYear")}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-cyan-900/20 border border-cyan-800/20 rounded-lg p-4 mb-6 text-cyan-200 text-sm">
                  {recommendedLicenses.length > 1
                    ? t("step3.explanationWithOrchestrator", {
                        horas: Math.round(calculations.totalHorasMes),
                        personas: formData.personas,
                        licencia: ROCKETBOT_LICENSES[recommendedLicenses[0]].name,
                        orquestador: ROCKETBOT_LICENSES[recommendedLicenses[1]].name,
                      })
                    : t("step3.explanationSingle", {
                        horas: Math.round(calculations.totalHorasMes),
                        licencia: ROCKETBOT_LICENSES[recommendedLicenses[0]].name,
                      })}
                </div>

                <div className="bg-gradient-to-r from-cyan-800/30 to-teal-800/30 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <div className="text-cyan-300 text-xs uppercase">{t("step3.totalLabel")}</div>
                    <div className="text-yellow-300 font-bold text-xl">{fmtMoney(calculations.licenciasAnualUSD)}</div>
                  </div>
                  {formData.exchangeRate !== 1 && (
                    <div className="text-right">
                      <div className="text-cyan-300 text-xs uppercase">{t("step3.localLabel")}</div>
                      <div className="text-cyan-100 font-semibold">{fmtMoney(calculations.licenciasAnualUSD * formData.exchangeRate)}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className={cardClass} style={cardBg}>
                  <div className="text-center">
                    <p className="text-cyan-400 text-sm mb-2">
                      {t("step4.processLabel")}{" "}
                      <span className="text-cyan-200">
                        {(formData.descripcion || t("step4.noDescription")).slice(0, 80)}
                        {formData.descripcion && formData.descripcion.length > 80 ? "…" : ""}
                      </span>
                    </p>
                    <h2 className="text-2xl font-bold text-cyan-50 mb-6">{t("step4.title")}</h2>
                    <div className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent font-extrabold text-6xl lg:text-8xl leading-none">
                      {fmtPct(calculations.ROI)}
                    </div>
                    <p className="text-cyan-300 mt-2">{t("step4.roiHero")}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                    <div className="text-green-300 text-xs uppercase mb-1">{t("step4.metrics.annualSavings")}</div>
                    <div className="text-green-200 font-bold text-xl">{fmtMoney(calculations.beneficioAnual)}</div>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 text-center">
                    <div className="text-orange-300 text-xs uppercase mb-1">{t("step4.metrics.payback")}</div>
                    <div className="text-orange-200 font-bold text-xl">
                      {calculations.paybackMeses.toFixed(1)} {t("step4.metrics.paybackUnit")}
                    </div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                    <div className="text-purple-300 text-xs uppercase mb-1">{t("step4.metrics.npv")}</div>
                    <div className="text-purple-200 font-bold text-xl">{fmtMoney(calculations.VPN)}</div>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/30 rounded-lg p-4 text-center">
                    <div className="text-teal-300 text-xs uppercase mb-1">{t("step4.metrics.totalBenefit")}</div>
                    <div className="text-teal-200 font-bold text-xl">{fmtMoney(calculations.beneficioTotal3a)}</div>
                  </div>
                </div>

                <div className={cardClass} style={cardBg}>
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">{t("step4.benefitsTitle")}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-cyan-300">{t("step4.benefits.productivity")}</span><span className="text-cyan-50">{fmtMoney(calculations.ahorroProductividad)}</span></div>
                    <div className="flex justify-between"><span className="text-cyan-300">{t("step4.benefits.errors")}</span><span className="text-cyan-50">{fmtMoney(calculations.ahorroErrores)}</span></div>
                    <div className="flex justify-between"><span className="text-cyan-300">{t("step4.benefits.overtime")}</span><span className="text-cyan-50">{fmtMoney(calculations.ahorroHorasExtra)}</span></div>
                    <div className="flex justify-between"><span className="text-cyan-300">{t("step4.benefits.fines")}</span><span className="text-cyan-50">{fmtMoney(calculations.multasRecuperadas)}</span></div>
                    <div className="border-t border-cyan-800/30 pt-2 mt-2 flex justify-between font-semibold">
                      <span className="text-cyan-50">{t("step4.benefits.total")}</span>
                      <span className="text-teal-300">{fmtMoney(calculations.beneficioAnual)}</span>
                    </div>
                  </div>
                </div>

                <div className={cardClass} style={cardBg}>
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">{t("step4.investmentTitle")}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-cyan-300">{t("step4.investment.development")}</span><span className="text-cyan-50">{fmtMoney(formData.costoDesarrollo)}</span></div>
                    <div className="flex justify-between"><span className="text-cyan-300">{t("step4.investment.licenses")}</span><span className="text-cyan-50">{fmtMoney(calculations.licenciasAnualUSD)}</span></div>
                    <div className="flex justify-between"><span className="text-cyan-300">{t("step4.investment.maintenance")}</span><span className="text-cyan-50">{fmtMoney(calculations.mantenimiento)}</span></div>
                    <div className="border-t border-cyan-800/30 pt-2 mt-2 flex justify-between font-semibold">
                      <span className="text-cyan-50">{t("step4.investment.year1")}</span>
                      <span className="text-yellow-300">{fmtMoney(calculations.inversionAño1)}</span>
                    </div>
                    <div className="flex justify-between text-cyan-400 text-xs">
                      <span>{t("step4.investment.recurring")}</span>
                      <span>{fmtMoney(calculations.recurrenteAnual)}</span>
                    </div>
                  </div>
                </div>

                <div className={cardClass} style={cardBg}>
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">{t("step4.licensesTitle")}</h3>
                  <div className="space-y-3">
                    {recommendedLicenses.map((key) => {
                      const lic = ROCKETBOT_LICENSES[key];
                      return (
                        <div key={key} className="flex items-center justify-between bg-cyan-900/30 border border-cyan-800/30 rounded-lg px-4 py-3">
                          <div>
                            <div className="text-cyan-50 font-semibold text-sm">{lic.name}</div>
                            <div className="text-cyan-400 text-xs">{t(`licenseDescriptions.${key}`)}</div>
                          </div>
                          <div className="text-teal-300 font-bold text-sm">{fmtMoney(lic.price)}<span className="text-cyan-500 text-xs ml-1">{t("step3.perYear")}</span></div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleContact}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md transition-colors duration-200 font-semibold"
                  >
                    {t("step4.cta.contact")}
                  </button>
                  <button
                    onClick={() => setShowLeadForm(true)}
                    className="w-full bg-transparent border border-cyan-700 hover:border-teal-500 text-cyan-100 py-3 px-6 rounded-md transition-colors duration-200 font-semibold"
                  >
                    {t("step4.cta.email")}
                  </button>
                  <button
                    onClick={resetWizard}
                    className="w-full bg-transparent border border-cyan-800/40 hover:border-cyan-600 text-cyan-300 py-2 px-6 rounded-md transition-colors duration-200 text-sm"
                  >
                    {t("step4.cta.reset")}
                  </button>
                </div>
              </div>
            )}

            {step < 4 && (
              <div className="flex justify-between mt-8 max-w-3xl mx-auto">
                <button
                  onClick={goBack}
                  disabled={step === 1}
                  className="px-6 py-2 bg-transparent border border-cyan-800/40 text-cyan-300 rounded-md font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-600 transition-colors"
                >
                  {t("nav.back")}
                </button>
                <button
                  onClick={goNext}
                  className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md font-semibold transition-colors"
                >
                  {step === 3 ? t("nav.finish") : t("nav.next")}
                </button>
              </div>
            )}
          </div>
        </section>

        {showDemoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={() => setShowDemoModal(false)}>
            <div className="bg-transparent border border-cyan-800/20 rounded-lg p-6 max-w-5xl w-full relative" style={cardBg} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowDemoModal(false)}
                className="absolute -top-2 -right-2 bg-cyan-700 hover:bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10 shadow-lg"
                aria-label="close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" /></svg>
              </button>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                  src="https://www.tella.tv/video/cmhich2io00ha04jugkg8h8ag/embed?b=0&title=0&a=1&loop=0&t=0&muted=0&wt=1"
                  allowFullScreen
                  allowTransparency
                  title="Demo Video"
                />
              </div>
            </div>
          </div>
        )}

        {showLeadForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-transparent border border-cyan-800/20 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto" style={cardBg}>
              <h3 className="text-2xl font-bold text-cyan-50 mb-2">{t("lead.title")}</h3>
              <p className="text-cyan-300 mb-6 text-sm">{t("lead.subtitle")}</p>
              <form onSubmit={submitEmailRequest} className="space-y-4">
                <input name="name" type="text" required placeholder={t("lead.name")} value={leadData.name} onChange={handleLeadChange} className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <input name="email" type="email" required placeholder={t("lead.email")} value={leadData.email} onChange={handleLeadChange} className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <input name="companyName" type="text" required placeholder={t("lead.company")} value={leadData.companyName} onChange={handleLeadChange} className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <input name="phone" type="tel" placeholder={t("lead.phone")} value={leadData.phone} onChange={handleLeadChange} className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <input name="role" type="text" placeholder={t("lead.role")} value={leadData.role} onChange={handleLeadChange} className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <select name="companySize" value={leadData.companySize} onChange={handleLeadChange} className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option value="">{t("lead.sizes.placeholder")}</option>
                  <option value="1-10">{t("lead.sizes.s1")}</option>
                  <option value="11-50">{t("lead.sizes.s2")}</option>
                  <option value="51-200">{t("lead.sizes.s3")}</option>
                  <option value="201-500">{t("lead.sizes.s4")}</option>
                  <option value="501-1000">{t("lead.sizes.s5")}</option>
                  <option value="1000+">{t("lead.sizes.s6")}</option>
                </select>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setShowLeadForm(false)} className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-3 px-6 rounded-md font-semibold">{t("lead.cancel")}</button>
                  <button type="submit" disabled={isSubmittingEmail} className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmittingEmail ? t("lead.submitting") : t("lead.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-cyan-900/30 border-t border-cyan-800/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-400 text-sm">{t("footer", { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </>
  );
};

export default ROICalculator;
