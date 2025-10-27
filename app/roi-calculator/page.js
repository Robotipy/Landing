"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Header from "@/components/Header";
import { Suspense } from "react";
import config from "@/config";
import apiClient from "@/libs/api";

// RocketBot licensing data (fixed prices)
const ROCKETBOT_LICENSES = {
  licenseS: { name: "Licencia S", price: 2640 },
  licenseM: { name: "Licencia M", price: 4200 },
  licenseL: { name: "Licencia L", price: 7590 },
  orchestratorEntry: { name: "Orquestador Entry", price: 2090 },
  orchestratorStandard: { name: "Orquestador Standard", price: 4290 },
  orchestratorEnterprise: { name: "Orquestador Enterprise", price: 8690 },
  orchestratorCorporate: { name: "Orquestador Corporate", price: 13090 }
  
};

// Plantillas de industria
const INDUSTRY_TEMPLATES = {
  banking: {
    name: "Bancario",
    peopleInProcess: 5,
    daysPerMonth: 22,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 2500,
    reprocessHours: 2,
    overtimeHours: 1,
    overtimeCost: 200
  },
  manufacturing: {
    name: "Manufactura", 
    peopleInProcess: 3,
    daysPerMonth: 20,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 1800,
    reprocessHours: 1,
    overtimeHours: 2,
    overtimeCost: 160
  },
  healthcare: {
    name: "Salud",
    peopleInProcess: 4,
    daysPerMonth: 22,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 2200,
    reprocessHours: 1.5,
    overtimeHours: 1.5,
    overtimeCost: 180
  },
  insurance: {
    name: "Seguros",
    peopleInProcess: 6,
    daysPerMonth: 22,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 2000,
    reprocessHours: 2.5,
    overtimeHours: 2,
    overtimeCost: 170
  }
};

const ROICalculator = () => {
  // Form state for inputs
  const [formData, setFormData] = useState({
    // Process inputs
    peopleInProcess: 2,
    daysPerMonth: 15,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 1000,
    workingDaysPerMonth: 22,
    workingHoursPerDay: 8,
    
    // Error/reprocess inputs
    reprocessHours: 0,
    
    // Overtime inputs
    overtimeHours: 0,
    overtimeCost: 160,
    
    // Penalties/fines
    monthlyFines: 0,
    monthlyLosses: 0,
    
    // Currency
    exchangeRate: 1,
    
    // Selected licenses
    selectedLicenses: {
      licenseS: 1,
      licenseM: 0,
      licenseL: 0,
      orchestratorEntry: 0,
      orchestratorStandard: 0,
      orchestratorEnterprise: 0,
      orchestratorCorporate: 0
    },
    
    // Partner costs
    robotDevelopmentCost: 5800,
    annualMaintenanceCost: 580
  });

  // Lead capture state
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    role: '',
    companySize: ''
  });

  // UI state
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  // Calculated values
  const [calculations, setCalculations] = useState({});

  // Read URL parameters and pre-fill form
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.size > 0) {
      setFormData(prev => ({
        ...prev,
        peopleInProcess: parseInt(urlParams.get('peopleInProcess')) || prev.peopleInProcess,
        hoursPerDay: parseInt(urlParams.get('hoursPerDay')) || prev.hoursPerDay,
        avgMonthlyCostPerPerson: parseInt(urlParams.get('avgMonthlyCostPerPerson')) || prev.avgMonthlyCostPerPerson,
        workingDaysPerMonth: parseInt(urlParams.get('workingDaysPerMonth')) || prev.workingDaysPerMonth,
        workingHoursPerDay: parseInt(urlParams.get('workingHoursPerDay')) || prev.workingHoursPerDay
      }));
    }
  }, []);

  // Real-time calculations
  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const {
      peopleInProcess,
      daysPerMonth,
      hoursPerDay,
      avgMonthlyCostPerPerson,
      workingDaysPerMonth,
      workingHoursPerDay,
      reprocessHours,
      overtimeHours,
      overtimeCost,
      monthlyFines,
      monthlyLosses,
      exchangeRate,
      selectedLicenses,
      robotDevelopmentCost,
      annualMaintenanceCost,
    } = formData;

    // Basic calculations
    const totalRepetitiveHours = peopleInProcess * daysPerMonth * hoursPerDay;
    const costPerHour = avgMonthlyCostPerPerson / (workingDaysPerMonth * workingHoursPerDay);
    const annualProductivitySavings = totalRepetitiveHours * costPerHour * 12;
    console.log(annualProductivitySavings, 'annualProductivitySavings', totalRepetitiveHours, costPerHour);
    
    // Error costs
    const annualReprocessCosts = reprocessHours * costPerHour * 12;
    
    // Overtime costs
    const annualOvertimeCosts = overtimeHours * overtimeCost * 12;

    // Fines costs
    const annualFines = monthlyFines * 12;

    // Losses costs
    const annualLosses = monthlyLosses * 12;
    
    // Annual benefits
    const annualBenefits = annualProductivitySavings + annualReprocessCosts + annualOvertimeCosts + annualFines + annualLosses;
    
    
    // License costs
    const totalLicenseCostUSD = Object.keys(selectedLicenses).reduce((total, key) => {
      return total + (selectedLicenses[key] * ROCKETBOT_LICENSES[key].price);
    }, 0);
    
    const totalLicenseCostLocal = totalLicenseCostUSD * exchangeRate;
    
    // Total investment calculation
    const totalInvestment = totalLicenseCostLocal + robotDevelopmentCost;
    
    // Annual costs (licenses + maintenance)
    const year1Cost = totalInvestment + annualMaintenanceCost;
    const year2Cost = annualMaintenanceCost + totalLicenseCostLocal; // Assume 20% annual license fee
    const year3Cost = annualMaintenanceCost + totalLicenseCostLocal;
    
    // 3-year analysis
    const totalBenefits3Years = annualBenefits * 3;
    const totalCosts3Years = year1Cost + year2Cost + year3Cost;

    const totalBenefitsNPV = calculateNPV(0.10, [annualBenefits, annualBenefits, annualBenefits]);
    const totalCostNPV = calculateNPV(0.10, [year1Cost, year2Cost, year3Cost]);
    
    // ROI calculations
    const roi = ((totalBenefitsNPV - totalCostNPV) / totalCostNPV) * 100;
    const paybackMonths = (year1Cost / (annualBenefits/12));
    
    // NPV calculation (10% discount rate)
    const discountRate = 0.10;
    const npvYear1 = (annualBenefits - year1Cost) / Math.pow(1 + discountRate, 1);
    const npvYear2 = (annualBenefits - year2Cost) / Math.pow(1 + discountRate, 2);
    const npvYear3 = (annualBenefits - year3Cost) / Math.pow(1 + discountRate, 3);
    const netPresentValue = npvYear1 + npvYear2 + npvYear3;

    setCalculations({
      totalRepetitiveHours,
      annualProductivitySavings,
      annualReprocessCosts,
      annualOvertimeCosts,
      annualFines,
      annualLosses,
      annualBenefits,
      totalLicenseCostUSD,
      totalLicenseCostLocal,
      totalInvestment,
      year1Cost,
      year2Cost,
      year3Cost,
      totalBenefits3Years,
      totalCosts3Years,
      roi,
      paybackMonths,
      netPresentValue,
      costPerHour
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleLicenseChange = (license, quantity) => {
    setFormData(prev => ({
      ...prev,
      selectedLicenses: {
        ...prev.selectedLicenses,
        [license]: parseInt(quantity) || 0
      }
    }));
  };

  const handleLeadInputChange = (e) => {
    const { name, value } = e.target;
    setLeadData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const applyTemplate = (templateKey) => {
    const template = INDUSTRY_TEMPLATES[templateKey];
    if (template) {
      setFormData(prev => ({
        ...prev,
        peopleInProcess: template.peopleInProcess,
        daysPerMonth: template.daysPerMonth,
        hoursPerDay: template.hoursPerDay,
        avgMonthlyCostPerPerson: template.avgMonthlyCostPerPerson,
        reprocessHours: template.reprocessHours,
        overtimeHours: template.overtimeHours,
        overtimeCost: template.overtimeCost
      }));
      setSelectedTemplate(templateKey);
      toast.success(`Applied ${template.name} template`);
    }
  };

  const resetForm = () => {
    setFormData({
      // Process inputs
      peopleInProcess: 2,
      daysPerMonth: 15,
      hoursPerDay: 8,
      avgMonthlyCostPerPerson: 1000,
      workingDaysPerMonth: 22,
      workingHoursPerDay: 8,
      
      // Error/reprocess inputs
      reprocessHours: 0,
      
      // Overtime inputs
      overtimeHours: 0,
      overtimeCost: 160,
      
      // Penalties/fines
      monthlyFines: 0,
      monthlyLosses: 0,
      
      // Currency
      exchangeRate: 1,
      
      // Selected licenses
      selectedLicenses: {
        licenseS: 1,
        licenseM: 0,
        licenseL: 0,
        orchestratorEntry: 0,
        orchestratorStandard: 0,
        orchestratorEnterprise: 0,
        orchestratorCorporate: 0
      },
      
      // Partner costs
      robotDevelopmentCost: 5800,
      annualMaintenanceCost: 580
    });
    setSelectedTemplate('');
    toast.success("Formulario restablecido a valores predeterminados");
  };

  const handleEmailRequest = () => {
    setShowLeadForm(true);
  };

  const submitEmailRequest = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.companyName) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmittingEmail(true);

    try {
      // First submit as client (for lead tracking)
      await apiClient.post("/client", leadData);
      
      // Then send ROI email
      await apiClient.post("/roi-calculator", {
        leadData,
        formData,
        calculations
      });
      
      toast.success("¡Reporte de ROI enviado a tu email exitosamente!");
      setShowLeadForm(false);
      
      // Reset lead form
      setLeadData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        role: '',
        companySize: ''
      });
    } catch (error) {
      console.error('Error sending ROI report:', error);
      toast.error(error.message || "Error al enviar el reporte. Por favor intenta de nuevo.");
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const formatCurrency = (amount, currency = "$") => {
    return `${currency}${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const formatPercentage = (percentage) => {
    return `${percentage.toFixed(2)}%`;
  };

  // Generate ROI summary for contact form
  const generateROISummary = () => {
    const { 
      peopleInProcess, 
      daysPerMonth, 
      hoursPerDay, 
      avgMonthlyCostPerPerson,
      annualBenefits,
      roi,
      paybackMonths,
      netPresentValue
    } = { ...formData, ...calculations };

    const totalHours = peopleInProcess * daysPerMonth * hoursPerDay;
    const monthlyCost = avgMonthlyCostPerPerson * peopleInProcess;

    return `Realicé el cálculo del ROI para un proceso que quiero automatizar y quiero más detalles.

ROI: ${formatPercentage(roi || 0)}
Beneficio: ${formatCurrency(annualBenefits || 0)} anuales
Período de recuperación: ${(paybackMonths || 0).toFixed(1)} meses

Detalles del proceso:
- Horas: ${totalHours} horas mensuales
- Personas: ${peopleInProcess} personas
- Días por mes: ${daysPerMonth}
- Costo total mensual: ${formatCurrency(monthlyCost)}

¿Podrían contactarme para discutir la implementación de esta automatización?`;
  };

  // Handle contact sales button click
  const handleContactSales = () => {
    const roiSummary = generateROISummary();
    const queryParams = new URLSearchParams({
      additionalInfo: roiSummary
    });
    
    window.location.href = `/contact-us?${queryParams.toString()}`;
  };

  // Función VPL (NPV) equivalente a Excel
  const calculateNPV = (rate, values) => {
    let npv = 0;
    for (let i = 0; i < values.length; i++) {
      npv += values[i] / Math.pow(1 + rate, i + 1);
    }
    return npv;
  };

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="min-h-screen background-image">
        <section className="px-4 py-20 lg:py-20 lg:px-8">
          <div className="max-w-7xl mx-auto text-white">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Calculadora de ROI
              </h1>
              <p className="text-lg lg:text-xl text-cyan-300 max-w-3xl mx-auto">
                Calcula el retorno de inversión para tu proyecto de automatización. 
                Configura tus parámetros y ve resultados instantáneos.
              </p>
            </div>

            {/* Industry Templates */}
            {/* <div className="mb-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-cyan-50 text-center">Industry Templates (Optional)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {Object.entries(INDUSTRY_TEMPLATES).map(([key, template]) => (
                  <button
                    key={key}
                    onClick={() => applyTemplate(key)}
                    className={`p-3 rounded-lg border transition-colors ${
                      selectedTemplate === key
                        ? 'bg-teal-500 border-teal-400 text-white'
                        : 'bg-cyan-950/50 border-cyan-800/30 text-cyan-50 hover:border-teal-500'
                    }`}
                  >
                    {template.name}
                  </button>
                ))}
              </div>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Input Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Process Parameters */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Parámetros del Proceso</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Personas Involucradas en el Proceso
                      </label>
                      <input
                        name="peopleInProcess"
                        type="number"
                        value={formData.peopleInProcess}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Días por Mes (Ejecución del Proceso)
                      </label>
                      <input
                        name="daysPerMonth"
                        type="number"
                        value={formData.daysPerMonth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Cuántos días por mes se ejecuta este proceso específico</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Horas por Día (Dedicadas al Proceso)
                      </label>
                      <input
                        name="hoursPerDay"
                        type="number"
                        value={formData.hoursPerDay}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Cuántas horas por día cada persona dedica a este proceso</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Salario Mensual por Persona ($)
                      </label>
                      <input
                        name="avgMonthlyCostPerPerson"
                        type="number"
                        value={formData.avgMonthlyCostPerPerson}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Costo promedio mensual de salario por empleado</p>
                    </div>
                  </div>
                </div>

                {/* Working Schedule Parameters */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Horario de Trabajo (para cálculo de costos)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Días Laborales por Mes
                      </label>
                      <input
                        name="workingDaysPerMonth"
                        type="number"
                        value={formData.workingDaysPerMonth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Total de días laborales por mes (típicamente 20-22)</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Horas Laborales por Día
                      </label>
                      <input
                        name="workingHoursPerDay"
                        type="number"
                        value={formData.workingHoursPerDay}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Horas laborales estándar por día (típicamente 8)</p>
                    </div>
                  </div>
                </div>

                {/* Error and Overtime Costs */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Costos Adicionales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Horas de Reprocesamiento/Mes
                      </label>
                      <input
                        name="reprocessHours"
                        type="number"
                        value={formData.reprocessHours}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Horas Extra/Mes
                      </label>
                      <input
                        name="overtimeHours"
                        type="number"
                        value={formData.overtimeHours}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Costo de Hora Extra ($)
                      </label>
                      <input
                        name="overtimeCost"
                        type="number"
                        value={formData.overtimeCost}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Tipo de Cambio (USD a Local)
                      </label>
                      <input
                        name="exchangeRate"
                        type="number"
                        step="0.01"
                        value={formData.exchangeRate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>

                {/* RocketBot Licenses */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Licencias de RocketBot</h3>
                  <div className="space-y-4">
                    {Object.entries(ROCKETBOT_LICENSES).map(([key, license]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div className="flex-1">
                          <span className="text-cyan-50">{license.name}</span>
                          <span className="text-cyan-300 ml-2">
                            (${license.price.toLocaleString()})
                          </span>
                        </div>
                        <input
                          type="number"
                          min="0"
                          value={formData.selectedLicenses[key]}
                          onChange={(e) => handleLicenseChange(key, e.target.value)}
                          className="w-20 px-2 py-1 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                             text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Costs */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Costos de Implementación</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Costo de Desarrollo del Robot ($)
                      </label>
                      <input
                        name="robotDevelopmentCost"
                        type="number"
                        value={formData.robotDevelopmentCost}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">El costo de desarrollo varía según la complejidad del robot. En promedio, el costo de desarrollo es de $5,800 USD.</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Mantenimiento Anual ($)
                      </label>
                      <input
                        name="annualMaintenanceCost"
                        type="number"
                        value={formData.annualMaintenanceCost}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">El mantenimiento anual suele ser un 10% del costo de desarrollo del robot.</p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 text-white rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    Restablecer Formulario
                  </button>
                </div>
              </div>

              {/* Results Panel */}
              <div className="space-y-6">
                {/* Monthly Benefits */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-6"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">Beneficios Anuales</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Ahorros de Productividad Anual:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.annualBenefits || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Reducción de Errores:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.annualReprocessCosts || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Ahorros en Horas Extra:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.annualOvertimeCosts || 0)}
                      </span>
                    </div>
                    <div className="border-t border-cyan-800/30 pt-3">
                      <div className="flex justify-between">
                        <span className="text-cyan-50 font-semibold">Total Anual:</span>
                        <span className="text-teal-400 font-bold text-lg">
                          {formatCurrency(calculations.annualBenefits || 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Investment Summary */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-6"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">Inversión</h3>
                  <div className="space-y-4">
                    {/* Pago Único */}
                    <div className="bg-cyan-900/20 rounded-lg p-4">
                      <h4 className="text-md font-semibold text-cyan-200 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        Pago Inicial (Solo Año 1)
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Desarrollo del Robot:</span>
                          <span className="text-cyan-50 font-semibold">
                            {formatCurrency(formData.robotDevelopmentCost)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Licencias (USD):</span>
                          <span className="text-cyan-50">
                            ${(calculations.totalLicenseCostUSD || 0).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Licencias (Local):</span>
                          <span className="text-cyan-50">
                            {formatCurrency(calculations.totalLicenseCostLocal || 0)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Mantenimiento:</span>
                          <span className="text-cyan-50 font-semibold">
                            {formatCurrency(formData.annualMaintenanceCost)}
                          </span>
                        </div>
                        <div className="border-t border-cyan-700/50 pt-2 mt-3">
                          <div className="flex justify-between">
                            <span className="text-cyan-200 font-semibold">Total Pago Único:</span>
                            <span className="text-blue-400 font-bold">
                              {formatCurrency(calculations.year1Cost || 0)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pago Anual Recurrente */}
                    <div className="bg-cyan-900/20 rounded-lg p-4">
                      <h4 className="text-md font-semibold text-cyan-200 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Pago Anual Recurrente (Años 2, 3 y 4)
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Mantenimiento Anual:</span>
                          <span className="text-cyan-50 font-semibold">
                            {formatCurrency(formData.annualMaintenanceCost)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-cyan-300">Licencias Anuales (20%):</span>
                          <span className="text-cyan-50">
                            {formatCurrency((calculations.totalLicenseCostLocal || 0) )}
                          </span>
                        </div>
                        <div className="border-t border-cyan-700/50 pt-2 mt-3">
                          <div className="flex justify-between">
                            <span className="text-cyan-200 font-semibold">Total Anual:</span>
                            <span className="text-green-400 font-bold">
                              {formatCurrency(formData.annualMaintenanceCost + (calculations.totalLicenseCostLocal || 0))}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Resumen Total */}
                    <div className="bg-gradient-to-r from-cyan-800/30 to-teal-800/30 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-cyan-300 text-sm mb-1">Inversión Total Inicial</div>
                        <div className="text-yellow-400 font-bold text-xl">
                          {formatCurrency(calculations.year1Cost || 0)}
                        </div>
                        <div className="text-cyan-400 text-xs mt-1">
                          + {formatCurrency(formData.annualMaintenanceCost + (calculations.totalLicenseCostLocal || 0))} anuales los años siguientes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Summary */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-6"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">Análisis de ROI a 3 años</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Beneficio Total:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.totalBenefits3Years || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Retorno de la inversión:</span>
                      <span className="text-green-400 font-bold text-lg">
                        {formatPercentage(calculations.roi || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Período de Recuperación:</span>
                      <span className="text-cyan-50 font-semibold">
                        {(calculations.paybackMonths || 0).toFixed(1)} meses
                      </span>
                    </div>
                    <div className="border-t border-cyan-800/30 pt-3">
                      <div className="flex justify-between">
                        <span className="text-cyan-50 font-semibold">Valor Presente Neto:</span>
                        <span className="text-green-400 font-bold text-lg">
                          {formatCurrency(calculations.netPresentValue || 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* <button
                    onClick={handleEmailRequest}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    📧 Email Detailed Report
                  </button> */}
                  <button
                    onClick={handleContactSales}
                    className="w-full bg-cyan-700 hover:bg-cyan-600 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    💬 Contactar Ventas
                  </button>
                  {/* <button
                    onClick={() => window.location.href = 'https://calendar.app.google/bp4toLzqWLMT6BWi8'}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    📅 Programar Demo
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Modal */}
        {showLeadForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div 
              className="bg-transparent border border-cyan-800/20 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
              style={{ backgroundColor: config.colors.background }}
            >
              <h3 className="text-2xl font-bold text-cyan-50 mb-6">
                Obtén tu Reporte de ROI
              </h3>
              <p className="text-cyan-300 mb-6">
                Ingresa tus datos para recibir el análisis detallado de ROI por email.
              </p>
              
              <form onSubmit={submitEmailRequest} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-cyan-50 uppercase text-xs block">
                    Nombre Completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={leadData.name}
                    onChange={handleLeadInputChange}
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
                    value={leadData.email}
                    onChange={handleLeadInputChange}
                    className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                       text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                       focus:ring-teal-500 focus:border-transparent"
                    placeholder="juan@empresa.com"
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
                    value={leadData.companyName}
                    onChange={handleLeadInputChange}
                    className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                       text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                       focus:ring-teal-500 focus:border-transparent"
                    placeholder="Tu Empresa S.A."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-cyan-50 uppercase text-xs block">
                    Número de Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={leadData.phone}
                    onChange={handleLeadInputChange}
                    className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                       text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                       focus:ring-teal-500 focus:border-transparent"
                    placeholder="+52 (55) 1234-5678"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="text-cyan-50 uppercase text-xs block">
                    Cargo
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    value={leadData.role}
                    onChange={handleLeadInputChange}
                    className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                       text-cyan-50 placeholder:text-cyan-500/50 focus:outline-none focus:ring-2 
                       focus:ring-teal-500 focus:border-transparent"
                    placeholder="CEO, CTO, Gerente, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companySize" className="text-cyan-50 uppercase text-xs block">
                    Tamaño de la Empresa
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={leadData.companySize}
                    onChange={handleLeadInputChange}
                    className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                       text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500 
                       focus:border-transparent"
                  >
                    <option value="">Seleccionar tamaño de empresa</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="201-500">201-500 empleados</option>
                    <option value="501-1000">501-1000 empleados</option>
                    <option value="1000+">1000+ empleados</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingEmail}
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 focus:outline-none focus:ring-2 
                       focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 
                       disabled:cursor-not-allowed font-semibold"
                  >
                    {isSubmittingEmail ? (
                      <>
                        <span className="loading loading-spinner loading-sm mr-2"></span>
                        Enviando...
                      </>
                    ) : (
                      "Enviar Reporte"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      
      {/* Copyright Footer */}
      <footer className="bg-cyan-900/30 border-t border-cyan-800/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-cyan-400 text-sm">
              © {new Date().getFullYear()} Robotipy. Calculadora de ROI basada en la metodología de 
              <a 
                href="https://rocketbot.com" 
                target="_blank" 
                rel="noopener"
                className="text-cyan-300 hover:text-cyan-200 ml-1 font-semibold"
              >
                Rocketbot
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ROICalculator; 