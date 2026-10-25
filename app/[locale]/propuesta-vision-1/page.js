import Image from "next/image";
import { Link } from "@/i18n/routing";
import MegaMenu from "../home-4/_components/MegaMenu";
import { Cierre, wrap } from "../home-4/_components/Secciones";
import { c, propuestaMetadata, soloEspanol, FaqLista } from "../vision-artificial/_propuestas/comun";
import VideoYoao from "../vision-artificial/_propuestas/VideoYoao";

// Propuesta 1: editorial clara, con el lenguaje de la home nueva. Listas con
// separadores, cifras grandes y una sola franja de color.
export const generateMetadata = () => propuestaMetadata(1);

const rule = <div className="h-1 w-16 bg-[#039695]" />;
const h2 = "mt-6 text-3xl font-light leading-tight text-[#00182B] sm:text-4xl";

function Lista({ title, items }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-[#027a79]">{title}</p>
      <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
        {items.map((u) => (
          <li key={u.title} className="py-5">
            <h3 className="text-xl font-normal text-[#00182B]">{u.title}</h3>
            <p className="mt-1 leading-relaxed text-slate-600">{u.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const enVideo = [
  { name: "filas", caption: "Fila en un terminal: cada persona se sigue para medir cuánto espera." },
  { name: "seguridad", caption: "Obra en construcción: quién lleva casco y quién no." },
  { name: "estacionamiento", caption: "Estacionamiento visto con dron: cada auto contado y seguido." },
];

export default async function Propuesta1({ params }) {
  await soloEspanol(params);
  return (
    <>
      <MegaMenu />
      <main id="main-content" className="bg-white pt-16 text-[#00182B] antialiased">
        <section className={`${wrap} grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2`}>
          <div>
            {rule}
            <h1 className="mt-8 text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">{c.h1}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">{c.subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href={c.contactHref} className="inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white hover:bg-[#0b2c47]">
                {c.cta}
              </Link>
              <Link href={c.secondaryCta.href} className="font-semibold text-[#027a79] hover:underline">
                {c.secondaryCta.text} →
              </Link>
            </div>
          </div>
          <figure>
            <VideoYoao name="rotonda" label="Rotonda grabada con dron: YOAO detecta cada vehículo y le asigna un número para seguirlo" />
            <figcaption className="mt-3 text-sm text-slate-500">Rotonda grabada con dron y analizada con YOAO. Cada vehículo recibe un número y se sigue mientras cruza la imagen.</figcaption>
          </figure>
        </section>

        <section className="border-t border-slate-200">
          <div className={`${wrap} grid gap-10 py-16 sm:py-20 lg:grid-cols-12`}>
            <div className="lg:col-span-4">
              {rule}
              <h2 className={h2}>{c.intro.title}</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-slate-600 lg:col-span-7 lg:col-start-6">
              {c.intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f8f8]">
          <div className={`${wrap} py-16 sm:py-20`}>
            {rule}
            <h2 className={h2}>{c.useCases.title}</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{c.useCases.intro}</p>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Lista title={c.useCases.yoaoTitle} items={c.useCases.yoao} />
              <Lista title={c.useCases.customTitle} items={c.useCases.custom} />
            </div>
          </div>
        </section>

        <section className={`${wrap} py-16 sm:py-20`}>
          {rule}
          <h2 className={h2}>Así se ve en video</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {enVideo.map((v) => (
              <figure key={v.name}>
                <VideoYoao name={v.name} label={v.caption} />
                <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">{v.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={wrap}>
          <figure>
            <Image
              src="/home-assets/yoao-dron.jpg"
              alt="Toma de dron de una rotonda con tráfico: YOAO detecta cada auto y bus y le asigna un número para seguirlo"
              width={1642}
              height={923}
              sizes="(min-width:1280px) 1216px, 92vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-slate-500">Toma de dron procesada con YOAO para un estudio de tránsito.</figcaption>
          </figure>
        </section>

        <section className={`${wrap} py-16 sm:py-20`}>
          {rule}
          <h2 className={h2}>{c.cases.title}</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:divide-x lg:divide-slate-200">
            {c.cases.items.map((item, k) => (
              <article key={item.title} className={k === 1 ? "lg:pl-12" : "lg:pr-12"}>
                <p className="text-sm text-slate-500">{item.industry}</p>
                <p className="mt-3 text-6xl font-light text-[#027a79]">{item.metrics[0].value}</p>
                <p className="mt-1 text-sm text-slate-500">{item.metrics[0].label}</p>
                <h3 className="mt-6 text-2xl font-light">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.solution}</p>
                <Link href={item.href} className="mt-4 inline-block font-semibold text-[#027a79] hover:underline">
                  {c.cases.link} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200">
          <div className={`${wrap} py-16 sm:py-20`}>
            {rule}
            <h2 className={h2}>{c.steps.title}</h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {c.steps.items.map((s, i) => (
                <li key={s.title} className="border-t-2 border-[#039695] pt-5">
                  <p className="text-4xl font-light text-[#027a79]">{i + 1}</p>
                  <h3 className="mt-3 text-xl font-normal">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-slate-200">
          <div className={`${wrap} py-16 sm:py-20`}>
            {rule}
            <h2 className={h2}>{c.cameras.title}</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{c.cameras.intro}</p>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b-2 border-[#00182B] text-sm uppercase tracking-wider text-slate-500">
                    {c.cameras.headers.map((h) => (
                      <th key={h} className="py-3 pr-6 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {c.cameras.rows.map(([useCase, camera, processing]) => (
                    <tr key={useCase} className="align-top">
                      <td className="py-4 pr-6 text-[#00182B]">{useCase}</td>
                      <td className="py-4 pr-6 text-slate-600">{camera}</td>
                      <td className="py-4 text-slate-600">{processing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 max-w-3xl leading-relaxed text-slate-600">
              {c.yoao.text}{" "}
              <Link href="/analysis" className="font-semibold text-[#027a79] hover:underline">
                Conocer YOAO →
              </Link>
            </p>
          </div>
        </section>

        <section className="bg-[#00182B] text-white">
          <div className={`${wrap} grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-12`}>
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-light leading-tight sm:text-4xl">{c.live.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/75">{c.live.text}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href={c.liveContactHref} className="inline-flex rounded-md bg-[#039695] px-7 py-3 font-semibold text-[#00182B] hover:bg-[#0bb3b1]">
                {c.live.button}
              </Link>
            </div>
          </div>
        </section>

        <section className={`${wrap} py-16 sm:py-20`}>
          {rule}
          <h2 className={`${h2} mb-8`}>{c.faqTitle}</h2>
          <FaqLista />
        </section>
      </main>
      <Cierre />
    </>
  );
}
