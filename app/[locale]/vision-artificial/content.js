import config from "@/config";

// La misma página existe en español (/es/vision-artificial) y en inglés
// (/en/computer-vision). Portugués redirige a español desde middleware.js.
export const PATHS = { es: "/vision-artificial", en: "/computer-vision" };

const siteOrigin = `https://www.${config.domainName.replace(/^www\./, "")}`;
export const pageUrl = (locale) => `${siteOrigin}/${locale}${PATHS[locale]}`;
// Imagen al compartir el enlace (1200x630): la toma de dron analizada con YOAO.
export const ogImages = (alt) => [{ url: `${siteOrigin}/vision/og-vision-artificial.jpg`, width: 1200, height: 630, alt }];

// hreflang entre las dos versiones (getSEOTags asume el mismo slug en todos
// los idiomas, y aquí el slug cambia).
export const alternates = (locale) => ({
  canonical: pageUrl(locale),
  languages: {
    "es-ES": pageUrl("es"),
    "en-US": pageUrl("en"),
    "x-default": pageUrl("es"),
  },
});

const contactHref = (origen, additionalInfo) =>
  `/contact-us?${new URLSearchParams({ servicio: "software", origen, additionalInfo })}`;

const es = {
  locale: "es",
  ogLocale: "es_LA",
  title: "Visión artificial para empresas en Chile | Robotipy",
  description:
    "Visión artificial para contar vehículos y personas, medir filas y estacionamientos, verificar EPP y leer patentes con tus cámaras o un dron. Proyectos a medida.",
  keywords: [
    "visión artificial para empresas",
    "empresa de visión artificial Chile",
    "desarrollo de visión artificial",
    "computer vision empresas",
    "visión computacional",
    "analítica de video con IA",
    "inspección visual automatizada",
    "conteo vehicular con cámaras",
  ],
  areaServed: ["Chile", "Argentina", "Perú", "México", "Colombia"],
  // El formulario no guarda "origen", pero sí precarga additionalInfo: así el
  // lead llega diciendo de qué página viene.
  contactHref: contactHref("vision-artificial", "Me interesa un proyecto de visión artificial."),
  liveContactHref: contactHref(
    "vision-artificial-en-vivo",
    "Me interesa analizar el video de mis cámaras en vivo."
  ),
  home: "Inicio",
  breadcrumb: "Visión artificial",
  h1: "Visión artificial para empresas",
  subtitle:
    "Convertimos el video de tus cámaras, en vivo o grabado, en conteos, tiempos y alertas. Desarrollamos el modelo para tu proceso y conectamos los resultados con tus sistemas.",
  cta: "Agenda una reunión",
  secondaryCta: { text: "Calcula el costo", href: "/calculadora-vision-artificial" },
  heroVideo: {
    alt: "Rotonda grabada con dron: YOAO detecta cada vehículo y le asigna un número para seguirlo",
    caption:
      "Rotonda grabada con dron y analizada con YOAO. Cada vehículo recibe un número y se sigue mientras cruza la imagen.",
  },
  drone: {
    alt: "Toma de dron de una rotonda con tráfico: YOAO detecta cada auto y bus y le asigna un número para seguirlo",
    caption: "Toma de dron procesada con YOAO para un estudio de tránsito.",
  },
  // Casos de uso de YOAO agrupados por entorno, cada grupo con su video
  // (items son posiciones en useCases.yoao).
  groups: [
    {
      title: "Aforos y estudios de tránsito",
      video: "interseccion",
      alt: "Intersección vista con dron: YOAO detecta y numera cada vehículo",
      items: [0, 1],
    },
    {
      title: "Filas y atención",
      video: "filas",
      alt: "Fila en un terminal: YOAO sigue a cada persona para medir su espera",
      items: [2],
    },
    {
      title: "Estacionamientos y patio logístico",
      video: "estacionamiento",
      alt: "Estacionamiento visto con dron: YOAO cuenta y sigue cada auto",
      items: [3, 4],
    },
    {
      title: "Seguridad en faena",
      video: "seguridad",
      alt: "Obra en construcción: YOAO marca quién lleva casco y quién no",
      items: [5],
    },
  ],
  intro: {
    title: "Qué hace la visión artificial en una empresa",
    paragraphs: [
      "La visión artificial (también llamada computer vision o visión computacional) es la rama de la inteligencia artificial que interpreta imágenes y video. En una empresa permite que una cámara haga el trabajo de quien hoy mira una pantalla, revisa una línea o cuenta a mano.",
      "Cada proyecto parte con cuatro preguntas: qué hay que detectar, con qué precisión, en cuánto tiempo y a qué sistema tiene que llegar el resultado. Con esas respuestas definimos las cámaras, el modelo y la forma de operar.",
    ],
  },
  useCases: {
    title: "Casos de uso de visión artificial",
    intro:
      "Muchos casos se resuelven con YOAO, nuestra plataforma de analítica de video: subes el video grabado y recibes los resultados sin desarrollo. Los demás los construimos a medida.",
    yoaoTitle: "Listos para usar con YOAO",
    customTitle: "Proyectos a medida",
    // Lo que YOAO resuelve hoy sobre video grabado: detección, seguimiento,
    // zonas, permanencia, EPP (casco), caídas y patentes.
    yoao: [
      {
        title: "Conteo vehicular y aforos",
        description:
          "Cuenta y clasifica autos, buses, camiones y motos por acceso, por hora y por movimiento de origen a destino. Funciona con cámara fija o dron.",
      },
      {
        title: "Conteo de personas y flujos",
        description:
          "Mide cuántas personas entran a una zona, cuánto tiempo se quedan y por dónde circulan, en locales, plazas, andenes o eventos.",
      },
      {
        title: "Filas y tiempos de atención",
        description:
          "Calcula cuánto espera cada persona, cuánto dura la atención y cuántos abandonan la fila, por franja horaria.",
      },
      {
        title: "Ocupación de estacionamientos",
        description:
          "Muestra la ocupación de cada sector en el tiempo y la duración de cada estadía, con lectura de patentes opcional.",
      },
      {
        title: "Patio logístico y andenes",
        description:
          "Mide cuánto espera cada camión, qué tan usados están los andenes y cuánto dura el ciclo de portería a salida.",
      },
      {
        title: "Seguridad: casco, caídas y zonas",
        description:
          "Registra quién entra sin casco, las caídas y los ingresos a zonas de equipos o vehículos, como evidencia para auditorías de seguridad.",
      },
    ],
    custom: [
      {
        title: "Control de calidad en línea",
        description:
          "Detecta defectos, fallas de envase o etiquetas mal puestas en la misma línea, con cámara industrial e iluminación controlada.",
      },
      {
        title: "Calibre y clasificación",
        description:
          "Mide tamaño, color o madurez de fruta y otros productos para clasificarlos con el mismo criterio en todos los turnos.",
      },
      {
        title: "Análisis de video en vivo",
        description:
          "Conectamos tus cámaras para contar, medir y detectar eventos mientras ocurren, y avisar a tu equipo en el momento por correo, WhatsApp o tu sistema de alertas.",
      },
      {
        title: "Integración con tus sistemas",
        description:
          "Lleva los conteos y detecciones a tu ERP, a tu BI o a una aplicación propia, con la frecuencia que necesite tu operación.",
      },
    ],
  },
  cases: {
    title: "Casos reales",
    challenge: "Desafío: ",
    solution: "Solución: ",
    link: "Ver el caso",
    items: [
      {
        industry: "Municipio",
        title: "Analítica de video en calles y espacios públicos",
        challenge:
          "El municipio tenía cámaras grabando, pero contar vehículos y personas o detectar eventos obligaba a revisar horas de video a mano.",
        solution:
          "Procesamos el video de sus cámaras para contar y clasificar vehículos y personas, definir zonas de interés y marcar los eventos relevantes.",
        metrics: [
          { value: "1:1,2", label: "Hora de video vs. tiempo de proceso" },
          { value: "Zonas", label: "Conteo y eventos por área" },
        ],
        href: "/casos-exito/sector-publico",
      },
      {
        industry: "Ingeniería vial",
        title: "Clasificación de vehículos para estudios de tránsito",
        challenge:
          "Revisar los videos de cada estudio para contar y clasificar vehículos tomaba una semana de trabajo manual.",
        solution:
          "Un modelo clasifica los vehículos de cada video y entrega el reporte consolidado en Excel, listo para el informe.",
        metrics: [
          { value: "1 día", label: "Por estudio, antes 7 días" },
          { value: "86%", label: "Menos tiempo de revisión" },
        ],
        href: "/casos-exito/servicios-profesionales",
      },
    ],
  },
  steps: {
    title: "Cómo trabajamos un proyecto de visión artificial",
    items: [
      {
        title: "Diagnóstico",
        description:
          "Revisamos tu proceso y muestras de tus videos o fotos. Te decimos si el caso es viable, qué precisión es razonable esperar y si se resuelve con YOAO o necesita un desarrollo a medida.",
      },
      {
        title: "Piloto sobre video grabado",
        description:
          "En 2 a 4 semanas probamos el modelo con tus propios videos. Mides la precisión antes de invertir en equipos.",
      },
      {
        title: "Implementación",
        description:
          "En 2 a 4 meses instalamos o reutilizamos cámaras, definimos dónde se procesa el video y conectamos los resultados a tu ERP, BI o sistema de alertas.",
      },
      {
        title: "Operación y mejora",
        description:
          "Monitoreamos la precisión en producción y ajustamos el modelo cuando cambian la luz, el producto o la cámara.",
      },
    ],
  },
  cameras: {
    title: "¿Sirven tus cámaras actuales?",
    intro:
      "Depende de qué tan pequeño es lo que hay que detectar. Para contar o vigilar, las cámaras de seguridad que ya tienes suelen bastar. Para inspeccionar un producto se necesita una cámara industrial y luz controlada.",
    headers: ["Caso de uso", "Cámara", "Dónde se procesa"],
    rows: [
      [
        "Conteo de vehículos y personas, filas, estacionamientos",
        "Cámaras de seguridad existentes o video de dron",
        "YOAO en la nube, sobre video grabado",
      ],
      [
        "Casco, caídas y zonas restringidas",
        "Cámaras de seguridad existentes",
        "YOAO para auditorías, o análisis en vivo si necesitas alertas en el momento",
      ],
      ["Lectura de patentes", "Cámara con buena resolución en el punto de paso", "YOAO o equipo en planta"],
      [
        "Control de calidad y calibre",
        "Cámara industrial con lente e iluminación controlada",
        "Equipo en planta, junto a la línea",
      ],
    ],
  },
  yoao: {
    title: "¿Necesitas un estudio o una medición puntual?",
    text: "Para aforos, filas, estacionamientos o auditorías de seguridad no hace falta un desarrollo a medida. Subes el video a YOAO, marcas las zonas en la imagen y recibes conteos, tiempos y eventos listos para tu informe. Pagas por hora de video analizada.",
    buttons: [
      { text: "Conocer YOAO", href: "/analysis" },
      { text: "Calcula el costo de un aforo", href: "/calculadora-aforo-vehicular" },
    ],
  },
  live: {
    title: "¿Necesitas analizar tus cámaras en vivo?",
    text: "Conectamos tus cámaras para contar, medir y detectar eventos mientras ocurren: alguien sin casco en una zona de equipos, una fila que supera el largo aceptable o un camión esperando más de lo debido. Cuéntanos qué quieres vigilar y armamos el proyecto con tus cámaras actuales.",
    button: "Quiero análisis en vivo",
  },
  faqTitle: "Preguntas frecuentes sobre visión artificial",
  faqs: [
    {
      q: "¿Qué es la visión artificial y para qué sirve en una empresa?",
      a: "Es la rama de la inteligencia artificial que interpreta imágenes y video. En una empresa se usa para contar vehículos, personas o productos, medir filas y tiempos de espera, verificar el uso de casco, leer patentes y detectar defectos en una línea. El resultado llega como dato a tus reportes o como alerta a tu equipo.",
    },
    {
      q: "¿Qué diferencia hay entre visión artificial, computer vision y analítica de video?",
      a: "Visión artificial, computer vision y visión computacional son nombres para la misma tecnología: modelos que interpretan imágenes. La analítica de video es una de sus aplicaciones y se enfoca en obtener conteos, tiempos y eventos a partir de cámaras y grabaciones.",
    },
    {
      q: "¿Puedo usar las cámaras que ya tengo?",
      a: "En conteos, filas, estacionamientos y seguridad casi siempre sí: las cámaras de seguridad existentes y los videos de dron suelen bastar. En control de calidad o calibre normalmente hace falta una cámara industrial con iluminación controlada, porque el detalle a detectar es pequeño. En el diagnóstico revisamos muestras de tus videos y te lo confirmamos.",
    },
    {
      q: "¿Cuánto cuesta un proyecto de visión artificial?",
      a: "Si el caso se resuelve con YOAO, pagas por hora de video analizada, sin costo fijo. Un proyecto a medida con 1 a 4 cámaras parte en torno a USD 10.000 y puede superar los USD 40.000 en control de calidad de alta exigencia. Puedes estimar tu caso en la calculadora de costo de visión artificial.",
    },
    {
      q: "¿Cuánto demora implementar visión artificial?",
      a: "Con YOAO subes el video y tienes resultados el mismo día. Un proyecto a medida parte con un piloto sobre videos grabados de 2 a 4 semanas, y la implementación en terreno, con cámaras, integración y marcha blanca, toma 2 a 4 meses según la cantidad de puntos de captura.",
    },
    {
      q: "¿Pueden analizar el video de mis cámaras en vivo?",
      a: "Sí, como proyecto a medida. Conectamos tus cámaras para procesar el video mientras se graba y enviar alertas en el momento, por ejemplo cuando alguien entra sin casco a una zona o cuando una fila supera un largo definido. Si lo que necesitas es un estudio o una medición, YOAO trabaja sobre video grabado y entrega resultados el mismo día.",
    },
    {
      q: "¿Qué pasa con la privacidad de las personas que aparecen en el video?",
      a: "Para contar personas, medir filas o verificar el uso de casco no hace falta identificar a nadie, así que estos casos funcionan sin reconocimiento facial y entregan métricas agregadas. En cada proyecto definimos qué se guarda, por cuánto tiempo y quién accede, considerando la Ley 21.719 de protección de datos personales.",
    },
  ],
  relatedTitle: "Sigue avanzando",
  related: [
    {
      href: "/calculadora-vision-artificial",
      title: "Calculadora de costo de visión artificial",
      description:
        "Estima la inversión, el ahorro anual y el payback de tu proyecto según el caso de uso y la cantidad de cámaras.",
    },
    {
      href: "/casos-exito/sector-publico",
      title: "Casos de visión artificial en el sector público",
      description:
        "Conteo vehicular y de personas, zonas y eventos a partir de las cámaras que el municipio ya tenía.",
    },
    {
      href: "/desarrollo-software",
      title: "Desarrollo de software a medida",
      description:
        "Cuando el resultado de la cámara tiene que llegar a tu ERP, a un dashboard o a una aplicación propia.",
    },
  ],
  closing: {
    title: "¿Tienes cámaras grabando y nadie mirando los datos?",
    text: "Envíanos una muestra de tu video y te decimos qué se puede medir y con qué precisión.",
  },
};

// Los casos de éxito y las calculadoras solo existen en español, así que la
// versión en inglés no enlaza a ellos.
const en = {
  locale: "en",
  ogLocale: "en_US",
  title: "Computer Vision Solutions for Businesses | Robotipy",
  description:
    "Computer vision to count vehicles and people, measure queues and parking, check hard hats and read license plates with your cameras or a drone.",
  keywords: [
    "computer vision services",
    "computer vision company",
    "computer vision for business",
    "custom computer vision development",
    "AI video analytics",
    "video analytics software",
    "automated visual inspection",
    "vehicle counting cameras",
  ],
  areaServed: ["Chile", "Argentina", "Peru", "Mexico", "Colombia", "Spain"],
  contactHref: contactHref("computer-vision", "I'm interested in a computer vision project."),
  liveContactHref: contactHref("computer-vision-live", "I'm interested in analyzing my camera feeds live."),
  home: "Home",
  breadcrumb: "Computer vision",
  h1: "Computer vision for businesses",
  subtitle:
    "We turn your camera footage, live or recorded, into counts, wait times and alerts. We build the model for your process and connect the results to your systems.",
  cta: "Book a meeting",
  secondaryCta: { text: "Try YOAO", href: "/analysis" },
  heroVideo: {
    alt: "Roundabout filmed with a drone: YOAO detects every vehicle and assigns it a number to track it",
    caption:
      "Roundabout filmed with a drone and analyzed with YOAO. Each vehicle gets a number and is tracked while it crosses the frame.",
  },
  drone: {
    alt: "Drone shot of a roundabout with traffic: YOAO detects every car and bus and assigns it a number to track it",
    caption: "Drone footage processed with YOAO for a traffic study.",
  },
  groups: [
    {
      title: "Traffic counts and studies",
      video: "interseccion",
      alt: "Intersection seen from a drone: YOAO detects and numbers every vehicle",
      items: [0, 1],
    },
    {
      title: "Queues and service",
      video: "filas",
      alt: "Queue at a terminal: YOAO tracks each person to measure their wait",
      items: [2],
    },
    {
      title: "Parking lots and logistics yards",
      video: "estacionamiento",
      alt: "Parking lot seen from a drone: YOAO counts and tracks every car",
      items: [3, 4],
    },
    {
      title: "Site safety",
      video: "seguridad",
      alt: "Construction site: YOAO flags who is wearing a hard hat and who is not",
      items: [5],
    },
  ],
  intro: {
    title: "What computer vision does for a business",
    paragraphs: [
      "Computer vision (also called machine vision or visual AI) is the branch of artificial intelligence that interprets images and video. In a business, it lets a camera do the work of someone who today watches a screen, inspects a line or counts by hand.",
      "Every project starts with four questions: what needs to be detected, how accurately, how fast, and which system the result has to reach. Those answers define the cameras, the model and how it runs.",
    ],
  },
  useCases: {
    title: "Computer vision use cases",
    intro:
      "Many cases are covered by YOAO, our video analytics platform: you upload recorded video and get results with no development. The rest we build custom.",
    yoaoTitle: "Ready to use with YOAO",
    customTitle: "Custom projects",
    yoao: [
      {
        title: "Traffic counts",
        description:
          "Count and classify cars, buses, trucks and motorcycles by approach, by hour and by origin-destination movement. Works with fixed cameras or drones.",
      },
      {
        title: "People counting and flows",
        description:
          "Measure how many people enter an area, how long they stay and how they move, in stores, plazas, platforms or events.",
      },
      {
        title: "Queues and service times",
        description:
          "Calculate how long each person waits, how long service takes and how many people leave the line, by time slot.",
      },
      {
        title: "Parking occupancy",
        description:
          "See the occupancy of each section over time and the length of each stay, with optional license plate reading.",
      },
      {
        title: "Yards and loading docks",
        description:
          "Measure how long each truck waits, how busy the docks are and how long the cycle from gate to exit takes.",
      },
      {
        title: "Safety: hard hats, falls and zones",
        description:
          "Log people without hard hats, falls and entries into equipment or vehicle zones, as evidence for safety audits.",
      },
    ],
    custom: [
      {
        title: "Inline quality control",
        description:
          "Detect defects, packaging failures or misplaced labels right on the line, with an industrial camera and controlled lighting.",
      },
      {
        title: "Grading and sorting",
        description:
          "Measure the size, color or ripeness of fruit and other products to sort them with the same criteria on every shift.",
      },
      {
        title: "Live video analysis",
        description:
          "We connect your cameras to count, measure and detect events as they happen, and alert your team instantly by email, WhatsApp or your alerting system.",
      },
      {
        title: "Integration with your systems",
        description:
          "Send counts and detections to your ERP, your BI or your own application, as often as your operation needs.",
      },
    ],
  },
  cases: {
    title: "Real projects",
    challenge: "Challenge: ",
    solution: "Solution: ",
    items: [
      {
        industry: "Municipality",
        title: "Video analytics for streets and public spaces",
        challenge:
          "The municipality had cameras recording, but counting vehicles and people or spotting events meant reviewing hours of footage by hand.",
        solution:
          "We process the footage from its cameras to count and classify vehicles and people, define zones of interest and flag relevant events.",
        metrics: [
          { value: "1:1.2", label: "Hours of video vs. processing time" },
          { value: "Zones", label: "Counts and events by area" },
        ],
      },
      {
        industry: "Road engineering",
        title: "Vehicle classification for traffic studies",
        challenge:
          "Reviewing the footage of each study to count and classify vehicles took a week of manual work.",
        solution:
          "A model classifies the vehicles in each video and delivers a consolidated Excel report, ready for the study.",
        metrics: [
          { value: "1 day", label: "Per study, down from 7" },
          { value: "86%", label: "Less review time" },
        ],
      },
    ],
  },
  steps: {
    title: "How we run a computer vision project",
    items: [
      {
        title: "Assessment",
        description:
          "We review your process and samples of your videos or photos. We tell you whether the case is feasible, what accuracy to expect and whether YOAO covers it or it needs custom development.",
      },
      {
        title: "Pilot on recorded video",
        description:
          "In 2 to 4 weeks we test the model on your own footage. You see the accuracy before investing in equipment.",
      },
      {
        title: "Implementation",
        description:
          "In 2 to 4 months we install or reuse cameras, decide where the video is processed and connect the results to your ERP, BI or alerting system.",
      },
      {
        title: "Operation and improvement",
        description:
          "We monitor accuracy in production and adjust the model when the lighting, the product or the camera changes.",
      },
    ],
  },
  cameras: {
    title: "Will your current cameras work?",
    intro:
      "It depends on how small the thing to detect is. For counting or monitoring, the security cameras you already have are usually enough. To inspect a product you need an industrial camera and controlled lighting.",
    headers: ["Use case", "Camera", "Where it runs"],
    rows: [
      [
        "Vehicle and people counts, queues, parking",
        "Existing security cameras or drone footage",
        "YOAO in the cloud, on recorded video",
      ],
      [
        "Hard hats, falls and restricted zones",
        "Existing security cameras",
        "YOAO for audits, or live analysis if you need instant alerts",
      ],
      ["License plate reading", "Camera with good resolution at the checkpoint", "YOAO or an on-site device"],
      [
        "Quality control and grading",
        "Industrial camera with lens and controlled lighting",
        "On-site device, next to the line",
      ],
    ],
  },
  yoao: {
    title: "Need a one-off study or measurement?",
    text: "For traffic counts, queues, parking or safety audits you don't need custom development. Upload the video to YOAO, draw the zones on the image and get counts, times and events ready for your report. You pay per hour of video analyzed.",
    buttons: [{ text: "Learn about YOAO", href: "/analysis" }],
  },
  live: {
    title: "Need to analyze your cameras live?",
    text: "We connect your cameras to count, measure and detect events as they happen: someone without a hard hat in an equipment zone, a queue longer than acceptable or a truck waiting too long. Tell us what you want to monitor and we'll scope the project around your current cameras.",
    button: "I want live analysis",
  },
  faqTitle: "Computer vision FAQ",
  faqs: [
    {
      q: "What is computer vision and what is it used for in a business?",
      a: "It is the branch of artificial intelligence that interprets images and video. Businesses use it to count vehicles, people or products, measure queues and wait times, check hard hat use, read license plates and detect defects on a line. The result reaches your reports as data or your team as an alert.",
    },
    {
      q: "What is the difference between computer vision, machine vision and video analytics?",
      a: "Computer vision and machine vision refer to the same technology: models that interpret images. Machine vision is the term more common in industrial inspection. Video analytics is one application, focused on getting counts, times and events from cameras and recordings.",
    },
    {
      q: "Can I use the cameras I already have?",
      a: "For counts, queues, parking and safety, almost always: existing security cameras and drone footage are usually enough. Quality control or grading normally requires an industrial camera with controlled lighting, because the detail to detect is small. During the assessment we review samples of your footage and confirm it.",
    },
    {
      q: "How much does a computer vision project cost?",
      a: "If YOAO covers the case, you pay per hour of video analyzed, with no fixed fee. A custom project with 1 to 4 cameras starts at around USD 10,000 and can exceed USD 40,000 for demanding quality control.",
    },
    {
      q: "How long does it take to implement computer vision?",
      a: "With YOAO you upload the video and get results the same day. A custom project starts with a 2 to 4 week pilot on recorded footage, and on-site implementation, with cameras, integration and a trial run, takes 2 to 4 months depending on the number of capture points.",
    },
    {
      q: "Can you analyze my camera feeds live?",
      a: "Yes, as a custom project. We connect your cameras to process the video as it is recorded and send instant alerts, for example when someone enters a zone without a hard hat or when a queue exceeds a set length. If you need a study or measurement, YOAO works on recorded video and delivers results the same day.",
    },
    {
      q: "What about the privacy of people who appear on video?",
      a: "Counting people, measuring queues or checking hard hat use does not require identifying anyone, so these cases work without facial recognition and deliver aggregated metrics. In every project we define what is stored, for how long and who has access, in line with the data protection law that applies in your country.",
    },
  ],
  relatedTitle: "Keep exploring",
  related: [
    {
      href: "/analysis",
      title: "YOAO, our video analytics platform",
      description:
        "Upload recorded video, draw zones and get counts, times and events without development.",
    },
    {
      href: "/desarrollo-software",
      title: "Custom software development",
      description:
        "When the camera output needs to reach your ERP, a dashboard or your own application.",
    },
  ],
  closing: {
    title: "Have cameras recording and no one looking at the data?",
    text: "Send us a sample of your footage and we'll tell you what can be measured and how accurately.",
  },
};

export const content = { es, en };

export const buildMetadata = (locale) => {
  const c = content[locale];
  return { title: c.title, description: c.description, keywords: c.keywords, ogLocale: c.ogLocale };
};

export const buildJsonLd = (locale) => {
  const c = content[locale];
  const url = pageUrl(locale);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.h1,
      serviceType: "Computer Vision",
      url,
      inLanguage: locale,
      description: c.description,
      provider: { "@type": "Organization", name: "Robotipy", url: siteOrigin },
      areaServed: c.areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: c.useCases.title,
        itemListElement: [...c.useCases.yoao, ...c.useCases.custom].map((u) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: u.title, description: u.description },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: c.home, item: `${siteOrigin}/${locale}` },
        { "@type": "ListItem", position: 2, name: c.breadcrumb, item: url },
      ],
    },
  ];
};
