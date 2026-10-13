import { clientBand } from "@/libs/landingFacts";
import LogoMarquee from "./LogoMarquee";
import { container } from "./ui";

// Banda de logos en movimiento. Acelera al acercar el mouse a los costados
// y casi se detiene en el centro (ver LogoMarquee).
export default function Clientes() {
  return (
    <section aria-label="Empresas que confían en nosotros" className="border-t border-white/10 bg-[#00182B]">
      <div className={`${container} flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-10`}>
        <p className="shrink-0 text-lg font-semibold text-white lg:max-w-[220px]">
          Empresas que confían en nosotros
        </p>
        <LogoMarquee logos={clientBand} />
      </div>
    </section>
  );
}
