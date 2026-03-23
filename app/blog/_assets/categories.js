// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
export const categorySlugs = {
  agricultura: "Agricultura",
  tutoriales: "Tutoriales",
  rpa: "RPA",
  agtech: "agtech",
  fintech: "fintech",
  logistica: "logistica",
  capacitacion: "capacitacion",
  casosDeExito: "casos-de-exito",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    slug: categorySlugs.rpa,
    title: "RPA",
    titleShort: "RPA",
    description:
      "Automatización Robótica de Procesos y cálculo de ROI en proyectos de automatización",
    descriptionShort:
      "Automatización Robótica de Procesos",
  },
  {
    slug: categorySlugs.tutoriales,
    title: "Tutoriales",
    titleShort: "Tutoriales",
    description:
      "Guías paso a paso y tutoriales sobre automatización, RPA y desarrollo de software",
    descriptionShort:
      "Tutoriales",
  },
  {
    slug: categorySlugs.agtech,
    title: "AgTech",
    titleShort: "AgTech",
    description:
      "Tecnología aplicada a la agricultura: IoT, Drones y Automatización para el agro.",
    descriptionShort:
      "Tecnología Agrícola",
  },
  {
    slug: categorySlugs.fintech,
    title: "FinTech",
    titleShort: "FinTech",
    description:
      "Innovación financiera, cumplimiento normativo y automatización bancaria.",
    descriptionShort:
      "Tecnología Financiera",
  },
  {
    slug: categorySlugs.logistica,
    title: "Logística",
    titleShort: "Logística",
    description:
      "Optimización de la cadena de suministro y automatización logística.",
    descriptionShort:
      "Logística y Retail",
  },
  {
    slug: categorySlugs.capacitacion,
    title: "Capacitación",
    titleShort: "Capacitación",
    description:
      "Formación y capacitación en automatización, RPA y desarrollo de software.",
    descriptionShort:
      "Formación y capacitación",
  },
  {
    slug: categorySlugs.casosDeExito,
    title: "Casos de Éxito",
    titleShort: "Casos",
    description:
      "Casos reales de automatización RPA e inteligencia artificial en empresas de Latinoamérica",
    descriptionShort:
      "Casos de éxito reales",
  },
];
