import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as = 'h2',
}: SectionHeadingProps) {
  const Heading = as;
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`mb-8 sm:mb-12 ${alignment} max-w-3xl`}>
      {eyebrow ? (
        <div className="inline-block bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3">
          {eyebrow}
        </div>
      ) : null}
      <Heading className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-3">
        {title}
      </Heading>
      {subtitle ? <p className="text-base sm:text-lg text-[var(--color-ink-secondary)]">{subtitle}</p> : null}
    </div>
  );
}
