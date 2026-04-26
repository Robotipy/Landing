"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import ButtonMain from "./ButtonMain";
import LanguageSwitcher from "./LanguageSwitcher";

const buildLinks = (t) => [
  {
    href: "/#services",
    label: t("nav.services"),
  },
  {
    href: "/projects",
    label: t("nav.products"),
    hasDropdown: true,
    dropdownItems: [
      {
        href: "/projects",
        label: t("dropdowns.products.projects.label"),
        description: t("dropdowns.products.projects.description"),
      },
      {
        href: "/monitor",
        label: t("dropdowns.products.monitor.label"),
        description: t("dropdowns.products.monitor.description"),
      },
      {
        href: "/analysis",
        label: t("dropdowns.products.analysis.label"),
        description: t("dropdowns.products.analysis.description"),
      },
    ],
  },
  {
    href: "/desarrollo-software",
    label: t("nav.development"),
  },
  {
    href: "/#",
    label: t("nav.cases"),
    hasDropdown: true,
    dropdownItems: [
      {
        href: "/casos-exito/agricola",
        label: t("dropdowns.cases.agricola.label"),
        description: t("dropdowns.cases.agricola.description"),
      },
      {
        href: "/casos-exito/automotriz",
        label: t("dropdowns.cases.automotriz.label"),
        description: t("dropdowns.cases.automotriz.description"),
      },
      {
        href: "/casos-exito/financiero",
        label: t("dropdowns.cases.financiero.label"),
        description: t("dropdowns.cases.financiero.description"),
      },
      {
        href: "/casos-exito/transporte",
        label: t("dropdowns.cases.transporte.label"),
        description: t("dropdowns.cases.transporte.description"),
      },
      {
        href: "/casos-exito/servicios-profesionales",
        label: t("dropdowns.cases.serviciosProfesionales.label"),
        description: t("dropdowns.cases.serviciosProfesionales.description"),
      },
      {
        href: "/blog/caso-exito-rpa-ia-mineria-costos",
        label: t("dropdowns.cases.mineria.label"),
        description: t("dropdowns.cases.mineria.description"),
      },
      {
        href: "/blog/caso-exito-automatizacion-ordenes-sap-siderurgia",
        label: t("dropdowns.cases.siderurgia.label"),
        description: t("dropdowns.cases.siderurgia.description"),
      },
    ],
  },
  {
    href: "/capacitaciones",
    label: t("nav.training"),
  },
  {
    href: "/blog",
    label: t("nav.blog"),
  },
];

const slugify = (value) =>
  value.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();

const Header = () => {
  const t = useTranslations("header");
  const links = buildLinks(t);
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const mobileCloseButtonRef = useRef(null);

  // Close menu on route changes (mobile UX) and reset dropdown.
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [searchParams]);

  // Close any open dropdown when clicking outside.
  useEffect(() => {
    if (!activeDropdown) return undefined;
    const handleClickOutside = (event) => {
      if (!event.target.closest?.("[data-dropdown-root]")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // Close dropdown on Escape, return focus to trigger.
  useEffect(() => {
    if (!activeDropdown) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        const trigger = document.getElementById(`menu-trigger-${slugify(activeDropdown)}`);
        setActiveDropdown(null);
        trigger?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeDropdown]);

  // Mobile menu: lock scroll, focus the close button, trap Escape, restore focus on close.
  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileCloseButtonRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      mobileMenuButtonRef.current?.focus();
    };
  }, [isOpen]);

  const cancelHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = (link) => {
    cancelHoverTimeout();
    if (link.hasDropdown) {
      setActiveDropdown(link.href);
    }
  };

  const handleMouseLeave = (link) => {
    if (link.hasDropdown) {
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150);
    }
  };

  const toggleDropdown = (link) => {
    setActiveDropdown((current) => (current === link.href ? null : link.href));
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center gap-4 text-white">
            <Link
              className="flex items-center gap-2 shrink-0"
              href="/"
              title={`${config.appName} homepage`}
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                priority={true}
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">{config.appName}</span>
            </Link>
          </div>

          {/* Navigation links - desktop */}
          <nav
            aria-label={t("nav.primary")}
            className="hidden md:flex items-center gap-8"
          >
            {links.map((link) => {
              const dropdownId = `menu-${slugify(link.href + link.label)}`;
              const triggerId = `menu-trigger-${slugify(link.href)}`;
              const isActive = activeDropdown === link.href;
              return (
                <div
                  key={link.href + link.label}
                  className="relative"
                  data-dropdown-root
                  onMouseEnter={() => handleMouseEnter(link)}
                  onMouseLeave={() => handleMouseLeave(link)}
                >
                  {link.hasDropdown ? (
                    <button
                      type="button"
                      id={triggerId}
                      aria-haspopup="menu"
                      aria-expanded={isActive}
                      aria-controls={dropdownId}
                      onClick={() => toggleDropdown(link)}
                      onKeyDown={(event) => {
                        if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setActiveDropdown(link.href);
                          requestAnimationFrame(() => {
                            document
                              .getElementById(dropdownId)
                              ?.querySelector("a")
                              ?.focus();
                          });
                        }
                      }}
                      className="font-medium text-white hover:text-accent transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        className={`w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
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
                  ) : (
                    <Link
                      href={link.href}
                      className="font-medium text-white hover:text-accent transition-colors flex items-center gap-1"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.hasDropdown && isActive && (
                    <div
                      id={dropdownId}
                      role="menu"
                      aria-labelledby={triggerId}
                      className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                      onMouseEnter={cancelHoverTimeout}
                      onMouseLeave={() => handleMouseLeave(link)}
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors block"
                          >
                            <div className="font-medium text-gray-900 dark:text-white text-sm">
                              {item.label}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Language switcher + CTA - desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <ButtonMain
              text={t("cta")}
              link="/contact-us"
              type="primary-sm"
            />
          </div>

          {/* Mobile menu button */}
          <button
            ref={mobileMenuButtonRef}
            type="button"
            aria-label={t("openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex items-center justify-center size-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-text-primary dark:text-text-dark"
            onClick={() => setIsOpen(true)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label={t("mobileMenuLabel")}
        className={`relative z-50 ${isOpen ? "" : "hidden"}`}
      >
        <div className="fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-background-light dark:bg-background-dark sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300">
          {/* Mobile header */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0"
              title={`${config.appName} homepage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg text-text-primary dark:text-text-primary-dark">
                {config.appName}
              </span>
            </Link>
            <button
              ref={mobileCloseButtonRef}
              type="button"
              aria-label={t("closeMenu")}
              className="-m-2.5 rounded-md p-2.5 text-text-primary dark:text-text-dark"
              onClick={() => setIsOpen(false)}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile navigation */}
          <nav
            aria-label={t("nav.mobile")}
            className="flow-root mt-6"
          >
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => {
                  const submenuId = `mobile-submenu-${slugify(link.href + link.label)}`;
                  const isActive = activeDropdown === link.href;
                  return (
                    <div key={link.href + link.label} className="w-full">
                      {link.hasDropdown ? (
                        <div>
                          <button
                            type="button"
                            aria-expanded={isActive}
                            aria-controls={submenuId}
                            onClick={() => toggleDropdown(link)}
                            className="text-base font-medium text-text-primary dark:text-text-dark hover:text-accent transition-colors flex items-center gap-2 w-full text-left"
                          >
                            {link.label}
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              className={`w-4 h-4 transition-transform ${isActive ? "rotate-180" : ""}`}
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
                          {isActive && (
                            <div id={submenuId} className="ml-4 mt-2 space-y-2">
                              {link.dropdownItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-base font-medium text-text-primary dark:text-text-dark hover:text-accent transition-colors"
                          title={link.label}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
                <div className="pt-2">
                  <LanguageSwitcher variant="mobile" />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <Link
              href="/contact-us"
              className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-accent text-white text-sm font-bold hover:bg-opacity-90 transition-all"
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

function HeaderWithSuspense() {
  return (
    <Suspense fallback={<div className="h-16 bg-gray-900"></div>}>
      <Header />
    </Suspense>
  );
}

export default HeaderWithSuspense;
