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
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      const firstOption = listRef.current?.querySelector("[role='option']");
      firstOption?.focus();
    }
  }, [open]);

  const handleSelect = (next) => {
    if (next === locale) {
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    router.replace(pathname, { locale: next });
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    const options = Array.from(
      listRef.current?.querySelectorAll("[role='option']") ?? []
    );
    if (!options.length) return;
    const currentIndex = options.indexOf(document.activeElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      options[(currentIndex + 1) % options.length].focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      options[(currentIndex - 1 + options.length) % options.length].focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      options[0].focus();
    } else if (event.key === "End") {
      event.preventDefault();
      options[options.length - 1].focus();
    }
  };

  const buttonClasses =
    variant === "mobile"
      ? "flex items-center gap-2 text-base font-medium text-text-primary dark:text-text-dark hover:text-accent transition-colors"
      : "flex items-center gap-1 font-medium text-white hover:text-accent transition-colors";

  return (
    <div className="relative" ref={ref}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={buttonClasses}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span className="uppercase">{locale}</span>
        <svg
          aria-hidden="true"
          focusable="false"
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
          ref={listRef}
          role="listbox"
          aria-label="Language"
          onKeyDown={handleListKeyDown}
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
                aria-current={l === locale ? "true" : undefined}
                role="option"
                tabIndex={l === locale ? 0 : -1}
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
