import { contactHref } from "@/libs/landingFacts";
import { successCases } from "@/libs/successCases";

export const VARIANT = "home-1";

// Enlace al formulario de contacto. servicio: automatizacion | software |
// chatbot | capacitacion. Sin servicio, /contact-us pregunta qué interesa.
export const cta = (servicio) => contactHref(VARIANT, servicio ? { servicio } : {});

// Las cifras salen siempre de libs/successCases.js. Aquí solo se elige qué
// caso mostrar y se escribe la etiqueta en lenguaje simple.
const byId = Object.fromEntries(successCases.map((c) => [c.id, c]));

const caseOf = (id) => {
  const c = byId[id];
  if (!c) throw new Error(`home-1: no existe el caso ${id} en libs/successCases.js`);
  return c;
};

const hours = (v) => v.replace(/\s*hr\b/, " h");

// "De 4,5 h a 10 min" a partir de results.manualExecution y automatedExecution.
const beforeAfter = (id) => {
  const { results } = caseOf(id);
  return `De ${hours(results.manualExecution)} a ${hours(results.automatedExecution)}`;
};

const saving = (id) => caseOf(id).results.timeSaving;
const metric = (id, i) => caseOf(id).metrics[i].value;

export const heroStat = {
  industry: caseOf("hoteleria-1").industry,
  value: beforeAfter("hoteleria-1"),
  label: "en el censo diario de ocupación",
};

// Las puertas del home: una por necesidad del negocio.
export const needs = [
  {
    key: "atencion",
    size: "big",
    icon: "chat",
    tag: "Agentes de IA y chatbots",
    title: "Atender a tus clientes todo el día",
    text: "Un agente de IA responde por WhatsApp, web o correo y deriva a una persona cuando hace falta.",
    visual: { src: "/assets/ilus-chatbot.png", width: 438, height: 510, fit: "contain", alt: "" },
    case: {
      industry: caseOf("telecomunicaciones-1").industry,
      value: metric("telecomunicaciones-1", 2),
      label: "primera respuesta con IA",
    },
    servicio: "chatbot",
    more: { href: "#atencion", label: "Ver cómo funciona" },
  },
  {
    key: "tareas",
    size: "big",
    icon: "robot",
    tag: "Robots de software (RPA)",
    title: "Sacarle a tu equipo las tareas repetitivas",
    text: "Robots de software hacen el trabajo repetitivo en los sistemas que ya usas, de día y de noche. Tu equipo queda libre para lo que necesita criterio.",
    visual: {
      src: "/images/servicios/Salud.jpeg",
      width: 2048,
      height: 2048,
      fit: "cover",
      position: "50% 32%",
      alt: "Persona en su escritorio revisando un flujo automatizado en pantalla",
    },
    case: {
      industry: caseOf("hoteleria-1").industry,
      value: beforeAfter("hoteleria-1"),
      label: "en el censo diario de ocupación",
    },
    servicio: "automatizacion",
    more: { href: "#casos", label: "Ver casos reales" },
  },
  {
    key: "software",
    size: "small",
    icon: "app",
    tag: "Software a medida",
    title: "Tener tu propia plataforma o aplicación",
    text: "Aplicaciones web y paneles con IA pensados para la forma en que trabaja tu empresa.",
    visual: { src: "/assets/ilus-coding.png", width: 545, height: 485, fit: "contain", alt: "" },
    case: {
      industry: caseOf("retail-1").industry,
      value: "Asistente de IA",
      label: "que responde preguntas sobre las ventas",
    },
    servicio: "software",
    more: { href: "/desarrollo-software", label: "Ver software a medida" },
  },
  {
    key: "medir",
    size: "small",
    icon: "video",
    tag: "Analítica de video y paneles",
    title: "Ver y medir lo que pasa en tu operación",
    text: "YOAO, nuestro producto de analítica de video, cuenta vehículos y personas desde tus cámaras.",
    visual: {
      src: "/home-assets/yoao-deteccion.jpg",
      width: 540,
      height: 960,
      fit: "cover",
      position: "50% 56%",
      alt: "YOAO detectando y contando vehículos en una autopista",
    },
    case: {
      industry: caseOf("servicios-profesionales-1").industry,
      value: beforeAfter("servicios-profesionales-1"),
      label: "para revisar videos de tránsito",
    },
    servicio: "software",
    more: { href: "#productos", label: "Conocer YOAO" },
  },
  {
    key: "capacitacion",
    size: "small",
    icon: "cap",
    tag: "Capacitación",
    title: "Preparar a tu equipo para la IA",
    text: "Talleres prácticos de automatización e IA, trabajados con los procesos reales de tu empresa.",
    visual: { src: "/assets/ilus-learning.png", width: 657, height: 419, fit: "contain", alt: "" },
    case: {
      industry: caseOf("salud-1").industry,
      value: caseOf("salud-1").name,
      label: "para equipos administrativos",
    },
    servicio: "capacitacion",
    more: { href: "/capacitaciones", label: "Ver capacitaciones" },
  },
];

// Agentes de IA: pasos que muestran cómo funciona la atención.
export const attentionSteps = [
  {
    title: "Tu cliente escribe por WhatsApp",
    text: "El agente revisa la información de tu empresa y responde en segundos.",
    src: "/home-assets/melon-demo.jpg",
    width: 1280,
    height: 720,
    alt: "Conversación de WhatsApp en la que un agente de IA responde, junto al panel de atención de Melon Help",
  },
  {
    title: "Tu equipo toma lo que necesita una persona",
    text: "Cada caso queda como una tarea, con responsable y fecha.",
    src: "/home-assets/melon-tablero.jpg",
    width: 1440,
    height: 900,
    alt: "Tablero de tareas de una mesa de ayuda en Melon Help",
  },
  {
    title: "Todo queda en un solo lugar",
    text: "WhatsApp, correo y el chat de tu sitio llegan a la misma bandeja.",
    src: "/home-assets/melon-home.jpg",
    width: 1600,
    height: 840,
    alt: "Portada de Melon Help con conversaciones de distintos canales en una sola lista",
  },
];

export const attentionCase = {
  industry: caseOf("telecomunicaciones-1").industry,
  metrics: [
    { value: metric("telecomunicaciones-1", 0), label: "mensajes en un día de alta demanda" },
    { value: metric("telecomunicaciones-1", 1), label: "tickets de soporte en un día" },
    { value: metric("telecomunicaciones-1", 2), label: "primera respuesta con IA" },
  ],
};

// Productos propios (la descripción corta sale de libs/landingFacts).
export const productTabs = [
  {
    key: "yoao",
    label: "YOAO",
    icon: "video",
    kicker: "Analítica de video con IA",
    title: "Convierte el video de tus cámaras en números",
    text: "Sube un video o conecta una cámara, marca la zona que te interesa y YOAO cuenta vehículos y personas por ti.",
    bullets: [
      { icon: "chart", text: "Conteo de vehículos y personas" },
      { icon: "map", text: "Zonas de interés y alertas" },
      { icon: "video", text: "Funciona con tus cámaras o con video grabado" },
      { icon: "doc", text: "Reportes listos para compartir" },
    ],
    href: "/analysis",
    linkLabel: "Conocer YOAO",
    servicio: "software",
  },
  {
    key: "projects",
    label: "Robotipy Projects",
    icon: "list",
    kicker: "Gestión de proyectos y soporte",
    title: "Proyectos, horas y soporte en un solo lugar",
    text: "Pensado para equipos de desarrollo y consultoras que necesitan ver el avance de cada cliente y la carga de cada persona.",
    bullets: [
      { icon: "chart", text: "Panel con el estado de cada cliente" },
      { icon: "calendar", text: "Planificación de la carga del equipo" },
      { icon: "clock", text: "Solicitudes de soporte con horas consumidas" },
    ],
    href: "/projects",
    linkLabel: "Conocer Robotipy Projects",
    servicio: "software",
  },
  {
    key: "monitor",
    label: "Robotipy Monitor",
    icon: "bell",
    kicker: "Monitoreo de robots",
    title: "Sabes al instante si un robot falló",
    text: "Muestra cada ejecución de tus robots en producción, avisa cuando algo falla y guarda el registro para revisarlo.",
    bullets: [
      { icon: "check", text: "Ejecuciones del día a la vista" },
      { icon: "bell", text: "Alertas cuando algo falla" },
      { icon: "doc", text: "Registro de cada paso" },
    ],
    href: "/monitor",
    linkLabel: "Conocer Robotipy Monitor",
    servicio: "automatizacion",
  },
];

// Carrusel de casos: industrias variadas y tipos de solución mezclados.
const caseCard = (id, extra) => {
  const c = caseOf(id);
  return { id, industry: c.industry, name: c.name, ...extra };
};

export const caseCards = [
  caseCard("telecomunicaciones-1", {
    type: "Agente de IA",
    summary: "Cada conversación de WhatsApp se convierte en una solicitud ordenada y un agente de IA responde las consultas frecuentes.",
    value: metric("telecomunicaciones-1", 0),
    label: "mensajes en un día de alta demanda",
    image: "/assets/banners/telecomunicaciones.jpg",
    position: "92% 50%",
  }),
  caseCard("hoteleria-1", {
    type: "Robot de software",
    summary: "Un robot arma cada día el censo de ocupación de tres hoteles y lo envía por correo.",
    value: saving("hoteleria-1"),
    label: "menos tiempo en el censo diario",
    image: "/assets/banners/hoteleria.jpg",
    position: "6% 50%",
  }),
  caseCard("retail-1", {
    type: "Software a medida",
    summary: "Plataforma web con proyecciones por escenario y un asistente de IA que responde preguntas sobre las ventas.",
    value: metric("retail-1", 1),
    label: "preguntas en palabras simples",
    image: "/assets/banners/retail.jpg",
    position: "94% 50%",
  }),
  caseCard("sector-publico-1", {
    type: "Analítica de video",
    summary: "YOAO cuenta vehículos y personas en video en vivo o grabado, con zonas de interés y alertas.",
    value: metric("sector-publico-1", 2),
    label: "conteo y alertas por área",
    image: "/assets/banners/sector-publico.jpg",
    position: "14% 50%",
  }),
  caseCard("automotriz-6", {
    type: "Robot de software",
    summary: "Un robot bloquea y libera cada noche la disponibilidad de vehículos por sucursal y categoría.",
    value: metric("automotriz-6", 1),
    label: "sucursales en cada ejecución",
    image: "/assets/banners/automotriz.jpeg",
    position: "50% 50%",
  }),
  caseCard("mineria-1", {
    type: "Software a medida",
    summary: "El modelo de recuperación de cobre pasó de planillas Excel a una plataforma web con escenarios comparables.",
    value: metric("mineria-1", 0),
    label: "parámetros calibrados con datos reales",
    image: "/assets/banners/mineria.jpg",
    position: "90% 50%",
  }),
  caseCard("agricola-3", {
    type: "IA y robots",
    summary: "El operario en terreno envía un audio y el sistema registra los artículos en el presupuesto.",
    value: saving("agricola-3"),
    label: "menos tiempo para presupuestar",
    image: "/assets/banners/agricola.jpeg",
    position: "45% 50%",
  }),
  caseCard("seguros-2", {
    type: "Robot de software",
    summary: "Un robot revisa la bandeja de siniestros, consulta los portales de las aseguradoras y actualiza cada ficha.",
    value: metric("seguros-2", 2),
    label: "revisión de la bandeja",
    image: "/images/servicios/Seguros.jpeg",
    position: "50% 55%",
  }),
  caseCard("industrias-tecnologicas-1", {
    type: "Capacitación",
    summary: "Capacitación práctica en herramientas digitales, automatización e IA aplicada a los procesos de cada participante.",
    value: "IA aplicada",
    label: "a los procesos reales de cada participante",
    image: "/images/servicios/Telecomunicaciones.jpeg",
    position: "50% 62%",
  }),
  caseCard("alimentos-1", {
    name: "Ratificación de órdenes de producción",
    type: "Robot de software",
    summary: "La ratificación de órdenes de producción se hace sola, con validación de datos y documentos.",
    value: saving("alimentos-1"),
    label: "menos tiempo por proceso",
    image: "/images/servicios/Manufactura.jpeg",
    position: "50% 50%",
  }),
];

export const workModels = [
  {
    icon: "box",
    title: "Proyecto cerrado",
    text: "Definimos juntos qué se entrega y te lo dejamos funcionando.",
  },
  {
    icon: "refresh",
    title: "Servicio mensual",
    text: "Soporte, ajustes y nuevas mejoras cada mes, a medida que tu empresa cambia.",
  },
  {
    icon: "users",
    title: "Equipo dedicado",
    text: "Personas de Robotipy trabajan como parte de tu equipo, con tus prioridades.",
  },
  {
    icon: "cap",
    title: "Capacitación",
    text: "Talleres para que tu equipo use la automatización y la IA en su día a día.",
  },
];

export const closingNeeds = [
  { icon: "chat", label: "Atención con IA", servicio: "chatbot" },
  { icon: "robot", label: "Automatizar tareas", servicio: "automatizacion" },
  { icon: "app", label: "Software a medida", servicio: "software" },
  { icon: "cap", label: "Capacitación", servicio: "capacitacion" },
];
