"use client";

import { trackLanding } from "./track";

export default function CtaLink({ href = "#agenda", location, className, children, ...rest }) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackLanding("landing_cta_click", { location })}
      {...rest}
    >
      {children}
    </a>
  );
}
