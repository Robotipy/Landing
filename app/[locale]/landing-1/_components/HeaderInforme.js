import Image from "next/image";
import { Link } from "@/i18n/routing";
import logo from "@/app/icon.png";
import { TrackedAnchor } from "./tracking";
import { header } from "../data";

export default function HeaderInforme() {
  return (
    <header className="sticky top-0 z-40 border-b lp1-rule bg-[#F7F7F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between gap-4 px-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Robotipy, ir al inicio">
          <Image src={logo} alt="" width={28} height={28} className="h-7 w-7 brightness-0" priority />
          <span className="text-[17px] font-semibold tracking-tight max-[359px]:hidden">Robotipy</span>
        </Link>
        <nav aria-label="Secciones de la página" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px]">
            {header.anchors.map((a) => (
              <li key={a.href}>
                <a href={a.href} className="lp1-muted transition-colors hover:text-[#00182B]">
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <TrackedAnchor
          href="#agenda"
          location="header"
          className="lp1-cta h-10 shrink-0 whitespace-nowrap px-4 text-[14px] md:text-[15px]"
        >
          <span className="sm:hidden">{header.ctaShort}</span>
          <span className="hidden sm:inline">{header.cta}</span>
        </TrackedAnchor>
      </div>
    </header>
  );
}
