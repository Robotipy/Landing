import Capitulo from "./Capitulo";
import { TrackedLink } from "./tracking";
import { biblioteca as b } from "../data";

// Toma las seis primeras de la lista de prioridad que ya estén publicadas.
// Con revalidate en la página, la lista cambia sola cuando sale un post programado.
export default function Biblioteca({ publicados }) {
  const filas = b.prioridad.filter((item) => publicados.has(item.slug)).slice(0, 6);
  if (!filas.length) return null;
  return (
    <Capitulo id="biblioteca" numero={b.numero} rotulo={b.rotulo} titulo={b.titulo} texto={b.texto}>
      <ol className="mt-12 border-b lp1-rule md:mt-16">
        {filas.map((item, i) => (
          <li
            key={item.slug}
            className="grid grid-cols-[40px_minmax(0,1fr)] items-baseline gap-x-4 border-t lp1-rule py-5 sm:grid-cols-[48px_minmax(0,1fr)_auto]"
          >
            <span className="lp1-mono lp1-muted text-[13px] leading-5">{String(i + 1).padStart(2, "0")}</span>
            <span className="lp1-serif text-[19px] leading-[28px] md:text-[20px]">{item.titulo}</span>
            <span className="col-start-2 mt-2 text-[15px] leading-6 sm:col-start-3 sm:mt-0">
              <TrackedLink href={`/blog/${item.slug}`} destination={item.slug} className="lp1-link">
                Leer<span className="sr-only">: {item.titulo}</span>
              </TrackedLink>
            </span>
          </li>
        ))}
      </ol>
    </Capitulo>
  );
}
