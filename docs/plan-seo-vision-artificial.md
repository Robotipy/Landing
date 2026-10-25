# Plan SEO: vender visión artificial sin tocar /analysis

Fecha: 24 de octubre de 2026

## 1. Diagnóstico

La página `/es/analysis` (YOAO) atrae tráfico por "análisis de video con IA" porque está optimizada literalmente para esa frase. Según `computer_vision/yoao/docs/estado-del-arte-analisis-de-video-ia.md`, se registran cerca de 50 personas al día, pero muchas buscan resumir reuniones, películas o videos en general, algo que YOAO no hace hoy. En Google esa consulta la dominan herramientas de consumo (ScreenApp, Geekflare).

Decisión: `/analysis` no se modifica, porque ya trae visitas y registros. Además, el producto "YOAO Insights" que se evalúa en ese documento atendería justamente esa demanda. Para vender visión artificial se crean páginas nuevas con su propia intención de búsqueda.

Lo que ya existía y se aprovecha: `/calculadora-vision-artificial`, `/calculadora-aforo-vehicular` y dos casos reales (municipio, con 1 hora de video procesada en 1,2 horas, e ingeniería vial, con estudios que pasaron de 7 días a 1).

## 2. Qué hace YOAO hoy (base para no prometer de más)

Según `computer_vision/yoao/docs/nuevas-plantillas-2026-09.md`:

- Analiza video grabado, no transmisiones en vivo. El discurso es medición y evidencia, no alarma.
- Detección estándar y aérea (dron), seguimiento con reidentificación.
- Zonas con entradas y salidas, movimientos origen a destino, presencia, ocupación y permanencia.
- EPP (casco), caídas y lectura de patentes.
- Clasificación de cada objeto con Gemini.

Control de calidad, calibre y análisis de video en vivo quedan como proyectos a medida. El video en vivo es la línea que se quiere desarrollar: la pilar lo ofrece con un CTA propio (`origen=vision-artificial-en-vivo`) para medir cuánta demanda llega.

## 3. Cómo buscan las empresas (actualizado el 25 de octubre de 2026)

Sin acceso a volúmenes (el conector de Ahrefs no está autorizado), se revisó el autocompletado de Google para Chile. Muestra qué frases escribe la gente, no cuántas veces.

| Lo que se escribe | Qué revela |
|---|---|
| "vision artificial" + python, curso, en inglés, urjc | El término solo es mayormente académico. Sirve como categoría, no como keyword principal. |
| "vision artificial industrial", "en la industria", "para control de calidad" | La intención de compra aparece cuando se le suma la industria o el problema. |
| "análisis de video con ia" + gratis, youtube, deportivo | Intención de consumo. Confirma por qué `/analysis` trae visitas que no compran. |
| "analítica de video" + hikvision, dahua, cctv; "cámaras con ia" + precio, para negocios, hikvision, dahua; "inteligencia artificial para cámaras de seguridad" | Las empresas buscan desde la cámara que ya tienen, muchas veces por marca. Es la oportunidad más grande. |
| "conteo de vehículos" + hikvision, dahua, cámara, sistema; "aforo vehicular" + formato, excel, manual, ejemplo; "conteo vehicular informe" | Consultoras e ingenieros de tránsito que hoy cuentan a mano. Es el cliente natural de YOAO. |
| "lectura de patentes chile", "software lectura de patentes", "cámara lectura de patentes" | Demanda clara y local. |
| "contador de personas para tienda", "automático"; "conteo de personas" + hikvision, dahua | Retail y recintos. |
| "detección de epp con ia" | Existe, con poco ruido. |

Conclusión: las empresas no buscan "visión artificial"; buscan el problema (contar vehículos, leer patentes, contar personas, detectar EPP) o la cámara ("cámaras con IA", "analítica de video Hikvision"). La pilar `/vision-artificial` queda como hub, y el tráfico comprador se captura con páginas y artículos por problema.

## 4. Páginas por problema

| URL | Keyword principal | Prioridad | Material que ya existe |
|---|---|---|---|
| `/es/vision-artificial/conteo-vehicular` | conteo de vehículos con cámara, aforo vehicular automático, sistema de conteo de vehículos | 1 | Dos casos reales, calculadora de aforo, videos de rotonda e intersección |
| `/es/vision-artificial/camaras-con-ia` | cámaras con inteligencia artificial, analítica de video Hikvision o Dahua, IA para cámaras de seguridad | 2 | Mensaje "funciona con tus cámaras actuales"; comparar la analítica que trae la cámara con YOAO |
| `/es/vision-artificial/lectura-de-patentes` | lectura de patentes Chile, software lectura de patentes | 3 | Capacidad ALPR de YOAO |
| `/es/vision-artificial/conteo-de-personas` | contador de personas para tienda, conteo de personas automático | 4 | Videos de fila y supermercado |
| `/es/vision-artificial/deteccion-epp` | detección de EPP con IA, detección de casco | 5 | Video de la obra con casco y sin casco |
| `/es/vision-artificial/control-de-calidad` | visión artificial para control de calidad, visión artificial industrial | 6 | Falta un caso real; publicar cuando exista |

Cada subpágina usa el mismo diseño de la pilar (video, texto, FAQ con schema) y enlaza a la pilar y a su calculadora cuando existe.

## 5. Contenido de blog

Ordenado por prioridad. Los dos primeros apuntan a búsquedas que hoy hacen los compradores más probables de YOAO.

| # | Título tentativo | Keyword | Tipo |
|---|---|---|---|
| 1 | Cómo hacer un aforo vehicular: formato, plantilla en Excel y cómo automatizarlo | aforo vehicular formato, excel, manual | Guía con plantilla descargable |
| 2 | Analítica de video en cámaras Hikvision y Dahua: qué trae la cámara y qué no | analítica de video hikvision, dahua | Comparación honesta |
| 3 | Caso de éxito: conteo vehicular para un municipio | conteo de vehículos con cámara | Caso (formato `caso-exito-*`) |
| 4 | Caso de éxito: estudios de tránsito de 7 días a 1 | estudio de tránsito vehicular | Caso |
| 5 | Cámaras con IA: ¿comprar nuevas o agregar IA a las que ya tienes? | cámaras con inteligencia artificial precio | Guía de decisión |
| 6 | Lectura de patentes en Chile: cómo funciona y qué exige la Ley 21.719 | lectura de patentes chile | Guía |
| 7 | Contador de personas para tiendas: opciones, precisión y costos | contador de personas para tienda | Guía |
| 8 | Detección de EPP con IA en faenas: qué se puede medir con las cámaras actuales | detección de epp con ia | Guía |
| 9 | Visión artificial para control de calidad: cuándo conviene y cuándo no | visión artificial para control de calidad | Guía |

Los casos de éxito de visión artificial hoy solo viven como tarjetas en `/casos-exito`. Publicarlos como artículos, con el video, las cifras y, si el cliente lo autoriza, su nombre, les da una URL propia que puede posicionar y que los LLM pueden citar.

## 6. Autoridad y señales externas

- Publicar el caso del municipio con nombre si el cliente lo autoriza.
- Un video demo por caso de uso en YouTube, con transcripción y capítulos, titulado con la keyword del problema (por ejemplo "Conteo vehicular automático con IA desde un dron"). Ya existen los clips anotados en `referencias-video/salida`.
- Agregar al Anexo A de `plan-seo-llm-2026.md` prompts como "empresa de visión artificial en Chile" o "cómo medir filas con cámaras".

## 7. Medición

| Indicador | Cómo |
|---|---|
| Impresiones de consultas de visión artificial | Search Console, regex `visi[oó]n|computer|c[aá]mara|conteo|aforo|filas|estacionamiento` |
| Posición de `/vision-artificial` | Search Console por página |
| Leads desde la pilar | Los CTA precargan el comentario del formulario ("Me interesa un proyecto de visión artificial" o "... en vivo"), así que el lead llega identificado. El parámetro `origen` queda en la URL para GA4, pero el formulario no lo guarda |
| Que `/analysis` no pierda tráfico | Comparar clics semanales antes y después |

## 8. Orden de ejecución

1. Semanas 1 y 2: subpágina de conteo vehicular y el artículo del aforo con plantilla en Excel.
2. Semanas 3 y 4: los dos casos de éxito como artículos y el artículo de Hikvision y Dahua.
3. Semanas 5 a 8: subpáginas de cámaras con IA y lectura de patentes, artículos 5 a 7.
4. Semanas 9 a 12: conteo de personas y EPP, artículos 8 y 9. Control de calidad cuando exista un caso.
5. Desde la semana 1: videos de YouTube con los clips anotados y revisión mensual en Search Console.
