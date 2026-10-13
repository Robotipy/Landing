// Ficha única de hechos para las landings de propuesta (/landing-1, -2, -3).
// Todo dato que se muestre sobre Robotipy debe salir de aquí o de
// libs/successCases.js. Si un dato cambia, se cambia una sola vez.

export const facts = {
  founded: 2023,
  projects: "+70",
  projectsNumber: 70,
  team: "Chile y Argentina",
  clientCountries: ["Chile", "Argentina", "Colombia", "España"],
  clientCountriesText: "Chile, Argentina, Colombia y España",
  partner: "Platinum Partner de Rocketbot",
  founderNote:
    "Danilo Toro, fundador, trabajó seis años como desarrollador de Rocketbot antes de fundar Robotipy.",
};

// Logos de clientes que ya se muestran en el carrusel de la home
// (components/TrustInUs.js). Marketers Group queda fuera porque cerró.
// Todos son PNG blancos sobre transparente: en fondos claros usar
// brightness-0 para pasarlos a negro.
export const clientLogos = [
  { src: "/assets/logo-minutoverde.png", alt: "Minuto Verde", width: 120 },
  { src: "/assets/logo-mitta.png", alt: "MITTA", width: 120 },
  { src: "/assets/logo-avisbudget.png", alt: "Avis Budget", width: 190 },
  { src: "/assets/logo-promet.png", alt: "Promet", width: 140 },
  { src: "/assets/logo-cintac.png", alt: "Grupo Cintac", width: 150 },
  { src: "/assets/logo-novagric.png", alt: "Novagric", width: 150 },
  { src: "/assets/logo-delirio.png", alt: "Grupo Delirio", width: 110 },
  { src: "/assets/logo-digitalbankla.png", alt: "Digital Bank", width: 130 },
  { src: "/assets/logo-cerezosoftware.png", alt: "Cerezo Software", width: 100 },
  { src: "/assets/logo-interact.png", alt: "Interact Solutions", width: 120 },
  { src: "/assets/logo-kabeli.png", alt: "Kabeli", width: 120 },
];

// Banda de clientes de la home principal. Logos recortados al borde (sin
// márgenes) en public/home-assets/clientes, todos en blanco o a color sobre
// transparente. aspect = ancho / alto, sirve para igualar el peso visual;
// scale corrige a ojo los logos muy gruesos o muy finos.
export const clientBand = [
  { src: "/home-assets/clientes/minutoverde.png", alt: "Minuto Verde", aspect: 2.41 },
  { src: "/home-assets/clientes/mitta.png", alt: "MITTA", aspect: 3.88, scale: 0.85 },
  { src: "/home-assets/clientes/avisbudget.png", alt: "Avis Budget", aspect: 7.44 },
  { src: "/home-assets/clientes/promet.png", alt: "Promet", aspect: 3.79 },
  { src: "/home-assets/clientes/cintac.png", alt: "Grupo Cintac", aspect: 6.0 },
  { src: "/home-assets/clientes/symnetics.png", alt: "Symnetics", aspect: 1.07 },
  { src: "/home-assets/clientes/willinn.png", alt: "Willinn", aspect: 3.75 },
  { src: "/home-assets/clientes/novagric.png", alt: "Novagric", aspect: 5.03 },
  { src: "/home-assets/clientes/biofilm.png", alt: "Biofilm", aspect: 5.34, scale: 0.85 },
  { src: "/home-assets/clientes/rentamaq.png", alt: "RentaMaq", aspect: 6.41, scale: 0.85 },
  { src: "/home-assets/clientes/delirio.png", alt: "Grupo Delirio", aspect: 2.72 },
  { src: "/home-assets/clientes/bioagri.png", alt: "BioAgri", aspect: 3.01, scale: 1.15 },
  { src: "/home-assets/clientes/jimenezpuerta.png", alt: "Jiménez Puerta Abogados", aspect: 5.01, scale: 1.15 },
  { src: "/home-assets/clientes/digitalbankla.png", alt: "Digital Bank", aspect: 3.92 },
  { src: "/home-assets/clientes/ecohidro.png", alt: "Ecohidro", aspect: 4.84 },
  { src: "/home-assets/clientes/ls.png", alt: "Estudio L&S", aspect: 2.69, scale: 0.85 },
  { src: "/home-assets/clientes/caimi.png", alt: "Caimi", aspect: 4.75, scale: 1.1 },
  { src: "/home-assets/clientes/cerezosoftware.png", alt: "Cerezo Software", aspect: 2.38, scale: 1.1 },
  { src: "/home-assets/clientes/interact.png", alt: "Interact Solutions", aspect: 4.7 },
  { src: "/home-assets/clientes/kabeli.png", alt: "Kabeli", aspect: 3.12 },
  { src: "/home-assets/clientes/rocketbot.png", alt: "Rocketbot", aspect: 8.57 },
];

// Equipo publicado en /about y en los autores del blog.
export const team = [
  {
    name: "Danilo Toro",
    role: "Fundador de Robotipy",
    bio: "Fundó Robotipy en 2023, después de trabajar seis años como desarrollador de Rocketbot.",
    image: "/landing-team/danilo-toro.png",
  },
  {
    name: "Ivan Cabrera",
    role: "CEO de Robotipy Argentina",
    bio: "Lidera Robotipy en Argentina y acompaña a empresas medianas y grandes a automatizar procesos sobre SAP y otros sistemas.",
    image: "/landing-team/ivan-cabrera.png",
  },
  {
    name: "Gabriel Toro",
    role: "Equipo Robotipy",
    bio: "Trabaja en automatización de procesos y soluciones RPA para clientes en Chile, Argentina, Colombia y España.",
    image: "/landing-team/gabriel-toro.jpeg",
  },
];

// Precios públicos (fuente: libs/faqs.js y post "Cuánto cuesta automatizar un proceso").
export const prices = {
  diagnostic: "Sin costo",
  rpaAverage: "USD 6.000",
  rpaAverageNote:
    "Promedio por proceso. Incluye un mes de trabajo y la marcha blanca. Hay proyectos de menor valor.",
  license: "USD 2.500",
  licenseNote: "Solo si tu empresa no tiene licencia de Rocketbot.",
  support: "Desde USD 300 al mes",
  supportNote: "Opcional. Monitoreo de ejecuciones y ajustes cuando cambia un sistema.",
  customSoftware: "USD 5.500 a 11.000",
  customSoftwareNote: "Aplicaciones a medida, según alcance.",
  timeline: "Un mes de desarrollo más la marcha blanca",
};

// Productos propios.
export const products = [
  {
    key: "melonhelp",
    name: "Melon Help",
    // No es producto propio: Robotipy es partner implementador.
    relation: "partner",
    description:
      "Plataforma de atención con agentes de IA y tickets desde WhatsApp, Slack y correo. Somos partner implementador.",
  },
  {
    key: "projects",
    name: "Robotipy Projects",
    description: "Gestión de proyectos, horas, recursos y soporte para equipos de desarrollo y consultoras.",
    href: "/projects",
  },
  {
    key: "monitor",
    name: "Robotipy Monitor",
    description: "Monitoreo de robots en producción: ejecuciones, fallos y logs.",
    href: "/monitor",
  },
  {
    key: "yoao",
    name: "YOAO",
    description: "Analítica de video con IA: conteo de vehículos y personas, zonas y alertas.",
  },
];

// Herramientas gratuitas que ya existen en el sitio.
export const tools = [
  { href: "/evaluador-automatizacion", label: "Evaluador de automatización" },
  { href: "/roi-calculator", label: "Calculadora de ROI" },
  { href: "/calculadora-vision-artificial", label: "Calculadora de visión artificial" },
  { href: "/calculadora-aforo-vehicular", label: "Calculadora de aforo vehicular" },
];

// Rutas de conversión reales.
export const routes = {
  contact: "/contact-us",
  cases: "/success-cases",
  about: "/about",
  faq: "/preguntas-frecuentes",
  blog: "/blog",
  rocketbot: "/rocketbot",
};

// Arma el enlace al formulario de contacto con la variante y un calificador.
export const contactHref = (variant, extra = {}) => {
  const params = new URLSearchParams({ origen: variant, ...extra });
  return `${routes.contact}?${params.toString()}`;
};
