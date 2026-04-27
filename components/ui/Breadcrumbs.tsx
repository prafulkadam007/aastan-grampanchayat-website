import { ChevronRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-ink-secondary)] mb-4">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              {idx > 0 ? <ChevronRight className="w-3.5 h-3.5 text-[var(--color-ink-muted)]" aria-hidden /> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-[var(--color-accent-strong)] underline-offset-2 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={isLast ? 'text-[var(--color-primary)] font-medium' : ''}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
