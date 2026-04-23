// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

import { post as comoCalcularElRoiEnProyectosRpa } from "./posts/como-calcular-el-roi-en-proyectos-rpa.js";
import { post as queEsRpa } from "./posts/que-es-rpa.js";
import { post as chatbotsIaEcommerce } from "./posts/chatbots-ia-ecommerce.js";
import { post as casoExitoLogistica } from "./posts/caso-exito-logistica.js";
import { post as tendenciasAutomatizacion2025 } from "./posts/tendencias-automatizacion-2025.js";
import { post as capacitacionRpaIa } from "./posts/capacitacion-rpa-ia.js";
import { post as porqueElegirRocketbot } from "./posts/porque-elegir-rocketbot.js";
import { post as casoExitoRpaIaMineriaCostos } from "./posts/caso-exito-rpa-ia-mineria-costos.js";
import { post as casoExitoAutomatizacionOrdenesSapSiderurgia } from "./posts/caso-exito-automatizacion-ordenes-sap-siderurgia.js";
import { post as casoExitoInteligenciaMercadoAgronegocios } from "./posts/caso-exito-inteligencia-mercado-agronegocios.js";
import { post as casoExitoAutomatizacionFinancieraAgroindustria } from "./posts/caso-exito-automatizacion-financiera-agroindustria.js";
import { post as casoExitoCartolasFactoringVitivinicola } from "./posts/caso-exito-cartolas-factoring-vitivinicola.js";
import { post as casoExitoConciliacionBancariaAgropecuario } from "./posts/caso-exito-conciliacion-bancaria-agropecuario.js";

// All the blog articles data display in the /blog/[articleId].js pages.
const rawArticles = [
  casoExitoRpaIaMineriaCostos,
  casoExitoAutomatizacionOrdenesSapSiderurgia,
  casoExitoInteligenciaMercadoAgronegocios,
  casoExitoAutomatizacionFinancieraAgroindustria,
  casoExitoCartolasFactoringVitivinicola,
  casoExitoConciliacionBancariaAgropecuario,
  comoCalcularElRoiEnProyectosRpa,
  queEsRpa,
  chatbotsIaEcommerce,
  casoExitoLogistica,
  tendenciasAutomatizacion2025,
  capacitacionRpaIa,
  porqueElegirRocketbot,
];

// Debugging: Log any undefined articles
rawArticles.forEach((a, i) => {
  if (!a) console.error(`Article at index ${i} is undefined`);
});

export const articles = rawArticles.filter(Boolean);

export const getArticlesByLocale = (locale) =>
  articles.filter((a) => a.locale === locale);
