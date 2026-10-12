import { Seccion, Encabezado } from "./ui";
import { TLink } from "./track";
import { rutas as r, visible } from "../data";

// Puerta secundaria del home: cinco entradas por rol. Cada clic mide qué
// público llega con home_ruta_click { rol, destino }.
export default function Rutas({ publicados }) {
  return (
    <Seccion id="rutas">
      <Encabezado id="rutas" rotulo={r.rotulo} titulo={r.titulo} texto={r.texto} />
      <nav aria-label="Rutas por rol" className="mt-12 md:mt-14">
        <ul className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-12 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-0">
          {r.roles.map((rol) => {
            const enlaces = rol.enlaces.filter((e) => visible(e.href, publicados));
            return (
              <li key={rol.rol} className="min-w-0 border-t-2 border-[color:var(--h1-navy)] pt-5 lg:row-span-3 lg:grid lg:grid-rows-subgrid">
                <h3 className="h1-navy text-[17px] font-semibold leading-[24px]">{rol.nombre}</h3>
                <p className="h1-muted mt-2 text-[15px] leading-[24px]">{rol.texto}</p>
                <ul className="mt-5 space-y-3">
                  {enlaces.map((e) => (
                    <li key={e.href} className="text-[15px] leading-[22px]">
                      <TLink
                        href={e.href}
                        event="home_ruta_click"
                        params={{ rol: rol.rol, destino: e.href }}
                        className="h1-link font-medium"
                      >
                        {e.label}
                      </TLink>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </Seccion>
  );
}
