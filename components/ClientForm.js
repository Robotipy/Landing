"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";
import config from "@/config";

// This component is used to collect basic client contact information
// It calls the /api/client route and stores a Client document in the database
const ClientForm = ({ extraStyle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    role: '',
    companySize: '',
    website: '',
    additionalInfo: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.companyName || 
        !formData.role || !formData.companySize) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsLoading(true);

    try {
      await apiClient.post("/client", formData);
      toast.success("¡Gracias! Tu información ha sido enviada exitosamente. Te contactaremos pronto.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        role: '',
        companySize: '',
        website: '',
        additionalInfo: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.message || "Algo salió mal. Por favor intenta de nuevo.");
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
            Cuéntanos sobre tu empresa y cómo podemos ayudarte con soluciones de automatización.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-cyan-50 uppercase text-xs block">
                Nombre Completo *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="Juan Pérez"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-cyan-50 uppercase text-xs block">
                Correo Electrónico *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="juan@empresa.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-cyan-50 uppercase text-xs block">
                Número de Teléfono *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="+52 (55) 1234-5678"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="companyName" className="text-cyan-50 uppercase text-xs block">
                Nombre de la Empresa *
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="Tu Empresa S.A."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="text-cyan-50 uppercase text-xs block">
                Cargo *
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                   focus:ring-teal-500 focus:border-transparent"
                placeholder="CEO, CTO, Gerente, etc."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="companySize" className="text-cyan-50 uppercase text-xs block">
                Tamaño de la Empresa *
              </label>
              <select
                id="companySize"
                name="companySize"
                required
                value={formData.companySize}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                   text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500 
                   focus:border-transparent"
              >
                <option value="">Selecciona el tamaño de la empresa</option>
                <option value="1-10">1-10 empleados</option>
                <option value="11-50">11-50 empleados</option>
                <option value="51-200">51-200 empleados</option>
                <option value="201-500">201-500 empleados</option>
                <option value="501-1000">501-1000 empleados</option>
                <option value="1000+">1000+ empleados</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="website" className="text-cyan-50 uppercase text-xs block">
              Sitio Web de la Empresa
            </label>
            <input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                 text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                 focus:ring-teal-500 focus:border-transparent"
              placeholder="https://tuempresa.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="additionalInfo" className="text-cyan-50 uppercase text-xs block">
              Información Adicional
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={4}
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