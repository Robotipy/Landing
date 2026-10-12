"use client";

import { useEffect } from "react";
import { trackHome } from "./track";

export default function ViewTracker() {
  useEffect(() => {
    trackHome("landing_view");
  }, []);
  return null;
}
