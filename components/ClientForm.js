"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";
import config from "@/config";

const CALENDAR_REDIRECT_URL = "https://calendar.app.google/KE5eYDUF4qy11yVz9";

const REQUIRED_FIELDS = [
  "name",
  "email",
  "phone",
  "companyName",
  "role",
  "companySize",
];

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
    canInvest: "",
  });

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
      if (!formData[field]) {
        errors[field] = t("errors.required");
      }
    });
    if (showInvestmentField && !formData.canInvest) {
      errors.canInvest = t("errors.investmentRequired");
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      const message = errors.canInvest && Object.keys(errors).length === 1
        ? t("errors.investmentRequired")
        : t("errors.required");
      setFormError(message);
      toast.error(message);
      const firstInvalid = document.getElementById(Object.keys(errors)[0]);
      firstInvalid?.focus();
      return;
    }

    setFormError("");
    setIsLoading(true);

    const normalizedWebsite = formData.website.trim()
      ? /^https?:\/\//i.test(formData.website.trim())
        ? formData.website.trim()
        : `https://${formData.website.trim()}`
      : "";

    const payload = { ...formData, website: normalizedWebsite };

    try {
      await apiClient.post("/client", payload);

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
        canInvest: "",
      });
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
  const errorClasses =
    "border-red-400 focus:ring-red-400";

  const fieldClass = (field) =>
    `${inputClasses} ${fieldErrors[field] ? errorClasses : ""}`;

  const renderError = (field) =>
    fieldErrors[field] ? (
      <p
        id={`${field}-error`}
        role="alert"
        className="text-red-300 text-xs mt-1"
      >
        {fieldErrors[field]}
      </p>
    ) : null;

  const ariaProps = (field) =>
    fieldErrors[field]
      ? {
          "aria-invalid": true,
          "aria-describedby": `${field}-error`,
        }
      : {};

  const requiredLabel = (label) => (
    <>
      {label}{" "}
      <span aria-hidden="true">*</span>
      <span className="sr-only">{` (${t("requiredHint")})`}</span>
    </>
  );

  return (
    <div className={`w-full max-w-2xl mx-auto ${extraStyle ? extraStyle : ""}`}>
      <div
        className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
        style={{ backgroundColor: config.colors.background }}
      >
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-cyan-50 mb-2">
            {t("getInTouch")}
          </h2>
          <p className="text-cyan-300">{t("tellUs")}</p>
        </div>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-cyan-50 uppercase text-xs block">
                {requiredLabel(t("fields.fullName"))}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                value={formData.name}
                onChange={updateField("name")}
                className={fieldClass("name")}
                placeholder={t("placeholders.fullName")}
                {...ariaProps("name")}
              />
              {renderError("name")}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-cyan-50 uppercase text-xs block">
                {requiredLabel(t("fields.email"))}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={updateField("email")}
                className={fieldClass("email")}
                placeholder={t("placeholders.email")}
                {...ariaProps("email")}
              />
              {renderError("email")}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-cyan-50 uppercase text-xs block">
                {requiredLabel(t("fields.phone"))}
              </label>
              <input
                id="phone"
                name="phone"
                maxLength="20"
                type="tel"
                autoComplete="tel"
                required
                aria-required="true"
                value={formData.phone}
                onChange={updateField("phone")}
                pattern="^\+\d{1,4}\s?\(?\d+\)?[\s\-]?\d+[\s\-]?\d*$"
                className={fieldClass("phone")}
                placeholder={t("placeholders.phone")}
                title={t("titles.phone")}
                aria-describedby={
                  fieldErrors.phone ? "phone-error" : "phone-hint"
                }
                aria-invalid={fieldErrors.phone ? true : undefined}
              />
              <p id="phone-hint" className="text-cyan-400 text-xs">
                {t("titles.phone")}
              </p>
              {renderError("phone")}
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className="text-cyan-50 uppercase text-xs block">
                {requiredLabel(t("fields.companyName"))}
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="organization"
                required
                aria-required="true"
                value={formData.companyName}
                onChange={updateField("companyName")}
                className={fieldClass("companyName")}
                placeholder={t("placeholders.companyName")}
                {...ariaProps("companyName")}
              />
              {renderError("companyName")}
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="text-cyan-50 uppercase text-xs block">
                {requiredLabel(t("fields.role"))}
              </label>
              <input
                id="role"
                name="role"
                type="text"
                autoComplete="organization-title"
                required
                aria-required="true"
                value={formData.role}
                onChange={updateField("role")}
                className={fieldClass("role")}
                placeholder={t("placeholders.role")}
                {...ariaProps("role")}
              />
              {renderError("role")}
            </div>

            <div className="space-y-2">
              <label htmlFor="companySize" className="text-cyan-50 uppercase text-xs block">
                {requiredLabel(t("fields.companySize"))}
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                aria-required="true"
                value={formData.companySize}
                onChange={updateField("companySize")}
                className={fieldClass("companySize")}
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
              id="website"
              name="website"
              type="text"
              inputMode="url"
              autoComplete="url"
              value={formData.website}
              onChange={updateField("website")}
              pattern="^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/.*)?$"
              title={t("titles.website")}
              className={fieldClass("website")}
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
                id="canInvest"
                name="canInvest"
                required
                aria-required="true"
                value={formData.canInvest}
                onChange={updateField("canInvest")}
                className={fieldClass("canInvest")}
                {...ariaProps("canInvest")}
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
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={updateField("additionalInfo")}
              className={fieldClass("additionalInfo")}
              placeholder={t("placeholders.additionalInfo")}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {isLoading ? (
                <>
                  <span
                    className="loading loading-spinner loading-sm mr-2"
                    aria-hidden="true"
                  ></span>
                  {t("sending")}
                </>
              ) : (
                t("submit")
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
