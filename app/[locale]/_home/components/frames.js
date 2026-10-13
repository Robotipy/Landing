// Marcos de dispositivo para mostrar pantallas reales: navegador y teléfono.

import Image from "next/image";

export function BrowserFrame({ label, tone = "light", className = "", children }) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl shadow-2xl ring-1 sm:rounded-2xl ${
        dark ? "bg-[#0d1117] ring-white/10 shadow-black/40" : "bg-white ring-slate-900/10 shadow-slate-900/20"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-1.5 border-b px-3 py-2 sm:gap-2 sm:px-4 sm:py-2.5 ${
          dark ? "border-white/10 bg-[#161b22]" : "border-slate-200 bg-slate-100"
        }`}
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" aria-hidden="true" />
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" aria-hidden="true" />
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" aria-hidden="true" />
        {label && (
          <span
            className={`ml-2 truncate rounded-md px-2 py-0.5 text-[11px] font-semibold sm:text-xs ${
              dark ? "bg-white/5 text-white/70" : "bg-white text-slate-600"
            }`}
          >
            {label}
          </span>
        )}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({ className = "", children }) {
  return (
    <div
      className={`relative rounded-[1.4rem] bg-[#0b0f14] p-[5px] shadow-2xl shadow-black/40 ring-1 ring-white/15 sm:rounded-[2.1rem] sm:p-2 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.1rem] bg-black sm:rounded-[1.65rem]">{children}</div>
    </div>
  );
}

// Recorta una zona de una imagen más grande (por ejemplo, el teléfono dentro
// de la demo de Melon Help) sin generar archivos nuevos.
export function CropImage({ src, alt, width, height, crop, sizes, priority = false, className = "" }) {
  const { x, y, w, h } = crop;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="absolute max-w-none"
        style={{
          width: `${(width / w) * 100}%`,
          height: "auto",
          left: `${(-x / w) * 100}%`,
          top: `${(-y / h) * 100}%`,
        }}
      />
    </div>
  );
}

// Teléfono con la conversación de WhatsApp de la demo de Melon Help.
export function MelonChatPhone({ className = "", sizes = "(min-width: 1024px) 1000px, 160vw", priority = false }) {
  return (
    <PhoneFrame className={className}>
      <CropImage
        src="/home-assets/melon-demo.jpg"
        width={1280}
        height={720}
        crop={{ x: 103, y: 102, w: 268, h: 520 }}
        sizes={sizes}
        priority={priority}
        alt="Conversación de WhatsApp: una clienta reporta un corte y el agente de IA le responde con la información del servicio"
      />
    </PhoneFrame>
  );
}
