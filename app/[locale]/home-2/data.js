// Datos del home de prueba /home-2 ("Tecnología en acción").
// Todo dato sobre Robotipy sale de libs/landingFacts.js o libs/successCases.js:
// aquí solo se elige qué mostrar y con qué imagen.

import { successCases } from "@/libs/successCases";

export const VARIANT = "home-2";

export const meta = {
  title: "Robotipy | Automatización con IA, robots y software a medida",
  description:
    "Agentes de IA para WhatsApp, robots de software para tareas repetitivas, aplicaciones a medida y productos propios. La primera reunión no tiene costo.",
};

// Casos del carrusel, equilibrados por industria y por tipo de solución.
// metric: índice de case.metrics a destacar. Sin metric se usa results.timeSaving.
// name: título en español simple cuando el nombre interno del caso es técnico.
const casePicks = [
  {
    id: "telecomunicaciones-1",
    kind: "Agente de IA",
    image: "/assets/banners/telecomunicaciones.jpg",
    position: "object-right",
    metric: 0,
  },
  {
    id: "hoteleria-1",
    kind: "Robot",
    image: "/assets/banners/hoteleria.jpg",
    position: "object-left",
  },
  {
    id: "mineria-1",
    kind: "Software a medida",
    image: "/assets/banners/mineria.jpg",
    position: "object-left",
    metric: 0,
  },
  {
    id: "automotriz-6",
    kind: "Robot",
    image: "/assets/banners/automotriz.jpeg",
    position: "object-center",
    metric: 1,
  },
  {
    id: "servicios-profesionales-1",
    kind: "Analítica de video",
    name: "Conteo de tráfico con IA",
    image: "/assets/banners/sector-publico.jpg",
    position: "object-left",
  },
  {
    id: "alimentos-1",
    kind: "Robot",
    name: "Ratificación de órdenes de producción",
    image: "/images/servicios/Manufactura.jpeg",
    position: "object-[50%_60%]",
  },
  {
    id: "retail-1",
    kind: "Software a medida",
    image: "/assets/banners/retail.jpg",
    position: "object-right",
    metric: 1,
  },
  {
    id: "seguros-1",
    kind: "Robot",
    image: "/images/servicios/Seguros.jpeg",
    position: "object-[50%_45%]",
  },
];

export function getCaseCards() {
  return casePicks
    .map((pick) => {
      const c = successCases.find((item) => item.id === pick.id);
      if (!c) return null;
      const metric = typeof pick.metric === "number" ? c.metrics?.[pick.metric] : null;
      let figure;
      let label;
      let detail = null;
      if (metric) {
        figure = metric.value;
        label = metric.label;
      } else if (c.results?.timeSaving) {
        figure = c.results.timeSaving;
        label = "Menos tiempo en la tarea";
        detail = `De ${c.results.manualExecution} a ${c.results.automatedExecution}`;
      } else {
        return null;
      }
      return {
        id: c.id,
        industry: c.industry,
        name: pick.name || c.name,
        href: `/casos-exito/${c.categoria}`,
        figure,
        label,
        detail,
        kind: pick.kind,
        image: pick.image,
        position: pick.position,
      };
    })
    .filter(Boolean);
}

// Cifras reales del caso de atención con Melon Help (proveedor de internet).
export function getMelonCase() {
  const c = successCases.find((item) => item.id === "telecomunicaciones-1");
  if (!c?.metrics) return null;
  return {
    industry: c.industry,
    href: `/casos-exito/${c.categoria}`,
    stats: [c.metrics[0], c.metrics[2]].filter(Boolean),
  };
}
