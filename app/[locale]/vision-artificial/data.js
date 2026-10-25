export const PAGE_PATH = "/vision-artificial";

export const PAGE_TITLE = "Visión artificial para empresas en Chile | Robotipy";

export const PAGE_DESCRIPTION =
  "Visión artificial para contar vehículos y personas, medir filas y estacionamientos, verificar EPP y leer patentes con tus cámaras o un dron. Proyectos a medida.";

// El formulario no guarda "origen", pero sí precarga additionalInfo: así el lead
// llega diciendo de qué página viene.
const contactHref = (origen, additionalInfo) =>
  `/contact-us?${new URLSearchParams({ servicio: "software", origen, additionalInfo })}`;

export const CONTACT_HREF = contactHref(
  "vision-artificial",
  "Me interesa un proyecto de visión artificial."
);
export const LIVE_CONTACT_HREF = contactHref(
  "vision-artificial-en-vivo",
  "Me interesa analizar el video de mis cámaras en vivo."
);

// Lo que YOAO resuelve hoy sobre video grabado: detección, seguimiento, zonas,
// permanencia, EPP (casco), caídas y patentes.
export const yoaoUseCases = [
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
];

export const customUseCases = [
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
];

export const cases = [
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
];

export const steps = [
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
];

export const cameraTable = [
  {
    useCase: "Conteo de vehículos y personas, filas, estacionamientos",
    camera: "Cámaras de seguridad existentes o video de dron",
    processing: "YOAO en la nube, sobre video grabado",
  },
  {
    useCase: "Casco, caídas y zonas restringidas",
    camera: "Cámaras de seguridad existentes",
    processing: "YOAO para auditorías, o análisis en vivo si necesitas alertas en el momento",
  },
  {
    useCase: "Lectura de patentes",
    camera: "Cámara con buena resolución en el punto de paso",
    processing: "YOAO o equipo en planta",
  },
  {
    useCase: "Control de calidad y calibre",
    camera: "Cámara industrial con lente e iluminación controlada",
    processing: "Equipo en planta, junto a la línea",
  },
];

export const relatedLinks = [
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
];

export const faqs = [
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
];
