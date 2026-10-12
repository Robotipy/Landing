export function Rotulo({ numero, children }) {
  return (
    <p className="flex items-baseline gap-3">
      <span className="lp1-serif lp1-accent lp1-num text-[20px] font-bold leading-none">{numero}</span>
      <span className="lp1-eyebrow">{children}</span>
    </p>
  );
}

export function Contenedor({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-4 md:px-8 ${className}`}>{children}</div>;
}

// Capítulo del informe: filete superior, número en serif acento, título y bajada.
export default function Capitulo({ id, numero, rotulo, titulo, texto, superficie = false, children, aside }) {
  const tituloId = `${id}-titulo`;
  return (
    <section
      id={id}
      aria-labelledby={tituloId}
      className={`scroll-mt-20 border-t lp1-rule py-14 md:py-24 ${superficie ? "lp1-surface" : ""}`}
    >
      <Contenedor>
        <div className={aside ? "grid gap-10 lg:grid-cols-[minmax(0,720px)_320px] lg:justify-between lg:gap-16" : ""}>
          <div className="max-w-[720px]">
            <Rotulo numero={numero}>{rotulo}</Rotulo>
            <h2
              id={tituloId}
              className="lp1-serif mt-5 text-[28px] font-semibold leading-[34px] tracking-[-0.005em] md:text-[36px] md:leading-[44px]"
            >
              {titulo}
            </h2>
            {texto ? (
              <p className="lp1-muted mt-5 text-[17px] leading-[28px] md:text-[18px] md:leading-[30px]">{texto}</p>
            ) : null}
          </div>
          {aside ? <div className="lg:pt-2">{aside}</div> : null}
        </div>
        {children}
      </Contenedor>
    </section>
  );
}
