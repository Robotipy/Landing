"use client";

import { useEffect, useState } from "react";

// Barra fija de progreso de lectura (relleno accent) en la parte superior.
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      const pct = Math.min(
        100,
        Math.max(0, ((doc.scrollTop || window.scrollY) / max) * 100)
      );
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-white/10">
      <div
        className="h-full bg-accent transition-[width] duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
