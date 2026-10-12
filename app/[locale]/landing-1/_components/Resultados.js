import Capitulo from "./Capitulo";
import ResultCard from "./ResultCard";
import { TrackedLink } from "./tracking";
import { resultados as r } from "../data";

export default function Resultados() {
  return (
    <Capitulo id="resultados" numero={r.numero} rotulo={r.rotulo} titulo={r.titulo} texto={r.texto}>
      <ul className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-2">
        {r.tarjetas.map((caso) => (
          <li key={caso.id}>
            <ResultCard caso={caso} />
          </li>
        ))}
      </ul>
      <p className="mt-10 text-[16px] leading-[26px]">
        <TrackedLink href="/success-cases" destination="success-cases" localized className="lp1-link">
          {r.enlace}
        </TrackedLink>
      </p>
    </Capitulo>
  );
}
