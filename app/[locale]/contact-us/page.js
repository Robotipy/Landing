"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ClientForm from "@/components/ClientForm";
import config from "@/config";
import logo from "@/app/icon.png";

// Landing de conversión para tráfico de anuncios y visitas del sitio:
// sin menú de navegación (una sola acción posible). Solo logo arriba.
function MinimalHeader() {
  return (
    <div className="w-full max-w-6xl mx-auto flex items-center justify-start px-4 lg:px-8 py-6 lg:py-8">
      <div className="flex items-center gap-3">
        <Image src={logo} alt={`${config.appName} logo`} className="w-9 h-9" priority />
        <span className="font-bold text-xl text-white">{config.appName}</span>
      </div>
    </div>
  );
}

// Cómo se elige qué versión de venta mostrar:
//   1) ?servicio=automatizacion|software|chatbot|capacitacion|otro (elección
//      del visitante o link de campaña)
//   2) fbclid presente (tráfico de Meta Ads sin parámetro): automatización,
//      porque las campañas activas hoy venden automatización
//   3) sin nada: primero se pregunta "¿Qué te interesa?" (selector de servicios)
const SERVICE_VARIANTS = ["automatizacion", "software", "chatbot", "capacitacion"];
const CHOOSER_OPTIONS = ["automatizacion", "software", "chatbot", "capacitacion", "otro"];
const VARIANT_TO_INTEREST = {
  automatizacion: "rpa",
  software: "software",
  chatbot: "chatbot",
  capacitacion: "capacitacion",
  otro: "otro",
};

function ServiceChooser({ onPick }) {
  const t = useTranslations("contactPage");
  return (
    <div className="flex flex-col gap-10 items-center w-full max-w-3xl">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
          {t("chooser.title")}
        </h1>
        <p className="text-lg text-cyan-300">{t("chooser.subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {CHOOSER_OPTIONS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onPick(key)}
            className={`text-left rounded-xl border border-cyan-800/30 bg-cyan-950/40 px-6 py-5 hover:border-teal-400 hover:bg-cyan-900/40 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 ${
              key === "otro" ? "md:col-span-2" : ""
            }`}
          >
            <p className="font-semibold text-white">{t(`chooser.cards.${key}.title`)}</p>
            <p className="text-sm text-cyan-300 mt-1">{t(`chooser.cards.${key}.desc`)}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function ContactUsContent() {
  const t = useTranslations("contactPage");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const submitted = searchParams.has("submitted");

  const servicioParam = searchParams.get("servicio");
  const fromAds = searchParams.has("fbclid");
  const variant = SERVICE_VARIANTS.includes(servicioParam)
    ? servicioParam
    : fromAds
      ? "automatizacion"
      : "default";
  const showChooser = !submitted && !fromAds && !CHOOSER_OPTIONS.includes(servicioParam);

  const pickService = (key) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("servicio", key);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const formParams = {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    phone: searchParams.get("phone") || "",
    companyName: searchParams.get("companyName") || "",
    role: searchParams.get("role") || "",
    companySize: searchParams.get("companySize") || "",
    website: searchParams.get("website") || "",
    additionalInfo: searchParams.get("additionalInfo") || "",
    interest: VARIANT_TO_INTEREST[servicioParam] || VARIANT_TO_INTEREST[variant] || "",
  };

  const stats = [
    { value: t("stats.timeValue"), label: t("stats.timeLabel") },
    { value: t("stats.errorsValue"), label: t("stats.errorsLabel") },
    { value: t("stats.projectsValue"), label: t("stats.projectsLabel") },
    { value: t("stats.countriesValue"), label: t("stats.countriesLabel") },
  ];

  return (
    <>
      {/* Oculta el chat de Zoho SalesIQ solo en esta landing: si aparece
          "desconectado" resta confianza y distrae de la única acción (el form). */}
      <style>{`#zsiq_float { display: none !important; }`}</style>
      <main id="main-content">
        <section className="min-h-screen flex flex-col items-center px-4 pb-28 lg:pb-20 lg:px-8 background-image">
          <MinimalHeader />
          <div className="flex flex-col gap-10 lg:gap-14 items-center max-w-6xl mx-auto text-center text-white pt-10 lg:pt-16">
            {showChooser ? (
              <ServiceChooser onPick={pickService} />
            ) : (
              <>
                <div className="space-y-5">
                  <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
                    {t(`variants.${variant}.title`)}
                  </h1>
                  <p className="text-lg lg:text-xl text-cyan-300 max-w-3xl mx-auto">
                    {t(`variants.${variant}.subtitle`)}
                  </p>
                </div>

                {/* Banda de credibilidad: resultados reales antes del form */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-cyan-800/30 bg-cyan-950/40 px-4 py-3"
                    >
                      <p className="text-2xl font-bold text-teal-400">{s.value}</p>
                      <p className="text-xs text-cyan-300">{s.label}</p>
                    </div>
                  ))}
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center px-4 py-20 lg:py-20 lg:px-8 background-image">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                      {t("successMessage")}
                    </h1>
                  </div>
                ) : (
                  <ClientForm initialValues={formParams} />
                )}

                {/* Qué pasa después: reduce la incertidumbre del decisor */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl text-left">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="flex items-start gap-3">
                      <span className="flex-none w-7 h-7 rounded-full bg-teal-500 text-white text-sm font-bold flex items-center justify-center">
                        {n}
                      </span>
                      <p className="text-sm text-cyan-200">{t(`steps.step${n}`)}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="mt-6 text-center text-cyan-400 text-sm">
              <p>
                {t("assistanceText")}{" "}
                <a
                  href={`mailto:${config.mailgun.supportEmail}`}
                  className="text-teal-400 hover:text-teal-300 underline"
                >
                  {config.mailgun.supportEmail}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA pegajoso en celular: mantiene la acción principal siempre a la
            vista mientras el visitante scrollea. Oculto en desktop. */}
        {!showChooser && !submitted && (
          <div
            className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-cyan-800/40 bg-[#0a1622]/95 backdrop-blur px-4 pt-3"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
          >
            <div className="flex items-center gap-2 max-w-2xl mx-auto">
              <a
                href="#form"
                className="flex-1 text-center bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-md font-semibold"
              >
                {t("stickyCta")}
              </a>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default function ClientInfoPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactUsContent />
    </Suspense>
  );
}
