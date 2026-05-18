# CLAUDE.md

Instrucciones permanentes para Claude (y agentes asistidos por IA) al
trabajar en este repositorio.

## Stack

- Next.js 16 (App Router, Turbopack) + React + Tailwind + daisyUI.
- i18n con `next-intl`, locale `[locale]` en las rutas.
- Blog estático con posts JSX en `app/[locale]/blog/_assets/posts/`,
  registrados en `app/[locale]/blog/_assets/content.js`.

## Reglas de contenido (obligatorias)

Consultar siempre `CONTENT_GUIDELINES.md` antes de redactar copy o
artículos. Resumen de lo no negociable:

- **Prohibido em-dash (`—`)**. Usar coma, paréntesis o dos puntos.
- **Prohibidos emojis como viñeta** (`❌`, `✅`, `⚠️`, `💡`, etc.) ni
  al inicio de ítems de listas. Emojis decorativos en headers de
  tarjetas se permiten con moderación.
- **En-dash (`–`) solo para rangos numéricos** (`6–8 horas`).
- Tono directo, segunda persona, sin muletillas tipo "imagina por un
  momento", "en este artículo exploraremos", "no es magia, es...".
- Evitar inicios genéricos de IA y cierres motivacionales vacíos.

## Reglas de código

- Mantener los posts del blog como Server Components. Si se necesita
  interactividad, preferir HTML nativo (`<details>/<summary>` para
  acordeones) antes que `"use client"`.
- Paleta Robotipy: `primary #00182B`, `accent rgb(3,150,149)` (teal),
  fondo oscuro. No introducir colores nuevos sin justificación.
- Diagramas SVG: dejar al menos ~8 px de separación entre círculos
  numerados y el texto del título; usar `textAnchor="start"` cuando el
  texto pueda solaparse con elementos a la izquierda.
- Tablas: envolver en `overflow-x-auto` para mobile.
- No agregar comentarios redundantes ni docstrings extensos.

## Flujo de trabajo

- Desarrollar siempre en branch separada (`claude/<descripcion>`).
- Hacer commits con mensajes en español, en imperativo presente,
  describiendo el "por qué" cuando sea relevante.
- Crear el PR como "ready for review" (no draft) apuntando a `main`.
- Validar JSX con SWC o `next build` antes de pushear cuando el
  entorno lo permita; si falla por falta de internet (Google Fonts),
  declararlo explícitamente.

## Estructura del blog

- Autores: `app/[locale]/blog/_assets/authors.js`.
- Categorías: `app/[locale]/blog/_assets/categories.js`.
- Estilos compartidos de contenido: `app/[locale]/blog/_assets/styles.js`.
- Página dinámica: `app/[locale]/blog/[articleId]/page.js`.
- Cada post exporta `{ slug, locale, title, description, categories,
  author, publishedAt, image, content }`. Si el post incluye una
  sección de FAQ, también debe exportar `faq: faqs` (ver siguiente
  sección).

## SEO: FAQs y Schema markup

Cuando agregues o modifiques una sección de Preguntas Frecuentes
(en posts del blog o en páginas de servicio), siempre:

- Definir las FAQs en un único array `const faqs = [{ q, a }, ...]`,
  nunca duplicar el contenido entre el render y el schema.
- En posts del blog, exportar `faq: faqs` en el objeto `post`. La
  página dinámica `app/[locale]/blog/[articleId]/page.js` emite
  automáticamente el JSON-LD `FAQPage` cuando el post lo trae.
- En páginas de servicio (no blog), emitir el `FAQPage` JSON-LD
  manualmente en `layout.js` o `page.js`, usando el mismo array que
  renderiza el componente de UI.
- El texto del schema debe ser idéntico al texto visible (Google
  penaliza divergencias).
- Validar con https://search.google.com/test/rich-results antes de
  mergear.

## Antes de cerrar una tarea

- Repasar el checklist final de `CONTENT_GUIDELINES.md`.
- Verificar que no se introdujeron em-dashes ni emojis-viñeta.
- Confirmar que el post está registrado en `content.js`.
- Si el post o la página tiene FAQs, confirmar que el `FAQPage`
  JSON-LD esté presente y sincronizado con el contenido visible.
