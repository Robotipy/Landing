import Image from "next/image";
import ClientLogos from "@/components/landing/ClientLogos";
import { facts } from "@/libs/landingFacts";
import Reveal from "./Reveal";
import { container } from "./ui";

// Banda blanca de confianza: cifras grandes y logos de clientes.
export default function Clientes() {
  return (
    <section aria-labelledby="h2-clientes-title" className="bg-white py-16 text-[#00182B] md:py-20">
      <h2 id="h2-clientes-title" className="sr-only">
        Clientes y trayectoria de Robotipy
      </h2>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-12`}>
        <Reveal className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-5">
          <div>
            <p className="text-5xl font-extrabold tracking-tight sm:text-6xl">{facts.projects}</p>
            <p className="mt-2 text-lg text-slate-600">proyectos entregados</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold tracking-tight sm:text-6xl">{facts.clientCountries.length}</p>
            <p className="mt-2 text-lg text-slate-600">países con clientes</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Image
              src="/images/rocketbot.svg"
              alt="Rocketbot"
              width={150}
              height={54}
              className="h-12 w-auto brightness-0 sm:h-14"
            />
            <p className="mt-2 text-lg text-slate-600">Platinum Partner</p>
          </div>
          <p className="col-span-2 text-lg text-slate-600 sm:col-span-3">
            Clientes en {facts.clientCountriesText}. Equipo en {facts.team}.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <ClientLogos tone="light" label="Empresas que trabajan con nosotros" />
        </Reveal>
      </div>
    </section>
  );
}
