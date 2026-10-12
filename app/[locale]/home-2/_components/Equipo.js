import Image from "next/image";
import { MixedLink, SectionHeader, TextLink, container, sectionBase, visibleLinks } from "./ui";

export default function Equipo({ team, intro, rocketbot, publicados }) {
  return (
    <section id="equipo" aria-labelledby="equipo-title" className={sectionBase}>
      <div className={container}>
        <SectionHeader id="equipo-title" eyebrow="Equipo" title="Las personas detrás de los casos" body={intro} />

        <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12 lg:gap-12">
          <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {team.map((member) => (
              <li key={member.name} className="flex gap-4 sm:flex-col sm:gap-0">
                <div className="h2-surface h2-line relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border sm:aspect-square sm:h-auto sm:w-full">
                  <Image
                    src={member.image}
                    alt={`Foto de ${member.name}`}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 96px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 sm:mt-4">
                  <h3 className="text-base font-semibold text-white">{member.name}</h3>
                  <p className="h2-mono h2-muted mt-1 text-xs">{member.role}</p>
                  <p className="h2-text mt-2 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>

          <aside
            aria-labelledby="rocketbot-title"
            className="h2-surface self-start rounded-r-lg border-l-2 border-[rgb(3,150,149)] p-6 md:p-8 lg:col-span-5"
          >
            <h3 id="rocketbot-title" className="text-xl font-semibold text-white">
              {rocketbot.title}
            </h3>
            <p className="h2-text mt-3 text-[15px] leading-relaxed">{rocketbot.text}</p>
            <ul className="mt-5 flex flex-col text-[15px]">
              {visibleLinks(rocketbot.links, publicados).map((link) => (
                <li key={link.label} className="flex min-h-11 items-center">
                  <MixedLink item={link} publicados={publicados} />
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <p className="mt-10 text-[15px]">
          <TextLink href="/about" className="inline-flex min-h-11 items-center">
            Conoce más sobre nosotros
          </TextLink>
        </p>
      </div>
    </section>
  );
}
