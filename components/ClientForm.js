"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";
import config from "@/config";

// Google Calendar link for scheduling meetings after form submission
const CALENDAR_REDIRECT_URL = "https://calendar.app.google/KE5eYDUF4qy11yVz9";

// This component is used to collect basic client contact information
// It calls the /api/client route and sends the data via email
const ClientForm = ({ extraStyle, initialValues = {} }) => {
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

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.companyName ||
      !formData.role ||
      !formData.companySize
    ) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // Validate investment field if sd=true
    if (showInvestmentField && !formData.canInvest) {
      toast.error("Por favor indica si tu empresa puede realizar la inversión");
      return;
    }

    setIsLoading(true);

    try {
      await apiClient.post("/client", formData);
      
      // If user selected "no" for investment, don't redirect to calendar
      if (showInvestmentField && formData.canInvest === "no") {
        toast.success(
          "¡Gracias por tu interés! Te contactaremos cuando tengamos opciones que se ajusten a tu presupuesto."
        );
      } else {
        toast.success(
          "¡Gracias! Redirigiendo para agendar una reunión..."
        );
        // Redirect to Google Calendar after successful submission
        setTimeout(() => {
          window.location.href = CALENDAR_REDIRECT_URL;
        }, 1500);
      }

      // Reset form
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
      toast.error(
        error.message || "Algo salió mal. Por favor intenta de nuevo."
      );
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
            Ponte en Contacto
          </h2>
          <p className="text-cyan-300">
            Cuéntanos sobre tu empresa y cómo podemos ayudarte con soluciones de
            automatización.
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
          id="form"
          name="form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-cyan-50 uppercase text-xs block"
              >
                Nombre Completo *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="Juan Pérez"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-cyan-50 uppercase text-xs block"
              >
                Correo Electrónico *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="juan@empresa.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-cyan-50 uppercase text-xs block"
              >
                Número de Teléfono *
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
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="+52 (55) 1234-5678"
                title="Introduce un número con formato internacional. Ej: +52 (55) 1234-5678"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="companyName"
                className="text-cyan-50 uppercase text-xs block"
              >
                Nombre de la Empresa *
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="Tu Empresa S.A."
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="role"
                className="text-cyan-50 uppercase text-xs block"
              >
                Cargo *
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="CEO, CTO, Gerente, etc."
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="companySize"
                className="text-cyan-50 uppercase text-xs block"
              >
                Tamaño de la Empresa *
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                value={formData.companySize}
                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500 
                   focus:border-transparent"
              >
                <option value="">Selecciona el tamaño de la empresa</option>
                <option value="1-10 Empleados">1-10 empleados</option>
                <option value="11-50 Empleados">11-50 empleados</option>
                <option value="51-200 Empleados">51-200 empleados</option>
                <option value="201-50 Empleados">201-500 Empleados</option>
                <option value="+500">+500 empleados</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="website"
              className="text-cyan-50 uppercase text-xs block"
            >
              Sitio Web de la Empresa
            </label>
            <input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                 text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                 focus:ring-teal-500 focus:border-transparent"
              placeholder="https://tuempresa.com"
            />
          </div>

          {showInvestmentField && (
            <div className="space-y-2">
              <label
                htmlFor="canInvest"
                className="text-cyan-50 text-sm block"
              >
                Nuestros proyectos de desarrollo de software tienen un rango de inversión entre <strong>USD $5,500 y $11,000</strong>. 
              </label>
              <select
                id="canInvest"
                name="canInvest"
                required
                value={formData.canInvest}
                onChange={(e) => setFormData({ ...formData, canInvest: e.target.value })}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500 
                   focus:border-transparent"
              >
                <option value="">¿Tu empresa puede invertir en este monto (total o en cuotas)? *</option>
                <option value="yes">Sí, podemos invertir (total o en cuotas)</option>
                <option value="no">No podemos invertir en este momento</option>
              </select>
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="additionalInfo"
              className="text-cyan-50 uppercase text-xs block"
            >
              Información Adicional
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                 text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                 focus:ring-teal-500 focus:border-transparent"
              placeholder="Cuéntanos más sobre tu negocio y necesidades de automatización..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md 
                 transition-colors duration-200 focus:outline-none focus:ring-2 
                 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 
                 disabled:cursor-not-allowed font-semibold"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm mr-2"></span>
                  Enviando...
                </>
              ) : (
                "Enviar Información"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
