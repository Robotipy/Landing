"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";
import config from "@/config";

const CALENDAR_REDIRECT_URL = "https://calendar.app.google/KE5eYDUF4qy11yVz9";

// WhatsApp de contacto directo (opción para quien prefiere no llenar el form).
const WHATSAPP_NUMBER = "56999611040";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola, vengo desde la web de Robotipy y me gustaría más información."
)}`;

/** Meta Pixel CompleteRegistration — id matches partner snippet (DOM / GTM). */
function trackContactCompleteRegistration() {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "CompleteRegistration");
  }
}

// Solo 3 campos obligatorios: menos fricción para leads que llegan de anuncios.
const REQUIRED_FIELDS = ["name", "email", "phone"];
// Formulario en 3 pasos (multistep): cada paso pide poco → más gente lo termina.
const TOTAL_STEPS = 3;
const STEP_REQUIRED = [["name", "email"], ["phone"], []];

const ClientForm = ({ extraStyle, initialValues = {} }) => {
  const t = useTranslations("clientForm");
  const searchParams = useSearchParams();
  const showInvestmentField = searchParams?.get("sd") === "true";

  const [formData, setFormData] = useState({
    name: initialValues.name || "",
    email: initialValues.email || "",
    phone: initialValues.phone || "",
    companyName: initialValues.companyName || "",
    role: initialValues.role || "",
    companySize: initialValues.companySize || "",
    website: initialValues.website || "",
    additionalInfo: initialValues.additionalInfo || "",
    interest: initialValues.interest || "",
    canInvest: "",
  });

  const [step, setStep] = useState(0);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateField = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const errors = {};
    REQUIRED_FIELDS.forEach((field) => {
      if (!formData[field]) errors[field] = t("errors.required");
    });
    if (showInvestmentField && !formData.canInvest) {
      errors.canInvest = t("errors.investmentRequired");
    }
    return errors;
  };

  const validateStep = (s) => {
    const errors = {};
    (STEP_REQUIRED[s] || []).forEach((field) => {
      if (!formData[field]) errors[field] = t("errors.required");
    });
    if (s === TOTAL_STEPS - 1 && showInvestmentField && !formData.canInvest) {
      errors.canInvest = t("errors.investmentRequired");
    }
    return errors;
  };

  const goNext = () => {
    const errors = validateStep(step);
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      const message = t("errors.required");
      setFormError(message);
      toast.error(message);
      document.getElementById(Object.keys(errors)[0])?.focus();
      return;
    }
    setFormError("");
    setFieldErrors({});
    setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  };

  const goBack = () => {
    setFormError("");
    setStep((s) => Math.max(0, s - 1));
  };

  // Enter en un campo: avanza de paso (o envía si es el último), sin recargar.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (step < TOTAL_STEPS - 1) goNext();
      else submitForm();
    }
  };

  // Envío real: se llama SOLO desde el botón del último paso (nunca por submit
  // implícito), para que avanzar de paso jamás dispare el envío por accidente.
  const submitForm = async () => {
    const errors = validate();
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      // Volver al primer paso que tenga un error.
      const firstErr = Object.keys(errors)[0];
      const stepWithErr = STEP_REQUIRED.findIndex((fs) => fs.includes(firstErr));
      if (stepWithErr >= 0) setStep(stepWithErr);
      const message = errors.canInvest && Object.keys(errors).length === 1
        ? t("errors.investmentRequired")
        : t("errors.required");
      setFormError(message);
      toast.error(message);
      setTimeout(() => document.getElementById(firstErr)?.focus(), 0);
      return;
    }

    setFormError("");
    setIsLoading(true);

    const normalizedWebsite = formData.website.trim()
      ? /^https?:\/\//i.test(formData.website.trim())
        ? formData.website.trim()
        : `https://${formData.website.trim()}`
      : "";

    // El servicio de interés lo eligió el visitante en la pantalla inicial
    // "¿Qué te interesa?" (o llegó por ?servicio= del anuncio). Va como campo
    // propio y legible para que aparezca claro en el correo del lead.
    const interestLabel = formData.interest
      ? t(`interestOptions.${formData.interest}`)
      : "";

    const payload = {
      ...formData,
      website: normalizedWebsite,
      interest: interestLabel,
    };

    try {
      await apiClient.post("/client", payload);
      trackContactCompleteRegistration();

      if (showInvestmentField && formData.canInvest === "no") {
        toast.success(t("toast.cannotInvest"));
      } else {
        toast.success(t("toast.redirecting"));
        setTimeout(() => {
          window.location.href = CALENDAR_REDIRECT_URL;
        }, 1500);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        role: "",
        companySize: "",
        website: "",
        additionalInfo: "",
        interest: "",
        canInvest: "",
      });
      setStep(0);
    } catch (error) {
      console.error("Error submitting form:", error);
      const message = error.message || t("errors.submitError");
      setFormError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses =
    "w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent";
  const errorClasses = "border-red-400 focus:ring-red-400";
  const fieldClass = (field) =>
    `${inputClasses} ${fieldErrors[field] ? errorClasses : ""}`;

  const renderError = (field) =>
    fieldErrors[field] ? (
      <p id={`${field}-error`} role="alert" className="text-red-300 text-xs mt-1">
        {fieldErrors[field]}
      </p>
    ) : null;

  const ariaProps = (field) =>
    fieldErrors[field]
      ? { "aria-invalid": true, "aria-describedby": `${field}-error` }
      : {};

  const requiredLabel = (label) => (
    <>
      {label} <span aria-hidden="true">*</span>
      <span className="sr-only">{` (${t("requiredHint")})`}</span>
    </>
  );

  const isLast = step === TOTAL_STEPS - 1;

  return (
    <div className={`w-full max-w-2xl mx-auto ${extraStyle ? extraStyle : ""}`}>
      <div
        className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
        style={{ backgroundColor: config.colors.background }}
      >
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-cyan-50 mb-2">
            {t("getInTouch")}
          </h2>
          <p className="text-cyan-300">{t("tellUs")}</p>
        </div>

        {/* Barra de progreso: motiva a llegar hasta el final. */}
        <div className="mb-2 flex gap-1.5" aria-hidden="true">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i <= step ? "bg-teal-500" : "bg-cyan-900"
              }`}
            />
          ))}
        </div>
        <p className="text-teal-300 text-xs mb-6">
          {t("multistep.progress")} {step + 1} / {TOTAL_STEPS}
        </p>

        <form
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
          onKeyDown={handleKeyDown}
          id="form"
          name="form"
          noValidate
          aria-describedby={formError ? "form-error" : undefined}
        >
          {formError && (
            <div
              id="form-error"
              role="alert"
              aria-live="assertive"
              className="rounded-md border border-red-400/50 bg-red-950/50 px-4 py-3 text-sm text-red-200"
            >
              {formError}
            </div>
          )}

          {/* Paso 1: datos de contacto básicos (lo más fácil primero). */}
          {step === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-cyan-50 uppercase text-xs block">
                  {requiredLabel(t("fields.fullName"))}
                </label>
                <input
                  id="name" name="name" type="text" autoComplete="name" required
                  aria-required="true" value={formData.name}
                  onChange={updateField("name")} className={fieldClass("name")}
                  placeholder={t("placeholders.fullName")} {...ariaProps("name")}
                />
                {renderError("name")}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-cyan-50 uppercase text-xs block">
                  {requiredLabel(t("fields.email"))}
                </label>
                <input
                  id="email" name="email" type="email" autoComplete="email" required
                  aria-required="true" value={formData.email}
                  onChange={updateField("email")} className={fieldClass("email")}
                  placeholder={t("placeholders.email")} {...ariaProps("email")}
                />
                {renderError("email")}
              </div>
            </div>
          )}

          {/* Paso 2: teléfono + opción de WhatsApp. */}
          {step === 1 && (
            <div className="space-y-2">
              <label htmlFor="phone" className="text-cyan-50 uppercase text-xs block">
                {requiredLabel(t("fields.phone"))}
              </label>
              <input
                id="phone" name="phone" maxLength="20" type="tel" autoComplete="tel"
                required aria-required="true" value={formData.phone}
                onChange={updateField("phone")}
                pattern="^\+?[\d\s()\-\.]{6,20}$"
                className={fieldClass("phone")}
                placeholder={t("placeholders.phone")} title={t("titles.phone")}
                aria-describedby={fieldErrors.phone ? "phone-error" : "phone-hint"}
                aria-invalid={fieldErrors.phone ? true : undefined}
              />
              <p id="phone-hint" className="text-cyan-400 text-xs">
                {t("titles.phone")}
              </p>
              {renderError("phone")}
            </div>
          )}

          {/* Paso 3: datos de empresa (todos opcionales) + enviar. */}
          {step === 2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-cyan-50 uppercase text-xs block">
                    {t("fields.companyName")}
                  </label>
                  <input
                    id="companyName" name="companyName" type="text" autoComplete="organization"
                    value={formData.companyName} onChange={updateField("companyName")}
                    className={fieldClass("companyName")} placeholder={t("placeholders.companyName")}
                    {...ariaProps("companyName")}
                  />
                  {renderError("companyName")}
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-cyan-50 uppercase text-xs block">
                    {t("fields.role")}
                  </label>
                  <input
                    id="role" name="role" type="text" autoComplete="organization-title"
                    value={formData.role} onChange={updateField("role")}
                    className={fieldClass("role")} placeholder={t("placeholders.role")}
                    {...ariaProps("role")}
                  />
                  {renderError("role")}
                </div>
                <div className="space-y-2">
                  <label htmlFor="companySize" className="text-cyan-50 uppercase text-xs block">
                    {t("fields.companySize")}
                  </label>
                  <select
                    id="companySize" name="companySize" value={formData.companySize}
                    onChange={updateField("companySize")} className={fieldClass("companySize")}
                    {...ariaProps("companySize")}
                  >
                    <option value="">{t("companySizeOptions.placeholder")}</option>
                    <option value="1-10 Empleados">{t("companySizeOptions.1-10")}</option>
                    <option value="11-50 Empleados">{t("companySizeOptions.11-50")}</option>
                    <option value="51-200 Empleados">{t("companySizeOptions.51-200")}</option>
                    <option value="201-50 Empleados">{t("companySizeOptions.201-500")}</option>
                    <option value="+500">{t("companySizeOptions.500+")}</option>
                  </select>
                  {renderError("companySize")}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="text-cyan-50 uppercase text-xs block">
                  {t("fields.website")}
                </label>
                <input
                  id="website" name="website" type="text" inputMode="url" autoComplete="url"
                  value={formData.website} onChange={updateField("website")}
                  pattern="^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/.*)?$"
                  title={t("titles.website")} className={fieldClass("website")}
                  placeholder={t("placeholders.website")}
                />
              </div>

              {showInvestmentField && (
                <div className="space-y-2">
                  <label htmlFor="canInvest" className="text-cyan-50 text-sm block">
                    {t.rich("investmentDescription", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </label>
                  <select
                    id="canInvest" name="canInvest" required aria-required="true"
                    value={formData.canInvest} onChange={updateField("canInvest")}
                    className={fieldClass("canInvest")} {...ariaProps("canInvest")}
                  >
                    <option value="">{t("investmentOptions.placeholder")}</option>
                    <option value="yes">{t("investmentOptions.yes")}</option>
                    <option value="no">{t("investmentOptions.no")}</option>
                  </select>
                  {renderError("canInvest")}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="additionalInfo" className="text-cyan-50 uppercase text-xs block">
                  {t("fields.additionalInfo")}
                </label>
                <textarea
                  id="additionalInfo" name="additionalInfo" rows={4}
                  value={formData.additionalInfo} onChange={updateField("additionalInfo")}
                  className={fieldClass("additionalInfo")} placeholder={t("placeholders.additionalInfo")}
                />
              </div>
            </>
          )}

          {/* Navegación entre pasos. */}
          <div className="pt-2 flex gap-3">
            {step > 0 && (
              <button
                type="button"
                onClick={goBack}
                className="flex-none px-5 py-3 rounded-md border border-cyan-700/50 text-cyan-200 hover:bg-cyan-900/40 transition-colors font-semibold"
              >
                {t("multistep.back")}
              </button>
            )}
            {isLast ? (
              <button
                key="submit-btn"
                id="botónEnviar"
                type="button"
                onClick={submitForm}
                disabled={isLoading}
                aria-busy={isLoading}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm mr-2" aria-hidden="true"></span>
                    {t("sending")}
                  </>
                ) : (
                  t("submit")
                )}
              </button>
            ) : (
              <button
                key="next-btn"
                type="button"
                onClick={goNext}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 font-semibold"
              >
                {t("multistep.next")}
              </button>
            )}
          </div>

          <p className="text-cyan-400 text-xs text-center">{t("trustLine")}</p>

          {/* Opción de WhatsApp: siempre visible, captura a quien prefiere chatear. */}
          <div className="flex items-center gap-3 my-1" aria-hidden="true">
            <span className="h-px flex-1 bg-cyan-800/40"></span>
            <span className="text-cyan-400 text-xs">{t("whatsapp.divider")}</span>
            <span className="h-px flex-1 bg-cyan-800/40"></span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3 px-6 rounded-md transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          >
            <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.71 6.402L3.2 28.8l6.56-1.68a12.74 12.74 0 006.243 1.6h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.72 12.72 0 0016.003 3.2zm0 23.04h-.004a10.6 10.6 0 01-5.4-1.48l-.388-.23-4.03 1.03 1.075-3.93-.253-.403a10.59 10.59 0 01-1.62-5.63c0-5.865 4.774-10.64 10.643-10.64 2.842 0 5.514 1.108 7.523 3.12a10.57 10.57 0 013.117 7.527c0 5.865-4.774 10.64-10.64 10.64zm5.834-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.538-.72-.548l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.457 4.823.763.33 1.358.527 1.822.674.766.243 1.463.209 2.014.127.615-.092 1.892-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
            </svg>
            {t("whatsapp.button")}
          </a>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
