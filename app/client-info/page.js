"use client";

import Header from "@/components/Header";
import ClientForm from "@/components/ClientForm";
import { Suspense } from "react";
import config from "@/config";

export default function ClientInfoPage() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 lg:py-20 lg:px-8 background-image">
          <div className="flex flex-col gap-8 items-center max-w-6xl mx-auto text-center text-white">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Let&apos;s Build Something Amazing Together
              </h1>
              <p className="text-lg lg:text-xl text-cyan-300 max-w-3xl">
                Share your automation challenges with us. Our team of experts will analyze your needs 
                and create a customized solution that transforms your business processes.
              </p>
            </div>
            
            <ClientForm />
            
            <div className="mt-8 text-center text-cyan-400 text-sm">
              <p>
                Need immediate assistance? Contact us directly at{" "}
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