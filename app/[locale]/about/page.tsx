import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getVillage } from '@/content/repositories';
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
    path: '/about',
    namespace: 'meta.about',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'about' });
  const tInfo = await getTranslations({ locale, namespace: 'info' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const village = await getVillage();

  const facts: Array<{ label: string; value: string }> = [
    { label: tInfo('established'), value: formatDate(village.established, locale) },
    {
      label: tInfo('area'),
      value: tInfo('areaValue'),
    },
    {
      label: tInfo('anganwadi'),
      value: localizeNumber(village.anganwadiCount, locale),
    },
    {
      label: tInfo('schools'),
      value: localizeNumber(village.govtSchoolCount, locale),
    },
    {
      label: tInfo('privateSchools'),
      value: localizeNumber(village.privateSchoolCount, locale),
    },
  ];

  return (
    <Container className="py-10 sm:py-14 max-w-4xl">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('about') }]} />
      <SectionHeading
        title={`${t('title')} — ${pickLocale(village.shortName, locale)}`}
        subtitle={t('subtitle')}
        align="left"
        as="h1"
      />
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {facts.map((f, idx) => (
          <div key={idx} className="bg-[var(--color-card)] rounded-xl shadow-sm border border-[var(--color-border-soft)] p-5">
            <dt className="text-sm font-semibold text-[var(--color-ink-muted)] mb-1">{f.label}</dt>
            <dd className="text-lg text-[var(--color-primary)] font-semibold">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
