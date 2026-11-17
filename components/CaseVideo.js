"use client";

import { useState } from "react";

// Video de YouTube que se reproduce dentro de la página. Muestra la portada y
// carga el reproductor solo al hacer clic (más liviano y sin cookies previas).
export default function CaseVideo({ youtubeId, title, poster, playLeft = "50%", corner = false }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-black ${corner ? "" : "rounded-2xl shadow-2xl ring-1 ring-white/10"}`}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir el video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
          <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
          <span style={corner ? undefined : { left: playLeft }} className={`absolute flex items-center justify-center rounded-full bg-[#039695] shadow-xl transition group-hover:scale-110 ${corner ? "bottom-3 right-3 h-12 w-12" : "top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 sm:h-20 sm:w-20"}`}>
            <svg viewBox="0 0 24 24" className={`ml-1 text-[#00182B] ${corner ? "h-6 w-6" : "h-9 w-9"}`} aria-hidden="true">
              <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
