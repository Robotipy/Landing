import DiagnosticoLink from "./DiagnosticoLink";
import { TextLink, container } from "./ui";

export default function Diagnostico({ industries, systems, ctaLabel }) {
  return (
    <section
      id="diagnostico"
      aria-labelledby="diagnostico-title"
      className="h2-line scroll-mt-20 border-t py-16 md:py-24"
    >
      <div className={container}>
        <div className="h2-surface h2-line mx-auto max-w-[720px] rounded-lg border px-5 py-10 text-center md:px-12 md:py-14">
          <p className="h2-eyebrow">Diagnóstico sin costo</p>
          <h2
            id="diagnostico-title"
            className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-tight text-white md:text-4xl"
          >
            Cuéntanos qué proceso quieres automatizar
          </h2>
          <p className="h2-text mx-auto mt-4 max-w-[52ch] text-base leading-relaxed">
            Revisamos el proceso contigo y te decimos con qué tecnología conviene automatizarlo, o
            si no conviene. Si tu industria o tu sistema no están en la lista, elige Otra u Otro.
          </p>
          <div className="mt-8">
            <DiagnosticoLink industries={industries} systems={systems} ctaLabel={ctaLabel} />
          </div>
          <p className="mt-6 flex flex-wrap justify-center gap-x-6 text-[15px]">
            <TextLink href="/preguntas-frecuentes" className="inline-flex min-h-11 items-center">
              Preguntas frecuentes
            </TextLink>
            <TextLink href="/about" className="inline-flex min-h-11 items-center">
              Quiénes somos
            </TextLink>
          </p>
        </div>
      </div>
    </section>
  );
}
