"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@/i18n/routing";
import logo from "@/app/icon.png";
import { MENU } from "./data";

function AnyLink({ plain, ...props }) {
  return plain ? <NextLink {...props} /> : <Link {...props} />;
}

const Chevron = ({ open }) => (
  <svg viewBox="0 0 20 20" className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} aria-hidden="true">
    <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export default function MegaMenu() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && (setOpen(null), setMobile(false));
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const current = MENU.find((m) => m.key === open);

  return (
    <header ref={ref} className="fixed inset-x-0 top-0 z-50 bg-[#00182B] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href="/home-4" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(null)}>
          <Image src={logo} alt="Robotipy" width={28} height={28} priority />
          <span className="text-lg font-bold tracking-tight">Robotipy</span>
        </Link>

        <nav aria-label="Principal" className="hidden h-full items-stretch gap-1 lg:flex">
          {MENU.map((m) => (
            <button
              key={m.key}
              type="button"
              aria-expanded={open === m.key}
              onClick={() => setOpen(open === m.key ? null : m.key)}
              className={`flex items-center gap-1.5 border-b-2 px-3 text-[15px] transition ${
                open === m.key ? "border-[#039695] text-white" : "border-transparent text-white/80 hover:text-white"
              }`}
            >
              {m.label}
              <Chevron open={open === m.key} />
            </button>
          ))}
          <Link href="/trabaja-con-nosotros" onClick={() => setOpen(null)} className="flex items-center border-b-2 border-transparent px-3 text-[15px] text-white/80 transition hover:text-white">
            Trabaja con nosotros
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/contact-us"
            className="hidden rounded-md bg-[#039695] px-4 py-2 text-sm font-semibold text-[#00182B] transition hover:bg-[#0bb3b1] sm:inline-flex"
          >
            Contáctanos
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={mobile}
            onClick={() => setMobile(!mobile)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d={mobile ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {current && (
        <div className="hidden border-t border-white/10 bg-[#0b2c47] lg:block">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-8 py-10">
            <div className="col-span-3 border-r border-white/10 pr-8">
              <p className="text-2xl font-light leading-snug">{current.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{current.intro}</p>
            </div>
            <div className={`col-span-6 grid gap-8 ${current.cols.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
              {current.cols.map((col) => (
                <div key={col.title}>
                  <p className="text-xs font-semibold uppercase text-[#4fd1d0]">{col.title}</p>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.href + l.label}>
                        <AnyLink
                          plain={l.plain}
                          href={l.href}
                          onClick={() => setOpen(null)}
                          className="text-[15px] text-white/85 hover:text-white hover:underline"
                        >
                          {l.label}
                        </AnyLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <AnyLink
              plain={current.feature.plain}
              href={current.feature.href}
              onClick={() => setOpen(null)}
              className="group col-span-3 flex flex-col justify-between border-l-2 border-[#039695] bg-[#00182B] p-6"
            >
              <div>
                <p className="text-lg font-semibold leading-snug">{current.feature.title}</p>
                <p className="mt-2 text-sm text-white/70">{current.feature.text}</p>
              </div>
              <span className="mt-6 text-sm font-semibold text-[#4fd1d0] group-hover:underline">{current.feature.cta} →</span>
            </AnyLink>
          </div>
        </div>
      )}

      {mobile && (
        <nav aria-label="Principal móvil" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-[#0b2c47] px-4 pb-8 lg:hidden">
          {MENU.map((m) => (
            <details key={m.key} className="border-b border-white/10 py-3">
              <summary className="cursor-pointer list-none text-lg">{m.label}</summary>
              {m.cols.map((col) => (
                <div key={col.title} className="mt-4">
                  <p className="text-xs font-semibold uppercase text-[#4fd1d0]">{col.title}</p>
                  <ul className="mt-2 space-y-2">
                    {col.links.map((l) => (
                      <li key={l.href + l.label}>
                        <AnyLink plain={l.plain} href={l.href} className="text-white/85">
                          {l.label}
                        </AnyLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </details>
          ))}
          <Link href="/trabaja-con-nosotros" onClick={() => setMobile(false)} className="block border-b border-white/10 py-3 text-lg">
            Trabaja con nosotros
          </Link>
          <Link href="/contact-us" className="mt-6 inline-flex rounded-md bg-[#039695] px-5 py-3 font-semibold text-[#00182B]">
            Contáctanos
          </Link>
        </nav>
      )}
    </header>
  );
}
