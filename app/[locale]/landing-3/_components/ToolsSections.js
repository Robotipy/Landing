import Evaluator from "./Evaluator";
import PaybackCalculator from "./PaybackCalculator";
import { container, SectionHeader } from "./ui";

export function EvaluatorSection() {
  return (
    <section
      id="evaluador"
      aria-labelledby="evaluador-titulo"
      className="scroll-mt-16 bg-primary py-16 text-white md:py-24"
    >
      <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
        <SectionHeader
          dark
          center
          titleId="evaluador-titulo"
          eyebrow="Evaluador"
          title="¿Se puede automatizar tu proceso?"
          body="Responde siete preguntas y obtén un puntaje de 0 a 100, la tecnología que conviene y las horas que podrías liberar. No te pedimos datos de contacto y tus respuestas no se guardan."
        />
        <div className="mt-12">
          <Evaluator />
        </div>
      </div>
    </section>
  );
}

export function CalculatorSection() {
  return (
    <section
      id="calculadora"
      aria-labelledby="calculadora-titulo"
      className="scroll-mt-16 bg-white py-16 text-[#0A2540] md:py-24"
    >
      <div className={container}>
        <SectionHeader
          titleId="calculadora-titulo"
          eyebrow="Calculadora de retorno"
          title="¿En cuántos meses se paga?"
          body="Compara lo que te cuesta hoy el proceso manual con el precio del paquete. Cambia los números y el resultado se actualiza al instante."
        />
        <div className="mt-12">
          <PaybackCalculator />
        </div>
      </div>
    </section>
  );
}
