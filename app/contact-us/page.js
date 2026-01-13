"use client";

import Header from "@/components/Header";
import ClientForm from "@/components/ClientForm";
import { Suspense } from "react";
import config from "@/config";
import { useSearchParams } from "next/navigation";

function ContactUsContent() {
  const searchParams = useSearchParams();
  const submitted = searchParams.has("submitted");
  
  // Extract form parameters from URL
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

  // if submitted is true, show the success message
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-20 lg:px-8 background-image">
          <div className="flex flex-col gap-8 items-center max-w-6xl mx-auto text-center text-white">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Construyamos Algo Increíble Juntos
              </h1>
              <p className="text-lg lg:text-xl text-cyan-300 max-w-3xl mx-auto">
                Comparte tus desafíos de automatización o desarrollo de software con nosotros. Nuestro equipo de expertos analizará tus necesidades 
                y creará una solución personalizada que transforme los procesos de tu empresa.
              </p>
            </div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center px-4 py-20 lg:py-20 lg:px-8 background-image">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  ¡Gracias! Tu información ha sido enviada exitosamente. Te contactaremos pronto.
                </h1>
              </div>
            ) : (
              <ClientForm initialValues={formParams} />
            )}
            
            <div className="mt-8 text-center text-cyan-400 text-sm">
              <p>
                ¿Necesitas asistencia inmediata? Contáctanos directamente en{" "}
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