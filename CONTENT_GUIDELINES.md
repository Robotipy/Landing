# Directrices de contenido — Robotipy

Reglas de estilo para artículos de blog, copy de landing y cualquier
texto generado (incluyendo el asistido por IA). El objetivo es que el
contenido suene humano, profesional y consistente con la marca.

## 1. Puntuación

- **No usar em-dashes (`—`)**. Reemplazar por:
  - Coma cuando se trate de un inciso o pausa.
  - Paréntesis cuando se introduzca una aclaración.
  - Dos puntos cuando se introduzca una explicación o lista.
- **En-dashes (`–`) sí se permiten** únicamente en rangos numéricos:
  `6–8 horas`, `2–4 semanas`, `1–3 horas/semana`.
- Evitar el uso de guion largo como signo de atribución en citas:
  preferir formato `Nombre, cargo` sin guion inicial.

## 2. Emojis e íconos

- **No usar emojis como viñeta** ni al inicio de los ítems de una lista.
  En particular, evitar `❌`, `✅`, `⚠️`, `🚨`, `💡`, etc., porque dan
  un tono "AI-generated".
- Emojis decorativos en encabezados de tarjetas o secciones (ej.
  `🏦 Banca y Finanzas`, `🌾 Agroindustria`) se permiten con moderación
  cuando aportan identificación visual y no sustituyen una palabra.
- Para indicar negación o afirmación, preferir el lenguaje:
  `No es...`, `Sí, ...`, en lugar de `❌ No es...` o `✅ Sí, ...`.

## 3. Tono

- Directo y conversacional, sin sonar promocional ni "robotizado".
- Evitar muletillas típicas de IA: "en este artículo exploraremos...",
  "el mundo cambia constantemente...", "imagina por un momento...",
  "no es magia, es...".
- Preferir frases cortas. Romper párrafos largos.
- Hablar en segunda persona (`tu empresa`, `tus procesos`).

## 4. Datos y cifras

- Acompañar siempre las estadísticas con contexto o fuente cuando sea
  posible. Si la cifra es referencial, decirlo explícitamente.
- Formato de moneda chilena: `CLP $1.000.000` (punto como separador
  de miles).

## 5. Estructura típica de un artículo del blog

1. Intro corta (2–4 párrafos) con el problema y promesa del artículo.
2. Bloque de estadísticas clave (opcional).
3. Tabla de contenidos enlazada por anclas.
4. Secciones numeradas con `h2`.
5. Callouts, tablas y diagramas SVG cuando aporten claridad.
6. FAQ al final con `<details>/<summary>`.
7. CTA al final hacia `/contact-us` o un caso de éxito.

## 6. Componentes visuales

- Paleta: `primary #00182B`, `accent rgb(3,150,149)` (teal), fondo oscuro.
- Tarjetas y callouts: borde sutil con `border-white/10` y fondo
  `bg-white/5`.
- Strong/destacados: usar `styles.strong` (texto en verde `text-success`).
- Diagramas SVG: separar siempre números de los títulos para evitar
  superposición; los círculos deben tener al menos 8 px de margen
  respecto al texto.

## 7. Checklist antes de publicar

- [ ] No quedan em-dashes (`—`) en el texto.
- [ ] No hay emojis como viñeta (`❌`, `✅`, etc.).
- [ ] Los rangos numéricos usan en-dash (`–`).
- [ ] Las tablas no se cortan en mobile (envolver en `overflow-x-auto`).
- [ ] El FAQ está implementado con `<details>` (no requiere JS cliente).
- [ ] Las imágenes tienen `alt` descriptivo.
- [ ] El CTA final apunta a una página existente.
