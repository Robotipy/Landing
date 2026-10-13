import Image from "next/image";
import Reveal from "./Reveal";
import AtencionStepper from "./AtencionStepper";
import { CtaLink, SectionHeading, TextLink, container } from "./ui";
import { attentionCase, attentionSteps, cta } from "./data";

export default function Atencion() {
  return (
    <section
      id="atencion"
      aria-labelledby="atencion-title"
      className="relative scroll-mt-28 overflow-hidden bg-primary py-20 text-white lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className={`${container} relative`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              id="atencion-title"
              tone="dark"
              eyebrow="Agentes de IA y chatbots"
              title="Tus clientes reciben respuesta a cualquier hora"
              text="El agente responde con la información de tu empresa y pasa a tu equipo lo que necesita una persona."
            />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/15 sm:p-5">
              <Image
                src="/home-assets/melonbot.png"
                alt=""
                width={400}
                height={397}
                sizes="72px"
                className="h-16 w-16 shrink-0 sm:h-[72px] sm:w-[72px]"
              />
              <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
                <span className="font-semibold text-white">Somos partner implementador de Melon Help.</span> Configuramos
                la plataforma con tus datos y la dejamos funcionando.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 lg:mt-16" delay={80}>
          <AtencionStepper steps={attentionSteps} />
        </Reveal>

        <Reveal className="mt-12 lg:mt-16" delay={80}>
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/15 sm:p-8">
            <p className="text-lg font-semibold text-slate-200">
              Caso real: {attentionCase.industry.toLowerCase()} con alto volumen de mensajes
            </p>
            <dl className="mt-6 grid gap-6 sm:grid-cols-3">
              {attentionCase.metrics.map((m) => (
                <div key={m.label} className="border-l-4 border-accent pl-5">
                  <dt className="sr-only">{m.label}</dt>
                  <dd>
                    <span className="block text-4xl font-extrabold text-white sm:text-5xl">{m.value}</span>
                    <span aria-hidden="true" className="mt-2 block text-lg text-slate-300">
                      {m.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <CtaLink href={cta("chatbot")} variant="teal">
            Agenda una reunión
          </CtaLink>
          <TextLink href="/chatbot" tone="dark">
            Más sobre agentes de IA
          </TextLink>
        </div>
      </div>
    </section>
  );
}
