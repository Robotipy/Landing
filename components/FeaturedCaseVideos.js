import CaseVideo from "@/components/CaseVideo";

// Casos destacados en video para /success-cases: los casos que tienen
// video en el canal de YouTube de Robotipy. Se reproducen dentro de la página.
const videos = [
  {
    youtubeId: "lSxqwPuljiw",
    poster: "https://i.ytimg.com/vi/lSxqwPuljiw/maxresdefault.jpg",
    text: {
      es: {
        label: "Estudio contable · Argentina",
        name: "Laura, Sasia y Asociados",
        description:
          "Un estudio con cerca de 500 clientes en Argentina dejó de tipear comprobantes a mano: sus robots arman el Libro IVA Compras, revisan ARCA cada noche y concilian los bancos.",
      },
      en: {
        label: "Accounting firm · Argentina",
        name: "Laura, Sasia y Asociados",
        description:
          "A firm with nearly 500 clients in Argentina stopped typing invoices by hand: its robots build the VAT purchase ledger, check the tax portal every night and reconcile bank accounts.",
      },
      pt: {
        label: "Escritório contábil · Argentina",
        name: "Laura, Sasia y Asociados",
        description:
          "Um escritório com cerca de 500 clientes na Argentina deixou de digitar comprovantes à mão: seus robôs montam o livro de IVA compras, revisam o portal fiscal toda noite e conciliam os bancos.",
      },
    },
  },
  {
    youtubeId: "NPCkavbRaZM",
    poster: "https://i.ytimg.com/vi/NPCkavbRaZM/maxresdefault.jpg",
    text: {
      es: {
        label: "Hotelería · Chile",
        name: "Promet, del Grupo Cintac",
        description:
          "El censo diario de ocupación de sus tres hoteles ahora se hace solo: el robot cruza lo reservado con lo ocupado y entrega el reporte en minutos.",
      },
      en: {
        label: "Hospitality · Chile",
        name: "Promet, Grupo Cintac",
        description:
          "The daily occupancy census of its three hotels now runs on its own: the robot compares bookings with actual occupancy and delivers the report in minutes.",
      },
      pt: {
        label: "Hotelaria · Chile",
        name: "Promet, do Grupo Cintac",
        description:
          "O censo diário de ocupação dos seus três hotéis agora é automático: o robô cruza o reservado com o ocupado e entrega o relatório em minutos.",
      },
    },
  },
  {
    youtubeId: "71SRs2dxJ2A",
    poster: "https://i.ytimg.com/vi/71SRs2dxJ2A/maxresdefault.jpg",
    text: {
      es: {
        label: "Minería · Chile",
        name: "Gemelo digital de la producción de cobre",
        description:
          "En una mina de cobre de Antofagasta, el modelo de producción vivía en un Excel con macros. Lo convertimos en una plataforma web con IA: calibración automática, simulador de escenarios y corridas que pasaron de horas a minutos.",
      },
      en: {
        label: "Mining · Chile",
        name: "Digital twin of copper production",
        description:
          "At a copper mine in Antofagasta, the production model lived in an Excel file with macros. We turned it into a web platform with AI: automatic calibration, a scenario simulator and runs that went from hours to minutes.",
      },
      pt: {
        label: "Mineração · Chile",
        name: "Gêmeo digital da produção de cobre",
        description:
          "Em uma mina de cobre de Antofagasta, o modelo de produção vivia em um Excel com macros. Transformamos em uma plataforma web com IA: calibração automática, simulador de cenários e execuções que passaram de horas para minutos.",
      },
    },
  },
  {
    youtubeId: "PuoAlYfz6SI",
    poster: "https://i.ytimg.com/vi/PuoAlYfz6SI/maxresdefault.jpg",
    text: {
      es: {
        label: "Software · Portal de clientes",
        name: "Portal de clientes con IA",
        description:
          "Para agencias y fábricas de software: un portal de clientes propio, con IA, que reemplazó a Notion en el seguimiento de proyectos.",
      },
      en: {
        label: "Software · Client portal",
        name: "AI client portal",
        description:
          "For agencies and software studios: a custom client portal with AI that replaced Notion for project tracking.",
      },
      pt: {
        label: "Software · Portal de clientes",
        name: "Portal de clientes com IA",
        description:
          "Para agências e fábricas de software: um portal de clientes próprio, com IA, que substituiu o Notion no acompanhamento de projetos.",
      },
    },
  },
];

const heading = {
  es: { title: "Casos destacados en video", subtitle: "Mira cómo funcionan los robots en clientes reales." },
  en: { title: "Featured cases on video", subtitle: "See the robots working for real clients." },
  pt: { title: "Casos em destaque em vídeo", subtitle: "Veja os robôs funcionando em clientes reais." },
};

export default function FeaturedCaseVideos({ locale }) {
  const lang = heading[locale] ? locale : "es";
  return (
    <section id="videos" className="scroll-mt-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="h-1 w-16 bg-[#039695]" />
        <h2 className="mt-8 text-4xl font-light leading-tight text-[#00182B] sm:text-5xl">{heading[lang].title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{heading[lang].subtitle}</p>
        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {videos.map((v) => {
            const t = v.text[lang];
            return (
              <li key={v.youtubeId} className="flex flex-col bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg">
                <CaseVideo youtubeId={v.youtubeId} title={`${t.name}: ${t.label}`} poster={v.poster} corner />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#027a79]">{t.label}</p>
                  <h3 className="mt-2 text-2xl font-light text-[#00182B]">{t.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
