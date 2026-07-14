"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ClientForm from "@/components/ClientForm";
import config from "@/config";
import logo from "@/app/icon.png";

// Landing de conversión para tráfico de anuncios: sin menú de navegación
// (una sola acción posible: dejar los datos). Solo logo arriba.
function MinimalHeader() {
  return (
    <div className="w-full flex items-center justify-center py-5">
      <div className="flex items-center gap-2">
        <Image src={logo} alt={`${config.appName} logo`} className="w-8 h-8" priority />
        <span className="font-bold text-lg text-white">{config.appName}</span>
      </div>
    </div>
  );
}

function ContactUsContent() {
  const t = useTranslations("contactPage");
  const searchParams = useSearchParams();
  const submitted = searchParams.has("submitted");

  const formParams = {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    phone: searchParams.get("phone") || "",
    companyName: searchParams.get("companyName") || "",
    role: searchParams.get("role") || "",
    companySize: searchParams.get("companySize") || "",
    website: searchParams.get("website") || "",
    additionalInfo: searchParams.get("additionalInfo") || "",
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
        <section className="min-h-screen flex flex-col items-center px-4 pb-16 lg:px-8 background-image">
          <MinimalHeader />
          <div className="flex flex-col gap-8 items-center max-w-6xl mx-auto text-center text-white pt-6">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
                {t("title")}
              </h1>
              <p className="text-lg lg:text-xl text-cyan-300 max-w-3xl mx-auto">
                {t("subtitle")}
              </p>
            </div>

            {/* Banda de credibilidad: resultados reales, visibles antes del form */}
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

            <div className="mt-4 text-center text-cyan-400 text-sm">
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
