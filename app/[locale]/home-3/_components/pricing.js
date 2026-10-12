import { prices } from "@/libs/landingFacts";

// Copia local de app/[locale]/landing-3/_components/pricing.js. Cuando exista
// libs/landingPricing.js (PR compartido), este archivo importa desde ahí.
// Los montos se leen de libs/landingFacts.js: si un precio cambia allá, el
// home se actualiza solo.
const numbersIn = (text) =>
  (String(text).match(/\d{1,3}(?:\.\d{3})+|\d+/g) || []).map((n) =>
    Number(n.replace(/\./g, ""))
  );

export const NBSP = " ";

export const formatNumber = (n) =>
  String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Espacio duro entre "USD" y la cifra para que no se separen al cortar la línea.
export const usd = (n) => `USD${NBSP}${formatNumber(n)}`;

// Aplica el espacio duro a un texto de landingFacts que ya trae "USD 300".
export const nb = (text) => String(text).replace(/USD (\d)/g, `USD${NBSP}$1`);

export const firstSentence = (text) =>
  (String(text).match(/^[^.]*\./) || [String(text)])[0].replace(/\.$/, "");

export const dropFirstSentence = (text) => String(text).replace(/^[^.]*\.\s*/, "");

export const lowerFirst = (text) => text.charAt(0).toLowerCase() + text.slice(1);

const [softwareMin, softwareMax] = numbersIn(prices.customSoftware);
const diagnosticAmount = numbersIn(prices.diagnostic)[0];

export const pricing = {
  diagnosticIsFree: diagnosticAmount === undefined,
  diagnostic: diagnosticAmount ?? 0,
  rpaAverage: numbersIn(prices.rpaAverage)[0],
  license: numbersIn(prices.license)[0],
  supportFrom: numbersIn(prices.support)[0],
  softwareMin,
  softwareMax,
};
