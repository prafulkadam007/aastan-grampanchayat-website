import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Calendar, Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge, type BadgeTone } from '@/components/ui/Badge';
import { getNoticeBySlug, getNotices } from '@/content/repositories';
import { canonicalFor, alternatesFor, SITE_URL } from '@/lib/seo';
import { formatDate, pickLocale } from '@/lib/i18n-helpers';
import type { Locale, NoticeCategory } from '@/content/types';

const TONE: Record<NoticeCategory, BadgeTone> = {
  important: 'danger',
  scheme: 'success',
  general: 'primary',
  meeting: 'primary',
  tender: 'accent',
};

export async function generateStaticParams() {
  const notices = await getNotices();
  return notices.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const notice = await getNoticeBySlug(slug);
  if (!notice) return {};
  const path = `/notices/${slug}`;
  return {
    title: pickLocale(notice.title, locale),
    description: pickLocale(notice.summary, locale),
    alternates: { canonical: canonicalFor(locale, path), ...alternatesFor(path) },
  };
}

export default async function NoticeDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const notice = await getNoticeBySlug(slug);
  if (!notice) notFound();

  const t = await getTranslations({ locale, namespace: 'notices' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: pickLocale(notice.title, locale),
    description: pickLocale(notice.summary, locale),
    datePublished: notice.publishedAt,
    inLanguage: locale === 'mr' ? 'mr-IN' : 'en-IN',
    url: `${SITE_URL}/${locale}/notices/${slug}`,
  };

  return (
    <Container className="py-10 sm:py-14 max-w-3xl">
      <Breadcrumbs
        items={[
          { label: tNav('home'), href: '/' },
          { label: tNav('notices'), href: '/notices' },
          { label: pickLocale(notice.title, locale) },
        ]}
      />
      <article>
        <div className="flex items-center gap-2 mb-3">
          <Badge tone={TONE[notice.category]}>{t(`categories.${notice.category}`)}</Badge>
          <span className="inline-flex items-center gap-1 text-sm text-[var(--color-ink-secondary)]">
            <Calendar className="w-4 h-4" aria-hidden />
            {formatDate(notice.publishedAt, locale)}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
          {pickLocale(notice.title, locale)}
        </h1>
        <p className="text-lg text-[var(--color-ink-secondary)] mb-6">{pickLocale(notice.summary, locale)}</p>
        <div className="prose max-w-none text-[var(--color-ink)] whitespace-pre-line">
          {pickLocale(notice.body, locale)}
        </div>
        {notice.attachments && notice.attachments.length > 0 ? (
          <section className="mt-8" aria-labelledby="attachments">
            <h2 id="attachments" className="text-lg font-semibold text-[var(--color-primary)] mb-3">
              {t('attachments')}
            </h2>
            <ul className="space-y-2">
              {notice.attachments.map((a, idx) => (
                <li key={idx}>
                  <a
                    href={a.href}
                    className="inline-flex items-center gap-2 text-[var(--color-accent-strong)] hover:text-[var(--color-accent-hover)]"
                  >
                    <Download className="w-4 h-4" aria-hidden />
                    {pickLocale(a.label, locale)}
                    {a.sizeKB ? <span className="text-sm text-[var(--color-ink-muted)]">({a.sizeKB} KB)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>
      <p className="mt-8 text-sm text-[var(--color-ink-muted)]">
        {tCommon('lastUpdated')}: {formatDate(notice.publishedAt, locale)}
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Container>
  );
}
