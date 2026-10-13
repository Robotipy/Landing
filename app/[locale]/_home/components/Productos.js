import Image from "next/image";
import { Link } from "@/i18n/routing";
import { products } from "@/libs/landingFacts";
import { BrowserFrame, PhoneFrame } from "./frames";
import Icon from "./icons";
import Reveal from "./Reveal";
import { container, SectionHeading } from "./ui";

const byKey = Object.fromEntries(products.map((p) => [p.key, p]));

function ProductLink({ href, children, dark = false }) {
  return (
    <Link
      href={href}
      className={`mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-xl px-5 py-2.5 text-lg font-bold transition duration-200 hover:-translate-y-0.5 motion-reduce:transform-none ${
        dark
          ? "bg-[#039695] text-[#00182B] hover:bg-[#0bb3b1]"
          : "border-2 border-[#00182B]/20 text-[#00182B] hover:border-[#00182B]"
      }`}
    >
      {children}
      <Icon name="arrow" className="h-5 w-5" />
    </Link>
  );
}

export default function Productos() {
  const yoao = byKey.yoao;
  const projects = byKey.projects;
  const monitor = byKey.monitor;
  return (
    <section aria-labelledby="h2-productos-title" className="bg-white py-20 md:py-28">
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="h2-productos-title"
            title="Software creado y mantenido por Robotipy"
            lead="Además de los proyectos a medida, creamos productos propios que puedes usar en tu empresa."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* YOAO */}
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#00182B] p-6 text-white transition duration-300 hover:shadow-2xl hover:shadow-[#00182B]/30 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(60% 50% at 80% 80%, rgba(3,150,149,0.28), transparent 70%)",
                }}
              />
              <div className="relative grid flex-1 items-center gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{yoao?.name || "YOAO"}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">{yoao?.description}</p>
                  <ProductLink href="/analysis" dark>
                    Conocer YOAO
                  </ProductLink>
                </div>
                <div className="mx-auto w-[62%] max-w-[310px] transition duration-500 group-hover:-translate-y-2 motion-reduce:transform-none sm:w-full">
                  <PhoneFrame>
                    <Image
                      src="/home-assets/yoao-deteccion.jpg"
                      alt="YOAO detectando y contando vehículos en una carretera desde un teléfono"
                      width={540}
                      height={960}
                      sizes="(min-width: 1024px) 310px, 60vw"
                      className="block h-auto w-full"
                    />
                  </PhoneFrame>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Robotipy Projects */}
          <Reveal delay={100} className="lg:col-span-5">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#F2F5F7] p-6 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none sm:p-8">
              <div className="transition duration-500 group-hover:-translate-y-1 motion-reduce:transform-none">
                <BrowserFrame label="Robotipy Projects" tone="dark">
                  <Image
                    src="/home-assets/projects-planificador.jpg"
                    alt="Planificación de recursos en Robotipy Projects: carga semanal de cada desarrollador"
                    width={1451}
                    height={662}
                    sizes="(min-width: 1024px) 460px, 90vw"
                    className="block h-auto w-full"
                  />
                </BrowserFrame>
              </div>
              <div className="mt-6">
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#00182B] sm:text-3xl">
                  {projects?.name}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-700">{projects?.description}</p>
                <ProductLink href={projects?.href || "/projects"}>Conocer Projects</ProductLink>
              </div>
            </article>
          </Reveal>

          {/* Robotipy Monitor */}
          <Reveal delay={200} className="lg:col-span-5">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#F2F5F7] p-6 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none sm:p-8">
              <div className="grid items-center gap-6 sm:grid-cols-5">
                <div className="sm:col-span-2">
                  <Image
                    src="/assets/pc-robotipy.png"
                    alt="Ilustración de un monitor con indicadores de empresa, tiempo, alertas y tendencia"
                    width={744}
                    height={488}
                    sizes="(min-width: 1024px) 200px, 80vw"
                    className="mx-auto h-auto w-full max-w-[280px] mix-blend-multiply transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
                  />
                </div>
                <div className="sm:col-span-3">
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#00182B] sm:text-3xl">
                    {monitor?.name}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-700">
                    Monitoreo de robots en producción: ejecuciones, fallas y avisos.
                  </p>
                  <ProductLink href={monitor?.href || "/monitor"}>Conocer Monitor</ProductLink>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
