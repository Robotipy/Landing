// Contenido de /home-2 (Mapa de sistemas). Solo en español.
// Cifras y hechos: SOLO libs/landingFacts.js y libs/successCases.js. Cada
// ficha se arma desde su caso por id; si el caso desaparece, la ficha se cae
// sola, y un sistema sin fichas sale de la lista, del selector del hero, de la
// columna del mapa y del formulario de diagnóstico.
// repoCase, timeFigure y metric son copia de app/[locale]/landing-2/data.js
// para no depender de una landing que se va a borrar.

import { successCases, industries as caseIndustries } from "@/libs/successCases";
import {
  clientLogos,
  contactHref,
  facts,
  prices,
  products,
  team as landingTeam,
  tools,
} from "@/libs/landingFacts";
import { bankingFaqs, faqHub, rpaFaqs } from "@/libs/faqs";

export const VARIANT = "home-2";
export const PAGE_PATH = "/home-2";
export const CTA_LABEL = "Agenda tu diagnóstico sin costo";
export const CONTACT_HREF = contactHref(VARIANT);

export const META = {
  title: "RPA e IA sobre SAP, mainframe y ERP locales | Robotipy",
  description:
    "Casos de RPA e IA por industria y por sistema: SAP, mainframe 3270, Finnegans, Q-Biz, portales bancarios y del Estado. Diagnóstico sin costo.",
};

// Minería (mineria-1) y Retail (retail-1) llegaron por el canal Symnetics y
// Pharu: mientras no haya visto bueno escrito van como fichas chicas sin cifra
// y quedan fuera de la sección de IA.

// /desarrollo-software todavía muestra TestimonialsSection con testimonios
// inventados. Pasar a true en el mismo PR que lo retira.
export const LINK_CUSTOM_SOFTWARE_PAGE = false;

const bySourceId = new Map(successCases.map((c) => [c.id, c]));
const hasCase = (id) => bySourceId.has(id);

const NBSP = String.fromCharCode(160);

// Espacio duro entre número y unidad para que "10 min" no se parta en dos líneas.
const shortTime = (value) => String(value).replace(/\s*hr$/i, " h").replace(/ /g, NBSP);
const timeFigure = (c) =>
  `${shortTime(c.results.manualExecution)} a ${shortTime(c.results.automatedExecution)}`;
const metric = (c, index) => c.metrics[index].value;
const plain = (value) => String(value).replace(/^~/, "").replace(/\+$/, "");
// "~400" pasa a "cerca de 400"; un valor exacto queda igual.
const approx = (value, capital = false) => {
  const raw = String(value);
  if (!raw.startsWith("~")) return raw;
  return `${capital ? "Cerca" : "cerca"} de ${raw.slice(1)}`;
};
const lower = (value) => String(value).charAt(0).toLowerCase() + String(value).slice(1);

function repoCase(id, build) {
  const source = bySourceId.get(id);
  if (!source) return null;
  try {
    return { id, ...build(source) };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Industrias del mapa y sus páginas
// ---------------------------------------------------------------------------

const MAP_INDUSTRY_DEFS = [
  { slug: "alimentos", label: "Alimentos", short: "Alimentos" },
  { slug: "agricola", label: "Agrícola", short: "Agrícola" },
  { slug: "automotriz", label: "Automotriz y flotas", short: "Automotriz" },
  { slug: "financiero", label: "Financiero", short: "Financiero" },
  { slug: "seguros", label: "Seguros", short: "Seguros" },
  { slug: "transporte", label: "Transporte y logística", short: "Transporte" },
  { slug: "hoteleria", label: "Hotelería", short: "Hotelería" },
  {
    slug: "servicios-profesionales",
    label: "Servicios profesionales",
    short: "Servicios profesionales",
  },
  { slug: "telecomunicaciones", label: "Telecomunicaciones", short: "Telecomunicaciones" },
  { slug: "sector-publico", label: "Sector público", short: "Sector público" },
];

const industryDef = (slug) => MAP_INDUSTRY_DEFS.find((i) => i.slug === slug);
const industryHref = (slug) => `/casos-exito/${slug}`;

export const INDUSTRY_COUNT = caseIndustries.length;

// ---------------------------------------------------------------------------
// Fichas de caso (las comparten los paneles de sistema)
// ---------------------------------------------------------------------------

const CARD_BUILDERS = {
  "alimentos-4": (c) => ({
    figure: `${metric(c, 0)} fuentes bancarias`,
    text: "cargadas y contabilizadas en SAP cada día, con validación de que el resultado cuadre en cero",
    sector: "Alimentos",
    chips: ["SAP", "Portales bancarios", "Outlook", "Excel"],
  }),
  "alimentos-5": (c) => ({
    figure: `${metric(c, 0)} bancos`,
    text: `con identificación automática de deudores y ${metric(c, 1)} reglas de referencia en las cuentas de mayor`,
    sector: "Alimentos",
    chips: ["SAP", "Excel", "Outlook"],
  }),
  "automotriz-5": (c) => ({
    figure: `${metric(c, 0)} materiales`,
    text: `en el maestro SAP, con respuesta automática al ${metric(c, 2)} de las solicitudes de ${approx(metric(c, 1))} solicitantes en todo Chile`,
    sector: "Flotas y rent-a-car",
    chips: ["SAP", "Outlook", "Excel", "Python"],
  }),
  "automotriz-3": (c) => ({
    figure: timeFigure(c),
    text: "en la generación de órdenes de compra en SAP, con envío al proveedor a cualquier hora",
    sector: "Rent-a-car",
    chips: ["SAP", "Excel", "PDF", "Outlook"],
  }),
  "automotriz-6": (c) => ({
    figure: `${approx(metric(c, 2), true)} registros por noche`,
    text: `en ${metric(c, 1)} sucursales y ${metric(c, 0)} marcas, con un reporte por ejecución`,
    sector: "Rent-a-car",
    chips: ["Mainframe 3270", "SQL Server", "Excel", "Outlook"],
  }),
  "agricola-2": (c) => ({
    figure: timeFigure(c),
    text: "en la conciliación de bancos argentinos contra Finnegans",
    sector: "Agroindustria",
    chips: ["Finnegans", "Portales bancarios", "Excel", "Outlook"],
  }),
  "agricola-4": (c) => ({
    figure: timeFigure(c),
    text: "en la carga de facturas del SII en Q-Biz, cada una con su orden de compra",
    sector: "Frutícola",
    chips: ["SII", "Q-Biz", "XML", "Excel"],
  }),
  "transporte-4": (c) => ({
    figure: timeFigure(c),
    text: "en el envío de expedientes a la Agencia Tributaria de España desde Dynamics NAV, con firma digital",
    sector: "Transporte",
    chips: ["Dynamics NAV", "Agencia Tributaria", "Outlook"],
  }),
  "financiero-7": (c) => ({
    figure: `${metric(c, 0)} de acierto en pruebas`,
    text: `leyendo con IA las pantallas de los bancos, contra ${approx(metric(c, 1))} del OCR anterior`,
    sector: "Cooperativa",
    chips: ["Portales bancarios", "Modelo de IA", "Python", "Excel"],
  }),
  "financiero-1": (c) => ({
    figure: timeFigure(c),
    text: "en la carga de contratos en el portal de la Dirección del Trabajo, que se cae con frecuencia",
    sector: "Banca",
    chips: ["Dirección del Trabajo", "Excel", "Outlook"],
  }),
  "servicios-profesionales-3": (c) => ({
    figure: timeFigure(c),
    text: "reuniendo datos de correos y de 6 portales, como RUES y RUNT, para solicitudes de conciliación y audiencias",
    sector: "Estudio jurídico",
    chips: ["RUES", "RUNT", "Google Calendar", "Word"],
  }),
  "seguros-2": (c) => ({
    figure: `${metric(c, 0)} tipos de tarea`,
    text: `resueltos en los portales de ${metric(c, 1)} aseguradoras, con revisión de la bandeja ${lower(metric(c, 2))}`,
    sector: "Correduría de seguros, España",
    chips: ["Portales de aseguradoras", "Excel"],
  }),
  "financiero-2": (c) => ({
    figure: timeFigure(c),
    text: "en la actualización de siniestros abiertos con los datos del portal de cada aseguradora",
    sector: "Seguros",
    chips: ["Portales de aseguradoras", "Chrome"],
  }),
  "automotriz-4": (c) => ({
    figure: timeFigure(c),
    text: "en la valoración de baterías de vehículos en el portal de una aseguradora",
    sector: "Logística",
    chips: ["Portal de aseguradora", "Excel", "PDF"],
  }),
  "hoteleria-1": (c) => ({
    figure: timeFigure(c),
    text: "al día en el censo de ocupación de 3 hoteles",
    sector: "Cadena hotelera",
    chips: ["PMS", "Excel", "SharePoint", "Outlook"],
  }),
  "hoteleria-2": (c) => ({
    figure: `${metric(c, 0)} hoteles`,
    text: "con sus estados de pago traducidos del PMS al formato contable del grupo, sin transcripción manual",
    sector: "Cadena hotelera",
    chips: ["PMS", "SharePoint", "Excel"],
  }),
  "telecomunicaciones-1": (c) => ({
    figure: `${approx(metric(c, 0), true)} mensajes al día`,
    text: `en los picos de demanda, con más de ${plain(metric(c, 1))} tickets en un día y primera respuesta ${metric(c, 2)} de un agente de IA`,
    sector: "Proveedor de internet",
    chips: ["Melon Help", "WhatsApp", "Agente de IA"],
  }),
  "servicios-profesionales-1": (c) => ({
    figure: timeFigure(c),
    text: "en el conteo y la clasificación de vehículos de un estudio de tránsito, con reporte consolidado en Excel",
    sector: "Ingeniería vial",
    chips: ["Visión artificial", "Python", "Excel"],
  }),
  "sector-publico-1": (c) => ({
    figure: `${metric(c, 2)} y alertas`,
    text: "sobre las cámaras que el municipio ya tenía, con conteo de vehículos y personas",
    sector: "Municipio",
    chips: ["YOAO", "Cámaras existentes", "Python"],
  }),
};

function buildCard(id) {
  const builder = CARD_BUILDERS[id];
  if (!builder) return null;
  const card = repoCase(id, builder);
  if (!card) return null;
  const industry = industryDef(bySourceId.get(id).categoria);
  if (!industry) return null;
  return {
    ...card,
    href: industryHref(industry.slug),
    linkLabel: `Ver casos de ${industry.label}`,
  };
}

// ---------------------------------------------------------------------------
// Sistemas: familias de casos, paneles y guías
// ---------------------------------------------------------------------------

const SYSTEM_DEFS = [
  {
    slug: "sap",
    name: "SAP",
    short: "SAP",
    intro:
      "Finanzas y abastecimiento sobre SAP: movimientos bancarios, pagos de clientes, maestro de materiales y órdenes de compra.",
    family: ["alimentos-4", "alimentos-5", "automotriz-3", "automotriz-5"],
    cards: ["alimentos-4", "alimentos-5", "automotriz-5", "automotriz-3"],
    guides: [
      {
        slug: "que-procesos-de-sap-se-pueden-automatizar-con-rpa",
        label: "Qué procesos de SAP se pueden automatizar",
      },
    ],
  },
  {
    slug: "mainframe",
    name: "Mainframe 3270",
    short: "Mainframe",
    intro:
      "Pantallas de terminal operadas por un robot sobre un emulador que se reconecta solo si la sesión se corta.",
    family: ["automotriz-6"],
    cards: ["automotriz-6"],
    guides: [
      {
        slug: "como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros",
        label: "Cómo conectar un robot a tu ERP o a un sistema antiguo",
      },
    ],
  },
  {
    slug: "erp",
    name: "Finnegans, Q-Biz y Dynamics",
    short: "Otros ERP",
    intro:
      "Conciliación y carga de facturas en Finnegans y Q-Biz, y expedientes tributarios desde Dynamics NAV.",
    family: [
      "agricola-2",
      "agricola-4",
      "alimentos-1",
      "alimentos-2",
      "transporte-1",
      "transporte-2",
      "transporte-4",
      "transporte-5",
      "transporte-6",
    ],
    cards: ["agricola-2", "agricola-4", "transporte-4"],
    // Defontana va solo como guía: no tiene caso en libs/successCases.js.
    guides: [
      {
        slug: "como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros",
        label: "Cómo conectar un robot a tu ERP",
      },
      { slug: "como-automatizar-defontana", label: "Cómo automatizar Defontana" },
    ],
  },
  {
    slug: "bancos",
    name: "Portales bancarios",
    short: "Bancos",
    intro:
      "Descarga y conciliación de movimientos bancarios, también cuando el portal solo los muestra en pantalla.",
    family: ["alimentos-4", "alimentos-5", "agricola-2", "financiero-7"],
    cards: ["financiero-7", "alimentos-4", "agricola-2"],
    guides: [
      {
        slug: "como-automatizar-la-conciliacion-bancaria",
        label: "Cómo automatizar la conciliación bancaria",
      },
    ],
  },
  {
    slug: "estado",
    name: "SII y portales del Estado",
    short: "SII y Estado",
    intro:
      "Descargas y trámites en portales públicos: SII, Dirección del Trabajo, Agencia Tributaria de España, RUES y RUNT.",
    family: [
      "agricola-4",
      "financiero-1",
      "servicios-profesionales-3",
      "servicios-profesionales-4",
      "servicios-profesionales-5",
      "transporte-1",
      "transporte-2",
      "transporte-4",
      "transporte-5",
      "transporte-6",
    ],
    cards: ["financiero-1", "servicios-profesionales-3", "agricola-4", "transporte-4"],
    guides: [
      {
        slug: "como-automatizar-la-facturacion-electronica",
        label: "Cómo automatizar la facturación electrónica",
      },
    ],
  },
  {
    slug: "aseguradoras",
    name: "Portales de aseguradoras",
    short: "Aseguradoras",
    intro:
      "Siniestros revisados y actualizados en el portal de cada compañía, a partir de la bandeja de tareas de tu sistema de gestión.",
    family: ["automotriz-2", "automotriz-4", "financiero-2", "financiero-6", "seguros-2"],
    cards: ["seguros-2", "financiero-2", "automotriz-4"],
    guides: [
      {
        slug: "automatizacion-en-seguros-polizas-y-siniestros",
        label: "Automatización en seguros: pólizas y siniestros",
      },
    ],
  },
  {
    slug: "pms",
    name: "PMS hotelero",
    short: "PMS",
    intro:
      "Reportes del sistema de gestión hotelera convertidos en el censo diario y en los estados de pago del grupo.",
    family: ["hoteleria-1", "hoteleria-2"],
    cards: ["hoteleria-1", "hoteleria-2"],
    guides: [],
  },
  {
    slug: "atencion",
    name: "WhatsApp y canales de atención",
    short: "Atención",
    intro:
      "Cada conversación pasa a ser un ticket y un agente de IA responde las consultas frecuentes, con Melon Help, nuestra plataforma de atención.",
    family: ["telecomunicaciones-1"],
    cards: ["telecomunicaciones-1"],
    guides: [],
    links: [{ href: "/chatbot", label: "Agentes de IA para atención" }],
  },
  {
    slug: "video",
    name: "Cámaras y video",
    short: "Video",
    // Solo el caso municipal (sector-publico-1) declara plataforma propia; el
    // de ingeniería vial no nombra YOAO, por eso el producto va aparte.
    intro:
      "Conteo y clasificación de vehículos y personas en video en vivo o grabado. Para esto tenemos YOAO, nuestra plataforma de analítica de video.",
    family: ["servicios-profesionales-1", "sector-publico-1"],
    cards: ["servicios-profesionales-1", "sector-publico-1"],
    guides: [],
    links: [
      { href: "/analysis", label: "Análisis de video con IA" },
      { href: "/calculadora-aforo-vehicular", label: "Calculadora de aforo vehicular" },
      { href: "/calculadora-vision-artificial", label: "Calculadora de visión artificial" },
    ],
  },
];

// Un sistema sin fichas sale de la página entera.
export const SYSTEMS = SYSTEM_DEFS.map((s) => ({
  ...s,
  family: s.family.filter(hasCase),
  cardList: s.cards.map(buildCard).filter(Boolean),
  links: s.links || [],
})).filter((s) => s.cardList.length > 0);

// ---------------------------------------------------------------------------
// Mapa de cobertura: industria x sistema
// ---------------------------------------------------------------------------

// Leyenda de cada celda encendida. caseIds: el caso que da la cifra (si hay
// varios, basta que exista uno). Si ninguno existe, la celda sigue encendida
// por los otros ids de su familia y usa el texto de respaldo.
const LEGENDS = {
  "alimentos:sap": {
    caseIds: ["alimentos-4"],
    text: (c) =>
      `SAP en Alimentos: ${metric(c, 0)} fuentes bancarias cargadas y contabilizadas cada día`,
  },
  "alimentos:erp": {
    caseIds: ["alimentos-1", "alimentos-2"],
    text: () => "Dynamics en Alimentos: ratificación de órdenes de producción y de servicio",
  },
  "alimentos:bancos": {
    caseIds: ["alimentos-5"],
    text: (c) =>
      `Bancos en Alimentos: ${metric(c, 0)} bancos con identificación automática de deudores`,
  },
  "agricola:erp": {
    caseIds: ["agricola-4"],
    text: (c) =>
      `Q-Biz en Agrícola: facturas cargadas con su orden de compra, de ${timeFigure(c)}`,
  },
  "agricola:bancos": {
    caseIds: ["agricola-2"],
    text: (c) =>
      `Bancos en Agrícola: conciliación de bancos argentinos contra Finnegans, de ${timeFigure(c)}`,
  },
  "agricola:estado": {
    caseIds: ["agricola-4"],
    text: () => "SII en Agrícola: facturas descargadas y cruzadas con su orden de compra",
  },
  "automotriz:sap": {
    caseIds: ["automotriz-5"],
    text: (c) =>
      `SAP en Automotriz: maestro de ${metric(c, 0)} materiales, con respuesta automática al ${metric(c, 2)} de las solicitudes`,
  },
  "automotriz:mainframe": {
    caseIds: ["automotriz-6"],
    text: (c) =>
      `Mainframe en Automotriz: ${approx(metric(c, 2))} registros por noche en ${metric(c, 1)} sucursales`,
  },
  "automotriz:aseguradoras": {
    caseIds: ["automotriz-4"],
    text: (c) =>
      `Aseguradoras en Automotriz: valoración de baterías en el portal, de ${timeFigure(c)}`,
  },
  "financiero:bancos": {
    caseIds: ["financiero-7"],
    text: (c) =>
      `Bancos en Financiero: ${metric(c, 0)} de acierto en pruebas leyendo pantallas con IA`,
  },
  "financiero:estado": {
    caseIds: ["financiero-1"],
    text: (c) =>
      `Dirección del Trabajo en Financiero: carga de contratos de ${timeFigure(c)}`,
  },
  "financiero:aseguradoras": {
    caseIds: ["financiero-2"],
    text: (c) =>
      `Aseguradoras en Financiero: siniestros abiertos actualizados de ${timeFigure(c)}`,
  },
  "seguros:aseguradoras": {
    caseIds: ["seguros-2"],
    text: (c) =>
      `Aseguradoras en Seguros: ${metric(c, 0)} tipos de tarea en los portales de ${metric(c, 1)} compañías, en España`,
  },
  "transporte:erp": {
    caseIds: ["transporte-4"],
    text: (c) =>
      `Dynamics NAV en Transporte: expedientes enviados a la Agencia Tributaria de ${timeFigure(c)}`,
  },
  "transporte:estado": {
    caseIds: ["transporte-1", "transporte-2"],
    text: () =>
      "Agencia Tributaria en Transporte: expedientes pendientes actualizados en Dynamics NAV",
  },
  "hoteleria:pms": {
    caseIds: ["hoteleria-1"],
    text: (c) =>
      `PMS en Hotelería: censo de ocupación de 3 hoteles, de ${timeFigure(c)} al día`,
  },
  "servicios-profesionales:estado": {
    caseIds: ["servicios-profesionales-3"],
    text: (c) =>
      `Portales públicos en Servicios profesionales: datos de 6 portales, como RUES y RUNT, de ${timeFigure(c)}`,
  },
  "servicios-profesionales:video": {
    caseIds: ["servicios-profesionales-1"],
    text: (c) => `Video en Servicios profesionales: conteo vehicular de ${timeFigure(c)}`,
  },
  "telecomunicaciones:atencion": {
    caseIds: ["telecomunicaciones-1"],
    text: (c) =>
      `Atención en Telecomunicaciones: ${approx(metric(c, 0))} mensajes al día en los picos`,
  },
  "sector-publico:video": {
    caseIds: ["sector-publico-1"],
    text: () =>
      "Video en Sector público: conteo de vehículos y personas sobre las cámaras existentes",
  },
};

function legendFor(industry, system, hits) {
  const fallback = `Hay casos de ${system.name} en ${industry.short}.`;
  const def = LEGENDS[`${industry.slug}:${system.slug}`];
  if (!def) return fallback;
  const id = def.caseIds.find((caseId) => hits.includes(caseId));
  if (!id) return fallback;
  try {
    return def.text(bySourceId.get(id));
  } catch {
    return fallback;
  }
}

const mapRows = MAP_INDUSTRY_DEFS.map((industry) => {
  const cells = SYSTEMS.map((system) => {
    const hits = system.family.filter((id) => bySourceId.get(id)?.categoria === industry.slug);
    const lit = hits.length > 0;
    return {
      system: system.slug,
      lit,
      legend: lit
        ? legendFor(industry, system, hits)
        : `Sin caso publicado de ${system.name} en ${industry.short}`,
    };
  });
  return { ...industry, href: industryHref(industry.slug), cells };
});

// Una industria sin ningún cruce encendido no se ofrece como fila ni opción.
export const MAP_INDUSTRIES = mapRows.filter((row) => row.cells.some((cell) => cell.lit));
export const LIT_CELLS = MAP_INDUSTRIES.reduce(
  (sum, row) => sum + row.cells.filter((cell) => cell.lit).length,
  0
);

export const hero = {
  eyebrow: "RPA e IA para finanzas y operaciones",
  title: "Automatizamos procesos con RPA e IA sobre SAP, mainframe, ERP locales y portales bancarios",
  body: `Somos ${facts.partner} y llevamos más de ${facts.projectsNumber} proyectos con empresas de ${facts.clientCountriesText}. Elige tu industria o tu sistema y ve los casos que ya entregamos ahí.`,
  priceLine: `El diagnóstico no tiene costo. Un proyecto RPA cuesta ${prices.rpaAverage.replace(/ /g, NBSP)} en promedio por proceso, con un mes de desarrollo y la marcha blanca incluidos.`,
  secondaryLabel: "Evalúa si tu proceso conviene automatizar",
  secondaryHref: "/evaluador-automatizacion",
  mapTitle: "Casos publicados por industria y sistema",
  mapCaption: `${LIT_CELLS} cruces con casos publicados. Cada punto lleva a la página de esa industria.`,
  mapLegendDefault: "Pasa el cursor o el foco por un punto para ver el caso.",
};

// ---------------------------------------------------------------------------
// Hechos
// ---------------------------------------------------------------------------

const projectOnlyCountries = facts.clientCountries.filter((country) => !facts.team.includes(country));

export const factCells = [
  { value: facts.projects, label: "proyectos" },
  { value: String(facts.founded), label: "año de fundación" },
  {
    value: `${facts.clientCountries.length} países`,
    label: `equipo en ${facts.team}, clientes también en ${projectOnlyCountries.join(" y ")}`,
  },
  { value: "Platinum", label: "Partner de Rocketbot" },
  // facts.founderNote: seis años como desarrollador de Rocketbot.
  { value: "6 años", label: "del fundador como desarrollador de Rocketbot" },
];

// Logos de libs/landingFacts.js (los mismos del carrusel de la home actual).
// Para retirar uno sin tocar landingFacts, agrega su alt a LOGOS_EXCLUIDOS.
const LOGOS_EXCLUIDOS = [];

// Tamaño natural de cada PNG (public/assets). Con él la imagen reserva su
// alto real y no salta al cargar; logo.width es el ancho de despliegue.
const LOGO_NATURAL_SIZE = {
  "/assets/logo-minutoverde.png": [756, 300],
  "/assets/logo-mitta.png": [1920, 1080],
  "/assets/logo-avisbudget.png": [700, 94],
  "/assets/logo-promet.png": [596, 157],
  "/assets/logo-cintac.png": [436, 92],
  "/assets/logo-novagric.png": [500, 250],
  "/assets/logo-delirio.png": [470, 189],
  "/assets/logo-digitalbankla.png": [555, 173],
  "/assets/logo-cerezosoftware.png": [1920, 1080],
  "/assets/logo-interact.png": [383, 89],
  "/assets/logo-kabeli.png": [500, 250],
};

export const permittedLogos = clientLogos
  .filter((logo) => !LOGOS_EXCLUIDOS.includes(logo.alt))
  .map((logo) => {
    const natural = LOGO_NATURAL_SIZE[logo.src];
    const height = natural ? Math.round((logo.width * natural[1]) / natural[0]) : 32;
    return { src: logo.src, alt: logo.alt, width: logo.width, height };
  });

// ---------------------------------------------------------------------------
// Industrias
// ---------------------------------------------------------------------------

const BIG_INDUSTRY_DEFS = [
  {
    slug: "alimentos",
    caseId: "alimentos-4",
    build: (c) => ({ figure: `${metric(c, 0)} fuentes bancarias`, text: "cargadas y contabilizadas en SAP cada día" }),
    chips: ["SAP", "Dynamics", "Portales bancarios"],
  },
  {
    slug: "automotriz",
    caseId: "automotriz-6",
    build: (c) => ({
      figure: `${metric(c, 1)} sucursales`,
      text: "recorridas cada noche por un robot sobre un mainframe",
    }),
    chips: ["SAP", "Mainframe 3270", "Portales de aseguradoras"],
    banner: "/assets/banners/automotriz.jpeg",
  },
  {
    slug: "financiero",
    caseId: "financiero-7",
    build: (c) => ({
      figure: `${metric(c, 0)} de acierto en pruebas`,
      text: "leyendo con IA las pantallas de varios bancos",
    }),
    chips: ["Portales bancarios", "Dirección del Trabajo", "Portales de aseguradoras"],
    banner: "/assets/banners/financiero.jpeg",
  },
  {
    slug: "hoteleria",
    caseId: "hoteleria-1",
    build: (c) => ({ figure: timeFigure(c), text: "al día en el censo de ocupación de 3 hoteles" }),
    chips: ["PMS hotelero"],
    banner: "/assets/banners/hoteleria.jpg",
  },
  {
    slug: "seguros",
    caseId: "seguros-2",
    // "Cada 2 h" es la revisión de la bandeja de tareas; los portales se
    // revisan a diario (seguros-2).
    build: (c) => ({
      figure: `${metric(c, 1)} aseguradoras`,
      text: `integradas en una correduría de España, con un robot que revisa la bandeja de tareas ${lower(metric(c, 2))}`,
    }),
    chips: ["Portales de aseguradoras"],
  },
  {
    slug: "telecomunicaciones",
    caseId: "telecomunicaciones-1",
    build: (c) => ({
      figure: `${approx(metric(c, 0), true)} mensajes al día`,
      text: "en los picos de demanda, ordenados en tickets con Melon Help",
    }),
    chips: ["WhatsApp", "Melon Help", "Agente de IA"],
    banner: "/assets/banners/telecomunicaciones.jpg",
  },
  {
    slug: "agricola",
    caseId: "agricola-2",
    build: (c) => ({ figure: timeFigure(c), text: "en la conciliación de bancos argentinos contra Finnegans" }),
    chips: ["Finnegans", "Q-Biz", "SII", "Portales bancarios"],
    banner: "/assets/banners/agricola.jpeg",
  },
  {
    slug: "servicios-profesionales",
    caseId: "servicios-profesionales-1",
    build: (c) => ({ figure: timeFigure(c), text: "en el conteo vehicular de un estudio de tránsito" }),
    chips: ["RUES", "RUNT", "SII", "Video"],
    banner: "/assets/banners/servicios-profesionales.jpeg",
  },
  {
    slug: "transporte",
    caseId: "transporte-4",
    build: (c) => ({
      figure: timeFigure(c),
      text: "en el envío de expedientes a la Agencia Tributaria de España desde Dynamics NAV",
    }),
    chips: ["Dynamics NAV", "Agencia Tributaria"],
    banner: "/assets/banners/logistica.jpeg",
  },
  {
    slug: "sector-publico",
    caseId: "sector-publico-1",
    build: (c) => ({ figure: `${metric(c, 2)} y alertas`, text: "sobre las cámaras que el municipio ya tenía, con YOAO" }),
    chips: ["YOAO", "Cámaras y video"],
    banner: "/assets/banners/sector-publico.jpg",
  },
];

const validIndustrySlugs = new Set(caseIndustries.map((i) => i.slug));

// Si el caso guía desaparece, la ficha queda con nombre y sistemas, sin cifra.
export const bigIndustries = BIG_INDUSTRY_DEFS.filter((def) => validIndustrySlugs.has(def.slug)).map(
  (def) => {
    const guide = repoCase(def.caseId, def.build);
    return {
      slug: def.slug,
      name: industryDef(def.slug)?.label || def.slug,
      href: industryHref(def.slug),
      figure: guide?.figure || null,
      text: guide?.text || null,
      chips: def.chips,
      banner: def.banner || null,
    };
  }
);

const SMALL_INDUSTRY_LABELS = {
  "estudio-juridico": "Estudio jurídico",
  "servicios-tecnicos": "Servicios técnicos",
  software: "Software",
  retail: "Retail y consumo",
  mineria: "Minería",
  "industrias-tecnologicas": "Industrias tecnológicas",
  salud: "Salud",
};

const TYPE_ORDER = { RPA: 0, "Software e IA": 1, "Capacitación": 2 };

function industryType(slug) {
  const first = successCases.find((c) => c.categoria === slug);
  if (!first) return "RPA";
  if (first.kind === "capacitacion") return "Capacitación";
  if (first.platform === "robotipy") return "Software e IA";
  return "RPA";
}

const bigSlugs = new Set(bigIndustries.map((i) => i.slug));

export const smallIndustries = caseIndustries
  .filter((i) => !bigSlugs.has(i.slug))
  .map((i) => ({
    slug: i.slug,
    name: SMALL_INDUSTRY_LABELS[i.slug] || i.slug,
    type: industryType(i.slug),
    href: industryHref(i.slug),
  }))
  .sort((a, b) => TYPE_ORDER[a.type] - TYPE_ORDER[b.type] || a.name.localeCompare(b.name, "es"));

// ---------------------------------------------------------------------------
// IA aplicada
// ---------------------------------------------------------------------------

const IA_DEFS = [
  {
    id: "financiero-7",
    input: "Dato en pantalla",
    build: (c) => ({
      figure: `${metric(c, 0)} de acierto en pruebas`,
      text: `leyendo con IA portales bancarios que solo muestran los movimientos en pantalla. El OCR anterior acertaba ${approx(metric(c, 1))}.`,
      sector: "Cooperativa",
    }),
  },
  {
    id: "telecomunicaciones-1",
    input: "Dato en una conversación",
    build: (c) => ({
      figure: `${approx(metric(c, 0), true)} mensajes al día`,
      text: "en los picos de demanda, con un agente de IA en Melon Help que responde las consultas frecuentes y deriva el resto al equipo",
      sector: "Proveedor de internet",
    }),
  },
  {
    id: "agricola-3",
    input: "Dato en un audio",
    build: (c) => ({
      figure: timeFigure(c),
      text: "para registrar artículos a partir de un audio que envía el operario desde terreno",
      sector: "Agrotecnología",
    }),
  },
  {
    id: "servicios-profesionales-1",
    input: "Dato en video",
    build: (c) => ({
      figure: timeFigure(c),
      text: "en el conteo y la clasificación de vehículos de un estudio de tránsito, con IA sobre el video",
      sector: "Ingeniería vial",
    }),
  },
];

export const iaCards = IA_DEFS.map((def) => {
  const card = repoCase(def.id, def.build);
  if (!card) return null;
  const industry = industryDef(bySourceId.get(def.id).categoria);
  if (!industry) return null;
  return {
    ...card,
    input: def.input,
    href: industryHref(industry.slug),
    linkLabel: `Ver casos de ${industry.label}`,
  };
}).filter(Boolean);

export const iaGuides = [
  { slug: "rpa-vs-ia-agentica", label: "Cuándo usar RPA y cuándo un agente de IA" },
  { slug: "idp-procesamiento-inteligente-de-documentos", label: "Cómo sacar datos de documentos con IA" },
  { slug: "agentes-de-ia-y-rpa-como-se-combinan", label: "Agentes de IA y RPA en un mismo proceso" },
];

export const iaContactHref = contactHref(VARIANT, { servicio: "automatizacion" });

// ---------------------------------------------------------------------------
// Servicios
// ---------------------------------------------------------------------------

const productByKey = (key) => products.find((p) => p.key === key) || null;
const hasTraining = ["industrias-tecnologicas-1", "salud-1"].every(
  (id) => bySourceId.get(id)?.kind === "capacitacion"
);

export const services = [
  {
    key: "rpa",
    featured: true,
    name: "Automatización con RPA",
    line: "Robots que operan tus sistemas con un usuario propio, como lo haría una persona de tu equipo.",
    price: prices.rpaAverage,
    priceSuffix: "en promedio por proceso",
    note: `${prices.timeline}.`,
    href: "/rpa",
    linkLabel: "Ver automatización con RPA",
  },
  {
    key: "rocketbot",
    name: "Implementación de Rocketbot",
    line: `Somos ${facts.partner}. Si tu empresa no tiene licencia, la sumamos al proyecto.`,
    price: `Licencia ${prices.license}`,
    note: prices.licenseNote,
    href: "/rocketbot",
    linkLabel: "Ver implementación de Rocketbot",
  },
  {
    key: "atencion",
    name: "Agentes de IA para atención",
    line: productByKey("melonhelp")
      ? `${productByKey("melonhelp").name} ordena WhatsApp, Slack y correo en tickets, y un agente de IA responde las consultas frecuentes.`
      : "Tickets desde WhatsApp, Slack y correo, y un agente de IA que responde las consultas frecuentes.",
    href: "/chatbot",
    linkLabel: "Ver agentes de IA",
  },
  {
    key: "software",
    name: "Software a medida",
    line: "Para procesos que necesitan una aplicación propia.",
    price: prices.customSoftware,
    note: "Según alcance.",
    href: LINK_CUSTOM_SOFTWARE_PAGE ? "/desarrollo-software" : contactHref(VARIANT, { servicio: "software" }),
    linkLabel: LINK_CUSTOM_SOFTWARE_PAGE ? "Ver desarrollo a medida" : "Cotiza un desarrollo a medida",
  },
  {
    key: "capacitacion",
    name: "Capacitación de equipos",
    line: hasTraining
      ? "El Programa de Desarrollo Digital, que ya impartimos a un gremio tecnológico y a una asociación de clínicas."
      : "Programas prácticos de automatización e IA para tus equipos.",
    href: "/capacitaciones",
    linkLabel: "Ver capacitaciones",
  },
  {
    key: "soporte",
    name: "Soporte y monitoreo",
    line: "Monitoreo de ejecuciones y ajustes cuando cambia un sistema. Es opcional.",
    price: prices.support,
    href: "/monitor",
    linkLabel: "Ver Robotipy Monitor",
  },
];

export const serviceGuides = [
  {
    slug: "cuanto-cuesta-automatizar-un-proceso",
    label: "Cuánto cuesta automatizar un proceso y cómo se cobra",
  },
  { slug: "rpa-vs-desarrollo-a-medida", label: "Cuándo conviene RPA y cuándo un desarrollo a medida" },
];

// ---------------------------------------------------------------------------
// Productos propios
// ---------------------------------------------------------------------------

const telecomCase = bySourceId.get("telecomunicaciones-1");
// Solo sector-publico-1 declara plataforma propia de video; el caso de
// ingeniería vial (servicios-profesionales-1) no nombra YOAO y no se cita aquí.
const municipalCase = bySourceId.get("sector-publico-1");

export const productCards = [
  productByKey("melonhelp") && {
    key: "melonhelp",
    name: productByKey("melonhelp").name,
    description: productByKey("melonhelp").description,
    proof: telecomCase
      ? `La usa un proveedor de internet que recibe ${approx(metric(telecomCase, 0))} mensajes al día en los picos.`
      : null,
    links: [
      telecomCase ? { href: "/casos-exito/telecomunicaciones", label: "Ver el caso" } : null,
      { href: "/chatbot", label: "Agentes de IA para atención" },
    ].filter(Boolean),
  },
  productByKey("yoao") && {
    key: "yoao",
    name: productByKey("yoao").name,
    description: productByKey("yoao").description,
    proof: municipalCase
      ? "La usa un municipio para contar vehículos y personas con las cámaras que ya tenía."
      : null,
    // /analysis no usa el nombre YOAO: el enlace describe el destino.
    links: [
      municipalCase ? { href: "/casos-exito/sector-publico", label: "Ver el caso" } : null,
      { href: "/analysis", label: "Análisis de video con IA" },
      { href: "/calculadora-aforo-vehicular", label: "Calcula el costo de un aforo vehicular" },
    ].filter(Boolean),
  },
  productByKey("monitor") && {
    key: "monitor",
    name: productByKey("monitor").name,
    description:
      "Monitoreo de robots en producción. Con él vemos cada ejecución y avisamos cuando un robot falla, como parte del soporte mensual.",
    proof: null,
    links: [{ href: productByKey("monitor").href || "/monitor", label: "Ver Robotipy Monitor" }],
  },
].filter(Boolean);

// ---------------------------------------------------------------------------
// Método y precio
// ---------------------------------------------------------------------------

export const STEP_KEYS = ["discovery", "design", "development", "deployment"];

export const priceRows = [
  { concept: "Diagnóstico", price: prices.diagnostic, note: null },
  {
    concept: "Automatización de un proceso con RPA",
    price: `${prices.rpaAverage} en promedio`,
    note: "Incluye un mes de trabajo y la marcha blanca, el periodo de prueba con datos reales. Hay proyectos de menor valor.",
  },
  { concept: "Licencia de Rocketbot", price: prices.license, note: prices.licenseNote },
  { concept: "Soporte y monitoreo", price: prices.support, note: prices.supportNote },
  { concept: "Software a medida", price: prices.customSoftware, note: prices.customSoftwareNote },
];

// Mismo principio de /about (messages/es.json about.principles.items.innovation).
export const principle = {
  title: "Te decimos cuándo no conviene",
  text: "Si un proceso no se paga con RPA, lo decimos y proponemos otra salida: una API, desarrollo a medida o un agente de IA.",
};

// libs/faqs.js, grupo seguridad-y-datos.
export const securityPoints = [
  "Cada robot trabaja con un usuario propio y solo con los permisos que el proceso necesita.",
  "Si tus políticas lo exigen, el robot corre en servidores de tu empresa.",
];

export const priceLinks = [
  { kind: "page", href: "/about", label: "Cómo trabajamos" },
  { kind: "page", href: "/roi-calculator", label: "Calcula el retorno de tu proceso" },
  { kind: "post", slug: "cuanto-cuesta-automatizar-un-proceso", label: "Cómo se arma el precio" },
  { kind: "post", slug: "cuando-no-conviene-automatizar-un-proceso", label: "Cuándo no conviene automatizar" },
  {
    kind: "post",
    slug: "seguridad-y-gobierno-en-proyectos-de-rpa",
    label: "Seguridad y gobierno en proyectos de RPA",
  },
  { kind: "page", href: CONTACT_HREF, label: CTA_LABEL },
];

// ---------------------------------------------------------------------------
// Herramientas
// ---------------------------------------------------------------------------

const TOOL_USES = {
  "/evaluador-automatizacion": "Para saber si tu proceso conviene automatizar y con qué tecnología.",
  "/roi-calculator": "Para armar el caso de negocio que vas a presentar a finanzas.",
  "/calculadora-vision-artificial": "Para estimar un proyecto con cámaras.",
  "/calculadora-aforo-vehicular": "Para estudios de tránsito y municipios.",
};

export const toolCards = tools.map((tool) => ({
  href: tool.href,
  label: tool.label,
  use: TOOL_USES[tool.href] || null,
}));

const NUMBER_WORDS = ["Cero", "Una", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];
const toolCountWord = NUMBER_WORDS[toolCards.length] || String(toolCards.length);

export const toolsIntro = `${toolCountWord} herramientas para estimar por tu cuenta si conviene automatizar y cuánto podrías ahorrar.`;

// ---------------------------------------------------------------------------
// Equipo y Rocketbot
// ---------------------------------------------------------------------------

export const team = landingTeam;

export const teamIntro = `Nacimos en ${facts.founded} y tenemos equipo en ${facts.team}.`;

export const rocketbotBlock = {
  title: "¿Llegas desde Rocketbot?",
  text: `Somos ${facts.partner}. ${facts.founderNote} Damos soporte a los robots que corren sobre la plataforma y, si tu empresa no tiene licencia, te la vendemos junto con el proyecto por ${prices.license}.`,
  links: [
    { kind: "page", href: "/rocketbot/chile", label: "Rocketbot en Chile" },
    { kind: "page", href: "/rocketbot/argentina", label: "Rocketbot en Argentina" },
    { kind: "page", href: "/rocketbot", label: "Implementación de Rocketbot" },
    {
      kind: "post",
      slug: "robotipy-platinum-partner-rocketbot",
      label: "Robotipy es Platinum Partner de Rocketbot",
    },
    { kind: "post", slug: "porque-elegir-rocketbot", label: "Por qué elegir Rocketbot" },
  ],
};

// ---------------------------------------------------------------------------
// Preguntas frecuentes (mismo arreglo para la lista y el JSON-LD)
// ---------------------------------------------------------------------------

const FAQ_QUESTIONS = [
  "¿Se puede automatizar SAP con RPA?",
  "¿Se pueden automatizar procesos en sistemas AS400 o mainframe?",
  "¿Cómo se maneja el token o la clave dinámica del banco en un robot?",
  "¿Qué pasa con un robot RPA si cambia una pantalla del sistema?",
  "¿Cuándo conviene una integración por API en lugar de RPA?",
  "¿Hay que pagar una licencia de RPA además del desarrollo?",
];

const allFaqs = [...rpaFaqs, ...bankingFaqs, ...faqHub.flatMap((group) => group.faqs)];

// Los originales de SAP y mainframe citan casos que no están en
// libs/successCases.js (siderúrgica, AS400); se reemplazan por casos que sí.
const sapCase = bySourceId.get("alimentos-4");
const materialsCase = bySourceId.get("automotriz-5");
const mainframeCase = bySourceId.get("automotriz-6");

const sapExamples = [
  sapCase
    ? `En una empresa de alimentos, por ejemplo, un robot carga y contabiliza cada día en SAP los movimientos de ${metric(sapCase, 0)} fuentes bancarias.`
    : null,
  materialsCase
    ? `En una empresa de flotas, ${sapCase ? "otro" : "un robot"} valida cada solicitud contra un maestro de más de ${plain(metric(materialsCase, 0))} materiales antes de crearla en SAP.`
    : null,
].filter(Boolean);

const mainframeExample = mainframeCase
  ? ` En un rent-a-car, por ejemplo, un robot trabaja sobre un emulador 3270 que se reconecta solo si la sesión se corta, recorre ${metric(mainframeCase, 1)} sucursales de ${metric(mainframeCase, 0)} marcas y procesa ${approx(metric(mainframeCase, 2))} registros cada noche.`
  : "";

const FAQ_ANSWER_OVERRIDES = {
  "¿Se puede automatizar SAP con RPA?": [
    "Sí. Un robot puede operar SAP por la interfaz gráfica, llamar funciones como BAPI o RFC, o preparar cargas masivas por archivo, y muchas veces combina los tres en el mismo flujo.",
    ...sapExamples,
  ].join(" "),
  "¿Se pueden automatizar procesos en sistemas AS400 o mainframe?": `Sí. Un robot puede operar las pantallas de terminal con un emulador o leer los datos directamente de la base cuando hay acceso.${mainframeExample}`,
  // El monto sale de prices.license para que no se desfase de la tabla de precios.
  "¿Hay que pagar una licencia de RPA además del desarrollo?": `Solo si tu empresa no tiene licencia propia de Rocketbot. En ese caso la licencia se suma al proyecto por ${prices.license}. Si ya la tiene, ese ítem no aparece en la cotización.`,
};

export const faqs = FAQ_QUESTIONS.map((q) => allFaqs.find((f) => f.q === q))
  .filter(Boolean)
  .map(({ q, a }) => ({ q, a: FAQ_ANSWER_OVERRIDES[q] || a }));

// ---------------------------------------------------------------------------
// Diagnóstico
// ---------------------------------------------------------------------------

export const diagnosticIndustries = [
  ...MAP_INDUSTRIES.map((i) => ({ value: i.slug, label: i.label })),
  { value: "otra", label: "Otra" },
];

export const diagnosticSystems = [
  ...SYSTEMS.map((s) => ({ value: s.slug, label: s.name })),
  { value: "otro", label: "Otro" },
];
