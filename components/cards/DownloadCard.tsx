import { Download, FileText } from 'lucide-react';
import { formatDate, pickLocale } from '@/lib/i18n-helpers';
import type { DownloadItem, Locale } from '@/content/types';

export function DownloadCard({
  item,
  locale,
  downloadLabel,
  updatedLabel,
  sizeLabel,
}: {
  item: DownloadItem;
  locale: Locale;
  downloadLabel: string;
  updatedLabel: string;
  sizeLabel: string;
}) {
  return (
    <a
      href={item.href}
      className="flex items-start gap-4 p-5 bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] lift-on-hover"
    >
      <div className="w-12 h-12 rounded-md bg-[var(--color-accent-soft)] flex items-center justify-center flex-shrink-0">
        <FileText className="w-6 h-6 text-[var(--color-accent-strong)]" aria-hidden />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-[var(--color-primary)] mb-1">
          {pickLocale(item.title, locale)}
        </h3>
        {item.description ? (
          <p className="text-sm text-[var(--color-ink-secondary)] mb-2">{pickLocale(item.description, locale)}</p>
        ) : null}
        <div className="text-xs text-[var(--color-ink-muted)] flex flex-wrap gap-x-4 gap-y-1">
          <span>
            {updatedLabel}: {formatDate(item.updatedAt, locale)}
          </span>
          {item.sizeKB > 0 ? (
            <span>
              {sizeLabel}: {item.sizeKB} KB
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex-shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-strong)]">
        <Download className="w-4 h-4" aria-hidden />
        <span className="hidden sm:inline">{downloadLabel}</span>
      </div>
    </a>
  );
}
