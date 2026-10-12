"use client";

import { trackLanding } from "./track";
import { Chevron } from "./ui";

// "Ver N casos más" dentro de un panel de sector, con su evento de GA.
export default function MoreCasesDetails({ slug, count, children }) {
  return (
    <details
      className="group/more-cases"
      onToggle={(e) => {
        if (e.currentTarget.open) trackLanding("landing_case_more", { industria: slug });
      }}
    >
      <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 text-sm font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 [&::-webkit-details-marker]:hidden">
        Ver {count} {count === 1 ? "caso más" : "casos más"}
        <Chevron className="h-4 w-4 group-open/more-cases:rotate-180" />
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
