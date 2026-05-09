'use client';

import { useEffect, useRef, useState } from 'react';

type RevealVariant = 'fade-up' | 'scale-fade';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  variant?: RevealVariant;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  variant = 'fade-up',
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          rafId = requestAnimationFrame(() => {
            rafId = requestAnimationFrame(() => setVisible(true));
          });
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const baseClass = variant === 'scale-fade' ? 'reveal-scale' : 'reveal';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
