import { Suspense } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonMain from "@/components/ButtonMain";
import FaqSection from "@/components/FaqSection";
import RelatedReading from "@/components/RelatedReading";

const sectionTitle = "text-2xl lg:text-3xl font-bold text-white mb-4";
const card = "border border-white/10 bg-white/5 rounded-xl p-6";

// Vista compartida por /es/vision-artificial y /en/computer-vision. El texto
// sale de ./content.js.
export default function VisionPage({ c }) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main id="main-content" className="px-4">
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto pt-6 text-sm text-white/60">
          <Link href="/" className="link link-hover">
            {c.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">{c.breadcrumb}</span>
        </nav>

        <header className="max-w-4xl mx-auto text-center pt-10 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{c.h1}</h1>
          <p className="text-white/80 text-lg lg:text-xl mt-6 leading-relaxed">{c.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonMain text={c.cta} link={c.contactHref} type="primary" noblank />
            <ButtonMain
              text={c.secondaryCta.text}
              link={c.secondaryCta.href}
              type="quaternary"
              noblank
            />
          </div>
        </header>

        <figure className="max-w-5xl mx-auto">
          <Image
            src="/home-assets/yoao-dron.jpg"
            alt={c.imageAlt}
            width={1642}
            height={923}
            sizes="(min-width: 1024px) 1024px, 92vw"
            className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
            priority
          />
          <figcaption className="mt-3 text-sm text-white/60 text-center">{c.imageCaption}</figcaption>
        </figure>

        <section className="max-w-3xl mx-auto py-16">
          <h2 className={sectionTitle}>{c.intro.title}</h2>
          {c.intro.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-white/80 leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </section>

        <section className="max-w-6xl mx-auto pb-16">
          <h2 className={`${sectionTitle} text-center`}>{c.useCases.title}</h2>
          <p className="text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
            {c.useCases.intro}
          </p>
          <h3 className="text-xl font-bold text-white mt-10 mb-4">{c.useCases.yoaoTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.useCases.yoao.map((u) => (
              <div key={u.title} className={card}>
                <h4 className="text-lg font-bold text-white mb-2">{u.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white mt-10 mb-4">{c.useCases.customTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.useCases.custom.map((u) => (
              <div key={u.title} className={card}>
                <h4 className="text-lg font-bold text-white mb-2">{u.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto pb-16">
          <h2 className={`${sectionTitle} text-center`}>{c.cases.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {c.cases.items.map((item) => (
              <article key={item.title} className={`${card} flex flex-col`}>
                <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
                  {item.industry}
                </p>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-2">
                  <span className="font-semibold text-white">{c.cases.challenge}</span>
                  {item.challenge}
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  <span className="font-semibold text-white">{c.cases.solution}</span>
                  {item.solution}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {item.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg bg-white/5 p-4">
                      <p className="text-2xl font-bold text-accent">{m.value}</p>
                      <p className="text-white/70 text-xs mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
                {item.href && (
                  <Link href={item.href} className="link link-accent text-sm mt-6">
                    {c.cases.link}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto pb-16">
          <h2 className={sectionTitle}>{c.steps.title}</h2>
          <ol className="space-y-4 mt-6">
            {c.steps.items.map((s, i) => (
              <li key={s.title} className={`${card} flex gap-4`}>
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-4xl mx-auto pb-16">
          <h2 className={sectionTitle}>{c.cameras.title}</h2>
          <p className="text-white/80 leading-relaxed mb-6">{c.cameras.intro}</p>
          <div className="overflow-x-auto">
            <table className="table w-full text-white/80">
              <thead>
                <tr className="text-white border-white/10">
                  {c.cameras.headers.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.cameras.rows.map(([useCase, camera, processing]) => (
                  <tr key={useCase} className="border-white/10">
                    <td className="font-semibold text-white">{useCase}</td>
                    <td>{camera}</td>
                    <td>{processing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-4xl mx-auto pb-16">
          <div className={`${card} lg:p-10`}>
            <h2 className="text-2xl font-bold text-white mb-3">{c.yoao.title}</h2>
            <p className="text-white/80 leading-relaxed mb-6">{c.yoao.text}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {c.yoao.buttons.map((b) => (
                <ButtonMain key={b.href} text={b.text} link={b.href} type="quaternary" noblank />
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto pb-16">
          <div className={`${card} lg:p-10`}>
            <h2 className="text-2xl font-bold text-white mb-3">{c.live.title}</h2>
            <p className="text-white/80 leading-relaxed mb-6">{c.live.text}</p>
            <ButtonMain text={c.live.button} link={c.liveContactHref} type="primary" noblank />
          </div>
        </section>

        <FaqSection faqs={c.faqs} title={c.faqTitle} />

        <RelatedReading title={c.relatedTitle} links={c.related} />

        <section className="max-w-4xl mx-auto text-center py-16 lg:py-24">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{c.closing.title}</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">{c.closing.text}</p>
          <div className="flex justify-center">
            <ButtonMain text={c.cta} link={c.contactHref} type="primary" noblank />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
