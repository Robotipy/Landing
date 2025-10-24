"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ROICalculator = () => {
  const router = useRouter();
  const [peopleInvolved, setPeopleInvolved] = useState(2);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [employeeCost, setEmployeeCost] = useState(50);
  
  const calculateSavings = () => {
    const weeklySavings = peopleInvolved * hoursPerWeek * employeeCost;
    const annualSavings = weeklySavings * 52;
    return annualSavings;
  };

  const annualSavings = calculateSavings();

  const handleCalculateDetailed = () => {
    // Create query parameters with current form data
    const queryParams = new URLSearchParams({
      peopleInProcess: peopleInvolved.toString(),
      hoursPerDay: Math.round(hoursPerWeek / 5).toString(), // Convert weekly hours to daily
      avgMonthlyCostPerPerson: Math.round((employeeCost * hoursPerWeek * 4)).toString(), // Convert hourly to monthly
      workingDaysPerMonth: '22',
      workingHoursPerDay: '8'
    });
    
    router.push(`/roi-calculator?${queryParams.toString()}`);
  };

  return (
    <div className="bg-slate-800/50 rounded-xl my-16 p-8 lg:p-12">
      <div className="max-w-[720px] mx-auto text-center mb-8">
        <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
          Calcula tu ROI Potencial
        </h1>
        <p className="text-white text-lg mt-2">
          Ve cuánto puede ahorrar tu negocio con la automatización.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-white text-base font-medium">
                Personas Involucradas en el Proceso
              </label>
              <span className="text-accent text-lg font-bold">
                {peopleInvolved} Personas
              </span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="10"
                value={peopleInvolved}
                onChange={(e) => setPeopleInvolved(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-white text-base font-medium">
                Horas por Semana por Persona
              </label>
              <span className="text-accent text-lg font-bold">
                {hoursPerWeek} Horas
              </span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-white text-base font-medium">
                Costo Promedio por Hora
              </label>
              <span className="text-accent text-lg font-bold">
                ${employeeCost}/hr
              </span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={employeeCost}
                onChange={(e) => setEmployeeCost(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </div>
        <div className="text-center bg-slate-800 p-8 rounded-lg">
          <h3 className="text-white text-lg font-medium">
            Ahorro Anual Estimado
          </h3>
          <p className="text-5xl font-black text-accent my-2">
            ${annualSavings.toLocaleString()}
          </p>
          <p className="text-white mb-6">
            Este es un ahorro potencial que podría reinvertirse en crecimiento e innovación.
          </p>
          <button
            onClick={handleCalculateDetailed}
            className="w-full bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Calcular Ahorro Detallado
          </button>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
