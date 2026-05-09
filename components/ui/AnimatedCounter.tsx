'use client';

import { useEffect, useRef, useState } from 'react';
import { localizeNumber } from '@/lib/i18n-helpers';
import type { Locale } from '@/content/types';

interface AnimatedCounterProps {
  value: number;
  locale: Locale;
  durationMs?: number;
}

export function AnimatedCounter({ value, locale, durationMs = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let started = false;
    let rafId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setDisplay(value);
          return;
        }

        const startTime = performance.now();
        const tick = (now: number) => {
          const elapsed = now - startTime;
          const t = Math.min(1, elapsed / durationMs);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(value * eased));
          if (t < 1) rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, durationMs]);

  return <span ref={ref}>{localizeNumber(display, locale)}</span>;
}
