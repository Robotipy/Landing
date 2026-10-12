import { prices } from "@/libs/landingFacts";

// Los montos se leen de la ficha de hechos (libs/landingFacts.js). Si un
// precio cambia allá, esta página se actualiza sola.
const numbersIn = (text) =>
  (String(text).match(/\d{1,3}(?:\.\d{3})+|\d+/g) || []).map((n) =>
    Number(n.replace(/\./g, ""))
  );

export const formatNumber = (n) =>
  String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Espacio duro entre "USD" y la cifra para que no se separen al cortar la línea.
export const usd = (n) => `USD ${formatNumber(n)}`;

const [softwareMin, softwareMax] = numbersIn(prices.customSoftware);

export const pricing = {
  diagnostic: numbersIn(prices.diagnostic)[0] ?? 0,
  rpaAverage: numbersIn(prices.rpaAverage)[0],
  license: numbersIn(prices.license)[0],
  supportFrom: numbersIn(prices.support)[0],
  softwareMin,
  softwareMax,
  // Datos pendientes de confirmar. Mientras estén en null no se muestran.
  // licensePeriod: "al año" o "pago único".
  licensePeriod: null,
  // taxNote: por ejemplo "Valores más IVA. En Chile se factura en CLP".
  taxNote: null,
  // volumeProgram: texto de la fila "Programa desde tres procesos".
  volumeProgram: null,
};

// Cuenta tipo de tres procesos con soporte: es el ancla de valor de la página.
export const exampleAccount = (() => {
  const processes = 3;
  const development = processes * pricing.rpaAverage;
  const supportYear = 12 * pricing.supportFrom;
  return {
    processes,
    development,
    supportMonth: pricing.supportFrom,
    supportYear,
    firstYear: development + supportYear,
  };
})();
