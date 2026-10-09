# Plan de posicionamiento en Google y en modelos de IA

Robotipy, octubre 2026 a marzo 2027

Preparado el 1 de octubre de 2026. La investigación base considera documentación oficial, estudios y publicaciones disponibles hasta septiembre de 2026. Las fuentes están en el Anexo C.

## Resumen ejecutivo

1. En mayo de 2026 Google publicó su guía de optimización para IA y fue explícito: optimizar para búsqueda generativa sigue siendo SEO. No hay atajos técnicos. llms.txt, schema especial o contenido "fragmentado para IA" no mueven la aguja en Google.
2. Lo que más se asocia a ser mencionado por ChatGPT, AI Mode y AI Overviews son las menciones de marca en YouTube y en la web, por encima de los backlinks. En consultas profesionales, LinkedIn es el dominio más citado por los seis grandes motores.
3. Los modelos citan sobre todo el primer tercio de cada página (44%), prefieren contenido actualizado hace menos de tres meses y usan los encabezados con forma de pregunta como si fueran el prompt del usuario. Eso define la plantilla de posts y de FAQ de este plan.
4. Las FAQ siguen sirviendo, pero por su contenido. Desde el 7 de mayo de 2026 Google no muestra resultados enriquecidos de FAQ y ningún estudio muestra que el schema FAQPage cause más citas. El valor está en pares pregunta y respuesta autocontenidos, con cifras y nombres propios, escritos como alguien le preguntaría a ChatGPT.
5. Por primera vez hay datos oficiales de visibilidad en IA: el informe de rendimiento de IA generativa de Search Console (abierto a todos desde el 31 de agosto de 2026) y AI Performance de Bing Webmaster Tools, que muestra las consultas con las que Copilot citó tu sitio. Son la base de la medición.
6. robotipy.com tiene una base técnica sana (renderizado en servidor, robots.txt abierto, Markdown para agentes, precios publicados), pero hay cuatro problemas que corregir antes de producir más contenido. El más grave: /about muestra un equipo ficticio de plantilla.
7. Ninguna herramienta tiene volumen real de prompts. Las que lo ofrecen lo estiman con paneles que casi no cubren Chile. Sirven para descubrir cómo se redactan las preguntas y para medir menciones; para Chile, la mejor señal es Bing AI Performance más Search Console más las preguntas de ventas. Stack recomendado: gratis el primer mes y SE Visible Basic (USD 99 al mes, cubre Chile) desde noviembre.
8. Meta provisional: que Robotipy aparezca mencionado o citado en al menos 30% de un set fijo de 60 prompts (Anexo A) en ChatGPT, Gemini, AI Mode, Copilot y Perplexity al 31 de marzo de 2027. Se recalibra con la línea base de la semana 1.

## 1. Supuestos

| Variable | Supuesto |
|---|---|
| Plazo | 26 semanas, del 5 de octubre de 2026 al 31 de marzo de 2027 |
| Mercado | Chile primero. Argentina, Perú, Colombia y México en segundo plano. Blog solo en español |
| Presupuesto | No definido. La sección 14 propone tres niveles |
| Equipo | Danilo y Gabriel Toro, con Claude como apoyo de redacción, desarrollo y medición |
| Capacidad | 2 piezas nuevas y 1 actualización por semana, más 1 video cada 3 a 4 semanas |
| Estacionalidad | Baja actividad B2B entre el 20 de diciembre y fines de febrero. Se usa para producir; los lanzamientos grandes van en marzo |

## 2. Visión general de la campaña

- Nombre: Robotipy responde.
- Resumen: convertir robotipy.com en la fuente que Google y los asistentes de IA usan para responder preguntas sobre automatización de procesos en Chile, y lograr que recomienden a Robotipy cuando alguien busca proveedor.
- Objetivo principal: al 31 de marzo de 2027, Robotipy aparece mencionado o citado en al menos 30% de los 60 prompts del set de seguimiento, en al menos 3 de los 5 motores medidos.
- Objetivos secundarios:
  1. Triplicar las impresiones del informe de IA generativa de Search Console respecto de octubre de 2026.
  2. Triplicar las citas mensuales en Bing AI Performance respecto de la línea base.
  3. 10 leads calificados por trimestre con origen declarado "ChatGPT u otra IA" o referidos desde un dominio de IA.
  4. 15 menciones nuevas de Robotipy en sitios de terceros (directorios, medios, partners, clientes).

## 3. Qué cambió en la búsqueda a septiembre de 2026

### 3.1 Escala

| Plataforma | Dato | Fuente |
|---|---|---|
| Google AI Overviews | Más de 2.500 millones de usuarios mensuales; presente en 48% de las consultas monitoreadas (feb 2026) | Alphabet jun 2026, BrightEdge feb 2026 |
| Google AI Mode | Más de 1.000 millones de usuarios mensuales. En Chile desde agosto 2025 y en español desde septiembre 2025. En I/O 2026 se unificó con AI Overviews | Alphabet, Google I/O 2026, TechCrunch |
| ChatGPT | 1.200 millones de usuarios semanales (DevDay, 29 sep 2026). 24% de los mensajes son búsqueda de información | OpenAI, NBER |
| Gemini (app) | 950 millones de usuarios mensuales | Alphabet Q2 2026 |
| Cuota de tráfico web de chatbots (ago 2026) | ChatGPT 55,5%, Gemini 25,6%, Claude 9,3%, Copilot 1,6%, Perplexity 0,9% | Similarweb |

Lectura para Robotipy: ChatGPT y Gemini (incluido AI Mode) concentran más del 80% del uso. Claude creció de 1,9% a 9,3% en un año y conviene incluirlo en la medición. Perplexity bajó y queda como motor secundario.

### 3.2 Clics

- Seer Interactive (abr 2026, 53 marcas): el CTR orgánico baja de 3,82% a 2,36% cuando aparece un AI Overview. Las marcas citadas dentro del resumen tienen más del doble de CTR que las no citadas (2,07% frente a 0,94%).
- Ahrefs (feb 2026): la posición 1 pierde 58% de los clics cuando hay AI Overview.
- Tráfico desde IA: 1,08% del total en promedio, pero 2,80% en tecnología, la industria más alta (Conductor, nov 2025). Desde el 7 de mayo de 2026 ChatGPT muestra enlaces de marca clicables, y cerca del 60% de esos referidos llega a la home.
- La conversión del tráfico de IA es mejor en B2B según casos individuales (Ahrefs: 0,5% de las visitas generó 12,1% de los registros), aunque hay estudios de ecommerce que muestran lo contrario.

Consecuencia: el objetivo deja de ser solo tráfico. Lo que importa es ser la marca nombrada en la respuesta, y que la home y las páginas de servicio conviertan a quien llega desde un asistente.

### 3.3 Cómo eligen fuentes los modelos

| Factor | Evidencia | Implicancia |
|---|---|---|
| Menciones en YouTube | Correlación 0,74 con visibilidad en ChatGPT, AI Mode y AI Overviews; la más alta medida (Ahrefs, 75.000 marcas, dic 2025) | Canal de YouTube con demos por proceso |
| Menciones de marca en la web | Correlación 0,66 a 0,71, por encima de backlinks (0,25 a 0,30) | Directorios, medios, partners y clientes que nombren a Robotipy |
| LinkedIn | Dominio más citado en consultas profesionales en las seis plataformas (Profound, mar 2026) | Posts semanales en perfiles personales y artículos |
| Plataformas de reseñas | Estar en varias se asocia a 4,6 a 6,3 citas en ChatGPT frente a 1,8 sin presencia (SE Ranking, nov 2025) | Clutch, GoodFirms, Google Business Profile |
| Frescura | Páginas actualizadas hace menos de 3 meses: 6,0 citas frente a 3,6. El 76% de las páginas más citadas por ChatGPT se actualizó en los últimos 6 meses | Política de actualización cada 90 días con fecha visible |
| Posición en el texto | 44% de las citas sale del primer 30% del contenido. El lenguaje definicional ("X es...") recibe el doble de citas | Respuesta directa al inicio |
| Encabezados con pregunta | 78% de las citas que contienen preguntas sale de encabezados: el modelo trata el H2 como el prompt | H2 y H3 en forma de pregunta |
| Largo de sección | Secciones de 120 a 180 palabras entre encabezados rinden mejor que las de menos de 50 | Secciones medianas, no fragmentos sueltos |
| Velocidad | FCP bajo 0,4 s se asocia a 6,7 citas frente a 2,1 sobre 1,13 s | Mantener el sitio rápido |
| Ranking en buscadores | La proporción de citas de AI Overviews que viene del top 10 cayó de 76% a 38% (Ahrefs, mar 2026), por la búsqueda en abanico (fan-out). ChatGPT se apoya en Bing y también en Google | Estar bien indexado en Google y Bing es necesario, pero no basta |

Sobre listas del tipo "mejores X": en 2025 eran 44% de las páginas citadas por ChatGPT, pero tras GPT-5.6 (ago 2026) cayeron a la mitad. Es un formato volátil y no conviene construir la estrategia sobre él.

No existen estudios de citación para Chile ni para B2B en español. El único dato por idioma (Profound, México) indica que AI Overviews en español cita redes sociales 1,4 veces más que en inglés, y que ChatGPT las cita la mitad. Por eso la medición propia (sección 10) es indispensable.

### 3.4 Lo que dicen Google y Bing

Google (guía "AI optimization", mayo y julio 2026):
- No hay requisitos adicionales para aparecer en AI Overviews o AI Mode: basta estar indexado y ser elegible para snippet.
- No sirven llms.txt, fragmentar el contenido, reescribir "para la IA", perseguir menciones inauténticas ni schema especial.
- Sí sirven el contenido "non-commodity" (que no se pueda reemplazar por uno genérico), el HTML semántico, las buenas prácticas de JavaScript, y las imágenes y el video.

Bing (febrero y mayo 2026):
- Recomienda encabezados, tablas, FAQ, datos que respalden lo que se afirma, datos estructurados, frescura e IndexNow.
- Ahí choca con Google en dos puntos: Bing sí valora el schema y la organización en bloques.

Como ChatGPT y Copilot se apoyan en Bing, el plan sigue ambas guías. Escribir bien para personas cubre a Google. Mantener JSON-LD, FAQ e IndexNow cubre a Bing.

### 3.5 Datos estructurados y llms.txt

- FAQPage: Google dejó de mostrar el resultado enriquecido el 7 de mayo de 2026 y retiró el soporte del Rich Results Test en junio. El marcado que no se usa no causa problemas.
- Schema y LLM: Ahrefs (mayo 2026, 1.885 páginas contra 4.000 de control) no encontró un efecto causal de agregar JSON-LD sobre las citas en ChatGPT ni en AI Mode. ChatGPT y Perplexity leen el JSON-LD como texto plano.
- llms.txt: Google no lo usa. En un estudio de 83 sitios, OpenAI lo leyó 7 veces y Anthropic 9 en 12 semanas. Mantenerlo es barato, pero su impacto es marginal.

Decisión del plan: mantener el JSON-LD (Organization, Article, FAQPage, Person) porque no perjudica y Bing lo usa, pero no contar con él como palanca. La palanca es el contenido visible.

### 3.6 Rastreadores de IA

| Bot | Uso | Decisión para Robotipy |
|---|---|---|
| Googlebot | Search, AI Overviews y AI Mode | Permitir |
| Bingbot | Bing y Copilot; base de ChatGPT | Permitir |
| OAI-SearchBot | Búsqueda de ChatGPT | Permitir |
| ChatGPT-User | Visitas que pide un usuario | Permitir |
| Claude-SearchBot y Claude-User | Búsqueda y visitas de Claude | Permitir |
| PerplexityBot y Perplexity-User | Búsqueda de Perplexity | Permitir |
| Applebot | Siri, Spotlight y Safari | Permitir |
| GPTBot, ClaudeBot, Google-Extended | Entrenamiento de modelos | Recomendado permitir: para una marca de servicios, estar en el entrenamiento ayuda a que el modelo "conozca" a Robotipy |

GPTBot, ClaudeBot y PerplexityBot no ejecutan JavaScript. Todo el contenido importante tiene que estar en el HTML que entrega el servidor. Hoy se cumple, y hay que cuidar que siga así.

## 4. Diagnóstico de robotipy.com (1 de octubre de 2026)

### 4.1 Lo que ya funciona

- Next.js con Server Components: el contenido está en el HTML sin depender de JavaScript.
- robots.txt permite todos los rastreadores. El sitio está en Vercel, sin el bloqueo por defecto de bots que Cloudflare activó en septiembre de 2026.
- El middleware entrega Markdown cuando el cliente lo pide (`Accept: text/markdown`). Es útil para agentes y pocos sitios lo tienen.
- 28 posts, 15 de ellos con FAQ y JSON-LD FAQPage (66 preguntas).
- Precios propios publicados: USD 6.000 promedio por proyecto RPA, licencia de USD 2.500 solo si el cliente no la tiene, soporte desde USD 300 y desarrollo a medida entre USD 5.500 y 11.000. Es justo el dato propio que los modelos citan ante "¿cuánto cuesta...?".
- Seis casos de éxito con industria y cifras, calculadora de ROI y la página /ai-info.

### 4.2 Problemas a corregir

| Prioridad | Hallazgo | Por qué importa | Corrección |
|---|---|---|---|
| 1 | /about muestra un equipo de plantilla: Alice Johnson (CEO y Fundadora), Bob Williams (CTO), Charlie Brown (Lead Developer) y Diana Prince (Líder UX/UI). Viene de `messages/es.json` y está en producción | Un modelo que lea /about puede afirmar que la CEO de Robotipy es Alice Johnson. Un comprador que verifica pierde la confianza | Reemplazar por el equipo real: nombre, cargo, foto, LinkedIn y trayectoria. Agregar schema Person con `sameAs` |
| 1 | El sitemap lista las 37 URLs del blog como `/es/blog/...`, que redirigen con 308 a `/blog/...`. También declara alternativas en inglés y portugués para páginas que redirigen | El buscador recibe URLs que no son canónicas. Bing e IndexNow trabajan con las URLs del sitemap | Generar `/blog/<slug>` en `next-sitemap.config.js` y quitar hreflang en el blog y en las páginas que existen solo en español |
| 1 | Las 65 URLs del sitemap tienen el mismo `lastmod` (el build del 21 de agosto de 2026) | La frescura es una de las señales más fuertes, y un `lastmod` que no es real se ignora | Agregar `updatedAt` a cada post y usarlo como `lastmod` |
| 2 | En el schema Article, `dateModified` es igual a `publishedAt`, el `@id` no coincide con el canonical (falta www y el locale) y el autor no tiene url ni `sameAs` | No hay señal de actualización y la autoría no se conecta con personas reales | Usar `updatedAt`, el canonical como `@id` y un autor con url a su página y a LinkedIn |
| 2 | El schema Organization es de tipo Corporation, con url sin www, logo en una ruta con hash de build y sin dirección, `areaServed`, `foundingDate`, `founder`, `knowsAbout` ni `contactPoint` | Es la ficha de entidad de la que los modelos sacan qué es Robotipy | Reescribir como Organization con datos completos e idénticos a LinkedIn y Google Business Profile |
| 2 | /rpa, /automation, /industries/*, /casos-exito y /about no tienen FAQ ni respuesta directa. /rpa abre con "Bienvenido a la era de la automatización", repite H1 y usa cifras de Rocketbot en vez de propias | El primer 30% de la página es lo que más se cita, y hoy ese espacio no dice qué hace Robotipy, para quién, a qué precio ni en qué plazo | Bloque inicial de 2 a 3 oraciones con definición, cliente típico, precio desde y plazo, más una FAQ de 6 a 10 preguntas |
| 2 | Muchas de las 66 FAQ del blog no se entienden fuera de contexto: "¿Funciona con SAP?", "¿Cuánto tarda en implementarse?" | El modelo extrae el par pregunta y respuesta suelto. Sin el sujeto, no responde nada | Reescribir con el sujeto explícito (sección 9.3) |
| 3 | No se publica nada desde el 30 de julio de 2026 | La frescura pesa, en el sitio y en el tema | Retomar la cadencia y actualizar lo publicado |
| 3 | `llms.txt` desactualizado: no lista posts, IDP, agentes de IA, integración ERP ni casos, y apunta a `/es/blog` | Impacto marginal, pero mantenerlo es barato | Generarlo automáticamente desde `content.js` |
| 3 | El formulario de contacto (`components/ClientForm.js`) no pregunta cómo nos conoció la persona. El canal por defecto "AI Assistant" de GA4 no incluye Claude ni Perplexity | Parte del tráfico de IA llega como directo o como google / organic. Sin una pregunta declarada no hay atribución | Agregar el campo "¿Cómo nos conociste?" con la opción "ChatGPT, Gemini u otra IA" y un grupo de canales "IA" propio en GA4 (sección 10.2) |
| 3 | El CLAUDE.md del repo pide validar FAQPage en el Rich Results Test | Google retiró el soporte de FAQ de esa herramienta en junio de 2026 | Cambiar la regla por validator.schema.org y por la revisión de texto visible igual a schema |
| 3 | El autor Ivan Cabrera no está en la lista de autores del sitemap. Gabriel Toro e Ivan Cabrera enlazan a la página de empresa y no a su LinkedIn personal | Autoría débil | Completar los perfiles |

## 5. Audiencia

### 5.1 Segmentos

| Segmento | Perfil | Dolor | Qué le pregunta a la IA |
|---|---|---|---|
| Primario | Gerente de finanzas o administración, o contralor, de empresa mediana o grande en Chile (100 a 2.000 personas): agro y exportación, minería, industria, logística, servicios financieros | Equipos que pasan días cargando facturas, conciliando cartolas o armando reportes en Excel y SAP; cierres lentos; errores | "¿Cómo automatizo la conciliación bancaria si uso SAP y tengo cuentas en 4 bancos?" |
| Secundario | Jefe de TI o de transformación digital que evalúa RPA, agentes de IA o API, o que ya tiene Rocketbot y necesita implementador o soporte | Elegir tecnología sin equivocarse; falta de equipo interno | "Rocketbot o UiPath para una empresa chilena de 500 personas" |
| Terciario | Dueño o gerente general de pyme | No sabe si la automatización es para su tamaño ni cuánto cuesta | "¿Conviene RPA para una pyme? ¿Cuánto cuesta?" |
| Complementario | Consultoras de RPA y software (para Projects y Monitor) | Gestión de proyectos y monitoreo de robots | "Software para monitorear robots Rocketbot" |

Perfil breve: gerente de finanzas de una empresa chilena mediana que tiene a su equipo atrapado en tareas manuales entre el ERP, los bancos y el SII, y busca reducir horas y errores sin contratar más gente. Descubre soluciones en Google, ChatGPT, LinkedIn y por recomendación de pares. Le importan el costo total, el plazo, que el robot no se caiga y que alguien responda en Chile.

### 5.2 Cómo pregunta a la IA

Los prompts son largos y vienen con contexto: industria, ERP, tamaño, presupuesto. Una sola pregunta puede reemplazar 5 búsquedas en Google. El modelo descompone el prompt en varias búsquedas (fan-out) y arma la respuesta con fragmentos de distintas fuentes. Para aparecer hay que tener una respuesta precisa a cada una de esas subpreguntas: qué es, cuánto cuesta, cuánto demora, con qué ERP funciona, quién lo hace en Chile.

| Etapa | Ejemplos de prompt | Pieza que responde |
|---|---|---|
| Problema | "¿Cómo reduzco el tiempo de cierre contable?", "¿Se puede automatizar la descarga de facturas del SII?" | Guía de proceso |
| Solución | "¿RPA o agentes de IA para cuentas por pagar?", "¿Qué es IDP?" | Comparativa, definición |
| Proveedor | "Empresas de RPA en Chile", "Partner de Rocketbot en Chile", "¿Quién automatiza SAP en Santiago?" | Página de servicio, Robotipy en datos, menciones de terceros |
| Validación | "¿Robotipy es confiable?", "¿Cuánto cobra Robotipy?", "Casos de Robotipy" | Casos, reseñas, about, FAQ comercial |

## 6. Mensajes clave

Mensaje central: Robotipy es Platinum Partner de Rocketbot en Chile y automatiza procesos de finanzas y operaciones con RPA e IA, con precio publicado y resultados medidos en clientes reales.

| Mensaje de apoyo | Prueba |
|---|---|
| Precio claro desde el inicio | USD 6.000 promedio por proyecto, diagnóstico sin costo, licencia de USD 2.500 solo si no la tienes, soporte opcional desde USD 300 |
| Experiencia en procesos reales de Chile (SAP, bancos, SII, ERP locales) | Casos de siderurgia (órdenes SAP), agroindustria, vitivinícola (cartolas y factoring), agropecuario (conciliación bancaria), minería (costos), logística |
| Honestidad técnica: te decimos cuándo no conviene RPA | Posts "RPA vs desarrollo a medida", "RPA vs IA agéntica", "Errores comunes" |
| Robots monitoreados y mantenidos después de la entrega | Monitor (producto propio), servicio de mantenimiento, post de monitoreo en producción |

Para los modelos, la consistencia de la entidad pesa tanto como el mensaje. Hay que definir una ficha de hechos única y usarla igual en el sitio, LinkedIn, Google Business Profile, Clutch, la ficha de partner de Rocketbot y el schema: nombre legal, año de fundación, ciudad, países atendidos, fundadores, nivel de partner, número de proyectos entregados, industrias, plataformas, precio desde y plazo típico.

## 7. Estrategia por canal

| Canal | Tipo | Por qué | Formato | Esfuerzo |
|---|---|---|---|---|
| Sitio: páginas de servicio | Propio | Primer destino de quien llega desde un asistente, y fuente de la ficha de entidad | Bloque de respuesta inicial, FAQ, precio desde, casos enlazados | Medio |
| Blog | Propio | Responde las subpreguntas del fan-out con datos propios | Guías de proceso, comparativas, precios, casos (sección 8) | Alto |
| Centro de respuestas (FAQ) | Propio | Base de hechos en formato pregunta y respuesta | Hub de 40 a 60 preguntas (sección 9) | Medio |
| YouTube | Propio | Es la señal que más se correlaciona con visibilidad en IA, y AI Overviews en español cita mucho video | Demos de 3 a 8 minutos por proceso, con transcripción y capítulos | Alto |
| LinkedIn (perfiles personales y empresa) | Propio y ganado | Dominio más citado en consultas profesionales | 2 posts por semana de Danilo, 1 de Gabriel, 1 artículo al mes | Medio |
| Newsletter | Propio | Distribución y reciclaje de cada pieza | Quincenal | Bajo |
| Rocketbot | Ganado | Fuente de autoridad para "partner de Rocketbot en Chile" | Ficha de partner actualizada, caso copublicado, webinar conjunto | Medio |
| Directorios y reseñas | Ganado | Presencia en plataformas de reseñas asociada a más citas | Clutch, GoodFirms, Google Business Profile, G2 o Capterra para Monitor y Projects | Bajo |
| Medios y gremios de Chile | Ganado | Menciones de marca en sitios con autoridad | Nota del estudio propio, columnas en Diario Financiero o Trend TIC, charlas en gremios TI | Alto |
| Clientes | Ganado | Menciones de terceros con contexto real | Caso publicado también en el LinkedIn del cliente, testimonio en video | Medio |
| Google Ads | Pagado (opcional) | Captura de intención alta mientras el orgánico madura | Campaña de búsqueda para "empresa RPA Chile", "partner Rocketbot" | Medio |
| LinkedIn Ads | Pagado (opcional) | Amplificar el estudio propio hacia gerentes de finanzas | Contenido patrocinado del estudio | Bajo |

## 8. Tipo de contenido para los posts

### 8.1 Mezcla de formatos

| Formato | Responde a | Ejemplo | Peso |
|---|---|---|---|
| Guía de proceso chileno | "¿Cómo automatizo X?" | Cómo descargar automáticamente las facturas recibidas del SII | 30% |
| Comparativa y decisión | "¿X o Y?", "¿cuándo conviene?" | Rocketbot, UiPath o Power Automate en Chile: costos y soporte local en 2026 | 15% |
| Precio y costo | "¿Cuánto cuesta?" | Cuánto cuesta un agente de IA de atención al cliente en Chile | 10% |
| Caso de éxito con cifras | "¿Quién lo ha hecho?", validación | Caso minería: costos consolidados a diario en lugar de semanal | 15% |
| Datos propios | Contenido "non-commodity" | Estudio anual "Automatización en Chile 2027" con datos de proyectos | 10% |
| Actualidad regulatoria | Picos de búsqueda con fecha | Ley 21.719: qué cambia para robots y agentes desde el 1 de diciembre de 2026 | 10% |
| Definición anclada a Chile | "¿Qué es X?" | Qué es IDP y en qué se diferencia de un OCR | 10% |

Qué evitar:
- Rankings propios de "mejores empresas de RPA en Chile" donde Robotipy sale primero. El formato cayó a la mitad en ChatGPT tras GPT-5.6, y un comprador lo lee como autopromoción. Lo que sirve es aparecer en listas de terceros.
- Definiciones genéricas que ChatGPT ya responde solo ("qué es RPA" sin nada propio). Si un post no tiene un dato, un caso o una opinión de Robotipy, no aporta.
- Publicar en volumen con IA sin edición humana. Google lo trata como abuso de contenido a escala.

### 8.2 Anatomía de un post citable

1. Título igual a la pregunta como la haría una persona, con entidad y país cuando aplique: "Cuánto cuesta automatizar un proceso con RPA en Chile".
2. Las primeras 2 o 3 oraciones responden directo, en lenguaje definicional y con una cifra. Sin enlaces en esa primera respuesta.
3. Bajo el título: "Actualizado el [fecha]" y autor con cargo y enlace a su página y LinkedIn.
4. H2 en forma de pregunta. Cada sección abre con una respuesta autocontenida y se extiende entre 120 y 180 palabras.
5. Al menos una tabla: costos, plazos, comparación o pasos.
6. Al menos un dato propio de Robotipy con contexto: horas ahorradas, plazo real, precio, tasa de error antes y después.
7. Una sección "Cuándo no conviene". Diferencia el contenido y genera confianza.
8. FAQ de 5 a 8 preguntas autocontenidas al final (`<details>`), con el mismo array para el HTML y el JSON-LD.
9. Enlaces internos al servicio y al caso relacionado. CTA a /contact-us.
10. Video de YouTube embebido cuando exista.
11. Largo según la pregunta: de 600 a 1.000 palabras para respuestas puntuales y de 1.200 a 2.000 para guías. La evidencia sobre largo es contradictoria; lo que sí funciona es una página enfocada en una pregunta.

### 8.3 Reglas de redacción

- Nombrar las entidades completas: Rocketbot, SAP S/4HANA, SAP Business One, SII, Defontana, Banco de Chile. Evitar "la plataforma" o "el sistema".
- Cifras con unidad, moneda, año y origen: "USD 6.000 en promedio por proyecto (Robotipy, 2026)".
- Una idea por párrafo, oraciones cortas, segunda persona.
- Revisar cada post cada 90 días: actualizar cifras, agregar preguntas nuevas detectadas en la medición y cambiar `updatedAt`.
- Mantener las reglas de `CONTENT_GUIDELINES.md` (sin guion largo, sin emojis como viñeta).

### 8.4 Banco de temas priorizados

Finanzas y tributario (Chile):
1. Cómo descargar automáticamente las facturas recibidas del SII (Registro de Compras y Ventas).
2. Conciliación bancaria automática con cartolas de bancos chilenos: paso a paso y costos.
3. Qué parte del F29 se puede automatizar y qué parte no.
4. Rendiciones de gastos: cómo automatizar la revisión y la carga en el ERP.
5. Cobranza: recordatorios automáticos y conciliación de pagos recibidos.

ERP:
6. Qué se puede automatizar en SAP Business One con Rocketbot.
7. SAP S/4HANA: RPA por interfaz, BAPI o API, cuándo usar cada una.
8. Defontana, Softland y Nubox: qué automatizar por API y qué por RPA.

Personas y regulación:
9. Ley 21.719 de protección de datos personales: qué cambia para robots y agentes de IA desde el 1 de diciembre de 2026.
10. Ley de 40 horas (42 horas desde abril de 2026): cómo sostener la productividad con automatización.
11. Ley Marco de Ciberseguridad: cómo gestionar las credenciales que usan los robots.
12. Qué se puede automatizar en remuneraciones y Previred (validar con proyectos reales antes de publicar).

IA:
13. Agentes de IA en empresas chilenas: qué funciona en 2026 y qué todavía no.
14. IDP frente a OCR: extraer datos de facturas, guías de despacho y órdenes de compra.
15. RPA con IA: cuándo poner un modelo de lenguaje dentro de un robot.
16. Qué datos ve un agente de IA y cómo controlarlo.

Decisión de compra:
17. Rocketbot, UiPath o Power Automate en Chile: costos y soporte local en 2026.
18. Cómo elegir un proveedor de RPA en Chile: 12 preguntas antes de firmar.
19. Cuánto cuesta un agente de IA de atención al cliente.
20. Cuánto cuesta mantener un robot en producción.
21. Licencia de Rocketbot: qué incluye y cuándo hace falta.

Industria:
22. Exportadoras frutícolas: 8 procesos que se automatizan en temporada.
23. Minería: reportabilidad de costos automatizada.
24. Vitivinícolas: cartolas, factoring y exportación.
25. Estudios contables: qué automatizar primero.

Datos propios (pieza ancla del plan):
26. Estudio "Automatización en Chile 2027": datos anonimizados de los proyectos de Robotipy (horas ahorradas, plazos, costos, fallas por mes) más una encuesta a 50 a 100 gerentes de finanzas.

## 9. Páginas de FAQ pensadas para modelos de IA

### 9.1 Lo que dice la evidencia

- El schema FAQPage ya no genera resultados enriquecidos en Google, y ningún estudio muestra que cause más citas en los modelos.
- SE Ranking encontró que las páginas con sección FAQ no reciben más citas en promedio (3,8 frente a 4,1), aunque advierte un sesgo: las FAQ suelen estar en páginas de soporte simples.
- Lo que sí funciona es el formato: 78% de las citas que contienen preguntas sale de encabezados, porque el modelo trata la pregunta como el prompt y el párrafo siguiente como la respuesta.
- Bing recomienda explícitamente las FAQ y usa los datos estructurados.

Conclusión: la FAQ vale como base de hechos en formato pregunta y respuesta, escrita para que cada par se entienda solo. El schema se mantiene como complemento.

### 9.2 Arquitectura

1. Centro de respuestas en `/preguntas-frecuentes`: de 40 a 60 preguntas en 7 categorías. Un H2 por categoría, un H3 por pregunta y un ancla por pregunta (`#cuanto-cuesta-automatizar-un-proceso`). Respuestas de 40 a 90 palabras, enlace a la guía larga y fecha de actualización visible. Las respuestas van abiertas, sin acordeón, para que el primer párrafo sea texto principal de la página.
2. FAQ propia en cada página de servicio e industria: de 6 a 10 preguntas específicas de esa página, sin copiar las del hub.
3. Página "Robotipy en datos" (rehacer /ai-info): la ficha de hechos de la sección 6 en formato pregunta y respuesta. Responde "¿qué es Robotipy?", "¿quién la fundó?", "¿dónde está?", "¿con qué plataformas trabaja?", "¿cuánto cobra?". Es la página a la que apuntan los enlaces de marca de ChatGPT y el panel de entidad.
4. Las preguntas comerciales más valiosas (precio, plazo, comparativas) tienen además su propio post largo. El hub resume y enlaza.

Cada pregunta tiene una sola página con la respuesta completa. Las demás la resumen con otras palabras y enlazan, para no duplicar texto entre páginas.

### 9.3 Cómo escribir cada pregunta y respuesta

| Regla | Mal | Bien |
|---|---|---|
| Pregunta completa, con sujeto | ¿Funciona con SAP? | ¿Un robot de RPA puede cargar facturas de proveedores en SAP S/4HANA? |
| Con país cuando cambia la respuesta | ¿Cuánto cuesta? | ¿Cuánto cuesta automatizar un proceso con RPA en Chile? |
| Con la marca en las comerciales | ¿Tienen soporte? | ¿Robotipy da soporte después de entregar el robot? |
| Primera oración con sí, no o cifra | Depende de muchos factores... | Sí. El soporte es opcional y parte en USD 300 mensuales. |
| Cifras con moneda y año | Es económico | USD 6.000 en promedio por proyecto (2026) |
| Honestidad cuando la respuesta es no | (evitar la pregunta) | ¿Robotipy hace proyectos de menos de USD 2.000? No, salvo ajustes a robots que ya mantenemos. |

Reglas de implementación:
- Un solo array `faqs` alimenta el HTML y el JSON-LD, con texto idéntico (regla del CLAUDE.md).
- Respuestas en el HTML del servidor. `<details>` sirve para las FAQ al final de los posts; en el hub, respuestas abiertas.
- Sin enlaces en la primera oración de cada respuesta.
- La fecha de revisión de la página se actualiza cada vez que cambia una respuesta.
- Agregar al hub, cada mes, las preguntas nuevas detectadas en Bing AI Performance, en Search Console y en ventas.

### 9.4 Banco inicial de preguntas para el centro de respuestas

Robotipy como empresa:
1. ¿Qué es Robotipy y qué servicios ofrece?
2. ¿Dónde está Robotipy y en qué países trabaja?
3. ¿Robotipy es partner oficial de Rocketbot y qué significa ser Platinum Partner?
4. ¿Con qué plataformas de automatización trabaja Robotipy? (confirmar la lista: Rocketbot, Python y otras)
5. ¿En qué industrias tiene experiencia Robotipy?
6. ¿Quiénes fundaron Robotipy y quién dirige el equipo?
7. ¿Cuántos proyectos de automatización ha entregado Robotipy?

Precios y contratación:
8. ¿Cuánto cuesta automatizar un proceso con RPA en Chile?
9. ¿Cuánto cuesta la licencia de Rocketbot y cuándo hay que pagarla?
10. ¿Cuánto cuesta el soporte mensual de un robot?
11. ¿El diagnóstico inicial de Robotipy tiene costo?
12. ¿Cuánto cuesta un desarrollo de software a medida con Robotipy?
13. ¿Cuánto cuesta un chatbot o agente de IA para atención al cliente? (falta el dato)
14. ¿Cómo se paga un proyecto de automatización: precio cerrado o por hora? (falta el dato)
15. ¿Qué pasa si el proyecto cuesta más de lo cotizado?

RPA y tecnología:
16. ¿Qué es RPA y en qué se diferencia de una macro de Excel?
17. ¿Qué diferencia hay entre RPA y un agente de IA?
18. ¿Rocketbot o UiPath para una empresa chilena?
19. ¿Cuándo conviene una integración por API en lugar de RPA?
20. ¿RPA sirve para pymes o solo para empresas grandes?
21. ¿Qué procesos no conviene automatizar con RPA?
22. ¿Qué es IDP y para qué sirve?

Procesos de Chile:
23. ¿Se puede automatizar la descarga de facturas desde el SII?
24. ¿Se puede automatizar la conciliación bancaria con cartolas de bancos chilenos?
25. ¿Un robot puede cargar facturas de proveedores en SAP S/4HANA o SAP Business One?
26. ¿Se pueden automatizar procesos en Defontana, Softland o Nubox?
27. ¿Qué procesos de una exportadora frutícola se pueden automatizar?
28. ¿Qué procesos de finanzas conviene automatizar primero?

Implementación:
29. ¿Cuánto demora implementar un robot RPA?
30. ¿Qué tiene que entregar mi empresa para empezar un proyecto de automatización?
31. ¿Qué pasa con el robot si cambia la pantalla del sistema o el formato de un archivo?
32. ¿Quién mantiene el robot después de la entrega?
33. ¿Cómo se monitorea un robot en producción?
34. ¿El robot corre en la nube o en un servidor de mi empresa?

Seguridad y datos:
35. ¿El robot tiene acceso a información confidencial de mi empresa?
36. ¿Cómo afecta la Ley 21.719 de protección de datos a los robots y agentes de IA?
37. ¿Cómo se guardan las credenciales que usa un robot?
38. ¿Robotipy firma acuerdos de confidencialidad?

Capacitación y productos:
39. ¿Robotipy capacita a equipos internos en RPA e IA?
40. ¿Qué es Robotipy Monitor y para quién sirve?

Para las preguntas 1 a 15 hay que confirmar cada dato con Danilo antes de publicar. Varias respuestas ya existen en los posts y solo hay que adaptarlas.

### 9.5 Cambios en el repositorio

- Nueva ruta `app/[locale]/preguntas-frecuentes/page.js` (Server Component) con los datos en un archivo `faqs.js` por categoría y el JSON-LD FAQPage generado del mismo array.
- Componente de servidor `FaqSection` reutilizable para las páginas de servicio, que emite el HTML y el JSON-LD juntos.
- Campo `updatedAt` en cada post, usado en el schema, en el sitemap y en la fecha visible.
- `llms.txt` generado desde `content.js` y el hub de preguntas.
- Actualizar CLAUDE.md: cambiar la validación con Rich Results Test por validator.schema.org.

## 10. Plataformas para saber qué se pregunta a los modelos

### 10.1 Punto de partida: no existe volumen real de prompts

OpenAI, Google y Anthropic no publican qué le pregunta la gente a sus modelos. Los "volúmenes de prompts" que venden las herramientas son estimaciones, y cada una usa una base distinta:

| Herramienta | Cómo estima |
|---|---|
| Profound | Paneles de usuarios que aceptaron compartir sus conversaciones, corregidos con modelos estadísticos. Cubre 10 países y Chile no está entre ellos |
| Similarweb | Panel propio de "prompts reales". No publica metodología ni cobertura por país |
| Semrush | Clickstream de IA más su base de keywords de Google, con machine learning. Estima por tema, no por prompt |
| Ahrefs | Volumen de Google de la keyword madre multiplicado por un factor según el uso de cada plataforma. Ahrefs reconoce que no validó esa relación y que su muestra es más fuerte en inglés |
| Peec AI | Puntaje relativo de demanda de 1 a 5 |

Los paneles salen sobre todo de extensiones de Chrome de escritorio, sin apps ni móvil. Chile es una fracción mínima de esas muestras, y una consulta como "implementar Rocketbot con SAP en Chile" queda bajo el umbral de detección. Conclusión: las herramientas sirven para descubrir cómo se redactan las preguntas y para ordenar temas, nunca como cifra de demanda.

Los datos reales que existen son de tu propio sitio, y son gratis.

### 10.2 Fuentes oficiales y gratuitas

| Fuente | Qué entrega | Límite | Uso en el plan |
|---|---|---|---|
| Bing Webmaster Tools, AI Performance | Citas en Copilot y en los resúmenes de Bing, páginas citadas y grounding queries (las frases que la IA usó para encontrar tu contenido). Desde junio 2026 suma Intents, Topics y Citation Share | Muestreado. Solo superficies de Microsoft, aunque ChatGPT también se apoya en Bing | La mejor aproximación pública a qué se pregunta. Revisar cada mes y llevar las grounding queries al centro de respuestas |
| Search Console, informe de IA generativa | Impresiones en AI Overviews y AI Mode por página, país, dispositivo y fecha | Sin clics ni consultas | Medir qué páginas aparecen en respuestas de Google |
| Search Console, rendimiento "Web" | Consultas, clics e impresiones, incluido el tráfico de AI Overviews y AI Mode mezclado | No separa IA del resto | Filtrar consultas con forma de pregunta y consultas largas (regex abajo) |
| Microsoft Clarity | Panel de citas (tasa de cita, grounding queries) y panel de actividad de bots de IA | Solo Microsoft. El panel de bots exige conectar el CDN o el servidor | Complemento de Bing. Ver qué bots de IA rastrean el sitio |
| GA4 | Canal por defecto "AI Assistant" (medium `ai-assistant`) | Incluye ChatGPT, Gemini, DeepSeek, Copilot y Grok, pero no Claude ni Perplexity. Los clics desde AI Overviews y AI Mode llegan como google / organic | Crear un grupo de canales propio "IA" (regex abajo) |
| HubSpot AI Search Grader | Foto de cómo te ven ChatGPT, Perplexity y Gemini. En español | Puntual, sin historial | Una vez por trimestre |
| Ventas, correo, chatbot del sitio y reuniones | Las preguntas reales de clientes, con sus palabras | Hay que registrarlas | La mejor fuente para una consultora. Anotar cada pregunta nueva en una planilla compartida |

ChatGPT agrega `utm_source=chatgpt.com` a sus enlaces, lo que permite verlos en GA4 aunque el referrer se pierda.

Regex para Search Console (sintaxis RE2, no distingue mayúsculas):

Consultas con forma de pregunta:

```
^(qué|que|cómo|como|cuál|cual|cuáles|cuanto|cuánto|por qué|para qué|dónde|donde|cuándo|quién|es|son|se puede|conviene|vale la pena|mejor|mejores|diferencia)\s
```

Consultas largas, de 7 palabras o más (las más parecidas a un prompt):

```
^(\S+\s+){6,}\S+$
```

Consultas comerciales o comparativas:

```
(vs|versus|alternativa|precio|costo|cuánto cuesta|proveedor|consultora|empresa)
```

Grupo de canales "IA" en GA4 (Admin, Visualización de datos, Grupos de canales; ubicarlo por encima de Referral), condición sobre Session source que coincide con la regex:

```
.*(chatgpt\.com|chat\.openai\.com|perplexity\.ai|gemini\.google\.com|copilot\.microsoft\.com|copilot\.com|claude\.ai|chat\.deepseek\.com|grok\.com|meta\.ai|chat\.mistral\.ai).*
```

### 10.3 Descubrimiento de preguntas

| Herramienta | Para qué | Precio de entrada |
|---|---|---|
| People Also Ask en google.cl | Preguntas relacionadas tal como las muestra Google en Chile | Gratis |
| Google Trends filtrado a Chile | Comparar temas (RPA frente a agentes de IA, por ejemplo) y ver estacionalidad | Gratis |
| Keyword Planner | Volumen de búsqueda en Google | Gratis, requiere una cuenta de Google Ads |
| AlsoAsked | Árbol de preguntas relacionadas, cualquier país e idioma | USD 12 al mes |
| AnswerThePublic | Variantes de preguntas a partir de una palabra | USD 20 al mes |
| Reddit (r/RPA, r/UiPath, r/PowerAutomate) | Cómo se redactan las dudas técnicas | Gratis. Poca conversación B2B chilena |

### 10.4 Herramientas pagadas de seguimiento

| Herramienta | Qué hace | Motores | Chile | Precio de entrada (USD al mes) |
|---|---|---|---|---|
| SE Visible (SE Ranking) | Seguimiento | ChatGPT, Gemini, AI Mode, AI Overviews, Perplexity | Sí, configurable en español | 99 (200 prompts), 79 con pago anual. Trial de 10 días |
| Otterly.AI | Seguimiento y AI Prompt Research | ChatGPT, AI Overviews, Perplexity, Copilot. Gemini, AI Mode y Claude como add-on | Sí, también Argentina, México, Colombia y Perú | 29 (15 prompts), 189 (100 prompts). Trial de 7 días |
| Semrush AI Visibility Toolkit | Seguimiento y Prompt Research | ChatGPT, Gemini, AI Overviews, AI Mode | Sí | 99 (25 prompts) |
| Ahrefs Brand Radar | Seguimiento e índice de respuestas | 7 motores | Sin detalle por país | Desde 199. Ahrefs Lite (129) incluye 5 prompts y se pueden sumar paquetes desde 50 |
| Similarweb AI Search Intelligence | Prompts de panel, seguimiento y tráfico desde IA | 7 motores | Cobertura no publicada | 129, o 99 con pago anual (150 prompts) |
| Peec AI | Seguimiento con puntaje de demanda | 3 a elegir en el plan inicial | No confirmado | 95 (50 prompts) |
| Rankscale | Seguimiento | 8 motores, incluido Claude | Todas las regiones | 99 |
| LLMrefs | Seguimiento con volumen estimado | 10 motores | No confirmado | 79 (500 prompts) |
| AthenaHQ | Seguimiento | 5 motores en el plan gratis | 1 región | Gratis (300 créditos), 295 el siguiente |
| Scrunch | Seguimiento | 7 motores | Según su FAQ, cualquier país | 300 |
| Profound | Prompt Volumes y seguimiento | Hasta 9 motores | Prompt Volumes no cubre Chile | Solo Enterprise a medida. Trial de 7 días |

Precios leídos en las páginas oficiales el 1 de octubre de 2026. Peec, Similarweb, LLMrefs y Scrunch no tienen la cobertura de Chile confirmada.

### 10.5 Stack recomendado

| Nivel | Herramientas | Costo mensual |
|---|---|---|
| Gratis | Search Console (informe de IA y regex), Bing Webmaster Tools con AI Performance, Clarity, GA4 con grupo "IA", HubSpot AI Search Grader trimestral, People Also Ask, Trends y la planilla manual | USD 0 |
| Bajo costo | Lo gratis más SE Visible Basic (200 prompts, Chile explícito). Alternativa más barata: Otterly Lite (15 prompts) | USD 29 a 99 |
| Intermedio | Lo gratis más SE Visible Core (USD 189) o Peec Pro (USD 245), y Semrush AI Visibility Toolkit (USD 99) para descubrir prompts con base de Chile | USD 288 a 344 |

Recomendación para Robotipy: partir en el nivel gratis las semanas 1 a 4, con medición manual de la línea base. Desde la semana 5, SE Visible Basic con los 60 prompts del Anexo A. Así la medición deja de depender de horas del equipo y queda un historial comparable.

### 10.6 Método manual

Si se mide a mano, usar 30 prompts prioritarios del Anexo A en 4 motores (ChatGPT con búsqueda, Gemini, AI Mode en google.cl y Copilot). Son unas 120 respuestas al mes, alrededor de 3 horas.

- Ventana de incógnito o sesión sin historial.
- Set completo una vez al mes.
- Los 10 prompts más importantes cada 15 días, con 3 corridas por motor, porque las respuestas cambian de una corrida a otra.
- Registrar todo en la planilla del Anexo B y guardar una captura de cada respuesta.

Indicadores que salen de la planilla:
- Tasa de mención: corridas con mención de Robotipy sobre el total.
- Share of voice: menciones de Robotipy frente a las de cada competidor.
- Tasa de cita: corridas con enlace a robotipy.com.
- Ranking de dominios citados: en qué medios, directorios y páginas conviene aparecer.

## 11. Calendario semana a semana

Cadencia base: 2 piezas nuevas y 1 actualización por semana. Un 20% de los espacios queda libre para temas reactivos (cambios de ley, anuncios de Rocketbot, preguntas nuevas detectadas en la medición).

| Semana | Fechas | Pieza | Canal | Notas y dependencias | Estado |
|---|---|---|---|---|---|
| 1 | 5 al 9 oct | Corregir /about con el equipo real | Sitio | Prioridad 1. Necesita fotos y bios reales | Pendiente |
| 1 | 5 al 9 oct | Línea base del set de 60 prompts en 5 motores | Medición | Antes de cualquier cambio de contenido | Pendiente |
| 1 | 5 al 9 oct | Activar el informe de IA de Search Console, Bing Webmaster Tools con AI Performance e IndexNow, Microsoft Clarity, grupo de canales "IA" en GA4 y campo "¿Cómo nos conociste?" | Medición | Requiere volver a autenticar GA4 | Pendiente |
| 2 | 12 al 16 oct | Sitemap con URLs canónicas y `lastmod` real, schema Organization y Article, `llms.txt` automático | Sitio | Depende del campo `updatedAt` | Pendiente |
| 2 | 12 al 16 oct | Post: Ley 21.719 y robots o agentes de IA | Blog, LinkedIn | Debe salir antes del 1 de diciembre | Pendiente |
| 3 | 19 al 23 oct | Página "Robotipy en datos" (rehacer /ai-info) | Sitio | Depende de la ficha de hechos validada | Pendiente |
| 3 | 19 al 23 oct | Post: Rocketbot, UiPath o Power Automate en Chile 2026 | Blog, LinkedIn | Carrusel en LinkedIn | Pendiente |
| 4 | 26 al 30 oct | Centro de respuestas v1 (30 preguntas) | Sitio | Depende de la ficha de hechos | Pendiente |
| 4 | 26 al 30 oct | Reescribir las 66 FAQ de los 15 posts con sujeto explícito | Blog | Actualizar `updatedAt` | Pendiente |
| 5 | 2 al 6 nov | Bloque de respuesta inicial y FAQ en /rpa, /automation y /chatbot | Sitio | Usa el componente `FaqSection` | Pendiente |
| 5 | 2 al 6 nov | Contratar SE Visible Basic y cargar los 60 prompts (niveles 2 y 3) | Medición | Después de tener la línea base manual | Pendiente |
| 5 | 2 al 6 nov | Post y video: descargar facturas del SII automáticamente | Blog, YouTube | Primer video del canal | Pendiente |
| 6 | 9 al 13 nov | FAQ en /industries/agtech, /industries/banking y /casos-exito | Sitio | | Pendiente |
| 6 | 9 al 13 nov | Post: cuánto cuesta un agente de IA de atención al cliente | Blog | Necesita el dato de precio de chatbots | Pendiente |
| 7 | 16 al 20 nov | Perfiles en Clutch, GoodFirms y Google Business Profile; pedir reseñas a 5 clientes | Directorios | Usar la ficha de hechos idéntica | Pendiente |
| 7 | 16 al 20 nov | Post: cómo elegir proveedor de RPA en Chile | Blog | | Pendiente |
| 8 | 23 al 27 nov | Post y video: conciliación bancaria con cartolas de bancos chilenos | Blog, YouTube | | Pendiente |
| 8 | 23 al 27 nov | Medición mes 1 y actualización de "Cuánto cuesta automatizar un proceso" | Medición, blog | | Pendiente |
| 9 | 30 nov al 4 dic | Post: agentes de IA en empresas chilenas en 2026 | Blog, LinkedIn | El 1 de diciembre entra en vigencia la Ley 21.719: post de LinkedIn y actualización del artículo | Pendiente |
| 10 | 7 al 11 dic | Inicio del estudio propio: recolección de datos de proyectos y encuesta | Estudio, newsletter, LinkedIn | La encuesta corre hasta el 31 de enero | Pendiente |
| 10 | 7 al 11 dic | Post: IDP frente a OCR | Blog | | Pendiente |
| 11 | 14 al 18 dic | Nuevo caso de éxito con testimonio en video | Blog, YouTube, LinkedIn del cliente | Requiere la aprobación del cliente | Pendiente |
| 11 | 14 al 18 dic | Post: Ley de 40 horas y automatización | Blog | | Pendiente |
| 12 | 21 al 24 dic | Actualizar los 3 posts con más impresiones; medición mes 2 | Blog, medición | | Pendiente |
| 13 | 28 dic al 1 ene | Semana baja: programar LinkedIn de enero | LinkedIn | | Pendiente |
| 14 | 4 al 8 ene | Post y video: SAP Business One con Rocketbot | Blog, YouTube | | Pendiente |
| 15 | 11 al 15 ene | Post: cuánto cuesta mantener un robot en producción | Blog | | Pendiente |
| 15 | 11 al 15 ene | Centro de respuestas v2 (50 preguntas) con consultas de Bing AI Performance | Sitio | | Pendiente |
| 16 | 18 al 22 ene | Post de industria: exportadoras frutícolas | Blog, LinkedIn | Coincide con la temporada de cosecha | Pendiente |
| 16 | 18 al 22 ene | Reescribir el caso de minería o logística con formato citable | Blog | | Pendiente |
| 17 | 25 al 29 ene | Medición mes 3 y revisión de mitad de plan | Medición | Ajustar los temas según los datos | Pendiente |
| 18 | 1 al 5 feb | Análisis de datos del estudio; post: RPA con IA, cuándo poner un modelo dentro de un robot | Estudio, blog | | Pendiente |
| 19 | 8 al 12 feb | Post y video: qué parte del F29 se puede automatizar | Blog, YouTube | | Pendiente |
| 20 | 15 al 19 feb | Redacción del estudio y contacto con medios con fecha de publicación acordada | Estudio, prensa | | Pendiente |
| 21 | 22 al 26 feb | Medición mes 4; actualizar 3 posts | Medición, blog | | Pendiente |
| 22 | 1 al 5 mar | Publicar el estudio "Automatización en Chile 2027": página, PDF, nota de prensa, LinkedIn | Sitio, prensa, LinkedIn | Pieza ancla | Pendiente |
| 23 | 8 al 12 mar | Webinar con Rocketbot sobre el estudio; post derivado 1 | Webinar, blog | Coordinar con Rocketbot desde enero | Pendiente |
| 24 | 15 al 19 mar | Post derivado 2; columna de opinión en un medio | Blog, prensa | | Pendiente |
| 25 | 22 al 26 mar | Post: Ley Marco de Ciberseguridad y credenciales de robots; actualizar el centro de respuestas | Blog, sitio | | Pendiente |
| 26 | 29 mar al 2 abr | Medición final, reporte y plan del segundo trimestre de 2027 | Medición | | Pendiente |

En paralelo, todas las semanas: 2 posts de LinkedIn de Danilo y 1 de Gabriel que reutilicen datos de los posts, y newsletter quincenal.

## 12. Piezas necesarias

| Pieza | Tipo | Contenido | Prioridad | Semana |
|---|---|---|---|---|
| Ficha de hechos de Robotipy | Documento interno | Datos únicos de la entidad (sección 6) | Imprescindible | 1 |
| /about corregido | Página | Equipo real, historia, partner Rocketbot, schema Person | Imprescindible | 1 |
| Set de 60 prompts y planilla de seguimiento | Medición | Anexos A y B | Imprescindible | 1 |
| Correcciones técnicas | Código | Sitemap, schema, `updatedAt`, `llms.txt`, formulario | Imprescindible | 2 |
| Robotipy en datos | Página | Ficha de hechos en formato pregunta y respuesta | Imprescindible | 3 |
| Centro de respuestas | Página | 40 a 60 preguntas | Imprescindible | 4 y 15 |
| Bloques de respuesta y FAQ en servicios | Páginas | 7 páginas | Imprescindible | 5 y 6 |
| 18 a 20 posts nuevos | Blog | Banco de temas, sección 8.4 | Imprescindible | 2 a 25 |
| Actualización de 15 posts con FAQ | Blog | Preguntas autocontenidas, datos frescos | Imprescindible | 4 a 21 |
| 4 a 6 videos | YouTube | Demos por proceso | Imprescindible | 5 a 19 |
| Perfiles en directorios | Terceros | Clutch, GoodFirms, Google Business Profile | Imprescindible | 7 |
| Estudio "Automatización en Chile 2027" | Informe | Datos propios, encuesta, PDF y página | Imprescindible | 10 a 22 |
| 2 casos de éxito nuevos o reescritos | Blog | Con cifras y testimonio | Deseable | 11 y 16 |
| Webinar con Rocketbot | Evento | Presentación del estudio | Deseable | 23 |
| Columnas en medios | Prensa | Opinión con datos del estudio | Deseable | 20 a 24 |
| Campaña de Google Ads | Pagado | Búsquedas de proveedor | Opcional | desde 5 |

## 13. Métricas de éxito

| Métrica | Meta a marzo 2027 | Cómo se mide | Frecuencia |
|---|---|---|---|
| Tasa de mención en el set de 60 prompts (principal) | 30% o más en al menos 3 de 5 motores (se recalibra con la línea base) | Planilla del Anexo B o herramienta de seguimiento | Mensual |
| Tasa de cita con enlace a robotipy.com | 15% o más | Igual que la anterior | Mensual |
| Impresiones en IA generativa de Search Console | Triplicar la línea base de octubre | Search Console | Mensual |
| Citas y consultas en Bing AI Performance | Triplicar la línea base | Bing Webmaster Tools | Mensual |
| Sesiones referidas desde IA | Crecimiento mes a mes y tasa de conversión a formulario | GA4, canal "IA" | Mensual |
| Leads con origen declarado "IA" | 10 por trimestre | Campo del formulario y CRM | Mensual |
| Menciones de marca en terceros | 15 nuevas | Registro manual y alertas | Mensual |
| Clics orgánicos de Google en consultas con forma de pregunta | Crecimiento sostenido | Search Console con filtro regex | Mensual |
| Posts actualizados hace menos de 90 días | 80% o más | Campo `updatedAt` | Mensual |

Reporte: una página al mes con las métricas, los 10 prompts con más cambios, los competidores que aparecen y 3 decisiones para el mes siguiente.

## 14. Presupuesto por niveles

Sin presupuesto definido, el plan funciona en tres niveles. La producción de contenido se hace con el equipo interno y Claude; lo que cambia es la inversión en herramientas, video y distribución.

| Partida | Nivel 1: base | Nivel 2: recomendado | Nivel 3: acelerado |
|---|---|---|---|
| Herramientas de medición | USD 0 (stack gratis) | USD 79 a 111 al mes: SE Visible Basic más AlsoAsked | USD 288 a 344 al mes: SE Visible Core o Peec Pro, más Semrush AI Visibility Toolkit |
| Video | Grabación de pantalla propia | Edición externa de 4 a 6 videos (cotizar) | Producción con testimonios de clientes (cotizar) |
| Estudio propio | Datos de proyectos y encuesta en LinkedIn | Diseño gráfico del informe (cotizar) | Difusión con agencia de prensa (cotizar) |
| Pagado (presupuesto de prueba sugerido) | Nada | LinkedIn Ads para el estudio, USD 300 a 500 en marzo | Google Ads de búsqueda desde la semana 5, USD 500 a 1.000 al mes, más LinkedIn Ads para el estudio |
| Imprevistos | | 10% a 15% del total | 10% a 15% del total |
| Total en herramientas en 6 meses | USD 0 | USD 474 a 666 | USD 1.728 a 2.064 |

Los montos de pauta son presupuestos de prueba sugeridos, no cotizaciones. Conviene revisarlos al final del primer mes con el costo por clic real en Chile.

## 15. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Las respuestas de los modelos cambian con cada versión (GPT-5.6 cortó a la mitad las citas de listas en agosto de 2026) | Medir mensualmente con el mismo set y diversificar formatos. No depender de un solo motor ni de un solo formato |
| Los volúmenes de prompts que muestran las herramientas para Chile en español son estimaciones con muestras chicas | Usar las herramientas para descubrir preguntas, no para medir demanda. Cruzar con Bing AI Performance, Search Console y las preguntas reales de ventas |
| Menos clics aunque aumente la visibilidad | Medir menciones y leads declarados, no solo tráfico. Reforzar la conversión de la home y de las páginas de servicio |
| Falta de capacidad del equipo para sostener la cadencia | Priorizar fundaciones, FAQ y 1 post por semana si hace falta. El estudio propio vale más que 5 posts genéricos |
| Contenido que suena a IA o es genérico | Cada pieza lleva un dato, caso u opinión propia. Revisión humana y checklist de `CONTENT_GUIDELINES.md` |
| Datos de clientes en casos y estudio | Anonimizar y pedir aprobación escrita. Cumplir la Ley 21.719 desde diciembre |

## 16. Próximos pasos

Esta semana:
1. Validar y completar la ficha de hechos de Robotipy: año de fundación, fundadores, ciudad, proyectos entregados, plataformas, precio de chatbots y agentes.
2. Corregir /about con el equipo real.
3. Volver a autenticar GA4 y medir la línea base de tráfico desde IA. Activar Bing Webmaster Tools con AI Performance.
4. Correr la línea base del set de 60 prompts.
5. Abrir la rama `claude/seo-llm-fundaciones` con las correcciones técnicas de la sección 4.2.

Decisiones de Danilo:
- Nivel de presupuesto (sección 14).
- Si se permiten los bots de entrenamiento (GPTBot, ClaudeBot, Google-Extended). La recomendación es permitirlos.
- Qué clientes pueden aparecer con nombre en casos y en el estudio.
- Si se hace el webinar con Rocketbot y quién lo coordina.

## Anexo A: Set de 60 prompts de seguimiento

Con herramienta (SE Visible u otra), cargar los 60 prompts en ChatGPT, Gemini, AI Mode, AI Overviews y Perplexity. Si se mide a mano, usar los 30 prioritarios en 4 motores (sección 10.6): 1 a 9, 12, 15, 16, 19, 22, 23, 24, 28, 29, 30, 31, 32, 35, 38, 41, 44, 45, 47, 51, 52 y 53.

La mezcla del set: cerca de 40% de prompts de proveedor sin marca, 30% de procesos concretos, 15% de comparación y precio, y el resto de marca, implementación y capacitación. Reemplazar cada trimestre los prompts que nunca generan respuestas útiles por preguntas nuevas tomadas de Bing AI Performance, Search Console y ventas.

Proveedor y marca:
1. ¿Qué empresas implementan RPA en Chile?
2. Recomiéndame una empresa de automatización de procesos en Santiago.
3. ¿Quién es partner de Rocketbot en Chile?
4. Necesito una consultora para automatizar procesos contables en Chile, ¿cuáles me recomiendas?
5. ¿Qué empresa me puede ayudar a automatizar tareas en SAP en Chile?
6. Empresas que desarrollen agentes de IA para empresas en Chile.
7. Proveedores de RPA en Latinoamérica para empresas medianas.
8. ¿Qué es Robotipy?
9. ¿Robotipy es una buena empresa para automatizar procesos?
10. Alternativas a UiPath más baratas en Chile.
11. Implementadores de Rocketbot en Argentina.
12. ¿Quién puede automatizar la descarga de facturas del SII?
13. Empresas que hagan chatbots con IA para atención al cliente en Chile.
14. ¿Dónde puedo contratar soporte para robots de Rocketbot?

Precio:
15. ¿Cuánto cuesta implementar RPA en Chile?
16. ¿Cuánto cuesta un robot de Rocketbot?
17. Precio de licencia de Rocketbot, UiPath y Power Automate.
18. ¿Cuánto cuesta un chatbot con IA para una empresa en Chile?
19. ¿Cuánto cuesta un agente de IA para atención al cliente?
20. ¿Cuánto cuesta mantener un robot RPA al mes?
21. ¿Cuál es el ROI de automatizar cuentas por pagar?

Comparación y decisión:
22. Rocketbot o UiPath, ¿cuál conviene para una empresa chilena?
23. ¿RPA o agentes de IA para automatizar procesos administrativos?
24. ¿Cuándo conviene RPA y cuándo una integración por API?
25. RPA o desarrollo a medida, ¿qué conviene?
26. Power Automate o Rocketbot.
27. n8n o RPA para una empresa mediana.
28. ¿RPA sirve para pymes?
29. ¿Cómo elijo un proveedor de RPA?

Procesos:
30. ¿Cómo automatizar la conciliación bancaria?
31. ¿Cómo automatizar la carga de facturas de proveedores en SAP?
32. ¿Cómo descargar automáticamente las facturas del SII?
33. ¿Cómo automatizar reportes en Excel?
34. ¿Cómo automatizar la creación de órdenes de venta en SAP?
35. ¿Cómo automatizar la lectura de cartolas bancarias?
36. ¿Se puede automatizar Previred?
37. ¿Cómo automatizar procesos en Defontana?
38. ¿Cómo extraer datos de facturas en PDF automáticamente?
39. ¿Qué procesos de una empresa agrícola se pueden automatizar?
40. Automatización de procesos en minería.
41. ¿Qué procesos de finanzas conviene automatizar primero?
42. ¿Cómo automatizar rendiciones de gastos?
43. ¿Cómo automatizar la cobranza a clientes?

Implementación y riesgos:
44. ¿Cuánto demora implementar un robot RPA?
45. ¿Cómo se mantienen los robots RPA en producción?
46. ¿Cómo monitorear robots RPA?
47. Errores comunes al implementar RPA.
48. ¿Qué necesito para empezar con RPA en mi empresa?
49. ¿Cómo calcular el ROI de un proyecto RPA?
50. ¿Es seguro usar RPA con datos confidenciales?
51. ¿Cómo afecta la Ley 21.719 a la automatización con IA?
52. ¿Qué es IDP?
53. ¿Qué diferencia hay entre RPA e IA agéntica?

Capacitación y productos:
54. Cursos de RPA en Chile.
55. Capacitación en Rocketbot.
56. ¿Dónde aprender RPA en español?
57. Software para gestionar proyectos de una consultora de RPA.
58. Herramienta para monitorear robots de Rocketbot.
59. Capacitación en IA para equipos de finanzas en Chile.
60. ¿Qué es mejor para automatizar: Python o una plataforma RPA?

## Anexo B: Planilla de seguimiento

Una fila por prompt, motor y mes.

| Columna | Contenido |
|---|---|
| Fecha | Día de la medición |
| Prompt | Número y texto del Anexo A |
| Categoría | Proveedor, precio, comparación, proceso, implementación, marca |
| Motor | ChatGPT, Gemini, AI Mode, Copilot, Perplexity, Claude |
| Búsqueda activada | Sí o no |
| Corrida | 1, 2 o 3 |
| Mencionado | 0 o 1: ¿aparece "Robotipy" en el texto? |
| Posición | Orden en que aparece entre los proveedores nombrados |
| Sentimiento | Positivo, neutro o negativo |
| Citado | 0 o 1: ¿enlaza a robotipy.com? |
| URL citada | Qué página |
| Competidores | Marcas que aparecen |
| Fuentes citadas | Dominios de terceros que el motor usa (ahí hay que conseguir presencia) |
| Exactitud | ¿Lo que dice de Robotipy es correcto? (precio, servicios, ubicación) |
| Captura | Enlace a la captura de la respuesta |
| Nota | Observaciones |

La columna "Fuentes citadas" es la más útil para la estrategia: muestra qué directorios, medios o páginas usan los modelos para responder en cada tema, y por lo tanto dónde conseguir una mención.

## Anexo C: Fuentes

Panorama y comportamiento:
- Alphabet, presentación a inversionistas, junio 2026: https://blog.google/alphabet/investor-presentation-june-2026/
- Google I/O 2026: https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/
- AI Mode en español (TechCrunch, sep 2025): https://techcrunch.com/2025/09/23/googles-ai-mode-arrives-in-spanish-globally/
- AI Mode en Latinoamérica (Hipertextual, ago 2025): https://hipertextual.com/internet/ai-mode-google-latinoamerica-que-paises-como-usarlo/
- BrightEdge, presencia de AI Overviews, feb 2026: https://www.brightedge.com/resources/weekly-ai-search-insights/ai-overviews-one-year-presence-size-citing
- ChatGPT 1.200 millones semanales (The Decoder, sep 2026): https://the-decoder.com/chatgpt-now-reaches-1-2-billion-people-every-week-openai-says/
- Uso de ChatGPT (OpenAI y NBER, sep 2025): https://www.nber.org/papers/w34255
- Alphabet Q2 2026: https://www.sec.gov/Archives/edgar/data/0001652044/000165204426000066/googexhibit991q22026.htm
- Cuota de tráfico de chatbots (Similarweb vía The Decoder, sep 2026): https://the-decoder.com/chatgpt-claws-back-web-traffic-share-to-55-5-percent-as-geminis-brief-comeback-fades/

Clics y tráfico:
- Seer Interactive, CTR con AI Overviews, abr 2026: https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update
- Pew Research, jul 2025: https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/
- Conductor, benchmarks AEO y GEO, nov 2025: https://www.conductor.com/academy/aeo-geo-benchmarks-report/
- Similarweb, tráfico referido por IA por industria, sep 2026: https://aisearch.similarweb.com/blog/ai-referral-traffic-by-industry/
- SE Ranking, tráfico de ChatGPT, jul 2026: https://seranking.com/blog/chatgpt-referral-traffic-may-2026/
- Ahrefs, conversiones desde IA, jun 2025: https://ahrefs.com/blog/ai-search-traffic-conversions-ahrefs/

Citación:
- Semrush, dominios más citados, nov 2025: https://www.semrush.com/blog/most-cited-domains-ai/
- Ahrefs, dominios más citados en AI Overviews, sep 2026: https://ahrefs.com/blog/most-cited-domains-ai-overviews/
- Profound, LinkedIn en consultas profesionales, mar 2026: https://www.tryprofound.com/blog/linkedin-is-the-most-cited-domain-for-professional-queries-in-ai-search
- Profound, idioma y citas, mar 2026: https://www.tryprofound.com/blog/how-query-language-reshapes-ai-citations
- Ahrefs, páginas más citadas por ChatGPT, oct 2025: https://ahrefs.com/blog/chatgpts-most-cited-pages/
- Ahrefs, citas de AI Overviews y top 10, mar 2026: https://ahrefs.com/blog/ai-overview-citations-top-10/
- Ahrefs, correlaciones de visibilidad de marca, dic 2025: https://ahrefs.com/blog/ai-brand-visibility-correlations/
- SE Ranking, factores de citación en ChatGPT (vía SEJ), nov 2025: https://www.searchenginejournal.com/new-data-top-factors-influencing-chatgpt-citations/561954/
- Ahrefs, frescura, jul 2025: https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content
- Ahrefs, largo del contenido en AI Overviews, dic 2025: https://ahrefs.com/blog/short-vs-long-content-in-ai-overviews/
- Kevin Indig, contenido enfocado en ChatGPT, abr 2026: https://www.growth-memo.com/p/shorter-focused-content-wins-in-chatgpt
- Ahrefs, listas "mejores X", dic 2025: https://ahrefs.com/blog/best-lists-research/
- Peec AI sobre GPT-5.6 y listas, ago 2026: https://the-ai-marketing-newsletter.beehiiv.com/p/just-in-chatgpt-5-6-cites-half-as-many-listicles
- Paper GEO de Princeton (KDD 2024): https://arxiv.org/abs/2311.09735

Guías oficiales y datos estructurados:
- Google, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google, guía de optimización para IA (may y jul 2026): https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, nuevos controles y reporte de IA en Search Console: https://blog.google/products-and-platforms/products/search/new-controls-website-owners/
- Google, FAQPage: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Google, simplificación de resultados (jun 2025): https://developers.google.com/search/blog/2025/06/simplifying-search-results
- Bing, AI Performance en Webmaster Tools (feb 2026): https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- Bing, el rol del índice (may 2026): https://blogs.bing.com/search/May-2026/Evolving-role-of-the-index-From-ranking-pages-to-supporting-answers
- Ahrefs, schema y citas en IA, may 2026: https://ahrefs.com/blog/schema-ai-citations/
- ChatGPT y Perplexity leen JSON-LD como texto (SER, feb 2026): https://www.seroundtable.com/chatgpt-perplexity-structured-data-text-40862.html

Rastreadores:
- OpenAI: https://developers.openai.com/api/docs/bots
- Anthropic: https://support.claude.com/en/articles/8896518
- Perplexity: https://docs.perplexity.ai/guides/bots
- Google: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- Apple: https://support.apple.com/en-us/119829
- Vercel, rastreadores de IA y JavaScript, dic 2024: https://vercel.com/blog/the-rise-of-the-ai-crawler
- Cloudflare, bloqueo por defecto (sep 2026): https://blog.cloudflare.com/content-independence-day-ai-options/

Herramientas de medición y descubrimiento (precios al 1 de octubre de 2026):
- Search Console, informe de IA generativa: https://support.google.com/webmasters/answer/16984139
- Search Console, regex en filtros: https://support.google.com/webmasters/answer/17011165
- GA4, grupo de canales por defecto: https://support.google.com/analytics/answer/9756891
- Microsoft Clarity, citas en IA: https://clarity.microsoft.com/blog/understanding-your-influence-ai-citations/
- Microsoft Clarity, actividad de bots: https://learn.microsoft.com/en-us/clarity/ai-visibility/bot-activity-overview
- HubSpot AI Search Grader: https://www.hubspot.com/aeo-grader
- SE Visible: https://visible.seranking.com/ y https://help.seranking.com/hc/en-us/articles/22266372506524-SE-Visible-FAQ
- Otterly.AI: https://otterly.ai/pricing y https://help.otterly.ai/countries-otterlyai
- Semrush AI Toolkit: https://www.semrush.com/kb/1493-ai-toolkit y https://www.semrush.com/kb/1607-semrush-ai-visibility-data
- Ahrefs: https://ahrefs.com/pricing y https://ahrefs.com/blog/brand-radar-methodology/
- Similarweb AI Search: https://www.similarweb.com/packages/ai-search/
- Peec AI: https://peec.ai/pricing
- Rankscale: https://rankscale.ai/pricing
- LLMrefs: https://llmrefs.com/pricing
- AthenaHQ: https://www.athenahq.ai/pricing
- Scrunch: https://scrunch.com/pricing
- Profound: https://www.tryprofound.com/pricing y https://www.tryprofound.com/features/prompt-volumes
- AlsoAsked: https://alsoasked.com/pricing
- AnswerThePublic: https://answerthepublic.com/pricing
- Crítica a los volúmenes de prompts (Jaeckert, ene 2026): https://www.jaeckert-odaniel.com/en/prompt-search-volume-real-data-or-all-guessed/

Notas de verificación: varios datos vienen de estudios correlacionales de proveedores de herramientas SEO. Algunos se tomaron de cobertura secundaria porque la fuente original no estuvo accesible (Search Engine Land bloqueó el acceso). No hay estudios de citación específicos para Chile ni para B2B en español.
