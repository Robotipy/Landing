import Image from "next/image";
import Reveal from "./Reveal";
import { CtaLink, Icon, SectionHeading, TextLink, container } from "./ui";
import { cta, needs } from "./data";

function NeedVisual({ need, wide }) {
  const { visual } = need;
  const big = need.size === "big";
  const isCover = visual.fit === "cover";
  const aspect = big
    ? "aspect-[16/9]"
    : wide
      ? "aspect-[4/3] md:aspect-[21/9] lg:aspect-[4/3]"
      : "aspect-[4/3]";
  return (
    <div
      className={`relative overflow-hidden ${aspect} ${
        isCover ? "bg-primary" : "bg-gradient-to-br from-accent/15 via-slate-50 to-white"
      }`}
    >
      {!isCover ? (
        <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/15 blur-2xl" />
      ) : null}
      <Image
        src={visual.src}
        alt={visual.alt}
        fill
        sizes={big ? "(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"}
        className={`transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
          isCover ? "object-cover" : "object-contain p-8 sm:p-10"
        }`}
        style={visual.position ? { objectPosition: visual.position } : undefined}
      />
      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-primary shadow-md sm:text-base">
        <Icon name={need.icon} className="h-5 w-5 text-accent" />
        {need.tag}
      </span>
    </div>
  );
}

function NeedCard({ need, wide = false }) {
  const big = need.size === "big";
  return (
    <article
      aria-labelledby={`need-${need.key}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_25px_50px_-20px_rgba(0,24,43,0.35)] motion-reduce:hover:translate-y-0"
    >
      <NeedVisual need={need} wide={wide} />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3
          id={`need-${need.key}`}
          className={`font-bold leading-snug tracking-tight text-primary ${big ? "text-2xl sm:text-3xl" : "text-2xl"}`}
        >
          {need.title}
        </h3>
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{need.text}</p>

        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/80">
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-accent">
            <Icon name="sparkle" className="h-4 w-4" strokeWidth={2} />
          </span>
          <p className="text-base leading-snug text-slate-700">
            <span className="block font-semibold text-slate-600">Caso real: {need.case.industry}</span>
            <span className="mt-1 block">
              <strong className="text-xl font-extrabold text-primary">{need.case.value}</strong> {need.case.label}
            </span>
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-7">
          <CtaLink href={cta(need.servicio)} size="md">
            Conversemos
          </CtaLink>
          <TextLink href={need.more.href}>{need.more.label}</TextLink>
        </div>
      </div>
    </article>
  );
}

export default function Needs() {
  return (
    <section
      id="necesidades"
      aria-labelledby="necesidades-title"
      className="scroll-mt-28 overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className={container}>
        <Reveal>
          <SectionHeading
            id="necesidades-title"
            eyebrow="Lo que necesitas resolver"
            title="¿Qué quieres resolver en tu empresa?"
            text="Elige lo que más se parece a tu caso. Cada camino tiene un proyecto real detrás."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-7">
          {needs.map((need, i) => (
            <Reveal
              key={need.key}
              delay={(i % 3) * 120}
              className={
                need.size === "big"
                  ? "lg:col-span-3"
                  : i === needs.length - 1
                    ? "md:col-span-2 lg:col-span-2"
                    : "lg:col-span-2"
              }
            >
              <NeedCard need={need} wide={need.size !== "big" && i === needs.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
