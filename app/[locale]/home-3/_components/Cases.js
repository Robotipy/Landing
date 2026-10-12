import { getTranslations } from "next-intl/server";
import { facts, routes } from "@/libs/landingFacts";
import { industries, successCases } from "@/libs/successCases";
import { findPost, postHref } from "./blog";
import {
  AppLink,
  bandWhite,
  btnSecondaryLight,
  Chip,
  container,
  line,
  SectionHeader,
  sectionY,
  SrContext,
  textLink,
  textMuted,
} from "./ui";

// Etiquetas para los sistemas de cada caso. Se usan mientras successCases no
// tenga el campo systems (pendiente en libs/successCases.js).
const TOOL_LABELS = {
  sap: "SAP",
  excel: "Excel",
  outlook: "Outlook",
  sharepoint: "SharePoint",
  azure: "Azure",
  python: "Python",
  sqlserver: "SQL Server",
  chrome: "Portales web",
  "reale-seguros": "Portales de aseguradoras",
};

const systemsOf = (c) => {
  if (Array.isArray(c.systems) && c.systems.length) return c.systems;
  const keys = c.tools.includes("reale-seguros") ? c.tools.filter((t) => t !== "chrome") : c.tools;
  return keys.map((t) => TOOL_LABELS[t]).filter(Boolean);
};

const metric = (c, label) => c.metrics?.find((m) => m.label.toLowerCase().includes(label))?.value;
// Espacio duro entre la cifra y la unidad para que no queden en líneas distintas.
const hours = (v) =>
  String(v)
    .replace(/\s*hr$/, " horas")
    .replace(/\s*min$/, " minutos")
    .replace(/\s*h$/, " horas");
const approx = (v) => String(v).replace(/^~/, "unos ");
const near = (v) => String(v).replace(/^~/, "cerca de ");
const moreThan = (v) => (String(v).endsWith("+") ? `más de ${String(v).slice(0, -1)}` : String(v));

// Titular de cada caso con las cifras de libs/successCases.js. Si falta una
// cifra, el caso no se muestra.
const FEATURED = [
  {
    id: "hoteleria-1",
    headline: (c) =>
      c.results &&
      `Censo diario de ocupación en 3 hoteles, de ${hours(c.results.manualExecution)} a ${hours(
        c.results.automatedExecution
      )}.`,
  },
  {
    id: "automotriz-5",
    headline: (c) => {
      const master = metric(c, "maestro");
      const requesters = metric(c, "solicitantes");
      return (
        master &&
        requesters &&
        `Materiales creados en SAP contra un maestro de ${moreThan(master)} registros, para ${approx(
          requesters
        )} solicitantes en todo Chile.`
      );
    },
  },
  {
    id: "automotriz-6",
    headline: (c) => {
      const records = metric(c, "registros");
      const branches = metric(c, "sucursales");
      const brands = metric(c, "marcas");
      return (
        records &&
        branches &&
        brands &&
        `${approx(records).replace(/^u/, "U")} registros por noche en ${branches} sucursales y ${brands} marcas, sobre un mainframe.`
      );
    },
  },
  {
    id: "alimentos-4",
    headline: (c) => {
      const sources = metric(c, "fuentes");
      return sources && `${sources} fuentes bancarias cargadas y contabilizadas en SAP cada día.`;
    },
  },
  {
    id: "financiero-7",
    headline: (c) => {
      const ai = metric(c, "lectura");
      const ocr = metric(c, "ocr");
      return (
        ai && ocr && `Conciliación bancaria con IA: ${ai} de acierto de lectura en pruebas, contra ${near(ocr)} con el OCR anterior.`
      );
    },
  },
  {
    id: "seguros-2",
    headline: (c) => {
      const every = metric(c, "bandeja");
      const types = metric(c, "tipos");
      const insurers = metric(c, "aseguradoras");
      return (
        every &&
        types &&
        insurers &&
        `Bandeja de siniestros revisada ${hours(every).toLowerCase()}, con ${types} tipos de tarea automatizados en los portales de ${insurers} aseguradoras.`
      );
    },
  },
];

function CaseCard({ item, hiddenOnMobile }) {
  return (
    <li
      className={`${hiddenOnMobile ? "hidden lg:flex" : "flex"} min-w-0 flex-col rounded-2xl border ${line} bg-white p-6`}
    >
      <p className={`text-sm font-medium leading-5 ${textMuted}`}>{item.industry}</p>
      <h3 className="mt-3 text-[22px] font-bold leading-[30px] text-[#0A2540] [text-wrap:pretty]">{item.headline}</h3>
      {item.systems.length > 0 && (
        <ul aria-label="Sistemas" className="mt-4 flex flex-wrap gap-1.5">
          {item.systems.map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-6">
        <div className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t ${line} pt-4 text-sm leading-5`}>
          <a href="#etapa-automatizacion" className={textLink}>
            Etapa 02: automatización de un proceso
          </a>
          <AppLink href={`/casos-exito/${item.categoria}`} className={textLink}>
            Ver el caso
            <SrContext>{item.industry}</SrContext>
          </AppLink>
        </div>
      </div>
    </li>
  );
}

export default async function Cases({ locale }) {
  const t = await getTranslations({ locale, namespace: "header" });

  const items = FEATURED.map(({ id, headline }) => {
    const c = successCases.find((x) => x.id === id);
    const text = c && headline(c);
    return text ? { id, headline: text, industry: c.industry, categoria: c.categoria, systems: systemsOf(c) } : null;
  }).filter(Boolean);

  const industryLinks = industries.map((ind) => ({
    href: `/casos-exito/${ind.slug}`,
    label: t(`dropdowns.cases.${ind.key}.label`),
  }));

  const financeGuides = ["como-automatizar-la-conciliacion-bancaria", "como-automatizar-cuentas-por-pagar-y-carga-de-facturas"]
    .map(findPost)
    .filter(Boolean);

  return (
    <section id="casos" aria-labelledby="casos-titulo" className={`${bandWhite} ${sectionY}`}>
      <div className={container}>
        <SectionHeader
          titleId="casos-titulo"
          eyebrow="Casos"
          title="Cifras de procesos que ya automatizamos"
          body={`Proyectos en ${facts.clientCountriesText}. Cada caso indica el sector y los sistemas que toca.`}
        />

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => (
            <CaseCard key={item.id} item={item} hiddenOnMobile={i >= 4} />
          ))}
        </ul>

        <div className={`mt-12 grid gap-10 border-t ${line} pt-10 lg:grid-cols-12 lg:gap-12`}>
          <nav aria-labelledby="casos-industria" className="min-w-0 lg:col-span-8">
            <h3 id="casos-industria" className="text-base font-bold leading-6">
              Casos por industria
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] leading-6 hyphens-auto sm:grid-cols-3">
              {industryLinks.map((link) => (
                <li key={link.href} className="min-w-0">
                  <AppLink href={link.href} className={textLink}>
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0 lg:col-span-4">
            {financeGuides.length > 0 && (
              <>
                <h3 className="text-base font-bold leading-6">Guías para finanzas</h3>
                <ul className="mt-4 flex flex-col gap-2.5 text-[15px] leading-6">
                  {financeGuides.map((post) => (
                    <li key={post.slug}>
                      <AppLink href={postHref(post.slug)} className={textLink}>
                        {post.title}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <AppLink href={routes.cases} className={`${btnSecondaryLight} mt-8 w-full sm:w-auto`}>
              Ver todos los casos
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
