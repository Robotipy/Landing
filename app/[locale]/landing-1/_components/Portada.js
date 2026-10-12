import { Contenedor, Rotulo } from "./Capitulo";
import { TrackedAnchor } from "./tracking";
import { hero } from "../data";

export default function Portada() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="scroll-mt-20">
      <Contenedor className="pb-14 pt-16 md:pb-24 md:pt-[120px]">
        <div className="max-w-[720px]">
          <Rotulo numero={hero.numero}>{hero.rotulo}</Rotulo>
          <h1
            id="inicio-titulo"
            className="lp1-serif mt-6 text-[36px] font-semibold leading-[42px] tracking-[-0.01em] md:text-[56px] md:leading-[64px]"
          >
            {hero.titulo}
          </h1>
          <p className="lp1-muted mt-6 text-[18px] leading-[30px] md:text-[20px] md:leading-[32px]">{hero.bajada}</p>
          <div className="mt-10">
            <TrackedAnchor
              href="#agenda"
              location="hero"
              className="lp1-cta min-h-[48px] w-full px-6 py-3 text-[17px] leading-6 sm:w-auto"
            >
              {hero.cta}
            </TrackedAnchor>
          </div>
          <p className="lp1-muted mt-4 text-[15px] leading-6">{hero.nota}</p>
        </div>
      </Contenedor>
    </section>
  );
}
