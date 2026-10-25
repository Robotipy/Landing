import Image from "next/image";
import { Link } from "@/i18n/routing";
import MegaMenu from "../home-4/_components/MegaMenu";
import { Cierre, wrap } from "../home-4/_components/Secciones";
import { c, propuestaMetadata, soloEspanol, FaqLista } from "../vision-artificial/_propuestas/comun";
import VideoYoao from "../vision-artificial/_propuestas/VideoYoao";

// Propuesta 2: oscura y visual. Cada uso se muestra con un video real
// analizado con el worker de YOAO.
export const generateMetadata = () => propuestaMetadata(2);

const [vehiculos, personas, filas, estacionamientos, patio, seguridad] = c.useCases.yoao;

const usos = [
  {
    title: "Aforos y estudios de tránsito",
    video: "interseccion",
    alt: "Intersección vista con dron: YOAO detecta y numera cada vehículo",
    items: [vehiculos, personas],
  },
  {
    title: "Filas y atención",
    video: "filas",
    alt: "Fila en un terminal: YOAO sigue a cada persona para medir su espera",
    items: [filas],
  },
  {
    title: "Estacionamientos y patio logístico",
    video: "estacionamiento",
    alt: "Estacionamiento visto con dron: YOAO cuenta y sigue cada auto",
    items: [estacionamientos, patio],
  },
  {
    title: "Seguridad en faena",
    video: "seguridad",
    alt: "Obra en construcción: YOAO marca quién lleva casco y quién no",
    items: [seguridad],
  },
];

const btn = "inline-flex rounded-md bg-[#039695] px-7 py-3 font-semibold text-[#00182B] hover:bg-[#0bb3b1]";

export default async function Propuesta2({ params }) {
  await soloEspanol(params);
  return (
    <>
      <MegaMenu />
      <main id="main-content" className="bg-[#00182B] pt-16 text-white antialiased">
        <section className={`${wrap} pt-20 sm:pt-28`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4fd1d0]">Visión artificial</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-light leading-tight sm:text-6xl">{c.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{c.subtitle}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href={c.contactHref} className={btn}>{c.cta}</Link>
            <Link href={c.secondaryCta.href} className="font-semibold text-white hover:underline">
              {c.secondaryCta.text} →
            </Link>
          </div>
          <figure className="mt-16">
            <VideoYoao name="rotonda" label="Rotonda grabada con dron: YOAO detecta cada vehículo y le asigna un número para seguirlo" className="ring-1 ring-white/10" />
            <figcaption className="mt-3 text-sm text-white/50">
              Rotonda grabada con dron y analizada con YOAO. Cada vehículo recibe un número y se sigue mientras cruza la imagen.
            </figcaption>
          </figure>
        </section>

        <section className={`${wrap} py-20 sm:py-28`}>
          <p className="max-w-4xl text-2xl font-light leading-snug text-white/90 sm:text-3xl">
            {c.intro.paragraphs[0]}
          </p>
        </section>

        <section aria-labelledby="usos">
          <div className={wrap}>
            <h2 id="usos" className="text-3xl font-light sm:text-4xl">{c.useCases.title}</h2>
            <p className="mt-4 max-w-3xl text-lg text-white/70">{c.useCases.intro}</p>
          </div>
          <div className="mt-14 space-y-20 sm:space-y-28">
            {usos.map((u, k) => (
              <div key={u.title} className={`${wrap} grid items-center gap-10 lg:grid-cols-12 lg:gap-14`}>
                <div className={`lg:col-span-7 ${k % 2 ? "lg:order-2" : ""}`}>
                  <VideoYoao name={u.video} label={u.alt} className="ring-1 ring-white/10" />
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-3xl font-light leading-tight">{u.title}</h3>
                  <ul className="mt-6 space-y-5">
                    {u.items.map((item) => (
                      <li key={item.title} className="border-l-2 border-[#039695] pl-5">
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="mt-1 leading-relaxed text-white/70">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${wrap} py-20 sm:py-28`}>
          <h2 className="text-3xl font-light sm:text-4xl">{c.useCases.customTitle}</h2>
          <div className="mt-10 grid gap-x-16 gap-y-8 sm:grid-cols-2">
            {c.useCases.custom.map((item) => (
              <div key={item.title} className="border-l-2 border-[#039695] pl-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 leading-relaxed text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0b2c47]/40">
          <div className={`${wrap} py-16 sm:py-20`}>
            <h2 className="text-3xl font-light sm:text-4xl">{c.cases.title}</h2>
            <figure className="mt-10">
              <Image
                src="/home-assets/yoao-dron.jpg"
                alt="Toma de dron de una rotonda con tráfico: YOAO detecta cada auto y bus y le asigna un número para seguirlo"
                width={1642}
                height={923}
                sizes="(min-width:1280px) 1216px, 92vw"
                className="h-auto w-full ring-1 ring-white/10"
              />
              <figcaption className="mt-3 text-sm text-white/50">Toma de dron procesada con YOAO para un estudio de tránsito.</figcaption>
            </figure>
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              {c.cases.items.map((item) => (
                <article key={item.title}>
                  <p className="text-7xl font-light text-[#4fd1d0]">{item.metrics[0].value}</p>
                  <p className="mt-2 text-white/60">{item.metrics[0].label}</p>
                  <h3 className="mt-6 text-xl font-semibold">
                    {item.industry}: {item.title.toLowerCase()}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-white/70">{item.solution}</p>
                  <Link href={item.href} className="mt-4 inline-block font-semibold text-[#4fd1d0] hover:underline">
                    {c.cases.link} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${wrap} py-20 sm:py-24`}>
          <h2 className="text-3xl font-light sm:text-4xl">{c.steps.title}</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.items.map((s, i) => (
              <li key={s.title}>
                <p className="text-5xl font-light text-[#4fd1d0]">0{i + 1}</p>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-white/70">{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-[#039695] text-[#00182B]">
          <div className={`${wrap} py-16 sm:py-20`}>
            <h2 className="max-w-3xl text-3xl font-light leading-tight sm:text-5xl">{c.live.title}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#00182B]/80">{c.live.text}</p>
            <Link href={c.liveContactHref} className="mt-10 inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white hover:bg-[#0b2c47]">
              {c.live.button}
            </Link>
          </div>
        </section>

        <section className={`${wrap} py-20 sm:py-24`}>
          <h2 className="mb-8 text-3xl font-light sm:text-4xl">{c.faqTitle}</h2>
          <FaqLista dark />
        </section>

        <section className={`${wrap} pb-24 text-center`}>
          <h2 className="mx-auto max-w-3xl text-3xl font-light leading-tight sm:text-4xl">{c.closing.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{c.closing.text}</p>
          <Link href={c.contactHref} className={`mt-10 ${btn}`}>{c.cta}</Link>
        </section>
      </main>
      <Cierre />
    </>
  );
}
