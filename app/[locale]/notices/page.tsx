import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { NoticeCard } from '@/components/cards/NoticeCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getNotices } from '@/content/repositories';
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
    path: '/notices',
    namespace: 'meta.notices',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

export default async function NoticesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'notices' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const notices = await getNotices();

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('notices') }]} />
      <Reveal>
        <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />
      </Reveal>
      {notices.length === 0 ? (
        <Reveal>
          <EmptyState title={t('noNotices')} />
        </Reveal>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {notices.map((n, idx) => (
            <Reveal key={n.id} delay={idx * 120}>
              <NoticeCard
                notice={n}
                locale={locale}
                categoryLabel={t(`categories.${n.category}`)}
              />
            </Reveal>
          ))}
        </div>
      )}
    </Container>
  );
}
