// Datos del evaluador de automatización que el home muestra como vista previa.
// Fuente: app/[locale]/evaluador-automatizacion/components/AutomationScorer.js
// (QUESTIONS no se exporta y el archivo es "use client", por eso se copia aquí)
// y data.js (PAGE_DESCRIPTION: 7 preguntas, sin registro). Si cambia la primera
// pregunta del evaluador, se actualiza aquí.
export const evaluator = {
  href: "/evaluador-automatizacion",
  questions: 7,
  firstQuestion: {
    id: "frecuencia",
    label: "¿Cada cuánto se ejecuta el proceso?",
    options: [
      { value: "diario", label: "Todos los días" },
      { value: "semanal", label: "Cada semana" },
      { value: "mensual", label: "Una vez al mes" },
      { value: "esporadico", label: "De vez en cuando" },
    ],
  },
};
