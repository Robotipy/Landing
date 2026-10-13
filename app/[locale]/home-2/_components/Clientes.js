import Image from "next/image";
import { clientLogos } from "@/libs/landingFacts";
import { container } from "./ui";

// Banda de logos en movimiento, igual a la de /home-3. Se pausa al pasar el
// mouse y queda quieta con prefers-reduced-motion (ver pageCss en page.js).
export default function Clientes() {
  const logos = clientLogos.map((logo) => ({ ...logo, w: Math.round((logo.width * 32) / 28) }));
  return (
    <section aria-label="Empresas que confían en nosotros" className="border-t border-white/10 bg-[#00182B]">
      <div className={`${container} flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-10`}>
        <p className="shrink-0 text-lg font-semibold text-white lg:max-w-[220px]">
          Empresas que confían en nosotros
        </p>
        <div className="h2-marquee-wrap relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="h2-marquee flex w-max items-center">
            <ul className="flex shrink-0 items-center gap-14 pr-14" aria-label="Clientes de Robotipy">
              {logos.map((logo) => (
                <li key={logo.src} className="shrink-0">
                  <Image src={logo.src} alt={logo.alt} width={logo.w} height={32} className="h-8 w-auto opacity-85" />
                </li>
              ))}
            </ul>
            <ul className="h2-marquee-dup flex shrink-0 items-center gap-14 pr-14" aria-hidden="true">
              {logos.map((logo) => (
                <li key={logo.src} className="shrink-0">
                  <Image src={logo.src} alt="" width={logo.w} height={32} className="h-8 w-auto opacity-85" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
