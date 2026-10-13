import Image from "next/image";

// Marco de navegador para pantallas de producto.
export function BrowserFrame({ src, alt, width, height, label, sizes, className = "", priority = false }) {
  return (
    <figure className={`overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 ring-1 ring-black/10 ${className}`}>
      <div className="flex items-center gap-2 border-b border-black/5 bg-[#EEF1F3] px-4 py-3">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-black/15" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-black/15" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-black/15" />
        {label && (
          <span className="ml-3 min-w-0 truncate rounded-md bg-white px-3 py-1 text-sm font-medium text-[#3B4A57]">
            {label}
          </span>
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </figure>
  );
}

// Marco de teléfono para capturas verticales (9:16).
export function PhoneFrame({ src, alt, sizes = "260px", className = "" }) {
  return (
    <figure
      className={`relative w-full rounded-[2.4rem] bg-[#0B1620] p-2.5 shadow-2xl shadow-black/40 ring-1 ring-white/15 ${className}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.9rem] bg-black">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-4 h-5 w-16 -translate-x-1/2 rounded-full bg-[#0B1620]"
      />
    </figure>
  );
}
