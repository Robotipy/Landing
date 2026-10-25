import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getSEOTags } from "@/libs/seo";
import { content } from "../content";

// Piezas compartidas por las propuestas de diseño /propuesta-vision-1, -2 y -3
// (noindex, solo español). Usan el mismo texto que /vision-artificial.
export const c = content.es;

export const propuestaMetadata = (n) =>
  getSEOTags({
    locale: "es",
    title: `Propuesta ${n}: visión artificial | Robotipy`,
    description: c.description,
    canonicalUrlRelative: `/propuesta-vision-${n}`,
    availableLocales: ["es"],
    extraTags: { robots: { index: false, follow: false } },
  });

export async function soloEspanol(params) {
  const { locale } = await params;
  if (locale !== "es") notFound();
  setRequestLocale(locale);
}

// Preguntas frecuentes como lista con separadores, sin tarjetas.
export function FaqLista({ dark = false }) {
  const line = dark ? "divide-white/15 border-white/15" : "divide-slate-200 border-slate-200";
  const q = dark ? "text-white" : "text-[#00182B]";
  const a = dark ? "text-white/75" : "text-slate-600";
  return (
    <div className={`divide-y border-y ${line}`}>
      {c.faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
            <h3 className={`text-lg font-normal ${q}`}>{f.q}</h3>
            <span className="text-2xl font-light leading-none text-[#039695] transition group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className={`mt-3 max-w-3xl leading-relaxed ${a}`}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
