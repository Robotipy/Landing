"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import ButtonMain from "./ButtonMain";

const links = [
  {
    href: "/#services",
    label: "Servicios",
  },
  {
    href: "/desarrollo-software",
    label: "Desarrollo",
  },
  {
    href: "/#",
    label: "Casos de Estudio",
    hasDropdown: true,
    dropdownItems: [
      {
        href: "/casos-exito/agricola",
        label: "Agrícola",
        description: "Automatización de procesos agrícolas, fruticultura y agrotecnológicos"
      },
      {
        href: "/casos-exito/automotriz",
        label: "Automotriz",
        description: "Automatización de procesos automotrices"
      },
      {
        href: "/casos-exito/financiero",
        label: "Financiero",
        description: "Optimización de operaciones bancarias, seguros y contables"
      },
      // {
      //   href: "/casos-exito/alimentos",
      //   label: "Alimentos",
      //   description: "Automatización de procesos alimentarios"
      // },
      {
        href: "/casos-exito/transporte",
        label: "Transporte y Logística",
        description: "Automatización de procesos de transporte y logística"
      },
      {
        href: "/casos-exito/servicios-profesionales",
        label: "Servicios Profesionales",
        description: "Automatización de estudios contables, jurídicos y de software"
      },
      // {
      //   href: "/casos-exito/salud",
      //   label: "Salud",
      //   description: "Digitalización de procesos médicos y sanitarios"
      // }
    ]
  },
   {
     href: "/capacitaciones",
     label: "Capacitación",
   }
];

const cta = <ButtonMain text="Contáctanos" link="/contact-us" type="primary-sm"/>;

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  const handleMouseEnter = (link) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (link.hasDropdown) {
      setActiveDropdown(link.href);
    }
  };

  const handleMouseLeave = (link) => {
    if (link.hasDropdown) {
      const timeout = setTimeout(() => {
        setActiveDropdown(null);
      }, 150); // Small delay to allow moving to dropdown
      setHoverTimeout(timeout);
    }
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
                unoptimized={true}
                priority={true}
                width={32}
                height={32}
              />
              <h2 className="text-xl font-bold">{config.appName}</h2>
            </Link>
          </div>

          {/* Navigation links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link)}
                onMouseLeave={() => handleMouseLeave(link)}
              >
                <Link
                  href={link.href}
                  className="font-medium text-white hover:text-accent transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.href && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                    onMouseEnter={() => {
                      if (hoverTimeout) {
                        clearTimeout(hoverTimeout);
                        setHoverTimeout(null);
                      }
                    }}
                    onMouseLeave={() => handleMouseLeave(link)}
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
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
            ))}
          </div>

          {/* CTA Button - desktop */}
          {cta}

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center justify-center size-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-text-primary dark:text-text-dark"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`relative z-50 min-h-screen ${isOpen ? "" : "hidden"}` }>
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
              <span className="font-extrabold text-lg text-text-primary dark:text-text-primary-dark">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-text-primary dark:text-text-dark"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile navigation */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <div key={link.href} className="w-full">
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link.href ? null : link.href)}
                          className="text-base font-medium text-text-primary dark:text-text-dark hover:text-accent transition-colors flex items-center gap-2 w-full text-left"
                        >
                          {link.label}
                          <svg 
                            className={`w-4 h-4 transition-transform ${activeDropdown === link.href ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeDropdown === link.href && (
                          <div className="ml-4 mt-2 space-y-2">
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
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <Link
              href="/contact-us"
              className="flex w-full items-center justify-center rounded-lg h-10 px-4 bg-accent text-white text-sm font-bold hover:bg-opacity-90 transition-all"
            >
              Contáctanos
            </Link>
          </div>
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
