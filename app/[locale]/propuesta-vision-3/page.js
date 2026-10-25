import Image from "next/image";
import { Link } from "@/i18n/routing";
import MegaMenu from "../home-4/_components/MegaMenu";
import { Cierre } from "../home-4/_components/Secciones";
import { c, propuestaMetadata, soloEspanol, FaqLista } from "../vision-artificial/_propuestas/comun";
import VideoYoao from "../vision-artificial/_propuestas/VideoYoao";

// Propuesta 3: mínima. Una columna de texto que se lee como una carta, con una
// sola imagen y casi sin elementos gráficos.
export const generateMetadata = () => propuestaMetadata(3);

const col = "mx-auto w-full max-w-3xl px-5";
const h2 = "mt-20 text-2xl font-semibold text-[#00182B] sm:text-3xl";
const p = "mt-5 text-lg leading-relaxed text-slate-700";
const link = "font-semibold text-[#027a79] underline-offset-4 hover:underline";

function Medimos({ title, items }) {
  return (
    <>
      <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-[#027a79]">{title}</h3>
      {items.map((u) => (
        <p key={u.title} className={p}>
          <span className="font-semibold text-[#00182B]">{u.title}.</span> {u.description}
        </p>
      ))}
    </>
  );
}

export default async function Propuesta3({ params }) {
  await soloEspanol(params);
  const [municipio, vial] = c.cases.items;
  return (
    <>
      <MegaMenu />
      <main id="main-content" className="bg-white pb-24 pt-16 antialiased">
        <article>
          <header className={`${col} pt-16 sm:pt-24`}>
            <h1 className="text-4xl font-semibold leading-tight text-[#00182B] sm:text-5xl">{c.h1}</h1>
            <p className="mt-6 text-xl leading-relaxed text-slate-600">{c.subtitle}</p>
            <p className="mt-8">
              <Link href={c.contactHref} className="inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white hover:bg-[#0b2c47]">
                {c.cta}
              </Link>
            </p>
          </header>

          <figure className="mx-auto mt-14 w-full max-w-4xl px-5">
            <VideoYoao name="rotonda" label="Rotonda grabada con dron: YOAO detecta cada vehículo y le asigna un número para seguirlo" />
            <figcaption className="mt-3 text-sm text-slate-500">
              Rotonda grabada con dron y analizada con YOAO, nuestra plataforma de analítica de video.
            </figcaption>
          </figure>

          <div className={col}>
            <h2 className={h2}>{c.intro.title}</h2>
            {c.intro.paragraphs.map((t) => (
              <p key={t.slice(0, 24)} className={p}>{t}</p>
            ))}

            <h2 className={h2}>Qué podemos medir</h2>
            <p className={p}>{c.useCases.intro}</p>
            <Medimos title={c.useCases.yoaoTitle} items={c.useCases.yoao} />
            <Medimos title={c.useCases.customTitle} items={c.useCases.custom} />

            <h2 className={h2}>Resultados</h2>
            <p className={p}>
              En un municipio procesamos el video de las cámaras de calles y espacios públicos: una hora de video se
              analiza en 1,2 horas, con conteos y eventos por zona.{" "}
              <Link href={municipio.href} className={link}>Ver el caso</Link>
            </p>
            <p className={p}>
              En una consultora de ingeniería vial, la revisión de los videos de cada estudio de tránsito pasó de 7 días a
              1, un 86% menos de tiempo, con el reporte listo en Excel.{" "}
              <Link href={vial.href} className={link}>Ver el caso</Link>
            </p>

            <figure className="mt-8">
              <Image
                src="/home-assets/yoao-dron.jpg"
                alt="Toma de dron de una rotonda con tráfico: YOAO detecta cada auto y bus y le asigna un número para seguirlo"
                width={1642}
                height={923}
                sizes="(min-width:768px) 720px, 92vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-sm text-slate-500">Toma de dron procesada con YOAO para un estudio de tránsito.</figcaption>
            </figure>

            <h2 className={h2}>{c.steps.title}</h2>
            <ol className="mt-5 list-decimal space-y-4 pl-6 text-lg leading-relaxed text-slate-700 marker:font-semibold marker:text-[#027a79]">
              {c.steps.items.map((s) => (
                <li key={s.title}>
                  <span className="font-semibold text-[#00182B]">{s.title}.</span> {s.description}
                </li>
              ))}
            </ol>

            <h2 className={h2}>{c.cameras.title}</h2>
            <p className={p}>{c.cameras.intro}</p>
            <p className={p}>
              {c.yoao.text}{" "}
              <Link href="/analysis" className={link}>Conocer YOAO</Link>
            </p>

            <h2 className={h2}>{c.live.title}</h2>
            <p className={p}>
              {c.live.text}{" "}
              <Link href={c.liveContactHref} className={link}>Escríbenos</Link>
            </p>

            <h2 className={`${h2} mb-6`}>{c.faqTitle}</h2>
            <FaqLista />

            <h2 className={h2}>{c.closing.title}</h2>
            <p className={p}>{c.closing.text}</p>
            <p className="mt-8">
              <Link href={c.contactHref} className="inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white hover:bg-[#0b2c47]">
                {c.cta}
              </Link>
            </p>
          </div>
        </article>
      </main>
      <Cierre />
    </>
  );
}
