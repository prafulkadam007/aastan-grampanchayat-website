import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { WorkCard } from '@/components/cards/WorkCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getWorks } from '@/content/repositories';
import { buildMetadata } from '@/lib/seo';
import type { Locale, WorkStatus } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/works',
    namespace: 'meta.works',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

const STATUS_KEY: Record<WorkStatus, 'completed' | 'inProgress' | 'planned'> = {
  completed: 'completed',
  'in-progress': 'inProgress',
  planned: 'planned',
};

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'works' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const works = await getWorks();

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('works') }]} />
      <Reveal>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((w, idx) => (
          <Reveal key={w.id} delay={idx * 120}>
            <WorkCard work={w} locale={locale} statusLabel={t(STATUS_KEY[w.status])} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
