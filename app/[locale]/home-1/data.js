// Copy y datos de /home-1 (Portada de firma). Toda cifra de Robotipy sale de
// libs/landingFacts.js o de libs/successCases.js: si cambia allá, cambia aquí.
// Las frases sin cifra que son compromisos de proceso están marcadas con
// "CONFIRMAR" y deben validarse antes de publicar.
import { facts, prices, products, tools, team, clientLogos, contactHref } from "@/libs/landingFacts";
import { successCases, industries } from "@/libs/successCases";
import { PAGE_DESCRIPTION as EVALUADOR_DESCRIPCION } from "@/app/[locale]/evaluador-automatizacion/data";
import { authors } from "@/app/[locale]/blog/_assets/authors";
import messages from "@/messages/es.json";
import { VARIANT } from "./_components/variant";

// Logos de clientes: los de clientLogos, que ya se publican en el carrusel de la
// home actual. Para retirar uno, agrega su alt aquí. La grilla se muestra desde 4.
export const LOGOS_RETIRADOS = [];

// Gobierno, columna "En preparación". Cada ítem necesita responsable y fecha:
// { texto: "...", responsable: "...", fecha: "2026-12" }. Vacía, no se muestra.
export const EN_PREPARACION = [];

// IA aplicada, tarjetas de mineria-1 y retail-1. Pendiente el visto bueno de
// ambos clientes: con false se retiran y la grilla queda en 2 por 2.
export const MOSTRAR_CASOS_SOFTWARE = true;

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------

const getCase = (id) => successCases.find((c) => c.id === id);
const metric = (id, label) => getCase(id)?.metrics?.find((m) => m.label === label)?.value;
const limpio = (v) => (v == null ? v : String(v).replace(/[~+]/g, "").trim());
const definidos = (...values) => values.every((v) => v !== undefined && v !== null && v !== "");
const lista = (arr, conj) =>
  arr.length < 2 ? arr.join("") : `${arr.slice(0, -1).join(", ")} ${conj} ${arr[arr.length - 1]}`;
const listaY = (arr) => lista(arr, "y");
const listaO = (arr) => lista(arr, "o");
const minusculaInicial = (s) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);
const mayusculaInicial = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

// "Carga de Cartolas Bancarias en SAP" pasa a "Carga de cartolas bancarias en SAP".
const SIGLA = /^[A-ZÁÉÍÓÚÑ0-9-]{2,}$/;
const oracion = (texto) =>
  texto
    .split(" ")
    .map((w, i) => (i === 0 || SIGLA.test(w) ? w : w.toLowerCase()))
    .join(" ");

// "4,5 hr" pasa a "4,5 horas"; "1 hr" a "1 hora"; "10 min" a "10 minutos".
// Espacio duro entre cifra y unidad para que no se separen al cortar la línea.
const UNIDADES = { hr: ["hora", "horas"], min: ["minuto", "minutos"], día: ["día", "días"], días: ["día", "días"] };
const duracion = (v) => {
  const m = String(v ?? "").trim().match(/^([\d.,]+)\s*(hr|min|días|día)$/);
  if (!m) return v;
  const [singular, plural] = UNIDADES[m[2]];
  return `${m[1]} ${m[1] === "1" ? singular : plural}`;
};

// "Rent-a-car" pasa a "alquiler de vehículos"; "(España)" a "en España".
const industriaEs = (texto) =>
  mayusculaInicial(texto.replace(/Rent-a-car/g, "alquiler de vehículos").replace(/\s*\(([^)]+)\)$/, " en $1"));

const etiquetaIndustria = (key) => messages?.header?.dropdowns?.cases?.[key]?.label;
const industriaPorSlug = (slug) => industries.find((i) => i.slug === slug);
const casosDe = (slug) => `/casos-exito/${slug}`;
const ENLACE_CASOS = { agricola: "Casos agrícolas" };
const enlaceCasos = (slug) => {
  if (ENLACE_CASOS[slug]) return ENLACE_CASOS[slug];
  const label = etiquetaIndustria(industriaPorSlug(slug)?.key);
  return label ? `Casos en ${label.toLowerCase()}` : "Ver casos";
};

// Un enlace a /blog/<slug> solo se muestra si el post ya está publicado.
export const visible = (href, publicados) => {
  const m = String(href).match(/^\/blog\/([^/?#]+)$/);
  return !m || publicados.has(m[1]);
};
export const primeraPublicada = (lista, publicados) => lista.find((l) => visible(l.href, publicados)) || null;

// ---------------------------------------------------------------------------
// Hechos derivados
// ---------------------------------------------------------------------------

const diagnosticoSinCosto = /sin costo/i.test(prices.diagnostic);
const ctaDiagnostico = diagnosticoSinCosto
  ? `Agenda tu diagnóstico ${minusculaInicial(prices.diagnostic)}`
  : "Agenda tu diagnóstico";

const preguntasEvaluador =
  tools.find((t) => t.href === "/evaluador-automatizacion")?.questions ??
  EVALUADOR_DESCRIPCION.match(/(\d+)\s+preguntas/)?.[1];
const ctaEvaluador = preguntasEvaluador ? `Evalúa tu proceso en ${preguntasEvaluador} preguntas` : "Evalúa tu proceso";

const paisesEquipo = facts.team.split(/,\s*|\s+y\s+/);
const otrosPaises = facts.clientCountries.filter((p) => !paisesEquipo.includes(p));
const aniosRocketbot = facts.founderNote.match(/trabajó (\S+) años/)?.[1];

const PLATAFORMAS_RPA = { rocketbot: "Rocketbot", uipath: "UiPath" };
const plataformasConCasos = [...new Set(successCases.map((c) => c.platform))];
const plataformasRpa = plataformasConCasos.filter((p) => PLATAFORMAS_RPA[p]).map((p) => PLATAFORMAS_RPA[p]);
const conDesarrolloPropio = plataformasConCasos.includes("robotipy");

const soporteMonto = prices.support.match(/USD\s?[\d.]+/)?.[0];
const nivelPartner = facts.partner.replace(/\s+de Rocketbot$/, "");
const producto = (key) => products.find((p) => p.key === key);
const monitor = producto("monitor");
const melonHelp = producto("melonhelp");
const yoao = producto("yoao");

export const contacto = (extra) => contactHref(VARIANT, extra);

export const meta = {
  title: "Automatización e IA para finanzas y operaciones | Robotipy",
  description: `Robots y agentes de IA sobre SAP, mainframe y portales bancarios para finanzas y operaciones. Diagnóstico ${minusculaInicial(prices.diagnostic)}. ${facts.partner}.`,
};

// ---------------------------------------------------------------------------
// 1. Portada
// ---------------------------------------------------------------------------

const hotel = getCase("hoteleria-1");
const NUMEROS = { dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6 };
const hoteles = NUMEROS[hotel?.challenge.match(/de los (\S+) hoteles/)?.[1]];

export const portada = {
  rotulo: facts.partner,
  titulo: "Automatización e IA en producción para las gerencias de finanzas y operaciones",
  // CONFIRMAR: "alcance y precio por escrito antes de cada una".
  bajada: `Convertimos procesos manuales en robots y agentes de IA que trabajan sobre SAP, mainframe, portales bancarios y el ERP que ya usas. El primer proceso toma ${minusculaInicial(prices.timeline)}. Desde ahí avanzamos por etapas, con alcance y precio por escrito antes de cada una.`,
  ctaPrincipal: { label: ctaDiagnostico, href: contacto() },
  ctaSecundario: { label: ctaEvaluador, href: "/evaluador-automatizacion" },
  // CONFIRMAR: "si un proceso no conviene automatizarlo, te lo decimos".
  // El CTA ya dice "sin costo"; la nota no lo repite.
  nota: "Si un proceso no conviene automatizarlo, te lo decimos en el diagnóstico.",
  caso:
    hotel && definidos(hotel.results?.manualExecution, hotel.results?.automatedExecution)
      ? {
          rotulo: "Un caso de hotelería",
          desde: `De ${duracion(hotel.results.manualExecution)}`,
          hasta: `a ${duracion(hotel.results.automatedExecution)}`,
          periodo: "al día",
          contexto: `${oracion(hotel.name)} en una cadena ${hoteles ? `de ${hoteles} hoteles` : "hotelera"}, armado con los reportes del PMS.`,
          enlace: "Ver casos de hotelería",
          href: casosDe("hoteleria"),
          industria: "hoteleria",
        }
      : null,
  celdas: [
    { valor: String(facts.founded), etiqueta: "Año de fundación", href: "/about" },
    { valor: `Más de ${facts.projectsNumber}`, etiqueta: "Proyectos entregados", href: "/about" },
    {
      valor: `${facts.clientCountries.length} países`,
      etiqueta: `Clientes en ${facts.clientCountriesText}`,
      href: "/success-cases",
    },
    { valor: facts.team, etiqueta: "Donde trabaja nuestro equipo", href: "/about" },
  ],
};

// ---------------------------------------------------------------------------
// 2. Respaldo
// ---------------------------------------------------------------------------

// Cada sistema se muestra solo si existe al menos uno de sus casos.
const SISTEMAS = [
  { label: "SAP", casos: ["alimentos-4", "alimentos-5", "automotriz-3", "automotriz-5"] },
  { label: "mainframe 3270", casos: ["automotriz-6"] },
  { label: "Dynamics NAV", casos: ["transporte-1", "transporte-2", "transporte-4"] },
  { label: "Finnegans", casos: ["agricola-2"] },
  { label: "ERP Quality (Q-Biz)", casos: ["agricola-4"] },
  { label: "PMS hotelero", casos: ["hoteleria-1", "hoteleria-2"] },
  { label: "SII", casos: ["agricola-4", "servicios-profesionales-4"] },
  {
    label: "Agencia Tributaria de España",
    casos: ["transporte-1", "transporte-2", "transporte-4", "transporte-5", "transporte-6"],
  },
  { label: "portales bancarios", casos: ["alimentos-4", "financiero-7"] },
  { label: "portales de aseguradoras", casos: ["financiero-2", "seguros-2"] },
  { label: "SharePoint", casos: ["hoteleria-1", "hoteleria-2", "financiero-3"] },
  { label: "SQL Server", casos: ["automotriz-6"] },
];

const textoPlataformas = `Robots entregados sobre ${listaY(plataformasRpa)}${
  conDesarrolloPropio ? ", y desarrollos propios en Python" : ""
}.`;

export const respaldo = {
  rotulo: "Respaldo",
  titulo: "Quién está detrás de cada proyecto",
  texto: `${facts.founderNote.replace(/\.$/, ` en ${facts.founded}.`)} Hoy el equipo está en ${facts.team}${
    otrosPaises.length ? `, y tenemos clientes también en ${listaY(otrosPaises)}` : ""
  }.`,
  partner: { antes: "Somos ", label: facts.partner, href: "/rocketbot", despues: "." },
  plataformas: { titulo: "Plataformas", texto: textoPlataformas },
  sistemas: {
    titulo: "Sistemas que ya automatizamos",
    lista: SISTEMAS.filter((s) => s.casos.some((id) => getCase(id))).map((s) => s.label),
  },
  logos: {
    titulo: "Algunos de nuestros clientes",
    lista: clientLogos.filter((l) => !LOGOS_RETIRADOS.includes(l.alt)),
    minimo: 4,
  },
  enlaces: [
    { label: "Conoce a Robotipy", href: "/about" },
    { label: "Qué significa ser Platinum Partner de Rocketbot", href: "/blog/robotipy-platinum-partner-rocketbot" },
  ],
};

// ---------------------------------------------------------------------------
// 3. Rutas por rol (evento home_ruta_click con rol y destino)
// ---------------------------------------------------------------------------

export const rutas = {
  rotulo: "Por dónde empezar",
  titulo: "Empieza por lo que te toca decidir",
  texto: "Cada área llega con una pregunta distinta. Elige la tuya.",
  roles: [
    {
      rol: "gerencia-general",
      nombre: "Gerencia general",
      texto: "Quieres saber qué automatizar primero y quién lo va a mantener después.",
      enlaces: [
        { label: "Cómo trabajamos", href: "#metodo" },
        {
          label: "Cómo empezar un proyecto de automatización, guía para gerentes",
          href: "/blog/como-empezar-un-proyecto-de-automatizacion",
        },
        { label: "Conoce a Robotipy", href: "/about" },
      ],
    },
    {
      rol: "finanzas",
      nombre: "Finanzas y contraloría",
      texto: "Extractos bancarios, pagos de clientes, conciliación y facturas del SII.",
      enlaces: [
        { label: "Casos en finanzas", href: casosDe("financiero") },
        { label: "Extractos y pagos en SAP", href: casosDe("alimentos") },
        { label: "Calculadora de ROI", href: "/roi-calculator" },
        {
          label: "Cómo automatizar la conciliación bancaria en Chile y Argentina",
          href: "/blog/como-automatizar-la-conciliacion-bancaria",
        },
      ],
    },
    {
      rol: "operaciones",
      nombre: "Operaciones",
      texto: "Órdenes de compra, maestro de materiales, disponibilidad por sucursal y reportes diarios.",
      enlaces: [
        { label: "Casos en automotriz y flotas", href: casosDe("automotriz") },
        { label: "Casos en transporte y logística", href: casosDe("transporte") },
        {
          label: "Qué procesos de SAP se pueden automatizar",
          href: "/blog/que-procesos-de-sap-se-pueden-automatizar-con-rpa",
        },
        { label: "Evaluador de automatización", href: "/evaluador-automatizacion" },
      ],
    },
    {
      rol: "ti",
      nombre: "TI y transformación digital",
      texto: "Qué sistemas toca cada robot, cómo se integra con tu ERP y qué queda registrado de cada ejecución.",
      enlaces: [
        { label: "Gobierno y control", href: "#gobierno" },
        { label: monitor?.name ?? "Robotipy Monitor", href: monitor?.href ?? "/monitor" },
        { label: "Cómo integrar RPA con tu ERP", href: "/blog/como-integrar-rpa-con-tu-erp-sap-finnegans-y-otros" },
        { label: "RPA o desarrollo a medida", href: "/blog/rpa-vs-desarrollo-a-medida" },
        { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
      ],
    },
    {
      rol: "rocketbot",
      nombre: "Ya trabajas con Rocketbot",
      texto: `Si tu empresa ya tiene licencia, construimos sobre ella.${
        aniosRocketbot ? ` Nuestro fundador trabajó ${aniosRocketbot} años dentro de Rocketbot.` : ""
      }`,
      enlaces: [
        { label: "Implementación de Rocketbot", href: "/rocketbot" },
        { label: "Rocketbot en Chile", href: "/rocketbot/chile" },
        { label: "Rocketbot en Argentina", href: "/rocketbot/argentina" },
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// 4. Servicios (id="services": lo usa el ancla /#services del Header)
// ---------------------------------------------------------------------------

const capacitaciones = ["industrias-tecnologicas-1", "salud-1"].map(getCase).filter(Boolean);
const programa = capacitaciones[0]?.name;

export const servicios = {
  rotulo: "Servicios",
  titulo: "Servicios y precios de referencia",
  texto: "El precio final queda por escrito después del diagnóstico. Estas son nuestras referencias.",
  columnas: ["Servicio", "Para qué sirve", "Inversión", "Ver más"],
  cotizar: "Cotizar",
  filas: [
    {
      key: "rpa",
      destacada: true,
      nombre: "Automatización de procesos con RPA",
      para: "Robots que cargan y validan datos en SAP, mainframe, portales bancarios y tu ERP.",
      inversion: {
        valor: prices.rpaAverage,
        notas: [prices.rpaAverageNote],
        aparte: `Licencia de Rocketbot, ${prices.license}, solo si tu empresa no tiene una.`,
      },
      verMas: { label: "Automatización con RPA", href: "/rpa" },
      servicio: "automatizacion",
    },
    {
      key: "rocketbot",
      nombre: "Implementación de Rocketbot",
      para: `Implementamos Rocketbot como ${nivelPartner}, con la licencia que ya tienes o con una nueva.`,
      inversion: { notas: ["La misma referencia por proceso. La licencia se suma solo si no la tienes."] },
      verMas: { label: "Implementación de Rocketbot", href: "/rocketbot" },
      servicio: "automatizacion",
    },
    {
      key: "agentes-ia",
      nombre: "Agentes de IA y atención al cliente",
      para: `Agentes que responden por WhatsApp y otros canales y derivan a tu equipo lo que no pueden resolver.${
        melonHelp ? ` Funcionan sobre ${melonHelp.name}, nuestra plataforma de atención.` : ""
      }`,
      inversion: { notas: ["Se define en el diagnóstico."] },
      verMas: { label: "Agentes de IA", href: "/chatbot" },
      servicio: "chatbot",
    },
    {
      key: "software",
      nombre: "Software a medida con IA",
      para: "Aplicaciones propias cuando el proceso las necesita, como una plataforma web con modelos calibrados con datos reales o un asistente que responde sobre tus datos de venta.",
      paraEnlace: {
        label: "RPA o desarrollo a medida, cuándo conviene cada uno",
        href: "/blog/rpa-vs-desarrollo-a-medida",
      },
      inversion: { valor: prices.customSoftware, notas: ["Según alcance."] },
      verMas: { label: "Software a medida", href: "/desarrollo-software" },
      servicio: "software",
    },
    {
      key: "capacitacion",
      nombre: "Capacitación de equipos",
      para: `Formación práctica en automatización e IA aplicada a los procesos de cada participante.${
        programa && capacitaciones.length === 2
          ? ` Ya dictamos el ${programa} para un gremio tecnológico y para una asociación de clínicas.`
          : ""
      }`,
      inversion: { notas: ["Se cotiza por programa."] },
      verMas: { label: "Capacitación", href: "/capacitaciones" },
      servicio: "capacitacion",
    },
    {
      key: "soporte",
      nombre: "Soporte y monitoreo",
      para: prices.supportNote.replace(/^Opcional\.\s*/, ""),
      inversion: { valor: prices.support, notas: [/^Opcional/.test(prices.supportNote) ? "Opcional." : null].filter(Boolean) },
      verMas: { label: monitor?.name ?? "Robotipy Monitor", href: monitor?.href ?? "/monitor" },
      servicio: "automatizacion",
    },
  ].map((f) => ({ ...f, cotizarHref: contacto({ servicio: f.servicio }), ubicacion: `servicios-${f.key}` })),
  pie: {
    antes: "¿Cómo se arma el precio? Lee ",
    label: "Cuánto cuesta automatizar un proceso",
    href: "/blog/cuanto-cuesta-automatizar-un-proceso",
    despues: ".",
  },
};

// ---------------------------------------------------------------------------
// 5. Método
// ---------------------------------------------------------------------------

const asiCrece = (id, href, opciones = {}) => {
  const c = getCase(id);
  if (!c) return null;
  const industria = industriaEs(c.industry);
  return {
    id,
    label: opciones.label ?? oracion(c.name),
    industria: opciones.corta ? industria.replace(/ y alquiler de vehículos$/, "") : industria,
    href,
    slug: href.split("/").pop(),
  };
};

export const metodo = {
  rotulo: "Método",
  titulo: "Trabajamos por etapas y cada una termina en algo que tu gerencia puede revisar",
  texto: "Puedes entrar por cualquier etapa. Si ya tienes robots que nadie mantiene, empezamos por la cuarta.",
  filas: [
    { key: "recibes", label: "Qué recibes" },
    { key: "plazo", label: "Plazo" },
    { key: "inversion", label: "Inversión" },
    { key: "servicios", label: "Servicios" },
  ],
  etapas: [
    {
      numero: "01",
      nombre: "Diagnosticar",
      recibes:
        "Revisamos el proceso contigo y estimamos el ahorro. Sales con una recomendación: RPA, IA, una API o dejarlo como está.",
      // CONFIRMAR: que el diagnóstico se resuelve en una reunión.
      plazo: "Una reunión.",
      inversion: `${prices.diagnostic}.`,
      servicios: [
        { label: "Evaluador de automatización", href: "/evaluador-automatizacion", herramienta: "evaluador" },
        { label: "Calculadora de ROI", href: "/roi-calculator", herramienta: "roi" },
      ],
    },
    {
      numero: "02",
      nombre: "Construir",
      recibes: "Un proceso en producción con datos reales, documentado con sus excepciones.",
      plazo: `${prices.timeline}.`,
      inversion: `${prices.rpaAverage} en promedio por proceso RPA. Software a medida de ${prices.customSoftware}.`,
      servicios: [
        { label: "Automatización con RPA", href: "/rpa" },
        { label: "Software a medida", href: "/desarrollo-software" },
        { label: "Agentes de IA", href: "/chatbot" },
      ],
    },
    {
      numero: "03",
      nombre: "Ampliar",
      recibes:
        "Los procesos siguientes, priorizados con lo que mide la operación, y un equipo interno capacitado para detectar los próximos.",
      plazo: "Proceso a proceso.",
      inversion: "Cada proceso se cotiza por escrito.",
      servicios: [
        { label: "Capacitación", href: "/capacitaciones" },
        { label: "Automatización con RPA", href: "/rpa" },
      ],
    },
    {
      numero: "04",
      nombre: "Operar",
      recibes: "Monitoreo de cada ejecución y ajustes cuando cambia un sistema.",
      plazo: "Mensual.",
      inversion: `${prices.support}${/^Opcional/.test(prices.supportNote) ? ", opcional" : ""}.`,
      servicios: [{ label: monitor?.name ?? "Robotipy Monitor", href: monitor?.href ?? "/monitor" }],
    },
  ],
  leyenda: "Lo que medimos operando define el proceso siguiente.",
  programa: {
    titulo: "Así crece un programa",
    texto: "Ejemplos armados con procesos que ya entregamos.",
    columnas: [
      {
        titulo: "Finanzas",
        items: [
          asiCrece("alimentos-4", casosDe("alimentos"), { label: "Carga de extractos bancarios en SAP" }),
          asiCrece("alimentos-5", casosDe("alimentos")),
          asiCrece("financiero-7", casosDe("financiero")),
        ].filter(Boolean),
      },
      {
        titulo: "Operaciones",
        items: [
          asiCrece("automotriz-3", casosDe("automotriz"), { label: "Órdenes de compra en SAP" }),
          asiCrece("automotriz-5", casosDe("automotriz"), {
            label: "Creación de materiales contra el maestro SAP",
            corta: true,
          }),
          asiCrece("automotriz-6", casosDe("automotriz"), {
            label: "Bloqueo de disponibilidad por sucursal en mainframe",
          }),
        ].filter(Boolean),
      },
    ],
  },
  cta: { label: ctaDiagnostico, href: contacto() },
  // Se muestra la primera publicada de la lista.
  lecturas: [
    {
      label: "De 1 robot a un centro de excelencia de automatización",
      href: "/blog/de-1-robot-a-un-centro-de-excelencia-de-automatizacion",
    },
    { label: "Cómo priorizar qué procesos automatizar primero", href: "/blog/como-priorizar-que-procesos-automatizar" },
    { label: "Cómo empezar un proyecto de automatización", href: "/blog/como-empezar-un-proyecto-de-automatizacion" },
  ],
};

// ---------------------------------------------------------------------------
// 6. Resultados
// ---------------------------------------------------------------------------

const tarjeta = (id, construir) => {
  const c = getCase(id);
  if (!c) return null;
  const t = construir(c);
  return t && definidos(t.valor) ? { id, ...t } : null;
};

const tarjetasResultados = [
  tarjeta("automotriz-5", (c) => {
    const pct = metric(c.id, "Solicitudes con respuesta automática");
    const maestro = metric(c.id, "Materiales en el maestro");
    const solicitantes = metric(c.id, "Solicitantes en todo Chile");
    if (!definidos(pct, maestro, solicitantes)) return null;
    return {
      valor: pct,
      detalle: "de las solicitudes con respuesta automática",
      industria: industriaEs(c.industry),
      contexto: `Creación de materiales en SAP, validados contra un maestro de más de ${limpio(maestro)} registros, para unos ${limpio(solicitantes)} solicitantes en todo Chile.`,
      chips: ["SAP", "Outlook", "Excel", "API de flota"],
      slug: "automotriz",
    };
  }),
  tarjeta("automotriz-6", (c) => {
    const marcas = metric(c.id, "Marcas operadas");
    const sucursales = metric(c.id, "Sucursales por ejecución");
    const registros = metric(c.id, "Registros por noche");
    if (!definidos(marcas, sucursales, registros)) return null;
    return {
      valor: `${sucursales} sucursales`,
      detalle: `y unos ${limpio(registros)} registros cada noche`,
      industria: `${industriaEs(c.industry)}, ${marcas} marcas`,
      contexto:
        "Bloqueo de disponibilidad por sucursal sobre un mainframe, con reconexión automática y un reporte por ejecución.",
      chips: ["mainframe 3270", "SQL Server", "orquestador"],
      slug: "automotriz",
    };
  }),
  tarjeta("alimentos-4", (c) => {
    const fuentes = metric(c.id, "Fuentes bancarias integradas");
    if (!definidos(fuentes)) return null;
    return {
      valor: `${fuentes} fuentes bancarias`,
      detalle: "cargadas en SAP cada día",
      industria: industriaEs(c.industry),
      contexto:
        "Extractos de seis bancos y del adquirente de tarjetas, contabilizados en SAP con validación de cuadre en cero y un reporte consolidado para finanzas.",
      chips: ["SAP", "portales bancarios", "Outlook", "Excel"],
      slug: "alimentos",
    };
  }),
  tarjeta("agricola-2", (c) => ({
    valor: definidos(c.results?.manualExecution, c.results?.automatedExecution)
      ? `De ${duracion(c.results.manualExecution)} a ${duracion(c.results.automatedExecution)}`
      : null,
    industria: industriaEs(c.industry),
    contexto: "Conciliación de los movimientos de varios bancos argentinos contra el ERP Finnegans.",
    chips: ["Finnegans", "bancos argentinos", "Excel", "Outlook"],
    slug: "agricola",
  })),
  tarjeta("agricola-4", (c) => ({
    valor: definidos(c.results?.manualExecution, c.results?.automatedExecution)
      ? `De ${duracion(c.results.manualExecution)} a ${duracion(c.results.automatedExecution)}`
      : null,
    industria: industriaEs(c.industry),
    contexto: "Facturas descargadas del SII y cargadas con su orden de compra en ERP Quality.",
    chips: ["SII", "Q-Biz", "XML", "Outlook"],
    slug: "agricola",
  })),
  tarjeta("seguros-2", (c) => {
    const tipos = metric(c.id, "Tipos de tarea automatizados");
    const aseguradoras = metric(c.id, "Aseguradoras integradas");
    const cada = metric(c.id, "Revisión de la bandeja")?.match(/(\d+)\s*h$/)?.[1];
    if (!definidos(tipos, aseguradoras, cada)) return null;
    return {
      valor: `${tipos} tipos de tarea`,
      detalle: `automatizados, con ${aseguradoras} aseguradoras integradas`,
      industria: industriaEs(c.industry),
      // Según el caso: consulta los portales de las aseguradoras y sube las novedades a la ficha del sistema de la correduría.
      contexto: `El robot revisa la bandeja de tareas cada ${cada} horas, consulta cada siniestro en los portales de las aseguradoras, sube las novedades a la ficha y da de alta los siniestros nuevos.`,
      chips: ["portales de aseguradoras", "sistema de gestión", "Excel"],
      slug: "seguros",
    };
  }),
]
  .filter(Boolean)
  .map((t) => ({ ...t, enlace: enlaceCasos(t.slug), href: casosDe(t.slug) }));

export const resultados = {
  rotulo: "Resultados",
  titulo: "Cifras medidas en la operación de nuestros clientes",
  texto: "Por confidencialidad, identificamos cada caso por su industria.",
  tarjetas: tarjetasResultados,
  indice: {
    titulo: "Casos por industria",
    lista: industries
      .map((i) => ({ slug: i.slug, label: etiquetaIndustria(i.key), href: casosDe(i.slug) }))
      .filter((i) => i.label),
  },
  todos: { label: "Ver todos los casos", href: "/success-cases" },
  blog: {
    antes: "Casos largos en el blog: ",
    enlaces: [
      {
        label: "RPA y agente de IA para reportes de costos en minería",
        href: "/blog/caso-exito-rpa-ia-mineria-costos",
      },
      { label: "órdenes en SAP en siderurgia", href: "/blog/caso-exito-automatizacion-ordenes-sap-siderurgia" },
    ],
  },
};

// ---------------------------------------------------------------------------
// 7. IA aplicada
// ---------------------------------------------------------------------------

const tarjetasIa = [
  tarjeta("financiero-7", (c) => {
    const ia = metric(c.id, "Acierto de lectura en pruebas");
    const ocr = metric(c.id, "Acierto con el OCR anterior");
    if (!definidos(ia, ocr)) return null;
    return {
      proceso: oracion(c.name),
      industria: c.industry,
      valor: `${ia} de acierto de lectura en pruebas`,
      contexto: `Frente a cerca del ${limpio(ocr)} del OCR anterior, en portales bancarios que solo muestran la información en pantalla.`,
      slug: "financiero",
    };
  }),
  tarjeta("telecomunicaciones-1", (c) => {
    const mensajes = metric(c.id, "Mensajes por día en peak");
    const tickets = metric(c.id, "Tickets en un día");
    if (!definidos(mensajes, tickets)) return null;
    return {
      proceso: oracion(c.name),
      industria: c.industry,
      valor: `Cerca de ${limpio(mensajes)} mensajes al día en las jornadas de más demanda`,
      contexto: `Más de ${limpio(tickets)} tickets en un día y primera respuesta de IA a toda hora${
        melonHelp ? `, sobre ${melonHelp.name}` : ""
      }.`,
      slug: "telecomunicaciones",
    };
  }),
  MOSTRAR_CASOS_SOFTWARE &&
    tarjeta("mineria-1", (c) => {
      const modulos = metric(c.id, "Módulos más precisos que el Excel");
      const parametros = metric(c.id, "Parámetros calibrados");
      if (!definidos(modulos, parametros)) return null;
      return {
        proceso: oracion(c.name),
        industria: c.industry,
        valor: `${modulos} módulos más precisos que el Excel anterior`,
        contexto: `Plataforma web con más de ${limpio(parametros)} parámetros calibrados con datos reales y escenarios comparables.`,
        slug: "mineria",
      };
    }),
  tarjeta("servicios-profesionales-1", (c) => ({
    proceso: "Conteo vehicular con IA",
    industria: oracion(c.industry),
    valor: definidos(c.results?.manualExecution, c.results?.automatedExecution)
      ? `De ${duracion(c.results.manualExecution)} a ${duracion(c.results.automatedExecution)}`
      : null,
    contexto: "Revisión de videos de tránsito con conteo y clasificación de vehículos, y un reporte consolidado en Excel.",
    slug: "servicios-profesionales",
  })),
  tarjeta("sector-publico-1", (c) => ({
    proceso: "Analítica de video",
    industria: c.industry,
    valor: "Conteo de vehículos y personas por zona",
    contexto: "Alertas por área de interés, con las cámaras existentes o con video grabado.",
    slug: "sector-publico",
  })),
  MOSTRAR_CASOS_SOFTWARE &&
    tarjeta("retail-1", (c) => ({
      proceso: oracion(c.name),
      industria: c.industry,
      valor: "Escenarios macroeconómicos comparables",
      contexto: "Plataforma en la nube con un asistente de IA que responde en lenguaje natural sobre los datos de venta.",
      slug: "retail",
    })),
]
  .filter(Boolean)
  .map((t) => ({ ...t, enlace: enlaceCasos(t.slug), href: casosDe(t.slug) }));

export const iaAplicada = {
  rotulo: "IA aplicada",
  titulo: "IA en proyectos que ya entregamos",
  texto:
    "Usamos IA cuando un robot de reglas no alcanza, por ejemplo para leer pantallas que el OCR no entendía o para atender conversaciones de clientes.",
  tarjetas: tarjetasIa,
  productos: {
    titulo: "Productos propios",
    lista: [
      melonHelp && {
        key: "melonhelp",
        nombre: melonHelp.name,
        descripcion: melonHelp.description,
        enlaces: [{ label: "Ver agentes de IA", href: "/chatbot" }],
      },
      yoao && {
        key: "yoao",
        nombre: yoao.name,
        descripcion: yoao.description,
        enlaces: [
          { label: `Ver ${yoao.name}`, href: "/analysis" },
          { label: "Calcula un aforo vehicular", href: "/calculadora-aforo-vehicular", herramienta: "aforo-vehicular" },
        ],
      },
      monitor && {
        key: "monitor",
        nombre: monitor.name,
        descripcion: monitor.description.replace(/\blogs\b/g, "registros"),
        enlaces: [{ label: `Ver ${monitor.name}`, href: monitor.href }],
      },
    ].filter(Boolean),
  },
  consultoras: {
    antes: "¿Diriges una consultora de automatización? ",
    label: "Conoce Robotipy Projects",
    href: "/projects",
    despues: ".",
  },
  lecturas: [
    { label: "RPA o IA agéntica, cuándo conviene cada uno", href: "/blog/rpa-vs-ia-agentica" },
    {
      label: "Agentes de IA y RPA: cómo se combinan en un proceso real",
      href: "/blog/agentes-de-ia-y-rpa-como-se-combinan",
    },
  ],
};

// ---------------------------------------------------------------------------
// 8. Gobierno
// ---------------------------------------------------------------------------

const practica = (ids, practicaTexto, respaldoTexto, enlace) =>
  ids.every((id) => getCase(id)) && respaldoTexto ? { practica: practicaTexto, respaldo: respaldoTexto, enlace } : null;

const trazabilidad = metric("alimentos-5", "Casos con trazabilidad");
const iaLectura = metric("financiero-7", "Acierto de lectura en pruebas");
const ocrLectura = metric("financiero-7", "Acierto con el OCR anterior");

export const gobierno = {
  rotulo: "Gobierno",
  titulo: "Gobierno de IA y control de cada robot",
  texto: "Esto es lo que hacemos hoy. Cada práctica tiene detrás un proyecto entregado o un producto nuestro.",
  hoy: "Lo que hacemos hoy",
  practicas: [
    practica(
      ["alimentos-5"],
      "Revisión humana de los casos dudosos.",
      trazabilidad
        ? `En la identificación de pagos de clientes en SAP, el robot deja trazabilidad del ${trazabilidad} de los casos, incluidos los que pasan a revisión manual.`
        : null,
      { label: enlaceCasos("alimentos"), href: casosDe("alimentos"), industria: "alimentos" }
    ),
    practica(
      ["alimentos-4"],
      "Cuadre antes de cerrar.",
      "El robot de extractos bancarios valida que la contabilización en SAP cuadre en cero antes de enviar el reporte a finanzas.",
      { label: enlaceCasos("alimentos"), href: casosDe("alimentos"), industria: "alimentos" }
    ),
    practica(
      ["automotriz-6"],
      "Un reporte por ejecución.",
      "El robot de disponibilidad sobre mainframe entrega su reporte en cada corrida, nocturna o a demanda.",
      { label: enlaceCasos("automotriz"), href: casosDe("automotriz"), industria: "automotriz" }
    ),
    practica(
      ["automotriz-5"],
      "Aviso de errores a quien solicita.",
      "El robot de materiales en SAP responde a cada solicitante con las líneas que tuvieron error.",
      { label: enlaceCasos("automotriz"), href: casosDe("automotriz"), industria: "automotriz" }
    ),
    practica(
      ["telecomunicaciones-1"],
      "Derivación a personas.",
      "El agente de IA de soporte responde las consultas frecuentes y deriva el resto al equipo humano.",
      { label: enlaceCasos("telecomunicaciones"), href: casosDe("telecomunicaciones"), industria: "telecomunicaciones" }
    ),
    practica(
      ["financiero-7"],
      "IA medida contra la alternativa.",
      definidos(iaLectura, ocrLectura)
        ? `En la conciliación de una cooperativa, el modelo de IA acertó el ${iaLectura} de las lecturas en pruebas, frente a cerca del ${limpio(ocrLectura)} del OCR anterior.`
        : null,
      { label: enlaceCasos("financiero"), href: casosDe("financiero"), industria: "financiero" }
    ),
    monitor
      ? {
          practica: "Seguimiento en producción.",
          respaldo: `${monitor.name} registra las ejecuciones y los fallos de los robots en producción.`,
          enlace: { label: `Ver ${monitor.name}`, href: monitor.href },
        }
      : null,
  ].filter(Boolean),
  // CONFIRMAR: compromiso de proceso sin caso que lo respalde; va aparte de la lista.
  compromiso: "Además, el alcance y el precio de cada etapa quedan por escrito antes de empezarla.",
  preparacion: {
    titulo: "En preparación",
    lista: EN_PREPARACION.filter((i) => i && i.texto && i.responsable && i.fecha),
  },
  lecturas: [
    { label: "Seguridad y gobierno en proyectos de RPA", href: "/blog/seguridad-y-gobierno-en-proyectos-de-rpa" },
    { label: "Cómo monitorear robots RPA en producción", href: "/blog/como-monitorear-robots-rpa-en-produccion" },
  ],
  faq: { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
};

// ---------------------------------------------------------------------------
// 9. Equipo
// ---------------------------------------------------------------------------

export const equipo = {
  rotulo: "Equipo",
  titulo: "Quién va a trabajar contigo",
  personas: team.map((p) => ({
    ...p,
    autor: authors.find((a) => a.name === p.name)?.slug ?? null,
  })),
  enlace: { label: "Conoce a Robotipy", href: "/about" },
};

// ---------------------------------------------------------------------------
// 10. Recursos
// ---------------------------------------------------------------------------

// Las descripciones salen de cada herramienta (PAGE_DESCRIPTION de su data.js
// y roiCalculator.hero en messages/es.json), con el copy ajustado.
const HERRAMIENTAS = {
  "/evaluador-automatizacion": {
    id: "evaluador",
    texto: `Responde ${preguntasEvaluador ?? "unas"} preguntas sobre una tarea y sabrás si se puede automatizar, qué tecnología conviene (RPA, IA o API) y cuántas horas liberas. Gratis y sin registro.`,
    cta: "Evalúa tu proceso",
  },
  "/roi-calculator": {
    id: "roi",
    texto:
      "Estima cuánto puede ahorrar tu empresa al automatizar un proceso con RPA, IA o desarrollo a medida, en cuatro pasos y con un reporte al final.",
    cta: "Calcula el retorno",
  },
  "/calculadora-vision-artificial": {
    id: "vision-artificial",
    texto:
      "Estima el costo, el ahorro anual y en cuánto tiempo se paga un proyecto de visión artificial, como control de calidad, conteo o EPP.",
    cta: "Estima tu proyecto",
  },
  "/calculadora-aforo-vehicular": {
    id: "aforo-vehicular",
    texto: `Compara el costo de un aforo manual con el conteo por video con IA de ${yoao?.name ?? "YOAO"}, según intersecciones y horas.`,
    cta: "Compara los costos",
  },
};

export const recursos = {
  rotulo: "Recursos",
  titulo: "Decide con datos antes de la primera reunión",
  herramientas: {
    titulo: "Herramientas gratuitas",
    lista: tools.filter((t) => HERRAMIENTAS[t.href]).map((t) => ({ ...t, ...HERRAMIENTAS[t.href] })),
  },
  blog: {
    titulo: "Lo último del blog",
    todo: { label: "Ver todo el blog", href: "/blog" },
    newsletter: { label: "Recibe los artículos por correo", href: "https://newsletter.robotipy.com" },
  },
};

// ---------------------------------------------------------------------------
// 11. Preguntas (el mismo arreglo alimenta el acordeón y el JSON-LD FAQPage)
// ---------------------------------------------------------------------------

// Cada respuesta es una lista de tramos: texto o { texto, href }.
export const preguntas = {
  rotulo: "Preguntas",
  titulo: "Lo que nos preguntan las gerencias",
  faqs: [
    {
      q: "¿Cuánto cuesta automatizar un proceso?",
      a: [
        `En promedio ${prices.rpaAverage} por proceso, con un mes de trabajo y la marcha blanca incluidos. Hay proyectos de menor valor. Si tu empresa no tiene licencia de Rocketbot, se suman ${prices.license}. El soporte es opcional, desde ${soporteMonto} al mes. El detalle está en `,
        { texto: "Cuánto cuesta automatizar un proceso", href: "/blog/cuanto-cuesta-automatizar-un-proceso" },
        ".",
      ],
    },
    {
      q: "¿Cuánto tarda el primer proceso?",
      a: [`${prices.timeline}.`],
    },
    {
      // CONFIRMAR: "puedes entrar por cualquier etapa".
      q: "¿Tengo que comprometerme con un programa completo?",
      a: ["No. Puedes entrar por cualquier etapa y pasar a la siguiente solo si la anterior cumplió lo acordado."],
    },
    {
      q: "¿Qué pasa si no conviene automatizar?",
      a: ["Te lo decimos en el diagnóstico y te proponemos otra salida, como una API, software a medida o un agente de IA."],
    },
    {
      q: "¿Trabajan con la licencia que ya tenemos?",
      // Solo se afirma para las plataformas con casos entregados en successCases.
      a: [
        `Si es de ${listaO(plataformasRpa)}, sí. Tenemos robots entregados sobre ${
          plataformasRpa.length > 1 ? "ambas plataformas" : "esa plataforma"
        } y somos `,
        { texto: facts.partner, href: "/rocketbot" },
        `. Si ya tienes licencia de Rocketbot, no se suman los ${prices.license} de una nueva.`,
      ],
    },
    {
      q: "¿Quién mantiene los robots después de la entrega?",
      a: [
        `Puede hacerlo tu equipo, o puedes contratar el soporte desde ${soporteMonto} al mes, con `,
        { texto: "monitoreo de ejecuciones", href: monitor?.href ?? "/monitor" },
        " y ajustes cuando cambia un sistema.",
      ],
    },
    {
      q: "¿En qué países trabajan?",
      a: [
        `Tenemos equipo en ${facts.team}${otrosPaises.length ? `, y clientes también en ${listaY(otrosPaises)}` : ""}.`,
      ],
    },
  ],
  enlace: { label: "Ver todas las preguntas frecuentes", href: "/preguntas-frecuentes" },
};

export const textoPlano = (tramos) => tramos.map((t) => (typeof t === "string" ? t : t.texto)).join("");

// ---------------------------------------------------------------------------
// 12. Agenda
// ---------------------------------------------------------------------------

// El título ya no repite la etiqueta del botón, que aparece justo debajo.
export const agenda = {
  rotulo: "Diagnóstico",
  titulo: "¿Qué proceso le quita más horas a tu equipo?",
  texto: "Cuéntanos cuál es. Te decimos si conviene automatizarlo y en qué rango de precio quedaría.",
  // Flujo real de /contact-us: selector de servicio, formulario y calendario.
  pasos: [
    "Eliges el tipo de servicio, dejas tus datos y tomas un horario en el calendario.",
    "Revisamos el proceso contigo y estimamos el ahorro.",
    "Si conviene seguir, recibes alcance y precio por escrito.",
  ],
  cta: { label: ctaDiagnostico, href: contacto() },
  lineas: [
    {
      antes: "¿Prefieres revisarlo por tu cuenta? ",
      label: ctaEvaluador,
      href: "/evaluador-automatizacion",
      herramienta: "evaluador",
    },
    { antes: "¿Tu empresa ya tiene Rocketbot? ", label: "Mira cómo lo implementamos", href: "/rocketbot" },
  ],
};
