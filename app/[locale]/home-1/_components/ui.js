// Piezas de maquetación compartidas por las bandas de /home-1.

export function Contenedor({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 md:px-8 ${className}`}>{children}</div>;
}

const TONOS = { paper: "h1-paper", band: "h1-band" };

// Banda de sección: fondo blanco o gris cálido, aire de 64 px en móvil y 96 px en escritorio.
export function Seccion({ id, tono = "paper", className = "", children }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`scroll-mt-28 py-16 md:py-24 ${TONOS[tono]} ${className}`}>
      <Contenedor>{children}</Contenedor>
    </section>
  );
}

export function Encabezado({ id, rotulo, titulo, texto, className = "" }) {
  return (
    <div className={`max-w-[760px] ${className}`}>
      {rotulo ? <p className="h1-caps h1-muted">{rotulo}</p> : null}
      <h2
        id={`${id}-titulo`}
        className="h1-serif h1-navy mt-4 text-[30px] font-semibold leading-[36px] tracking-[-0.01em] md:text-[40px] md:leading-[46px]"
      >
        {titulo}
      </h2>
      {texto ? (
        <p className="h1-muted mt-4 text-[17px] leading-[28px] md:text-[18px] md:leading-[30px]">{texto}</p>
      ) : null}
    </div>
  );
}
