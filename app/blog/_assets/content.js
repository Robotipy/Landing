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

// All the blog articles data display in the /blog/[articleId].js pages.
const rawArticles = [
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
