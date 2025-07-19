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

// Industry templates
const INDUSTRY_TEMPLATES = {
  banking: {
    name: "Banking",
    peopleInProcess: 5,
    daysPerMonth: 22,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 2500,
    reprocessHours: 2,
    overtimeHours: 1,
    overtimeCost: 200
  },
  manufacturing: {
    name: "Manufacturing", 
    peopleInProcess: 3,
    daysPerMonth: 20,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 1800,
    reprocessHours: 1,
    overtimeHours: 2,
    overtimeCost: 160
  },
  healthcare: {
    name: "Healthcare",
    peopleInProcess: 4,
    daysPerMonth: 22,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 2200,
    reprocessHours: 1.5,
    overtimeHours: 1.5,
    overtimeCost: 180
  },
  insurance: {
    name: "Insurance",
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
    peopleInProcess: 3,
    daysPerMonth: 6,
    hoursPerDay: 8,
    avgMonthlyCostPerPerson: 1500,
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
    robotDevelopmentCost: 7800,
    annualMaintenanceCost: 450
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
      annualMaintenanceCost
    } = formData;

    // Basic calculations
    const totalRepetitiveHours = peopleInProcess * daysPerMonth * hoursPerDay;
    const costPerHour = avgMonthlyCostPerPerson / (workingDaysPerMonth * workingHoursPerDay);
    const monthlyProductivitySavings = totalRepetitiveHours * costPerHour;
    
    // Error costs
    const monthlyReprocessCosts = reprocessHours * costPerHour;
    
    // Overtime costs
    const monthlyOvertimeCosts = overtimeHours * overtimeCost;
    
    // Total monthly benefits
    const monthlyBenefits = monthlyProductivitySavings + monthlyReprocessCosts + monthlyOvertimeCosts + monthlyFines + monthlyLosses;
    
    // Annual benefits
    const annualBenefits = monthlyBenefits * 12;
    
    // License costs
    const totalLicenseCostUSD = Object.keys(selectedLicenses).reduce((total, key) => {
      return total + (selectedLicenses[key] * ROCKETBOT_LICENSES[key].price);
    }, 0);
    
    const totalLicenseCostLocal = totalLicenseCostUSD * exchangeRate;
    
    // Total investment calculation
    const totalInvestment = totalLicenseCostLocal + robotDevelopmentCost;
    
    // Annual costs (licenses + maintenance)
    const year1Cost = totalInvestment + annualMaintenanceCost;
    const year2Cost = annualMaintenanceCost + (totalLicenseCostLocal * 0.2); // Assume 20% annual license fee
    const year3Cost = annualMaintenanceCost + (totalLicenseCostLocal * 0.2);
    
    // 3-year analysis
    const totalBenefits3Years = annualBenefits * 3;
    const totalCosts3Years = year1Cost + year2Cost + year3Cost;
    
    // ROI calculations
    const roi = ((totalBenefits3Years - totalCosts3Years) / totalCosts3Years) * 100;
    const paybackMonths = (totalInvestment / monthlyBenefits);
    
    // NPV calculation (10% discount rate)
    const discountRate = 0.10;
    const npvYear1 = (annualBenefits - year1Cost) / Math.pow(1 + discountRate, 1);
    const npvYear2 = (annualBenefits - year2Cost) / Math.pow(1 + discountRate, 2);
    const npvYear3 = (annualBenefits - year3Cost) / Math.pow(1 + discountRate, 3);
    const netPresentValue = npvYear1 + npvYear2 + npvYear3;

    setCalculations({
      totalRepetitiveHours,
      monthlyProductivitySavings,
      monthlyReprocessCosts,
      monthlyOvertimeCosts,
      monthlyBenefits,
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
      peopleInProcess: 3,
      daysPerMonth: 6,
      hoursPerDay: 8,
      avgMonthlyCostPerPerson: 1500,
      workingDaysPerMonth: 22,
      workingHoursPerDay: 8,
      reprocessHours: 0,
      overtimeHours: 0,
      overtimeCost: 160,
      monthlyFines: 0,
      monthlyLosses: 0,
      exchangeRate: 1,
      selectedLicenses: {
        licenseS: 1,
        licenseM: 0,
        licenseL: 0,
        orchestratorEntry: 0,
        orchestratorStandard: 0,
        orchestratorEnterprise: 0,
        orchestratorCorporate: 0
      },
      robotDevelopmentCost: 7800,
      annualMaintenanceCost: 450
    });
    setSelectedTemplate('');
    toast.success("Form reset to default values");
  };

  const handleEmailRequest = () => {
    setShowLeadForm(true);
  };

  const submitEmailRequest = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.companyName) {
      toast.error("Please fill in all required fields");
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
      
      toast.success("ROI report sent to your email successfully!");
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
      toast.error(error.message || "Failed to send report. Please try again.");
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
                ROI Calculator
              </h1>
              <p className="text-lg lg:text-xl text-cyan-300 max-w-3xl mx-auto">
                Calculate the return on investment for your automation project. 
                Configure your parameters and see instant results.
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
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Process Parameters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        People Involved in Process
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
                        Days per Month (Process Runs)
                      </label>
                      <input
                        name="daysPerMonth"
                        type="number"
                        value={formData.daysPerMonth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">How many days per month this specific process is executed</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Hours per Day (Dedicated to Process)
                      </label>
                      <input
                        name="hoursPerDay"
                        type="number"
                        value={formData.hoursPerDay}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">How many hours per day each person spends on this process</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Monthly Salary per Person ($)
                      </label>
                      <input
                        name="avgMonthlyCostPerPerson"
                        type="number"
                        value={formData.avgMonthlyCostPerPerson}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Average monthly salary cost per employee</p>
                    </div>
                  </div>
                </div>

                {/* Working Schedule Parameters */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Working Schedule (for cost calculation)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Working Days per Month
                      </label>
                      <input
                        name="workingDaysPerMonth"
                        type="number"
                        value={formData.workingDaysPerMonth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Total working days per month (typically 20-22)</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Working Hours per Day
                      </label>
                      <input
                        name="workingHoursPerDay"
                        type="number"
                        value={formData.workingHoursPerDay}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <p className="text-cyan-400 text-xs">Standard working hours per day (typically 8)</p>
                    </div>
                  </div>
                </div>

                {/* Error and Overtime Costs */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-8"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Additional Costs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Reprocess Hours/Month
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
                        Overtime Hours/Month
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
                        Overtime Cost per Hour ($)
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
                        Exchange Rate (USD to Local)
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
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">RocketBot Licensing</h3>
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
                  <h3 className="text-xl font-bold text-cyan-50 mb-6">Implementation Costs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Robot Development Cost ($)
                      </label>
                      <input
                        name="robotDevelopmentCost"
                        type="number"
                        value={formData.robotDevelopmentCost}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-cyan-50 uppercase text-xs block">
                        Annual Maintenance ($)
                      </label>
                      <input
                        name="annualMaintenanceCost"
                        type="number"
                        value={formData.annualMaintenanceCost}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-cyan-950/50 border border-cyan-800/30 rounded-md 
                           text-cyan-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
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
                    Reset Form
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
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">Monthly Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Productivity Savings:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.monthlyProductivitySavings || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Error Reduction:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.monthlyReprocessCosts || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Overtime Savings:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.monthlyOvertimeCosts || 0)}
                      </span>
                    </div>
                    <div className="border-t border-cyan-800/30 pt-3">
                      <div className="flex justify-between">
                        <span className="text-cyan-50 font-semibold">Total Monthly:</span>
                        <span className="text-teal-400 font-bold text-lg">
                          {formatCurrency(calculations.monthlyBenefits || 0)}
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
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">Investment</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Licenses (USD):</span>
                      <span className="text-cyan-50">
                        ${(calculations.totalLicenseCostUSD || 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Licenses (Local):</span>
                      <span className="text-cyan-50">
                        {formatCurrency(calculations.totalLicenseCostLocal || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Development:</span>
                      <span className="text-cyan-50">
                        {formatCurrency(formData.robotDevelopmentCost)}
                      </span>
                    </div>
                    <div className="border-t border-cyan-800/30 pt-3">
                      <div className="flex justify-between">
                        <span className="text-cyan-50 font-semibold">Total Investment:</span>
                        <span className="text-yellow-400 font-bold text-lg">
                          {formatCurrency(calculations.totalInvestment || 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Summary */}
                <div 
                  className="bg-transparent border border-cyan-800/20 rounded-lg p-6"
                  style={{ backgroundColor: config.colors.background }}
                >
                  <h3 className="text-lg font-bold text-cyan-50 mb-4">ROI Analysis</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Annual Benefits:</span>
                      <span className="text-cyan-50 font-semibold">
                        {formatCurrency(calculations.annualBenefits || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">3-Year ROI:</span>
                      <span className="text-green-400 font-bold text-lg">
                        {formatPercentage(calculations.roi || 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyan-300">Payback Period:</span>
                      <span className="text-cyan-50 font-semibold">
                        {(calculations.paybackMonths || 0).toFixed(1)} months
                      </span>
                    </div>
                    <div className="border-t border-cyan-800/30 pt-3">
                      <div className="flex justify-between">
                        <span className="text-cyan-50 font-semibold">Net Present Value:</span>
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
                    onClick={() => window.location.href = '/contact'}
                    className="w-full bg-cyan-700 hover:bg-cyan-600 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    💬 Contact Sales
                  </button>
                  <button
                    onClick={() => window.location.href = 'https://calendar.app.google/bp4toLzqWLMT6BWi8'}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    📅 Schedule Demo
                  </button>
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
                Get Your ROI Report
              </h3>
              <p className="text-cyan-300 mb-6">
                Enter your details to receive the detailed ROI analysis via email.
              </p>
              
              <form onSubmit={submitEmailRequest} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-cyan-50 uppercase text-xs block">
                    Full Name *
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
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-cyan-50 uppercase text-xs block">
                    Email *
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
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-cyan-50 uppercase text-xs block">
                    Company Name *
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
                    placeholder="Your Company Inc."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-cyan-50 uppercase text-xs block">
                    Phone Number
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
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="text-cyan-50 uppercase text-xs block">
                    Role
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
                    placeholder="CEO, CTO, Manager, etc."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companySize" className="text-cyan-50 uppercase text-xs block">
                    Company Size
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
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="flex-1 bg-gray-600 hover:bg-gray-500 text-white py-3 px-6 rounded-md 
                       transition-colors duration-200 font-semibold"
                  >
                    Cancel
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
                        Sending...
                      </>
                    ) : (
                      "Send Report"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ROICalculator; 