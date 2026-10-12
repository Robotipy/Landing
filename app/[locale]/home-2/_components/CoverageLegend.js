"use client";

import { useEffect, useState } from "react";

// Leyenda del mapa: escucha por delegación el paso del cursor y el foco sobre
// las celdas (data-legend) y escribe su texto. También marca la fila y la
// columna de la celda activa para leer el cruce de un vistazo.
export default function CoverageLegend({ tableId, defaultText }) {
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    const table = document.getElementById(tableId);
    if (!table) return undefined;

    const clearHeads = () => {
      table.querySelectorAll(".h2-head-on").forEach((el) => el.classList.remove("h2-head-on"));
    };

    const show = (event) => {
      const cell = event.target instanceof Element ? event.target.closest("[data-legend]") : null;
      if (!cell || !table.contains(cell)) return;
      setText(cell.getAttribute("data-legend"));
      clearHeads();
      const row = cell.getAttribute("data-row");
      const col = cell.getAttribute("data-col");
      if (row) table.querySelector(`[data-row-head="${row}"]`)?.classList.add("h2-head-on");
      if (col) table.querySelector(`[data-col-head="${col}"]`)?.classList.add("h2-head-on");
    };

    const reset = () => {
      clearHeads();
      setText(defaultText);
    };

    const leaveFocus = (event) => {
      if (!table.contains(event.relatedTarget)) clearHeads();
    };

    table.addEventListener("mouseover", show);
    table.addEventListener("focusin", show);
    table.addEventListener("mouseleave", reset);
    table.addEventListener("focusout", leaveFocus);
    return () => {
      table.removeEventListener("mouseover", show);
      table.removeEventListener("focusin", show);
      table.removeEventListener("mouseleave", reset);
      table.removeEventListener("focusout", leaveFocus);
    };
  }, [tableId, defaultText]);

  // aria-hidden: cada celda ya lleva el mismo texto en su aria-label; con
  // aria-live el lector lo anunciaría dos veces al recorrer el mapa con Tab.
  return (
    <p
      aria-hidden="true"
      className="h2-mono h2-text mt-4 min-h-[2.5rem] border-t h2-line pt-3 text-xs leading-5"
    >
      {text}
    </p>
  );
}
