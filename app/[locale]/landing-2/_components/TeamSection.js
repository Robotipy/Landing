import Image from "next/image";
import { Eyebrow, SectionHeading, container, sectionPad } from "./ui";

export default function TeamSection({ team, intro, rocketbot, security, stack }) {
  const members = team;

  return (
    <section id="equipo" aria-labelledby="equipo-title" className={`scroll-mt-16 bg-primary ${sectionPad}`}>
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <SectionHeading
            id="equipo-title"
            eyebrow="Equipo"
            title="Quiénes construyen y mantienen los robots"
            body={intro}
            className="lg:col-span-6"
          />
          <ul className="grid gap-4 lg:col-span-6">
            {members.map((member) => (
              <li
                key={member.key}
                className="flex flex-col items-center gap-5 rounded-xl border border-white/10 bg-secondary p-5 text-center sm:flex-row sm:items-start sm:text-left md:p-6"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  sizes="96px"
                  className="h-24 w-24 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{member.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-5 md:p-6">
            <Image
              src="/images/rocketbotwhite.svg"
              alt="Rocketbot"
              width={133}
              height={48}
              unoptimized
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/80">{rocketbot}</p>
          </div>
          <div className="rounded-xl border border-white/10 p-5 md:p-6">
            <Eyebrow>Seguridad</Eyebrow>
            <ul className="mt-4 space-y-3">
              {security.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm leading-relaxed text-white/70">{stack}</p>
      </div>
    </section>
  );
}
