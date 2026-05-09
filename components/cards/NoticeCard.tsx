import { AlertCircle, Bell, Calendar, FileText } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from '@/i18n/routing';
import { Badge, type BadgeTone } from '@/components/ui/Badge';
import { formatDate, pickLocale } from '@/lib/i18n-helpers';
import type { Locale, Notice, NoticeCategory } from '@/content/types';

const TONE: Record<NoticeCategory, BadgeTone> = {
  important: 'danger',
  scheme: 'success',
  general: 'primary',
  meeting: 'primary',
  tender: 'accent',
};

const ICONS: Record<NoticeCategory, ReactNode> = {
  important: <AlertCircle className="w-4 h-4" aria-hidden />,
  scheme: <FileText className="w-4 h-4" aria-hidden />,
  general: <Bell className="w-4 h-4" aria-hidden />,
  meeting: <Calendar className="w-4 h-4" aria-hidden />,
  tender: <FileText className="w-4 h-4" aria-hidden />,
};

const BORDER: Record<NoticeCategory, string> = {
  important: 'border-l-[var(--color-danger)]',
  scheme: 'border-l-[var(--color-success)]',
  general: 'border-l-[var(--color-primary)]',
  meeting: 'border-l-[var(--color-primary)]',
  tender: 'border-l-[var(--color-accent)]',
};

export function NoticeCard({
  notice,
  locale,
  categoryLabel,
}: {
  notice: Notice;
  locale: Locale;
  categoryLabel: string;
}) {
  return (
    <article
      className={`bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] border-l-4 ${BORDER[notice.category]} lift-on-hover`}
    >
      <Link
        href={`/notices/${notice.slug}`}
        className="block p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xl"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-card-soft)] text-[var(--color-primary)]">
              {ICONS[notice.category]}
            </span>
            <Badge tone={TONE[notice.category]}>{categoryLabel}</Badge>
          </div>
          <Calendar className="w-4 h-4 text-[var(--color-ink-muted)] flex-shrink-0" aria-hidden />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-[var(--color-ink)] mb-2">
          {pickLocale(notice.title, locale)}
        </h3>
        <p className="text-[var(--color-ink-secondary)] text-sm mb-3 line-clamp-3">
          {pickLocale(notice.summary, locale)}
        </p>
        <p className="text-xs text-[var(--color-ink-muted)]">{formatDate(notice.publishedAt, locale)}</p>
      </Link>
    </article>
  );
}
