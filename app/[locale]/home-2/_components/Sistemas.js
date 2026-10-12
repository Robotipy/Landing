import SystemTabs from "./SystemTabs";
import { CaseCard, GuideLink, SectionHeader, TextLink, container, sectionBase, visibleLinks } from "./ui";

function SystemPanel({ system, publicados }) {
  const guides = visibleLinks(system.guides, publicados);
  const hasGuides = guides.length > 0;
  const hasLinks = system.links.length > 0;
  return (
    <div>
      <p className="h2-text max-w-3xl text-base leading-relaxed">{system.intro}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {system.cardList.map((card) => (
          <CaseCard key={card.id} card={card} />
        ))}
      </div>
      {(hasGuides || hasLinks) && (
        <div className="mt-5 flex flex-col gap-2 text-[15px] sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-6">
          {hasGuides && (
            <p className="h2-muted">
              <span className="h2-mono mr-2 text-xs uppercase tracking-[0.12em]">
                {guides.length > 1 ? "Guías" : "Guía"}
              </span>
              {guides.map((guide, index) => (
                <span key={guide.slug} className="h2-text">
                  {index > 0 && <span className="h2-muted"> y </span>}
                  <GuideLink slug={guide.slug} publicados={publicados}>
                    {guide.label}
                  </GuideLink>
                </span>
              ))}
            </p>
          )}
          {hasLinks && (
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {system.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href} className="inline-flex min-h-11 items-center">
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function Sistemas({ systems, publicados }) {
  const items = systems.map((system) => ({
    slug: system.slug,
    name: system.name,
    count: system.cardList.length,
    content: <SystemPanel system={system} publicados={publicados} />,
  }));

  return (
    <section id="sistemas" aria-labelledby="sistemas-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="sistemas-title"
          eyebrow="Por sistema"
          title="Busca el sistema que usa tu equipo"
          body="Cada sistema muestra lo que ya automatizamos sobre él, con la cifra del caso y la página de su industria."
        />
        <div className="mt-10 md:mt-12">
          <SystemTabs items={items} label="Sistemas con casos publicados" />
        </div>
        <p className="mt-10 text-[15px]">
          <a href="#diagnostico" className="h2-link inline-flex min-h-11 items-center">
            ¿Tu sistema no aparece? Cuéntanos cuál es
          </a>
        </p>
      </div>
    </section>
  );
}
