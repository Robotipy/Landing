import { contactHref, products, tools } from "@/libs/landingFacts";
import { successCases } from "@/libs/successCases";
import { HOME_VARIANT } from "./track";
import TrackedLink from "./TrackedLink";
import { AppLink, bandWhite, container, line, SectionHeader, sectionY, SrContext, textLink, textMuted } from "./ui";

const ORDER = ["melonhelp", "yoao", "monitor"];
const caseById = (id) => successCases.find((c) => c.id === id) || null;
const metricValue = (c, label) => c?.metrics?.find((m) => m.label.toLowerCase().includes(label))?.value;
const approx = (value) => String(value).replace(/^~/, "cerca de ");
const moreThan = (value) => (String(value).endsWith("+") ? `más de ${String(value).slice(0, -1)}` : value);

// Prueba y enlaces de cada producto. Los textos de los casos se arman con las
// métricas de libs/successCases.js.
function productExtras(key) {
  if (key === "melonhelp") {
    const c = caseById("telecomunicaciones-1");
    const messages = metricValue(c, "mensajes");
    const tickets = metricValue(c, "tickets");
    return {
      proof:
        c && messages && tickets
          ? `Caso: un ${c.industry.toLowerCase()} recibe ${approx(messages)} mensajes al día en sus días de más demanda. Con Melon Help registró ${moreThan(
              tickets
            )} tickets en un día y da la primera respuesta con IA a toda hora.`
          : null,
      links: [
        ...(c ? [{ href: `/casos-exito/${c.categoria}`, label: "Ver el caso", sr: c.industry }] : []),
        {
          href: contactHref(HOME_VARIANT, { servicio: "chatbot" }),
          label: "Pide una demostración",
          track: { location: "melonhelp" },
        },
      ],
    };
  }
  if (key === "yoao") {
    const c = caseById("sector-publico-1");
    const aforo = tools.find((t) => t.href === "/calculadora-aforo-vehicular");
    return {
      proof: c
        ? `Caso: un ${c.industry.toLowerCase()} procesa video en vivo o grabado de las cámaras que ya tenía para contar vehículos y personas.`
        : null,
      // /analysis es la página de análisis de video del sitio; hoy no usa el
      // nombre YOAO, por eso el enlace describe el destino.
      links: [
        { href: "/analysis", label: "Conoce la plataforma de análisis de video" },
        ...(aforo ? [{ href: aforo.href, label: "Calcula el costo de un aforo vehicular", tool: aforo.href }] : []),
        ...(c ? [{ href: `/casos-exito/${c.categoria}`, label: "Ver el caso", sr: c.industry }] : []),
      ],
    };
  }
  if (key === "monitor") {
    const monitor = products.find((p) => p.key === "monitor");
    return {
      proof: null,
      links: [
        ...(monitor?.href ? [{ href: monitor.href, label: `Conoce ${monitor.name}` }] : []),
        { href: "/blog/como-monitorear-robots-rpa-en-produccion", label: "Cómo monitorear robots RPA en producción" },
      ],
    };
  }
  return { proof: null, links: [] };
}

function ProductLink({ link }) {
  if (link.track) {
    return (
      <TrackedLink href={link.href} params={link.track} className={textLink}>
        {link.label}
      </TrackedLink>
    );
  }
  if (link.tool) {
    return (
      <TrackedLink href={link.href} event="home_tool_click" params={{ tool: link.tool, location: "productos" }} className={textLink}>
        {link.label}
      </TrackedLink>
    );
  }
  return (
    <AppLink href={link.href} className={textLink}>
      {link.label}
      <SrContext>{link.sr}</SrContext>
    </AppLink>
  );
}

export default function Products() {
  const items = ORDER.map((key) => products.find((p) => p.key === key))
    .filter(Boolean)
    .map((p) => ({ ...p, ...productExtras(p.key) }));

  return (
    <section id="productos" aria-labelledby="productos-titulo" className={`${bandWhite} ${sectionY}`}>
      <div className={container}>
        <SectionHeader
          titleId="productos-titulo"
          eyebrow="Productos"
          title="Productos propios de Robotipy"
          body="Melon Help y YOAO se cotizan aparte de los servicios con precio publicado."
        />
        <ul className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((p) => (
            <li
              key={p.key}
              className={`flex min-w-0 flex-col rounded-2xl border ${line} bg-white p-6 md:p-7`}
            >
              <h3 className="text-xl font-bold leading-7">{p.name}</h3>
              <p className={`mt-2 text-[15px] leading-6 ${textMuted}`}>{p.description}</p>
              {p.proof && (
                <p className="mt-5 rounded-xl bg-[#F6F8FA] p-4 text-[15px] leading-6 text-[#0A2540]">{p.proof}</p>
              )}
              <div className="mt-auto pt-6">
                <ul className={`flex flex-col gap-2 border-t ${line} pt-4 text-[15px] leading-6`}>
                  {p.links.map((link) => (
                    <li key={link.href + link.label}>
                      <ProductLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
