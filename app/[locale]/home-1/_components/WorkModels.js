import Image from "next/image";
import Reveal from "./Reveal";
import { CtaLink, Icon, SectionHeading, container } from "./ui";
import { cta, workModels } from "./data";

export default function WorkModels() {
  return (
    <section aria-labelledby="formas-title" className="overflow-hidden bg-slate-50 py-20 lg:py-28">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-12 lg:gap-16`}>
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_60px_-25px_rgba(0,24,43,0.45)] lg:aspect-[4/5]">
              <Image
                src="/images/servicios/ServiciosPublicos.jpeg"
                alt="Profesional revisando mapas y paneles en una sala de monitoreo"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
                style={{ objectPosition: "18% 50%" }}
              />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-900/5 sm:left-6 sm:right-auto sm:max-w-sm sm:p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <Icon name="calendar" className="h-6 w-6" />
              </span>
              <p className="text-base leading-snug text-slate-600 sm:text-lg">
                <span className="block font-bold text-primary">Primera reunión sin costo</span>
                Revisamos tu caso y te decimos por dónde partir.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="pt-6 lg:col-span-7 lg:pt-0">
          <Reveal>
            <SectionHeading
              id="formas-title"
              eyebrow="Formas de trabajar"
              title="Trabajemos de la forma que más te acomode"
              text="Puedes partir con algo pequeño y crecer cuando veas resultados."
            />
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {workModels.map((m, i) => (
              <Reveal as="li" key={m.title} delay={(i % 2) * 120}>
                <div className="group h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,24,43,0.35)] hover:ring-accent/50 motion-reduce:hover:translate-y-0 sm:p-7">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-primary">
                    <Icon name={m.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-primary">{m.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-slate-600">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10">
            <CtaLink href={cta()}>Conversemos</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
