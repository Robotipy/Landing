import Capitulo from "./Capitulo";
import { puntoDePartida as p } from "../data";

function DatoMercado() {
  return (
    <aside aria-label="Dato de mercado" className="border-l-2 border-[#039695] pl-6">
      <p className="lp1-serif lp1-num text-[56px] font-semibold leading-none md:text-[64px]">{p.dato.cifra}</p>
      <p className="mt-4 text-[16px] leading-[26px]">{p.dato.texto}</p>
      <p className="lp1-muted mt-4 text-[13px] leading-5">
        Fuente:{" "}
        <a href={p.dato.href} target="_blank" rel="noopener noreferrer" className="lp1-link">
          {p.dato.fuente}
        </a>
      </p>
    </aside>
  );
}

export default function PuntoDePartida() {
  return (
    <Capitulo
      id="punto-de-partida"
      numero={p.numero}
      rotulo={p.rotulo}
      titulo={p.titulo}
      texto={p.texto}
      aside={<DatoMercado />}
    >
      <div className="mt-14 max-w-[720px] md:mt-20">
        <h3 className="text-[13px] font-semibold uppercase leading-5 tracking-[0.08em]">{p.subtitulo}</h3>
        <ol className="mt-6 border-b lp1-rule">
          {p.preguntas.map((pregunta, i) => (
            <li key={pregunta} className="flex gap-5 border-t lp1-rule py-5">
              <span className="lp1-serif lp1-accent lp1-num w-5 flex-none text-[20px] font-bold leading-[28px]">
                {i + 1}
              </span>
              <span className="lp1-serif text-[19px] leading-[28px] md:text-[20px]">{pregunta}</span>
            </li>
          ))}
        </ol>
      </div>
    </Capitulo>
  );
}
