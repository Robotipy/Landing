// Fuente unica para la pagina /success-cases (y su espejo /casos-exito).
// Refleja los arrays successCases hardcodeados en cada
// app/[locale]/casos-exito/<industria>/page.js. Si editas un caso en
// una pagina de industria, actualizalo aqui tambien, o migra esa
// pagina a importar desde este archivo en un PR posterior.

export const industries = [
  { slug: "agricola", key: "agricola" },
  { slug: "alimentos", key: "alimentos" },
  { slug: "automotriz", key: "automotriz" },
  { slug: "estudio-juridico", key: "estudioJuridico" },
  { slug: "financiero", key: "financiero" },
  { slug: "hoteleria", key: "hoteleria" },
  { slug: "industrias-tecnologicas", key: "industriasTecnologicas" },
  { slug: "mineria", key: "mineria" },
  { slug: "retail", key: "retail" },
  { slug: "salud", key: "salud" },
  { slug: "sector-publico", key: "sectorPublico" },
  { slug: "seguros", key: "seguros" },
  { slug: "servicios-profesionales", key: "serviciosProfesionales" },
  { slug: "servicios-tecnicos", key: "serviciosTecnicos" },
  { slug: "software", key: "software" },
  { slug: "telecomunicaciones", key: "telecomunicaciones" },
  { slug: "transporte", key: "transporte" },
];

// Industrias sin carpeta propia en app/[locale]/casos-exito: se renderizan
// con la ruta dinamica [industria] a partir de este objeto.
export const industryPages = {
  hoteleria: {
    banner: "/assets/banners/hoteleria.jpg",
    title: "Soluciones para Hotelería",
    subtitle:
      "Automatizamos la operación diaria de hoteles: ocupación, contratos corporativos y estados de pago conectados al PMS, sin digitación manual.",
    ctaTitle: "¿Tu hotel todavía cuadra la ocupación a mano?",
    ctaSubtitle:
      "Te mostramos qué reportes del PMS se pueden automatizar primero y cuánto tiempo libera tu equipo de recepción.",
    meta: {
      es: {
        title: "Casos de Automatización en Hotelería | Robotipy",
        description:
          "Casos reales de automatización RPA en hotelería: censo diario de ocupación y estados de pago integrados con el PMS, con métricas de ahorro.",
      },
      en: {
        title: "Hospitality Automation Cases | Robotipy",
        description:
          "Real RPA automation cases in hospitality: daily occupancy census and payment statements integrated with the hotel PMS.",
      },
      pt: {
        title: "Casos de Automação em Hotelaria | Robotipy",
        description:
          "Casos reais de automação RPA em hotelaria: censo diário de ocupação e estados de pagamento integrados ao PMS do hotel.",
      },
    },
  },
  mineria: {
    banner: "/assets/banners/mineria.jpg",
    title: "Soluciones para Minería",
    subtitle:
      "Software a medida e inteligencia artificial para operaciones mineras: modelos de proceso, simulación de escenarios y apoyo a la toma de decisiones.",
    ctaTitle: "¿Tus modelos de proceso siguen viviendo en Excel?",
    ctaSubtitle:
      "Los llevamos a software con trazabilidad, escenarios comparables y modelos que se calibran con datos reales.",
    meta: {
      es: {
        title: "Casos de Software e IA en Minería | Robotipy",
        description:
          "Casos reales de software a medida e IA en minería: gemelo digital de lixiviación con calibración de parámetros y simulación de escenarios.",
      },
      en: {
        title: "Software and AI Cases in Mining | Robotipy",
        description:
          "Real custom software and AI cases in mining: a leaching digital twin with parameter calibration and scenario simulation.",
      },
      pt: {
        title: "Casos de Software e IA em Mineração | Robotipy",
        description:
          "Casos reais de software sob medida e IA em mineração: gêmeo digital de lixiviação com calibração de parâmetros e simulação de cenários.",
      },
    },
  },
  retail: {
    banner: "/assets/banners/retail.jpg",
    title: "Soluciones para Retail y Consumo Masivo",
    subtitle:
      "Software a medida e inteligencia artificial para planificar la demanda: proyecciones de ventas, escenarios y consultas en lenguaje natural.",
    ctaTitle: "¿Tus proyecciones de venta se arman a mano cada mes?",
    ctaSubtitle:
      "Construimos tableros con escenarios comparables y un asistente de IA que responde sobre tus propios datos.",
    meta: {
      es: {
        title: "Casos de Software e IA en Retail | Robotipy",
        description:
          "Casos reales de software a medida e IA en retail y consumo masivo: proyección de ventas con escenarios macroeconómicos y asistente de IA.",
      },
      en: {
        title: "Software and AI Cases in Retail | Robotipy",
        description:
          "Real custom software and AI cases in retail and consumer goods: sales forecasting with macroeconomic scenarios and an AI assistant.",
      },
      pt: {
        title: "Casos de Software e IA no Varejo | Robotipy",
        description:
          "Casos reais de software sob medida e IA no varejo e bens de consumo: projeção de vendas com cenários macroeconômicos e assistente de IA.",
      },
    },
  },
  "sector-publico": {
    banner: "/assets/banners/sector-publico.jpg",
    title: "Soluciones para el Sector Público",
    subtitle:
      "Visión artificial para municipios: conteo de vehículos y personas, zonas de interés y alertas a partir de cámaras existentes o video grabado.",
    ctaTitle: "¿Tienes cámaras grabando y nadie mirando los datos?",
    ctaSubtitle:
      "Convertimos tu video en conteos, flujos y alertas sin cambiar tu infraestructura de cámaras.",
    meta: {
      es: {
        title: "Casos de Visión Artificial en Sector Público | Robotipy",
        description:
          "Casos reales de visión artificial para municipios: conteo vehicular y de personas, zonas y alertas a partir de cualquier video.",
      },
      en: {
        title: "Computer Vision Cases in the Public Sector | Robotipy",
        description:
          "Real computer vision cases for municipalities: vehicle and people counting, zones and alerts from any video source.",
      },
      pt: {
        title: "Casos de Visão Computacional no Setor Público | Robotipy",
        description:
          "Casos reais de visão computacional para municípios: contagem de veículos e pessoas, zonas e alertas a partir de qualquer vídeo.",
      },
    },
  },
  telecomunicaciones: {
    banner: "/assets/banners/telecomunicaciones.jpg",
    title: "Soluciones para Telecomunicaciones",
    subtitle:
      "Plataformas de atención con inteligencia artificial para proveedores de internet y telecomunicaciones que reciben miles de mensajes al día.",
    ctaTitle: "¿Tu soporte no da abasto en los peaks?",
    ctaSubtitle:
      "Ordenamos tus canales en tickets y dejamos que un agente de IA resuelva las consultas repetitivas.",
    meta: {
      es: {
        title: "Casos de IA en Telecomunicaciones | Robotipy",
        description:
          "Casos reales de software e IA en telecomunicaciones: tickets automáticos desde WhatsApp y agente de IA para soporte con alto volumen.",
      },
      en: {
        title: "AI Cases in Telecommunications | Robotipy",
        description:
          "Real software and AI cases in telecommunications: automatic tickets from WhatsApp and an AI support agent for high volume.",
      },
      pt: {
        title: "Casos de IA em Telecomunicações | Robotipy",
        description:
          "Casos reais de software e IA em telecomunicações: tickets automáticos a partir do WhatsApp e agente de IA para suporte com alto volume.",
      },
    },
  },
};

export const successCases = [
  // ===== Agrícola =====
  {
    id: "agricola-1",
    categoria: "agricola",
    industry: "Agrotecnología",
    name: "Configurador de Oferta Técnica",
    challenge:
      "Generación manual de ofertas técnicas en documentos word con diferentes plantillas e información personalizada para clientes",
    solution:
      "Automatizamos la generación de documentos con ofertas de artículos para clientes a través de un formulario, eliminando el trabajo manual repetitivo.",
    results: { manualExecution: "2 hr", automatedExecution: "2 min", timeSaving: "98%" },
    tools: ["excel", "word", "pdf", "javascript"],
    platform: "rocketbot",
  },
  {
    id: "agricola-2",
    categoria: "agricola",
    industry: "Agroindustria",
    name: "Conciliación Bancaria",
    challenge: "Conciliar los movimientos de diferentes bancos argentinos y los movimientos de finnegans",
    solution: "Automatización de la descarga de movimientos de cada banco, comparación con los movimientos de finnegans y conciliación de los mismos",
    results: { manualExecution: "2 hr", automatedExecution: "5 min", timeSaving: "96%" },
    tools: ["finnegans", "excel", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "agricola-3",
    categoria: "agricola",
    industry: "Agrotecnología",
    name: "Registro de Artículos por Audio",
    challenge: "Los operarios poco técnicos en terreno, debían buscar en la base de datos los artículos para presupuestar.",
    solution: "Extracción de los articulos desde un audio enviado por el operario, y envío de la información al sistema de presupuestos.",
    results: { manualExecution: "2 hr", automatedExecution: "5 min", timeSaving: "96%" },
    tools: ["python", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "agricola-4",
    categoria: "agricola",
    industry: "Frutícola",
    name: "Carga de Facturas en ERP Quality",
    challenge: "Bajar los documentos desde el SII, y carga de cada uno junto a la respectiva orden de compra en su ERP Quality (Q-biz).",
    solution: "Automatización de la descarga de facturas del SII, búsqueda de la respectiva orden de compra y carga en ERP Quality (Q-Biz)",
    results: { manualExecution: "8 hr", automatedExecution: "1 hr", timeSaving: "87%" },
    tools: ["excel", "qbiz", "sii", "pdf", "xml", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "agricola-5",
    categoria: "agricola",
    industry: "Agrotecnología",
    name: "Generación de Planos",
    challenge: "Generación de Planos DWG e imagenes TIFF descargando archivos KMZ de diferentes plataformas incluyendo google earth",
    solution: "Automatización de la descarga de archivos KMZ y control de las aplicaciones de Google Earth, BricsCad y QGIS para generar los planos y imagenes TIFF",
    results: { manualExecution: "5 hr", automatedExecution: "25 min", timeSaving: "92%" },
    tools: ["qgis", "bricscad", "google-earth"],
    platform: "rocketbot",
  },

  // ===== Alimentos =====
  {
    id: "alimentos-1",
    categoria: "alimentos",
    industry: "Alimentos",
    name: "Mercadería OP",
    challenge: "Proceso manual de ratificación de Órdenes de Producción (OP) con validación de datos y documentación compleja.",
    solution: "Automatización del proceso de ratificación de Órdenes de Producción, incluyendo validación automática de datos y generación de documentación requerida.",
    results: { manualExecution: "4 hr", automatedExecution: "20 min", timeSaving: "92%" },
    tools: ["excel", "pdf", "dynamics"],
    platform: "rocketbot",
  },
  {
    id: "alimentos-2",
    categoria: "alimentos",
    industry: "Alimentos",
    name: "Ratificación OS",
    challenge: "Proceso manual de ratificación de Órdenes de Servicio (OS) con seguimiento de documentación y validaciones.",
    solution: "Automatización completa del proceso de ratificación de Órdenes de Servicio, incluyendo seguimiento automático de documentación y validaciones.",
    results: { manualExecution: "3 hr", automatedExecution: "15 min", timeSaving: "92%" },
    tools: ["excel", "pdf", "dynamics"],
    platform: "rocketbot",
  },
  {
    id: "alimentos-3",
    categoria: "alimentos",
    industry: "Alimentos",
    name: "Lectura de Facturas",
    challenge: "Extracción manual de información de PDFs de Cereal, Leche y Hacienda para ingreso en documentos de Compra y Venta.",
    solution: "Automatización de la extracción de información desde PDFs de diferentes sectores (Cereal, Leche, Hacienda) y su posterior ingreso en documentos de Compra y Venta.",
    results: { manualExecution: "5 hr", automatedExecution: "25 min", timeSaving: "92%" },
    tools: ["excel", "pdf", "python"],
    platform: "rocketbot",
  },

  // ===== Automotriz =====
  {
    id: "automotriz-1",
    categoria: "automotriz",
    industry: "Automotriz",
    name: "Actualización de Matrículas",
    challenge: "Actualización manual de matrículas de vehículos en diferentes sistemas (Invesfleet y MUTUA) con validación y filtrado de expedientes.",
    solution: "Automatización de la extracción de datos en Invesfleet y MUTUA, incluyendo filtrado, validación de expedientes y extracción de información del vehículo.",
    results: { manualExecution: "4 hr", automatedExecution: "15 min", timeSaving: "94%" },
    tools: ["excel", "outlook", "chrome"],
    platform: "rocketbot",
  },
  {
    id: "automotriz-2",
    categoria: "automotriz",
    industry: "Automotriz",
    name: "Descarga de Órdenes y Facturas",
    challenge: "Descarga manual de órdenes de trabajo desde el portal de Allianz para gestión de vehículos.",
    solution: "Automatización de la descarga de órdenes desde el portal de Allianz, integrando la información con el sistema de gestión vehicular.",
    results: { manualExecution: "2 hr", automatedExecution: "10 min", timeSaving: "92%" },
    tools: ["excel", "chrome", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "automotriz-3",
    categoria: "automotriz",
    industry: "Rent-a-car",
    name: "Generación de Órdenes de Compra",
    challenge: "El proceso de generación de órdenes de compra, debía cargar datos a SAP y mandar la OC al proveedor, pasando por diferentes etapas de aprobación y validación.",
    solution: "Automatización de la generación de órdenes de compra, incluyendo estandarización, carga de datos a SAP y envío de la OC al proveedor 24/7.",
    results: { manualExecution: "1 hr", automatedExecution: "2 min", timeSaving: "93%" },
    tools: ["excel", "sap", "pdf", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "automotriz-4",
    categoria: "automotriz",
    industry: "Logística",
    name: "Valoración de Baterías",
    challenge: "Valoración manual de baterías de vehículos en el portal de Allianz con verificación de estado y documentación.",
    solution: "Automatización de la valoración de baterías en el portal de Allianz, incluyendo verificación de estado, documentación y generación de reportes.",
    results: { manualExecution: "3 hr", automatedExecution: "20 min", timeSaving: "89%" },
    tools: ["excel", "chrome", "pdf", "outlook"],
    platform: "rocketbot",
  },

  {
    id: "automotriz-5",
    categoria: "automotriz",
    industry: "Flotas y Rent-a-car",
    name: "Creación de Materiales en SAP",
    challenge: "Las solicitudes de repuestos llegaban por correo en planillas Excel y cada material debía validarse contra un maestro SAP de más de 55.000 registros antes de cargarse a mano.",
    solution: "Robot que lee las solicitudes del correo, valida la plantilla, homologa términos, cruza patente y marca con la API de flota, crea los materiales en SAP y responde al solicitante indicando las líneas con error.",
    metrics: [
      { value: "55.000+", label: "Materiales en el maestro" },
      { value: "~60", label: "Solicitantes en todo Chile" },
      { value: "100%", label: "Solicitudes con respuesta automática" },
    ],
    tools: ["sap", "outlook", "excel", "python"],
    platform: "rocketbot",
  },
  {
    id: "automotriz-6",
    categoria: "automotriz",
    industry: "Rent-a-car",
    name: "Bloqueo de Disponibilidad por Sucursal",
    challenge: "Bloquear y desbloquear a mano la disponibilidad de vehículos por sucursal y categoría en un sistema mainframe, mientras los canales de venta externos mueven la demanda todo el día.",
    solution: "Robot sobre emulador de terminal 3270 con reconexión automática, parametrizado por marca, que corre cada noche y a demanda desde el orquestador y entrega un reporte por ejecución.",
    metrics: [
      { value: "2", label: "Marcas operadas" },
      { value: "34", label: "Sucursales por ejecución" },
      { value: "~400", label: "Registros por noche" },
    ],
    tools: ["sqlserver", "outlook", "excel"],
    platform: "rocketbot",
  },

  // ===== Estudio Jurídico =====
  {
    id: "estudio-juridico-1",
    categoria: "estudio-juridico",
    industry: "Estudio Jurídico",
    name: "Generación de Audiencia",
    challenge: "Búsqueda manual de información de clientes deudores de bancos en diferentes webs, armado de documentos y generación de audiencias para negociación.",
    solution: "Automatización de la búsqueda de información de clientes deudores en diferentes webs, armado automático de documentos y generación de audiencias (vía calendar) para negociación con deudores.",
    results: { manualExecution: "8 hr", automatedExecution: "1 hr", timeSaving: "88%" },
    tools: ["excel", "web-scraping", "calendar", "pdf"],
    platform: "rocketbot",
  },

  // ===== Financiero =====
  {
    id: "financiero-1",
    categoria: "financiero",
    industry: "Banca",
    name: "Carga de Contratos en MIDT",
    challenge: "La página de la dirección del trabajo se cae constantemente, lo que dificulta la carga de contratos de nuevos colaboradores.",
    solution: "Automatización de carga de contratos en la página de la dirección del trabajo, incluyendo validación de datos y confirmación de envío.",
    results: { manualExecution: "5 hr", automatedExecution: "18 min", timeSaving: "94%" },
    tools: ["excel", "midt", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "financiero-2",
    categoria: "financiero",
    industry: "Seguros",
    name: "Actualización de Siniestros",
    challenge: "Buscar el estado de los siniestros abiertos en cada plataforma de seguros y actualizar la información en el portal de elevia",
    solution: "Automatización que ingresa al sistema de cada seguro, obtiene las observaciones, descarga los adjuntos y actualiza la información en el portal de elevia",
    results: { manualExecution: "4 hr", automatedExecution: "15 min", timeSaving: "94%" },
    tools: ["chrome", "reale-seguros", "mapfre", "allianz", "axa"],
    platform: "rocketbot",
  },
  {
    id: "financiero-3",
    categoria: "financiero",
    industry: "Banca",
    name: "Ratificación de Dominios",
    challenge: "Validación de dominios de correos electrónicos de contacto para documentos a ratificar.",
    solution: "Automatización de la búsqueda de dominios de correos electrónicos de contacto en los sitios de godaddy, nic chile y whois",
    results: { manualExecution: "5 hr", automatedExecution: "1 hr", timeSaving: "80%" },
    tools: ["chrome", "sharepoint"],
    platform: "rocketbot",
  },
  {
    id: "financiero-4",
    categoria: "financiero",
    industry: "Estudio Contable",
    name: "Lectura de Facturas",
    challenge: "Extracción manual de información de Facturas de Cereal, Leche y Hacienda para ingreso en documentos de Compra y Venta.",
    solution: "Automatización que recibe las facturas desde un formulario web y genera los reportes de compra, venta y bienes y servicios",
    results: { manualExecution: "1 hr", automatedExecution: "7 min", timeSaving: "88%" },
    tools: ["excel", "pdf", "outlook", "chrome"],
    platform: "rocketbot",
  },
  {
    id: "financiero-5",
    categoria: "financiero",
    industry: "Seguros",
    name: "Notificación de Siniestros",
    challenge: "Notificar por email y whatsapp a los clientes y responsables el estado de los siniestros pendientes en el software ebroker",
    solution: "Automatización de que ingresa al sistema ebroker, y notifica a los usuarios o respnsables a través de correo o whatsapp el estado de los siniestros",
    results: { manualExecution: "8 hr", automatedExecution: "1 hr", timeSaving: "88%" },
    tools: ["excel", "outlook", "ebroker", "chrome"],
    platform: "rocketbot",
  },
  {
    id: "financiero-6",
    categoria: "financiero",
    industry: "Seguros",
    name: "Gestión de tareas",
    challenge: "Resolver tareas pendientes y crear, asignar y/o actualizar siniestros en elevia y reale seguros",
    solution: "Automatización de que ingresa al sistema elevia, y según el tipo de tarea, crea, asigna y actualiza los siniestros en reale seguros",
    results: { manualExecution: "30 min", automatedExecution: "1 min", timeSaving: "97%" },
    tools: ["excel", "outlook", "reale-seguros"],
    platform: "rocketbot",
  },

  {
    id: "financiero-7",
    categoria: "financiero",
    industry: "Cooperativa",
    name: "Conciliación Bancaria con IA",
    challenge: "Conciliar a diario los movimientos de varios bancos cuyos portales solo muestran la información en pantalla, con un OCR que fallaba en uno de cada diez registros.",
    solution: "Robot que recorre los portales bancarios, usa un modelo de IA para leer las pantallas en lugar del OCR y concilia los movimientos contra el sistema contable.",
    metrics: [
      { value: "100%", label: "Acierto de lectura en pruebas" },
      { value: "~90%", label: "Acierto con el OCR anterior" },
      { value: "Diaria", label: "Conciliación multibanco" },
    ],
    tools: ["chrome", "excel", "python"],
    platform: "rocketbot",
  },

  // ===== Hotelería =====
  {
    id: "hoteleria-1",
    categoria: "hoteleria",
    industry: "Cadena hotelera",
    name: "Censo Diario de Ocupación",
    challenge: "Cada día la recepción de cada uno de los tres hoteles dedicaba 1,5 horas a hacer el censo cama por cama y cruzarlo contra los contratos corporativos. Ese dato alimenta la planificación de alimentación, los márgenes por contrato y el pago a proveedores.",
    solution: "Robot orquestado que extrae del PMS los reportes de limpieza y de contratos por estadía, consolida un Excel maestro mensual por hotel (ocupación real contra reservada, no-shows y porcentaje de ocupación) y lo distribuye por correo.",
    results: { manualExecution: "4,5 hr", automatedExecution: "10 min", timeSaving: "96%" },
    tools: ["excel", "sharepoint", "outlook", "azure"],
    platform: "rocketbot",
  },
  {
    id: "hoteleria-2",
    categoria: "hoteleria",
    industry: "Cadena hotelera",
    name: "Estados de Pago Corporativos",
    challenge: "Los estados de pago de cada hotel se sacaban del PMS y se transcribían al formato contable del grupo, hotel por hotel.",
    solution: "Robot que extrae los estados de pago del PMS, los traduce al formato corporativo con un diccionario por hotel y los deja publicados en SharePoint.",
    metrics: [
      { value: "3", label: "Hoteles integrados" },
      { value: "PMS a ERP", label: "Formato corporativo" },
      { value: "0", label: "Transcripción manual" },
    ],
    tools: ["excel", "sharepoint", "outlook"],
    platform: "rocketbot",
  },

  // ===== Industrias Tecnológicas =====
  {
    id: "industrias-tecnologicas-1",
    categoria: "industrias-tecnologicas",
    industry: "Gremio tecnológico",
    name: "Programa de Desarrollo Digital",
    challenge: "Los equipos de las empresas del gremio querían incorporar automatización e inteligencia artificial, pero no tenían formación práctica para detectar qué procesos mejorar ni cómo empezar.",
    solution: "Diseñamos e impartimos el Programa de Desarrollo Digital (PDD), una capacitación práctica en herramientas digitales, automatización RPA e IA aplicada a los procesos reales de cada participante.",
    kind: "capacitacion",
    tools: ["excel", "powerpoint", "python"],
    platform: "rocketbot",
  },

  // ===== Minería =====
  {
    id: "mineria-1",
    categoria: "mineria",
    industry: "Minería del cobre",
    name: "Gemelo Digital de Lixiviación",
    challenge: "El modelo de recuperación de cobre de las pilas de lixiviación vivía en planillas Excel difíciles de calibrar, auditar y usar para comparar escenarios.",
    solution: "Desarrollamos una plataforma web con motor en Python que simula el circuito desde las pilas hasta la extracción por solventes, calibra los parámetros del proceso con datos reales y combina el modelo fenomenológico con machine learning.",
    metrics: [
      { value: "48+", label: "Parámetros calibrados" },
      { value: "5 de 8", label: "Módulos más precisos que el Excel" },
      { value: "Web", label: "Escenarios comparables" },
    ],
    tools: ["python", "react", "excel"],
    platform: "robotipy",
  },

  // ===== Retail =====
  {
    id: "retail-1",
    categoria: "retail",
    industry: "Consumo masivo",
    name: "Proyección de Ventas con IA",
    challenge: "La gerencia necesitaba proyectar ventas bajo distintos escenarios macroeconómicos y consultar los resultados sin depender de reportes armados a mano.",
    solution: "Desarrollamos una plataforma web en la nube con tableros de proyección por escenario y un asistente de IA por chat que responde preguntas sobre los datos de venta en lenguaje natural.",
    metrics: [
      { value: "Escenarios", label: "Macroeconómicos comparables" },
      { value: "Chat IA", label: "Consultas en lenguaje natural" },
      { value: "Productivo", label: "Plataforma en la nube" },
    ],
    tools: ["react", "python", "postgresql", "aws"],
    platform: "robotipy",
  },

  // ===== Salud =====
  {
    id: "salud-1",
    categoria: "salud",
    industry: "Asociación de clínicas",
    name: "Programa de Desarrollo Digital",
    challenge: "Los equipos administrativos de las clínicas asociadas necesitaban adoptar herramientas digitales y automatización, pero no contaban con formación práctica para aplicarlas en su día a día.",
    solution: "Diseñamos e impartimos el Programa de Desarrollo Digital (PDD), una capacitación práctica en herramientas digitales y automatización enfocada en los procesos administrativos de salud.",
    kind: "capacitacion",
    tools: ["excel", "powerpoint"],
    platform: "rocketbot",
  },

  // ===== Sector Público =====
  {
    id: "sector-publico-1",
    categoria: "sector-publico",
    industry: "Municipio",
    name: "Analítica de Video con IA",
    challenge: "El municipio tenía cámaras grabando calles y espacios públicos, pero contar vehículos y personas o detectar eventos requería revisar horas de video a mano.",
    solution: "Plataforma propia de visión artificial que procesa cualquier video, en vivo o grabado, para contar y clasificar vehículos y personas, definir zonas de interés y generar alertas.",
    metrics: [
      { value: "1:1,2", label: "Hora de video vs. tiempo de proceso" },
      { value: "Cualquier", label: "Cámara o video grabado" },
      { value: "Zonas", label: "Conteo y alertas por área" },
    ],
    tools: ["python", "javascript"],
    platform: "robotipy",
  },

  // ===== Seguros =====
  {
    id: "seguros-1",
    categoria: "seguros",
    industry: "Seguros",
    name: "Notificación de Siniestros",
    challenge: "Procesamiento manual de siniestros pendientes en Ebroker, con validación y notificación manual a clientes según medio preferido.",
    solution: "Automatización completa del procesamiento y validación de siniestros pendientes en Ebroker, notificando automáticamente al cliente según su medio preferido con mensajes predefinidos.",
    results: { manualExecution: "6 hr", automatedExecution: "30 min", timeSaving: "92%" },
    tools: ["excel", "web-scraping", "email"],
    platform: "rocketbot",
  },

  {
    id: "seguros-2",
    categoria: "seguros",
    industry: "Corredor de seguros (España)",
    name: "Gestión de Siniestros en Aseguradoras",
    challenge: "Cada día la bandeja de tareas del sistema de gestión de la correduría se llenaba de siniestros que obligaban a un tramitador a entrar a los portales de cada aseguradora para revisar novedades, reclamar peritos o abrir siniestros nuevos.",
    solution: "Robot que lee las tareas pendientes, revisa a diario el estado de los siniestros en los portales de Reale y Zurich, sube las novedades y documentos a la ficha, asocia peritos y da de alta los siniestros nuevos en cada compañía, cerrando o reprogramando la tarea.",
    metrics: [
      { value: "5", label: "Tipos de tarea automatizados" },
      { value: "2", label: "Aseguradoras integradas" },
      { value: "Cada 2 h", label: "Revisión de la bandeja" },
    ],
    tools: ["chrome", "reale-seguros", "excel"],
    platform: "rocketbot",
  },

  // ===== Servicios Profesionales =====
  {
    id: "servicios-profesionales-1",
    categoria: "servicios-profesionales",
    industry: "Ingeniería Vial",
    name: "Traffic Analysis",
    challenge: "Reducir el costo de revisar videos de transito manteniendo la precisión en el conteo y clasificaciónde vehiculos",
    solution: "Se construyó un sistema de IA que clasifica los vehiculos en videos de transito, generando un reporte en excel con la información consolidada.",
    results: { manualExecution: "7 días", automatedExecution: "1 día", timeSaving: "86%" },
    tools: ["python", "javascript"],
    platform: "robotipy",
  },
  {
    id: "servicios-profesionales-2",
    categoria: "servicios-profesionales",
    industry: "Software",
    name: "Gestión de Permisos",
    challenge: "Gestionar la alta y baja de usuarios en las diferentes plataformas utilizadas para gestionar proyectos",
    solution: "Automatización de las plataformas de los usuarios como Google Drive, Jira, Gmail,Slack, a partir de formularios que indican altas o bajas de acceso.",
    results: { manualExecution: "30 minutos", automatedExecution: "30 segundos", timeSaving: "98%" },
    tools: ["slack", "jira", "drive", "gmail", "github", "flokzu"],
    platform: "rocketbot",
  },
  {
    id: "servicios-profesionales-3",
    categoria: "servicios-profesionales",
    industry: "Estudio Jurídico",
    name: "Gestión administrativa",
    challenge: "Gestionar solicitudes de conciliación y audiencias extrayendo datos de correos y 6 portales como RUES y RUNT",
    solution: "Automatización optimizada para la recolección de datos, agendamiento de citas en Google Calendar y generación de informes",
    results: { manualExecution: "7 hr", automatedExecution: "30 min", timeSaving: "93%" },
    tools: ["excel", "word", "chrome"],
    platform: "rocketbot",
  },
  {
    id: "servicios-profesionales-4",
    categoria: "servicios-profesionales",
    industry: "Ingeniería y Construcción",
    name: "Descarga de Documentos SII",
    challenge: "Descarga de Facturas, Boletas de honorarios y Factoring del sistema de impuestos internos",
    solution: "Automatización de la descarga de documentos desde el sistema de impuestos internos y su posterior carga en el sistema de gestión de documentos",
    results: { manualExecution: "1 hr", automatedExecution: "5 min", timeSaving: "92%" },
    tools: ["excel", "sii"],
    platform: "rocketbot",
  },
  {
    id: "servicios-profesionales-5",
    categoria: "servicios-profesionales",
    industry: "Estudio Jurídico",
    name: "Gestión administrativa Superfinanciera",
    challenge: "Gestionar trámites ante la Superfinanciera a diario desde el portal web y extraer datos de correos para generar múltiples documentos legales",
    solution: "Automatización de la lectura de correos y la generación de documentos (Poder y Contestación), consultando en la superfinanciera, cruzando datos en Excel.",
    results: { manualExecution: "1 hr", automatedExecution: "5 min", timeSaving: "92%" },
    tools: ["excel", "word", "chrome"],
    platform: "rocketbot",
  },
  {
    id: "servicios-profesionales-6",
    categoria: "servicios-profesionales",
    industry: "Servicios Técnicos",
    name: "Carga Masiva de Artículos",
    challenge: "Búsqueda de imágenes deartículos en el sitio web de proveedores y actualización masiva de artículos en ecommerce",
    solution: "Automatización de búsqueda de imágenes de artículos con inteligencia artificial para identificar SKUs diferentes y actualización de las imagenes en el ecommerce",
    results: { manualExecution: "1 mes", automatedExecution: "2 días", timeSaving: "93%" },
    tools: ["excel", "chrome", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "servicios-profesionales-7",
    categoria: "servicios-profesionales",
    industry: "Servicios TI",
    name: "Mapeo de Tickets",
    challenge: "Consolidar manualmente múltiples reportes Excel, descargados diariamente desde correos de Outlook y el portal web Field Service",
    solution: "Automatización que filtra y descarga reportes diarios y unifica en una sola plantilla la información de los reportes",
    results: { manualExecution: "1 hr", automatedExecution: "3 min", timeSaving: "95%" },
    tools: ["excel", "chrome", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "servicios-profesionales-8",
    categoria: "servicios-profesionales",
    industry: "Servicios TI",
    name: "Gestión de Tickets",
    challenge: "Actualizar manualmente el estado de los tickets en la plataforma HELIX, extrayendo los datos desde correos pendientes en Outlook",
    solution: "Automatización que extrae el número de referencia de cada correo y accede a HELIX a diario para buscar y aplicar las actualizaciones al ticket correspondientes",
    results: { manualExecution: "1 hr", automatedExecution: "3 min", timeSaving: "95%" },
    tools: ["excel", "chrome", "outlook"],
    platform: "rocketbot",
  },

  // ===== Servicios Técnicos =====
  {
    id: "servicios-tecnicos-1",
    categoria: "servicios-tecnicos",
    industry: "Servicios Técnicos",
    name: "Carga Masiva de Artículos",
    challenge: "Carga manual masiva de artículos de proveedores en el ecommerce de SANCA, proceso repetitivo y propenso a errores.",
    solution: "Automatización completa de la carga masiva de artículos de proveedores en el ecommerce de SANCA, eliminando el trabajo manual repetitivo.",
    results: { manualExecution: "8 hr", automatedExecution: "1 hr", timeSaving: "88%" },
    tools: ["excel", "web-scraping", "ecommerce"],
    platform: "rocketbot",
  },

  // ===== Software =====
  {
    id: "software-1",
    categoria: "software",
    industry: "Software",
    name: "Gestión de Permisos Plataforma",
    challenge: "Gestión manual de permisos en plataformas como Google Drive, Jira y Slack, con altas y bajas de acceso basadas en formularios.",
    solution: "Automatización completa de la gestión de permisos en múltiples plataformas (Google Drive, Jira, Slack) a partir de formularios que indican altas o bajas de acceso.",
    results: { manualExecution: "4 hr", automatedExecution: "20 min", timeSaving: "92%" },
    tools: ["excel", "google-drive", "jira", "slack"],
    platform: "rocketbot",
  },

  // ===== Telecomunicaciones =====
  {
    id: "telecomunicaciones-1",
    categoria: "telecomunicaciones",
    industry: "Proveedor de internet",
    name: "Soporte con Agente de IA",
    challenge: "El equipo de soporte recibía miles de mensajes diarios por WhatsApp y otros canales, sin trazabilidad ni forma de priorizar en los peaks.",
    solution: "Implementamos una plataforma propia que convierte cada conversación en un ticket y un agente de IA con base de conocimiento que responde las consultas frecuentes y deriva el resto al equipo humano.",
    metrics: [
      { value: "~2.000", label: "Mensajes por día en peak" },
      { value: "150+", label: "Tickets en un día" },
      { value: "24/7", label: "Primera respuesta con IA" },
    ],
    tools: ["javascript", "nodejs", "postgresql"],
    platform: "robotipy",
  },

  // ===== Transporte =====
  {
    id: "transporte-1",
    categoria: "transporte",
    industry: "Transporte",
    name: "Expedientes Pendientes Acuse",
    challenge: "Validación manual de expedientes pendientes de acuse en la Agencia Tributaria de España, proceso lento y propenso a errores.",
    solution: "Automatización que actualiza en Dynamics NAV el estado de los expedientes pendientes de acuse en la Agencia Tributaria de España.",
    results: { manualExecution: "6 hr", automatedExecution: "30 min", timeSaving: "92%" },
    tools: ["dynamics", "chrome", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "transporte-2",
    categoria: "transporte",
    industry: "Transporte",
    name: "Expedientes Pendientes Recepción",
    challenge: "Validación manual de expedientes pendientes de recepción de acuerdo en la Agencia Tributaria de España con actualización en Dynamics.",
    solution: "Automatización de la validación de expedientes pendientes de recepción de acuerdo en la Agencia Tributaria, integrando automáticamente con Dynamics.",
    results: { manualExecution: "5 hr", automatedExecution: "25 min", timeSaving: "92%" },
    tools: ["dynamics", "chrome", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "transporte-3",
    categoria: "transporte",
    industry: "Logística",
    name: "Descarga de Estadisticas",
    challenge: "Ingresar al sistema Kipintoch e ingresar en cada módulo para descargar sus reportes (Rentabilidad, Comercial, etc)",
    solution: "Automatización de la descarga de reportes del sistema Kipintoch, permitiendo parametrizar los filtros y exportarlos en Excel",
    results: { manualExecution: "1 hr", automatedExecution: "10 min", timeSaving: "92%" },
    tools: ["chrome", "outlook", "excel"],
    platform: "uipath",
  },
  {
    id: "transporte-4",
    categoria: "transporte",
    industry: "Transporte",
    name: "Expediente Pendiente España y Portugal",
    challenge: "Envío manual de datos de expedientes de la AEAT (España) desde Dynamics NAV, incluyendo extracción, validación y firma digital.",
    solution: "Automatización completa del envío de datos de expedientes de la AEAT desde Dynamics NAV, incluyendo extracción, validación, firma digital y presentación.",
    results: { manualExecution: "8 hr", automatedExecution: "45 min", timeSaving: "91%" },
    tools: ["dynamics", "chrome", "outlook"],
    platform: "rocketbot",
  },
  {
    id: "transporte-5",
    categoria: "transporte",
    industry: "Transporte",
    name: "Vehículos Declarados",
    challenge: "Actualización manual de vehículos de Gasóleo Profesional, consultando la AEAT y extrayendo datos a Excel para importación.",
    solution: "Automatización de la actualización de vehículos de Gasóleo Profesional, consultando la AEAT, extrayendo datos a Excel e importando datos al sistema.",
    results: { manualExecution: "4 hr", automatedExecution: "20 min", timeSaving: "92%" },
    tools: ["excel", "chrome", "dynamics"],
    platform: "rocketbot",
  },
  {
    id: "transporte-6",
    categoria: "transporte",
    industry: "Transporte",
    name: "Estado Devoluciones Gasóleo Profesional",
    challenge: "Actualización manual de devoluciones de Gasóleo Profesional, consultando la AEAT por año y extrayendo datos a Excel.",
    solution: "Automatización de la actualización de devoluciones de Gasóleo Profesional, consultando la AEAT por año, extrayendo datos a Excel e importando automáticamente.",
    results: { manualExecution: "5 hr", automatedExecution: "25 min", timeSaving: "92%" },
    tools: ["dynamics", "chrome", "outlook"],
    platform: "rocketbot",
  },
];
