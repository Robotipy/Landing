import { Link } from "@/i18n/routing";
import config from "@/config";
import { facts } from "@/libs/landingFacts";
import { container } from "./ui";

// Pie reducido: sin mapa del sitio ni enlaces a servicios.
export default function LandingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-primary pb-28 pt-8 text-sm text-white/70 lg:pb-8">
      <div className={`${container} flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between`}>
        <p>Robotipy, automatización de procesos con RPA e IA. Equipo en {facts.team}.</p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li>
            <a href={`mailto:${config.mailgun.supportEmail}`} className="hover:text-white">
              {config.mailgun.supportEmail}
            </a>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:text-white">
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link href="/tos" className="hover:text-white">
              Términos
            </Link>
          </li>
          <li>© {year} Robotipy</li>
        </ul>
      </div>
    </footer>
  );
}
