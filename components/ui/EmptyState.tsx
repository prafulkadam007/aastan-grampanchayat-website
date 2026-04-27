import { FileText } from 'lucide-react';
import type { ReactNode } from 'react';

export function EmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="text-center py-12 px-4 border border-dashed border-[var(--color-border)] rounded-xl bg-[var(--color-card-soft)]">
      <div className="mx-auto w-12 h-12 rounded-full bg-[var(--color-card)] flex items-center justify-center mb-3">
        {icon ?? <FileText className="w-6 h-6 text-[var(--color-ink-muted)]" aria-hidden />}
      </div>
      <p className="text-base font-semibold text-[var(--color-ink)]">{title}</p>
      {description ? <p className="text-sm text-[var(--color-ink-secondary)] mt-1">{description}</p> : null}
    </div>
  );
}
