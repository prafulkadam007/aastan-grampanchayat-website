'use client';

import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function StickyCallBar({
  phone,
  label,
}: {
  phone: string;
  label: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 220);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 px-3 pb-3 pt-2 pointer-events-none transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <a
        href={`tel:${phone}`}
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-strong)] text-white px-5 py-4 rounded-full font-bold text-base shadow-xl shadow-[rgba(194,65,12,0.25)] touch-target"
      >
        <Phone className="w-5 h-5" aria-hidden />
        <span>{label}</span>
      </a>
    </div>
  );
}
