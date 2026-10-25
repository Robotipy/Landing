// Contenido de /landing-2 (Prueba por industria). Solo en español.
// Cifras y hechos: SOLO libs/landingFacts.js y libs/successCases.js. Las
// cifras de los casos se leen de successCases por id; si un caso desaparece
// de ese archivo, su ficha deja de mostrarse, y un sector sin casos sale de
// la página (chips, explorador, evaluador y formulario) en vez de romperla.
// Los casos que solo están en el blog (siderurgia, costos en minería, etc.)
// no se muestran hasta que se agreguen a libs/successCases.js.

import { successCases } from "@/libs/successCases";
import { facts, prices, team as landingTeam } from "@/libs/landingFacts";
import { faqHub, rpaFaqs, bankingFaqs } from "@/libs/faqs";

export const VARIANT = "landing-2";
export const PAGE_PATH = "/landing-2";
export const CTA_LABEL = "Agenda tu diagnóstico sin costo";

export const META = {
  title: "Automatización con RPA e IA por industria | Robotipy",
  description:
    "Casos de automatización con RPA e IA en finanzas, rent-a-car, seguros y hotelería, sobre SAP, mainframe y portales bancarios. Diagnóstico sin costo.",
};

// Gemelo digital de lixiviación (mineria-1): llegó por el canal Symnetics y
// Pharu. Pasar a true solo con su visto bueno escrito.
export const SHOW_CHANNEL_CASES = false;

const bySourceId = new Map(successCases.map((c) => [c.id, c]));

// Espacio duro entre número y unidad para que "10 min" no se parta en dos líneas.
const shortTime = (value) => String(value).replace(/\s*hr$/i, " h").replace(/ /g, "\u00a0");
const timeFigure = (c) =>
  `${shortTime(c.results.manualExecution)} a ${shortTime(c.results.automatedExecution)}`;
const metric = (c, index) => c.metrics[index].value;

// Construye la ficha solo si el caso existe en libs/successCases.js.
function repoCase(id, build) {
  const source = bySourceId.get(id);
  if (!source) return null;
  try {
    return { id, ...build(source) };
  } catch {
    return null;
  }
}

const REPO_CASES = [
  repoCase("alimentos-4", (c) => ({
    figure: `${metric(c, 0)} fuentes bancarias`,
    label: "cargadas y contabilizadas en SAP cada día",
    sector: "Alimentos",
    before:
      "Finanzas descargaba a mano las cartolas de seis bancos y del adquirente de tarjetas, y las subía una por una a SAP.",
    beforeLong:
      "Finanzas descargaba a mano las cartolas de seis bancos y del adquirente de tarjetas, unas desde portales y otras desde el correo, las limpiaba en Excel y las subía una por una a SAP.",
    after:
      "El robot las descarga, las contabiliza en SAP y valida que el resultado cuadre en cero.",
    afterLong:
      "El robot las descarga, las normaliza, las contabiliza en SAP, valida que el resultado cuadre en cero y envía a finanzas un reporte consolidado de bancos.",
    systems: ["SAP", "Portales bancarios", "Outlook", "Excel"],
  })),
  repoCase("alimentos-5", (c) => ({
    figure: `${metric(c, 0)} bancos`,
    label: "con identificación automática de deudores en SAP",
    sector: "Alimentos",
    summary: `Los abonos llegaban sin identificar y finanzas cruzaba RUT y referencias a mano antes de compensar facturas. El robot revisa las cuentas de mayor con ${metric(c, 1)} reglas por tipo de referencia y deja registro de cada caso que pasa a revisión manual.`,
    systems: ["SAP", "Excel", "Outlook"],
  })),
  repoCase("financiero-7", (c) => ({
    figure: `${metric(c, 0)} de acierto en pruebas`,
    label: `leyendo pantallas bancarias con IA, contra ${metric(c, 1)} del OCR anterior`,
    sector: "Cooperativa",
    before:
      "Los portales de varios bancos solo muestran los movimientos en pantalla y el OCR fallaba en uno de cada diez registros.",
    after:
      "Un modelo de IA lee las pantallas y el robot concilia cada día contra el sistema contable.",
    summary:
      "Un modelo de IA lee los portales que solo muestran los movimientos en pantalla, y el robot concilia todos los días contra el sistema contable.",
    systems: ["Portales bancarios", "Modelo de IA", "Python", "Excel"],
  })),
  repoCase("agricola-4", (c) => ({
    figure: timeFigure(c),
    label: "en la carga de facturas del SII al ERP",
    sector: "Frutícola",
    summary:
      "El robot descarga las facturas del SII, busca la orden de compra que corresponde y carga ambas en Q-Biz.",
    systems: ["SII", "Q-Biz", "XML", "Excel"],
  })),
  repoCase("agricola-2", (c) => ({
    figure: timeFigure(c),
    label: "en la conciliación de bancos argentinos contra Finnegans",
    sector: "Agroindustria",
    summary:
      "El equipo descargaba los movimientos de cada banco y los cruzaba a mano con los de Finnegans. Ahora el robot los descarga, los compara y deja la conciliación lista.",
    systems: ["Finnegans", "Portales bancarios", "Excel", "Outlook"],
  })),
  repoCase("automotriz-6", (c) => ({
    figure: `${metric(c, 2)} registros por noche`,
    label: `en ${metric(c, 1)} sucursales y ${metric(c, 0)} marcas, sobre un mainframe`,
    sector: "Rent-a-car",
    before:
      "La disponibilidad de vehículos por sucursal y categoría se bloqueaba y desbloqueaba a mano.",
    beforeLong:
      "La disponibilidad de vehículos por sucursal y categoría se bloqueaba y desbloqueaba a mano, mientras los canales de venta externos movían la demanda todo el día.",
    after:
      "Un robot sobre emulador 3270 con reconexión automática corre cada noche y a demanda, y entrega un reporte por ejecución.",
    afterLong:
      "Un robot sobre emulador de terminal 3270, con reconexión automática y parámetros por marca, corre cada noche y a demanda desde el orquestador, y entrega un reporte por ejecución.",
    systems: ["Mainframe 3270", "SQL Server", "Excel", "Outlook"],
  })),
  repoCase("automotriz-5", (c) => ({
    figure: metric(c, 2),
    label: `de las solicitudes con respuesta automática, validadas contra un maestro SAP de ${metric(c, 0)} materiales`,
    sector: "Flotas y rent-a-car, Chile",
    summary: `Cerca de ${String(metric(c, 1)).replace(/^~/, "")} solicitantes en todo Chile piden repuestos por correo. El robot valida la planilla, homologa términos, cruza patente y marca con la API de la flota, crea los materiales en SAP y avisa al solicitante qué líneas tienen error.`,
    systems: ["SAP", "API de flota", "Outlook", "Python"],
  })),
  repoCase("automotriz-3", (c) => ({
    figure: timeFigure(c),
    label: "en la generación de órdenes de compra en SAP, con envío al proveedor 24/7",
    sector: "Rent-a-car",
    summary:
      "El robot estandariza la solicitud, carga los datos en SAP y envía la orden de compra al proveedor.",
    systems: ["SAP", "Excel", "PDF", "Outlook"],
  })),
  repoCase("automotriz-1", (c) => ({
    figure: timeFigure(c),
    label: "en la actualización de matrículas entre dos sistemas de flota",
    sector: "Automotriz",
    summary:
      "El robot extrae los datos del vehículo en Invesfleet y MUTUA, filtra y valida los expedientes y actualiza las matrículas.",
    systems: ["Invesfleet", "MUTUA", "Excel", "Outlook"],
  })),
  repoCase("mineria-1", (c) => ({
    figure: `${metric(c, 0)} parámetros calibrados`,
    label: `${metric(c, 1)} módulos más precisos que el modelo en Excel`,
    sector: "Minería del cobre",
    summary:
      "Plataforma web con motor en Python que simula el circuito desde las pilas de lixiviación hasta la extracción por solventes, y combina el modelo del proceso con aprendizaje automático.",
    systems: ["Python", "React", "Aprendizaje automático"],
    channel: true,
  })),
  repoCase("hoteleria-1", (c) => ({
    figure: timeFigure(c),
    label: "al día en el censo de ocupación de 3 hoteles",
    sector: "Cadena hotelera",
    before:
      "La recepción de cada hotel hacía el censo cama por cama y lo cruzaba con los contratos corporativos.",
    after:
      "El robot extrae los reportes del PMS, arma un Excel maestro por hotel y lo envía por correo.",
    summary:
      "La recepción de cada hotel hacía el censo cama por cama y lo cruzaba con los contratos corporativos. El robot extrae del PMS los reportes de limpieza y de contratos, arma un Excel maestro por hotel y lo envía por correo.",
    systems: ["PMS", "Excel", "SharePoint", "Outlook"],
  })),
  repoCase("hoteleria-2", (c) => ({
    figure: `${metric(c, 0)} hoteles`,
    label: "con sus estados de pago traducidos del PMS al formato contable del grupo",
    sector: "Cadena hotelera",
    summary:
      "Un diccionario por hotel traduce cada estado de pago del PMS al formato corporativo y lo deja publicado en SharePoint, sin transcripción manual.",
    systems: ["PMS", "SharePoint", "Excel"],
  })),
  repoCase("seguros-2", (c) => ({
    figure: `${metric(c, 0)} tipos de tarea`,
    label: `resueltos en los portales de ${metric(c, 1)} aseguradoras, con revisión de la bandeja ${String(metric(c, 2)).toLowerCase()}`,
    sector: "Correduría de seguros, España",
    before:
      "La bandeja de tareas se llenaba de siniestros y un tramitador entraba al portal de cada aseguradora para revisar novedades, reclamar peritos o abrir siniestros nuevos.",
    after:
      "El robot lee las tareas pendientes, revisa los siniestros en los portales de Reale y Zurich, sube novedades y documentos, asocia peritos y da de alta los siniestros nuevos.",
    afterLong:
      "El robot lee las tareas pendientes, revisa los siniestros en los portales de Reale y Zurich, sube novedades y documentos, asocia peritos, da de alta los siniestros nuevos y después cierra o reprograma cada tarea.",
    summary:
      "El robot lee las tareas pendientes, revisa el estado de los siniestros en los portales de Reale y Zurich, sube novedades y documentos, asocia peritos y da de alta los siniestros nuevos.",
    systems: ["Portales de aseguradoras", "Excel"],
  })),
  repoCase("financiero-2", (c) => ({
    figure: timeFigure(c),
    label: "en la actualización de siniestros abiertos en los portales de varias aseguradoras",
    sector: "Seguros",
    summary:
      "El robot entra al portal de cada aseguradora, obtiene las observaciones de cada siniestro abierto, descarga los adjuntos y actualiza la información en el sistema de gestión.",
    systems: ["Portales de aseguradoras", "Sistema de gestión"],
  })),
  repoCase("financiero-5", (c) => ({
    figure: timeFigure(c),
    label: "en avisos de estado de siniestros a clientes y responsables",
    sector: "Seguros",
    summary:
      "El robot entra a ebroker y avisa por correo o WhatsApp el estado de cada siniestro pendiente.",
    systems: ["ebroker", "Outlook", "Excel"],
  })),
  repoCase("sector-publico-1", (c) => {
    const [video, processing] = String(metric(c, 0)).split(":");
    return {
      figure: `${video}\u00a0h de video en ${processing}\u00a0h`,
      label: "de proceso, con conteo por zona",
      sector: "Municipio",
      summary:
        "YOAO, nuestra plataforma de video con IA, procesa el video grabado con dron y con cámaras fijas, y cuenta y clasifica vehículos y personas por zona, sin aforadores en terreno.",
      systems: ["YOAO", "Cámaras existentes", "Python"],
    };
  }),
  repoCase("servicios-profesionales-1", (c) => ({
    figure: timeFigure(c),
    label: "en el conteo vehicular de un estudio de tránsito",
    sector: "Ingeniería vial",
    summary:
      "Un sistema de IA clasifica los vehículos del video de tránsito y entrega el reporte consolidado en Excel.",
    systems: ["Visión artificial", "Python", "Excel"],
  })),
  repoCase("telecomunicaciones-1", (c) => ({
    figure: `${metric(c, 0)} mensajes al día`,
    label: "en los días de más demanda, ordenados en tickets",
    sector: "Proveedor de internet",
    summary: `Melon Help convierte cada conversación de WhatsApp y otros canales en un ticket, y un agente de IA con base de conocimiento responde las consultas frecuentes y deriva el resto al equipo. Llegó a más de ${String(metric(c, 1)).replace(/\+$/, "")} tickets en un día, con primera respuesta 24/7.`,
    systems: ["Melon Help", "WhatsApp", "Agente de IA"],
  })),
].filter(Boolean);

const CASES = new Map(
  REPO_CASES.filter((c) => SHOW_CHANNEL_CASES || !c.channel).map((c) => [c.id, c])
);

export const getCase = (id) => CASES.get(id) || null;
const pickCases = (ids) => ids.map(getCase).filter(Boolean);

export const industries = [
  {
    slug: "finanzas",
    label: "Finanzas y tesorería",
    deep: true,
    banner: "/assets/banners/agricola.jpeg",
    servicio: "automatizacion",
    heroCaseId: "alimentos-4",
    headline: "Cartolas y conciliaciones que ya no se cuadran a mano",
    body: "En empresas de alimentos, agroindustria y cooperativas, tesorería pierde horas cada día descargando cartolas de varios bancos y cruzándolas con el ERP. A eso se suman los abonos que llegan sin identificar al cliente.",
    leadId: "alimentos-4",
    caseIds: ["alimentos-5", "financiero-7", "agricola-4", "agricola-2"],
    priceDrivers: [
      "La cantidad de bancos y de formatos de cartola que entran al proceso.",
      "Cómo se autentica el robot en cada banco. Se resuelve con el banco y con TI: usuario dedicado, permisos de consulta cuando alcanzan y el mecanismo que el banco habilite.",
      "Qué tan seguido cambia cada portal. Si cambia una pantalla, el robot falla en ese paso hasta que se ajusta, y ese ajuste lo cubre el soporte mensual, que es opcional.",
      "Cuántos abonos llegan sin referencia y con qué reglas se asignan.",
    ],
    notWorthIt:
      "Si tu banco entrega archivos automáticos o un servicio de integración, te recomendamos usarlo antes que el portal, aunque el proyecto resulte más pequeño.",
  },
  {
    slug: "flotas",
    label: "Rent-a-car y flotas",
    deep: true,
    banner: "/assets/banners/automotriz.jpeg",
    servicio: "automatizacion",
    heroCaseId: "automotriz-6",
    headline: "Sucursales y repuestos sin digitar en el mainframe ni en SAP",
    body: "En rent-a-car y flotas, el volumen lo ponen las sucursales. La disponibilidad se bloquea a mano por categoría en el mainframe, y los pedidos de repuestos llegan por correo en planillas que hay que revisar una por una.",
    leadId: "automotriz-6",
    caseIds: ["automotriz-5", "automotriz-3", "automotriz-1"],
    priceDrivers: [
      "Si el sistema es un mainframe, la sesión del emulador 3270 se puede cortar a mitad de la ejecución. La reconexión automática se diseña desde el primer día, y el alcance crece con cada marca, sucursal y categoría que recorre el robot.",
      "Qué tan ordenadas llegan las planillas de las sucursales. El robot valida la plantilla y devuelve las líneas con error, pero cada formato nuevo suma reglas.",
    ],
    notWorthIt:
      "Si el mainframe se va a migrar en los próximos meses, te lo decimos antes de cotizar: un robot sobre un sistema que se apaga no alcanza a pagarse.",
  },
  {
    slug: "seguros",
    label: "Seguros",
    deep: true,
    banner: "/assets/banners/financiero.jpeg",
    servicio: "automatizacion",
    heroCaseId: "seguros-2",
    headline: "Siniestros al día en el portal de cada aseguradora",
    body: "En corredurías y áreas de siniestros, el tramitador entra todos los días al portal de cada compañía para revisar novedades, subir documentos y avisar a los clientes. Cada aseguradora tiene su propio portal, con pantallas y reglas distintas.",
    leadId: "seguros-2",
    caseIds: ["financiero-2", "financiero-5"],
    priceDrivers: [
      "Cuántas aseguradoras entran al proceso. Cada portal que se suma agrega pantallas, reglas y mantenimiento.",
      "Cuántos tipos de tarea resuelve el robot y cuáles se quedan con el tramitador, como los siniestros que necesitan criterio.",
      "Qué tan seguido cambia cada portal. Si cambia una pantalla, el robot falla en ese paso hasta que se ajusta, y ese ajuste lo cubre el soporte mensual, que es opcional.",
    ],
    notWorthIt:
      "Si tu sistema de gestión ya se conecta directo con la aseguradora, usa esa conexión. El robot conviene donde la única puerta es el portal.",
  },
  {
    slug: "hoteleria",
    label: "Hotelería",
    banner: "/assets/banners/hoteleria.jpg",
    servicio: "automatizacion",
    heroCaseId: "hoteleria-1",
    summary: "Censo de ocupación y estados de pago desde el PMS (sistema de gestión hotelera).",
    caseIds: ["hoteleria-1", "hoteleria-2"],
    exception:
      "Lo que más pesa es cuántos reportes del PMS entran al proceso y cuántos formatos distintos usa cada hotel.",
  },
  {
    slug: "sector-publico",
    label: "Sector público y movilidad",
    banner: "/assets/banners/sector-publico.jpg",
    servicio: "automatizacion",
    heroCaseId: "servicios-profesionales-1",
    summary: "Conteo de vehículos y personas con YOAO, nuestra plataforma de video con IA.",
    caseIds: ["sector-publico-1", "servicios-profesionales-1"],
    exception:
      "El plazo depende sobre todo del video: el ángulo de la cámara, las horas a procesar y los accesos que hay que marcar sobre la imagen.",
  },
  {
    slug: "atencion",
    label: "Atención al cliente",
    banner: "/assets/banners/telecomunicaciones.jpg",
    logo: "/images/melonhelp-logo.png",
    servicio: "chatbot",
    heroCaseId: "telecomunicaciones-1",
    summary: "Tickets y agente de IA con Melon Help, plataforma de la que somos partner implementador.",
    caseIds: ["telecomunicaciones-1"],
    exception:
      "El agente responde bien lo que está documentado. Por eso el plazo depende de cuánto hay que ordenar la base de conocimiento antes de encenderlo.",
  },
  {
    // Solo aparece si SHOW_CHANNEL_CASES es true (mineria-1 llegó por canal).
    slug: "mineria",
    label: "Minería",
    banner: "/assets/banners/mineria.jpg",
    servicio: "software",
    heroCaseId: "mineria-1",
    summary: "Modelo de proceso de lixiviación llevado de planillas Excel a una plataforma web.",
    caseIds: ["mineria-1"],
    exception:
      "Una aplicación propia, como un simulador de escenarios, se cotiza como desarrollo a medida, con su propio alcance y plazo.",
  },
]
  .map((industry) => ({
    ...industry,
    heroCase: getCase(industry.heroCaseId),
    lead: industry.leadId ? getCase(industry.leadId) : null,
    cases: pickCases(industry.caseIds),
  }))
  // Un sector sin casos visibles no se ofrece en ninguna parte de la página.
  .filter((industry) => (industry.deep ? industry.lead : industry.cases.length > 0));

export const INDUSTRY_SLUGS = industries.map((i) => i.slug);
export const deepIndustries = industries.filter((i) => i.deep);
export const moreIndustries = industries.filter((i) => !i.deep);
export const industryBySlug = (slug) => industries.find((i) => i.slug === slug) || null;

// Ancla del explorador para cada sector: pestaña o acordeón de "Más industrias".
export const explorerTarget = (slug) =>
  industryBySlug(slug)?.deep ? "industrias" : `industria-${slug}`;

export const featuredCases = [
  { id: "hoteleria-1", slug: "hoteleria" },
  { id: "alimentos-4", slug: "finanzas" },
  { id: "automotriz-6", slug: "flotas" },
  { id: "financiero-7", slug: "finanzas" },
]
  .map((f) => ({ ...f, data: getCase(f.id), industry: industryBySlug(f.slug) }))
  .filter((f) => f.data && f.industry);

const projectOnlyCountries = facts.clientCountries.filter((country) => !facts.team.includes(country));

export const factCells = [
  { value: facts.projects, label: "proyectos entregados" },
  { value: String(facts.founded), label: "año de fundación" },
  {
    value: `${facts.clientCountries.length} países`,
    label: `equipo en ${facts.team}, proyectos también en ${projectOnlyCountries.join(" y ")}`,
  },
  { value: "Platinum", label: "Partner de Rocketbot" },
  // facts.founderNote: seis años como desarrollador de Rocketbot.
  { value: "6 años", label: "del fundador como desarrollador de Rocketbot" },
];

// Sistemas respaldados por casos de libs/successCases.js.
export const systemsLine = [
  "SAP",
  "SII",
  "Finnegans",
  "Dynamics NAV",
  "Q-Biz",
  "Mainframe 3270",
  "SQL Server",
  "PMS hotelero",
  "Portales bancarios",
  "Portales de aseguradoras",
];

// Sin fila de logos de clientes: ningún nombre de cliente está en
// libs/landingFacts.js ni en libs/successCases.js. Cuando se agregue allí una
// lista de clientes con permiso escrito, se puede volver a mostrar.

export const solutions = [
  {
    name: "Carga de cartolas y contabilización en SAP",
    text: "Descarga las cartolas desde portales y correo, las normaliza, las contabiliza en SAP y valida que cuadren en cero.",
    systems: ["SAP", "Portales bancarios", "Outlook"],
    origin: "alimentos",
  },
  {
    name: "Conciliación multibanco con lectura por IA",
    text: "Recorre los portales bancarios, lee con un modelo de IA las pantallas que antes pasaban por OCR y concilia los movimientos contra el sistema contable o el ERP.",
    systems: ["Portales bancarios", "Finnegans", "Modelo de IA"],
    origin: "cooperativa y agroindustria con bancos argentinos",
  },
  {
    name: "Identificación de pagos de clientes en SAP",
    text: "Asigna cada abono al deudor correcto con reglas por tipo de referencia y deja registro de los casos que van a revisión.",
    systems: ["SAP", "Excel"],
    origin: "alimentos",
  },
  {
    name: "Facturas del SII cargadas en el ERP",
    text: "Descarga las facturas, encuentra su orden de compra y carga ambas en el ERP.",
    systems: ["SII", "Q-Biz", "XML"],
    origin: "frutícola",
  },
  {
    name: "Creación de materiales en SAP desde el correo",
    text: "Lee la planilla del solicitante, valida contra el maestro de materiales, crea el material y responde con las líneas que tienen error.",
    systems: ["SAP", "Outlook", "API de flota"],
    origin: "flotas y rent-a-car",
  },
  {
    name: "Órdenes de compra en SAP",
    text: "Estandariza la solicitud, carga los datos en SAP y envía la orden de compra al proveedor a cualquier hora.",
    systems: ["SAP", "PDF", "Outlook"],
    origin: "rent-a-car",
  },
  {
    name: "Disponibilidad por sucursal en un mainframe",
    text: "Bloquea y desbloquea la disponibilidad por sucursal y categoría sobre un emulador 3270 que se reconecta solo, y entrega un reporte por ejecución.",
    systems: ["Mainframe 3270", "SQL Server", "Excel"],
    origin: "rent-a-car",
  },
  {
    name: "Censo de ocupación y estados de pago desde el PMS",
    text: "Extrae los reportes del PMS, consolida un archivo por hotel y traduce los estados de pago al formato contable del grupo.",
    systems: ["PMS", "SharePoint", "Excel"],
    origin: "cadena hotelera",
  },
  {
    name: "Gestión de siniestros en portales de aseguradoras",
    text: "Revisa la bandeja de tareas, actualiza cada siniestro en el portal de la aseguradora, sube documentos y da de alta los nuevos.",
    systems: ["Portales de aseguradoras", "Excel"],
    origin: "correduría en España",
  },
];

export const solutionsNote = `Plazo de referencia para proyectos RPA: ${prices.timeline.charAt(0).toLowerCase()}${prices.timeline.slice(1)}. El de cada solución se confirma en el diagnóstico.`;

export const steps = [
  {
    title: "Diagnóstico sin costo",
    text: "Revisamos el proceso, los sistemas y el volumen, y te decimos si conviene RPA, IA o una integración por API.",
  },
  {
    title: "Alcance y precio por escrito",
    text: "Documentamos el proceso y sus excepciones, y cerramos alcance y precio antes de empezar.",
  },
  {
    title: "Desarrollo y marcha blanca",
    text: "Construimos el robot con un usuario dedicado y lo probamos con datos reales en tu entorno.",
  },
  {
    title: "Soporte opcional",
    text: "Si lo necesitas, seguimos a cargo con Robotipy Monitor, que registra cada ejecución y sus fallos, y ajustamos el robot cuando cambia un sistema.",
  },
];

export const priceLine = {
  before: "Un proyecto RPA cuesta en promedio ",
  figure: prices.rpaAverage,
  after:
    " por proceso, con un mes de trabajo y la marcha blanca incluidos. La licencia de Rocketbot se cobra aparte, solo si tu empresa no la tiene. El precio se cierra por escrito después del diagnóstico.",
};

// Equipo publicado en /about (libs/landingFacts.js).
export const team = landingTeam.map((member) => ({
  key: member.name,
  name: member.name,
  role: member.role,
  line: member.bio,
  image: member.image,
}));

export const teamIntro = `Nacimos en ${facts.founded} y tenemos equipo en ${facts.team}. Cada caso de esta página es un proyecto de nuestro equipo.`;

export const rocketbotBlock = `Somos ${facts.partner}. Damos soporte a los robots que corren sobre la plataforma y, si tu empresa no tiene licencia, te la vendemos junto con el proyecto.`;

export const securityPoints = [
  "Cada robot trabaja con un usuario propio y solo con los permisos que el proceso necesita.",
  "Si tus políticas lo exigen, el robot corre en servidores de tu empresa.",
];

// Plataformas que aparecen en libs/successCases.js (campos platform y tools).
export const stackLine =
  "Trabajamos con Rocketbot, UiPath y Python, según el proceso y las licencias que ya tengas.";

// Preguntas importadas de libs/faqs.js por su texto. Tres respuestas se
// reemplazan aquí porque citan casos que no están en libs/successCases.js
// (siderurgia, AS400 y costos en minería); el reemplazo usa casos que sí están.
const FAQ_QUESTIONS = [
  "¿Se puede automatizar SAP con RPA?",
  "¿Se pueden automatizar procesos en sistemas AS400 o mainframe?",
  "¿Qué pasa con un robot RPA si cambia una pantalla del sistema?",
  "¿Cómo se maneja el token o la clave dinámica del banco en un robot?",
  "¿Hay que pagar una licencia de RPA además del desarrollo?",
  "¿Cuándo conviene una integración por API en lugar de RPA?",
  "¿Qué diferencia hay entre RPA y un agente de IA?",
];

const allFaqs = [...rpaFaqs, ...bankingFaqs, ...faqHub.flatMap((group) => group.faqs)];

const sapExample = getCase("alimentos-4")
  ? ` En una empresa de alimentos, por ejemplo, un robot carga y contabiliza cada día en SAP las cartolas de ${metric(bySourceId.get("alimentos-4"), 0)} fuentes bancarias.`
  : "";
const mainframeExample = getCase("automotriz-6")
  ? ` En un rent-a-car, por ejemplo, un robot opera un mainframe con un emulador 3270 que se reconecta solo y recorre ${metric(bySourceId.get("automotriz-6"), 1)} sucursales cada noche.`
  : "";
const aiExample = getCase("financiero-7")
  ? " En la conciliación bancaria de una cooperativa, por ejemplo, se usan los dos: un modelo de IA lee las pantallas del banco y el robot RPA concilia contra el sistema contable."
  : "";

const FAQ_ANSWER_OVERRIDES = {
  "¿Se puede automatizar SAP con RPA?": `Sí. Un robot puede operar SAP por la interfaz gráfica, llamar funciones como BAPI o RFC, o preparar cargas masivas por archivo, y muchas veces combina los tres en el mismo flujo.${sapExample}`,
  "¿Se pueden automatizar procesos en sistemas AS400 o mainframe?": `Sí. Un robot puede operar las pantallas de terminal o leer los datos directamente de la base cuando hay acceso.${mainframeExample}`,
  "¿Qué diferencia hay entre RPA y un agente de IA?": `Un robot RPA sigue reglas fijas y hace siempre lo mismo; un agente de IA interpreta lenguaje natural o documentos y decide pasos dentro de límites definidos. RPA conviene para procesos estables y de alto volumen, y la IA cuando la entrada varía.${aiExample}`,
};

// Mismo arreglo para la lista visible y para el JSON-LD FAQPage de page.js.
export const faqs = FAQ_QUESTIONS.map((q) => allFaqs.find((f) => f.q === q))
  .filter(Boolean)
  .map(({ q, a }) => ({ q, a: FAQ_ANSWER_OVERRIDES[q] || a }));

// Formulario de diagnóstico (prepara el formulario de /contact-us).
export const formSectors = [
  ...industries.map((i) => ({ value: i.slug, label: i.label })),
  { value: "otro", label: "Otro" },
];

export const formSystems = [
  "SAP",
  "Otro ERP",
  "Portales bancarios",
  "Portales de aseguradoras",
  "Mainframe o AS400",
  "PMS hotelero",
  "Correo y Excel",
  "Otro",
];

export const formVolumes = [
  "Menos de 100 registros al mes",
  "100 a 1.000 al mes",
  "1.000 a 10.000 al mes",
  "Más de 10.000 al mes",
  "No lo sé",
];

export const servicioBySector = Object.fromEntries(
  industries.map((i) => [i.slug, i.servicio])
);

export const headerAnchors = [
  { id: "casos", label: "Casos" },
  { id: "industrias", label: "Industrias" },
  { id: "soluciones", label: "Soluciones" },
  { id: "equipo", label: "Equipo" },
  { id: "preguntas", label: "Preguntas" },
];
