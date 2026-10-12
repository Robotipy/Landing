"use client";

import { useLicense } from "./LicenseProvider";

const OPTIONS = [
  { value: "si", label: "Sí" },
  { value: "no", label: "No" },
];

// Control segmentado con radios nativos: al cargar no hay ninguno marcado, Tab
// entra al grupo y las flechas cambian la opción.
export default function LicenseToggle({ hint }) {
  const { license, setLicense } = useLicense();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#E3E8EE] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
      <div className="min-w-0">
        <p id="licencia-pregunta" className="text-base font-bold leading-6 text-[#0A2540]">
          ¿Tu empresa ya tiene licencia Rocketbot?
        </p>
        {hint && <p className="mt-1 text-sm leading-5 text-[#4B5563]">{hint}</p>}
      </div>
      <div
        role="radiogroup"
        aria-labelledby="licencia-pregunta"
        className="inline-grid w-full shrink-0 grid-cols-2 gap-1 rounded-xl border border-[#E3E8EE] bg-[#F6F8FA] p-1 sm:w-auto"
      >
        {OPTIONS.map((option) => (
          <label key={option.value} className="relative cursor-pointer">
            <input
              type="radio"
              name="licencia-rocketbot"
              value={option.value}
              checked={license === option.value}
              onChange={() => setLicense(option.value)}
              className="peer sr-only"
            />
            <span className="flex min-h-[44px] min-w-[96px] items-center justify-center rounded-lg px-5 text-base font-semibold text-[#0A2540] transition-colors hover:bg-white peer-checked:bg-[#027A79] peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
