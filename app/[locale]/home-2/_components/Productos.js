import { SectionHeader, TextLink, container, sectionBase } from "./ui";

export default function Productos({ products }) {
  if (!products.length) return null;
  return (
    <section id="productos" aria-labelledby="productos-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="productos-title"
          eyebrow="Productos propios"
          title="Plataformas que desarrollamos"
          body="Las sumamos a los proyectos cuando el caso las pide."
        />

        <ul className="mt-10 grid gap-4 md:mt-12 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.key} className="h2-card flex flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              <p className="h2-text mt-3 text-[15px] leading-relaxed">{product.description}</p>
              {product.proof && (
                <p className="h2-muted mt-4 border-l-2 border-[rgb(3,150,149)] pl-3 text-sm leading-relaxed">
                  {product.proof}
                </p>
              )}
              <ul className="mt-auto flex flex-col pt-5 text-[15px]">
                {product.links.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href} className="inline-flex min-h-11 items-center">
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="h2-muted mt-8 text-sm leading-relaxed">
          ¿Diriges una consultora de automatización?{" "}
          <TextLink href="/projects">Mira Robotipy Projects</TextLink>
        </p>
      </div>
    </section>
  );
}
