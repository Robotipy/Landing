"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { routing, localeNames } from "@/i18n/routing";

const LanguageSwitcher = ({ variant = "desktop" }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (next) => {
    if (next === locale) {
      setOpen(false);
      return;
    }
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    router.replace(pathname, { locale: next });
    setOpen(false);
  };

  const buttonClasses =
    variant === "mobile"
      ? "flex items-center gap-2 text-base font-medium text-text-primary dark:text-text-dark hover:text-accent transition-colors"
      : "flex items-center gap-1 font-medium text-white hover:text-accent transition-colors";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={buttonClasses}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span className="uppercase">{locale}</span>
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className={`absolute ${
            variant === "mobile" ? "left-0" : "right-0"
          } mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50`}
        >
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => handleSelect(l)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  l === locale
                    ? "font-semibold text-accent"
                    : "text-gray-900 dark:text-white"
                }`}
                aria-selected={l === locale}
                role="option"
              >
                <span className="uppercase mr-2 text-xs text-gray-500">{l}</span>
                {localeNames[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
