'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar, IndianRupee } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface CarouselSlide {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  statusLabel: string;
  statusTone: 'completed' | 'in-progress' | 'planned';
  budget?: string;
  year: number;
}

const STATUS_BG: Record<CarouselSlide['statusTone'], string> = {
  completed: 'bg-[var(--color-success)]',
  'in-progress': 'bg-[var(--color-accent)]',
  planned: 'bg-[var(--color-primary)]',
};

export function WorksCarousel({
  slides,
  prevLabel,
  nextLabel,
}: {
  slides: CarouselSlide[];
  prevLabel: string;
  nextLabel: string;
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  if (slides.length === 0) return null;

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative max-w-6xl mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label="Development works"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[var(--color-border)]">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={idx !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 60vw"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <span
                  className={`inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 text-white ${STATUS_BG[slide.statusTone]}`}
                >
                  {slide.statusLabel}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-3 line-clamp-2 sm:line-clamp-none">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" aria-hidden />
                    {slide.year}
                  </span>
                  {slide.budget ? (
                    <span className="inline-flex items-center gap-1.5">
                      <IndianRupee className="w-4 h-4" aria-hidden />
                      {slide.budget}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[var(--color-primary)] p-3 rounded-full shadow-lg transition touch-target"
          aria-label={prevLabel}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[var(--color-primary)] p-3 rounded-full shadow-lg transition touch-target"
          aria-label={nextLabel}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`transition-all rounded-full ${
              idx === current
                ? 'w-10 h-3 bg-[var(--color-accent)]'
                : 'w-3 h-3 bg-[var(--color-border)] hover:bg-[var(--color-ink-muted)]'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === current ? 'true' : undefined}
          />
        ))}
      </div>
      <p aria-live="polite" className="text-center mt-3 text-sm text-[var(--color-ink-secondary)]">
        {current + 1} / {slides.length}
      </p>
    </div>
  );
}
