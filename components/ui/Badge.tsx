import type { ReactNode } from 'react';

export type BadgeTone = 'primary' | 'accent' | 'success' | 'danger' | 'muted';

const TONE_CLASSES: Record<BadgeTone, string> = {
  primary: 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]',
  accent: 'bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]',
  success: 'bg-[var(--color-success-soft)] text-[var(--color-success)]',
  danger: 'bg-[var(--color-danger-soft)] text-[var(--color-danger)]',
  muted: 'bg-[var(--color-card-soft)] text-[var(--color-ink-secondary)]',
};

export function Badge({
  children,
  tone = 'muted',
  className = '',
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
