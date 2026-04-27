import Image from 'next/image';
import { Calendar, IndianRupee } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Badge, type BadgeTone } from '@/components/ui/Badge';
import { formatINR, pickLocale } from '@/lib/i18n-helpers';
import type { Locale, Work, WorkStatus } from '@/content/types';

const STATUS_TONE: Record<WorkStatus, BadgeTone> = {
  completed: 'success',
  'in-progress': 'accent',
  planned: 'primary',
};

export function WorkCard({
  work,
  locale,
  statusLabel,
}: {
  work: Work;
  locale: Locale;
  statusLabel: string;
}) {
  const cover = work.images[0];
  return (
    <article className="bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] overflow-hidden hover:shadow-md transition flex flex-col">
      <Link
        href={`/works`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
      >
        {cover ? (
          <div className="relative h-48 sm:h-56">
            <Image
              src={cover.src}
              alt={pickLocale(cover.alt, locale)}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : null}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Badge tone={STATUS_TONE[work.status]}>{statusLabel}</Badge>
            <span className="text-xs text-[var(--color-ink-muted)]">{pickLocale(work.category, locale)}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)] mb-2">
            {pickLocale(work.title, locale)}
          </h3>
          <p className="text-sm text-[var(--color-ink-secondary)] line-clamp-2 mb-3 flex-1">
            {pickLocale(work.description, locale)}
          </p>
          <div className="flex items-center justify-between text-xs text-[var(--color-ink-muted)]">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" aria-hidden /> {work.year}
            </span>
            {work.budgetINR ? (
              <span className="inline-flex items-center gap-1">
                <IndianRupee className="w-3.5 h-3.5" aria-hidden /> {formatINR(work.budgetINR, locale)}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
