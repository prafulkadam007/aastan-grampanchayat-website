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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
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
