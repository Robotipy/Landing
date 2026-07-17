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
const WHATSAPP_URL =
  "https://wa.me/56999611040?text=" +
  encodeURIComponent("Hola, vengo desde la web de Robotipy y me gustaría más información.");

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
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex-none w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-md text-white"
              >
                <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.46 1.71 6.402L3.2 28.8l6.56-1.68a12.74 12.74 0 006.243 1.6h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.75-9.052A12.72 12.72 0 0016.003 3.2zm0 23.04h-.004a10.6 10.6 0 01-5.4-1.48l-.388-.23-4.03 1.03 1.075-3.93-.253-.403a10.59 10.59 0 01-1.62-5.63c0-5.865 4.774-10.64 10.643-10.64 2.842 0 5.514 1.108 7.523 3.12a10.57 10.57 0 013.117 7.527c0 5.865-4.774 10.64-10.64 10.64zm5.834-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.538-.72-.548l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.457 4.823.763.33 1.358.527 1.822.674.766.243 1.463.209 2.014.127.615-.092 1.892-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
                </svg>
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
