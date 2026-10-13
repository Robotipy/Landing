import Image from "next/image";
import { Link } from "@/i18n/routing";

// Animaciones propias del home-1. Se inyectan una sola vez desde page.js.
// El CSS global ya neutraliza animaciones con prefers-reduced-motion y,
// además, cada uso va detrás de la variante motion-safe de Tailwind.
export const home1Css = [
  "@keyframes h1-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}",
  "@keyframes h1-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}",
  "@keyframes h1-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}",
  "@keyframes h1-fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}",
].join("");

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const ICONS = {
  chat: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5z" />
      <path d="M8.5 9h7M8.5 12h4.5" />
    </>
  ),
  robot: (
    <>
      <rect x="4.5" y="8" width="15" height="11" rx="3" />
      <path d="M12 8V5" />
      <circle cx="12" cy="4" r="1" />
      <circle cx="9.3" cy="13" r="1.2" />
      <circle cx="14.7" cy="13" r="1.2" />
      <path d="M2.5 12v3.5M21.5 12v3.5" />
    </>
  ),
  app: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 8.5h18" />
      <path d="M7 12.5h5M7 16h8" />
      <path d="M15.5 12.5h1.5" />
    </>
  ),
  chart: (
    <>
      <path d="M3 20h18" />
      <rect x="5" y="11" width="3" height="6" rx="1" />
      <rect x="10.5" y="6" width="3" height="11" rx="1" />
      <rect x="16" y="9" width="3" height="8" rx="1" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2.5" />
      <path d="m16 10.5 5-3v9l-5-3" />
    </>
  ),
  cap: (
    <>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5z" />
      <path d="M6.5 11v4.5c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3V11" />
      <path d="M21.5 9v5" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </>
  ),
  refresh: (
    <>
      <path d="M19.5 11A7.5 7.5 0 0 0 6 6.6L4.5 8" />
      <path d="M4.5 4v4h4" />
      <path d="M4.5 13A7.5 7.5 0 0 0 18 17.4l1.5-1.4" />
      <path d="M19.5 20v-4h-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.4c2.1.7 3.5 2.6 3.5 5.6" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  map: (
    <>
      <path d="M3.5 7 9 4l6 3 5.5-3v13L15 20l-6-3-5.5 3z" />
      <path d="M9 4v13M15 7v13" />
    </>
  ),
  doc: (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </>
  ),
  list: (
    <>
      <path d="M9 6.5h11M9 12h11M9 17.5h11" />
      <circle cx="4.5" cy="6.5" r="1" />
      <circle cx="4.5" cy="12" r="1" />
      <circle cx="4.5" cy="17.5" r="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <path d="M8.5 7h7" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01M8.5 18h.01M12 18h.01" />
    </>
  ),
  sparkle: <path d="M12 3.5 13.9 8.6 19 10.5l-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9z" />,
};

export function Icon({ name, className = "h-6 w-6", strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {ICONS[name] || ICONS.sparkle}
    </svg>
  );
}

export function Eyebrow({ children, tone = "light", className = "" }) {
  const tones = {
    light: "bg-accent/10 text-primary ring-accent/25",
    dark: "bg-white/10 text-white ring-white/15",
  };
  return (
    <p
      className={`inline-flex items-center gap-2.5 rounded-3xl px-4 py-1.5 text-left text-base font-semibold ring-1 ${tones[tone]} ${className}`}
    >
      <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeading({ id, eyebrow, title, text, tone = "light", align = "left", className = "" }) {
  const isDark = tone === "dark";
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={`mt-5 text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-lg leading-relaxed sm:text-xl ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          } ${isDark ? "text-slate-300" : "text-slate-600"}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

const CTA_VARIANTS = {
  dark: "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90",
  teal: "bg-accent text-primary shadow-lg shadow-black/20 hover:bg-white",
  ghost: "bg-white text-primary ring-2 ring-inset ring-slate-300 hover:ring-primary",
  ghostDark: "text-white ring-2 ring-inset ring-white/35 hover:bg-white/10 hover:ring-white",
};

const CTA_SIZES = {
  lg: "min-h-[56px] px-7 py-3.5 text-lg",
  md: "min-h-[48px] px-5 py-3 text-base sm:text-lg",
};

// Botón de llamado a la acción. Los enlaces internos usan el Link con
// prefijo de idioma; las anclas (#seccion) quedan como <a>.
export function CtaLink({ href, variant = "dark", size = "lg", icon = "arrowRight", className = "", children }) {
  const cls = `group inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-colors duration-200 ${CTA_SIZES[size]} ${CTA_VARIANTS[variant]} ${className}`;
  const iconEl = icon ? (
    <Icon
      name={icon}
      className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
        icon === "arrowRight" ? "group-hover:translate-x-1" : icon === "arrowDown" ? "group-hover:translate-y-0.5" : ""
      }`}
    />
  ) : null;
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {children}
        {iconEl}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {iconEl}
    </Link>
  );
}

// Enlace de texto con subrayado de acento, para acciones secundarias.
export function TextLink({ href, tone = "light", className = "", children }) {
  const cls = `group inline-flex items-center gap-1.5 text-lg font-semibold underline decoration-2 underline-offset-[6px] transition-colors ${
    tone === "dark"
      ? "text-white decoration-accent hover:decoration-white"
      : "text-primary decoration-accent hover:decoration-primary"
  } ${className}`;
  const inner = (
    <>
      {children}
      <Icon name="chevronRight" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

// Marco de navegador para mostrar pantallas de producto.
export function BrowserFrame({ src, alt, width, height, sizes, label, preload = false, className = "", tone = "light" }) {
  const bar = tone === "dark" ? "border-white/10 bg-primary" : "border-slate-200 bg-slate-100";
  const dot = tone === "dark" ? "bg-white/25" : "bg-slate-300";
  const pill = tone === "dark" ? "bg-white/10 text-slate-300" : "bg-white text-slate-500";
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-white shadow-[0_30px_70px_-25px_rgba(0,24,43,0.45)] ring-1 ring-slate-900/10 ${className}`}
    >
      <div aria-hidden="true" className={`flex items-center gap-1.5 border-b px-3 py-2 sm:px-4 sm:py-2.5 ${bar}`}>
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        {label ? (
          <span className={`ml-3 hidden truncate rounded-md px-3 py-0.5 text-xs font-medium sm:inline ${pill}`}>
            {label}
          </span>
        ) : null}
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        preload={preload}
        className="block h-auto w-full"
      />
    </div>
  );
}

// Marco de teléfono. ratio es el aspecto de la pantalla (ancho / alto).
export function PhoneFrame({ ratio = "9 / 19", className = "", children }) {
  return (
    <div
      className={`bg-[#06121c] p-[4%] shadow-[0_30px_60px_-20px_rgba(0,24,43,0.55)] ring-1 ring-white/10 ${className}`}
      style={{ borderRadius: "14% / 7.4%" }}
    >
      <div className="relative overflow-hidden bg-black" style={{ aspectRatio: ratio, borderRadius: "11% / 5.6%" }}>
        {children}
      </div>
    </div>
  );
}

// El SVG de Rocketbot trae mucho aire alrededor del dibujo (mismo recorte
// que usa landing-3). El dibujo ocupa x 195 a 2465 e y 349 a 609 del viewBox.
export function RocketbotLogo({ height = 30, tone = "light", className = "" }) {
  const s = height / 260;
  return (
    <span
      role="img"
      aria-label="Rocketbot"
      className={`relative block max-w-full overflow-hidden ${className}`}
      style={{ height, width: Math.round(2270 * s) }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={tone === "dark" ? "/images/rocketbotwhite.svg" : "/images/rocketbot.svg"}
        alt=""
        width={Math.round(2650 * s)}
        height={Math.round(956 * s)}
        className={`absolute max-w-none ${tone === "dark" ? "" : "brightness-0"}`}
        style={{
          width: 2650 * s,
          height: 956 * s,
          left: -195 * s,
          top: -349 * s,
        }}
      />
    </span>
  );
}
