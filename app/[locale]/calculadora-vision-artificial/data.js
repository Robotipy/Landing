export const PAGE_PATH = "/calculadora-vision-artificial";

export const PAGE_TITLE = "Calculadora de costo de visión artificial | Robotipy";

export const PAGE_DESCRIPTION =
  "Estima cuánto cuesta implementar visión artificial en tu empresa, el ahorro anual y el payback. Control de calidad, conteo, EPP y más. Gratis y sin registro.";

// Rangos referenciales de mercado en USD. Ajustar con precios reales de Robotipy.
export const USE_CASES = {
  calidad: {
    label: "Control de calidad",
    hint: "Detectar defectos, fallas de envase o etiquetado",
    camera: [1800, 4000],
    dev: [15000, 35000],
    laborShare: 0.6,
    defectShare: 0.6,
  },
  conteo: {
    label: "Conteo de producción",
    hint: "Contar unidades, cajas o pallets en línea",
    camera: [800, 2000],
    dev: [8000, 18000],
    laborShare: 0.8,
    defectShare: 0.3,
  },
  epp: {
    label: "Seguridad y EPP",
    hint: "Verificar casco, chaleco o zonas restringidas",
    camera: [600, 1500],
    dev: [10000, 22000],
    laborShare: 0.5,
    defectShare: 0.5,
  },
  calibre: {
    label: "Calibre y clasificación",
    hint: "Medir tamaño, color o madurez de fruta y productos",
    camera: [1800, 4000],
    dev: [15000, 30000],
    laborShare: 0.7,
    defectShare: 0.5,
  },
  inventario: {
    label: "Inventario y lectura",
    hint: "Leer etiquetas, patentes o códigos sin escanear",
    camera: [800, 2000],
    dev: [10000, 20000],
    laborShare: 0.7,
    defectShare: 0.4,
  },
};

export const EDGE_DEVICE = { price: [1200, 2500], camerasPerDevice: 4 };
export const EXTRA_CAMERA_DEV_FACTOR = 0.08;
export const ANNUAL_MAINTENANCE_RATE = 0.15;

export const faqs = [
  {
    q: "¿Cuánto cuesta implementar visión artificial en una empresa?",
    a: "Un proyecto típico de visión artificial con 1–4 cámaras parte en torno a USD 10.000 y puede superar los USD 40.000 en control de calidad de alta exigencia. El costo se reparte entre cámaras e iluminación, equipo de procesamiento en planta, desarrollo y entrenamiento del modelo, y mantenimiento anual. La calculadora entrega un rango referencial según tu caso.",
  },
  {
    q: "¿En cuánto tiempo se recupera la inversión?",
    a: "Depende del costo de la inspección manual y de cuánto te cuestan hoy los defectos que llegan al cliente. En procesos con varias personas inspeccionando o con reclamos frecuentes, el payback suele estar entre 6 y 18 meses. Si el ahorro anual es menor que el mantenimiento, el proyecto no se justifica y la calculadora lo indica.",
  },
  {
    q: "¿Qué precisión tiene un sistema de visión artificial?",
    a: "Con buena iluminación y un producto de baja variabilidad, los modelos actuales superan el 95% de precisión en tareas como conteo o detección de defectos visibles. La precisión cae cuando la luz cambia durante el día, la línea es muy rápida o el producto varía mucho. Por eso conviene validar con un piloto sobre tus propios videos.",
  },
  {
    q: "¿Necesito cambiar mis cámaras actuales?",
    a: "No siempre. Para seguridad, EPP o conteo de cajas, las cámaras IP existentes suelen bastar. Para control de calidad o calibre normalmente se necesita una cámara industrial con lente e iluminación controlada, porque el detalle que hay que detectar es pequeño.",
  },
  {
    q: "¿Cuánto demora un proyecto de visión artificial?",
    a: "Un piloto sobre videos grabados toma 2–4 semanas. La implementación en planta, con instalación de cámaras, integración con tus sistemas y marcha blanca, suele tomar 2–4 meses según la cantidad de puntos de inspección.",
  },
  {
    q: "¿Los costos de la calculadora son exactos?",
    a: "No. Son rangos referenciales de mercado para dimensionar el proyecto y decidir si vale la pena avanzar. El costo final depende de tu línea, la iluminación, la integración requerida y el nivel de precisión que necesites.",
  },
];
