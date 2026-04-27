import { ChevronRight, Landmark } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Badge, type BadgeTone } from '@/components/ui/Badge';
import { pickLocale } from '@/lib/i18n-helpers';
import type { Locale, Scheme, SchemeCategory } from '@/content/types';

const TONE: Record<SchemeCategory, BadgeTone> = {
  central: 'accent',
  state: 'success',
  panchayat: 'primary',
};

export function SchemeCard({
  scheme,
  locale,
  categoryLabel,
  readMoreLabel,
}: {
  scheme: Scheme;
  locale: Locale;
  categoryLabel: string;
  readMoreLabel: string;
}) {
  return (
    <article className="bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] p-5 hover:shadow-md transition flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center flex-shrink-0">
          <Landmark className="w-5 h-5 text-[var(--color-accent-strong)]" aria-hidden />
        </div>
        <div>
          <Badge tone={TONE[scheme.category]} className="mb-1.5">
            {categoryLabel}
          </Badge>
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)]">
            {pickLocale(scheme.title, locale)}
          </h3>
        </div>
      </div>
      <p className="text-sm text-[var(--color-ink-secondary)] mb-4 flex-1">
        {pickLocale(scheme.shortDescription, locale)}
      </p>
      <Link
        href={`/schemes/${scheme.slug}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-strong)] hover:text-[var(--color-accent-hover)] transition"
      >
        {readMoreLabel}
        <ChevronRight className="w-4 h-4" aria-hidden />
      </Link>
    </article>
  );
}
