"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// CTA flotante "Agenda una reunión" que aparece al pasar el header, para que la
// conversión esté siempre a mano sin volver arriba.
const StickyCta = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setShow((window.scrollY || document.documentElement.scrollTop) > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact-us"
      className={`fixed bottom-5 right-5 z-50 inline-flex h-12 items-center gap-2 rounded-xl bg-accent px-5 font-display text-[15px] font-semibold text-white shadow-[0_14px_36px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-accent/90 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      Agenda una reunión
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default StickyCta;
