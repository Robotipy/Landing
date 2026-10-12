import { Link } from "@/i18n/routing";
import { SectionHeader, container, sectionBase } from "./ui";

export default function Herramientas({ tools, intro }) {
  if (!tools.length) return null;
  return (
    <section id="herramientas" aria-labelledby="herramientas-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader
          id="herramientas-title"
          eyebrow="Herramientas gratuitas"
          title="Ordena tu caso antes de hablar con nosotros"
          body={intro}
        />

        <ul className="mt-10 grid grid-cols-2 gap-3 md:mt-12 md:gap-4 lg:grid-cols-4">
          {tools.map((tool) => (
            <li key={tool.href}>
              <Link href={tool.href} className="h2-card flex h-full flex-col gap-3 p-4 md:p-6">
                <h3 className="break-words text-[15px] font-semibold leading-snug text-white md:text-lg">{tool.label}</h3>
                {tool.use && <p className="h2-muted break-words text-sm leading-relaxed">{tool.use}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
