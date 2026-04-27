import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getCharter } from '@/content/repositories';
import { buildMetadata } from '@/lib/seo';
import { pickLocale } from '@/lib/i18n-helpers';
import type { Locale } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/charter',
    namespace: 'meta.charter',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function CharterPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'charter' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const items = await getCharter();

  return (
    <Container className="py-10 sm:py-14 max-w-5xl">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('charter') }]} />
      <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />
      <div className="overflow-x-auto bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)]">
        <table className="w-full text-sm sm:text-base">
          <caption className="sr-only">{t('title')}</caption>
          <thead className="bg-[var(--color-card-soft)] text-left">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold text-[var(--color-primary)]">
                {t('service')}
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-[var(--color-primary)]">
                {t('officer')}
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-[var(--color-primary)]">
                {t('timeline')}
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-[var(--color-primary)]">
                {t('fee')}
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((c) => (
              <tr key={c.id} className="border-t border-[var(--color-border-soft)]">
                <td className="px-4 py-3 text-[var(--color-ink)] font-medium">
                  {pickLocale(c.service, locale)}
                </td>
                <td className="px-4 py-3 text-[var(--color-ink-secondary)]">{pickLocale(c.responsibleOfficer, locale)}</td>
                <td className="px-4 py-3 text-[var(--color-ink-secondary)]">{pickLocale(c.timeline, locale)}</td>
                <td className="px-4 py-3 text-[var(--color-ink-secondary)]">
                  {c.fee ? pickLocale(c.fee, locale) : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
