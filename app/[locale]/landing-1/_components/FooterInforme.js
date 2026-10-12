import Image from "next/image";
import { Link } from "@/i18n/routing";
import logo from "@/app/icon.png";
import { Contenedor } from "./Capitulo";
import { footer } from "../data";

export default function FooterInforme() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t lp1-rule py-12">
      <Contenedor className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[420px]">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="" width={22} height={22} className="h-[22px] w-[22px] brightness-0" />
            <span className="text-[16px] font-semibold">Robotipy</span>
          </div>
          <p className="lp1-muted mt-3 text-[14px] leading-[22px]">{footer.texto}</p>
          <p className="lp1-muted mt-2 text-[14px] leading-[22px]">© {year} Robotipy</p>
        </div>
        <nav aria-label="Enlaces del pie">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] leading-[22px]">
            {footer.enlaces.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="lp1-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Contenedor>
    </footer>
  );
}
