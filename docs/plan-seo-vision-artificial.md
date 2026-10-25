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

## 3. Clusters de keywords

Volúmenes por validar en Search Console y Ahrefs o Keyword Planner.

| Cluster | Keywords | Página destino |
|---|---|---|
| Servicio | visión artificial para empresas, empresa de visión artificial Chile, desarrollo de visión artificial, computer vision empresas | `/es/vision-artificial` (creada) |
| Conteo y tránsito | conteo vehicular con cámaras, aforo vehicular automático, estudio de tránsito con video | Subpágina + calculadora de aforo |
| Filas | tiempo de espera en filas, medición de filas con cámaras, gestión de filas | Subpágina |
| Estacionamientos | ocupación de estacionamientos, rotación de estacionamientos, estudio EISTU estacionamientos | Subpágina |
| Logística | gestión de patio logístico, tiempo de espera de camiones, uso de andenes | Subpágina |
| Seguridad | detección de casco con cámaras, detección de caídas, zonas restringidas | Subpágina |
| Calidad | inspección visual automatizada, control de calidad con visión artificial | Sección a medida de la pilar |
| Costo | cuánto cuesta un sistema de visión artificial | Calculadora existente |

En español el término comercial es "visión artificial". "Computer vision" y "visión computacional" van como sinónimos dentro del texto.

## 4. Páginas

| URL | Estado | Rol |
|---|---|---|
| `/es/vision-artificial` | Creada | Pilar: casos de uso (YOAO y a medida), casos reales, proceso, cámaras, FAQ con schema, CTA a reunión |
| `/es/vision-artificial/aforos-vehiculares` | Pendiente | Caso municipio e ingeniería vial, enlace a calculadora de aforo |
| `/es/vision-artificial/filas-y-tiempos-de-espera` | Pendiente | Plantilla 3.1 de YOAO |
| `/es/vision-artificial/estacionamientos` | Pendiente | Plantilla 3.2 |
| `/es/vision-artificial/patio-logistico` | Pendiente | Plantilla 3.3 |
| `/es/vision-artificial/seguridad-casco-caidas` | Pendiente | Plantilla 3.4, más EPP y caídas |

Las subpáginas se apoyan en las fichas de `nuevas-plantillas-2026-09.md`, que ya traen problema, entregables, respaldo de mercado y competencia. Conviene publicarlas cuando cada plantilla esté cargada en YOAO, para que el CTA "Probar YOAO" funcione.

La pilar enlaza a `/analysis` (bloque YOAO) y recibe enlaces del footer y de las dos calculadoras. `/analysis` no se toca.

## 5. Contenido de blog

| # | Título tentativo | Keyword |
|---|---|---|
| 1 | Qué es la visión artificial y qué problemas resuelve en una empresa | qué es la visión artificial |
| 2 | Caso de éxito: conteo vehicular automático para un municipio | conteo vehicular con cámaras |
| 3 | Cuánto cuesta un proyecto de visión artificial en Chile | costo visión artificial |
| 4 | Cómo medir el tiempo de espera en filas con las cámaras que ya tienes | tiempo de espera en filas |
| 5 | Estudios EISTU e IMIV con video: aforos y estacionamientos sin aforadores | aforo vehicular EISTU |
| 6 | Visión artificial y la Ley 21.719: qué cuidar al analizar video | visión artificial datos personales |
| 7 | Auditoría de casco y zonas restringidas en faenas con video | detección de casco con cámaras |
| 8 | Visión artificial vs. revisión manual de video: comparación de costos | ROI visión artificial |

## 6. Autoridad y señales externas

- Publicar el caso del municipio con nombre si el cliente lo autoriza.
- Un video demo por caso de uso en YouTube, con transcripción y capítulos.
- Agregar al Anexo A de `plan-seo-llm-2026.md` prompts como "empresa de visión artificial en Chile" o "cómo medir filas con cámaras".

## 7. Medición

| Indicador | Cómo |
|---|---|
| Impresiones de consultas de visión artificial | Search Console, regex `visi[oó]n|computer|c[aá]mara|conteo|aforo|filas|estacionamiento` |
| Posición de `/vision-artificial` | Search Console por página |
| Leads desde la pilar | Los CTA precargan el comentario del formulario ("Me interesa un proyecto de visión artificial" o "... en vivo"), así que el lead llega identificado. El parámetro `origen` queda en la URL para GA4, pero el formulario no lo guarda |
| Que `/analysis` no pierda tráfico | Comparar clics semanales antes y después |

## 8. Orden de ejecución

1. Semana 1: publicar `/vision-artificial` y medir la línea base.
2. Semanas 2 a 4: subpáginas de aforos y filas, posts 1 a 3.
3. Semanas 4 a 8: estacionamientos, patio logístico y seguridad, posts 4 a 8.
