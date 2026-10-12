import Image from "next/image";
import { Link } from "@/i18n/routing";
import config from "@/config";
import logo from "@/app/icon.png";
import { facts } from "@/libs/landingFacts";
import { container } from "./ui";

export default function LandingFooter() {
  return (
    <footer className="border-t border-white/10 bg-primary pb-28 pt-10 text-white md:pb-10">
      <div className={`${container} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
        <div className="flex items-start gap-3">
          <Image src={logo} alt="" className="h-7 w-7" width={28} height={28} />
          <div>
            <p className="text-[15px] font-bold">
              {config.appName}. Automatización de procesos con equipo en {facts.team}.
            </p>
            <p className="mt-1 text-sm text-white/65">
              © {new Date().getFullYear()} {config.appName}.
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
          <li>
            <Link href="/privacy-policy" className="underline-offset-4 hover:text-white hover:underline">
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link href="/tos" className="underline-offset-4 hover:text-white hover:underline">
              Términos
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/robotipy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Robotipy, se abre en una pestaña nueva"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
