export const container = "mx-auto w-full max-w-6xl px-4 md:px-8";

// Texto blanco sobre acento da 3,6:1: solo cumple AA como texto grande,
// por eso los botones van a 19 px en peso 700.
export const btnPrimary =
  "inline-flex min-h-[52px] items-center justify-center rounded-[10px] bg-accent px-6 py-3 text-center text-[19px] font-bold leading-tight text-white transition hover:brightness-90";

export const textMuted = "text-[#4B5563]";
export const line = "border-[#E3E8EE]";

export function Eyebrow({ children, dark = false, center = false }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] ${
        center ? "justify-center" : ""
      } ${dark ? "text-accent" : "text-[#0A2540]"}`}
    >
      <span aria-hidden="true" className="h-0.5 w-6 shrink-0 bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeader({ eyebrow, title, body, dark = false, center = false, titleId }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow dark={dark} center={center}>
        {eyebrow}
      </Eyebrow>
      <h2
        id={titleId}
        className={`mt-4 text-[28px] font-bold leading-[36px] tracking-tight [text-wrap:balance] md:text-[32px] md:leading-[40px] ${
          dark ? "text-white" : "text-[#0A2540]"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-4 text-base leading-[26px] ${
            dark ? "text-white/75" : textMuted
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}

export function CheckIcon({ className = "text-[#00182B]" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`mt-[5px] h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

export function CheckList({ items, iconClassName, className = "" }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-6">
          <CheckIcon className={iconClassName} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
