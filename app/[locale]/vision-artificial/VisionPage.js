import { Suspense } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqJsonLd } from "@/components/FaqSection";
import MegaMenu from "../home-4/_components/MegaMenu";
import { Cierre, wrap } from "../home-4/_components/Secciones";
import VideoYoao from "./VideoYoao";

// Vista compartida por /es/vision-artificial y /en/computer-vision. El texto
// sale de ./content.js. Cada caso de uso se muestra con un video real
// analizado con el worker de YOAO (public/vision/videos).
const btnPrimary = "inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white hover:bg-[#0b2c47]";
const h2 = "text-3xl font-light leading-tight sm:text-4xl";
const link = "font-semibold text-[#027a79] hover:underline";

export default function VisionPage({ c }) {
  // El menú nuevo solo existe en español; inglés sigue con el de siempre.
  const nueva = c.locale === "es";
  const yoaoLink = c.yoao.buttons[0];

  return (
    <>
      {nueva ? (
        <MegaMenu />
      ) : (
        <Suspense>
          <Header />
        </Suspense>
      )}
      <main id="main-content" className={`bg-white text-[#00182B] antialiased ${nueva ? "pt-16" : ""}`}>
        <section className={`${wrap} pt-16 sm:pt-24`}>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:underline">{c.home}</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold uppercase tracking-widest text-[#027a79]">{c.breadcrumb}</span>
          </nav>
          <h1 className="mt-6 max-w-4xl text-4xl font-light leading-tight sm:text-6xl">{c.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">{c.subtitle}</p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href={c.contactHref} className={btnPrimary}>{c.cta}</Link>
            <Link href={c.secondaryCta.href} className={link}>{c.secondaryCta.text} →</Link>
          </div>
          <figure className="mt-16">
            <VideoYoao name="rotonda" label={c.heroVideo.alt} className="ring-1 ring-black/5" />
            <figcaption className="mt-3 text-sm text-slate-500">{c.heroVideo.caption}</figcaption>
          </figure>
        </section>

        <section className={`${wrap} py-20 sm:py-28`}>
          <h2 className="sr-only">{c.intro.title}</h2>
          <p className="max-w-4xl text-2xl font-light leading-snug sm:text-3xl">{c.intro.paragraphs[0]}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{c.intro.paragraphs[1]}</p>
        </section>

        <section aria-labelledby="usos">
          <div className={wrap}>
            <h2 id="usos" className={h2}>{c.useCases.title}</h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              {c.useCases.intro}{" "}
              <Link href={yoaoLink.href} className={link}>{yoaoLink.text} →</Link>
            </p>
          </div>
          <div className="mt-14 space-y-20 sm:space-y-28">
            {c.groups.map((g, k) => (
              <div key={g.title} className={`${wrap} grid items-center gap-10 lg:grid-cols-12 lg:gap-14`}>
                <div className={`lg:col-span-7 ${k % 2 ? "lg:order-2" : ""}`}>
                  <VideoYoao name={g.video} label={g.alt} className="ring-1 ring-black/5" />
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-3xl font-light leading-tight">{g.title}</h3>
                  <ul className="mt-6 space-y-5">
                    {g.items.map((i) => {
                      const item = c.useCases.yoao[i];
                      return (
                        <li key={item.title} className="border-l-2 border-[#039695] pl-5">
                          <p className="text-lg font-semibold">{item.title}</p>
                          <p className="mt-1 leading-relaxed text-slate-600">{item.description}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${wrap} py-20 sm:py-28`}>
          <h2 className={h2}>{c.useCases.customTitle}</h2>
          <div className="mt-10 grid gap-x-16 gap-y-8 sm:grid-cols-2">
            {c.useCases.custom.map((item) => (
              <div key={item.title} className="border-l-2 border-[#039695] pl-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f5f8f8]">
          <div className={`${wrap} py-16 sm:py-20`}>
            <h2 className={h2}>{c.cases.title}</h2>
            <figure className="mt-10">
              <Image
                src="/home-assets/yoao-dron.jpg"
                alt={c.drone.alt}
                width={1642}
                height={923}
                sizes="(min-width:1280px) 1216px, 92vw"
                className="h-auto w-full ring-1 ring-black/5"
              />
              <figcaption className="mt-3 text-sm text-slate-500">{c.drone.caption}</figcaption>
            </figure>
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              {c.cases.items.map((item) => (
                <article key={item.title}>
                  <p className="text-7xl font-light text-[#027a79]">{item.metrics[0].value}</p>
                  <p className="mt-2 text-slate-500">{item.metrics[0].label}</p>
                  <h3 className="mt-6 text-xl font-semibold">
                    {item.industry}: {item.title.toLowerCase()}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-slate-600">{item.solution}</p>
                  {item.href && (
                    <Link href={item.href} className={`mt-4 inline-block ${link}`}>{c.cases.link} →</Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${wrap} py-20 sm:py-24`}>
          <h2 className={h2}>{c.steps.title}</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.items.map((s, i) => (
              <li key={s.title}>
                <p className="text-5xl font-light text-[#027a79]">0{i + 1}</p>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${wrap} pb-20 sm:pb-24`}>
          <h2 className={h2}>{c.cameras.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{c.cameras.intro}</p>
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
                    <td className="py-4 pr-6">{useCase}</td>
                    <td className="py-4 pr-6 text-slate-600">{camera}</td>
                    <td className="py-4 text-slate-600">{processing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-slate-600">
            {c.yoao.text} <Link href={yoaoLink.href} className={link}>{yoaoLink.text} →</Link>
          </p>
        </section>

        <section className="bg-[#039695]">
          <div className={`${wrap} py-16 sm:py-20`}>
            <h2 className="max-w-3xl text-3xl font-light leading-tight sm:text-5xl">{c.live.title}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#00182B]/80">{c.live.text}</p>
            <Link href={c.liveContactHref} className={`mt-10 ${btnPrimary}`}>{c.live.button}</Link>
          </div>
        </section>

        <section className={`${wrap} py-20 sm:py-24`}>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
          <h2 className={`${h2} mb-8`}>{c.faqTitle}</h2>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {c.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-normal">{f.q}</h3>
                  <span className="text-2xl font-light leading-none text-[#039695] transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
          <h2 className="mt-16 text-sm font-semibold uppercase tracking-widest text-[#027a79]">{c.relatedTitle}</h2>
          <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            {c.related.map((r) => (
              <li key={r.href} className="py-4">
                <Link href={r.href} className={link}>{r.title} →</Link>
                <p className="mt-1 text-slate-600">{r.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${wrap} pb-24 text-center`}>
          <h2 className="mx-auto max-w-3xl text-3xl font-light leading-tight sm:text-4xl">{c.closing.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{c.closing.text}</p>
          <Link href={c.contactHref} className={`mt-10 ${btnPrimary}`}>{c.cta}</Link>
        </section>
      </main>
      {nueva ? <Cierre /> : <Footer />}
    </>
  );
}
