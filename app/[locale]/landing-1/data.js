// Copy y datos de /landing-1 (Ciclo Captura). Las cifras de Robotipy salen
// de libs/landingFacts.js y libs/successCases.js: si cambian allá, cambian aquí.
import { facts, prices, products } from "@/libs/landingFacts";
import { successCases } from "@/libs/successCases";

// Duración de la primera conversación. Hoy el CTA lleva a /contact-us, cuyo
// calendario es de 30 minutos. Cuando exista la agenda de 45 minutos de esta
// landing, cambiar a 45.
export const PRIMERA_CONVERSACION_MIN = 30;

// Precio del Diagnóstico ejecutivo. Mientras sea null se muestra la versión
// sin número ("Precio fijo, descontable del piloto").
export const DIAGNOSTICO = { precio: null, diasDescuento: null };

// Logos de clientes: solo con permiso escrito de cada uno.
export const SHOW_CLIENT_LOGOS = true;

const getCase = (id) => successCases.find((c) => c.id === id);
const metric = (id, label) =>
  getCase(id)?.metrics?.find((m) => m.label === label)?.value;
const clean = (value) => (value ? String(value).replace(/[~+]/g, "").trim() : value);
const horas = (value) =>
  value ? value.replace(/\s*hr$/, " horas").replace(/\s*min$/, " minutos") : value;
const allDefined = (...values) => values.every((v) => v !== undefined && v !== null && v !== "");

const primeraConversacion = `La primera conversación dura ${PRIMERA_CONVERSACION_MIN} minutos y no tiene costo.`;

export const meta = {
  title: "Programa de automatización e IA para gerencias | Robotipy",
  description: `Diagnóstico ejecutivo de 2 a 3 semanas, piloto en producción y operación gestionada para gerencias. ${facts.partner}, más de ${facts.projectsNumber} proyectos.`,
};

export const header = {
  anchors: [
    { href: "#metodo", label: "Método" },
    { href: "#resultados", label: "Resultados" },
    { href: "#ia-aplicada", label: "IA aplicada" },
    { href: "#equipo", label: "Equipo" },
    { href: "#biblioteca", label: "Biblioteca" },
  ],
  cta: "Agenda tu diagnóstico ejecutivo",
  ctaShort: "Agendar diagnóstico",
};

export const hero = {
  numero: "01",
  rotulo: "Para gerencias de operaciones y finanzas",
  titulo: "Llevamos la automatización y la IA del piloto al estado de resultados",
  bajada:
    "Trabajamos por etapas junto a la gerencia de operaciones y de finanzas. Empezamos con un Diagnóstico ejecutivo de 2 a 3 semanas que termina en un caso de negocio por proceso y una hoja de ruta priorizada. Después seguimos contigo hasta operar lo que construimos.",
  cta: "Agenda tu diagnóstico ejecutivo",
  nota: primeraConversacion,
};

const [nivelPartner, ...restoPartner] = facts.partner.split(" ");

// Plataformas con casos publicados en libs/successCases.js (campo platform).
const plataformasConCasos = new Set(successCases.map((c) => c.platform));
const plataformasRpa = ["Rocketbot", "UiPath"].filter((p) => plataformasConCasos.has(p.toLowerCase()));
const listaRpa = plataformasRpa.join(" y ");

export const credenciales = {
  numero: "02",
  rotulo: "Credenciales",
  titulo: "Lo que respalda el método",
  cifras: [
    { valor: String(facts.founded), etiqueta: "Año de fundación" },
    { valor: facts.projects, etiqueta: "Proyectos entregados" },
    { valor: `${facts.clientCountries.length} países`, etiqueta: facts.clientCountriesText },
    { valor: nivelPartner, etiqueta: restoPartner.join(" ") },
  ],
  texto: `${facts.founderNote} El equipo trabaja desde ${facts.team}.`,
  plataformas: `Construimos robots sobre ${listaRpa}, además de desarrollos propios en Python.`,
  logos: [
    { src: "/assets/logo-avisbudget.png", alt: "Avis Budget", width: 190 },
    { src: "/assets/logo-mitta.png", alt: "MITTA", width: 120 },
    { src: "/assets/logo-cintac.png", alt: "Grupo Cintac", width: 150 },
    { src: "/assets/logo-promet.png", alt: "Promet", width: 140 },
  ],
};

export const puntoDePartida = {
  numero: "03",
  rotulo: "Punto de partida",
  titulo: "Antes de elegir la herramienta, revisamos dónde se te va el margen",
  texto:
    "Muchas empresas ya probaron un robot o un asistente de IA y no pasaron del primer proceso. Casi siempre falta lo mismo: decidir qué automatizar después y quién va a operar lo que se construyó. Por eso empezamos por medir tu operación, antes de proponer una herramienta.",
  dato: {
    cifra: "39%",
    texto:
      "de las empresas atribuye algún impacto en su EBIT al uso de IA. El 88% ya la usa en al menos un área, y cerca de un tercio empezó a escalarla.",
    fuente: "McKinsey, The State of AI 2025",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  subtitulo: "En el Diagnóstico ejecutivo respondemos cuatro preguntas",
  preguntas: [
    "¿Qué procesos de finanzas y operaciones consumen más horas de tu equipo?",
    "¿Cuánto vale liberar esas horas y en cuántos meses se recupera la inversión?",
    "¿Qué conviene resolver con RPA, con un agente de IA o con una API, y qué conviene dejar como está?",
    "¿Quién va a operar y mantener lo que se construya?",
  ],
};

const monitor = products.find((p) => p.key === "monitor")?.name || "Robotipy Monitor";
const programasCapacitacion = ["salud-1", "industrias-tecnologicas-1"]
  .map((id) => getCase(id)?.industry?.toLowerCase())
  .filter(Boolean);

const inversionDiagnostico =
  DIAGNOSTICO.precio && DIAGNOSTICO.diasDescuento
    ? `USD ${DIAGNOSTICO.precio} a precio fijo, descontable del piloto si lo contratas dentro de ${DIAGNOSTICO.diasDescuento} días.`
    : "Precio fijo, descontable del piloto.";

export const metodo = {
  numero: "04",
  rotulo: "Método",
  titulo: "Ciclo Captura: cuatro etapas, cada una con un entregable que tu gerencia puede aprobar",
  texto:
    "Cobramos por etapa, con alcance y precio por escrito antes de empezar. Al cierre de cada una recibes algo concreto para decidir si sigues.",
  etapas: [
    {
      n: "01",
      nombre: "Mapear",
      oferta: "Diagnóstico ejecutivo",
      plazo: "De 2 a 3 semanas",
      entregables: [
        "Inventario de procesos priorizado por impacto.",
        "Un caso de negocio por proceso, con horas liberadas, costo y meses de recuperación.",
        "Una recomendación de tecnología por proceso, incluida la opción de no automatizar.",
        "Una hoja de ruta de 12 meses.",
      ],
      inversion: inversionDiagnostico,
    },
    {
      n: "02",
      nombre: "Probar",
      oferta: "Piloto en producción",
      plazo: `${prices.timeline}`,
      entregables: [
        "Un proceso automatizado que corre con datos reales y con un usuario dedicado.",
        "La línea base medida antes de empezar y la métrica acordada para evaluarlo.",
        "La documentación del proceso y de sus excepciones.",
      ],
      inversion: `En promedio ${prices.rpaAverage} por proceso RPA. Si tu empresa no tiene licencia de Rocketbot, se suman ${prices.license}.`,
    },
    {
      n: "03",
      nombre: "Escalar",
      oferta: "Programa por olas",
      plazo: "Una ola por trimestre",
      entregables: [
        "Los siguientes procesos de la hoja de ruta, en ejecución.",
        programasCapacitacion.length === 2
          ? `Capacitación práctica para tu equipo interno. Ya dictamos el Programa de Desarrollo Digital para una ${programasCapacitacion[0]} y para un ${programasCapacitacion[1]}.`
          : "Capacitación práctica para tu equipo interno.",
        "Software a medida cuando el proceso necesita una aplicación propia.",
      ],
      inversion: `Cada ola se cotiza a partir de la hoja de ruta. El software a medida va de ${prices.customSoftware} según el alcance.`,
    },
    {
      n: "04",
      nombre: "Gobernar",
      oferta: "Operación gestionada",
      plazo: "Mensual",
      entregables: [
        `Seguimiento de cada ejecución en ${monitor}, con sus fallos y registros.`,
        "Ajustes cuando cambia una pantalla o un archivo de entrada.",
        "Un reporte trimestral para la gerencia con horas liberadas y estado del portafolio.",
      ],
      inversion: `Soporte ${prices.support.charAt(0).toLowerCase()}${prices.support.slice(1)}.`,
    },
  ],
  retorno: "De Gobernar vuelves a Escalar. Lo que medimos operando define la siguiente ola.",
  cierre:
    "Por eso la relación sigue después de la entrega. Mientras operamos tus robots medimos cuánto tiempo liberan y dónde fallan, y con eso priorizamos la ola siguiente junto a tu gerencia.",
  nota: "Puedes entrar por cualquier etapa. Si ya tienes robots que nadie mantiene, empezamos por Gobernar.",
  lectura: {
    slug: "de-1-robot-a-un-centro-de-excelencia-de-automatizacion",
    texto: "Lee cómo pasar de un robot a un centro de excelencia de automatización",
  },
  cta: "Agenda tu diagnóstico ejecutivo",
};

export const programa = {
  numero: "05",
  rotulo: "Programa",
  titulo: "Así se ve un primer año de trabajo",
  texto:
    "Un ejemplo para una empresa que empieza desde cero. El orden y la cantidad de procesos por ola salen de tu hoja de ruta, y cada ola se aprueba por separado, con alcance y precio por escrito.",
  trimestres: [
    {
      nombre: "Trimestre 1",
      barras: ["Mapear", "Probar", "Gobernar"],
      nota: "Diagnóstico ejecutivo en las primeras semanas y primer piloto en producción. Desde que ese robot opera, comienza la operación gestionada.",
    },
    {
      nombre: "Trimestre 2",
      barras: ["Ola 1", "Gobernar"],
      nota: "Primera ola con los procesos que siguen en la hoja de ruta y primera revisión trimestral con la gerencia.",
    },
    {
      nombre: "Trimestre 3",
      barras: ["Ola 2", "Gobernar"],
      nota: "Segunda ola y capacitación de tu equipo, para que detecte los próximos procesos.",
    },
    {
      nombre: "Trimestre 4",
      barras: ["Ola 3", "Gobernar"],
      nota: "Tercera ola y hoja de ruta del año siguiente, armada con lo que medimos en operación.",
    },
  ],
};

const tarjetaHotel = () => {
  const c = getCase("hoteleria-1");
  const antes = horas(c?.results?.manualExecution);
  const despues = horas(c?.results?.automatedExecution);
  if (!allDefined(antes, despues)) return null;
  return {
    id: "hoteleria-1",
    industria: `${c.industry}, 3 hoteles`,
    resultado: `De ${antes} a ${despues} al día`,
    contexto:
      "El censo de ocupación alimenta la planificación de alimentación, los márgenes por contrato y el pago a proveedores.",
    desafio:
      "La recepción de cada hotel dedicaba 1,5 horas diarias a contar cama por cama y cruzar el resultado con los contratos corporativos.",
    solucion:
      "Un robot orquestado extrae del PMS los reportes de limpieza y de contratos, consolida un Excel maestro mensual por hotel y lo envía por correo.",
    sistemas: ["PMS", "Excel", "SharePoint", "Outlook"],
  };
};

const tarjetaMateriales = () => {
  const maestro = clean(metric("automotriz-5", "Materiales en el maestro"));
  const solicitantes = clean(metric("automotriz-5", "Solicitantes en todo Chile"));
  const respuesta = metric("automotriz-5", "Solicitudes con respuesta automática");
  if (!allDefined(maestro, solicitantes, respuesta)) return null;
  return {
    id: "automotriz-5",
    industria: "Flotas y rent-a-car",
    resultado: `${respuesta} de las solicitudes con respuesta automática`,
    subresultado: `Validadas contra un maestro SAP de más de ${maestro} materiales.`,
    contexto: `Unos ${solicitantes} solicitantes en todo Chile piden repuestos por correo, en planillas Excel.`,
    desafio: "Cada material se validaba contra el maestro y se cargaba a mano.",
    solucion:
      "Un robot lee el correo, valida la plantilla, cruza patente y marca con la API de flota, crea los materiales en SAP y responde al solicitante con las líneas que tienen error.",
    sistemas: ["SAP", "Outlook", "Excel", "API de flota"],
  };
};

const tarjetaConciliacion = () => {
  const acierto = metric("financiero-7", "Acierto de lectura en pruebas");
  const ocr = clean(metric("financiero-7", "Acierto con el OCR anterior"));
  if (!allDefined(acierto, ocr)) return null;
  return {
    id: "financiero-7",
    industria: getCase("financiero-7").industry,
    resultado: `${acierto} de acierto de lectura en pruebas`,
    subresultado: `Frente a cerca de ${ocr} del OCR anterior.`,
    contexto: "La conciliación de varios bancos se hace todos los días.",
    desafio:
      "Los portales bancarios solo muestran los movimientos en pantalla, y el OCR fallaba en uno de cada diez registros.",
    solucion:
      "Un robot recorre los portales, un modelo de IA lee las pantallas en lugar del OCR y el robot concilia los movimientos contra el sistema contable.",
    sistemas: ["portales bancarios", "modelo de IA", "sistema contable"],
  };
};

const tarjetaDisponibilidad = () => {
  const marcas = metric("automotriz-6", "Marcas operadas");
  const sucursales = metric("automotriz-6", "Sucursales por ejecución");
  const registros = clean(metric("automotriz-6", "Registros por noche"));
  if (!allDefined(marcas, sucursales, registros)) return null;
  return {
    id: "automotriz-6",
    industria: `${getCase("automotriz-6").industry}, ${marcas} marcas`,
    resultado: `${sucursales} sucursales y unos ${registros} registros cada noche`,
    contexto: "Los canales de venta externos mueven la demanda de vehículos durante todo el día.",
    desafio:
      "La disponibilidad por sucursal y categoría se bloqueaba y desbloqueaba a mano en un sistema mainframe.",
    solucion:
      "Un robot sobre emulador de terminal 3270, con reconexión automática y parámetros por marca, corre cada noche y a demanda desde el orquestador, y entrega un reporte por ejecución.",
    sistemas: ["mainframe 3270", "SQL Server", "orquestador"],
  };
};

export const resultados = {
  numero: "06",
  rotulo: "Resultados",
  titulo: "Resultados medidos en la operación de nuestros clientes",
  texto: "Por confidencialidad, identificamos cada caso por la industria del cliente.",
  tarjetas: [tarjetaHotel(), tarjetaMateriales(), tarjetaConciliacion(), tarjetaDisponibilidad()]
    .filter(Boolean)
    .slice(0, 4),
  enlace: "Ver todos los casos publicados",
};

const iaSoporte = () => {
  const mensajes = clean(metric("telecomunicaciones-1", "Mensajes al día en los días de más demanda"));
  const tickets = metric("telecomunicaciones-1", "Tickets en un día");
  const turno = metric("telecomunicaciones-1", "Primera respuesta con IA");
  const plataforma = products.find((p) => p.key === "melonhelp")?.name;
  if (!allDefined(mensajes, tickets, turno, plataforma)) return null;
  return {
    id: "telecomunicaciones-1",
    industria: getCase("telecomunicaciones-1").industry,
    titulo: "Agente de IA para soporte",
    texto: `Con ${plataforma}, nuestra plataforma de atención, cada conversación de WhatsApp y de otros canales se convierte en un ticket. Un agente de IA con base de conocimiento responde las consultas frecuentes y deriva el resto al equipo.`,
    cifras: [
      { valor: `Cerca de ${mensajes}`, etiqueta: "mensajes diarios en los días de más demanda" },
      { valor: tickets, etiqueta: "tickets en un día" },
      { valor: turno, etiqueta: "primera respuesta con IA" },
    ],
  };
};

const iaGemelo = () => {
  const parametros = metric("mineria-1", "Parámetros calibrados");
  const modulos = metric("mineria-1", "Módulos más precisos que el Excel");
  if (!allDefined(parametros, modulos)) return null;
  return {
    id: "mineria-1",
    industria: getCase("mineria-1").industry,
    titulo: "Gemelo digital de lixiviación",
    texto:
      "Plataforma web con motor en Python que simula el circuito desde las pilas hasta la extracción por solventes. Combina el modelo del proceso con aprendizaje automático y se calibra con datos reales.",
    cifras: [
      { valor: parametros, etiqueta: "parámetros calibrados" },
      { valor: modulos, etiqueta: "módulos más precisos que el Excel anterior" },
    ],
  };
};

const iaConteo = () => {
  const c = getCase("servicios-profesionales-1");
  const antes = c?.results?.manualExecution;
  const despues = c?.results?.automatedExecution;
  if (!allDefined(antes, despues)) return null;
  return {
    id: "servicios-profesionales-1",
    industria: c.industry.charAt(0) + c.industry.slice(1).toLowerCase(),
    titulo: "Conteo vehicular con IA",
    texto:
      "Un sistema de IA clasifica los vehículos en videos de tránsito y entrega un reporte consolidado en Excel.",
    cifras: [{ valor: `De ${antes} a ${despues}`, etiqueta: "para revisar los videos de tránsito" }],
  };
};

export const iaAplicada = {
  numero: "07",
  rotulo: "IA aplicada",
  titulo: "IA aplicada en proyectos reales, con sus números",
  texto:
    "Usamos inteligencia artificial donde un robot de reglas fijas no alcanza, por ejemplo cuando hay que entender una conversación o revisar horas de video.",
  tarjetas: [iaSoporte(), iaGemelo(), iaConteo()].filter(Boolean),
  tambienTitulo: "También",
  // Solo casos con ficha en libs/successCases.js. El caso de reportes de costos
  // en minería vive solo en el blog: se suma cuando tenga ficha con métricas.
  tambien: [
    getCase("sector-publico-1")
      ? {
          texto:
            "Analítica de video para un municipio: conteo y clasificación de vehículos y personas, con zonas y alertas, sobre cámaras existentes o video grabado.",
        }
      : null,
    {
      texto: "¿Robot de reglas o agente de IA? Comparamos costos y confiabilidad en RPA vs IA agéntica.",
      enlace: { slug: "rpa-vs-ia-agentica", label: "Leer el artículo" },
    },
  ].filter(Boolean),
};

export const gobierno = {
  numero: "08",
  rotulo: "Gobierno",
  titulo: "Cómo cuidamos tu operación y tus datos",
  texto: "Separamos lo que ya hacemos en cada proyecto de lo que todavía estamos preparando.",
  hoy: {
    titulo: "Lo que hacemos hoy",
    items: [
      "Cada robot trabaja con un usuario propio y solo con los permisos que el proceso necesita.",
      "Documentamos el proceso y sus excepciones antes de construir.",
      "Si tus políticas lo exigen, los robots corren en servidores de tu empresa.",
      `Cada ejecución queda en ${monitor}, con sus fallos y registros.`,
      "Nuestros agentes de IA derivan la conversación a una persona de tu equipo cuando la consulta es compleja o no tienen información suficiente.",
      "Alcance y precio quedan por escrito antes de empezar.",
    ],
  },
  preparacion: {
    titulo: "En preparación",
    items: [
      "Certificación ISO 27001.",
      "Política de uso de IA con revisión humana.",
      "Acuerdo de confidencialidad estándar para descargar.",
      "Guía de adecuación a la Ley 21.719 de protección de datos personales para cada proceso automatizado.",
    ],
    nota: "Los publicamos aquí cuando estén listos.",
  },
  lectura: {
    slug: "seguridad-y-gobierno-en-proyectos-de-rpa",
    texto: "Seguridad y gobierno en proyectos de RPA",
  },
};

export const equipo = {
  numero: "09",
  rotulo: "Equipo",
  titulo: "Quién lidera tu programa",
  texto: "Las personas que construyen y mantienen los robots de nuestros clientes.",
  personas: [
    {
      key: "danilo",
      nombre: "Danilo Toro",
      cargo: "Fundador de Robotipy",
      bio: `Fundó Robotipy en ${facts.founded}, después de trabajar seis años como desarrollador de Rocketbot.`,
      linkedin: "https://www.linkedin.com/in/danilotorol/",
    },
    {
      key: "ivan",
      nombre: "Ivan Cabrera",
      cargo: "CEO de Robotipy Argentina",
      bio: "Lidera Robotipy en Argentina y acompaña a empresas medianas y grandes a automatizar procesos sobre SAP y otros sistemas.",
    },
    {
      key: "gabriel",
      nombre: "Gabriel Toro",
      cargo: "Founder & Marketing Director",
      bio: `Trabaja en automatización de procesos y soluciones RPA para clientes en ${facts.clientCountriesText}.`,
    },
  ],
  enlace: "Conoce más sobre Robotipy",
};

export const biblioteca = {
  numero: "10",
  rotulo: "Biblioteca",
  titulo: "Cuadernos de Operación",
  texto: "Artículos de nuestro equipo para quien decide qué automatizar y cuánto invertir.",
  // Se muestran las seis primeras que ya estén publicadas, en este orden.
  prioridad: [
    { slug: "como-armar-el-business-case-para-automatizar", titulo: "Cómo armar el caso de negocio para automatizar" },
    { slug: "como-priorizar-que-procesos-automatizar", titulo: "Cómo priorizar qué procesos automatizar primero" },
    { slug: "cuando-no-conviene-automatizar-un-proceso", titulo: "Cuándo no conviene automatizar un proceso" },
    {
      slug: "de-1-robot-a-un-centro-de-excelencia-de-automatizacion",
      titulo: "De un robot a un centro de excelencia de automatización",
    },
    { slug: "rpa-vs-ia-agentica", titulo: "RPA o IA agéntica: cuándo conviene cada uno" },
    { slug: "seguridad-y-gobierno-en-proyectos-de-rpa", titulo: "Seguridad y gobierno en proyectos de RPA" },
    {
      slug: "como-empezar-un-proyecto-de-automatizacion",
      titulo: "Cómo empezar un proyecto de automatización, guía para gerentes",
    },
    { slug: "cuanto-cuesta-automatizar-un-proceso", titulo: "Cuánto cuesta automatizar un proceso y cómo se cobra" },
    { slug: "como-calcular-el-roi-en-proyectos-rpa", titulo: "Cómo calcular el retorno de un proyecto de automatización" },
    { slug: "como-monitorear-robots-rpa-en-produccion", titulo: "Cómo monitorear robots en producción" },
    {
      slug: "como-documentar-un-proceso-antes-de-automatizarlo",
      titulo: "Cómo documentar un proceso antes de automatizarlo",
    },
    { slug: "mantenimiento-de-robots-rpa", titulo: "Mantenimiento de robots: por qué fallan y cómo evitarlo" },
  ],
};

export const preguntas = {
  numero: "11",
  rotulo: "Preguntas",
  titulo: "Preguntas de gerencia",
  texto: "Si tu pregunta no está aquí, tráela a la primera conversación.",
  faqs: [
    {
      q: "¿Tengo que contratar las cuatro etapas?",
      a: "No. Puedes entrar por cualquier etapa y pasar a la siguiente solo si la anterior cumplió lo acordado. Si ya tienes robots funcionando que nadie mantiene, empezamos por Gobernar.",
    },
    {
      q: "¿La primera conversación tiene costo?",
      a: `No. Dura ${PRIMERA_CONVERSACION_MIN} minutos y en ella revisamos el proceso que más te preocupa, estimamos el ahorro y te decimos si conviene seguir. Con la frecuencia del proceso, las personas que participan y los sistemas que toca, normalmente alcanza para darte un rango de precio. El Diagnóstico ejecutivo viene después: un trabajo de 2 a 3 semanas a precio fijo, que se descuenta del piloto.`,
    },
    {
      q: "¿Qué pasa si no conviene automatizar un proceso?",
      a: "Te lo decimos y proponemos otra salida: una API, desarrollo a medida o un agente de IA. En el Diagnóstico ejecutivo, no automatizar es una recomendación posible para cada proceso.",
    },
    {
      q: "¿Necesitamos un equipo de TI para mantener los robots?",
      a: "No es obligatorio. Alcanza con que alguien del equipo revise los reportes de ejecución y avise si algo falla. Si prefieres no encargarte, la operación gestionada cubre el monitoreo y los ajustes cuando cambia una pantalla o un archivo de entrada.",
    },
    {
      q: "¿Qué pasa si el proyecto cuesta más de lo cotizado?",
      a: "Si el alcance no cambió, el precio cerrado se respeta. Si aparece algo que no estaba en el alcance original, como un sistema adicional o una excepción no contemplada, se conversa como cambio de alcance antes de seguir y no se factura por sorpresa al final.",
    },
    {
      q: "¿Trabajan con las licencias que ya tenemos?",
      a: `Sí, si tu empresa usa ${plataformasRpa.join(" o ")}. Somos ${facts.partner} y tenemos robots entregados sobre ${plataformasRpa.length > 1 ? "las dos plataformas" : "ella"}. La licencia de Rocketbot (${prices.license}) solo se suma si tu empresa no tiene una.`,
    },
    {
      q: "¿En qué países trabajan?",
      a: `Tenemos equipo en ${facts.team.replace(" y ", " y en ")}, donde Ivan Cabrera lidera Robotipy Argentina. También tenemos proyectos en ${facts.clientCountries
        .filter((p) => !facts.team.includes(p))
        .join(" y ")}.`,
    },
  ],
  enlace: "Ver todas las preguntas frecuentes",
};

export const agenda = {
  numero: "12",
  rotulo: "Agenda",
  titulo: "Agenda tu diagnóstico ejecutivo",
  texto: `${primeraConversacion} Revisamos contigo el proceso que más te preocupa y te decimos si conviene seguir.`,
  pasos: [
    "Nos cuentas tu cargo y el área del proceso, dejas tus datos de contacto y eliges un horario en el calendario.",
    "En la conversación revisamos el proceso, estimamos el ahorro y te damos un rango de precio.",
    "Si conviene seguir, te enviamos la propuesta del Diagnóstico ejecutivo, con alcance y precio fijo por escrito.",
  ],
  contacto: "¿Prefieres escribirnos?",
  calificador: {
    cargo: {
      legend: "Tu cargo",
      opciones: [
        "Gerencia general",
        "Gerencia de operaciones",
        "Gerencia de finanzas o contraloría",
        "Subgerencia o jefatura",
        "TI o transformación digital",
        "Otro cargo",
      ],
    },
    area: {
      legend: "Área del proceso",
      opciones: [
        "Finanzas y contabilidad",
        "Operaciones y logística",
        "Compras y abastecimiento",
        "Comercial y atención a clientes",
        "Recursos humanos",
        "Varias áreas",
      ],
    },
    sistemas: {
      legend: "Sistemas involucrados",
      opciones: ["SAP", "Mainframe o AS400", "Otro ERP", "Portales bancarios", "SII o ARCA", "Excel y correo", "Otro"],
    },
    volumen: {
      label: "Volumen aproximado",
      placeholder: "Ej.: 300 facturas al mes",
    },
    boton: "Agenda tu diagnóstico ejecutivo",
    cargando: "Abriendo el formulario...",
    ayuda:
      "En el paso siguiente dejas tu nombre, correo y teléfono, y eliges el horario en el calendario. Usamos tus datos para coordinar la reunión.",
    privacidad: "Política de privacidad",
    error: "Elige una opción.",
    directo: "¿Prefieres ir directo al formulario?",
    directoLink: "Abrir el formulario de contacto",
  },
};

export const footer = {
  texto: "Robotipy, automatización de procesos e IA para finanzas y operaciones.",
  enlaces: [
    { href: "/about", label: "Sobre Robotipy" },
    { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
    { href: "/rocketbot", label: "Rocketbot" },
    { href: "/tos", label: "Términos" },
    { href: "/privacy-policy", label: "Privacidad" },
  ],
};
