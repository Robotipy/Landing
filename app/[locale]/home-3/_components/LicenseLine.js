"use client";

import { useLicense } from "./LicenseProvider";

// Los tres textos llegan armados desde PriceLadder con los montos de prices.
export default function LicenseLine({ unanswered, withoutLicense, withLicense }) {
  const { license } = useLicense();
  const text = license === "si" ? withLicense : license === "no" ? withoutLicense : unanswered;

  return (
    <p
      aria-live="polite"
      className="rounded-lg border border-[#CFE3E3] bg-white px-3 py-2 text-sm leading-5 text-[#0A2540]"
    >
      {text}
    </p>
  );
}
