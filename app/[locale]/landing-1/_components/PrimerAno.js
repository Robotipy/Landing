import Capitulo from "./Capitulo";
import { programa as p } from "../data";

// Carta Gantt en CSS grid: columna de rótulos más 12 subcolumnas (3 por trimestre).
const FILAS = ["Mapear", "Probar", "Escalar", "Gobernar"];

const BARRAS = [
  { label: "Mapear", row: "row-start-2", col: "col-start-2 col-span-1", tono: "tinta", compacta: true },
  { label: "Probar", row: "row-start-3", col: "col-start-3 col-span-2", tono: "tinta" },
  { label: "Ola 1", row: "row-start-4", col: "col-start-5 col-span-3", tono: "ola" },
  { label: "Ola 2", row: "row-start-4", col: "col-start-8 col-span-3", tono: "ola" },
  { label: "Ola 3", row: "row-start-4", col: "col-start-11 col-span-3", tono: "ola" },
  { label: "Gobernar", row: "row-start-5", col: "col-start-5 col-span-9", tono: "acento" },
];

const TONOS = {
  tinta: "rounded bg-[#00182B] text-white",
  ola: "rounded bg-[#00182B]/80 text-white",
  acento: "lp1-gobernar rounded-l bg-[#039695] text-[#00182B]",
};

const FILA_CLASES = ["row-start-2", "row-start-3", "row-start-4", "row-start-5"];
const TRIMESTRE_COL = ["col-start-2", "col-start-5", "col-start-8", "col-start-11"];

function Etiqueta({ label }) {
  const clase =
    label === "Gobernar"
      ? "bg-[#039695] text-[#00182B]"
      : label.startsWith("Ola")
        ? "bg-[#00182B]/80 text-white"
        : "bg-[#00182B] text-white";
  return <span className={`inline-flex h-7 items-center rounded px-2.5 text-[13px] font-semibold ${clase}`}>{label}</span>;
}

export default function PrimerAno() {
  const descripcion =
    "Diagrama del primer año: Mapear y Probar ocupan el trimestre 1; las olas 1, 2 y 3 ocupan los trimestres 2, 3 y 4; Gobernar comienza al final del trimestre 1 y sigue sin interrupción.";
  return (
    <Capitulo id="programa" numero={p.numero} rotulo={p.rotulo} titulo={p.titulo} texto={p.texto}>
      <div className="mt-12 hidden md:mt-16 lg:block">
        <div
          role="img"
          aria-label={descripcion}
          className="grid grid-cols-[120px_repeat(12,minmax(0,1fr))] gap-y-3 border-b lp1-rule pb-4"
        >
          {TRIMESTRE_COL.map((col) => (
            <div
              key={col}
              aria-hidden="true"
              className={`${col} col-span-3 row-start-1 row-end-6 border-l lp1-rule`}
            />
          ))}
          {p.trimestres.map((t, i) => (
            <div
              key={t.nombre}
              className={`${TRIMESTRE_COL[i]} col-span-3 row-start-1 px-3 pb-3 text-[13px] font-semibold uppercase leading-5 tracking-[0.08em]`}
            >
              {t.nombre}
            </div>
          ))}
          {FILAS.map((fila, i) => (
            <div
              key={fila}
              className={`${FILA_CLASES[i]} col-start-1 flex h-7 items-center text-[14px] leading-5 lp1-muted`}
            >
              {fila}
            </div>
          ))}
          {BARRAS.map((b) => (
            <div key={b.label} className={`${b.row} ${b.col} relative z-10 px-1`}>
              <div
                className={`flex h-7 items-center overflow-hidden whitespace-nowrap text-[13px] font-semibold ${
                  b.compacta ? "justify-center px-1" : "px-2.5"
                } ${TONOS[b.tono]}`}
              >
                {b.label}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[120px_repeat(4,minmax(0,1fr))]">
          {p.trimestres.map((t, i) => (
            <p
              key={t.nombre}
              className={`${i === 0 ? "col-start-2" : ""} border-l lp1-rule px-3 pt-5 text-[15px] leading-6 lp1-muted`}
            >
              {t.nota}
            </p>
          ))}
        </div>
      </div>

      <ol className="mt-10 border-b lp1-rule lg:hidden">
        {p.trimestres.map((t) => (
          <li key={t.nombre} className="border-t lp1-rule py-6">
            <h3 className="lp1-serif text-[20px] font-semibold leading-7">{t.nombre}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.barras.map((b) => (
                <Etiqueta key={b} label={b} />
              ))}
            </div>
            <p className="lp1-muted mt-3 text-[16px] leading-[26px]">{t.nota}</p>
          </li>
        ))}
      </ol>
    </Capitulo>
  );
}
