import Image from "next/image";
import { clientLogos } from "@/libs/landingFacts";

// Fila de logos de clientes para las landings de propuesta. Los PNG son
// blancos: en fondo oscuro se muestran tal cual y en fondo claro se pasan a
// negro con brightness-0.
export default function ClientLogos({ tone = "dark", label = "Algunos de nuestros clientes", className = "" }) {
  const imgCls =
    tone === "light" ? "h-7 w-auto brightness-0 opacity-50" : "h-7 w-auto opacity-70";
  const labelCls = tone === "light" ? "text-gray-500" : "text-white/60";
  return (
    <div className={className}>
      <p className={`text-xs font-semibold uppercase tracking-wider ${labelCls}`}>{label}</p>
      <ul className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-5" aria-label={label}>
        {clientLogos.map((logo) => (
          <li key={logo.src}>
            <Image src={logo.src} alt={logo.alt} width={logo.width} height={28} className={imgCls} />
          </li>
        ))}
      </ul>
    </div>
  );
}
