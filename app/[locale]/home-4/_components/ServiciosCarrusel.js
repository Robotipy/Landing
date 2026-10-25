"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { SERVICES } from "./data";

// Una práctica por vez, con contador y barra de avance (formato de Deloitte).
export default function ServiciosCarrusel() {
  const [i, setI] = useState(0);
  const n = SERVICES.length;
  const s = SERVICES[i];
  const go = (d) => setI((i + d + n) % n);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h2 className="mb-12 text-4xl font-light text-[#00182B]">Qué hacemos</h2>
      <div key={i} className="h4-fade grid items-center gap-10 lg:grid-cols-2" aria-live="polite">
        <div>
          <h3 className="text-4xl font-light leading-tight text-[#00182B] sm:text-5xl">{s.title}</h3>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{s.text}</p>
          <Link
            href={s.href}
            className="mt-8 inline-flex rounded-md bg-[#00182B] px-7 py-3 font-semibold text-white transition hover:bg-[#0b2c47]"
          >
            Conocer más
          </Link>
        </div>
        <div className="flex min-h-[340px] items-center justify-center rounded-2xl bg-[#eef3f3] p-5 sm:min-h-[420px] sm:p-10">
          {s.image && s.frame === false ? (
            <Image
              src={s.image}
              alt={s.alt}
              width={s.w}
              height={s.h}
              sizes="(min-width:1024px) 560px, 92vw"
              quality={90}
              className="h-auto w-full rounded-xl shadow-[0_24px_60px_rgba(0,24,43,0.18)] ring-1 ring-black/5"
            />
          ) : s.image ? (
            <div className="w-full overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_rgba(0,24,43,0.18)] ring-1 ring-black/5">
              <div className="flex gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-2.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>
              <Image src={s.image} alt={s.alt} width={s.w} height={s.h} sizes="(min-width:1024px) 560px, 92vw" quality={90} className="h-auto w-full" />
            </div>
          ) : (
            <ul className="flex w-full flex-col justify-center gap-8 rounded-xl bg-[#00182B] p-8 shadow-[0_24px_60px_rgba(0,24,43,0.18)] sm:p-12">
              {s.panel.map((item, k) => (
                <li key={item.title} className="flex gap-5">
                  <span className="w-8 shrink-0 text-4xl font-light leading-none text-[#4fd1d0]">{k + 1}</span>
                  <div>
                    <p className="text-2xl font-light text-white">{item.title}</p>
                    <p className="mt-2 text-white/70">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-6">
        <div className="h-1 flex-1 bg-slate-200">
          <div className="h-1 bg-[#039695] transition-all duration-500" style={{ width: `${((i + 1) / n) * 100}%` }} />
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <button type="button" onClick={() => go(-1)} aria-label="Servicio anterior" className="h-9 w-9 rounded-full border border-slate-300 hover:border-[#00182B]">
            ‹
          </button>
          <span className="tabular-nums">
            {i + 1} / {n}
          </span>
          <button type="button" onClick={() => go(1)} aria-label="Servicio siguiente" className="h-9 w-9 rounded-full border border-slate-300 hover:border-[#00182B]">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
