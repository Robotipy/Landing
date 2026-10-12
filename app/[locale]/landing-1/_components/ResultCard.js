// Tarjeta de resultado: cifra arriba, contexto abajo y, al pie, los sistemas
// como nota de informe (sin chips: los chips monoespaciados son de /landing-2).
const enumerar = (items) =>
  items.length > 1 ? `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}` : items.join("");

export default function ResultCard({ caso }) {
  const pares = [
    { rotulo: "Contexto", texto: caso.contexto },
    { rotulo: "Desafío", texto: caso.desafio },
    { rotulo: "Solución", texto: caso.solucion },
  ];
  return (
    <article
      className="flex h-full flex-col border lp1-rule bg-white p-6 md:p-8"
      style={{ borderTopWidth: 2, borderTopColor: "#00182B" }}
    >
      <p className="lp1-eyebrow lp1-muted">{caso.industria}</p>
      <h3 className="lp1-serif lp1-num mt-4 text-[28px] font-semibold leading-[34px] md:text-[32px] md:leading-[38px]">
        {caso.resultado}
      </h3>
      {caso.subresultado ? <p className="mt-3 text-[16px] leading-[26px]">{caso.subresultado}</p> : null}
      <dl className="mt-6 space-y-4 border-t lp1-rule pt-6">
        {pares.map((par) => (
          <div key={par.rotulo}>
            <dt className="text-[14px] font-semibold leading-5">{par.rotulo}</dt>
            <dd className="mt-1 text-[16px] leading-[26px]">{par.texto}</dd>
          </div>
        ))}
      </dl>
      {caso.sistemas?.length ? (
        <div className="mt-auto pt-6">
          <p className="lp1-muted border-t lp1-rule pt-4 text-[14px] leading-[22px]">
            <span className="font-semibold text-[#00182B]">Sistemas: </span>
            {enumerar(caso.sistemas)}.
          </p>
        </div>
      ) : null}
    </article>
  );
}
