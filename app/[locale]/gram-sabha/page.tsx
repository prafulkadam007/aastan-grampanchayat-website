import type { Metadata } from 'next';
import { Calendar, Download, Users } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { getMeetings } from '@/content/repositories';
import { buildMetadata } from '@/lib/seo';
import { formatDate, localizeNumber, pickLocale } from '@/lib/i18n-helpers';
import type { Locale } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/gram-sabha',
    namespace: 'meta.gramSabha',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function GramSabhaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'gramSabha' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const meetings = await getMeetings();

  return (
    <Container className="py-10 sm:py-14 max-w-4xl">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('gramSabha') }]} />
      <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />

      <div className="space-y-6">
        {meetings.map((meeting) => (
          <article
            key={meeting.id}
            className="bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] p-6"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Badge tone="primary">{t(`meetingTypes.${meeting.type}`)}</Badge>
              <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-secondary)]">
                <Calendar className="w-4 h-4" aria-hidden />
                {formatDate(meeting.date, locale)}
              </span>
              {meeting.attendees ? (
                <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-ink-secondary)]">
                  <Users className="w-4 h-4" aria-hidden />
                  {localizeNumber(meeting.attendees, locale)}
                </span>
              ) : null}
            </div>
            <h2 className="text-xl font-bold text-[var(--color-primary)] mb-3">
              {pickLocale(meeting.title, locale)}
            </h2>
            <h3 className="text-sm font-semibold text-[var(--color-ink-muted)] uppercase mb-2">{t('agenda')}</h3>
            <ul className="list-disc pl-5 space-y-1 text-[var(--color-ink)] mb-4">
              {pickLocale(meeting.agenda, locale).map((a, idx) => (
                <li key={idx}>{a}</li>
              ))}
            </ul>
            {meeting.resolutions && meeting.resolutions[locale]?.length ? (
              <>
                <h3 className="text-sm font-semibold text-[var(--color-ink-muted)] uppercase mb-2">
                  {t('resolutions')}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-[var(--color-ink)] mb-4">
                  {pickLocale(meeting.resolutions, locale).map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </>
            ) : null}
            {meeting.minutesPdf ? (
              <a
                href={meeting.minutesPdf}
                className="inline-flex items-center gap-2 text-[var(--color-accent-strong)] hover:text-[var(--color-accent-hover)] font-semibold"
              >
                <Download className="w-4 h-4" aria-hidden />
                {t('minutes')}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Container>
  );
}
