"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

export default function StoriesCarousel({ stories }) {
  const [index, setIndex] = useState(0);
  const touchX = useRef(null);
  const total = stories.length;
  if (!total) return null;

  const go = (step) => setIndex((value) => (value + step + total) % total);
  const story = stories[index];
  const { figure } = story;

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  };

  const onTouchStart = (event) => {
    touchX.current = event.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (event) => {
    if (touchX.current === null) return;
    const dx = (event.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const navBtn =
    "grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-primary/15 bg-white text-primary transition hover:border-accent hover:bg-accent hover:text-white";

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label="Historias de clientes"
      onKeyDown={onKeyDown}
    >
      <div aria-live="polite" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <article
          key={story.id}
          aria-roledescription="historia"
          aria-label={`Historia ${index + 1} de ${total}: ${story.sector}`}
          className="grid animate-opacity overflow-hidden rounded-[32px] bg-[#F4F6F7] lg:grid-cols-2"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[540px]">
            <Image
              src={story.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: story.position }}
            />
            <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-base font-bold text-primary shadow-lg md:text-lg">
              {story.sector}
            </span>
          </div>

          <div className="flex flex-col p-6 sm:p-9 lg:p-12">
            <p className="text-base font-bold text-[#027776] md:text-lg">{story.tag}</p>
            <h3 className="mt-2 text-[28px] font-extrabold leading-tight text-primary md:text-[34px]">{story.title}</h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl bg-white p-5">
                <p className="inline-flex items-center gap-2 text-base font-bold text-[#3B4A57] md:text-lg">
                  <Icon name="clock" className="h-5 w-5" />
                  Antes
                </p>
                <p className="mt-2 text-lg leading-relaxed text-primary">{story.before}</p>
              </div>
              <div className="rounded-2xl bg-white p-5 ring-2 ring-accent/40">
                <p className="inline-flex items-center gap-2 text-base font-bold text-[#027776] md:text-lg">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
                  Ahora
                </p>
                <p className="mt-2 text-lg leading-relaxed text-primary">{story.after}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-end gap-x-5 gap-y-2 border-t border-primary/10 pt-7">
              <p className="text-primary">
                {figure.prefix && <span className="block text-lg font-semibold">{figure.prefix}</span>}
                <span className="block text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
                  {figure.value}
                </span>
              </p>
              <p className="max-w-xs pb-1 text-lg font-semibold leading-snug text-primary">
                {figure.label}
                {figure.detail && <span className="block font-normal text-[#3B4A57]">{figure.detail}</span>}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button type="button" onClick={() => go(-1)} className={navBtn} aria-label="Historia anterior">
          <Icon name="left" className="h-7 w-7" />
        </button>
        <div className="flex min-w-0 flex-col items-center gap-3">
          <div className="hidden flex-wrap justify-center gap-1 sm:flex">
            {stories.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver historia ${i + 1}: ${item.sector}`}
                aria-current={i === index ? "true" : undefined}
                className="grid h-8 w-8 place-items-center rounded-full"
              >
                <span
                  className={`block h-3 rounded-full transition-all ${
                    i === index ? "w-7 bg-accent" : "w-3 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="text-base font-semibold text-[#3B4A57] md:text-lg">
            Historia {index + 1} de {total}
          </p>
        </div>
        <button type="button" onClick={() => go(1)} className={navBtn} aria-label="Historia siguiente">
          <Icon name="right" className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
}
