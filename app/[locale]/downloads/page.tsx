import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { DownloadCard } from '@/components/cards/DownloadCard';
import { getDownloads } from '@/content/repositories';
import { buildMetadata } from '@/lib/seo';
import type { DownloadCategory, Locale } from '@/content/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: '/downloads',
    namespace: 'meta.downloads',
    titleKey: 'title',
    descriptionKey: 'description',
  });
}

const CATEGORIES: DownloadCategory[] = ['form', 'report', 'circular', 'other'];

export default async function DownloadsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'downloads' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const all = await getDownloads();

  return (
    <Container className="py-10 sm:py-14 max-w-5xl">
      <Breadcrumbs items={[{ label: tNav('home'), href: '/' }, { label: tNav('downloads') }]} />
      <SectionHeading title={t('title')} subtitle={t('subtitle')} align="left" as="h1" />

      <div className="space-y-10">
        {CATEGORIES.map((cat) => {
          const items = all.filter((d) => d.category === cat);
          if (items.length === 0) return null;
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`}>
              <h2 id={`cat-${cat}`} className="text-xl font-bold text-[var(--color-primary)] mb-4">
                {t(`categories.${cat}`)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((d) => (
                  <DownloadCard
                    key={d.id}
                    item={d}
                    locale={locale}
                    downloadLabel={tCommon('download')}
                    updatedLabel={t('lastUpdated')}
                    sizeLabel={t('fileSize')}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
