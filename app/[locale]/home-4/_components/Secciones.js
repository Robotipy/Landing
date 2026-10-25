import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@/i18n/routing";
import { facts, team, tools } from "@/libs/landingFacts";
import { getArticlesByLocale } from "@/app/[locale]/blog/_assets/content";
import { getCaseCards } from "../../_home/data";
import { INDUSTRIES, SERVICES } from "./data";

export const wrap = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

// En móvil las listas largas se deslizan en horizontal en vez de apilarse.
const scroller =
  "-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden";
const scrollerItem = "w-[82%] shrink-0 snap-start sm:w-auto";

export function Declaracion() {
  const stats = [
    { value: facts.projects, label: "proyectos" },
    { value: String(facts.clientCountries.length), label: "países con clientes" },
    { value: "Platinum", label: "Partner de Rocketbot" },
  ];
  const pillars = [
    { label: "Quiénes somos", text: "Equipo, historia y alianzas.", href: "/about" },
    { label: "Qué hacemos", text: "Robots, agentes de IA, software y capacitación.", href: "#que-hacemos", anchor: true },
    { label: "Hablemos", text: "La primera reunión no tiene costo.", href: "/contact-us" },
  ];
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Mapa de puntos: el mundo se desvanece bajo el texto y los pilares; los países con clientes (Chile, Argentina, Colombia y España) quedan siempre visibles. Solo desde lg: en móvil queda encima del texto. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block lg:[mask-image:linear-gradient(90deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.08)_42%,#000_51%,#000_61%,rgba(0,0,0,.12)_69%,rgba(0,0,0,.12)_100%)] lg:[-webkit-mask-image:linear-gradient(90deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.08)_42%,#000_51%,#000_61%,rgba(0,0,0,.12)_69%,rgba(0,0,0,.12)_100%)]">
        <img src="/home-4/mundo-base.svg" alt="" className="absolute left-1/2 top-[46%] h-auto w-[170%] max-w-none -translate-y-1/2 translate-x-[-30%] lg:top-1/2 lg:h-[92%] lg:w-auto lg:translate-x-[-23.5%]" />
      </div>
      <img src="/home-4/mundo-paises.svg" alt="" aria-hidden="true" className="pointer-events-none absolute hidden lg:block left-1/2 top-[46%] h-auto w-[170%] max-w-none -translate-y-1/2 translate-x-[-30%] lg:top-1/2 lg:h-[92%] lg:w-auto lg:translate-x-[-23.5%] lg:opacity-90" />
      <div className={`${wrap} relative grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-6">
          <div className="h-1 w-16 bg-[#039695]" />
          <h2 className="mt-8 text-4xl font-light leading-tight text-[#00182B] sm:text-5xl lg:text-6xl">
            Automatizamos todos tus procesos.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Robots, agentes de IA y software a medida para que tu equipo deje las tareas repetitivas. Desde{" "}
            {facts.founded}, con clientes en {facts.clientCountriesText}.
          </p>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-slate-200 pt-8 sm:gap-6">
            {stats.map((st) => (
              <div key={st.label}>
                <dt className="sr-only">{st.label}</dt>
                <dd className="text-2xl font-light text-[#027a79] sm:text-4xl">{st.value}</dd>
                <dd className="mt-1 text-sm text-slate-600">{st.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="flex flex-col justify-center divide-y divide-slate-200 self-center border-y border-slate-200 lg:col-span-4 lg:col-start-9 lg:ml-6">
          {pillars.map((p) => {
            const inner = (
              <>
                <span>
                  <span className="block text-2xl font-light text-[#00182B] group-hover:text-[#027a79]">{p.label}</span>
                  <span className="mt-1 block text-slate-600">{p.text}</span>
                </span>
                <span className="text-2xl text-[#039695] transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </>
            );
            const cls = "group flex items-center justify-between gap-6 py-7";
            return (
              <li key={p.label}>
                {p.anchor ? <a href={p.href} className={cls}>{inner}</a> : <Link href={p.href} className={cls}>{inner}</Link>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function LoUltimo() {
  const posts = getArticlesByLocale("es")
    .filter((a) => a.publishedAt)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 4);
  return (
    <section className="bg-[#f5f8f8]">
      <div className={`${wrap} py-16 sm:py-20`}>
        <h2 className="text-center text-3xl font-light text-[#00182B] sm:text-4xl">Lo último en Robotipy</h2>
        <ul className={`mt-12 ${scroller} sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4`}>
          {posts.map((p) => (
            <li key={p.slug} className={scrollerItem}>
              <NextLink
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <Image src={p.image.urlRelative} alt="" fill sizes="(min-width:1024px) 300px, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold leading-snug text-[#00182B]">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
                  <p className="mt-auto pt-5 text-xs font-semibold text-[#027a79]">{p.categories?.[0]?.title || "Artículo"}</p>
                </div>
              </NextLink>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <NextLink href="/blog" className="font-semibold text-[#027a79] hover:underline">Ver todos los artículos →</NextLink>
        </p>
      </div>
    </section>
  );
}

export function Industrias() {
  return (
    <section className="bg-white">
      <div className={`${wrap} py-16 sm:py-20`}>
        <h2 className="text-4xl font-light text-[#00182B]">Conocemos tu industria</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">Casos reales en cada sector, con el antes y el después.</p>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <li key={i.href}>
              <Link href={i.href} className="group relative block aspect-[4/3] overflow-hidden bg-[#00182B] sm:aspect-[16/9]">
                <Image src={i.image} alt="" fill sizes="(min-width:1024px) 400px, 50vw" className={`object-cover ${i.position || "object-center"} opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-55`} />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#00182B] to-transparent p-3 text-base font-semibold text-white sm:p-5 sm:text-xl">
                  {i.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Boletin() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className={`${wrap} flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between`}>
        <div>
          <h2 className="text-3xl font-light text-[#00182B]">Suscríbete a nuestro boletín</h2>
          <p className="mt-2 text-slate-600">Casos, guías y novedades de automatización e IA en tu correo.</p>
        </div>
        <a
          href="https://newsletter.robotipy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white transition hover:bg-[#0b2c47]"
        >
          Suscríbete
        </a>
      </div>
    </section>
  );
}

export function Cierre() {
  const big = [
    { label: "Agenda una reunión", href: "/contact-us" },
    { label: "Ver casos de éxito", href: "/success-cases" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Más sobre Robotipy", href: "/about" },
    { label: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
  ];
  const cols = [
    { title: "Qué hacemos", links: SERVICES.map((s) => ({ label: s.title, href: s.href })) },
    {
      title: "Productos",
      links: [
        { label: "Robotipy Projects", href: "/projects" },
        { label: "Robotipy Monitor", href: "/monitor" },
        { label: "YOAO", href: "/analysis" },
      ],
    },
    { title: "Herramientas", links: tools },
    {
      title: "Empresa",
      links: [
        { label: "Rocketbot, Platinum Partner", href: "/rocketbot" },
        { label: "Términos de uso", href: "/tos" },
        { label: "Privacidad", href: "/privacy-policy" },
      ],
    },
  ];
  return (
    <footer className="bg-[#00182B] text-white">
      <div className={`${wrap} grid gap-12 py-16 lg:grid-cols-12`}>
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-light">Contáctanos</h2>
          <ul className="mt-8 space-y-4">
            {big.map((b) => (
              <li key={b.href}>
                {b.anchor ? (
                  <a href={b.href} className="text-xl font-light text-white/90 hover:text-[#4fd1d0]">{b.label}</a>
                ) : (
                  <Link href={b.href} className="text-xl font-light text-white/90 hover:text-[#4fd1d0]">{b.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase text-[#4fd1d0]">{c.title}</p>
              <ul className="mt-4 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/75 hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className={`${wrap} flex flex-col gap-3 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between`}>
          <p>© {new Date().getFullYear()} Robotipy. Clientes en {facts.clientCountriesText}.</p>
          <a href="https://www.linkedin.com/company/robotipy" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export function CasosDestacados() {
  const cases = getCaseCards().slice(0, 6);
  return (
    <section className="bg-[#00182B] text-white">
      <div className={`${wrap} py-16 sm:py-20`}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-light">Resultados que se pueden medir</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/75">Proyectos en producción en empresas de distintas industrias.</p>
          </div>
          <Link href="/success-cases" className="shrink-0 font-semibold text-[#4fd1d0] hover:underline">
            Ver todos los casos →
          </Link>
        </div>
        <ul className={`mt-12 ${scroller} sm:grid sm:grid-cols-2 sm:gap-px sm:bg-white/10 lg:grid-cols-3`}>
          {cases.map((c) => (
            <li key={c.id} className={`${scrollerItem} border border-white/10 bg-[#00182B] sm:border-0`}>
              <Link href={c.href} className="group flex h-full flex-col p-7 transition hover:bg-[#0b2c47]">
                <p className="text-sm text-white/60">{c.industry}</p>
                <p className="mt-4 text-5xl font-light text-[#4fd1d0]">{c.figure}</p>
                <p className="mt-2 font-semibold">{c.label}</p>
                <p className="mt-4 text-white/80">{c.name}</p>
                {c.detail && <p className="mt-1 text-sm text-white/60">{c.detail}</p>}
                <span className="mt-auto pt-6 text-sm font-semibold text-[#4fd1d0] group-hover:underline">Ver el caso →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TrabajaConNosotros() {
  return (
    <section id="trabaja-con-nosotros" className="scroll-mt-16 border-t border-slate-200 bg-white">
      <div className={`${wrap} grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2`}>
        <ul className="grid grid-cols-3 gap-4">
          {team.map((t) => (
            <li key={t.name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#eef3f3]">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(min-width:1024px) 200px, 30vw"
                  className={`object-cover grayscale transition duration-500 hover:grayscale-0 object-top`}
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-[#00182B]">{t.name}</p>
              <p className="text-xs text-slate-600">{t.role}</p>
            </li>
          ))}
        </ul>
        <div>
          <h2 className="text-4xl font-light leading-tight text-[#00182B] sm:text-5xl">Trabaja con nosotros</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Somos un equipo en {facts.team} que construye robots, agentes de IA y software para empresas de{" "}
            {facts.clientCountriesText}. Buscamos profesionales y estudiantes en práctica que disfruten resolver
            problemas reales con tecnología.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/company/robotipy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white transition hover:bg-[#0b2c47]"
            >
              Ver Robotipy en LinkedIn
            </a>
            <Link
              href="/trabaja-con-nosotros"
              className="inline-flex rounded-md border-2 border-[#00182B]/25 px-7 py-3 font-semibold text-[#00182B] transition hover:border-[#00182B]"
            >
              Postula aquí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
