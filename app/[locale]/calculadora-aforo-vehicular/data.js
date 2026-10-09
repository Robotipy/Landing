export const PAGE_PATH = "/calculadora-aforo-vehicular";

export const PAGE_TITLE = "Calculadora de costo de aforo vehicular | Robotipy";

export const PAGE_DESCRIPTION =
  "Compara cuánto cuesta un aforo vehicular manual versus un conteo por video con IA. Ingresa intersecciones y horas, y obtén costo y ahorro al instante. Gratis.";

export const SIGNUP_URL =
  "https://analysis.robotipy.dev/signup?utm_source=robotipy.com&utm_medium=calculadora&utm_campaign=aforo-vehicular";

export const YOAO_PRICE_PER_HOUR = { standard: 7, drone: 14 };
export const CREDITS_PER_MINUTE = { standard: 1, drone: 2 };
export const CREDITS_PER_PACK = 60;

export const faqs = [
  {
    q: "¿Qué es un aforo vehicular?",
    a: "Es el conteo de los vehículos que pasan por un punto o intersección en un período definido, normalmente separado por tipo de vehículo y por movimiento (de qué acceso viene y hacia dónde gira). Es la base de los estudios de tránsito, de impacto vial y del diseño de semáforos.",
  },
  {
    q: "¿Cuánto cuesta un aforo vehicular?",
    a: "Un aforo manual cuesta la suma de las horas de cada aforador en terreno más la digitación y revisión de las planillas. En una intersección de cuatro accesos se necesitan varias personas por período. Con análisis de video en YOAO pagas USD 7 por hora de video analizada, sin costo fijo ni mínimo, y solo necesitas grabar.",
  },
  {
    q: "¿Qué video sirve para el conteo?",
    a: "Video de cámara fija, dron o celular, en formato MP4, MOV, AVI o MKV. Sobre una imagen del video se marcan los accesos y los movimientos a contar, sin programar. El video de dron a gran altura o el streaming se cobra a USD 14 por hora.",
  },
  {
    q: "¿Qué entrega el conteo por video?",
    a: "Video anotado con cada vehículo marcado, conteos cada 5, 15, 30 o 60 minutos o por ciclo de semáforo con la ventana pico, matriz de origen y destino por giro, clasificación en automóvil, camioneta, camión, bus, furgón, motocicleta, bicicleta y peatón, y reportes en Excel, CSV y PDF.",
  },
  {
    q: "¿Cómo verifico que el conteo es correcto?",
    a: "Cada vehículo aparece marcado en el video anotado, así que puedes revisar cualquier intervalo a simple vista y compararlo con el conteo entregado. En un aforo manual, en cambio, no queda registro para auditar lo que anotó cada aforador.",
  },
  {
    q: "¿Cómo se cobra YOAO?",
    a: "Con créditos: 1 crédito equivale a 1 minuto de video y un pack de 60 créditos cuesta USD 7. El video de dron a gran altura o streaming usa 2 créditos por minuto. No hay licencias, instalación ni abono mensual, y los valores son sin impuestos.",
  },
];
