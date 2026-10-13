import { Link } from "@/i18n/routing";
import { routes } from "@/libs/landingFacts";
import { successCases } from "@/libs/successCases";
import Icon from "./Icon";
import Reveal from "./Reveal";
import StoriesCarousel from "./StoriesCarousel";
import { container, linkLight, SectionHeading } from "./ui";

// Historias contadas en simple a partir de casos publicados en
// libs/successCases.js. La cifra y el sector salen siempre del caso.
const STORIES = [
  {
    id: "telecomunicaciones-1",
    tag: "Atención con IA",
    title: "Un soporte que responde a cualquier hora",
    before: "El equipo recibía miles de mensajes al día por WhatsApp y otros canales, sin forma de ordenarlos ni priorizarlos.",
    after: "Implementamos Melon Help: cada conversación se vuelve un ticket y un agente de IA responde las consultas frecuentes.",
    image: "/images/servicios/Telecomunicaciones.jpeg",
    position: "50% 40%",
    metric: 0,
    metricLabel: "mensajes al día en los días de más demanda",
  },
  {
    id: "hoteleria-1",
    tag: "Robot de software",
    title: "La recepción dejó de contar camas a mano",
    before: "En cada uno de sus tres hoteles, la recepción pasaba hora y media al día haciendo el censo cama por cama.",
    after: "Un robot saca los datos del sistema del hotel, arma el informe de ocupación y lo envía por correo.",
    image: "/assets/banners/hoteleria.jpg",
    position: "8% 50%",
    suffix: " al día",
  },
  {
    id: "automotriz-6",
    tag: "Robot de software",
    title: "La disponibilidad de autos, al día cada noche",
    before: "Bloquear y desbloquear autos por sucursal se hacía a mano, mientras la demanda cambiaba todo el día.",
    after: "Un robot lo hace cada noche y cuando el equipo lo pide, con un reporte de cada ejecución.",
    image: "/assets/banners/automotriz.jpeg",
    position: "50% 50%",
    metric: 1,
    metricLabel: "sucursales actualizadas en cada ejecución",
  },
  {
    id: "sector-publico-1",
    tag: "YOAO, producto propio",
    title: "Cámaras que ahora entregan datos",
    before: "Las cámaras grababan calles y espacios públicos, pero contar autos y personas exigía revisar horas de video.",
    after: "Con YOAO, nuestro producto de analítica de video, se cuentan vehículos y personas por zona y se generan alertas.",
    image: "/home-assets/yoao-trafico.jpg",
    position: "50% 50%",
    metric: 1,
    metricLabel: "cámara o video grabado sirve para analizar",
  },
  {
    id: "alimentos-1",
    tag: "Robot de software",
    title: "Órdenes de producción validadas en minutos",
    before: "Ratificar cada orden de producción obligaba a revisar datos y documentos a mano.",
    after: "Un robot valida los datos y prepara la documentación que se necesita.",
    image: "/images/servicios/Manufactura.jpeg",
    position: "70% 50%",
  },
  {
    id: "mineria-1",
    tag: "Software a medida",
    title: "El modelo del proceso salió del Excel",
    before: "El modelo de recuperación de cobre vivía en planillas difíciles de calibrar y de auditar.",
    after: "Creamos una plataforma web que simula el proceso con datos reales y permite comparar escenarios.",
    image: "/assets/banners/mineria.jpg",
    position: "12% 50%",
    metric: 1,
    metricLabel: "módulos del modelo, más precisos que la planilla anterior",
  },
  {
    id: "retail-1",
    tag: "Software a medida con IA",
    title: "Preguntarle a las ventas por chat",
    before: "Proyectar ventas en distintos escenarios dependía de reportes armados a mano.",
    after: "Creamos una plataforma con tableros por escenario y un asistente de IA que responde preguntas sobre las ventas.",
    image: "/assets/banners/retail.jpg",
    position: "10% 50%",
    metric: 1,
    metricValue: "Chat con IA",
    metricLabel: "para hacer preguntas sobre las ventas tal como hablas",
  },
  {
    id: "seguros-1",
    tag: "Robot de software",
    title: "Cada cliente sabe cómo va su siniestro",
    before: "Revisar los siniestros pendientes y avisar a cada cliente se hacía a mano, uno por uno.",
    after: "Un robot revisa los pendientes y avisa a cada cliente por el medio que prefiere.",
    image: "/images/servicios/Seguros.jpeg",
    position: "30% 50%",
  },
];

const humanTime = (value) =>
  value
    .replace(/^1 hr$/, "1 hora")
    .replace(/ hr$/, " horas")
    .replace(/ min$/, " minutos");

function figureFor(story, item) {
  if (story.metric !== undefined && item.metrics?.[story.metric]) {
    const raw = item.metrics[story.metric].value;
    const approx = raw.startsWith("~");
    return {
      prefix: approx ? "Cerca de" : null,
      value: story.metricValue || (approx ? raw.slice(1) : raw),
      label: story.metricLabel || item.metrics[story.metric].label,
      detail: null,
    };
  }
  if (item.results) {
    const { manualExecution, automatedExecution, timeSaving } = item.results;
    return {
      prefix: null,
      value: timeSaving,
      label: "menos tiempo en la tarea",
      detail: `De ${humanTime(manualExecution)} a ${humanTime(automatedExecution)}${story.suffix || ""}`,
    };
  }
  return null;
}

function buildStories() {
  return STORIES.map((story) => {
    const item = successCases.find((c) => c.id === story.id);
    if (!item) return null;
    const figure = figureFor(story, item);
    if (!figure) return null;
    return {
      id: story.id,
      sector: item.industry,
      tag: story.tag,
      title: story.title,
      before: story.before,
      after: story.after,
      image: story.image,
      position: story.position,
      figure,
    };
  }).filter(Boolean);
}

export default function Stories() {
  const stories = buildStories();
  return (
    <section id="historias" aria-labelledby="historias-titulo" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className={container}>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="historias-titulo"
            eyebrow="Historias de clientes"
            title="Lo que cambió en empresas como la tuya"
            lead="Casos reales de distintas industrias. Mostramos el sector y no el nombre, por respeto a cada empresa."
          />
          <Link href={routes.cases} className={`${linkLight} shrink-0`}>
            Ver todos los casos
            <Icon name="right" className="h-5 w-5" />
          </Link>
        </Reveal>
        <Reveal className="mt-12">
          <StoriesCarousel stories={stories} />
        </Reveal>
      </div>
    </section>
  );
}
