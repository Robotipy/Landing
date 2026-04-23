"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";
import config from "@/config";

const CALENDAR_REDIRECT_URL = "https://calendar.app.google/KE5eYDUF4qy11yVz9";

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

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.companyName ||
      !formData.role ||
      !formData.companySize
    ) {
      toast.error(t("errors.required"));
      return;
    }

    if (showInvestmentField && !formData.canInvest) {
      toast.error(t("errors.investmentRequired"));
      return;
    }

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
      toast.error(error.message || t("errors.submitError"));
    } finally {
      setIsLoading(false);
    }
  };

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

        <form className="space-y-6" onSubmit={handleSubmit} id="form" name="form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-cyan-50 uppercase text-xs block">
                {t("fields.fullName")} *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder={t("placeholders.fullName")}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-cyan-50 uppercase text-xs block">
                {t("fields.email")} *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder={t("placeholders.email")}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-cyan-50 uppercase text-xs block">
                {t("fields.phone")} *
              </label>
              <input
                id="phone"
                name="phone"
                maxLength="20"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                pattern="^\+\d{1,4}\s?\(?\d+\)?[\s\-]?\d+[\s\-]?\d*$"
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder={t("placeholders.phone")}
                title={t("titles.phone")}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className="text-cyan-50 uppercase text-xs block">
                {t("fields.companyName")} *
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder={t("placeholders.companyName")}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="text-cyan-50 uppercase text-xs block">
                {t("fields.role")} *
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder={t("placeholders.role")}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="companySize" className="text-cyan-50 uppercase text-xs block">
                {t("fields.companySize")} *
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                value={formData.companySize}
                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">{t("companySizeOptions.placeholder")}</option>
                <option value="1-10 Empleados">{t("companySizeOptions.1-10")}</option>
                <option value="11-50 Empleados">{t("companySizeOptions.11-50")}</option>
                <option value="51-200 Empleados">{t("companySizeOptions.51-200")}</option>
                <option value="201-50 Empleados">{t("companySizeOptions.201-500")}</option>
                <option value="+500">{t("companySizeOptions.500+")}</option>
              </select>
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
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              pattern="^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/.*)?$"
              title={t("titles.website")}
              className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                value={formData.canInvest}
                onChange={(e) => setFormData({ ...formData, canInvest: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">{t("investmentOptions.placeholder")}</option>
                <option value="yes">{t("investmentOptions.yes")}</option>
                <option value="no">{t("investmentOptions.no")}</option>
              </select>
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
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder={t("placeholders.additionalInfo")}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm mr-2"></span>
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
