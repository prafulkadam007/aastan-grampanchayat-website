import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SchemeCard } from '@/components/cards/SchemeCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getSchemes } from '@/content/repositories';
import { buildMetadata } from '@/lib/seo';
import type { Locale } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/schemes',
    namespace: 'meta.schemes',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function SchemesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'schemes' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const schemes = await getSchemes();

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('schemes') }]} />
      <Reveal>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schemes.map((s, idx) => (
          <Reveal key={s.id} delay={idx * 120}>
            <SchemeCard
              scheme={s}
              locale={locale}
              categoryLabel={t(`categories.${s.category}`)}
              readMoreLabel={tCommon('readMore')}
            />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
