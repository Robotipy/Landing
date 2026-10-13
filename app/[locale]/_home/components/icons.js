// Íconos de línea propios de la home principal (24x24, trazo redondeado).

const paths = {
  chat: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" />
      <path d="M8 8.5h8M8 11.5h5" />
    </>
  ),
  robot: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 4.5V8" />
      <circle cx="12" cy="3.5" r="1" />
      <circle cx="9.5" cy="13" r="1.1" />
      <circle cx="14.5" cy="13" r="1.1" />
      <path d="M10 16.2h4M3 12v3M21 12v3" />
    </>
  ),
  code: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18" />
      <path d="m10 11.5-2.5 2.5 2.5 2.5M14 11.5l2.5 2.5-2.5 2.5" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="m16 10.5 5-3v9l-5-3z" />
      <circle cx="9.5" cy="12" r="2.2" />
    </>
  ),
  pulse: <path d="M3 12h4l2.2-5 4.6 10 2.2-5h5" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevronLeft: <path d="m15 6-6 6 6 6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4h3.6A1.2 1.2 0 0 1 15 5.2V7M3 13h18" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="m9 15.5 2 2 4-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M16.5 14.2a5 5 0 0 1 5 5.8" />
    </>
  ),
  graduation: (
    <>
      <path d="m2 9 10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </>
  ),
  calculator: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8.5 11h0M12 11h0M15.5 11h0M8.5 14.5h0M12 14.5h0M15.5 14.5h0M8.5 18h0M12 18h0M15.5 18h0" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 3h6v3H9z" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  car: (
    <>
      <path d="m4.5 14 1.6-4.6A2 2 0 0 1 8 8h8a2 2 0 0 1 1.9 1.4l1.6 4.6" />
      <rect x="3" y="14" width="18" height="4.5" rx="1.2" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="16.5" cy="18.5" r="1.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.5l-1.8-5.9L4.5 10.8 10.2 9z" />
      <path d="M19 3v3M17.5 4.5h3" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 8.5V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 0 5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3.5a2.5 2.5 0 0 0 0-5z" />
      <path d="M14 6v12" strokeDasharray="2 2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.8" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name] || null}
    </svg>
  );
}
