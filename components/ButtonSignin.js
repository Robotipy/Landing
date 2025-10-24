"use client";

import Link from "next/link";

// Simple contact button - no authentication required
const ButtonSignin = ({ text = "Contáctanos", extraStyle }) => {
  return (
    <Link href="/contact-us" className={`btn ${extraStyle ? extraStyle : ""}`}>
      {text}
    </Link>
  );
};

export default ButtonSignin;
