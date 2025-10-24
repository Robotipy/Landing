"use client";

import { tools } from "@/libs/tools";

export default function SuccessCaseCard({ caseStudy }) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center gap-2 mb-3">
          <h3 className="md:text-xl text-lg font-bold text-success">
            {caseStudy.name}
          </h3>
          <label className="text-gray-400 px-3 py-1 bg-gray-700 rounded-full text-[10px] md:text-sm">
            {caseStudy.industry}
          </label>
        </div>
        
        <div className="space-y-3 mb-4">
          <div>
            <h4 className="font-semibold text-gray-300 text-sm">Desafío:</h4>
            <p className="text-gray-400 text-sm">{caseStudy.challenge}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-300 text-sm">Solución:</h4>
            <p className="text-gray-400 text-sm">{caseStudy.solution}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-400">
              {caseStudy.results.manualExecution}
            </div>
            <div className="text-xs text-gray-400">Ejecución Manual</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-400">
              {caseStudy.results.automatedExecution}
            </div>
            <div className="text-xs text-gray-400">Ejecución Automatizada</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-400">
              {caseStudy.results.timeSaving}
            </div>
            <div className="text-xs text-gray-400">Ahorro de Tiempo</div>
          </div>
        </div>
        
        {/* Tools Section - Desktop */}
        <div className="mt-4 justify-between items-center hidden md:flex">
          <div className="text-gray-400 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 px-1">Plataforma</span>
              {tools[caseStudy.platform]}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-fit px-5 items-center">
            {caseStudy.tools.map((tool) => (
              <span key={tool} className="w-5 text-success">
                {tools[tool]}
              </span>
            ))}
          </div>
        </div>
        {/* Tools Section - Mobile */}
        <div className="mt-4 items-center md:hidden text-gray-400">
          <div className="text-gray-400 text-lg">
            <div className="flex items-center gap-2 w-2/5">
              <span>Plataforma: </span>
              {tools[caseStudy.platform]}
            </div>
          </div>
          <span>Herramientas automatizadas:</span>
          <div className="flex flex-wrap gap-3 w-fit px-0 items-center">
            {caseStudy.tools.map((tool) => (
              <span key={tool} className="w-5 py-2">
                {tools[tool]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
