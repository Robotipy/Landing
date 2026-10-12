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
    description: "Plataforma de atención con agentes de IA y tickets desde WhatsApp, Slack y correo.",
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
