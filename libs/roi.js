// Lógica de cálculo compartida entre la calculadora (wizard) y la vista de
// reporte imprimible. Mantener ambas en sync importando desde aquí.

export const DISCOUNT_RATE = 0.10;
export const WORKING_DAYS_PER_MONTH = 22;
export const WORKING_HOURS_PER_DAY = 8;

export const TOOL_KEYS = ["rocketbot", "powerautomate", "uipath", "custom", "otra", "nose"];

export const DEFAULT_FORM = {
  descripcion: "",
  personas: 2,
  salario: 1000,
  diasMes: 15,
  horasDia: 8,
  erroresMes: 5,
  minPorError: 30,
  horasExtraMes: 0,
  costoHoraExtra: 160,
  multasMes: 0,
  exchangeRate: 1,
  herramienta: "rocketbot",
  costoDesarrollo: 5800,
  licenciasAnual: 0,
  mantenimiento: 580,
};

// Campos numéricos que se serializan en la URL para compartir/imprimir.
export const SHAREABLE_NUM = [
  "personas", "salario", "diasMes", "horasDia", "erroresMes", "minPorError",
  "horasExtraMes", "costoHoraExtra", "multasMes", "exchangeRate",
  "costoDesarrollo", "licenciasAnual", "mantenimiento",
];

export function computeROI(f) {
  const costoHora = f.salario / (WORKING_DAYS_PER_MONTH * WORKING_HOURS_PER_DAY);
  const totalHorasMes = f.personas * f.horasDia * f.diasMes;

  const ahorroProductividad = totalHorasMes * costoHora * 12;
  const ahorroErrores       = (f.erroresMes * f.minPorError / 60) * costoHora * 12;
  const ahorroHorasExtra    = f.horasExtraMes * f.costoHoraExtra * 12;
  const multasRecuperadas   = f.multasMes * 12;
  const beneficioAnual = ahorroProductividad + ahorroErrores + ahorroHorasExtra + multasRecuperadas;

  const licenciasAnualUSD = f.licenciasAnual || 0;
  const mantenimiento = f.mantenimiento;
  const inversionAño1   = f.costoDesarrollo + licenciasAnualUSD + mantenimiento;
  const recurrenteAnual = licenciasAnualUSD + mantenimiento;

  const benefDesc = [1, 2, 3].reduce(
    (s, y) => s + beneficioAnual / Math.pow(1 + DISCOUNT_RATE, y), 0
  );
  const costoDesc =
      inversionAño1   / Math.pow(1 + DISCOUNT_RATE, 1)
    + recurrenteAnual / Math.pow(1 + DISCOUNT_RATE, 2)
    + recurrenteAnual / Math.pow(1 + DISCOUNT_RATE, 3);

  const VPN = benefDesc - costoDesc;
  const ROI = costoDesc > 0 ? (VPN / costoDesc) * 100 : 0;
  const ROI1a = inversionAño1 > 0 ? ((beneficioAnual - inversionAño1) / inversionAño1) * 100 : 0;
  const paybackMeses = beneficioAnual > 0 ? (inversionAño1 / beneficioAnual) * 12 : 0;

  return {
    licenciasAnualUSD,
    mantenimiento,
    inversionAño1,
    recurrenteAnual,
    beneficioAnual,
    beneficioTotal3a: beneficioAnual * 3,
    VPN,
    ROI,
    ROI1a,
    paybackMeses,
    ahorroProductividad,
    ahorroErrores,
    ahorroHorasExtra,
    multasRecuperadas,
    costoHora,
    totalHorasMes,
  };
}

export const fmtMoney = (n) => `$${Math.round(n || 0).toLocaleString("en-US")}`;
export const fmtPct   = (n) => `${(n || 0).toFixed(1)}%`;

// Lee los parámetros de la URL y devuelve los valores válidos para el form,
// más si venía un costo de licencias explícito (valor personalizado).
export function parseParams(search) {
  const p = new URLSearchParams(search);
  const values = {};
  SHAREABLE_NUM.forEach((k) => {
    const raw = p.get(k);
    if (raw !== null) {
      const v = parseFloat(raw);
      if (Number.isFinite(v)) values[k] = v;
    }
  });
  // Compatibilidad con enlaces antiguos.
  const legacy = {
    peopleInProcess: "personas",
    hoursPerDay: "horasDia",
    avgMonthlyCostPerPerson: "salario",
  };
  Object.entries(legacy).forEach(([param, field]) => {
    const v = parseFloat(p.get(param));
    if (Number.isFinite(v)) values[field] = v;
  });
  const desc = p.get("descripcion");
  if (desc) values.descripcion = desc;
  const herr = p.get("herramienta");
  if (herr && TOOL_KEYS.includes(herr)) values.herramienta = herr;

  return { values, hasLicencias: "licenciasAnual" in values };
}
