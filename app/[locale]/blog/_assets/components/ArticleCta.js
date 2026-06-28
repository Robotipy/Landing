import Link from "next/link";
import ButtonMain from "@/components/ButtonMain";

// Caja de cierre única y contextual del post. Paleta de marca Robotipy:
// tarjeta navy (#2D3648) con acento teal. Un botón principal de conversión y un
// link de texto secundario (no dos botones que compiten).
const ArticleCta = ({ titulo, texto, botonLabel, botonUrl, linkLabel, linkUrl }) => (
  <div className="mx-auto mt-12 max-w-[700px] rounded-2xl border border-accent/30 bg-[#2D3648] px-8 py-10 text-center">
    <h2 className="mb-3 font-display text-[26px] md:text-[30px] font-extrabold leading-[1.15] tracking-tight text-white">
      {titulo}
    </h2>
    {texto && (
      <p className="mx-auto mb-7 max-w-[540px] text-[16px] leading-[1.6] text-white/80">
        {texto}
      </p>
    )}
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <ButtonMain link={botonUrl} text={botonLabel} type="primary" rounded noblank />
      {linkLabel && linkUrl && (
        <Link
          href={linkUrl}
          className="text-[15px] font-semibold text-accent underline-offset-4 hover:underline"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  </div>
);

export default ArticleCta;
